import { copyFile, readdir } from "node:fs/promises";
import { join } from "node:path";
// Cloudflare serves the nearest 404.html with HTTP 404. Keep locale errors
// static as well, without a Worker, redirects or language negotiation.
const root = join(process.cwd(), "out");
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  try { await copyFile(join(root, entry.name, "404", "index.html"), join(root, entry.name, "404.html")); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
}
