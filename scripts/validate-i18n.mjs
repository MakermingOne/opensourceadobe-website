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
const languageCounts = new Map();
for (const url of sitemapUrls) {
  check(new URL(url).origin === origin, `Unexpected sitemap origin: ${url}`);
  const locale = new URL(url).pathname.split("/").at(-1).replace(/\.xml$/, "");
  languageCounts.set(locale, 0);
  const xml = await readFile(join(output, new URL(url).pathname), "utf8");
  check(xml.includes("<urlset"), `${url}: missing urlset`);
  for (const [block] of xml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
    const location = decode(capture(block, /<loc>(.*?)<\/loc>/));
    check(!entries.has(location), `Duplicate sitemap URL: ${location}`);
    entries.set(location, { alternates: links(block), path: new URL(location).pathname, locale });
    languageCounts.set(locale, languageCounts.get(locale) + 1);
  }
}
const titles = new Set();
const variants = new Map();
for (const [url, entry] of entries) {
  const base = entry.locale === "en" ? entry.path : entry.path.slice(entry.locale.length + 1);
  const group = variants.get(base) ?? {};
  group[entry.locale] = url;
  variants.set(base, group);
}
for (const [url, entry] of entries) {
  let html;
  try { html = await read(entry.path); } catch { failures.push(`${url}: exported HTML missing`); continue; }
  const chinese = entry.locale === "zh-Hant";
  const base = entry.locale === "en" ? entry.path : entry.path.slice(entry.locale.length + 1);
  const expected = { ...variants.get(base), "x-default": origin + base };
  const htmlAlternates = links(html);
  check(same(entry.alternates, expected), `${entry.path}: sitemap alternates differ from available translations`);
  check(same(htmlAlternates, expected), `${entry.path}: HTML alternates differ from sitemap/available translations`);
  for (const target of Object.values(expected)) check(entries.has(target), `${entry.path}: alternate not in sitemap: ${target}`);
  const root = attributes(capture(html, /(<html\b[^>]*>)/i));
  check(root.lang === entry.locale && root.dir === "ltr", `${entry.path}: incorrect SSR lang/dir`);
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
  if (entry.locale !== "en") {
    if (chinese) check([...title.matchAll(/\p{Script=Han}/gu)].length <= 30, `${entry.path}: title exceeds 30 Han characters`);
    const visibleMain = decode(mainMarkup(html).replace(/<script\b[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, ""));
    if (chinese) check(!/平替|软件|矢量|视频/.test(visibleMain), `${entry.path}: prohibited regional wording`);
    const questions = structured.find((node) => node["@type"] === "FAQPage")?.mainEntity;
    check(Array.isArray(questions) && questions.length >= 4, `${entry.path}: FAQPage needs at least four questions`);
    for (const question of questions ?? []) {
      check(visibleMain.includes(question.name), `${entry.path}: schema FAQ question absent from visible content`);
      check(visibleMain.includes(question.acceptedAnswer?.text?.replace(/<[^>]+>/g, "")), `${entry.path}: schema FAQ answer absent from visible content`);
    }
  }
}
for (const [locale, count] of languageCounts) check(count > 0, `${locale}: empty language sitemap`);

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

// Locale errors must be exported and remain excluded from indexing/sitemaps.
for (const locale of languageCounts.keys()) {
  if (locale === "en") continue;
  try {
    const file = join(output, locale, "404.html");
    await stat(file);
    const html = await readFile(file, "utf8");
    const root = attributes(capture(html, /(<html\b[^>]*>)/i));
    check(root.lang === locale, `${locale}: 404 declares the wrong language`);
    check(/name="robots"[^>]*content="[^"]*noindex/.test(html), `${locale}: 404 must be noindex`);
  } catch { failures.push(`${locale}: localized 404.html is missing`); }
}

if (failures.length) {
  console.error(`i18n validation failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exitCode = 1;
} else console.log(`i18n validation passed for ${entries.size} URLs, across ${languageCounts.size} languages${baselineFlag === -1 ? "" : "; English baseline unchanged"}.`);
