// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"photocraft": "2026-10-25", "vectorcraft": "2026-10-24", "filmcraft": "2026-10-24", "lightcraft": "2026-10-24", "pdfcraft": "2026-10-24", "effectcraft": "2026-10-24", "designcraft": "2026-10-24", "figcraft": "2026-10-24", "wordcraft": "2026-10-24", "soundcraft": "2026-10-24", "deckcraft": "2026-10-24", "cadcraft": "2026-10-24", "gridcraft": "2026-10-24", "craft-launcher": "2026-10-24"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.15.1",
    "publishedAt": "2026-10-23T22:44:33Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.15.1"
  },
  {
    "slug": "vectorcraft",
    "version": "0.16.0",
    "publishedAt": "2026-10-23T01:01:59Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-23T00:35:04Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-23T00:35:08Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.13.0",
    "publishedAt": "2026-10-23T00:43:39Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.13.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.16.0",
    "publishedAt": "2026-10-23T00:35:00Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "designcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-22T20:50:19Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "figcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-22T20:44:45Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-22T20:44:31Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.12.1",
    "publishedAt": "2026-10-22T20:30:32Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.12.1"
  },
  {
    "slug": "deckcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-22T20:44:35Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-23T00:34:58Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.12.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.11.1",
    "publishedAt": "2026-10-22T20:44:41Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.11.1"
  },
  {
    "slug": "craft-launcher",
    "version": "0.7.0",
    "publishedAt": "2026-10-23T00:23:19Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.7.0"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
