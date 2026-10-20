// Curated third-party tutorials, reviews and community threads about the ArtCraft apps.
// Sources: YouTube, Reddit, Hacker News, official ArtCraft pages, trade press.
// Public community sources refreshed 2026-10-13. Video summaries refer to older builds;
// current YouTube playback/metrics could not be reverified during this refresh.

export type ExternalResourceKind = "youtube" | "reddit" | "hn" | "article" | "official";

export interface ExternalResource {
  id: string;
  kind: ExternalResourceKind;
  app: "ArtCraft AI studio" | "PhotoCraft" | "VectorCraft" | "FilmCraft" | "LightCraft" | "ArtCraft suite";
  title: string;
  author: string;
  authorDetail?: string;
  url: string;
  publishedAt?: string;
  authorUrl?: string;
  duration?: string;
  versionNote?: string;
  views?: string;
  summary: string;
  keyTakeaway: string;
  /** YouTube video id when kind === 'youtube' — used for embed + thumbnail. */
  youtubeId?: string;
  /** Editorial format used for the visible source label. */
  tier: "hands-on" | "first-look" | "news" | "community" | "tutorial";
}

export const externalResources: ExternalResource[] = [
  {
    id: "figcraft-reddit-announcement",
    kind: "reddit",
    app: "ArtCraft suite",
    title: "The ArtCraft team have now made an open source Figma",
    author: "r/vibecoding",
    url: "https://www.reddit.com/r/vibecoding/comments/1x4r7xq/the_artcraft_team_have_now_made_an_open_source/",
    publishedAt: "2026-10-13",
    summary: "A public announcement introduces FigCraft and discusses interface design, shared sessions and open-source collaboration infrastructure. The official directory now lists FigCraft as early alpha.",
    keyTakeaway: "Use the official FigCraft page and release notes to check what is available; roadmap promises are not independent proof of Figma parity.",
    tier: "community",
  },
  {
    id: "photocraft-pdf-community",
    kind: "reddit",
    app: "PhotoCraft",
    title: "PhotoCraft — Additional Features",
    author: "r/ArtCraftAI",
    url: "https://www.reddit.com/r/ArtCraftAI/comments/1x3s9s7/photocraft_additional_features/",
    publishedAt: "2026-10-12",
    summary: "A user asks about importing PDF floor plans. Replies point to PDF-import pull requests, illustrating why the exact file and installed version matter more than a broad Photoshop comparison.",
    keyTakeaway: "A requested feature or linked pull request does not prove a fix is included in your release. Test a copied PDF in the build you intend to use.",
    tier: "community",
  },
  // ---- PhotoCraft ----
  {
    id: "photocraft-beginner-abhishek",
    kind: "youtube",
    app: "PhotoCraft",
    title: "PhotoCraft for Beginners: Let's Test Its Workflow!",
    author: "Abhishek Rai",
    url: "https://www.youtube.com/watch?v=RifXFbZl9xQ",
    publishedAt: "2026-10-09",
    summary:
      "A complete beginner walkthrough: workspaces, new document (RGB vs CMYK), layers, brush & gradient tools, image transform, text, blend modes, and a hands-on poster project.",
    keyTakeaway:
      "Best starting point if you've never opened PhotoCraft — covers the full interface in one session.",
    youtubeId: "RifXFbZl9xQ",
    tier: "hands-on",
  },
  {
    id: "suite-overview-heroic",
    kind: "youtube",
    app: "ArtCraft suite",
    title: "ArtCraft: 7 Free Open-Source Adobe Clones Built by AI Agents in a Week",
    author: "Heroic steps",
    url: "https://www.youtube.com/watch?v=aL8zzL0ke48",
    publishedAt: "2026-10-07",
    summary:
      "A launch-era overview of the original seven apps. The family now contains thirteen; version counts and parity estimates in this video should be treated as a historical snapshot, not current measurements.",
    keyTakeaway:
      "Watch this before cancelling your Adobe subscription — it quotes the project's own parity estimates, not just the hype.",
    youtubeId: "aL8zzL0ke48",
    tier: "news",
  },
  // ---- VectorCraft ----
  {
    id: "vectorcraft-firstlook-krumark",
    kind: "youtube",
    app: "VectorCraft",
    title: "VectorCraft? Someone Vibe Coded a Free Adobe Illustrator Clone (First Look)",
    author: "Kru Mark Tutorials",
    url: "https://www.youtube.com/watch?v=nyqTaNwSvOQ",
    publishedAt: "2026-10-10",
    summary:
      "Hands-on first look at v0.6 alpha: shapes, Pathfinder (Unite/Subtract/Intersect/Exclude), pencil, gradients, eraser, blob brush — and a detailed demo of the broken pen tool that prevents shape closure.",
    keyTakeaway:
      "Watch before you try VectorCraft — shows exactly which tools work and which (pen) will frustrate you.",
    youtubeId: "nyqTaNwSvOQ",
    tier: "hands-on",
  },
  // ---- FilmCraft ----
  {
    id: "filmcraft-install-geekrar",
    kind: "youtube",
    app: "FilmCraft",
    title: "FilmCraft: Free Premiere Pro Alternative? | Install + Import Premiere Project",
    author: "GEEKrar",
    url: "https://www.youtube.com/watch?v=bOjnwt2MNM8",
    publishedAt: "2026-10-09",
    summary:
      "Step-by-step Windows install, plus the practical Premiere migration path: export Final Cut Pro XML from Premiere, then import into FilmCraft. Sequences, cuts and edits transfer; some effects may not.",
    keyTakeaway:
      "A tutorial to consult when testing Premiere-to-FilmCraft XML interchange; check the installed version and compare the resulting sequence.",
    youtubeId: "bOjnwt2MNM8",
    tier: "hands-on",
  },
  // ---- LightCraft ----
  {
    id: "lightcraft-review-sharkcookie",
    kind: "youtube",
    app: "LightCraft",
    title: "open source 'LightCraft', the Lightroom clone",
    author: "Sharkcookie Photography",
    url: "https://www.youtube.com/watch?v=PLfQC9Fff8g",
    publishedAt: "2026-10-08",
    summary:
      "A working photographer runs the same RAW files through Lightroom, RapidRAW and LightCraft. Documents hotkeys that don't fire, a reversed tint slider, a 2,000K–50,000K temperature range that makes 5,000–7,000K unusable, harsh highlight clipping, and broken subject masks.",
    keyTakeaway:
      "Sobering reality check from a daily Lightroom pro — read the description before you trust LightCraft with client RAW files.",
    youtubeId: "PLfQC9Fff8g",
    tier: "hands-on",
  },
  // ---- Community threads ----
  {
    id: "reddit-vibecoding-launch",
    kind: "reddit",
    app: "ArtCraft suite",
    title: "100% Open Source Clean Room Implementations of 7 of Adobe's Top Apps",
    author: "u/ai_art_is_art",
    authorDetail: "r/vibecoding · project author",
    url: "https://www.reddit.com/r/vibecoding/comments/1wvz4ua/100_open_source_clean_room_implementations_of_7/",
    publishedAt: "2026-10-07",
    summary:
      "Launch thread from the ArtCraft creator. Claims >50% parity (some apps 80%+), full parity within a month. Key Q&A: VectorCraft opens .ai files, Lightroom Classic clone is on the roadmap, enterprise features (SOC2, admin) under consideration. Creator cites 4+ years on ArtCraft and $5M revenue.",
    keyTakeaway:
      "First-party answers to the most-asked questions, including RAW-processing criticism and the author's response on per-camera color profiles.",
    tier: "community",
  },
  {
    id: "hn-artcraft-discussion",
    kind: "hn",
    app: "ArtCraft suite",
    title: "ArtCraft Apps – open-source Adobe compatible suite written in Rust",
    author: "Hacker News",
    url: "https://news.ycombinator.com/item?id=49958850",
    publishedAt: "2026-10-08",
    summary:
      "Heated technical thread. Early testers report 'very broken' builds (lag, dead hotkeys, panels that won't restore); later testers on fresher releases call it 'basically fine' and 'surprisingly good for AI.' Deep subthread on whether Photoshop's feel can ever be spec-coded.",
    keyTakeaway:
      "Read this if you want the skeptical professional take — includes a working designer's 7-point bug list and the creator's replies.",
    tier: "community",
  },
  {
    id: "petapixel-coverage",
    kind: "article",
    app: "ArtCraft suite",
    title: "Someone Rebuilt Free, Open-Source Versions of Photoshop, Premiere, and Lightroom Using AI",
    author: "PetaPixel",
    authorDetail: "photography trade press",
    url: "https://petapixel.com/2026/10/07/someone-rebuilt-free-open-source-versions-of-photoshop-premiere-and-lightroom-using-ai",
    publishedAt: "2026-10-07",
    summary:
      "Trade-press write-up covering the launch, creator Brandon Thomas's background (ex-CEO of Storyteller.ai, ex-Square engineer), and the motivation: Adobe's cancellation-fee practices. Notes the Opus 5.5 build process and clean-room legal posture.",
    keyTakeaway:
      "Best neutral overview for context — includes direct quotes from the creator and Adobe-trademark framing.",
    tier: "news",
  },
  // ---- Official ----
  {
    id: "official-photocraft",
    kind: "official",
    app: "PhotoCraft",
    title: "PhotoCraft — official product page",
    author: "ArtCraft",
    url: "https://getartcraft.com/apps/photocraft",
    publishedAt: "ongoing",
    summary:
      "Official feature list, installer downloads (macOS/Windows/Linux/Web), build-from-source instructions, and the project's own parity claims (134 of 135 PSD round-trip, 16 adjustment layers, 70+ filters).",
    keyTakeaway: "Authoritative source for what PhotoCraft is supposed to do.",
    tier: "news",
  },
  {
    id: "official-filmcraft",
    kind: "official",
    app: "FilmCraft",
    title: "FilmCraft — official product page",
    author: "ArtCraft",
    url: "https://getartcraft.com/apps/filmcraft",
    publishedAt: "ongoing",
    summary:
      "Official feature list, platform downloads, source-build instructions and release links for FilmCraft. Use the current repository documentation for supported codecs and known delivery limitations.",
    keyTakeaway: "Reference for what the project claims FilmCraft can decode and edit.",
    tier: "news",
  },
];

export const resourcesByApp = (app: ExternalResource["app"]) =>
  externalResources.filter((r) => r.app === app);
