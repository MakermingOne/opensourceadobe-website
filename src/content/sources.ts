import { sourceRecordSchema, type SourceRecord } from "./types";
import { releaseCheckedAt, releaseCheckedOn, releases } from "./releases";
import { repositoryLicenses } from "./repository-licenses";

const sourceInput: SourceRecord[] = [
  {
    id: "photocraft-brush-090", type: "official-repository",
    title: "PhotoCraft v0.9.0: brush-tip settings, including spacing",
    url: "https://github.com/storytold/photocraft/blob/v0.9.0/docs/brush-parity.md",
    accessedAt: "2026-10-17",
  },
  {
    id: "community-photocraft-brush-spacing", type: "third-party",
    title: "Community report: PhotoCraft brush spacing (version and OS unspecified)",
    url: "https://www.reddit.com/r/ArtCraftAI/comments/1x7rppr/photocraft_laggy_brush_is_there_a_fix/",
    accessedAt: "2026-10-17",
  },
  {
    id: "community-pdfcraft-white-cursor", type: "third-party",
    title: "Community report: PdfCraft cursor visibility (environment unspecified)",
    url: "https://www.reddit.com/r/ArtCraftAI/comments/1x7sq2x/pdfcraft_white_cursor_when_adding_text/",
    accessedAt: "2026-10-17",
  },
  {
    id: "vectorcraft-parity-0120", type: "official-repository",
    title: "VectorCraft v0.12.0: legacy .ai export and remaining interchange limits",
    url: "https://github.com/storytold/vectorcraft/blob/v0.12.0/docs/target-app-parity.md",
    accessedAt: "2026-10-17",
  },
  {
    id: "vectorcraft-packaging-0120", type: "official-repository",
    title: "VectorCraft v0.12.0: Linux package runtime requirements",
    url: "https://github.com/storytold/vectorcraft/blob/v0.12.0/docs/releasing.md",
    accessedAt: "2026-10-17",
  },
  {
    id: "vectorcraft-rpm-runtime-limits", type: "official-repository",
    title: "VectorCraft: RPM runtime requirement and Rocky Linux 9 example",
    url: "https://github.com/storytold/vectorcraft/commit/e12a670c405b5c4a059de3be02920c0c6e05b0dc",
    accessedAt: "2026-10-16",
  },
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
