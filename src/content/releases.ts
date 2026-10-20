// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"photocraft": "2026-10-20", "vectorcraft": "2026-10-20", "filmcraft": "2026-10-20", "lightcraft": "2026-10-20", "pdfcraft": "2026-10-20", "effectcraft": "2026-10-20", "designcraft": "2026-10-20", "figcraft": "2026-10-20", "wordcraft": "2026-10-20", "soundcraft": "2026-10-20", "deckcraft": "2026-10-20", "cadcraft": "2026-10-20", "gridcraft": "2026-10-20", "craft-launcher": "2026-10-20"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-18T04:01:42Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.10.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.13.1",
    "publishedAt": "2026-10-18T04:36:37Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.13.1"
  },
  {
    "slug": "filmcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-18T03:55:32Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.9.1",
    "publishedAt": "2026-10-18T04:21:02Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.9.1"
  },
  {
    "slug": "pdfcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-18T03:55:00Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.11.1",
    "publishedAt": "2026-10-18T00:05:17Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.11.1"
  },
  {
    "slug": "designcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-18T03:40:16Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "figcraft",
    "version": "0.7.0",
    "publishedAt": "2026-10-18T04:05:18Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.7.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-18T03:56:04Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-17T23:16:47Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-18T03:51:17Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-17T23:35:10Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.8.0",
    "publishedAt": "2026-10-18T01:47:37Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.8.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.5.1",
    "publishedAt": "2026-10-18T04:01:09Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.5.1"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
