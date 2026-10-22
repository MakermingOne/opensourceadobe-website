// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"photocraft": "2026-10-22", "vectorcraft": "2026-10-22", "filmcraft": "2026-10-22", "lightcraft": "2026-10-22", "pdfcraft": "2026-10-22", "effectcraft": "2026-10-22", "designcraft": "2026-10-22", "figcraft": "2026-10-22", "wordcraft": "2026-10-22", "soundcraft": "2026-10-22", "deckcraft": "2026-10-22", "cadcraft": "2026-10-22", "gridcraft": "2026-10-22", "craft-launcher": "2026-10-22"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.12.0",
    "publishedAt": "2026-10-21T18:28:57Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.12.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-21T07:46:25Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-21T07:46:20Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.11.0",
    "publishedAt": "2026-10-21T18:29:19Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.11.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.11.0",
    "publishedAt": "2026-10-21T19:57:25Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.11.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.14.0",
    "publishedAt": "2026-10-21T19:04:46Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "designcraft",
    "version": "0.11.0",
    "publishedAt": "2026-10-21T18:26:30Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.11.0"
  },
  {
    "slug": "figcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-21T18:26:33Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-21T07:46:28Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.11.0",
    "publishedAt": "2026-10-21T18:12:00Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.11.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.9.0",
    "publishedAt": "2026-10-21T07:46:17Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.9.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-21T07:46:12Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.10.0",
    "publishedAt": "2026-10-21T18:12:04Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.10.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.6.1",
    "publishedAt": "2026-10-21T08:05:24Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.6.1"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));
