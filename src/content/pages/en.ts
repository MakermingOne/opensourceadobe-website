// English copy for the first localized modules. Product facts remain in shared app data.
const photoFeatures = [
  {
    number: "01",
    title: "Layered PSD and PSB files",
    body: "The project says PhotoCraft can open, edit and save layered Photoshop documents instead of flattening everything into one image.",
  },
  {
    number: "02",
    title: "Non-destructive adjustments",
    body: "Curves, Levels, Vibrance, Hue/Saturation and other adjustments can remain editable, reorderable and maskable.",
  },
  {
    number: "03",
    title: "Layers, masks and smart objects",
    body: "Groups, clipping masks, pixel and vector masks, layer styles and smart filters are listed in the project documentation.",
  },
  {
    number: "04",
    title: "Selections that run locally",
    body: "PhotoCraft includes familiar selection tools and describes subject and object selection that runs on your device.",
  },
  {
    number: "05",
    title: "Type, vectors and brushes",
    body: "Editable type, shape layers, paths, vector masks and a pressure-aware brush engine cover more than basic photo adjustments.",
  },
  {
    number: "06",
    title: "Professional color modes",
    body: "Official documentation lists RGB, CMYK, Lab and Grayscale documents at 8, 16 and 32 bits, plus ICC color management.",
  },
] as const;

const photoFaqs = [
  {"question": "What do the October 28 MCP write-boundary docs establish?", "answer": "PR 9445 recommends a dedicated output folder as the automation write root and documents restrictions on replacing non-image files. It merged after 0.16.0, so do not assume the current installer has that behavior. Clients still have the rights of their roots and may replace supported images; narrow the granted folders and keep backups. We reviewed documentation, not the runtime security of the package."},
  {
    question: "Why do PhotoCraft brush strokes look delayed or spaced apart?",
    answer: "Check the brush Spacing setting on a small canvas. In a community report checked October 17, the author attributed their apparent lag to spacing, not an app slowdown. Their version and operating system were not specified, and we have not reproduced the result. This is not a universal latency fix; record your build, input device and brush settings if it persists.",
  },
  {
    question: "Is PhotoCraft free and open source?",
    answer:
      "Yes. The official repository publishes PhotoCraft under the MIT or Apache-2.0 license, and the official download page lists the app as free.",
  },
  {
    question: "Can PhotoCraft open Photoshop PSD files?",
    answer:
      "The project says PhotoCraft opens and saves layered PSD and PSB files. We have not independently tested complex client files, so use copies until your own workflow is proven.",
  },
  {
    question: "Is PhotoCraft a complete Photoshop replacement?",
    answer:
      "Not for every user yet. It already covers many familiar editing workflows, but the project is labeled early alpha and still needs independent testing for stability, plug-ins and demanding production files.",
  },
  {
    question: "Which platforms support PhotoCraft?",
    answer:
      "The official page lists macOS, Windows, Linux and Web. Download formats and architecture support vary, so check the current official download page for the right build.",
  },
  {
    question: "Can I use PhotoCraft in a browser?",
    answer:
      "ArtCraft lists a WebAssembly build alongside the desktop apps. Browser capabilities and performance can differ from native builds, so test the exact files and tools you need.",
  },
  {
    question: "Is PhotoCraft suitable for commercial or client work?",
    answer:
      "The license permits broad use, but permission and production readiness are different questions. Because PhotoCraft is early alpha, keep a proven editor available and test copies of real client files before relying on it for deadlines.",
  },
] as const;

const photoWorkflowRows = [
  ["Layered PSD editing", "Open and save layered PSD and PSB documents", "Not independently verified", "Test copies of representative files"],
  ["Masks and adjustments", "Editable masks and non-destructive adjustment layers", "Not independently verified", "Suitable for a reversible trial"],
  ["Type and vector work", "Editable type, shapes, paths and vector masks", "Not independently verified", "Check fonts, layout and export"],
  ["Color-managed documents", "RGB, CMYK, Lab and Grayscale with ICC support", "Not independently verified", "Compare against a calibrated reference"],
  ["Plug-ins and automation", "No complete Photoshop plug-in or action parity claim", "Not verified", "Keep Photoshop for dependent workflows"],
  ["Complex production round-trips", "PSD and PSB support is listed", "Not independently verified", "Do not trust without repeated reopen tests"],
] as const;

export const enPages = {
  home: {
    h1: "Open-source Adobe alternatives ",
    h1Emphasis: "and everyday tools from ArtCraft.",
    heading1: { beforeCount: "Explore ", afterCount: " ArtCraft apps by workflow" },
    heading2: "Which ArtCraft tool fits your workflow?",
    heading3: "What should you check before switching?",
    heading4: "Go from the category to the evidence.",
    heading5: "Clear boundaries are part of the recommendation.",
    title: (count: number) => `ArtCraft Adobe Alternatives: ${count} Open-Source Creative Apps`,
    description: (count: number) => `Explore ${count} free, open-source ArtCraft apps. Find official Windows, Mac and Linux downloads, installation guides and compatibility limits for each tool.`,
  },
  download: {
    h1: "Download from the ",
    h1Emphasis: "official source.",
    heading1: "Choose the work you want to do.",
    heading2: "More tools for creative and everyday work.",
    heading3: "Treat alpha software as a test first.",
    title: "Download ArtCraft Apps Safely",
    description: "Find official downloads and installation guides for all 13 ArtCraft apps on Windows, macOS and Linux, with checked versions and compatibility limits.",
  },
  photocraft: {
    h1: "ArtCraft PhotoCraft: ",
    h1Emphasis: "an open-source Photoshop alternative",
    heading1: "What is ArtCraft PhotoCraft?",
    heading2: "Can PhotoCraft replace Photoshop?",
    heading3: "See PhotoCraft's interface",
    heading4: "What can you do with PhotoCraft?",
    heading5: "PhotoCraft vs. Photoshop by task",
    heading6: "What still needs proof",
    heading7: "Your first PhotoCraft test",
    heading8: "Who should try PhotoCraft now?",
    heading9: "PhotoCraft FAQ",
    heading10: "Useful first, cautious where evidence stops.",
    title: "ArtCraft PhotoCraft: Downloads & Photoshop Alternative",
    description: "Explore ArtCraft PhotoCraft, its official downloads, PSD editing and early-alpha limits before replacing Photoshop.",
    features: photoFeatures,
    faqs: photoFaqs,
    workflowRows: photoWorkflowRows,
  },
} as const;
