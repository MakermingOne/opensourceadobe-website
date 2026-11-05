// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-11-06", "vectorcraft": "2026-11-06", "photocraft": "2026-11-06", "lightcraft": "2026-11-06", "pdfcraft": "2026-11-06", "effectcraft": "2026-11-06", "designcraft": "2026-11-06", "figcraft": "2026-11-06", "wordcraft": "2026-11-06", "soundcraft": "2026-11-06", "deckcraft": "2026-11-06", "cadcraft": "2026-11-06", "gridcraft": "2026-11-06", "craft-launcher": "2026-11-06"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
  "slug": "photocraft",
  "version": "0.20.2",
  "publishedAt": "2026-11-05T01:48:22Z",
  "url": "https://github.com/storytold/photocraft/releases/tag/v0.20.2"
},
  {
  "slug": "vectorcraft",
  "version": "0.21.1",
  "publishedAt": "2026-11-05T02:06:59Z",
  "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.21.1"
},
  {
  "slug": "filmcraft",
  "version": "0.17.1",
  "publishedAt": "2026-11-05T01:47:53Z",
  "url": "https://github.com/storytold/filmcraft/releases/tag/v0.17.1"
},
  {
  "slug": "lightcraft",
  "version": "0.18.1",
  "publishedAt": "2026-11-05T01:25:33Z",
  "url": "https://github.com/storytold/lightcraft/releases/tag/v0.18.1"
},
  {
  "slug": "pdfcraft",
  "version": "0.18.2",
  "publishedAt": "2026-11-05T01:47:43Z",
  "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.18.2"
},
  {
  "slug": "effectcraft",
  "version": "0.21.1",
  "publishedAt": "2026-11-05T01:47:58Z",
  "url": "https://github.com/storytold/effectcraft/releases/tag/v0.21.1"
},
  {
  "slug": "designcraft",
  "version": "0.17.2",
  "publishedAt": "2026-11-05T01:47:37Z",
  "url": "https://github.com/storytold/designcraft/releases/tag/v0.17.2"
},
  {
  "slug": "figcraft",
  "version": "0.15.1",
  "publishedAt": "2026-11-05T01:48:05Z",
  "url": "https://github.com/storytold/figcraft/releases/tag/v0.15.1"
},
  {
  "slug": "wordcraft",
  "version": "0.15.2",
  "publishedAt": "2026-11-05T01:34:30Z",
  "url": "https://github.com/storytold/wordcraft/releases/tag/v0.15.2"
},
  {
  "slug": "soundcraft",
  "version": "0.17.1",
  "publishedAt": "2026-11-05T01:24:46Z",
  "url": "https://github.com/storytold/soundcraft/releases/tag/v0.17.1"
},
  {
  "slug": "deckcraft",
  "version": "0.15.1",
  "publishedAt": "2026-11-05T01:24:47Z",
  "url": "https://github.com/storytold/deckcraft/releases/tag/v0.15.1"
},
  {
  "slug": "cadcraft",
  "version": "0.17.1",
  "publishedAt": "2026-11-05T01:24:49Z",
  "url": "https://github.com/storytold/cadcraft/releases/tag/v0.17.1"
},
  {
  "slug": "gridcraft",
  "version": "0.16.1",
  "publishedAt": "2026-11-05T01:24:51Z",
  "url": "https://github.com/storytold/gridcraft/releases/tag/v0.16.1"
},
  {
  "slug": "craft-launcher",
  "version": "0.14.1",
  "publishedAt": "2026-11-05T01:24:52Z",
  "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.14.1"
}
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));

// Official tools with checked releases and product pages; local full guides are not published yet.
export const additionalOfficialReleases = [
 {
  "slug": "materialcraft",
  "name": "MaterialCraft",
  "version": "0.1.2",
  "publishedAt": "2026-11-05T01:24:43Z",
  "checkedAt": "2026-11-06",
  "url": "https://github.com/storytold/materialcraft/releases/tag/v0.1.2",
  "officialPage": "https://getartcraft.com/apps/materialcraft"
},
 {
  "slug": "texturecraft",
  "name": "TextureCraft",
  "version": "0.3.2",
  "publishedAt": "2026-11-05T01:24:44Z",
  "checkedAt": "2026-11-06",
  "url": "https://github.com/storytold/texturecraft/releases/tag/v0.3.2",
  "officialPage": "https://getartcraft.com/apps/texturecraft"
},
 {slug:"craft-anything", name:"Craft Anything", version:"0.3.0", publishedAt:"2026-11-02T17:58:25Z", checkedAt:"2026-11-04", url:"https://github.com/storytold/craft-anything/releases/tag/v0.3.0", officialPage:"https://getartcraft.com/apps/craft-anything"},
] as const;
