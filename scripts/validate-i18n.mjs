import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const output = join(process.cwd(), "out");
const origin = "https://opensourceadobe.com";
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const capture = (text, regex) => text.match(regex)?.[1] ?? "";
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), decode(match[2])]));
const fileFor = (path) => join(output, path, path.endsWith("/") ? "index.html" : "");
const read = (path) => readFile(fileFor(path), "utf8");
const same = (a, b) => JSON.stringify(Object.entries(a).sort()) === JSON.stringify(Object.entries(b).sort());
const links = (text) => Object.fromEntries([...text.matchAll(/<(?:link|xhtml:link)\b[^>]*>/g)].map(([tag]) => attributes(tag)).filter((tag) => tag.rel === "alternate" && tag.hreflang).map((tag) => [tag.hreflang, tag.href]));
const mainMarkup = (html) => capture(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i);
const flattenSchema = (value) => Array.isArray(value) ? value.flatMap(flattenSchema) : value && typeof value === "object" ? [value, ...flattenSchema(value["@graph"])] : [];

const index = await readFile(join(output, "sitemap.xml"), "utf8");
check(index.includes("<sitemapindex"), "sitemap.xml must be a sitemap index");
if (!index.includes("<sitemapindex")) {
  console.error("i18n validation failed: sitemap.xml must be a sitemap index (rebuild the localized site first).");
  process.exit(1);
}
const sitemapUrls = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));
check(sitemapUrls.length >= 2, "sitemap index must list at least two language sitemaps");
const entries = new Map();
for (const url of sitemapUrls) {
  check(new URL(url).origin === origin, `Unexpected sitemap origin: ${url}`);
  const xml = await readFile(join(output, new URL(url).pathname), "utf8");
  check(xml.includes("<urlset"), `${url}: missing urlset`);
  for (const [block] of xml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
    const location = decode(capture(block, /<loc>(.*?)<\/loc>/));
    check(!entries.has(location), `Duplicate sitemap URL: ${location}`);
    entries.set(location, { alternates: links(block), path: new URL(location).pathname });
  }
}
const titles = new Set();
let chineseCount = 0;
for (const [url, entry] of entries) {
  let html;
  try { html = await read(entry.path); } catch { failures.push(`${url}: exported HTML missing`); continue; }
  const chinese = entry.path.startsWith("/zh-Hant/");
  const base = chinese ? entry.path.slice("/zh-Hant".length) : entry.path;
  const translated = entries.has(`${origin}/zh-Hant${base}`);
  const expected = { en: origin + base, ...(translated ? { "zh-Hant": `${origin}/zh-Hant${base}` } : {}), "x-default": origin + base };
  const htmlAlternates = links(html);
  check(same(entry.alternates, expected), `${entry.path}: sitemap alternates differ from available translations`);
  check(same(htmlAlternates, expected), `${entry.path}: HTML alternates differ from sitemap/available translations`);
  for (const target of Object.values(expected)) check(entries.has(target), `${entry.path}: alternate not in sitemap: ${target}`);
  const root = attributes(capture(html, /(<html\b[^>]*>)/i));
  check(root.lang === (chinese ? "zh-Hant" : "en") && root.dir === "ltr", `${entry.path}: incorrect SSR lang/dir`);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).find((tag) => tag.rel === "canonical")?.href;
  check(canonical === url, `${entry.path}: canonical must be self-referencing`);
  const title = decode(capture(html, /<title>(.*?)<\/title>/));
  check(Boolean(title) && !titles.has(title), `${entry.path}: missing or duplicate title`);
  titles.add(title);
  check((html.match(/<h1(?:\s|>)/g) ?? []).length === 1, `${entry.path}: expected one H1`);
  const structured = [];
  for (const [, json] of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { structured.push(...flattenSchema(JSON.parse(json))); } catch { failures.push(`${entry.path}: invalid JSON-LD`); }
  }
  if (chinese) {
    chineseCount++;
    check([...title.matchAll(/\p{Script=Han}/gu)].length <= 30, `${entry.path}: title exceeds 30 Han characters`);
    const visibleMain = decode(mainMarkup(html).replace(/<script\b[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, ""));
    check(!/平替|软件|矢量|视频/.test(visibleMain), `${entry.path}: prohibited regional wording`);
    const questions = structured.find((node) => node["@type"] === "FAQPage")?.mainEntity;
    check(Array.isArray(questions) && questions.length >= 4, `${entry.path}: FAQPage needs at least four questions`);
    for (const question of questions ?? []) {
      check(visibleMain.includes(question.name), `${entry.path}: schema FAQ question absent from visible content`);
      check(visibleMain.includes(question.acceptedAnswer?.text?.replace(/<[^>]+>/g, "")), `${entry.path}: schema FAQ answer absent from visible content`);
    }
  }
}
check(chineseCount === 4, `Expected four Chinese pages, found ${chineseCount}`);

const baselineFlag = process.argv.indexOf("--baseline");
if (baselineFlag !== -1) {
  const baselinePath = process.argv[baselineFlag + 1];
  if (!baselinePath) throw new Error("--baseline requires a JSON filename");
  const baseline = JSON.parse(await readFile(baselinePath, "utf8"));
  for (const [route, previous] of Object.entries(baseline)) {
    const html = await read(route);
    check(capture(html, /<title>(.*?)<\/title>/) === previous.title, `${route}: English title differs from baseline`);
    check(mainMarkup(html) === previous.main, `${route}: English main markup differs from baseline`);
  }
}

// A locale-specific 404 is optional until the deployment adapter exposes it.
const chinese404 = join(output, "zh-Hant", "404.html");
try {
  await stat(chinese404);
  const html = await readFile(chinese404, "utf8");
  check(/<html[^>]*lang="zh-Hant"/.test(html), "Chinese 404 must declare zh-Hant");
  check(/name="robots"[^>]*content="[^"]*noindex/.test(html), "Chinese 404 must be noindex");
} catch { /* No localized 404 artifact is currently required. */ }

if (failures.length) {
  console.error(`i18n validation failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exitCode = 1;
} else console.log(`i18n validation passed for ${entries.size} URLs, including ${chineseCount} Chinese pages${baselineFlag === -1 ? "" : "; English baseline unchanged"}.`);
