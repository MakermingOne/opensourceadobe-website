import type { ArticleGuide } from "./types";

export const artCraftAlternativesGuide: ArticleGuide = {
  path: "/artcraft/alternatives/",
  title: "ArtCraft Alternatives: Open-Source Tools and Their Limits",
  description: "Open-source alternatives to ArtCraft’s Craft Apps and to its AI studio, with licences and limits. Hosted AI generators are not reviewed on this page.",
  h1: "ArtCraft alternatives",
  eyebrow: "Alternatives · Checked 20 October 2026",
  lede: "“ArtCraft alternative” can mean two things. For the Craft Apps, our Adobe-replacement guides already compare open-source options. For the AI studio, this page covers two open-source tools that run on your own hardware. We do not review hosted AI generators here, because their prices, models and terms change faster than the checks we apply to this site.",
  sections: [
    {
      id: "craft-apps",
      heading: "If you mean a Craft App",
      paragraphs: [
        "Our app records pair six Craft Apps with an Adobe product. The table below shows each pair and the comparison guide on this site for that Adobe product. Each guide looks at open-source options for the same job, including tools that do not come from ArtCraft, and says where each one breaks down.",
        "A comparison guide does not change a Craft App’s own maturity label. The official Craft Apps page labels PhotoCraft, PdfCraft and FigCraft as early alpha and the other ten apps as in development.",
      ],
      table: {
        caption: "Craft App and the comparison guide on this site",
        columns: ["Craft App", "Adobe product", "Guide on this site"],
        rows: [
          { label: "PhotoCraft", cells: ["PhotoCraft", "Photoshop", "Photoshop alternatives"] },
          { label: "LightCraft", cells: ["LightCraft", "Lightroom", "Lightroom alternatives"] },
          { label: "VectorCraft", cells: ["VectorCraft", "Illustrator", "Illustrator alternatives"] },
          { label: "PdfCraft", cells: ["PdfCraft", "Acrobat", "Acrobat alternatives"] },
          { label: "EffectCraft", cells: ["EffectCraft", "After Effects", "After Effects alternatives"] },
          { label: "DesignCraft", cells: ["DesignCraft", "InDesign", "InDesign alternatives"] },
        ],
      },
      links: [
        { label: "Photoshop alternatives", href: "/alternatives/photoshop/" },
        { label: "Lightroom alternatives", href: "/alternatives/lightroom/" },
        { label: "Illustrator alternatives", href: "/alternatives/illustrator/" },
        { label: "Acrobat alternatives", href: "/alternatives/acrobat/" },
        { label: "After Effects alternatives", href: "/alternatives/after-effects/" },
        { label: "InDesign alternatives", href: "/alternatives/indesign/" },
      ],
    },
    {
      id: "ai-studio",
      heading: "If you mean the AI studio",
      paragraphs: [
        "The studio combines compositing tools with hosted models. A self-hosted alternative gives you more control over which models you use and where your data goes, but it needs suitable hardware and time to set up. The two open-source projects below run on your own computer.",
      ],
      table: {
        caption: "Two open-source, self-hosted AI image tools",
        columns: ["Tool", "Licence", "Project description", "Not verified"],
        rows: [
          { label: "ComfyUI", cells: ["ComfyUI", "GPL-3.0", "Diffusion model GUI and backend with a graph and nodes interface", "Hardware, model support, video features"] },
          { label: "InvokeAI", cells: ["InvokeAI", "Apache-2.0", "Creative engine and WebUI for Stable Diffusion; topics list Linux, macOS, Windows", "Model licences, speed, video features"] },
        ],
      },
      list: [
        "Both licences cover the tool’s code, not the models you load. Each model has its own licence, and some restrict commercial use.",
        "ComfyUI is published by the Comfy-Org organisation, and InvokeAI by the invoke-ai organisation. We checked both repositories on 20 October 2026.",
      ],
    },
    {
      id: "not-covered",
      heading: "What this page does not cover",
      paragraphs: [
        "Hosted AI generators are outside this guide. Comparing them properly needs a dated price check, a reading of each provider’s terms for outputs, a check of how each service handles your data, and tested output from the same prompts. We have not done that work, so we do not rank hosted services here.",
        "Being outside this guide does not make a service a poor choice. It means we cannot support a recommendation with the evidence this site requires.",
      ],
    },
    {
      id: "choose",
      heading: "How to choose between them",
      paragraphs: [
        "Match the tool to your constraints rather than to a brand name.",
      ],
      list: [
        "Choose a self-hosted tool when you want control over models and data and you have a suitable computer.",
        "Choose a hosted service when you need results quickly without local hardware, and you accept its pricing and terms.",
        "Check the licence of each model you download. A GPL or Apache-2.0 tool does not license the models it loads.",
        "Test a small project before you move a client job to any new tool.",
      ],
    },
  ],
  faqs: [
    { question: "Is ComfyUI a replacement for ArtCraft?", answer: "Not like for like. ComfyUI is a node-based pipeline for diffusion models. It does not provide ArtCraft’s hosted model catalogue or the Craft Apps, so test it on your own workflow before you rely on it." },
    { question: "Is InvokeAI free to use?", answer: "Its repository is Apache-2.0, so the software itself is free to use under that licence. You still need suitable hardware, and any models you choose carry their own licences." },
    { question: "Do I need a graphics card for local generation?", answer: "Usually, yes, for practical speeds. Each tool’s documentation sets its own requirements, and we did not verify them on our own machines." },
    { question: "Are the Craft Apps alternatives to ComfyUI?", answer: "No. The Craft Apps are desktop editors and layout tools, while ComfyUI is an AI generation pipeline. They overlap only where one workflow mixes generation with editing." },
  ],
  sourceIds: ["artcraft-apps", "artcraft-repository", "comfyui-repository", "invokeai-repository", "photocraft-repository"],
};
