// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-11-01", "vectorcraft": "2026-11-01", "photocraft": "2026-11-01", "lightcraft": "2026-11-01", "pdfcraft": "2026-11-01", "effectcraft": "2026-11-01", "designcraft": "2026-11-01", "figcraft": "2026-11-01", "wordcraft": "2026-11-01", "soundcraft": "2026-11-01", "deckcraft": "2026-11-01", "cadcraft": "2026-11-01", "gridcraft": "2026-11-01", "craft-launcher": "2026-11-02"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.18.0",
    "publishedAt": "2026-10-31T04:02:59Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.18.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.19.0",
    "publishedAt": "2026-10-31T04:08:53Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.19.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.15.0",
    "publishedAt": "2026-10-31T03:50:04Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.16.0",
    "publishedAt": "2026-10-31T03:53:25Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.16.1",
    "publishedAt": "2026-10-31T03:59:54Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.16.1"
  },
  {
    "slug": "effectcraft",
    "version": "0.19.0",
    "publishedAt": "2026-10-31T04:06:11Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.19.0"
  },
  {
    "slug": "designcraft",
    "version": "0.15.2",
    "publishedAt": "2026-10-31T03:59:39Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.15.2"
  },
  {
    "slug": "figcraft",
    "version": "0.13.1",
    "publishedAt": "2026-10-31T04:05:57Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.13.1"
  },
  {
    "slug": "wordcraft",
    "version": "0.13.2",
    "publishedAt": "2026-10-31T03:56:34Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.13.2"
  },
  {
    "slug": "soundcraft",
    "version": "0.15.0",
    "publishedAt": "2026-10-31T03:26:09Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.13.1",
    "publishedAt": "2026-10-31T03:48:16Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.13.1"
  },
  {
    "slug": "cadcraft",
    "version": "0.15.1",
    "publishedAt": "2026-10-31T04:13:30Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.15.1"
  },
  {
    "slug": "gridcraft",
    "version": "0.14.2",
    "publishedAt": "2026-10-31T03:48:32Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.14.2"
  },
  {
    "slug": "craft-launcher",
    "version": "0.13.0",
    "publishedAt": "2026-11-01T17:42:38Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.13.0"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
