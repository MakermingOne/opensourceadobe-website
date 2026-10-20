import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-20";

export const illustratorGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source Illustrator Alternatives: Inkscape, VectorCraft & More",
  description: "Six free and open source Illustrator alternatives compared for SVG editing, .ai import, typography and print output — with the limits that matter before you switch.",
  h1: "Open source Illustrator alternatives, compared",
  introduction: "An open source Illustrator alternative has to be judged on the vector work you actually deliver: logos, icons, diagrams, packaging, posters or interface assets. Inkscape is the most complete SVG-first editor here. VectorCraft is the closest ArtCraft project in intent but is still in development. Scribus and LibreOffice Draw are layout tools with vector features, while Penpot and Vectr are design tools that do not target print production. The comparison separates native SVG editing from .ai interchange and marks where each option breaks, because opening an Illustrator file successfully is not the same as preserving its gradients, text, effects and artboards.",
  verdicts: [
    "Inkscape is the most complete open source replacement for SVG-first illustration, but it does not reproduce Illustrator’s .ai round-trip, artboard workflow or full print-production stack.",
    "VectorCraft is the closest ArtCraft project to Illustrator in intent; it remains in development and layered .ai exchange is a documented gap.",
    "Scribus and LibreOffice Draw are useful for layout and simple diagrams, not for replacing an illustration studio; Penpot and Vectr are design-first tools with limited print output.",
  ],
  table: {
    caption: "Six free and open-source Illustrator alternatives compared",
    columns: ["Option", "License", "Platform", "SVG and .ai support", "Best for", "Where it breaks down"],
    rows: [
      { label: "Inkscape", cells: ["Inkscape", "GPL-2.0-or-later", "Windows, macOS, Linux", "Native SVG; opens PDF-compatible .ai files with limits; no native .ai export", "SVG illustration, icons, diagrams, print preparation", "No .ai export; CMYK and large-file performance need care; effects do not round-trip"] },
      { label: "VectorCraft", cells: ["VectorCraft", "MIT OR Apache-2.0", "macOS, Windows, Linux, Web listed", "SVG and PDF import/export; layered .ai exchange is a documented gap", "Familiar vector workflow inside the ArtCraft family", "In development; typography, plug-ins and print behaviour are unproven"] },
      { label: "Scribus", cells: ["Scribus", "GPL-2.0-or-later", "Windows, macOS, Linux", "Imports SVG and PDF; not an .ai editor", "Page layout, PDF/X and CMYK output", "Weak freehand drawing; limited live effects; not an illustration tool"] },
      { label: "LibreOffice Draw", cells: ["LibreOffice Draw", "MPL-2.0", "Windows, macOS, Linux", "Imports SVG, PDF and Office shapes; no .ai workflow", "Simple diagrams and PDF touch-ups", "Limited path tools, typography and colour management"] },
      { label: "Penpot", cells: ["Penpot", "MPL-2.0", "Web; self-hosted or hosted", "SVG-native design files; no .ai import", "Interface design, design systems, prototyping", "Not a print tool; no CMYK or preflight; browser performance limits"] },
      { label: "Vectr", cells: ["Vectr", "Proprietary free tier", "Web, desktop", "SVG import/export; no .ai support", "Quick, simple vector graphics", "Not open source; limited tools and no print production workflow"] },
    ],
  },
  options: [
    {
      name: "Inkscape",
      paragraphs: [
        "Inkscape is a GPL-2.0-or-later vector editor for Windows, macOS and Linux. It uses SVG as its native document format and provides path editing, boolean operations, node tools, gradients, patterns, clones, filters, live path effects, text and bitmap tracing. For icons, diagrams, logos and SVG-based web artwork, it is the most complete open source alternative in this list.",
        "Its file interchange is asymmetric. Inkscape reads SVG and PDF, and it can open Adobe Illustrator files that contain a PDF-compatible stream, which is the default for many .ai files. It does not provide native .ai export, and Illustrator-specific constructs such as live effects, symbols, artboards and some gradient meshes do not survive a round trip. Text may reflow when fonts are missing, and colour management depends on the document and export settings.",
        "Choose Inkscape when SVG can become the working format and the deliverable is a flattened or standard export. Test the files you exchange, especially if a client reopens them in Illustrator. Inkscape is capable of professional work, but the production pipeline around it must be rebuilt rather than assumed. The dedicated app directory is the place to compare it with ArtCraft’s VectorCraft, not to treat either as a drop-in clone.",
      ],
    },
    {
      name: "VectorCraft",
      paragraphs: [
        "VectorCraft is ArtCraft’s open-source vector illustration application, distributed under MIT OR Apache-2.0. The official project describes pen and direct-selection tools, shape booleans, snapping, appearance workflows, live effects, image tracing, and SVG and PDF import and export. Its intent is recognisably Illustrator-shaped, which makes it the closest ArtCraft counterpart in this comparison.",
        "The qualification is maturity. The official directory labels VectorCraft as in development, and the repository describes an alpha build. Its own parity notes identify reliable layered exchange with complex Illustrator .ai files as a gap. Typography, print behaviour and performance on complex professional artwork are not established by a feature list, and we have not completed an independent hands-on test.",
        "Try VectorCraft when you want a native, open-source vector tool and can work on copies, report failures and keep a fallback for client deadlines. Do not make it the only application in a pipeline that receives editable .ai files from an agency. The VectorCraft app guide documents its current release status and packaging limits; read that before installing.",
      ],
    },
    {
      name: "Scribus",
      paragraphs: [
        "Scribus is a GPL-2.0-or-later desktop publishing application for Windows, macOS and Linux. It provides master pages, text frames, styles, vector shapes, image frames, colour management, spot colours and PDF/X-oriented export. It is the strongest open source tool here for a print page that combines text, images and vector elements.",
        "It is not an Illustrator replacement. Scribus can import SVG and PDF content, but its drawing tools are aimed at page composition rather than freehand illustration. Live effects, complex gradient meshes and Illustrator’s symbol and artboard model are not its design centre. Its PDF export is more relevant to a print workflow than its on-canvas vector editing, and large imported graphics can be cumbersome to manage.",
        "Choose Scribus when the job is a brochure, poster, magazine page or PDF intended for a printer, and the illustration itself comes from another tool. Pair it with Inkscape for SVG assets. Do not choose it to edit a client’s .ai logo or to produce an illustration with dozens of editable artboards; that is a different category of work.",
      ],
    },
    {
      name: "LibreOffice Draw",
      paragraphs: [
        "LibreOffice Draw is the MPL-2.0 drawing module of LibreOffice, available on Windows, macOS and Linux. It handles simple shapes, connectors, text boxes, diagrams, imported SVG and PDF content, and can export to PDF, SVG and common image formats. It is already present in many offices, which makes it the lowest-friction option for a quick diagram or a one-page handout.",
        "Its vector engine is functional rather than deep. Path editing, boolean operations, typography and colour management are limited compared with Inkscape, and complex SVG files may be simplified or rearranged on import. Illustrator files are not a supported interchange format. Draw is also not a page-layout application in the Scribus sense, so long documents and precise print delivery are better handled elsewhere.",
        "Choose Draw for organisational diagrams, simple signage and lightweight PDF edits where the result does not need to survive a professional print workflow. Do not treat it as a free Illustrator because it can draw a curve. For illustration, start with Inkscape; for page layout, use Scribus; for the ArtCraft route, evaluate VectorCraft with copies of real artwork.",
      ],
    },
    {
      name: "Penpot",
      paragraphs: [
        "Penpot is an MPL-2.0 design and prototyping platform that runs in the browser and can be self-hosted. It uses SVG as a core format, supports components, design tokens, layouts, prototyping and collaboration, and has become a credible open source alternative to proprietary interface-design tools. Teams can inspect and export assets without a desktop installation.",
        "It is not an Illustrator substitute for print. Penpot targets screens, design systems and product interfaces; CMYK, spot colours, bleed, overprint and PDF/X are outside its purpose. It does not import .ai files as editable documents, and its vector toolset is shaped by interface design rather than illustration or packaging. Browser performance also becomes a practical limit on very large canvases.",
        "Choose Penpot when the output is a web or app interface and collaboration matters more than print production. Choose Inkscape when the output is an illustration or a print-ready vector asset. The two can coexist: Penpot for the system, Inkscape for the artwork that has to leave the screen.",
      ],
    },
    {
      name: "Vectr",
      paragraphs: [
        "Vectr is a free, proprietary vector graphics editor available in the browser and as a desktop application. It offers a simple canvas, shapes, paths, text, gradients, layers and SVG export, with a short learning curve. It is useful for quick diagrams, social graphics and simple icons when a full illustration suite would be excessive.",
        "The licence is the first boundary: Vectr is free to use but not open source, so the code cannot be audited, forked or self-hosted as an open project. The second is depth. Its path tools, typography, colour management and print output are limited, and .ai files are not part of its workflow. Complex artwork and production PDFs are better handled by Inkscape or Scribus.",
        "Include Vectr in a free-software shortlist, not a strictly open-source one. It is a reasonable convenience for a quick SVG, but it does not answer the request for an open source Illustrator alternative. Users who need source-code freedom, offline control or a maintainable fork should start with Inkscape and test VectorCraft as the newer ArtCraft option.",
      ],
    },
  ],
  sections: [
    {
      heading: "Inkscape vs Illustrator: what actually still breaks",
      paragraphs: [
        "For SVG-first work, the gap is smaller than the interface suggests. Inkscape handles paths, compound shapes, clipping, masks, gradients, patterns, clones, text-on-path, filters and bitmap tracing. Icons, diagrams, maps and many logo deliverables can be produced without Illustrator. The working file is SVG, which is open, inspectable and usable by browsers, cutting machines and other applications.",
        "The break is in Adobe-native interchange and production colour. Inkscape has no native .ai export; it can open .ai files that carry a PDF-compatible stream, but a file saved without that stream may not open. Illustrator effects, symbols, artboards and some gradient meshes do not map to SVG. CMYK output exists through PDF export and colour-management settings, but it is not the same as Illustrator’s print toolchain, and a printer’s preflight may still reject the result.",
        "Typography is the other practical difference. Fonts must be available on the system, text may reflow when a document moves between machines, and advanced OpenType features are not equally exposed. For a logo that will be flattened, this matters less; for an editable brand template exchanged with a studio, it matters a great deal. Test the actual handoff, not just the visual on your screen.",
      ],
    },
    {
      heading: "If you are moving an .ai workflow",
      paragraphs: [
        "Inventory the .ai files you receive and ask which ones must remain editable. If a client only needs a PDF or SVG deliverable, the interchange problem is smaller. If a colleague must reopen the file in Illustrator and continue editing, keep Illustrator in the loop or agree on a shared format such as SVG or PDF before the project starts. Converting after the fact rarely preserves everything.",
        "For each important file, make a copy and record what changes: text wrapping, fonts, gradients, clipping masks, effects, artboards and colour values. Open the result in the destination application and compare it with a reference export. Do not accept a successful import as proof of fidelity. If the file is for print, send a test PDF to the printer and ask which preflight checks it passes.",
        "Inkscape is the safest open-source starting point for SVG illustration; VectorCraft is the project to watch if you want an ArtCraft-native workflow. Scribus can take finished vector art into a print layout, and Penpot can carry interface assets. None of them removes the need to test the handoff, and none should be described as a lossless Illustrator replacement.",
      ],
    },
  ],
  faqs: [
    { question: "Can Inkscape open Illustrator .ai files?", answer: "Inkscape can open .ai files that contain a PDF-compatible stream, which is common but not universal. Native Illustrator effects, symbols, artboards and some gradient meshes may not survive. Always test a copy and compare the result before relying on it for client work." },
    { question: "Which open source tool exports print-ready PDFs?", answer: "Scribus is the strongest option here for PDF/X, CMYK and page layout. Inkscape can export PDFs and manage colour, but it is an illustration tool rather than a prepress application. Ask the printer which standard and profile the job requires, then validate a test file." },
    { question: "Is VectorCraft a drop-in Illustrator replacement?", answer: "No. VectorCraft is in development and its own notes describe layered .ai exchange as a gap. It may suit SVG and PDF work on copies, but it has not established production parity for typography, plug-ins or complex client files. Keep an established tool for deadline work." },
    { question: "What is the best free Illustrator alternative for interface design?", answer: "Penpot is the closest open source option for interface design and prototyping, with SVG-based files and self-hosting. It is not a print tool and does not import .ai documents. For illustration or print artwork, start with Inkscape instead; for interface systems, Penpot is the better fit." },
  ],
  sources: [
    { id: "inkscape-home", type: "official-page", title: "Inkscape official site", url: "https://inkscape.org/", accessedAt },
    { id: "inkscape-ai", type: "official-page", title: "Inkscape file format documentation", url: "https://inkscape.org/doc/", accessedAt },
    { id: "vectorcraft-official-alt", type: "official-page", title: "VectorCraft official product page", url: "https://getartcraft.com/apps/vectorcraft", accessedAt },
    { id: "vectorcraft-repository-alt", type: "official-repository", title: "VectorCraft source repository", url: "https://github.com/storytold/vectorcraft", accessedAt },
    { id: "scribus-docs", type: "official-page", title: "Scribus documentation", url: "https://docs.scribus.net/", accessedAt },
    { id: "libreoffice-draw-vector", type: "official-page", title: "LibreOffice Draw guide", url: "https://documentation.libreoffice.org/en/english-documentation/", accessedAt },
    { id: "penpot-home", type: "official-page", title: "Penpot official site", url: "https://penpot.app/", accessedAt },
    { id: "penpot-repo", type: "official-repository", title: "Penpot source repository", url: "https://github.com/penpot/penpot", accessedAt },
    { id: "vectr-home", type: "official-page", title: "Vectr official site", url: "https://vectr.com/", accessedAt },
  ],
};
