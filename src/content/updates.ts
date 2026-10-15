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

// Dated editorial records: future refreshes add a new entry rather than rewriting history.
export const dailyUpdates: DailyUpdate[] = [{
  date: "2026-10-16",
  title: "PdfCraft update: interface-language limits and a printing report",
  seoTitle: "PdfCraft Update: Language Limits & Printing — Oct 16, 2026",
  description: "PdfCraft’s October 15 documentation correction identifies interface-language and Linux package-signing limits. A separate Reddit report raises print-quality questions.",
  introduction: "Our October 16 check found no newer official app release than the versions in the October 15 brief. Instead, PdfCraft’s October 15 documentation correction makes several existing limitations more explicit. We also record a new community printing report with its missing details. These are a documentation review and attributed feedback, not a new release or an independent test.",
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
      id: "community-pdfcraft-print-quality", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Community report", eventDate: "2026-10-15",
      title: "A user reports photo-paper and print-quality settings not carrying through",
      summary: "In an October 15 r/ArtCraftAI post, a user reports selecting photo paper and high print quality but receiving plain-paper, normal-quality output through PdfCraft. The post does not identify an app version, operating system, package or printer. We have not reproduced the result or verified a fix.",
      impact: "Before printing a larger photo job, check a single page, paper selection and the printer driver’s effective settings. A useful upstream report needs the version, platform, package and printer model. This single report does not establish a failure across all PdfCraft builds.",
      sourceTitle: "Reddit: PdfCraft printing-quality report", sourceUrl: "https://www.reddit.com/r/ArtCraftAI/comments/1x6uyfh/printing/",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "Read PdfCraft’s printing notes",
    },
  ],
}, {
  date: "2026-10-15",
  modifiedDate: "2026-10-15",
  title: "ArtCraft update: PhotoCraft 0.9.0 and a new release wave",
  seoTitle: "ArtCraft Update: PhotoCraft 0.9.0 & New Releases — Oct 15, 2026",
  description: "Twelve new official app releases, including PhotoCraft 0.9.0, VectorCraft 0.11.0 and LightCraft 0.8.0, plus PdfCraft printing notes and attributed community reports.",
  introduction: "Our October 15 morning check found twelve newer Crafting App releases published October 14 UTC. PhotoCraft is now 0.9.0; VectorCraft, FilmCraft, LightCraft and eight other tools also have new builds. The earlier coverage of PdfCraft 0.8.0 and Launcher 0.4.1 remains below, with the original release dates preserved. We also clarify PdfCraft’s browser-printing documentation and separate Reddit reports from official product facts. A version bump does not establish production readiness, and these changes have not been independently tested here.",
  entries: [
    {
      id: "photocraft-090", appSlug: "photocraft", appName: "PhotoCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "PhotoCraft 0.9.0: printing, automation and export changes",
      summary: "The official release notes list system printing through craft-print, crop and straighten automation, profileless grayscale export fixes and native-document saving changes. Our standalone download links now point to verified 0.9.0 packages; the official product page still lists an older version.",
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
      relatedPath: "/apps/", relatedLabel: "Find FigCraft and its official repository",
    },
    {
      id: "effectcraft-0100", appSlug: "effectcraft", appName: "EffectCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "EffectCraft 0.10.0: mattes, particles and tracker fixes",
      summary: "The release notes list track mattes limiting adjustment-layer effects, changes to particle and time effects, and improved track-point interaction when zoomed out. These are project-reported changes to the motion-graphics workflow.",
      impact: "Retry a small copied composition that uses these features and inspect the rendered frames. The directory still labels EffectCraft In development; do not infer full After Effects project or plug-in compatibility from these fixes.",
      sourceTitle: "EffectCraft v0.10.0 release notes", sourceUrl: "https://github.com/storytold/effectcraft/releases/tag/v0.10.0",
      relatedPath: "/apps/", relatedLabel: "Find EffectCraft’s official project",
    },
    {
      id: "designcraft-080", appSlug: "designcraft", appName: "DesignCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "DesignCraft 0.8.0: saving and recovery changes",
      summary: "The official notes list atomic replacement for saves and exports, separate recovery data for each running app, unsaved-document prompts and preservation of live state when persistence fails.",
      impact: "Check save, reopen and recovery behavior on a copy of a layout. These changes are not an independent guarantee against data loss; keep backups and verify exported pages before using an early build for print delivery.",
      sourceTitle: "DesignCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/designcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/", relatedLabel: "Explore DesignCraft’s publishing workflow",
    },
    {
      id: "wordcraft-070", appSlug: "wordcraft", appName: "WordCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "WordCraft 0.7.0: document layout, pictures and fonts",
      summary: "Release notes cover section placement and paragraph spacing, WMF and EMF picture insertion, symbol-font rendering and reading RTF using its code page. These changes focus on how imported documents look and behave.",
      impact: "Reopen a copied document containing sections, legacy pictures or multilingual text, then compare page breaks and output. A closer rendering in these cases does not establish complete Microsoft Word file fidelity.",
      sourceTitle: "WordCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/wordcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/", relatedLabel: "Find WordCraft’s official release",
    },
    {
      id: "soundcraft-070", appSlug: "soundcraft", appName: "SoundCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "SoundCraft 0.7.0: MIDI windows and track-control fixes",
      summary: "The official notes list clearing VCA assignments, command-filter handling, MIDI editor targeting and window behavior, and filmstrip thumbnails following the clip’s own movie time.",
      impact: "Retest track controls and MIDI editing in a small copied session. These changes do not verify your audio interface, plug-in collection or a complete Audition or DAW migration; check those dependencies separately.",
      sourceTitle: "SoundCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/soundcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/", relatedLabel: "Find SoundCraft’s audio workflow",
    },
    {
      id: "deckcraft-070", appSlug: "deckcraft", appName: "DeckCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "DeckCraft 0.7.0: PowerPoint-style slide rendering changes",
      summary: "Release notes describe changes to superscript and subscript spacing, theme backgrounds, gradient ramps, PPTX picture fills and placeholder geometry. They target specific slide-rendering differences rather than promise identical presentations.",
      impact: "Compare imported slides with the original, especially fonts, dark themes and image fills. Rehearse a presentation and inspect exported output before relying on it in front of an audience.",
      sourceTitle: "DeckCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/deckcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/", relatedLabel: "Find DeckCraft’s presentation project",
    },
    {
      id: "cadcraft-070", appSlug: "cadcraft", appName: "CADCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "CADCraft 0.7.0: selection, plotting and hatch controls",
      summary: "The release notes list picking SOLID entities inside their fill, model-space plotting centers and offsets, a hatch and gradient dialog, and changes to invalid viewport handling.",
      impact: "Test a copied drawing and compare plotted scale, offsets, fills and selection behavior. Keep your existing validation workflow for contractual drawings; these notes are not proof of complete AutoCAD or DWG fidelity.",
      sourceTitle: "CADCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/cadcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/", relatedLabel: "Find CADCraft’s official project",
    },
    {
      id: "gridcraft-070", appSlug: "gridcraft", appName: "GridCraft", kind: "Official release", eventDate: "2026-10-14",
      title: "GridCraft 0.7.0: formulas, spill ranges and XLSX checks",
      summary: "Official notes list recalculating dependents after large spill ranges are cleared, LAMBDA argument handling, nested SUBTOTAL behavior and rejection of sheet names XLSX cannot store.",
      impact: "Compare calculated values and exported workbooks against trusted results, particularly for reports that use dynamic arrays or subtotals. Keep originals and audit important totals; fixes to individual formulas do not establish general Excel compatibility.",
      sourceTitle: "GridCraft v0.7.0 release notes", sourceUrl: "https://github.com/storytold/gridcraft/releases/tag/v0.7.0",
      relatedPath: "/apps/", relatedLabel: "Find GridCraft’s spreadsheet project",
    },
    {
      id: "pdfcraft-web-printing", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Documentation update",
      title: "PdfCraft browser printing: a clarification from the 0.8.0 docs",
      summary: "The gaps document included in the published 0.8.0 tag says web printing was added through the browser print dialog and records that gap as closed on October 12. The current README still lists web printing among missing features. This is a documentation clarification, not a new release today.",
      impact: "Our guide no longer states that web printing is simply unavailable. Check the browser build and its actual printed output; browser printing does not establish that every desktop package can detect your physical printer. We have not independently tested the feature.",
      sourceTitle: "PdfCraft v0.8.0 documented gaps and closed web-printing gap", sourceUrl: "https://github.com/storytold/pdfcraft/blob/v0.8.0/docs/gaps.md",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "Read PdfCraft’s platform and printing notes",
    },
    {
      id: "community-pdfcraft-printing", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Community report",
      title: "PdfCraft users ask about missing physical printers",
      summary: "An October 14 r/ArtCraftAI post reports that PdfCraft’s print destination list shows only PDF output rather than installed physical or network printers. The post does not establish a universal failure across versions or packages; we have not reproduced the issue.",
      impact: "If printing matters to your workflow, test printer detection and a real page before switching. Include your operating system, package format and app version in an upstream report. Do not treat a Reddit reply or an AI-generated diagnosis as a verified fix, and keep another reader available for printing.",
      sourceTitle: "Reddit: PdfCraft physical-printer detection question", sourceUrl: "https://www.reddit.com/r/ArtCraftAI/comments/1x5kde8/pdfcraft_usa_solo_stampa_in_pdf_non_c%C3%A8_la/",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "Check PdfCraft’s platform limitations",
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
      impact: "Our download guide now links to the verified 0.8.0 packages. If an earlier build had text-editing or document-handling problems, retry a copied PDF and compare the saved output in another reader. These are project-reported changes, not fixes or performance gains independently verified by OpenSourceAdobe.",
      sourceTitle: "PdfCraft v0.8.0 release notes", sourceUrl: "https://github.com/storytold/pdfcraft/releases/tag/v0.8.0",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "PdfCraft official downloads and guide",
    },
    {
      id: "pdfcraft-current-limits", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Documentation update",
      title: "PdfCraft’s documented limits: check conversion, OCR and signatures",
      summary: "The current README identifies PdfCraft as alpha. It documents gaps in Office-to-PDF conversion, Word export layout, complex existing-text editing, non-Latin OCR, preflight and advanced signature validation. This is a review of the documentation available today, not an announcement that those limitations or features first appeared today.",
      impact: "Reading, organizing, combining and splitting are practical tasks to evaluate first. Keep a proven tool for requirements the project does not yet meet, especially regulated signatures, print compliance or sensitive redaction. We have not independently validated security-sensitive output.",
      sourceTitle: "PdfCraft README: current status and remaining gaps", sourceUrl: "https://github.com/storytold/pdfcraft#whats-next",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "Check PdfCraft’s Acrobat workflow boundaries",
    },
    {
      id: "community-android-ports", appSlug: "pdfcraft", appName: "PdfCraft", kind: "Community report",
      title: "Reddit users share Android ports; official support is unchanged",
      summary: "A thread in r/ArtCraftAI lists community Android ports of PhotoCraft, WordCraft, LightCraft and PdfCraft. These repositories are not the official storytold desktop releases. The post is a community report; we have not tested the ports or reviewed their installers.",
      impact: "Do not read a community port as official Android availability. Our download guides continue to link to verified official packages. If you explore a fork, check who maintains it and its relationship to the upstream project; this brief does not recommend installing its APK.",
      sourceTitle: "Reddit: community-maintained Android ports of ArtCraft apps", sourceUrl: "https://www.reddit.com/r/ArtCraftAI/comments/1x5ncx1/a_list_of_android_ports_created_for_artcraft_apps/",
      relatedPath: "/apps/pdfcraft/", relatedLabel: "See PdfCraft’s official platform options",
    },
  ],
}, {
  date: "2026-10-13",
  title: "ArtCraft update: FigCraft joins the lineup and four editors get new releases",
  seoTitle: "ArtCraft Update: FigCraft & New Releases — Oct 13, 2026",
  description: "FigCraft joins the 13-app ArtCraft family. PhotoCraft, VectorCraft, FilmCraft and LightCraft have new releases, with practical notes for early adopters.",
  introduction: "ArtCraft’s official directory now includes 13 apps. This October 13 brief covers the newly listed FigCraft, four recent editor releases and updated LightCraft migration guidance. The releases below were published October 12 UTC and checked by OpenSourceAdobe on October 13; this is a dated source review, not a hands-on test.",
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
    {
      id: "lightcraft-migration", appSlug: "lightcraft", appName: "LightCraft", kind: "Documentation update",
      title: "LightCraft migration and AI features: read the limits first",
      summary: "The repository documents one-way, approximate Lightroom catalog import: unsupported profiles and AI settings are archived rather than faithfully reproduced. Experimental Bayer AI denoise needs separately installed weights; subject and sky selection still have heuristic limits.",
      impact: "Back up the catalog and originals, import a copy and compare edited images. Do not expect Lightroom presets or AI settings to recreate the same look. This is a documentation check, not a claim that these capabilities first shipped today.",
      sourceTitle: "LightCraft documented gaps", sourceUrl: "https://github.com/storytold/lightcraft/blob/main/docs/gaps.md",
      relatedPath: "/alternatives/lightroom/", relatedLabel: "Compare Lightroom alternatives",
    },
  ],
}];
dailyUpdates.sort((a, b) => b.date.localeCompare(a.date));

export function updatePath(date: string) { return `/updates/${date}/`; }
export const latestUpdateDate = dailyUpdates[0].date;
export function updatesForApp(slug?: string) {
  return dailyUpdates.flatMap((issue) => issue.entries.filter((entry) => !slug || entry.appSlug === slug).map((entry) => ({ ...entry, date: issue.date })));
}
