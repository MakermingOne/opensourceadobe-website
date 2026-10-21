import type { ArticleGuide } from "./types";

export const whatIsArtCraftGuide: ArticleGuide = {
  path: "/artcraft/",
  title: "What Is ArtCraft? The AI Studio and Its Free Craft Apps",
  description: "ArtCraft is an AI image and video studio and a family of free Craft Apps. Here is what each one is, where its official files are and what we did not verify.",
  h1: "What is ArtCraft?",
  eyebrow: "Unofficial · Independent guide",
  lede: "ArtCraft is one name for two separate products from the same team: an AI image and video studio, and thirteen free, open-source desktop apps called Craft Apps. Both are published on GitHub, but they have different downloads, costs and maturity. Work out which one you mean before you install anything.",
  sections: [
    {
      id: "two-products",
      heading: "Two products share one name",
      paragraphs: [
        "The ArtCraft AI studio is the product that its GitHub README calls “the IDE for artists”. It lets you compose scenes in 2D and 3D, then generate images and video with hosted AI models. The official homepage describes it as the open-source studio for controllable AI image and video, and its source code is published under MIT OR Apache-2.0.",
        "The Craft Apps are separate native programs written in Rust. PhotoCraft handles image editing, VectorCraft vector illustration and PdfCraft PDF work. The other ten cover video, photo libraries, motion graphics, page layout, interface design, word processing, audio, presentations, CAD and spreadsheets. Each app has its own repository and releases, and ArtCraft Launcher installs and updates them together.",
      ],
      table: {
        caption: "Which ArtCraft do you mean?",
        columns: ["Name", "What it is", "Where the official files are", "Cost"],
        rows: [
          { label: "ArtCraft AI studio", cells: ["ArtCraft AI studio", "2D and 3D composition, plus hosted AI image and video", "getartcraft.com; app.getartcraft.com; GitHub storytold/artcraft", "Free to download; hosted generation uses credits"] },
          { label: "Craft Apps", cells: ["Craft Apps (13)", "Native apps for image, vector, video, PDF and layout work", "getartcraft.com/apps; each app’s GitHub releases", "Free; open source; no subscription"] },
          { label: "ArtCraft Launcher", cells: ["ArtCraft Launcher", "Installs and updates the Craft Apps", "GitHub storytold/craft-launcher", "No separate price listed"] },
        ],
      },
    },
    {
      id: "studio",
      heading: "What the AI studio does",
      paragraphs: [
        "The README lists the studio’s creation tools: Image to Location, 3D Compositing, 2D Compositing, Image to 3D Mesh, Character Posing, Background Removal and Mixed Asset Crafting. It also lists text-to-image, prompted image editing, canvas editing and image-to-video. The README describes a catalogue of 62 models from several providers, among them Grok, Midjourney and Sora, and says that more integrations are planned.",
        "A model provider sets its own terms for the images and video you generate with its models. This guide does not review those terms. If commercial use matters to you, read the terms for each model before you rely on its output.",
      ],
    },
    {
      id: "craft-apps",
      heading: "What the Craft Apps are",
      paragraphs: [
        "The official Craft Apps page lists thirteen apps and labels each one. PhotoCraft, PdfCraft and FigCraft are labelled early alpha; the other ten are labelled in development. Those labels describe maturity, not price, so treat any app as a test build until you have checked it on your own files.",
        "Our app directory on this site records the checked version, platforms and limits for each app. Start there before you compare any app with an Adobe product.",
      ],
      links: [{ label: "Browse the Craft Apps directory", href: "/apps/" }],
    },
    {
      id: "not-verified",
      heading: "What we did not verify",
      paragraphs: [
        "We did not install or run the studio or the Craft Apps for this page. The facts above come from official pages and repositories checked on 20 October 2026. We did not test model quality, output rights, performance or the data that hosted generation handles.",
        "We could not find a privacy policy or terms page at getartcraft.com/privacy or getartcraft.com/terms. Both returned “not found” when we checked. Read whatever terms the app shows before you sign in or buy credits.",
      ],
    },
    {
      id: "next-questions",
      heading: "Next questions",
      paragraphs: [
        "Each question below has its own page, with the official sources behind its answer.",
      ],
      links: [
        { label: "Is ArtCraft free?", href: "/artcraft/pricing/" },
        { label: "Is ArtCraft safe to download?", href: "/artcraft/safety/" },
        { label: "ArtCraft alternatives", href: "/artcraft/alternatives/" },
        { label: "How to use PhotoCraft", href: "/artcraft/photocraft-how-to-use/" },
        { label: "Which ArtCraft GitHub repository?", href: "/github/" },
      ],
    },
  ],
  faqs: [
    { question: "Is this site affiliated with ArtCraft?", answer: "No. OpenSourceAdobe is an independent guide and is not affiliated with ArtCraft or Adobe. Links on this site go to official ArtCraft pages and repositories, and we do not host or repackage installers." },
    { question: "Is ArtCraft the same as the Craft Apps?", answer: "No. The Craft Apps are a separate family of desktop programs. They share a team and an open-source licence model with the AI studio, but they have separate repositories, downloads and maturity labels." },
    { question: "Which Craft App is the Photoshop alternative?", answer: "PhotoCraft is the Craft App that the project positions against Photoshop. It is in early alpha, and its own documentation says it is not yet a replacement for daily professional work." },
    { question: "Is ArtCraft open source?", answer: "The studio and the Craft Apps publish their code under MIT OR Apache-2.0, according to their repositories. Open source means you can read and build the code. It does not mean every feature is finished or that a particular build is free of problems." },
  ],
  sourceIds: ["artcraft-home", "artcraft-apps", "artcraft-repository", "craft-launcher-repository", "artcraft-pricing-official", "photocraft-user-faq-replace"],
};
