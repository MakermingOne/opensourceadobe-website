// Original OpenSourceAdobe editorial graphics; no official product artwork.
export const socialImages: Record<string, string> = {
  "/": "artcraft-directory",
  "/apps/": "artcraft-apps",
  "/alternatives/": "artcraft-alternatives",
  "/vs-adobe/": "artcraft-compare",
  "/download/": "artcraft-download",
  "/tutorials/": "artcraft-tutorials",
  "/learn/ai-history-1955/": "ai-history-1955",
  "/faq/": "artcraft-faq",
  "/brandon-thomas/": "brandon-thomas-artcraft",
  "/about/": "artcraft-about",
  "/contact/": "artcraft-contact",
  "/disclaimer/": "artcraft-disclaimer",
  "/privacy/": "artcraft-privacy",
  "/github/": "artcraft-github",
  "/updates/": "artcraft-updates",
  "/apps/photocraft/": "artcraft-photocraft",
  "/apps/pdfcraft/": "download-pdfcraft",
  "/apps/vectorcraft/": "artcraft-vectorcraft",
  "/apps/filmcraft/": "artcraft-filmcraft",
  "/apps/lightcraft/": "artcraft-lightcraft",
  "/apps/effectcraft/": "artcraft-download",
  "/apps/designcraft/": "artcraft-download",
  "/apps/figcraft/": "artcraft-download",
  "/apps/wordcraft/": "artcraft-download",
  "/apps/soundcraft/": "artcraft-download",
  "/apps/deckcraft/": "artcraft-download",
  "/apps/cadcraft/": "artcraft-download",
  "/apps/gridcraft/": "artcraft-download",
  "/alternatives/photoshop/": "photoshop-alternatives",
  "/alternatives/lightroom/": "lightroom-alternatives",
};

export function socialImagePath(path: string) {
  const name = socialImages[path] ?? (path.startsWith("/updates/") ? socialImages["/updates/"] : undefined);
  if (!name) throw new Error(`Missing social image for ${path}`);
  return `/images/og/${name}.png`;
}
