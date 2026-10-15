// Original OpenSourceAdobe editorial graphics; no official product artwork.
export const socialImages: Record<string, string> = {
  "/": "artcraft-directory",
  "/apps/": "artcraft-apps",
  "/alternatives/": "artcraft-alternatives",
  "/vs-adobe/": "artcraft-compare",
  "/download/": "artcraft-download",
  "/tutorials/": "artcraft-tutorials",
  "/faq/": "artcraft-faq",
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
  "/alternatives/photoshop/": "photoshop-alternatives",
  "/alternatives/lightroom/": "lightroom-alternatives",
};

export function socialImagePath(path: string) {
  const name = socialImages[path] ?? (path.startsWith("/updates/") ? socialImages["/updates/"] : undefined);
  if (!name) throw new Error(`Missing social image for ${path}`);
  return `/images/og/${name}.png`;
}
