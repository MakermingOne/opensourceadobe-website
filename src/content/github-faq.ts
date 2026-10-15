import { releasesBySlug } from "@/content/releases";

const photo = releasesBySlug.get("photocraft")!;
const vector = releasesBySlug.get("vectorcraft")!;

export const githubFaqs = [
  {
    question: "Do I need to build these apps myself to use them?",
    answer: "No. The official projects publish installers, and ArtCraft Launcher can install and update the Crafting Apps without compiling their source. Use the download links in this guide and choose the package for your operating system. Building from source is mainly for people who want to audit, modify or contribute to the code, or need a custom build.",
  },
  {
    question: "Are the repositories actively developed?",
    answer: `The release snapshot shows active development: PhotoCraft ${photo.version} was published ${photo.publishedAt.slice(0, 10)} UTC, and VectorCraft ${vector.version} on ${vector.publishedAt.slice(0, 10)} UTC. These are the same official versions and publication dates listed in the table, not an estimate from stars or repository age. Active development does not guarantee stability, a support schedule or readiness for deadline-sensitive work.`,
  },
  {
    question: "Can I fork, modify or redistribute them?",
    answer: "For the repositories verified here, the source code is dual-licensed: you may choose MIT or Apache-2.0, and must follow the terms of the license you choose. That permission covers source code, not automatic rights to project names, logos or branding. Check each repository’s NOTICE, asset attributions and branding terms before distributing a modified build.",
  },
];
