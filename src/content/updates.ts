export type UpdateKind = "Official release" | "Project announcement" | "Documentation update" | "Community report";
export type UpdateEntry = {
  id: string;
  appSlug: string;
  appName: string;
  kind: UpdateKind;
  title: string;
  summary: string;
  impact: string;
  sourceTitle: string;
  sourceUrl: string;
  eventDate?: string;
  relatedPath: string;
  relatedLabel: string;
};
export type DailyUpdate = {
  date: string;
  modifiedDate?: string;
  title: string;
  description: string;
  seoTitle: string;
  introduction: string;
  entries: UpdateEntry[];
};

export const dailyUpdates: DailyUpdate[] = [{
  date: "2026-10-17",
  modifiedDate: "2026-10-19",
  title: "VectorCraft 0.12.0 and FigCraft documentation update",
  seoTitle: "ArtCraft Update: VectorCraft & FigCraft — Oct 17, 2026",
  description: "Official VectorCraft 0.12.0 release notes and FigCraft’s dated development documentation for opt-in file access.",
  introduction: "Official VectorCraft 0.12.0 release notes cover legacy Illustrator export, browser pen input, a Dimension tool and Linux packaging changes. The release was published October 16 UTC. An October 17 FigCraft documentation commit describes opt-in file-access controls in development; it is not a new installer release. These summaries report upstream sources, not independent tests.",
  entries: [
    {
      id: "vectorcraft-0120", appSlug: "vectorcraft", appName: "VectorCraft", kind: "Official release", eventDate: "2026-10-16",
      title: "VectorCraft 0.12.0 adds legacy .ai export and browser pen input",
      summary: "Official release notes list legacy .ai export, a Dimension tool, browser Apple Pencil and touch handling, portable mode and an RPM dependency correction. The tagged documentation limits legacy version 7 .ai export to one artboard per file without transparency, and still identifies reliable Illustrator file exchange as a gap. These are project-reported changes, not our independent tests.",
      impact: "Try a copied illustration and reopen exported files in the receiving application. Browser pen input does not establish a native iPad or Android app. The RPM change now appears in a published release, but enforces the libm GLIBC_2.35 requirement rather than making older RHEL systems compatible. Check the 0.12.0 GitHub release; the product page still lists older downloads.",
      sourceTitle: "VectorCraft v0.12.0 official release notes", sourceUrl: "https://github.com/storytold/vectorcraft/releases/tag/v0.12.0",
      relatedPath: "/apps/vectorcraft/", relatedLabel: "Check VectorCraft’s current release and export limits",
    },
    {
      id: "figcraft-automation-roots-docs", appSlug: "figcraft", appName: "FigCraft", kind: "Documentation update", eventDate: "2026-10-17",
      title: "FigCraft documents opt-in file-access boundaries for agents",
      summary: "An October 17 development commit documents opt-in read and write folders for MCP and desktop automation. It describes separate --automation-read-root and --automation-write-root flags, refusal of paths outside those folders, and configuration on the desktop app when attaching an MCP client. Without the flags, behavior is unchanged.",
      impact: "This is not a new release: the latest installer remains 0.6.0, whose tagged MCP documentation does not contain these options. Do not assume an installed build supports them. The development docs also exclude the app’s own storage and describe a path-check race; these controls are not a complete operating-system sandbox. Check your exact build before giving an agent access to working files.",
      sourceTitle: "FigCraft October 17 automation-root documentation commit", sourceUrl: "https://github.com/storytold/figcraft/commit/ac4b98dbd72cea838447bd34621a47f1d40f0801",
      relatedPath: "/github/", relatedLabel: "Find FigCraft’s official repository and release",
    },
  ],
}, {
  date: "2026-10-16",
  modifiedDate: "2026-10-19",
  title: "Official documentation: PdfCraft limits and VectorCraft Linux compatibility",
  seoTitle: "ArtCraft Update: PDF Limits & VectorCraft Linux — Oct 16, 2026",
  description: "Official October 15 documentation changes covering PdfCraft interface languages, package signing and VectorCraft Linux RPM requirements.",
  introduction: "Two October 15 official documentation changes clarify PdfCraft interface-language and package-signing limits and VectorCraft’s Linux RPM runtime dependency. These are dated upstream documentation changes, not new app releases or independently verified fixes.",
  entries: [
    {
      id: "pdfcraft-language-package-limits", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Documentation update", eventDate: "2026-10-15",
      title: "PdfCraft clarifies interface-language and package-signing limits",
      summary: "An October 15 official documentation correction marks localization and installers as partial. It reports missing-glyph boxes in Chinese release interfaces, no bundled release font for Telugu, and an Arabic interface that is not mirrored. It also states that macOS and Windows releases are signed while Linux packages are unsigned. These are documented limitations, not newly shipped features.",
      impact: "If you need one of these interface languages, check the actual build before switching. Interface localization is separate from PDF text rendering and OCR language support. For Linux, use the official release and compare its checksum; a matching checksum alone does not establish a signed package or an independent security review.",
      sourceTitle: "PdfCraft October 15 documentation correction", sourceUrl: "https://github.com/storytold/pdfcraft/commit/953ac1483f4f8f1e3ac755571f50a55381b74581",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "Check PdfCraft’s language and platform limits",
    },
    {
      id: "vectorcraft-rpm-runtime-limits", appSlug: "vectorcraft", appName: "VectorCraft", kind: "Documentation update", eventDate: "2026-10-15",
      title: "VectorCraft documents a Linux RPM compatibility boundary",
      summary: "An October 15 official packaging commit explains that RPM builds require libm’s GLIBC_2.35 capability. It records VectorCraft 0.10.0 installing on Rocky Linux 9 but failing to start because libc backports did not provide the required libm symbols. The development change tightens the declared dependency; it does not establish that existing release packages include that change.",
      impact: "This is a documentation and packaging change, not a new release or a verified fix for your installation. On RHEL or Rocky Linux 9, do not assume a successful RPM install proves compatibility. Check the package’s runtime requirements and test startup before moving work. The older-version example does not establish identical behavior in 0.11.0.",
      sourceTitle: "VectorCraft: RPM runtime requirement and Rocky Linux 9 example", sourceUrl: "https://github.com/storytold/vectorcraft/commit/e12a670c405b5c4a059de3be02920c0c6e05b0dc",
      relatedPath: "/apps/vectorcraft/", relatedLabel: "Check VectorCraft’s Linux platform notes",
    },
  ],
}, {
  date: "2026-10-15",
  modifiedDate: "2026-10-19",
  title: "ArtCraft update: PhotoCraft 0.9.0 and a new release wave",
  seoTitle: "ArtCraft Update: PhotoCraft 0.9.0 & New Releases — Oct 15, 2026",
  description: "Official releases including PhotoCraft 0.9.0, VectorCraft 0.11.0, LightCraft 0.8.0, PdfCraft 0.8.0 and ArtCraft Launcher 0.4.1.",
  introduction: "Official releases published October 14 UTC include PhotoCraft 0.9.0, VectorCraft 0.11.0, LightCraft 0.8.0 and nine other Crafting Apps. This brief also retains the official PdfCraft 0.8.0 and Launcher 0.4.1 releases with their original publication dates. Release notes describe project-reported changes and do not establish production readiness.",
  entries: [
    {
      id: "photocraft-090", appSlug: "photocraft", appName: "PhotoCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "PhotoCraft 0.9.0: printing, automation and export changes",
      summary: "The official release notes list system printing through craft-print, crop and straighten automation, profileless grayscale export fixes and native-document saving changes. The official product page may still list an older version than the GitHub release.",
      impact: "Try a copied document and compare its saved file, exported image and printed output with your usual workflow. PhotoCraft remains Early alpha: these release notes do not establish Photoshop-perfect PSD rendering, plug-in compatibility or dependable client delivery.",
      sourceTitle: "PhotoCraft v0.9.0 release notes", sourceUrl: "https://github.com/storytold/photocraft/releases/tag/v0.9.0",
      relatedPath: "/apps/photocraft/", relatedLabel: "PhotoCraft downloads and workflow boundaries",
    },
    {
      id: "vectorcraft-0110", appSlug: "vectorcraft", appName: "VectorCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "VectorCraft 0.11.0: artboards and Illustrator-data imports",
      summary: "The release notes describe artboard movement fixes, importing a PDF with editing data onto its artboard with bleed, and changes to linked images and gradients in Illustrator editing data. This is broader import handling, not a claim of complete Illustrator interchange.",
      impact: "Retest copies of the specific PDF or .ai files that failed before. The repository still identifies faithful real-world layer and group structure as a gap. Keep a cleanup and export-check step before handing a document to an Illustrator user.",
      sourceTitle: "VectorCraft v0.11.0 release notes", sourceUrl: "https://github.com/storytold/vectorcraft/releases/tag/v0.11.0",
      relatedPath: "/apps/vectorcraft/", relatedLabel: "Check VectorCraft file exchange",
    },
    {
      id: "lightcraft-080", appSlug: "lightcraft", appName: "LightCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "LightCraft 0.8.0: folder imports and album creation",
      summary: "Release notes list HEIC, HEIF and NRW import from folders, an Include selected photos option when creating an album, and filmstrip scrolling changes. The official directory still marks LightCraft In development.",
      impact: "Test files from your own camera and phone, including metadata and exported color. These additions do not resolve the documented limits in camera calibration, approximate Lightroom migration or experimental AI denoise and masks.",
      sourceTitle: "LightCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/lightcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/lightcraft/", relatedLabel: "LightCraft RAW and library guide",
    },
    {
      id: "filmcraft-080", appSlug: "filmcraft", appName: "FilmCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "FilmCraft 0.8.0: captions, audio export and transitions",
      summary: "The official notes list preservation of fractional TTML caption offsets, 32-bit integer and float audio export, raw ADTS AAC import, and adjustment-layer effects fading through transitions instead of cutting in.",
      impact: "Compare a short captioned sequence and exported audio with your source material before moving a larger project. The repository still says direct .prproj import is missing; a new FilmCraft release does not make Premiere project files interchangeable.",
      sourceTitle: "FilmCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/filmcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/filmcraft/", relatedLabel: "FilmCraft editing and project interchange",
    },
    {
      id: "figcraft-060", appSlug: "figcraft", appName: "FigCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "FigCraft 0.6.0: templates, file export and online sharing",
      summary: "Release notes cover starter templates, online-file ownership and recovery, sharing terms and changes to .fig export for instances, variables and styles. The repository describes live collaboration as a preview, with best-effort Figma file support.",
      impact: "Local editing and online sharing are different privacy choices. Share Online uploads a file to a server; edit or view links grant access, and stopping sharing is not the same as removing the stored file. Read the project’s sharing terms before uploading confidential designs.",
      sourceTitle: "FigCraft v0.6.0 release notes", sourceUrl: "https://github.com/storytold/figcraft/releases/tag/v0.6.0",
      relatedPath: "/apps/figcraft/", relatedLabel: "Find FigCraft and its official repository",
    },
    {
      id: "effectcraft-0100", appSlug: "effectcraft", appName: "EffectCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "EffectCraft 0.10.0: mattes, particles and tracker fixes",
      summary: "The release notes list track mattes limiting adjustment-layer effects, changes to particle and time effects, and improved track-point interaction when zoomed out. These are project-reported changes to the motion-graphics workflow.",
      impact: "Retry a small copied composition that uses these features and inspect the rendered frames. The directory still labels EffectCraft In development; do not infer full After Effects project or plug-in compatibility from these fixes.",
      sourceTitle: "EffectCraft v0.10.0 release notes", sourceUrl: "https://github.com/storytold/effectcraft/releases/tag/v0.10.0",
      relatedPath: "/apps/effectcraft/", relatedLabel: "Find EffectCraft’s official project",
    },
    {
      id: "designcraft-080", appSlug: "designcraft", appName: "DesignCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "DesignCraft 0.8.0: saving and recovery changes",
      summary: "The official notes list atomic replacement for saves and exports, separate recovery data for each running app, unsaved-document prompts and preservation of live state when persistence fails.",
      impact: "Check save, reopen and recovery behavior on a copy of a layout. These changes are not an independent guarantee against data loss; keep backups and verify exported pages before using an early build for print delivery.",
      sourceTitle: "DesignCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/designcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/designcraft/", relatedLabel: "Explore DesignCraft’s publishing workflow",
    },
    {
      id: "wordcraft-070", appSlug: "wordcraft", appName: "WordCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "WordCraft 0.7.0: document layout, pictures and fonts",
      summary: "Release notes cover section placement and paragraph spacing, WMF and EMF picture insertion, symbol-font rendering and reading RTF using its code page. These changes focus on how imported documents look and behave.",
      impact: "Reopen a copied document containing sections, legacy pictures or multilingual text, then compare page breaks and output. A closer rendering in these cases does not establish complete Microsoft Word file fidelity.",
      sourceTitle: "WordCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/wordcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/wordcraft/", relatedLabel: "Find WordCraft’s official release",
    },
    {
      id: "soundcraft-070", appSlug: "soundcraft", appName: "SoundCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "SoundCraft 0.7.0: MIDI windows and track-control fixes",
      summary: "The official notes list clearing VCA assignments, command-filter handling, MIDI editor targeting and window behavior, and filmstrip thumbnails following the clip’s own movie time.",
      impact: "Retest track controls and MIDI editing in a small copied session. These changes do not verify your audio interface, plug-in collection or a complete Audition or DAW migration; check those dependencies separately.",
      sourceTitle: "SoundCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/soundcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/soundcraft/", relatedLabel: "Find SoundCraft’s audio workflow",
    },
    {
      id: "deckcraft-070", appSlug: "deckcraft", appName: "DeckCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "DeckCraft 0.7.0: PowerPoint-style slide rendering changes",
      summary: "Release notes describe changes to superscript and subscript spacing, theme backgrounds, gradient ramps, PPTX picture fills and placeholder geometry. They target specific slide-rendering differences rather than promise identical presentations.",
      impact: "Compare imported slides with the original, especially fonts, dark themes and image fills. Rehearse a presentation and inspect exported output before relying on it in front of an audience.",
      sourceTitle: "DeckCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/deckcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/deckcraft/", relatedLabel: "Find DeckCraft’s presentation project",
    },
    {
      id: "cadcraft-070", appSlug: "cadcraft", appName: "CADCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "CADCraft 0.7.0: selection, plotting and hatch controls",
      summary: "The release notes list picking SOLID entities inside their fill, model-space plotting centers and offsets, a hatch and gradient dialog, and changes to invalid viewport handling.",
      impact: "Test a copied drawing and compare plotted scale, offsets, fills and selection behavior. Keep your existing validation workflow for contractual drawings; these notes are not proof of complete AutoCAD or DWG fidelity.",
      sourceTitle: "CADCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/cadcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/cadcraft/", relatedLabel: "Find CADCraft’s official project",
    },
    {
      id: "gridcraft-070", appSlug: "gridcraft", appName: "GridCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "GridCraft 0.7.0: formulas, spill ranges and XLSX checks",
      summary: "Official notes list recalculating dependents after large spill ranges are cleared, LAMBDA argument handling, nested SUBTOTAL behavior and rejection of sheet names XLSX cannot store.",
      impact: "Compare calculated values and exported workbooks against trusted results, particularly for reports that use dynamic arrays or subtotals. Keep originals and audit important totals; fixes to individual formulas do not establish general Excel compatibility.",
      sourceTitle: "GridCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/gridcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/gridcraft/", relatedLabel: "Find GridCraft’s spreadsheet project",
    },
    {
      id: "launcher-041", appSlug: "craft-launcher", appName: "ArtCraft Launcher", kind: "Official release", eventDate: "2026-10-13",
      title: "ArtCraft Launcher 0.4.1 adds FigCraft",
      summary: "The official 0.4.1 release notes list the addition of FigCraft. Launcher is the separate ArtCraft project for installing, updating and opening the Crafting Apps; it is not the AI image and video studio.",
      impact: "If an older Launcher did not show FigCraft, check this release and the packages available for your system. Use storytold/craft-launcher for the official project; similarly named community launchers are separate products. Installing a newer Launcher does not change an app’s alpha status.",
      sourceTitle: "ArtCraft Launcher v0.4.1 release notes", sourceUrl: "https://github.com/storytold/craft-launcher/releases/tag/v0.4.1",
      relatedPath: "/github/", relatedLabel: "Find official ArtCraft repositories",
    },
    {
      id: "pdfcraft-080", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "PdfCraft 0.8.0: text, rendering and document-handling changes",
      summary: "The official release notes list font-metric and Unicode changes, preservation of neighboring text during replacements, large-document preparation away from the UI thread, and fixes to links, annotations and form handling. Version 0.8.0 supersedes the 0.7.1 download snapshot we checked earlier; the product page may still show an older build.",
      impact: "If an earlier build had text-editing or document-handling problems, retry a copied PDF and compare the saved output in another reader. These are project-reported changes, not fixes or performance gains independently verified by OpenSourceAdobe.",
      sourceTitle: "PdfCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/pdfcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "PdfCraft official downloads and guide",
    },
  ],
}, {
  date: "2026-10-13",
  modifiedDate: "2026-10-19",
  title: "ArtCraft update: FigCraft joins the lineup and four editors get new releases",
  seoTitle: "ArtCraft Update: FigCraft & New Releases — Oct 13, 2026",
  description: "FigCraft joins the 13-app ArtCraft family. PhotoCraft, VectorCraft, FilmCraft and LightCraft have new releases, with practical notes for early adopters.",
  introduction: "The official ArtCraft directory lists FigCraft for interface design and prototyping. This brief also covers PhotoCraft, VectorCraft, FilmCraft and LightCraft releases published October 12 UTC. These are summaries of official sources, not hands-on tests.",
  entries: [
    {
      id: "figcraft-lineup", appSlug: "figcraft", appName: "FigCraft", kind: "Project announcement",
      title: "FigCraft joins the ArtCraft directory",
      summary: "The official directory adds FigCraft for interface design and prototyping. Its product materials describe frames, auto layout, components and variants. It is listed as Early alpha, with desktop and Web targets; the GitHub release checked today is 0.5.1.",
      impact: "Designers now have a Figma-style project to explore in the ArtCraft family. Try a small prototype first, and verify file interchange and collaboration before moving a team’s work. Newly listed apps may not immediately appear in every Launcher build.",
      sourceTitle: "FigCraft official product page", sourceUrl: "https://getartcraft.com/apps/figcraft",
      relatedPath: "/apps/", relatedLabel: "Browse all 13 ArtCraft apps",
    },
    {
      id: "photocraft-082", appSlug: "photocraft", appName: "PhotoCraft", kind: "Official release", eventDate: "2026-10-12",
      title: "PhotoCraft 0.8.2: brush, saving and workspace changes",
      summary: "The official release notes list changes to shared panel docking, brush-stroke commits, background saving and canvas controls. The product-page download listing may lag behind this GitHub release.",
      impact: "If brush interaction or saving interrupted your earlier test, retry a copied document in this build. Check both editing and exported PSD results. PhotoCraft remains Early alpha; these fixes do not establish full Photoshop compatibility.",
      sourceTitle: "PhotoCraft v0.8.2 release notes", sourceUrl: "https://github.com/storytold/photocraft/releases/tag/v0.8.2",
      relatedPath: "/apps/photocraft/", relatedLabel: "PhotoCraft features and limitations",
    },
    {
      id: "vectorcraft-0100", appSlug: "vectorcraft", appName: "VectorCraft", kind: "Official release", eventDate: "2026-10-12",
      title: "VectorCraft 0.10.0: text and gradient-mesh fixes",
      summary: "Release notes list fixes for coloring selected text, font sizing after scaling, proportional metrics and gradient-mesh edits. The official directory still labels VectorCraft In development.",
      impact: "Retest typography-heavy posters or illustrations if an earlier build changed text unexpectedly. SVG and PDF workflows remain the practical starting point; do not assume reliable layered Illustrator file interchange.",
      sourceTitle: "VectorCraft v0.10.0 release notes", sourceUrl: "https://github.com/storytold/vectorcraft/releases/tag/v0.10.0",
      relatedPath: "/apps/vectorcraft/", relatedLabel: "VectorCraft workflow guide",
    },
    {
      id: "filmcraft-072", appSlug: "filmcraft", appName: "FilmCraft", kind: "Official release", eventDate: "2026-10-12",
      title: "FilmCraft 0.7.2: docking, sequence markers and export fixes",
      summary: "The release notes list panel-docking changes, preservation of nested sequence markers in OTIO export and a loudness correction in export. FilmCraft remains In development in the official directory.",
      impact: "Compare a short sequence’s markers and exported audio with your source project. Direct .prproj opening remains a documented gap; interchange and codec behavior should be checked on the exact media you use.",
      sourceTitle: "FilmCraft v0.7.2 release notes", sourceUrl: "https://github.com/storytold/filmcraft/releases/tag/v0.7.2",
      relatedPath: "/apps/filmcraft/", relatedLabel: "FilmCraft editing and interchange guide",
    },
    {
      id: "lightcraft-071", appSlug: "lightcraft", appName: "LightCraft", kind: "Official release", eventDate: "2026-10-12",
      title: "LightCraft 0.7.1: brush masks and RAW-file fixes",
      summary: "Official release notes list docking changes, brush-mask behavior fixes and RAW-file handling changes. Native installers are available; the official directory still marks LightCraft In development.",
      impact: "Try a copied folder from your own camera, including its compression mode. Compare color, masks and metadata against your usual editor. Available installers do not prove camera-profile parity or dependable migration of a large library.",
      sourceTitle: "LightCraft v0.7.1 release notes", sourceUrl: "https://github.com/storytold/lightcraft/releases/tag/v0.7.1",
      relatedPath: "/apps/lightcraft/", relatedLabel: "LightCraft camera and library guide",
    },
  ],
}];

dailyUpdates.sort((a, b) => b.date.localeCompare(a.date));

export function updatePath(date: string) { return `/updates/${date}/`; }
export const latestUpdateDate = dailyUpdates[0].date;
export function updatesForApp(slug?: string) {
  return dailyUpdates.flatMap((issue) => issue.entries.filter((entry) => !slug || entry.appSlug === slug).map((entry) => ({ ...entry, date: issue.date })));
}
