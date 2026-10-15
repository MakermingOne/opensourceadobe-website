import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-11";

export const lightroomGuide: BaseAlternativeGuide & { rawTable: GuideTable; catalogTable: GuideTable } = {
  title: "Open Source Lightroom Alternatives: darktable, RawTherapee & More",
  description: "Free and open source Lightroom alternatives compared for RAW development, cataloguing and masking — with honest notes on which ones break down on large libraries.",
  h1: "Open source Lightroom alternatives",
  introduction: "Choosing an open source Lightroom alternative is difficult because Lightroom is really two products joined together: a RAW developer and a searchable catalog. Most free alternatives are excellent at one job and weaker at the other. darktable comes closest to combining both; RawTherapee and ART prioritize image development; digiKam and Shotwell prioritize organization. LightCraft aims at both but remains in development. Decide first whether rendering quality, local adjustments, or library continuity is the part you cannot compromise. A true open source Lightroom alternative must also handle your camera's RAW files without breaking metadata.",
  verdicts: [],
  rawTable: {
    caption: "Open-source RAW development options",
    columns: ["Tool", "License", "Platform", "Camera profiles", "Local masks", "Where it breaks down"],
    rows: [
      { label: "darktable", cells: ["darktable", "GPL-3.0-or-later", "Windows, macOS, Linux", "RawSpeed camera support; most modern cameras, with exceptions", "Drawn, parametric, raster, and AI object masks depending on build", "Steep learning curve; Lightroom edits do not reproduce identically and AI availability varies by package"] },
      { label: "RawTherapee", cells: ["RawTherapee", "GPL-3.0", "Windows, macOS, Linux", "Broad camera support through its RAW pipeline and enhanced LibRaw builds", "Local Adjustments using RT-spots and shape detection", "File browser is not a Lightroom-style catalog; weaker library and keyword workflow"] },
      { label: "ART", cells: ["ART", "GPL-3.0", "Windows, macOS, Linux", "RawTherapee-derived pipeline with optional LibRaw support", "Drawn and parametric masks with local-editing layers", "Smaller community and ecosystem; file browser is not a full digital-asset catalog"] },
      { label: "LightCraft", cells: ["LightCraft", "MIT OR Apache-2.0", "macOS, Windows, Linux, Web", "Native RAW decoders; exact camera and compression support varies", "Brush, gradients and range masks; subject/sky selection has documented limits", "In development despite available installers; camera color, migration and AI features need testing"] },
    ],
  },
  catalogTable: {
    caption: "Open-source catalog and library management options",
    columns: ["Tool", "License", "Platform", "Keyword/tag support", "XMP sidecar handling", "Where it breaks down"],
    rows: [
      { label: "darktable", cells: ["darktable catalog", "GPL-3.0-or-later", "Windows, macOS, Linux", "Tags, hierarchical tags, ratings, color labels, collections", "Writes its own XMP files; imports selected Lightroom metadata and limited edits", "Database and sidecar precedence require care; no direct Lightroom catalog conversion and old edit import is limited"] },
      { label: "digiKam", cells: ["digiKam", "GPL-2.0-or-later", "Windows, macOS, Linux", "Deep tags, labels, ratings, albums, searches, face and metadata tools", "Reads and writes configurable XMP sidecars; can populate its database from standardized metadata", "Cannot parse Lightroom’s proprietary catalog database; RAW development is not its main strength"] },
      { label: "Shotwell", cells: ["Shotwell", "LGPL-2.1-or-later", "Linux", "Tags, hierarchical tags, ratings, events", "Can read metadata; writing is primarily to supported image files rather than RAW sidecars", "Linux-only and much lighter than Lightroom; metadata writing to RAW files is limited"] },
    ],
  },
  options: [
    {
      name: "darktable",
      paragraphs: [
        "darktable is a GPL-3.0-or-later photography workflow application combining a database-backed lighttable with a non-destructive RAW darkroom on Windows, macOS, and Linux. It uses RawSpeed for camera files, stores metadata and edit history in its library and XMP sidecars, and processes images through a floating-point, scene-referred pipeline. That makes it the closest complete open-source Lightroom alternative here.",
        "Its strength is control. Modules cover exposure, tone, color, lens correction, denoising, sharpening, retouching, and output; masks can be drawn or parameter-driven, and 5.6 builds can add optional AI tools when the package includes them. The catalog supports collections, tags, ratings, labels, and cached previews. The failure point is transfer: darktable’s FAQ says it is not a direct Lightroom replacement, and Lightroom edit import is basic and unable to reproduce the same rendering.",
        "Choose darktable if you want one application for developing and organizing photographs and will learn its pipeline. Anyone depending on Adobe presets, cloud sync, shared catalogs, or exact rendering should migrate a copied subset first.",
      ],
    },
    {
      name: "RawTherapee",
      paragraphs: [
        "RawTherapee is a GPL-3.0 RAW processor for Windows, macOS, and Linux. Its official site emphasizes a non-destructive 32-bit floating-point engine, advanced demosaicing, color and detail controls, multi-frame and pixel-shift handling, dark-frame correction, and broad camera support. Version 5.13 was current when verified.",
        "It is strongest when image quality and explicit controls matter more than catalog convenience. Profiles can be synchronized across a batch, while Local Adjustments use RT-spots and color-difference logic. Its file browser is not a Lightroom catalog and lacks the same integrated collections, publishing, cloud, and deep library workflow. XMP editing is narrower; RawPedia says rating metadata can be read while editing XMP is unsupported in that context. Lightroom presets do not translate between different engines.",
        "Choose RawTherapee if you organize folders yourself and want careful RAW development with transparent, repeatable manual processing controls. Pair it with digiKam when searching, keywording, and collection management eventually outgrow its browser.",
      ],
    },
    {
      name: "ART",
      paragraphs: [
        "ART is a GPL-3.0 RAW processor derived from RawTherapee for Windows, macOS, and Linux. It aims to retain RawTherapee’s image quality while simplifying the interface and pipeline. It adds local editing, metadata improvements, optional XMP sidecars, OpenColorIO support, external-tool integration, and permanent snapshots in processing profiles.",
        "ART suits photographers who want RawTherapee-style output in a more directed workflow. Local edits support drawn and parametric masks, while the browser can store ratings and labels through sidecars. The weakness is library depth: this is not a Lightroom-scale catalog with mature smart collections, publishing, mobile sync, shared albums, or an Adobe-compatible preset market. Its smaller community means fewer tutorials, and its `.arp` profiles cannot interpret Lightroom presets.",
        "Choose ART when RAW development and local control are primary and a folder-based archive is acceptable. It rewards photographers who prefer deliberate manual processing. Combine it with digiKam when a large collection needs durable keywording and discovery.",
      ],
    },
    {
      name: "LightCraft",
      paragraphs: [
        "LightCraft is ArtCraft’s open-source attempt to combine a photo library and non-destructive RAW developer in Rust. Its official page lists a scene-referred 32-bit pipeline, light and color controls, local masks, native decoding for major RAW families, plus albums, ratings, flags, search, and virtualized grids.",
        "Native installers for macOS, Windows and Linux are now available, alongside a self-hostable web build. GitHub lists version 0.8.0, checked October 15, 2026; the official directory still labels it In development. Camera coverage is expanding, but measured camera-color calibration remains a documented gap. The repository describes Lightroom catalog import as one-way and approximate: unsupported profiles and AI settings are archived rather than faithfully reproduced. AI denoise is experimental, Bayer-only and requires separately installed weights. Subject and sky masks use heuristics rather than Lightroom-equivalent AI. Very large libraries and client-file results have not been independently verified here.",
        "LightCraft suits contributors and early adopters working on copies. It is not yet the choice for a photographer whose archive or deadline depends on Lightroom. The LightCraft app guide tracks its status.",
      ],
    },
    {
      name: "digiKam",
      paragraphs: [
        "digiKam is an open-source photo manager for Windows, macOS, and Linux. It is the strongest dedicated catalog here: collections, albums, hierarchical tags, ratings, labels, searches, metadata editing, duplicate tools, face features, import, export, and batch operations are central. Its database can be populated from standards-based file metadata and XMP sidecars.",
        "That makes digiKam useful during a Lightroom exit. The manual says it cannot parse proprietary databases, but it can read XMP sidecars and recover supported tags, labels, and comments. Sidecar naming and writing are configurable. The failure point is development: digiKam is not a scene-referred RAW engine with darktable’s local-adjustment depth. Lightroom smart rules, stacks, publish state, cloud albums, and full history do not arrive merely because keywords do.",
        "Choose digiKam when the archive itself is the product. Pair it with a RAW processor and test metadata round trips on copies before two applications write the same files or sidecars.",
      ],
    },
    {
      name: "Shotwell",
      paragraphs: [
        "Shotwell is a lightweight open-source photo manager for Linux. It organizes a library by events, folders, dates, hierarchical tags, ratings, and basic metadata, with non-destructive corrections for common tasks. Distribution through Linux package managers or Flathub suits GNOME desktops but not mixed-platform teams.",
        "Its appeal is simplicity. Shotwell can read common metadata and, when enabled, write titles, tags, ratings, rotation, and dates into supported JPEG, PNG, and TIFF files using EXIF, IPTC, or XMP. Its documentation identifies the migration limit: it does not write those changes to RAW files in the same way and is not a Lightroom-compatible RAW-sidecar bridge. It also lacks Lightroom’s advanced presets, masking, smart collections, tethering, cloud synchronization, and shared catalogs.",
        "Choose Shotwell for a modest, folder-based personal Linux library where speed and simplicity matter more than advanced workflow automation. For a professional archive or XMP-centered migration, digiKam or darktable is a more defensible starting point.",
      ],
    },
  ],
  sections: [
    {
      heading: "darktable vs Lightroom",
      paragraphs: [
        "darktable can replace Lightroom for photographers who are willing to adopt a different rendering system, but it does not reproduce Lightroom around a new logo. Its RAW engine is scene-referred and module-based, exposing color science and processing order more explicitly. That provides deep control and high-quality output, yet imported images will not begin with Adobe’s camera profiles or default look. A switcher must build or choose new styles instead of expecting an existing Lightroom preset to produce the same pixels.",
        "For masks and local adjustments, current darktable supports drawn and parametric masks, reusable mask combinations, and raster masks passed between modules. Version 5.6 adds an optional AI subsystem and object mask tool, but official packages differ: the project notes that its Flatpak does not include AI features. Lightroom’s polished subject selections and coordinated local tools may therefore remain easier and more consistent across installations. In the catalog, darktable handles tags, ratings, labels, collections, geotags, and database-backed search. It writes XMP sidecars automatically, but its sidecar schema and database remain darktable-specific. It can read selected Lightroom XMP metadata and a limited set of develop instructions; the project warns that the import is basic and often requires starting edits again.",
        "Large-library performance depends on previews, storage, database health, GPU support, and workflow. darktable is designed for high-volume photography and caches metadata and mipmaps, but that is not proof that a particular Lightroom catalog will feel faster after migration. Test the actual archive on the intended machine. Independent landscape, studio, and fine-art photographers who control delivery can switch. Teams relying on Lightroom cloud, mobile editing, shared Adobe presets, client galleries, or exact catalog continuity usually cannot switch without replacing several surrounding services as well as the RAW editor.",
      ],
    },
    {
      heading: "Migrating from Lightroom without losing your library",
      paragraphs: [
        "Begin with backups, not imports. Duplicate the Lightroom catalog, original photo folders, presets, exported metadata, and color profiles to separate storage. In Lightroom, write supported ratings, flags where representable, captions, GPS data, and hierarchical keywords to XMP sidecars or files. Do this on a copied test collection first: a sidecar does not contain every catalog concept, and proprietary edit history, stacks, collections, virtual copies, books, print layouts, and cloud state may not transfer.",
        "Next, choose the destination by responsibility. Import the copied folder into darktable if one application will handle both catalog and development, or into digiKam if durable metadata organization is the priority. darktable documents support for Lightroom-style sidecar names and can import tags, color labels, ratings, GPS information, and a limited set of develop steps. Its own FAQ cautions that edit conversion is unreliable, so compare representative images and expect to rebuild important looks. digiKam cannot read the proprietary Lightroom catalog, but it can build its database from supported XMP metadata.",
        "Recreate presets deliberately rather than renaming files: darktable styles, RawTherapee PP3 profiles, and ART ARP profiles describe different engines. Install the same monitor and output ICC profiles, then verify soft proofing and exports. Finally, test search, keyword hierarchy, ratings, dates, RAW/JPEG pairs, missing-file behavior, and backup restoration before moving the master archive. Keep Lightroom available until the new system has completed at least one full backup-and-restore cycle.",
      ],
    },
  ],
  faqs: [
    { question: "Can I import my Lightroom catalog into these tools?", answer: "There is no guaranteed complete conversion. LightCraft now documents one-way, approximate catalog import, with unsupported profiles and AI settings archived. darktable reads selected metadata and limited develop settings from Lightroom-style XMP sidecars; digiKam uses supported XMP fields. Test copied catalogs and compare edited images before committing your archive." },
    { question: "Will my presets work after switching?", answer: "Lightroom presets describe Adobe’s processing engine, so they do not become equivalent darktable styles, RawTherapee PP3 profiles, or ART ARP profiles. Preserve the original preset files for reference, export representative finished images, and rebuild a small number of essential looks by visual comparison instead of expecting automatic conversion." },
    { question: "Do these tools support the same camera RAW files?", answer: "Support overlaps but is not identical. darktable uses RawSpeed, while RawTherapee and ART use their own pipelines with LibRaw options; LightCraft lists a smaller set of native decoders that is still expanding. Check the exact camera model, compression mode, pixel-shift variant, and lens before moving a shoot into production." },
    { question: "Is there a free option with AI denoise or subject masking?", answer: "darktable 5.6 introduced optional AI denoise, upscale, and object masking, but the subsystem depends on how the application was built and the Flatpak currently excludes it. LightCraft advertises subject, sky, and background masks while still in development. Test model availability, hardware acceleration, output quality, and licensing in your exact installation." },
  ],
  sources: [
    { id: "darktable-about", type: "official-page", title: "darktable about and license", url: "https://www.darktable.org/about/", accessedAt },
    { id: "darktable-faq", type: "official-page", title: "darktable FAQ", url: "https://www.darktable.org/about/faq/", accessedAt },
    { id: "darktable-sidecars", type: "official-page", title: "darktable sidecar files documentation", url: "https://docs.darktable.org/usermanual/5.6/en/overview/sidecar-files/", accessedAt },
    { id: "darktable-56", type: "official-page", title: "darktable 5.6 release notes", url: "https://www.darktable.org/2026/06/darktable-5.6.0-released/", accessedAt },
    { id: "rawtherapee-home", type: "official-page", title: "RawTherapee official site", url: "https://rawtherapee.com/", accessedAt },
    { id: "rawtherapee-browser", type: "official-page", title: "RawTherapee File Browser documentation", url: "https://rawpedia.rawtherapee.com/The_File_Browser_Tab", accessedAt },
    { id: "art-home", type: "official-page", title: "ART raw image processor", url: "https://artraweditor.github.io/", accessedAt },
    { id: "lightcraft-official-alt", type: "official-page", title: "LightCraft official product page", url: "https://getartcraft.com/apps/lightcraft", accessedAt: "2026-10-15" },
    { id: "lightcraft-release-alt", type: "official-repository", title: "LightCraft v0.8.0 release notes", url: "https://github.com/storytold/lightcraft/releases/tag/v0.8.0", accessedAt: "2026-10-15" },
    { id: "lightcraft-gaps-alt", type: "official-repository", title: "LightCraft camera, migration and AI limitations", url: "https://github.com/storytold/lightcraft/blob/main/docs/gaps.md", accessedAt: "2026-10-15" },
    { id: "digikam-manual", type: "official-page", title: "digiKam manual", url: "https://docs.digikam.org/en/", accessedAt },
    { id: "digikam-database", type: "official-page", title: "digiKam database and migration documentation", url: "https://docs.digikam.org/en/getting_started/database_intro.html", accessedAt },
    { id: "shotwell-home", type: "official-page", title: "Shotwell official project site", url: "https://shotwell-project.org/", accessedAt },
    { id: "shotwell-files", type: "official-page", title: "Shotwell metadata and photo files documentation", url: "https://shotwell-project.org/doc/html/other-files.html", accessedAt },
  ],
};
