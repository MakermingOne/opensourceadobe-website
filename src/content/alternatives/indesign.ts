import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-20";

export const indesignGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source InDesign Alternatives: Scribus, DesignCraft & More",
  description: "Six free and open source InDesign alternatives compared for long documents, master pages, typography, PDF/X and IDML import — with the workflow limits that decide a switch.",
  h1: "Open source InDesign alternatives, compared",
  introduction: "An open source InDesign alternative has to carry a page, not just a paragraph. Scribus is the only mature open source desktop publisher in this comparison, with master pages, styles, CMYK and PDF/X. DesignCraft is ArtCraft’s in-development page-layout project. LibreOffice Writer and LaTeX can replace specific long-document jobs, while Affinity Publisher and Canva are capable but proprietary. The comparison separates visual page layout from word processing and programmatic typesetting, then marks where each option breaks on real INDD and IDML handoffs.",
  verdicts: [
    "Scribus is the only mature open source desktop publisher here; it handles master pages, styles, CMYK and PDF/X, but its IDML import and long-document automation are limited.",
    "DesignCraft is the ArtCraft page-layout project and the closest in intent, yet it is in development and should be tested on copies rather than production files.",
    "LibreOffice Writer and LaTeX replace specific document jobs, not InDesign’s visual layout model; Affinity Publisher and Canva are capable alternatives but proprietary.",
  ],
  table: {
    caption: "Six free and open-source InDesign alternatives compared",
    columns: ["Option", "License", "Platform", "Page layout", "INDD/IDML support", "Where it breaks down"],
    rows: [
      { label: "Scribus", cells: ["Scribus", "GPL-2.0-or-later", "Windows, macOS, Linux", "Master pages, styles, frames, CMYK, PDF/X", "Limited IDML import; no INDD", "Complex IDML reflows; long-document automation and advanced typography are weaker"] },
      { label: "DesignCraft", cells: ["DesignCraft", "MIT OR Apache-2.0", "macOS, Windows, Linux, Web listed", "Page layout and publishing, in development", "Not verified", "In development; no proven InDesign interchange or production print workflow"] },
      { label: "LibreOffice Writer", cells: ["LibreOffice Writer", "MPL-2.0", "Windows, macOS, Linux", "Long documents, styles, master documents", "No INDD or IDML import", "Not a page-layout canvas; limited precision, colour and prepress control"] },
      { label: "LaTeX", cells: ["LaTeX", "LPPL", "Windows, macOS, Linux", "Programmatic typesetting with precise control", "No INDD or IDML import", "Not WYSIWYG; steep learning curve; design changes require code"] },
      { label: "Affinity Publisher", cells: ["Affinity Publisher", "Proprietary paid", "Windows, macOS, iPad", "Professional page layout and master pages", "IDML import; no INDD", "Not open source; paid licence; smaller ecosystem than Adobe"] },
      { label: "Canva", cells: ["Canva", "Proprietary freemium", "Web, mobile, desktop apps", "Template-driven layout and brand tools", "No INDD or IDML import", "Not a print-production tool; limited typography, preflight and colour control"] },
    ],
  },
  options: [
    {
      name: "Scribus",
      paragraphs: [
        "Scribus is a GPL-2.0-or-later desktop publishing application for Windows, macOS and Linux. It provides master pages, text frames, paragraph and character styles, image frames, vector shapes, spot colours, colour management and PDF/X-oriented export. For brochures, newsletters, posters and print-ready PDFs, it is the most complete open source alternative in this list.",
        "Its workflow is recognisably page-layout software rather than a word processor. A document is built from frames placed on pages; master pages carry repeated elements; styles control typography; and the output can be prepared for a printer with bleed, marks and colour settings. The application also imports SVG and PDF content and can open IDML files with limitations.",
        "The break is compatibility and long-document depth. InDesign’s native .indd format is not supported, and IDML import can lose or reflow complex layouts, especially those that depend on advanced text wrapping, effects or libraries. Long-document automation, footnotes, cross-references and some typographic controls are less developed than InDesign’s. Choose Scribus when you can own the layout from the start or rebuild a file, not when a client expects a seamless InDesign round trip.",
      ],
    },
    {
      name: "DesignCraft",
      paragraphs: [
        "DesignCraft is ArtCraft’s open-source page-layout and publishing application, distributed under MIT OR Apache-2.0. The official directory lists it as in development, with macOS, Windows, Linux and web targets. It is the closest ArtCraft project to InDesign in intent, aimed at documents rather than illustration or interface design.",
        "The public description does not establish which InDesign features it matches, whether it can import INDD or IDML, or how it handles master pages, long documents, colour management and print output. Those are the questions that decide whether a page-layout tool is usable for production, and they remain unknowns in our app record. We have not completed an independent hands-on test.",
        "Evaluate DesignCraft on copies of simple documents, and keep Scribus or InDesign available for anything with a deadline. Its value today is as a project to watch and test, not as a proven replacement for a studio’s layout pipeline. Read the DesignCraft app guide for the current release status before installing.",
      ],
    },
    {
      name: "LibreOffice Writer",
      paragraphs: [
        "LibreOffice Writer is the MPL-2.0 word processor in LibreOffice, available on Windows, macOS and Linux. It handles long documents, heading and paragraph styles, tables, images, footnotes, cross-references, master documents and PDF export. For reports, manuals and books dominated by text, it can replace InDesign without a page-layout canvas.",
        "Its advantage is familiarity and ubiquity. Many organisations already have it, the file format is open, and a structured document with styles is easier to maintain than a hand-placed layout. It also exports PDF and EPUB, which covers a large share of publishing workflows.",
        "The boundary is visual control. Writer flows text; it does not place every element at an exact coordinate. Complex magazine layouts, overlapping frames, elaborate typography and print-specific colour handling are awkward or impossible. It does not import INDD or IDML. Use Writer when the document is primarily text and structure; use Scribus or InDesign when the page itself is the design.",
      ],
    },
    {
      name: "LaTeX",
      paragraphs: [
        "LaTeX is a free typesetting system distributed under the LaTeX Project Public License. Authors mark up structure and content, and the system produces a PDF with precise typography, mathematical formulas, cross-references, bibliographies and consistent page breaks. It runs on Windows, macOS and Linux and is standard in academic and technical publishing.",
        "Its strength is reproducibility. A book, manual, thesis or data-heavy report can be rebuilt from source, version-controlled and styled consistently across hundreds of pages. Packages cover tables, diagrams, code listings and citation styles, and the output is stable across machines.",
        "It is not a visual layout tool. There is no canvas, no direct manipulation and no InDesign-style frame model; designers cannot drag a headline into place. The learning curve is steep, and marketing or brand layouts usually need a different approach. It also does not import INDD or IDML. Choose LaTeX for structured, text-heavy documents where consistency and automation matter more than visual improvisation.",
      ],
    },
    {
      name: "Affinity Publisher",
      paragraphs: [
        "Affinity Publisher is a proprietary page-layout application from Serif, sold for Windows, macOS and iPad. It provides master pages, text styles, linked text frames, image placement, vector tools, colour management and PDF export, and it can import IDML files. It is a serious professional alternative to InDesign at a one-time price rather than a subscription.",
        "Its appeal is a familiar layout model without Adobe’s monthly cost. Designers can open IDML documents, rebuild InDesign projects and produce print-ready PDFs, while sharing a file format family with Affinity Photo and Designer. The interface is modern and performance is generally good.",
        "It is not open source. The licence is proprietary, the code cannot be audited or forked, and the ecosystem of scripts, plug-ins and templates is smaller than Adobe’s. Native .indd files are not supported, only IDML. Include it as a proprietary alternative for teams that care about cost and workflow more than source-code freedom.",
      ],
    },
    {
      name: "Canva",
      paragraphs: [
        "Canva is a proprietary, template-driven design platform available on the web and in mobile and desktop apps. It provides layouts, brand kits, stock assets, collaboration and export to PDF and images. For social graphics, simple brochures and internal communications, it removes most of the setup work that page-layout software requires.",
        "Its strength is speed and accessibility. Non-designers can produce consistent material from templates, share a brand kit and collaborate without installing software. Export to PDF is adequate for many office and event uses, and the learning curve is short.",
        "It is not an InDesign replacement for professional print. Typography, colour management, bleed, preflight and precise frame control are limited, and INDD or IDML files do not import. The licence is proprietary and the free tier has restrictions. Use Canva for quick template work, not for a press-ready publication or a client file that must remain editable in a layout application.",
      ],
    },
  ],
  sections: [
    {
      heading: "Scribus vs InDesign: what actually still breaks",
      paragraphs: [
        "For a document designed from scratch, Scribus can produce professional results. Master pages, styles, frames, spot colours and PDF/X export cover the core of a print layout, and the application is stable enough for books, newsletters and posters. A designer who controls the source material can build a clean workflow without Adobe.",
        "The break is the handoff. InDesign’s .indd format is proprietary and not supported; IDML, the interchange format, imports with limitations. Complex documents that rely on advanced text wrap, object styles, libraries, footnotes, cross-references or effects can reflow or lose structure. Fonts must be available, and colour profiles and output intents need to be set explicitly. A file that looks correct on screen may still fail a printer’s preflight.",
        "Long-document automation is the second gap. InDesign has mature tools for books, indexes, cross-references and conditional text. Scribus can handle long documents, but the automation is less complete and the workflow is more manual. For a 300-page manual with an index, test the full production cycle before committing; for a 16-page brochure, the gap is manageable.",
      ],
    },
    {
      heading: "If you are migrating an INDD or IDML file",
      paragraphs: [
        "Ask for IDML rather than INDD. InDesign can export IDML, and Scribus and Affinity Publisher can import it, while native INDD remains closed. Even with IDML, treat the import as a rebuild: check master pages, styles, linked images, fonts, text flow, tables, footnotes and colour swatches. Save a reference PDF from InDesign so you can compare the result page by page.",
        "Inventory the assets before opening the file. Missing fonts and linked images cause more visible damage than the layout engine itself. Collect the fonts and images, note the colour profile and output intent, and confirm the printer’s requirements. If the document uses plug-ins, scripts or libraries, assume they will not transfer and plan to recreate their output.",
        "Scribus is the open source destination for most print layouts; DesignCraft is the project to watch but not yet a proven target. For text-heavy documents, consider rebuilding in LibreOffice Writer or LaTeX instead of forcing a page-layout conversion. Keep InDesign available until a complete print cycle, including preflight and a physical proof, has succeeded.",
      ],
    },
  ],
  faqs: [
    { question: "Can Scribus open InDesign files?", answer: "Scribus cannot open native .indd files. It can import IDML with limitations, so complex layouts may reflow or lose structure. Export IDML from InDesign, test a copy, and compare it with a reference PDF before the rebuild begins in earnest." },
    { question: "Is Scribus good enough for professional print?", answer: "It can be, for documents designed with its workflow. It supports master pages, CMYK, spot colours and PDF/X, but advanced typography, long-document automation and InDesign-specific effects are weaker. Ask the printer which standard is required and validate a proof before committing." },
    { question: "What is the best free alternative for long documents?", answer: "LibreOffice Writer is the practical choice for text-heavy reports, manuals and books with styles and cross-references. LaTeX is stronger for technical and mathematical documents. Neither is a visual page-layout tool, and neither imports InDesign files. Choose by document structure, not habit." },
    { question: "Is Affinity Publisher an open source InDesign alternative?", answer: "No. Affinity Publisher is proprietary, paid software. It is a capable professional layout application with IDML import, but its code is closed and it does not open native .indd files. It belongs in a low-cost proprietary shortlist, not an open-source one." },
  ],
  sources: [
    { id: "scribus-home", type: "official-page", title: "Scribus official site", url: "https://www.scribus.net/", accessedAt },
    { id: "scribus-docs-layout", type: "official-page", title: "Scribus documentation", url: "https://docs.scribus.net/", accessedAt },
    { id: "designcraft-official-alt", type: "official-page", title: "DesignCraft official product page", url: "https://getartcraft.com/apps/designcraft", accessedAt },
    { id: "designcraft-repository-alt", type: "official-repository", title: "DesignCraft source repository", url: "https://github.com/storytold/designcraft", accessedAt },
    { id: "writer-docs", type: "official-page", title: "LibreOffice Writer guide", url: "https://documentation.libreoffice.org/en/english-documentation/", accessedAt },
    { id: "latex-project", type: "official-page", title: "LaTeX project official site", url: "https://www.latex-project.org/", accessedAt },
    { id: "affinity-publisher", type: "official-page", title: "Affinity Publisher official page", url: "https://affinity.serif.com/en-us/publisher/", accessedAt },
    { id: "canva-home", type: "official-page", title: "Canva official site", url: "https://www.canva.com/", accessedAt },
  ],
};
