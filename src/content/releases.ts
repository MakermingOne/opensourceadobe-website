// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-11-03", "vectorcraft": "2026-11-03", "photocraft": "2026-11-03", "lightcraft": "2026-11-03", "pdfcraft": "2026-11-03", "effectcraft": "2026-11-03", "designcraft": "2026-11-03", "figcraft": "2026-11-03", "wordcraft": "2026-11-03", "soundcraft": "2026-11-03", "deckcraft": "2026-11-03", "cadcraft": "2026-11-03", "gridcraft": "2026-11-03", "craft-launcher": "2026-11-02"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.19.0",
    "publishedAt": "2026-11-01T19:36:04Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.19.0"
  },
  {
    "slug": "vectorcraft",
    "version": "0.20.0",
    "publishedAt": "2026-11-01T19:43:26Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.20.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.16.0",
    "publishedAt": "2026-11-01T19:26:06Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-01T19:27:20Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-01T19:33:10Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "effectcraft",
    "version": "0.20.0",
    "publishedAt": "2026-11-01T19:33:24Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.20.0"
  },
  {
    "slug": "designcraft",
    "version": "0.16.0",
    "publishedAt": "2026-11-01T19:32:27Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "figcraft",
    "version": "0.14.0",
    "publishedAt": "2026-11-01T19:26:38Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.14.0",
    "publishedAt": "2026-11-01T19:26:22Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.14.0"
  },
  {
    "slug": "soundcraft",
    "version": "0.16.0",
    "publishedAt": "2026-11-01T19:12:40Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.14.1",
    "publishedAt": "2026-11-01T19:38:54Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.14.1"
  },
  {
    "slug": "cadcraft",
    "version": "0.16.0",
    "publishedAt": "2026-11-01T19:26:52Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.15.0",
    "publishedAt": "2026-11-01T19:18:01Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.13.0",
    "publishedAt": "2026-11-01T17:42:38Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.13.0"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));

// Official tools with checked releases and product pages; local full guides are not published yet.
export const additionalOfficialReleases = [
 {slug:"texturecraft", name:"TextureCraft", version:"0.2.0", publishedAt:"2026-11-01T17:57:34Z", checkedAt:"2026-11-03", url:"https://github.com/storytold/texturecraft/releases/tag/v0.2.0", officialPage:"https://getartcraft.com/apps/texturecraft"},
 {slug:"craft-anything", name:"Craft Anything", version:"0.3.0", publishedAt:"2026-11-02T17:58:25Z", checkedAt:"2026-11-03", url:"https://github.com/storytold/craft-anything/releases/tag/v0.3.0", officialPage:"https://getartcraft.com/apps/craft-anything"},
] as const;
