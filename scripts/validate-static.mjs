import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "out");
const siteUrl = "https://opensourceadobe.com";
const routes = [
  "/",
  "/apps/",
  "/vs-adobe/",
  "/download/",
  "/tutorials/",
  "/faq/",
  "/apps/photocraft/",
  "/apps/vectorcraft/",
  "/apps/filmcraft/",
  "/apps/lightcraft/",
  "/apps/pdfcraft/",
  "/about/",
  "/contact/",
  "/disclaimer/",
  "/privacy/",
  "/alternatives/",
  "/alternatives/photoshop/",
  "/alternatives/lightroom/",
  "/github/",
  "/updates/",
];
for (const entry of await readdir(join(outputDirectory, "updates"), { withFileTypes: true })) {
  if (entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name)) routes.push(`/updates/${entry.name}/`);
}

const expectAnalytics = process.env.EXPECT_GA === "1";
const expectIndexing = process.env.EXPECT_INDEXING === "1";
const titles = new Set();
const canonicals = new Set();
const failures = [];

function capture(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function routeFile(route) {
  return route === "/" ? join(outputDirectory, "index.html") : join(outputDirectory, route, "index.html");
}

for (const route of routes) {
  const path = routeFile(route);
  try {
    await stat(path);
  } catch {
    failures.push(`${route}: missing ${path}`);
    continue;
  }

  const html = await readFile(path, "utf8");
  const title = capture(html, /<title>([^<]+)<\/title>/i);
  const description = capture(html, /<meta name="description" content="([^"]+)"/i);
  const canonical = capture(html, /<link rel="canonical" href="([^"]+)"/i);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const gaScriptCount = (html.match(/googletagmanager\.com\/gtag\/js\?id=G-KRT8VCTFXX/g) ?? []).length;
  const robots = capture(html, /<meta name="robots" content="([^"]+)"/i);
  const expectedCanonical = `${siteUrl}${route}`;

  if (!title) failures.push(`${route}: missing title`);
  if (!description) failures.push(`${route}: missing meta description`);
  const ogTitle = capture(html, /<meta property="og:title" content="([^"]+)"/i);
  const ogDescription = capture(html, /<meta property="og:description" content="([^"]+)"/i);
  const ogImage = capture(html, /<meta property="og:image" content="([^"]+)"/i);
  const twitterImage = capture(html, /<meta name="twitter:image" content="([^"]+)"/i);
  if (ogTitle !== title) failures.push(`${route}: og:title differs from the page title`);
  if (ogDescription !== description) failures.push(`${route}: og:description differs from the page description`);
  if (!ogImage.startsWith(`${siteUrl}/images/og/`) || twitterImage !== ogImage) failures.push(`${route}: missing or inconsistent OG/Twitter image`);
  if (capture(html, /<meta property="og:image:width" content="([^"]+)"/i) !== "1200" || capture(html, /<meta property="og:image:height" content="([^"]+)"/i) !== "630") failures.push(`${route}: share image dimensions must be 1200×630`);
  if (!capture(html, /<meta property="og:image:alt" content="([^"]+)"/i)) failures.push(`${route}: missing social image alt text`);
  if (capture(html, /<meta name="twitter:card" content="([^"]+)"/i) !== "summary_large_image") failures.push(`${route}: missing large Twitter card`);
  if (ogImage.startsWith(siteUrl)) {
    try {
      const png = await readFile(join(outputDirectory, new URL(ogImage).pathname));
      if (png.toString("hex", 0, 8) !== "89504e470d0a1a0a" || png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630) failures.push(`${route}: share PNG is not 1200×630`);
    } catch { failures.push(`${route}: share image file is unavailable`); }
  }
  const bodyDate = capture(html, /<time[^>]*datetime="([^"]+)"[^>]*data-page-updated/i);
  const footerDate = capture(html, /<time[^>]*datetime="([^"]+)"[^>]*data-footer-updated/i);
  if (!bodyDate || footerDate !== bodyDate) failures.push(`${route}: body and footer editorial dates differ or are missing`);
  if (canonical !== expectedCanonical) failures.push(`${route}: canonical is ${canonical || "missing"}; expected ${expectedCanonical}`);
  if (h1Count !== 1) failures.push(`${route}: expected one H1, found ${h1Count}`);
  if (!/Sources/.test(html)) failures.push(`${route}: missing visible Sources section`);
  if (!/Last (updated|verified)|Effective:/.test(html)) failures.push(`${route}: missing update or verification date`);
  if (!/BreadcrumbList/.test(html)) failures.push(`${route}: missing BreadcrumbList structured data`);
  if (/Lorem ipsum|\[VERIFY\]|\bTODO\b|\bTBD\b/i.test(html)) failures.push(`${route}: contains internal editorial or placeholder copy`);
  if (/PrintCraft/.test(html)) failures.push(`${route}: contains an unlisted app name`);
  if (expectAnalytics && gaScriptCount !== 1) failures.push(`${route}: expected one GA loader, found ${gaScriptCount}`);
  if (!expectAnalytics && gaScriptCount !== 0) failures.push(`${route}: preview/local output contains GA loader`);
  if (expectIndexing && /noindex/.test(robots)) failures.push(`${route}: production output is noindex`);
  if (!expectIndexing && !/noindex/.test(robots)) failures.push(`${route}: preview/local output is indexable`);

  if (titles.has(title)) failures.push(`${route}: duplicate title ${title}`);
  if (canonicals.has(canonical)) failures.push(`${route}: duplicate canonical ${canonical}`);
  titles.add(title);
  canonicals.add(canonical);
}

for (const route of ["/alternatives/photoshop/", "/alternatives/lightroom/", "/apps/pdfcraft/", "/apps/photocraft/"]) {
  const html = await readFile(routeFile(route), "utf8");
  if (!/FAQPage/.test(html)) failures.push(`${route}: missing FAQPage structured data`);
  if (!/property="og:image"/.test(html)) failures.push(`${route}: missing og:image`);
  if (!/name="twitter:card" content="summary_large_image"/.test(html)) failures.push(`${route}: missing large Twitter card`);
  if (/\.png\//.test(html)) failures.push(`${route}: social image URL incorrectly has a trailing slash`);
  if (/\[VERIFY\]|\bTODO\b|\bTBD\b/i.test(html)) failures.push(`${route}: contains unresolved editorial placeholder`);
}

const exactGuideTitles = new Map([
  ["/alternatives/photoshop/", "Open Source Photoshop Alternatives: PhotoCraft, GIMP &amp; More"],
  ["/alternatives/lightroom/", "Open Source Lightroom Alternatives: darktable, RawTherapee &amp; More"],
]);
for (const [route, expectedTitle] of exactGuideTitles) {
  const html = await readFile(routeFile(route), "utf8");
  const title = capture(html, /<title>([^<]+)<\/title>/i);
  if (title !== expectedTitle) failures.push(`${route}: title is not the supplied exact title`);
}

const robotsText = await readFile(join(outputDirectory, "robots.txt"), "utf8");
if (expectIndexing && /Disallow:\s*\//.test(robotsText)) failures.push("robots.txt blocks production indexing");
if (!expectIndexing && !/Disallow:\s*\//.test(robotsText)) failures.push("robots.txt does not block preview/local indexing");

const sitemapIndex = await readFile(join(outputDirectory, "sitemap.xml"), "utf8");
if (!sitemapIndex.includes("<sitemapindex")) failures.push("sitemap.xml must be a language sitemap index");
const sitemapText = (await Promise.all(["en", "zh-Hant"].map((locale) => readFile(join(outputDirectory, "sitemaps", `${locale}.xml`), "utf8")))).join("\n");
for (const route of routes) {
  if (!sitemapText.includes(`<loc>${siteUrl}${route}</loc>`)) failures.push(`sitemap.xml is missing ${route}`);
  const html = await readFile(routeFile(route), "utf8");
  const date = capture(html, /<time[^>]*datetime="([^"]+)"[^>]*data-page-updated/i);
  const entry = sitemapText.split("<url>").find((item) => item.includes(`<loc>${siteUrl}${route}</loc>`));
  if (date && !entry?.includes(`<lastmod>${date}</lastmod>`)) failures.push(`${route}: sitemap and visible editorial dates differ`);
}

const notFoundHtml = await readFile(join(outputDirectory, "404.html"), "utf8");
if (!notFoundHtml.includes("This route is not in the ledger.")) failures.push("404.html does not contain the custom not-found page");

if (failures.length > 0) {
  console.error(`Static validation failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Static validation passed for ${routes.length} routes (${expectAnalytics ? "GA enabled" : "GA disabled"}, ${expectIndexing ? "indexable" : "noindex"}).`);
