// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-10-26", "vectorcraft": "2026-10-26", "photocraft": "2026-10-26", "lightcraft": "2026-10-26", "pdfcraft": "2026-10-26", "effectcraft": "2026-10-26", "designcraft": "2026-10-26", "figcraft": "2026-10-26", "wordcraft": "2026-10-26", "soundcraft": "2026-10-26", "deckcraft": "2026-10-26", "cadcraft": "2026-10-26", "gridcraft": "2026-10-26", "craft-launcher": "2026-10-26"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.16.0",
    "publishedAt": "2026-10-25T14:17:53Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.16.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.17.0",
    "publishedAt": "2026-10-25T14:01:11Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-25T13:48:40Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-25T13:52:07Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-25T13:56:05Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.17.0",
    "publishedAt": "2026-10-25T14:01:25Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "designcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-25T13:30:37Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "figcraft",
    "version": "0.11.2",
    "publishedAt": "2026-10-25T14:02:25Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.11.2"
  },
  {
    "slug": "wordcraft",
    "version": "0.11.0",
    "publishedAt": "2026-10-25T13:30:52Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.11.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.13.1",
    "publishedAt": "2026-10-25T13:44:38Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.13.1"
  },
  {
    "slug": "deckcraft",
    "version": "0.11.1",
    "publishedAt": "2026-10-25T13:36:43Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.11.1"
  },
  {
    "slug": "cadcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-25T13:48:56Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.12.1",
    "publishedAt": "2026-10-25T13:27:32Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.12.1"
  },
  {
    "slug": "craft-launcher",
    "version": "0.8.1",
    "publishedAt": "2026-10-25T14:05:05Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.8.1"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
