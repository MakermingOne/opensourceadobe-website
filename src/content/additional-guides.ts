import type { AppGuide } from "@/content/guides";

// Product-specific guidance from each official README, reviewed October 17, 2026.
// Feature presence is not an independent compatibility or performance test.
const profiles = {
  effectcraft: {
    name: "EffectCraft", counterpart: "After Effects", category: "MultimediaApplication", stage: "alpha",
    task: "motion graphics and compositing", format: "After Effects projects and rendered video",
    bestFor: "Short compositions, animated titles and experiments with keyframes and effects.",
    limits: "The README says macOS is the most tested platform and records basic interaction bugs on Windows and Linux. Project conversion, expressions, third-party plug-ins and the optional tracking models should not be assumed to match After Effects.",
    features: [
      ["Animate layers", "The project documents compositions, layers, keyframes and expressions. Start with a short title animation and inspect timing and interpolation in the exported result."],
      ["Composite and apply effects", "Effects, layer styles, cameras and lights are documented. Compare a representative frame with the result you need before committing a longer composition."],
      ["Render a small test", "The README lists a render queue and multiple movie and image-sequence outputs. Check your codec, transparency, audio and frame rate with a short export first."],
    ],
    question: "Can I move an After Effects project into EffectCraft?",
    answer: "Do not assume a faithful project conversion. Check the official import documentation and try a copy with your expressions, footage and effects. We have not independently validated AEP interchange or third-party plug-in compatibility.",
  },
  designcraft: {
    name: "DesignCraft", counterpart: "InDesign", category: "GraphicsApplication", stage: "pre-alpha",
    task: "page layout and publishing", format: "INDD, IDML and print-ready PDF",
    bestFor: "Exploring page layouts, typography and small publications on copied documents.",
    limits: "The README points to a pre-alpha roadmap. It documents IDML import/export and INDD import through indd-utils, but those are not evidence of a lossless InDesign round-trip. Validate fonts, pagination, linked assets and PDF output with your print provider.",
    features: [
      ["Build page layouts", "DesignCraft targets page-based publishing workflows. Begin with a short publication so you can inspect text flow, alignment and page changes before testing a long document."],
      ["Try InDesign interchange", "The README lists IDML import and export and INDD import through indd-utils. Use a copy, check missing fonts and links, and compare every page with a reference PDF."],
      ["Inspect publication exports", "PDF, EPUB, PNG and editable PowerPoint export are documented. A listed PDF/X or PDF/A option does not replace independent preflight and print-provider acceptance."],
    ],
    question: "Can DesignCraft open InDesign files?",
    answer: "Its README documents INDD import through indd-utils and IDML import/export. We have not independently tested complex publications or lossless round-trips. Keep the original document and a reference PDF, then check pagination, links and fonts.",
  },
  figcraft: {
    name: "FigCraft", counterpart: "Figma", category: "GraphicsApplication", stage: "early alpha",
    task: "interface design and prototyping", format: "Figma .fig files and interactive prototypes",
    bestFor: "Offline interface mockups, reusable components and small prototype experiments.",
    limits: "The official README describes .fig import as best effort. Multiplayer is a preview with no accounts, teams or cloud yet; plug-ins use FigCraft's own WebAssembly system rather than Figma's. Real Figma documents have not been comprehensively checked by the project.",
    features: [
      ["Lay out interface frames", "Frames, auto layout, vector networks, styles and variables are documented. Try one screen with nested layouts before importing a large design system."],
      ["Reuse components and variants", "The project describes components and variants for repeatable UI. Check overrides, text changes and layout behavior in the exact component set you plan to reuse."],
      ["Test a prototype", "Prototype interactions and a multiplayer preview are documented. Evaluate a small flow and a second participant before relying on it for a team review."],
    ],
    question: "Does FigCraft work with Figma files and plug-ins?",
    answer: "The project calls .fig import best effort and uses its own WebAssembly plug-ins, not Figma's plug-in runtime. Treat it as a separate editor. Check a copied file and your actual collaboration requirements before moving a team project.",
  },
  wordcraft: {
    name: "WordCraft", counterpart: "Microsoft Word", category: "BusinessApplication", stage: "alpha",
    task: "writing and document editing", format: "Word .docx documents",
    bestFor: "Everyday writing, styles, tables and reviewing copied DOCX documents.",
    limits: "The alpha roadmap still calls for real-world DOCX testing, preserving charts and SmartArt through round-trips, pagination closer to Word, a stability sweep and native printing. Opening a DOCX file does not guarantee that its layout survives saving.",
    features: [
      ["Write and format documents", "The README documents a ribbon interface, styles, tables and references. Start with a short document using the fonts and page settings you normally need."],
      ["Review a copied DOCX", "Comments and track changes are documented. Open and save a copy, then reopen it in Word to check changes, tables, headers and page breaks."],
      ["Export a reference PDF", "The project lists PDF export with selectable text. Compare pagination, links and font rendering with the source document before sharing the result."],
    ],
    question: "Can WordCraft replace Microsoft Word?",
    answer: "It is a free, open-source option to try for focused writing tasks. It is still alpha, and the roadmap records gaps in complex DOCX fidelity, pagination and native printing. Test representative documents and keep Word available for workflows that do not pass that check.",
  },
  soundcraft: {
    name: "SoundCraft", counterpart: "Pro Tools", category: "MultimediaApplication", stage: "pre-alpha",
    task: "recording, editing and mixing audio", format: "audio sessions, plug-ins and AAF/OMF interchange",
    bestFor: "Small multitrack edits, mixing experiments and test bounces using copied audio.",
    limits: "The pre-alpha README says audio-interface and buffer-size selection, recording MIDI from a controller and AAF/OMF session interchange are still missing. A working mixer does not establish low-latency recording reliability or compatibility with your plug-ins.",
    features: [
      ["Edit multiple tracks", "Multitrack editing and recording are documented. Use disposable recordings first and verify sample rate, channel layout and playback on your machine."],
      ["Explore mixing and automation", "The project describes a mixer, plug-ins, sends and automation. Validate the exact effects and routing you need rather than assuming support for every commercial plug-in."],
      ["Check a bounced mix", "Bouncing is documented as part of the core workflow. Listen to the resulting file in another player and check duration, clipping and channel balance."],
    ],
    question: "Can I use SoundCraft for an existing Pro Tools session?",
    answer: "Do not assume session compatibility. Its README targets a Pro Tools-style workflow but lists AAF/OMF interchange as missing. Audio-interface selection and MIDI-controller recording also remain gaps. Keep your established DAW for recording or sessions that depend on those capabilities.",
  },
  deckcraft: {
    name: "DeckCraft", counterpart: "Microsoft PowerPoint", category: "BusinessApplication", stage: "alpha",
    task: "presentations and slide shows", format: "PowerPoint .pptx presentations",
    bestFor: "Small slide decks, themes and rehearsal of basic presentations.",
    limits: "The README identifies DeckCraft as alpha. Documented PPTX support and feature coverage are not proof of full PowerPoint fidelity. Check fonts, charts, animations, media and presenter behavior on the computer used for the actual presentation.",
    features: [
      ["Compose slides", "Themes, layouts, shapes, pictures, tables and charts are documented. Build a few representative slides with your normal fonts before moving an entire deck."],
      ["Try PowerPoint files", "The project documents opening and saving PPTX. Compare a copied deck with its original and reopen the saved result in PowerPoint to catch layout changes."],
      ["Rehearse in full screen", "Transitions, animations and full-screen presentation are documented. Rehearse the complete sequence on the target display and check embedded media separately."],
    ],
    question: "Will my PowerPoint deck look identical in DeckCraft?",
    answer: "That is not established. DeckCraft documents PPTX reading and writing but remains alpha. Compare a copy, including fonts, charts, transitions and media, then rehearse on your presentation machine before relying on it for an event.",
  },
  cadcraft: {
    name: "CADCraft", counterpart: "AutoCAD", category: "DesignApplication", stage: "early development",
    task: "CAD drafting and drawing inspection", format: "DXF and DWG drawings",
    bestFor: "Simple drafting, dimensions and experiments with copied DXF drawings.",
    limits: "The README warns that entities CADCraft does not model are not preserved on save. It lists DXF reading/writing and DWG support via acadrust, but that does not establish lossless interchange. Check units, dimensions, blocks and plotted scale before using any output for fabrication.",
    features: [
      ["Draft with familiar tools", "The project documents a command line, object snaps, layers, dimensions, hatches and blocks. Begin with a small drawing whose dimensions you can check independently."],
      ["Inspect drawing interchange", "DXF and DWG import/export are documented with version-specific limits. Always use copies because unsupported entities may be lost when you save."],
      ["Review plots and exports", "PDF plotting, SVG and PNG export are listed. Verify lineweights, units and scale in the exported file before handing it to another person or a manufacturing service."],
    ],
    question: "Is it safe to save my original DWG or DXF in CADCraft?",
    answer: "Keep the original untouched. The README explicitly warns that entities the app does not model are not kept on save. Test a copy, compare the geometry and dimensions in an established viewer, and verify units and plotted scale before using the output.",
  },
  gridcraft: {
    name: "GridCraft", counterpart: "Microsoft Excel", category: "BusinessApplication", stage: "alpha",
    task: "spreadsheets and data analysis", format: "Excel .xlsx workbooks",
    bestFor: "Small spreadsheet experiments, formulas and inspection of copied workbooks.",
    limits: "The roadmap describes rough file fidelity and compatibility, with very large workbooks, multithreaded recalculation and chart depth still needing work. Legacy XLS import is partial. Do not assume VBA, add-ins or your exact formulas behave like Excel.",
    features: [
      ["Work with spreadsheet formulas", "The project documents broad worksheet-function coverage. Use known inputs and expected totals to validate your actual formulas, errors and date handling."],
      ["Try a copied workbook", "XLSX support is documented, while fidelity remains a roadmap priority. Compare formulas, formats, charts and saved results with the source workbook."],
      ["Check size and recalculation", "The roadmap flags large workbooks and recalculation as areas for more work. Start small, measure responsiveness on your machine and independently reconcile important totals."],
    ],
    question: "Can GridCraft replace Excel for my workbooks?",
    answer: "Try it on a copy of a small workbook first. Function coverage does not prove calculation or file fidelity for your specific model. Compare known totals, formulas, dates and charts in Excel, and keep an established workflow for macros, add-ins and critical financial models.",
  },
} as const;

export type AdditionalGuideSlug = keyof typeof profiles;
export const additionalGuides = Object.fromEntries(Object.entries(profiles).map(([slug, p]) => [slug, {
  slug,
  headline: `Download ${p.name}: free, open-source ${p.task}`,
  applicationCategory: p.category,
  intro: `${p.name} is ArtCraft's free, open-source Rust app for ${p.task}, with a ${p.counterpart}-style workflow. Choose an official Windows, macOS or Linux package below. The project is in ${p.stage}; the downloads are verified against GitHub releases, while compatibility and production reliability have not been independently tested by us.`,
  verdict: `Worth trying for ${p.task} on copies; still ${p.stage}.`,
  verdictDetail: p.limits,
  bestFor: p.bestFor,
  checkFirst: p.limits,
  features: p.features.map(([title, body]) => ({ title, body })),
  tryIf: [p.bestFor, `You can compare exported results with your established ${p.counterpart} workflow.`, "You want a local open-source app and can report reproducible problems upstream."],
  waitIf: [`You require lossless ${p.format} compatibility without testing.`, "A deadline depends on features, plug-ins or team workflows you have not verified.", p.limits],
  platformNotes: [["Windows", "Choose the x64 MSI below for Intel/AMD PCs; ARM64, x86 and portable packages are listed in the full release."], ["macOS", "The checked universal DMG supports Apple silicon and Intel Macs."], ["Linux", "Choose the x86_64 AppImage below for Intel/AMD systems. Other architectures and package formats are in the release."], ["Web", "A WebAssembly build is distinct from a hosted editor. Check the repository for browser setup and limitations."]],
  faqs: [
    { question: `Where can I download ${p.name}?`, answer: `Use the checked official GitHub assets linked on this page or github.com/storytold/${slug}/releases/latest for newer builds. We do not host or repackage installers. Match your processor architecture and compare the file with the release's SHA256SUMS.txt.` },
    { question: `Is ${p.name} free and open source?`, answer: `${p.name} is published under MIT or Apache-2.0, with free official downloads. Bundled assets and branding may have separate terms. Download availability does not imply production readiness.` },
    { question: p.question, answer: p.answer },
    { question: `How do I update ${p.name}?`, answer: "Check the official latest-release page and read its release notes before installing a newer standalone package. Back up your projects first. ArtCraft Launcher is a separate option for managing multiple Crafting Apps; check that its current app list includes the tool you need." },
  ],
}])) as Record<AdditionalGuideSlug, AppGuide>;
