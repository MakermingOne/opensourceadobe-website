import type { ExternalResource } from "./external-resources";

type TutorialVideo = ExternalResource & {
  collection: "official-studio" | "community-install";
  duration: string;
  versionNote: string;
  authorUrl: string;
};

// Publisher/title checked via YouTube oEmbed on 2026-10-20. Official lessons also
// appear in getartcraft.com/tutorials. Recorded app builds were not verified.
// Benja Review's runtime is supplied by the curator; its upload date is omitted.
export const priorityTutorials: TutorialVideo[] = [
  {
    id: "official-studio-2d-basics", collection: "official-studio", kind: "youtube",
    app: "ArtCraft AI studio", tier: "tutorial",
    title: "Artcraft Tutorial: 2D Editor Basics",
    author: "ArtCraft AI", authorDetail: "Official ArtCraft tutorial",
    authorUrl: "https://www.youtube.com/@ArtCraftAI",
    url: "https://www.youtube.com/watch?v=ZASPqlqUBQc", youtubeId: "ZASPqlqUBQc",
    publishedAt: "2025-09-02", duration: "2:22",
    summary: "Learn basic 2D editor controls and put together a simple scene in the ArtCraft AI studio.",
    versionNote: "ArtCraft AI studio’s 2D editor, recorded in 2025. Exact app version not verified.",
    keyTakeaway: "A short official introduction to the studio canvas before moving on to a 3D scene.",
  },
  {
    id: "official-studio-2d-to-3d", collection: "official-studio", kind: "youtube",
    app: "ArtCraft AI studio", tier: "tutorial",
    title: "Artcraft Tutorial: 2D Images into 3D Objects",
    author: "ArtCraft AI", authorDetail: "Official ArtCraft tutorial",
    authorUrl: "https://www.youtube.com/@ArtCraftAI",
    url: "https://www.youtube.com/watch?v=t8F-sy_zyK4", youtubeId: "t8F-sy_zyK4",
    publishedAt: "2025-09-05", duration: "2:47",
    summary: "Follow the ArtCraft AI studio workflow from the 2D canvas into the 3D editor, using images as scene elements.",
    versionNote: "ArtCraft AI studio’s 2D-to-3D workflow, recorded in 2025. Exact app version not verified.",
    keyTakeaway: "Continue from canvas basics into composing a scene in the studio’s 3D editor.",
  },
  {
    id: "community-craftapps-windows-benja", collection: "community-install", kind: "youtube",
    app: "ArtCraft suite", tier: "tutorial",
    title: "How to Download ArtCraft CraftApps on Windows (FREE) – Step by Step",
    author: "Benja Review", authorDetail: "Community installation guide",
    authorUrl: "https://www.youtube.com/@benjareview",
    url: "https://www.youtube.com/watch?v=oL4_LZxnTRA", youtubeId: "oL4_LZxnTRA",
    duration: "1:22",
    summary: "A short third-party guide to downloading and installing the CraftApps on Windows.",
    versionNote: "Windows CraftApps installation. Exact app versions not verified; compare the steps with current official packages.",
    keyTakeaway: "Use as installation orientation alongside the official app and operating-system download selector.",
  },
  {
    id: "community-craftapps-overview-gyan", collection: "community-install", kind: "youtube",
    app: "ArtCraft suite", tier: "tutorial",
    title: "Stop Paying Adobe: How to Install & Use GetArtCraft Suite (Full Guide)",
    author: "GYAN BATO", authorDetail: "Community installation guide",
    authorUrl: "https://www.youtube.com/@vaibhavjayswal8279",
    url: "https://www.youtube.com/watch?v=ZKaW8u26afU", youtubeId: "ZKaW8u26afU",
    publishedAt: "2026-10-18", duration: "3:27",
    summary: "A third-party overview of Launcher and standalone downloads, installation, and a first look at PhotoCraft and VectorCraft. The description lists Windows, macOS and Linux installation chapters.",
    versionNote: "CraftApps installation and overview, published October 18, 2026. Exact app versions not verified.",
    keyTakeaway: "Get an overview of the installation choices, then check current release notes and test your own files before switching tools.",
  },
];
