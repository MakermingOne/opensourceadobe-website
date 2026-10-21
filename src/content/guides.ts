import { additionalGuides, type AdditionalGuideSlug } from "@/content/additional-guides";

export type GuideFeature = {
  title: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type AppGuide = {
  slug: "vectorcraft" | "filmcraft" | "lightcraft" | "pdfcraft" | AdditionalGuideSlug;
  headline?: string;
  applicationCategory: string;
  intro: string;
  verdict: string;
  verdictDetail: string;
  bestFor: string;
  checkFirst: string;
  features: GuideFeature[];
  tryIf: string[];
  waitIf: string[];
  platformNotes: Array<[string, string]>;
  faqs: GuideFaq[];
};

export const guideBySlug: Record<AppGuide["slug"], AppGuide> = {
  ...additionalGuides,
  pdfcraft: {
    slug: "pdfcraft",
    headline: "Download PdfCraft: ArtCraft’s PDF workbench",
    applicationCategory: "UtilitiesApplication",
    intro: "Want to download PdfCraft? This guide covers PdfCraft by ArtCraft, a free, open-source desktop PDF tool—not other products with a similar name. Start with an official Windows, macOS or Linux package below, then test a copied document before replacing Acrobat. The project is still Early alpha.",
    verdict: "A useful alpha to try for reading, combining, splitting and organizing PDFs—not a complete Acrobat Pro replacement.",
    verdictDetail: "The official repository describes viewing, comments, forms, page organization, passwords and basic signatures. It also documents missing Office-to-PDF conversion, layout loss in Word export, limits in existing-text editing and non-Latin OCR, and gaps in preflight and advanced signature validation. If one of those tasks is the reason you need Acrobat, downloading PdfCraft alone will not solve it.",
    bestFor: "Local PDF reading, page organization, combining and splitting on copied files.",
    checkFirst: "Office conversion, complex text edits, OCR languages, physical printing, preflight, signatures and sensitive documents.",
    features: [
      { title: "Read and navigate documents", body: "The project documents search, bookmarks, thumbnails and multiple reading layouts. Check a representative document’s fonts, text selection and page rendering before relying on it for a reading or review job." },
      { title: "Combine, split and reorder pages", body: "PdfCraft describes merging files, extracting selected pages, splitting documents and rotating or deleting pages. After a trial, reopen the output and check page order, bookmarks and forms rather than judging the result only by its thumbnails." },
      { title: "Work with comments and forms", body: "Threaded comments, form fields and password-protected documents are documented. The repository also describes redaction and basic signatures, but availability is not independent proof of security or full Acrobat parity. Use an established validation workflow for sensitive or regulated documents." },
    ],
    tryIf: [
      "You need a local tool to read PDFs or assemble a small document pack.",
      "Your routine task is reordering, rotating, extracting or splitting pages.",
      "You can keep originals untouched and compare saved copies in another reader.",
      "You want to inspect the source code or report reproducible bugs to the official project.",
    ],
    waitIf: [
      "You need Office documents converted to PDF, or Word export with matching layout.",
      "Your job depends on reliable editing of complex existing text or non-Latin OCR.",
      "You need a fully usable Chinese, Telugu or mirrored Arabic interface; the October 15 documentation records gaps in these interface languages.",
      "You need preflight, PDF/X or PDF/UA compliance, full XFA forms or advanced signature validation.",
      "You cannot accept alpha reliability, or you need independently validated handling of hostile or confidential files.",
    ],
    platformNotes: [
      ["macOS", "Universal DMG for Apple silicon and Intel Macs"],
      ["Windows", "MSI and portable packages for x64, x86 and ARM64"],
      ["Linux", "AppImage, Flatpak, DEB, RPM and tarball packages; the October 15 docs state Linux packages are unsigned. An open 0.7.1 Flatpak report describes missing physical printers—test your exact package"],
      ["Web", "A WebAssembly ZIP to host yourself; the 0.8.0 gaps document describes a browser print dialog, although the README still lists web printing as a gap"],
    ],
    faqs: [
      { question: "Why is the cursor hard to see when I add text?", answer: "A community report checked October 17 describes a white cursor over a PDF while adding text, with the text itself unaffected. The version, operating system and browser-versus-desktop environment were not specified, and we have not reproduced it. A reply’s hardware-acceleration suggestion is not a confirmed diagnosis. Test a copy and record your setup before reporting it upstream." },
      { question: "Where can I download PdfCraft safely?", answer: "Use the official ArtCraft product page or releases in github.com/storytold/pdfcraft. This guide links to those official files, not a mirror. Match the package to your operating system and architecture, compare its checksum with the release’s SHA256SUMS.txt, and test the alpha on copies before using important files." },
      { question: "Is PdfCraft free for commercial use?", answer: "The official project is dual-licensed under MIT or Apache-2.0, at your option, and downloads are free. Those licenses allow commercial use subject to their terms. Assets and branding can have separate rules. Legal permission to use the program does not establish production readiness or regulatory compliance." },
      { question: "Should I choose ArtCraft Launcher or a standalone download?", answer: "Launcher manages multiple Crafting Apps and their updates. A standalone package installs only PdfCraft; you can choose a specific release and format yourself. Windows also has a portable ZIP. Pick Launcher for a shared install workflow, or standalone when you want only the PDF tool or need explicit version control." },
      { question: "Can PdfCraft replace Adobe Acrobat Pro?", answer: "It is worth trying for everyday reading, comments, forms and page organization, according to its documentation. It is still alpha. Office conversion, complex text editing, non-Latin OCR, preflight, PDF standards compliance and advanced signatures have documented gaps. Test your actual task and keep a proven tool for requirements it does not meet." },
      { question: "Does PdfCraft work offline or in a browser?", answer: "The official project describes local document processing without an account, telemetry or cloud processing. Native desktop packages and a self-hostable WebAssembly build are published. The 0.8.0 gaps document says web printing works through the browser print dialog, while the README still calls it missing. Test the actual build and output. This is documentation-based guidance, not an independent privacy or security audit." },
    ],
  },
  vectorcraft: {
    slug: "vectorcraft",
    applicationCategory: "GraphicsApplication",
    intro:
      "VectorCraft is a free vector editor for drawing, shaping and exporting scalable artwork. It brings a familiar pen-and-path workflow to macOS, Windows, Linux and the web.",
    verdict:
      "A credible alpha to test for SVG-first illustration, icons and posters—not yet a blind replacement for every Illustrator handoff.",
    verdictDetail:
      "The official 0.12.0 release adds a Dimension tool and legacy version 7 .ai export alongside the drawing, tracing and open-format workflow. Its tagged documentation still identifies reliable real-world Illustrator exchange as a gap: the legacy route is not a complete replacement for Illustrator’s editing data.",
    bestFor: "SVG artwork, icons, posters and everyday vector drawing.",
    checkFirst: "Complex .ai round-trips, print production, 3D effects and scripted workflows.",
    features: [
      {
        title: "Draw and edit precise paths",
        body: "The official feature list includes Pen, Direct Selection, snapping guides, shape booleans, layers, appearance controls and unlimited undo.",
      },
      {
        title: "Keep effects editable",
        body: "Blends, envelope distort, gradient mesh, repeats, glows and shadows are described as live effects rather than one-way raster results.",
      },
      {
        title: "Trace and export open formats",
        body: "VectorCraft lists image tracing plus SVG and PDF import/export, with PNG, JPEG and WebP output for screen assets.",
      },
    ],
    tryIf: [
      "You mainly create SVG illustrations, icons, diagrams or posters.",
      "You want the same project available on macOS, Windows, Linux or in a browser.",
      "You can test imports and exports on copies before changing your production workflow.",
      "You prefer an open native document format and open-source codebase.",
    ],
    waitIf: [
      "Your team must exchange complex layered .ai files without cleanup.",
      "You depend on Illustrator scripting, generative features or complete 3D and Materials support.",
      "You need independently verified typography and print-production fidelity.",
      "An alpha application is too risky for your client deadlines.",
    ],
    platformNotes: [
      ["macOS", "Universal download for Apple silicon and Intel Macs"],
      ["Windows", "Installer and portable builds for x64, x86 and ARM64"],
      ["Linux", "AppImage, Flatpak, Debian, RPM and tarball packages. The 0.12.0 release notes include the RPM dependency correction; tagged docs require libm GLIBC_2.35. This enforces a runtime boundary rather than adding RHEL 9 compatibility—test your exact package"],
      ["Web", "A self-hostable WebAssembly build is published; 0.12.0 notes add Apple Pencil and touch handling. This is browser input, not a native mobile-app release"],
    ],
    faqs: [
      {
        question: "Is VectorCraft free and open source?",
        answer: "Yes. The official repository uses the MIT or Apache-2.0 license, and the official product page lists downloads as free.",
      },
      {
        question: "Can VectorCraft open Illustrator files?",
        answer: "Yes, the project documents PDF-compatible .ai import. Version 0.12.0 also adds legacy version 7 .ai export preserving layers, groups and type, but with one artboard per file and no transparency. Its tagged docs still flag real-world exchange and missing Illustrator editing-data output. Reopen a copied export in the receiving app before trusting a handoff.",
      },
      {
        question: "Can VectorCraft replace Adobe Illustrator?",
        answer: "It may already cover many everyday SVG and vector-drawing tasks. It is still alpha, and advanced Illustrator-specific exchange, scripting, 3D and production workflows need careful validation.",
      },
      {
        question: "Which platforms support VectorCraft?",
        answer: "The official page lists macOS, Windows, Linux and Web, with additional FreeBSD and command-line packages published in the release set.",
      },
    ],
  },
  filmcraft: {
    slug: "filmcraft",
    applicationCategory: "MultimediaApplication",
    intro:
      "FilmCraft is a free, native video editor with a familiar source/program monitor layout, multitrack timeline, trimming, color, effects and sound tools.",
    verdict:
      "Worth testing for self-contained edits and open-source production experiments; not ready for a frictionless Premiere Pro project migration.",
    verdictDetail:
      "According to the official project, core editing, trimming, color, keyframes, titles, captions, mixing and export work today. The alpha still cannot open .prproj files directly and documents limits around large-footage performance, plug-in hosting and delivery codecs.",
    bestFor: "Independent edits, short-form projects, color work and open-source video experiments.",
    checkFirst: ".prproj handoff, plug-ins, high-resolution long-form footage and required delivery codecs.",
    features: [
      {
        title: "Edit on a familiar timeline",
        body: "The official page lists source and program monitors, three-point editing, multiple trim modes and J/K/L dynamic trimming.",
      },
      {
        title: "Grade, animate and finish",
        body: "Curves, color wheels, HSL secondaries, LUTs, scopes, keyframes, effects, transitions, titles and captions are documented.",
      },
      {
        title: "Mix and export without a subscription",
        body: "FilmCraft includes loudness meters, mixer automation and native audio effects, with project-published decoding and export support.",
      },
    ],
    tryIf: [
      "You want to cut a personal, educational or self-contained project in an open-source editor.",
      "You prefer a Premiere-like editing vocabulary with source/program monitors and trim modes.",
      "Your workflow can use fresh media imports instead of opening a .prproj file.",
      "You can test export quality and performance before committing to a deadline.",
    ],
    waitIf: [
      "You must open or hand back native Premiere Pro .prproj projects.",
      "Your workflow depends on VST3, Audio Units or OpenFX plug-ins.",
      "You need proven performance on large, long-form or high-resolution productions.",
      "You require a delivery codec that the current export pipeline does not cover.",
    ],
    platformNotes: [
      ["macOS", "Universal download for Apple silicon and Intel Macs"],
      ["Windows", "Installer and portable builds for x64, x86 and ARM64"],
      ["Linux", "AppImage, Flatpak, Debian, RPM and tarball packages"],
    ],
    faqs: [
      {
        question: "Is FilmCraft free and open source?",
        answer: "Yes. FilmCraft is published under the MIT or Apache-2.0 license, and the official product page lists the available builds as free.",
      },
      {
        question: "Can FilmCraft open Premiere Pro projects?",
        answer: "Not directly. The official repository says .prproj files cannot currently be opened and recommends interchange through formats such as FCP7 XML, AAF or OTIO where appropriate.",
      },
      {
        question: "Can FilmCraft replace Adobe Premiere Pro?",
        answer: "It can be a useful alpha for self-contained projects, but it is not a complete replacement for workflows that rely on Premiere project files, third-party plug-ins, broad codec delivery or proven large-project performance.",
      },
      {
        question: "Which platforms support FilmCraft?",
        answer: "The official page lists native downloads for macOS, Windows and Linux. A self-hostable WebAssembly package is available in releases, but Web is not presented as a primary supported platform on the product page.",
      },
    ],
  },
  lightcraft: {
    slug: "lightcraft",
    applicationCategory: "PhotographyApplication",
    intro:
      "LightCraft is a free, local-first photo library and non-destructive RAW developer. It combines culling, organization, adjustments and masking without requiring an account or cloud library.",
    verdict:
      "A strong alpha candidate for local JPEG, DNG and supported-camera RAW workflows—after you test your exact camera files and color expectations.",
    verdictDetail:
      "The project documents a broad library and develop workflow, but lists gaps in measured camera-color calibration, some compressed RAW variants and Lightroom modules. Experimental Bayer AI denoise requires user-installed weights; catalog import is one-way and approximate. Test a copy before moving your only library.",
    bestFor: "Local photo organization, culling and non-destructive RAW development.",
    checkFirst: "Your camera model, color profiles, catalog migration, AI denoise and missing Lightroom modules.",
    features: [
      {
        title: "Organize and cull locally",
        body: "Albums, ratings, flags, search, sorting, grids, filmstrip, compare and survey views are listed in the official repository.",
      },
      {
        title: "Develop without touching originals",
        body: "Light, color, tone curves, color mixing, grading, crop, presets and history run in a non-destructive processing pipeline.",
      },
      {
        title: "Apply targeted masks",
        body: "The project lists brush, linear, radial, luminance and color-range masks, with add, subtract and intersect operations.",
      },
    ],
    tryIf: [
      "You want a local photo library with no required account, cloud storage or subscription.",
      "You work with JPEG, DNG or a camera RAW format listed by the project.",
      "You need ratings, flags, albums, culling and non-destructive adjustments in one app.",
      "You can test a copied folder before trusting the app with a main catalog.",
    ],
    waitIf: [
      "Exact camera color calibration is essential to your paid workflow.",
      "You rely on unsupported compressed RAW variants or need broad lens-profile validation.",
      "You need Lightroom's AI Denoise, video, on-screen HDR, Print, Book or Map modules.",
      "You expect a one-click Lightroom catalog migration with proven metadata fidelity.",
    ],
    platformNotes: [
      ["macOS", "Universal download for Apple silicon and Intel Macs"],
      ["Windows", "Installer and portable builds for x64, x86 and ARM64"],
      ["Linux", "AppImage, Flatpak, Debian, RPM and tarball packages"],
      ["Web", "A self-hostable WebAssembly build is published"],
    ],
    faqs: [
      {
        question: "Is LightCraft free and open source?",
        answer: "Yes. The official repository is licensed under MIT or Apache-2.0, and the product page lists the downloads as free.",
      },
      {
        question: "Which RAW files can LightCraft open?",
        answer: "The project lists DNG, CR2, selected CR3 variants, ARW, NEF, RAF, RW2, PEF, ORF and additional formats. Support varies by camera and compression type, so check the current raw-parity documentation with your exact model.",
      },
      {
        question: "Can LightCraft replace Adobe Lightroom?",
        answer: "It may already work for local organization and development with supported files. It is still alpha, and camera color, catalog migration, AI features and several Lightroom modules need validation or remain missing.",
      },
      {
        question: "Does LightCraft upload photos to the cloud?",
        answer: "The official project describes LightCraft as local-first, with no account, cloud or telemetry required. Review the current project documentation before deploying it in a regulated or highly sensitive environment.",
      },
    ],
  },
};

export const workflowProfiles = {
  photocraft: {
    prompt: "I edit layered images",
    bestFor: "Layer-based image editing, retouching and PSD exploration.",
    checkFirst: "Complex PSD round-trips, plug-ins and production stability.",
  },
  vectorcraft: {
    prompt: "I draw vector artwork",
    bestFor: guideBySlug.vectorcraft.bestFor,
    checkFirst: guideBySlug.vectorcraft.checkFirst,
  },
  filmcraft: {
    prompt: "I edit video",
    bestFor: guideBySlug.filmcraft.bestFor,
    checkFirst: guideBySlug.filmcraft.checkFirst,
  },
  lightcraft: {
    prompt: "I organize and develop photos",
    bestFor: guideBySlug.lightcraft.bestFor,
    checkFirst: guideBySlug.lightcraft.checkFirst,
  },
  pdfcraft: {
    prompt: "I work with PDFs",
    bestFor: "Reading, organizing, combining, splitting and securing PDF files.",
    checkFirst: "Forms, signatures, preflight and production-grade PDF fidelity.",
  },
  effectcraft: {
    prompt: "I create motion graphics",
    bestFor: "Exploring open-source motion graphics and visual-effects workflows.",
    checkFirst: "After Effects projects, plug-ins and render reliability.",
  },
  designcraft: {
    prompt: "I lay out pages",
    bestFor: "Exploring open-source page layout and publishing workflows.",
    checkFirst: "InDesign files, preflight, long documents and advanced typography.",
  },
  figcraft: {
    prompt: "I design interfaces and prototypes",
    bestFor: "Interface design and prototyping with auto layout, components and theme variables.",
    checkFirst: "Figma file interchange, collaboration and early-alpha reliability.",
  },
  wordcraft: {
    prompt: "I write documents",
    bestFor: "Document writing with a ribbon interface, styles, track changes and .docx support.",
    checkFirst: "Compatibility with .docx files and Word document interchange.",
  },
  soundcraft: {
    prompt: "I edit audio",
    bestFor: "Multitrack audio recording, editing and mixing with MIDI support.",
    checkFirst: "Plug-in format support, multitrack mixing depth, and DAW interchange.",
  },
  deckcraft: {
    prompt: "I make presentations",
    bestFor: "Slide presentations with masters, themes, 150+ vector shapes and presenter view.",
    checkFirst: "Compatibility with .pptx files and PowerPoint interchange.",
  },
  cadcraft: {
    prompt: "I draft technical drawings",
    bestFor: "Technical drafting with a command line, object snaps, dimensions and constraints.",
    checkFirst: "DWG/DXF interchange, parametric modeling depth, and precision drawing tools.",
  },
  gridcraft: {
    prompt: "I work with spreadsheets",
    bestFor: "Spreadsheets with 500+ functions, dynamic arrays, PivotTables and charts.",
    checkFirst: "Compatibility with .xlsx files and Excel formula coverage.",
  },
} as const;
