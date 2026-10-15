// Selected assets checked against official GitHub releases; see per-app review dates.
// Keep each version aligned with releases.ts; do not infer unlisted packages.
export const officialDownloads = {
  pdfcraft: {
    version: "0.8.0",
    packages: [
      { platform: "macOS", description: "Universal DMG for Apple silicon and Intel Macs", filename: "pdfcraft-0.8.0-macos-universal.dmg" },
      { platform: "Windows x64", description: "MSI installer for 64-bit Intel or AMD PCs", filename: "pdfcraft-0.8.0-windows-x64.msi" },
      { platform: "Linux x86_64", description: "AppImage for 64-bit Intel or AMD systems", filename: "pdfcraft-0.8.0-linux-x86_64.AppImage" },
    ],
  },
  photocraft: {
    version: "0.9.0",
    packages: [
      { platform: "macOS", description: "Universal DMG for Apple silicon and Intel Macs", filename: "photocraft-0.9.0-macos-universal.dmg" },
      { platform: "Windows x64", description: "MSI installer for 64-bit Intel or AMD PCs", filename: "photocraft-0.9.0-windows-x64.msi" },
      { platform: "Linux x86_64", description: "AppImage for 64-bit Intel or AMD systems", filename: "photocraft-0.9.0-linux-x86_64.AppImage" },
    ],
  },
} as const;

export type DownloadSlug = keyof typeof officialDownloads;

export function officialAssetUrl(slug: DownloadSlug, filename: string) {
  const record = officialDownloads[slug];
  return `https://github.com/storytold/${slug}/releases/download/v${record.version}/${filename}`;
}
