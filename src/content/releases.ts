// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"photocraft": "2026-10-17", "vectorcraft": "2026-10-17", "filmcraft": "2026-10-17", "lightcraft": "2026-10-17", "pdfcraft": "2026-10-17", "effectcraft": "2026-10-17", "designcraft": "2026-10-17", "figcraft": "2026-10-17", "wordcraft": "2026-10-17", "soundcraft": "2026-10-17", "deckcraft": "2026-10-17", "cadcraft": "2026-10-17", "gridcraft": "2026-10-17"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-14T16:36:26Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.9.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-16T12:26:40Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-14T16:28:45Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-14T15:30:00Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-14T15:21:59Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-14T16:16:19Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "designcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-14T14:15:00Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "figcraft",
    "version": "0.6.0",
    "publishedAt": "2026-10-14T14:26:24Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.6.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-14T13:56:11Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-14T16:16:07Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-14T15:04:51Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-14T15:29:49Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-14T15:36:59Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.4.1",
    "publishedAt": "2026-10-13T18:31:57Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.4.1"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
