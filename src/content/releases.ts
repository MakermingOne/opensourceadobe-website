// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-11-04", "vectorcraft": "2026-11-04", "photocraft": "2026-11-04", "lightcraft": "2026-11-04", "pdfcraft": "2026-11-05", "effectcraft": "2026-11-04", "designcraft": "2026-11-04", "figcraft": "2026-11-04", "wordcraft": "2026-11-05", "soundcraft": "2026-11-04", "deckcraft": "2026-11-04", "cadcraft": "2026-11-04", "gridcraft": "2026-11-04", "craft-launcher": "2026-11-04"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.20.1",
    "publishedAt": "2026-11-03T01:24:40Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.20.1"
  },
  {
    "slug": "vectorcraft",
    "version": "0.21.0",
    "publishedAt": "2026-11-03T01:14:20Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.21.0"
  },
  {
    "slug": "filmcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-03T00:53:23Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "lightcraft",
    "version": "0.18.0",
    "publishedAt": "2026-11-03T00:54:20Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.18.0"
  },
  {
    "slug": "pdfcraft",
    "version": "0.18.1",
    "publishedAt": "2026-11-04T03:51:06Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.18.1"
  },
  {
    "slug": "effectcraft",
    "version": "0.21.0",
    "publishedAt": "2026-11-03T01:05:56Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.21.0"
  },
  {
    "slug": "designcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-03T00:59:11Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "figcraft",
    "version": "0.15.0",
    "publishedAt": "2026-11-03T00:56:47Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "wordcraft",
    "version": "0.15.1",
    "publishedAt": "2026-11-04T03:51:07Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.15.1"
  },
  {
    "slug": "soundcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-03T00:44:42Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "deckcraft",
    "version": "0.15.0",
    "publishedAt": "2026-11-03T00:51:03Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.15.0"
  },
  {
    "slug": "cadcraft",
    "version": "0.17.0",
    "publishedAt": "2026-11-03T00:54:01Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.17.0"
  },
  {
    "slug": "gridcraft",
    "version": "0.16.0",
    "publishedAt": "2026-11-03T00:45:51Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.16.0"
  },
  {
    "slug": "craft-launcher",
    "version": "0.14.0",
    "publishedAt": "2026-11-03T00:41:49Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.14.0"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));

// Official tools with checked releases and product pages; local full guides are not published yet.
export const additionalOfficialReleases = [
 {"slug": "materialcraft", "name": "MaterialCraft", "version": "0.1.1", "publishedAt": "2026-11-04T18:08:56Z", "checkedAt": "2026-11-05", "url": "https://github.com/storytold/materialcraft/releases/tag/v0.1.1", "officialPage": "https://getartcraft.com/apps/materialcraft"},
 {"slug": "texturecraft", "name": "TextureCraft", "version": "0.3.1", "publishedAt": "2026-11-04T18:09:10Z", "checkedAt": "2026-11-05", "url": "https://github.com/storytold/texturecraft/releases/tag/v0.3.1", "officialPage": "https://getartcraft.com/apps/texturecraft"},
 {slug:"craft-anything", name:"Craft Anything", version:"0.3.0", publishedAt:"2026-11-02T17:58:25Z", checkedAt:"2026-11-04", url:"https://github.com/storytold/craft-anything/releases/tag/v0.3.0", officialPage:"https://getartcraft.com/apps/craft-anything"},
] as const;
