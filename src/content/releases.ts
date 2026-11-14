// Baseline checked October 15; subsequent app-specific refreshes are dated below.
// This is an editorial snapshot, not a runtime API.
export const releaseCheckedAt = "2026-10-15";
const releaseCheckDates: Record<string, string> = {"filmcraft": "2026-11-15", "vectorcraft": "2026-11-15", "photocraft": "2026-11-15", "lightcraft": "2026-11-15", "pdfcraft": "2026-11-15", "effectcraft": "2026-11-15", "designcraft": "2026-11-15", "figcraft": "2026-11-15", "wordcraft": "2026-11-15", "soundcraft": "2026-11-15", "deckcraft": "2026-11-15", "cadcraft": "2026-11-15", "gridcraft": "2026-11-15", "craft-launcher": "2026-11-15"};
export function releaseCheckedOn(slug: string) {
  return releases.some((release) => release.slug === slug) ? releaseCheckDates[slug] ?? releaseCheckedAt : "Not verified";
}
export const releases = [
  {
    "slug": "photocraft",
    "version": "0.23.1",
    "publishedAt": "2026-11-12T05:07:51Z",
    "url": "https://github.com/storytold/photocraft/releases/tag/v0.23.1"
  },
  {
    "slug": "vectorcraft",
    "version": "0.24.1",
    "publishedAt": "2026-11-12T05:07:34Z",
    "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.24.1"
  },
  {
    "slug": "filmcraft",
    "version": "0.20.1",
    "publishedAt": "2026-11-12T00:26:09Z",
    "url": "https://github.com/storytold/filmcraft/releases/tag/v0.20.1"
  },
  {
    "slug": "lightcraft",
    "version": "0.21.1",
    "publishedAt": "2026-11-12T05:08:23Z",
    "url": "https://github.com/storytold/lightcraft/releases/tag/v0.21.1"
  },
  {
    "slug": "pdfcraft",
    "version": "0.21.1",
    "publishedAt": "2026-11-12T02:18:37Z",
    "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.21.1"
  },
  {
    "slug": "effectcraft",
    "version": "0.24.1",
    "publishedAt": "2026-11-12T00:23:40Z",
    "url": "https://github.com/storytold/effectcraft/releases/tag/v0.24.1"
  },
  {
    "slug": "designcraft",
    "version": "0.20.1",
    "publishedAt": "2026-11-12T00:16:10Z",
    "url": "https://github.com/storytold/designcraft/releases/tag/v0.20.1"
  },
  {
    "slug": "figcraft",
    "version": "0.18.1",
    "publishedAt": "2026-11-12T01:20:50Z",
    "url": "https://github.com/storytold/figcraft/releases/tag/v0.18.1"
  },
  {
    "slug": "wordcraft",
    "version": "0.18.1",
    "publishedAt": "2026-11-12T00:04:47Z",
    "url": "https://github.com/storytold/wordcraft/releases/tag/v0.18.1"
  },
  {
    "slug": "soundcraft",
    "version": "0.20.1",
    "publishedAt": "2026-11-12T00:57:13Z",
    "url": "https://github.com/storytold/soundcraft/releases/tag/v0.20.1"
  },
  {
    "slug": "deckcraft",
    "version": "0.18.1",
    "publishedAt": "2026-11-12T00:07:42Z",
    "url": "https://github.com/storytold/deckcraft/releases/tag/v0.18.1"
  },
  {
    "slug": "cadcraft",
    "version": "0.20.1",
    "publishedAt": "2026-11-12T00:23:37Z",
    "url": "https://github.com/storytold/cadcraft/releases/tag/v0.20.1"
  },
  {
    "slug": "gridcraft",
    "version": "0.19.1",
    "publishedAt": "2026-11-12T00:06:29Z",
    "url": "https://github.com/storytold/gridcraft/releases/tag/v0.19.1"
  },
  {
    "slug": "craft-launcher",
    "version": "0.19.2",
    "publishedAt": "2026-11-12T01:41:25Z",
    "url": "https://github.com/storytold/craft-launcher/releases/tag/v0.19.2"
  }
] as const;
export const releasesBySlug = new Map<string, (typeof releases)[number]>(releases.map((release) => [release.slug, release]));

// Official tools with checked releases and product pages; local full guides are not published yet.
export const additionalOfficialReleases = [
  {
    "slug": "materialcraft",
    "version": "0.4.1",
    "publishedAt": "2026-11-12T00:51:57Z",
    "url": "https://github.com/storytold/materialcraft/releases/tag/v0.4.1",
    "name": "MaterialCraft",
    "checkedAt": "2026-11-15",
    "officialPage": "https://getartcraft.com/apps/materialcraft"
  },
  {
    "slug": "texturecraft",
    "version": "0.6.1",
    "publishedAt": "2026-11-12T00:43:50Z",
    "url": "https://github.com/storytold/texturecraft/releases/tag/v0.6.1",
    "name": "TextureCraft",
    "checkedAt": "2026-11-15",
    "officialPage": "https://getartcraft.com/apps/texturecraft"
  },
  {
    "slug": "craft-anything",
    "version": "0.6.1",
    "publishedAt": "2026-11-12T01:41:22Z",
    "url": "https://github.com/storytold/craft-anything/releases/tag/v0.6.1",
    "name": "Craft Anything",
    "checkedAt": "2026-11-15",
    "officialPage": "https://getartcraft.com/apps/craft-anything"
  },
  {
    "slug": "anicraft",
    "version": "0.2.1",
    "publishedAt": "2026-11-12T01:41:19Z",
    "url": "https://github.com/storytold/anicraft/releases/tag/v0.2.1",
    "name": "AniCraft",
    "checkedAt": "2026-11-15",
    "officialPage": "https://getartcraft.com/apps/anicraft"
  }
] as const;
