// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-10-30", "vectorcraft": "2026-10-30", "photocraft": "2026-10-30", "lightcraft": "2026-10-30", "pdfcraft": "2026-10-30", "effectcraft": "2026-10-30", "designcraft": "2026-10-30", "figcraft": "2026-10-30", "wordcraft": "2026-10-30", "soundcraft": "2026-10-30", "deckcraft": "2026-10-30", "cadcraft": "2026-10-30", "gridcraft": "2026-10-30", "craft-launcher": "2026-10-31"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.17.0",
    "publishedAt": "2026-10-28T17:39:12Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.17.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.18.0",
    "publishedAt": "2026-10-28T17:38:39Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.18.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-28T16:40:33Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.15.0",
    "publishedAt": "2026-10-28T17:36:29Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.15.0",
    "publishedAt": "2026-10-28T17:38:25Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.18.0",
    "publishedAt": "2026-10-28T17:38:55Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.18.0"
  },
  {
    "slug": "designcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-28T16:25:36Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "figcraft",
    "version": "0.12.1",
    "publishedAt": "2026-10-28T17:58:10Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.12.1"
  },
  {
    "slug": "wordcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-28T16:22:15Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-28T16:08:49Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-28T16:18:32Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-28T16:34:10Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-28T16:10:33Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.10.0",
    "publishedAt": "2026-10-29T19:47:08Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.10.0"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
