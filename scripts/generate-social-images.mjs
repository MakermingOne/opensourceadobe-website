// Generate original editorial share cards from exported page titles.
// Usage: pnpm build && node scripts/generate-social-images.mjs [/apps/ ...]
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { socialImages } = require("../src/content/social-images.ts");
const nextRequire = createRequire(require.resolve("next/package.json"));
const sharp = nextRequire("sharp");
const additions = ["/apps/", "/alternatives/", "/vs-adobe/", "/download/", "/tutorials/", "/faq/", "/about/", "/contact/", "/disclaimer/", "/privacy/", "/apps/vectorcraft/", "/apps/filmcraft/", "/apps/lightcraft/"];
const targets = process.argv.length > 2 ? process.argv.slice(2) : additions;

function decode(value) {
  return value.replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}
function escape(value) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;"); }
function wrap(title) {
  const lines = [];
  for (const word of title.split(/\s+/)) {
    if (!lines.length || `${lines.at(-1)} ${word}`.length > 32) lines.push(word);
    else lines[lines.length - 1] += ` ${word}`;
  }
  if (lines.length > 4) throw new Error(`Title needs a shorter line measure: ${title}`);
  return lines;
}

for (const path of targets) {
  const name = socialImages[path];
  if (!name) throw new Error(`Unknown social-image route: ${path}`);
  const html = await readFile(join("out", path, "index.html"), "utf8");
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "");
  if (!title) throw new Error(`Missing page title: ${path}`);
  const lines = wrap(title);
  const grid = Array.from({ length: 9 }, (_, index) => `<rect x="${997 + index % 3 * 34}" y="${65 + Math.floor(index / 3) * 34}" width="22" height="22" fill="${index === 4 ? "#2d81ff" : "#343a48"}"/>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escape(title)}">
<title>${escape(title)}</title>
<rect width="1200" height="630" fill="#101114"/>
<rect x="72" y="72" width="18" height="18" fill="#2d81ff"/>
<text x="108" y="91" fill="#f5f7fb" font-family="Arial,sans-serif" font-size="28">OpenSourceAdobe</text>
${grid}
${lines.map((line, index) => `<text x="72" y="${222 + index * 73}" fill="${index === 1 ? "#5596ff" : "#f5f7fb"}" font-family="Arial,sans-serif" font-size="60" font-weight="700">${escape(line)}</text>`).join("\n")}
<path d="M72 520h1056" stroke="#454b57"/>
<text x="72" y="568" fill="#c4cad6" font-family="Arial,sans-serif" font-size="24">opensourceadobe.com</text>
</svg>\n`;
  await writeFile(join("public/images/og", `${name}.svg`), svg);
  await sharp(Buffer.from(svg)).png().toFile(join("public/images/og", `${name}.png`));
  console.log(`${path} → /images/og/${name}.png (1200×630)`);
}
