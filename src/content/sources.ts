import { sourceRecordSchema, type SourceRecord } from "./types";
import { releaseCheckedAt, releaseCheckedOn, releases } from "./releases";
import { repositoryLicenses } from "./repository-licenses";

const sourceInput: SourceRecord[] = [
  {
    id: "pdfcraft-language-package-limits", type: "official-repository",
    title: "PdfCraft: October 15 localization and installer-status correction",
    url: "https://github.com/storytold/pdfcraft/commit/953ac1483f4f8f1e3ac755571f50a55381b74581",
    accessedAt: "2026-10-16",
  },
  ...repositoryLicenses.map((record): SourceRecord => ({
    id: `${record.slug}-license-notice`, type: "official-repository",
    title: `${record.slug}: source-code license, branding and third-party NOTICE`,
    url: record.files.find((file) => file.name === "NOTICE")!.url,
    accessedAt: record.checkedAt,
  })),
  {
    id: "pdfcraft-gaps-080", type: "official-repository",
    title: "PdfCraft v0.8.0: documented gaps and browser printing",
    url: "https://github.com/storytold/pdfcraft/blob/v0.8.0/docs/gaps.md",
    accessedAt: "2026-10-15",
  },
  {
    id: "pdfcraft-flatpak-printing", type: "official-repository",
    title: "PdfCraft issue #1905: 0.7.1 Flatpak printer-detection report",
    url: "https://github.com/storytold/pdfcraft/issues/1905",
    accessedAt: "2026-10-15",
  },
  {
    id: "artcraft-home",
    type: "official-page",
    title: "ArtCraft — Controllable AI for Artists",
    url: "https://getartcraft.com/",
    accessedAt: releaseCheckedAt,
  },
  {
    id: "artcraft-repository",
    type: "official-repository",
    title: "storytold/artcraft — official AI image and video studio repository",
    url: "https://github.com/storytold/artcraft",
    accessedAt: "2026-10-14",
  },
  {
    id: "craft-launcher-repository",
    type: "official-repository",
    title: "storytold/craft-launcher — official Crafting Apps installer",
    url: "https://github.com/storytold/craft-launcher",
    accessedAt: "2026-10-14",
  },
  {
    id: "artcraft-apps",
    type: "official-page",
    title: "Crafting Apps: open-source creative tools — ArtCraft",
    url: "https://getartcraft.com/apps",
    accessedAt: releaseCheckedAt,
  },
  ...[
    "photocraft",
    "vectorcraft",
    "filmcraft",
    "lightcraft",
    "pdfcraft",
    "effectcraft",
    "designcraft",
    "figcraft",
    "wordcraft",
    "soundcraft",
    "deckcraft",
    "cadcraft",
    "gridcraft",
  ].flatMap((slug) => [
    {
      id: `${slug}-official`,
      type: "official-page" as const,
      title: `${slug[0].toUpperCase()}${slug.slice(1)} — ArtCraft official page`,
      url: `https://getartcraft.com/apps/${slug}`,
      accessedAt: releaseCheckedOn(slug),
    },
    {
      id: `${slug}-repository`,
      type: "official-repository" as const,
      title: `storytold/${slug} — GitHub repository`,
      url: `https://github.com/storytold/${slug}`,
      accessedAt: releaseCheckedOn(slug),
    },
  ]),
  ...releases.map((release) => ({
    id: `${release.slug}-release`,
    type: "official-repository" as const,
    title: `${release.slug} v${release.version} — official GitHub release`,
    url: release.url,
    accessedAt: releaseCheckedOn(release.slug),
  })),
  {
    id: "photographytalk-artcraft",
    type: "third-party",
    title:
      "Secondary reporting: ArtCraft Rebuilds Photoshop, Lightroom and Premiere as Free Adobe Alternatives — PhotographyTalk",
    url: "https://www.photographytalk.com/free-adobe-alternatives-artcraft/",
    accessedAt: "2026-10-11",
  },
];

export const sources = sourceRecordSchema.array().parse(sourceInput);

export const sourcesById = new Map(sources.map((source) => [source.id, source]));
