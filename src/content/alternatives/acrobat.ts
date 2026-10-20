import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-20";

export const acrobatGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source Acrobat Alternatives: PdfCraft, PDF Arranger & More",
  description: "Six free and open source Acrobat alternatives compared for reading, editing, merging, forms and signatures — plus where each one breaks on real PDFs. Updated October 2026.",
  h1: "Open source Acrobat alternatives, compared",
  introduction: "If you need an open source Acrobat alternative, separate the job into reading, page assembly, content editing, forms, signatures and print preflight. No single free tool covers all six. PdfCraft is the closest general workbench but remains early alpha; PDF Arranger is the most reliable page-level tool; LibreOffice Draw can make small text edits; Okular is the strongest reader and form-filler; Stirling PDF suits self-hosted batch work; and PDF24 Creator is free but proprietary. The comparison below marks which jobs each tool actually performs, because a PDF that opens is not the same as a PDF that survives editing, signing and delivery.",
  verdicts: [
    "PdfCraft is the closest single workbench for viewing, rearranging, combining, splitting and securing PDFs, but it is early alpha and does not replace Acrobat’s text editing, preflight or advanced signatures.",
    "PDF Arranger is the most dependable free tool for page-level work: it reorders, merges, splits and crops pages without pretending to edit the words inside them.",
    "Okular and LibreOffice Draw cover different needs: Okular is the stronger reader, annotator and form-filler, while Draw can make small text and object changes at the cost of layout fidelity.",
  ],
  table: {
    caption: "Six free and open-source Acrobat alternatives compared",
    columns: ["Option", "License", "Platform", "Text and object editing", "Forms and signatures", "Where it breaks down"],
    rows: [
      { label: "PdfCraft", cells: ["PdfCraft", "MIT OR Apache-2.0", "macOS, Windows, Linux, Web listed", "Basic workbench; complex text editing is a documented gap", "Comments, forms and password-protected files described; advanced signatures unverified", "Early alpha; Office conversion, non-Latin OCR, preflight and advanced signatures remain gaps"] },
      { label: "PDF Arranger", cells: ["PDF Arranger", "GPL-3.0-or-later", "Windows, Linux; community builds elsewhere", "None: page-level operations only", "No form authoring or signing", "Cannot edit body text, repair a malformed file or preserve every annotation structure"] },
      { label: "LibreOffice Draw", cells: ["LibreOffice Draw", "MPL-2.0", "Windows, macOS, Linux", "Opens PDF as editable objects; small text and shape changes", "Limited; not a signing platform", "Paragraphs split into boxes, fonts substitute and complex layouts reflow"] },
      { label: "Okular", cells: ["Okular", "GPL-2.0-or-later", "Windows, macOS, Linux", "Annotations only; no body-text editing", "Form filling and certificate-based signatures", "Reader-first: no merging, splitting, page reordering or content editing"] },
      { label: "Stirling PDF", cells: ["Stirling PDF", "MIT", "Self-hosted web application", "No true text editing", "Forms, signing and redaction tools vary by release", "Requires a server; memory-heavy OCR; not a layout editor or a preflight tool"] },
      { label: "PDF24 Creator", cells: ["PDF24 Creator", "Freeware/proprietary", "Windows", "Basic edits in some modules", "Limited forms and signing", "Not open source; Windows-only suite; weak accessibility repair, preflight and certificate workflows"] },
    ],
  },
  options: [
    {
      name: "PdfCraft",
      paragraphs: [
        "PdfCraft is ArtCraft’s open-source PDF workbench, distributed under MIT OR Apache-2.0. The official project describes viewing and searching, reordering, combining, extracting and splitting pages, plus comments, forms and password-protected documents. Its repository lists macOS, Windows, Linux and web targets, although the available package for a given platform should be checked release by release.",
        "The appeal is a single application for the everyday assembly jobs that send people back to Acrobat: rotate a scan, delete a blank page, merge a signed cover sheet, add a comment, protect a file. It is also early alpha. The project’s own gap notes describe incomplete Office conversion, complex text editing, non-Latin OCR, preflight and advanced signatures. Those are not edge cases in office and legal work.",
        "Choose PdfCraft for page organization and simple review when you can keep the original and verify the output. Do not treat it as a replacement for Acrobat’s text reflow, accessibility repair, redaction assurance or certificate workflows until you have tested the exact operation on a copy. The PdfCraft app guide tracks its release status and documented gaps.",
      ],
    },
    {
      name: "PDF Arranger",
      paragraphs: [
        "PDF Arranger is a GPL-3.0-or-later desktop application for rearranging PDF pages. It presents thumbnails and lets you reorder, duplicate, delete, rotate, crop, split and merge documents, then export a new PDF. It is available for Windows and Linux, with community packages for other systems, and it uses Poppler for PDF rendering and manipulation.",
        "Its strength is honesty about scope. PDF Arranger does not edit the text inside a page, create forms, apply signatures or repair a broken content stream. It is the tool to reach for when the content is correct and the sequence is wrong: a scanned contract with pages out of order, a report with a duplicated cover, or a set of invoices that needs to become one file. The interface is plain and the learning curve is short.",
        "The boundary appears with mixed page sizes, crop boxes, embedded fonts and documents that already contain annotations or form fields. Test those on a copy, because page-level operations can preserve or discard structures in ways that are not obvious from a thumbnail. Pair PDF Arranger with a reader such as Okular and, when the text itself must change, a different editor.",
      ],
    },
    {
      name: "LibreOffice Draw",
      paragraphs: [
        "LibreOffice Draw is the MPL-2.0 drawing component of LibreOffice. It can open a PDF as an editable Draw document, exposing text frames, vector objects and images. Small corrections — a wrong date, a moved logo, a deleted line — are possible, and the result can be exported back to PDF. It runs on Windows, macOS and Linux and is already installed in many organisations.",
        "The catch is reflow. A PDF is a page description, not a word-processing document. Draw reconstructs objects as best it can, so paragraphs may split into separate text boxes, fonts may substitute, and complex layouts may shift. It is not a form designer, a signing platform or a preflight tool, and it will not preserve every tagged-PDF or accessibility structure.",
        "Choose Draw for quick, low-risk fixes to simple documents where you can compare the exported page against the original. Do not use it to edit a 200-page report, a press-ready brochure or a document whose reading order and tags must remain intact. For those jobs, return to the source file or use a dedicated PDF editor.",
      ],
    },
    {
      name: "Okular",
      paragraphs: [
        "Okular is a GPL-2.0-or-later document viewer from the KDE community, available on Windows, macOS and Linux. For PDFs it supports navigation, search, bookmarks, annotations, form filling and digital signatures, along with review tools such as highlights and notes. It is a reader first, not a page assembler or a content editor.",
        "That makes it the best free choice for the part of Acrobat that most people actually use: reading a long document, filling an interactive form, adding a comment and checking a signature. Its annotation layer can be exported and reviewed, and the interface stays responsive on large files where browser viewers struggle. It also opens many other document formats, which helps when a workflow mixes PDF, EPUB and office files.",
        "The boundary is structural change. Okular does not merge, split, rotate or delete pages as a document operation, and it does not edit body text. Signature support depends on certificate setup and the PDF’s security model, and the result should be validated in the recipient’s software. Use Okular for reading and review, PDF Arranger for page order, and a full editor only when the content itself must change.",
      ],
    },
    {
      name: "Stirling PDF",
      paragraphs: [
        "Stirling PDF is an MIT-licensed, self-hosted web application that bundles many PDF operations behind a browser interface. Depending on the version and enabled modules, it can merge, split, compress, convert, rotate, watermark, OCR, redact and fill forms. Because it runs on your own server, documents do not need to be uploaded to a third-party service.",
        "It suits teams that want a shared internal toolbox rather than a desktop application. A small Docker deployment can replace a folder of ad-hoc scripts and give non-technical colleagues a consistent page for common jobs. Administrators can control which tools are exposed and how files are retained, which matters when documents contain client or personnel data.",
        "The limits are operational and editorial. Someone must run, update and secure the server; large files and OCR jobs consume memory and CPU; and the available tools vary by release. It is not a WYSIWYG editor for complex layouts, and its redaction or signature features should not be trusted with legal material without verification. Treat it as a batch utility, not as Acrobat’s equivalent for text editing or preflight.",
      ],
    },
    {
      name: "PDF24 Creator",
      paragraphs: [
        "PDF24 Creator is a free, proprietary Windows application that collects many PDF utilities in one installer: merge, split, compress, convert, OCR, compare, protect and a virtual printer. It is free for personal and commercial use under the vendor’s terms, but it is not open source, and the code cannot be audited, forked or redistributed.",
        "Its practical advantage is breadth on Windows. A user who needs to combine scans, add a watermark, compress a file for email and print to PDF can do all of it without assembling several programs. The interface is functional rather than elegant, and the vendor also offers online tools with their own privacy terms.",
        "The boundary is control. The desktop suite is Windows-only, the licence is proprietary, and advanced editing, accessibility repair, preflight and certificate-based signing are not its strength. Online tools raise separate questions about where documents are processed. Use PDF24 when a Windows user needs a broad free utility set and has checked the current terms; do not describe it as an open source Acrobat alternative.",
      ],
    },
  ],
  sections: [
    {
      heading: "Acrobat vs open source PDF tools: what actually still breaks",
      paragraphs: [
        "Reading, annotation and form filling are the most reproducible parts of the Acrobat workflow. Okular and browser-based PDF.js viewers render most documents accurately, preserve comments in the file, and handle standard AcroForm fields. The break appears with XFA forms, JavaScript-driven validation, dynamic stamps and documents that depend on Adobe-specific behaviour. Test the actual form, not a sample downloaded from the same vendor, and check whether the recipient can read the saved result.",
        "Text editing is the hard boundary. A PDF stores positioned glyphs and drawing instructions, not paragraphs in a document model. LibreOffice Draw and Acrobat both reconstruct something editable, but the reconstruction is an interpretation. Fonts may be missing or licensed for embedding only; lines may become separate boxes; a tagged reading order may not survive. For a one-line correction on a simple page, that is acceptable. For a contract or a 100-page report, edit the source document and regenerate the PDF.",
        "Preflight, redaction and certificate signatures are separate professional workflows. Preflight checks colour spaces, ink limits, overprint and PDF/X compliance; redaction must remove the underlying content, not just draw a black rectangle; certificate signatures bind a specific byte range to an identity and become invalid after later edits. None of the free tools here should be treated as a compliance guarantee. Keep Acrobat or a specialist service for regulated delivery until a tested alternative exists.",
      ],
    },
    {
      heading: "If you only need to read, fill or sign a PDF",
      paragraphs: [
        "Start with Okular if you need a desktop reader that handles annotations and standard forms, or use the PDF viewer built into Firefox and Chrome for quick reading. Both avoid uploading the document and both are free. If a form refuses to save, check whether it uses XFA or a scripted validation rule; that is a format limitation, not a reason to install a full editor.",
        "For signing, confirm what the recipient will accept. A drawn signature image is not a certificate signature, and a certificate signature is only useful if the recipient trusts the issuer and the document has not changed since signing. Okular can work with certificate setups, but the correct test is an end-to-end exchange with the actual recipient. For page assembly, use PDF Arranger; for a single workbench that also handles comments and simple protection, try PdfCraft on copies. Keep the original until the final file has been opened and checked elsewhere.",
      ],
    },
  ],
  faqs: [
    { question: "Can these tools edit text inside a PDF?", answer: "LibreOffice Draw can make small text changes by reconstructing the page as editable objects, and PdfCraft describes basic editing while listing complex text editing as a gap. Neither preserves every layout. For substantial changes, edit the source document and export a new PDF." },
    { question: "Is PDF Arranger enough to replace Acrobat?", answer: "Only for page-level work. PDF Arranger reorders, merges, splits, rotates and crops pages, but it cannot edit body text, author forms, sign documents or run preflight. It is an excellent companion to a reader and a full editor, not a complete replacement." },
    { question: "Are signatures made in open source tools legally valid?", answer: "Validity depends on the law, the signing method and the recipient’s acceptance, not on the software licence alone. A certificate signature also depends on trust and on the document remaining unchanged. Confirm the required standard with the receiving organisation before relying on any tool." },
    { question: "What is the safest way to migrate a PDF workflow?", answer: "Inventory the jobs you actually perform, then test copies of representative documents for reading, forms, page assembly, text edits, signatures and print delivery. Keep Acrobat or another validated tool for any step that fails, and record the versions used so the result can be reproduced." },
  ],
  sources: [
    { id: "pdfcraft-official-alt", type: "official-page", title: "PdfCraft official product page", url: "https://getartcraft.com/apps/pdfcraft", accessedAt },
    { id: "pdfcraft-repository-alt", type: "official-repository", title: "PdfCraft source repository", url: "https://github.com/storytold/pdfcraft", accessedAt },
    { id: "pdfcraft-gaps-alt", type: "official-repository", title: "PdfCraft documented gaps", url: "https://github.com/storytold/pdfcraft/blob/main/docs/gaps.md", accessedAt },
    { id: "pdfarranger-repo", type: "official-repository", title: "PDF Arranger repository and documentation", url: "https://github.com/pdfarranger/pdfarranger", accessedAt },
    { id: "libreoffice-draw", type: "official-page", title: "LibreOffice Draw documentation", url: "https://documentation.libreoffice.org/en/english-documentation/", accessedAt },
    { id: "okular-docs", type: "official-page", title: "Okular documentation", url: "https://docs.kde.org/stable5/en/okular/okular/", accessedAt },
    { id: "stirling-repo", type: "official-repository", title: "Stirling PDF repository", url: "https://github.com/Stirling-Tools/Stirling-PDF", accessedAt },
    { id: "stirling-docs", type: "official-page", title: "Stirling PDF documentation", url: "https://docs.stirlingpdf.com/", accessedAt },
    { id: "pdf24-terms", type: "official-page", title: "PDF24 terms and licence information", url: "https://www.pdf24.org/en/terms-of-use", accessedAt },
    { id: "poppler-docs", type: "official-page", title: "Poppler PDF rendering library", url: "https://poppler.freedesktop.org/", accessedAt },
  ],
};
