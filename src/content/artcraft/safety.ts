import type { ArticleGuide } from "./types";

export const artCraftSafetyGuide: ArticleGuide = {
  path: "/artcraft/safety/",
  title: "Is ArtCraft Safe to Download? A Verification Checklist",
  description: "How to confirm an ArtCraft download is official: its source, SHA-256 checksums, code signing and open-source review, plus what these checks cannot prove.",
  h1: "Is ArtCraft safe to download?",
  eyebrow: "Download safety · Checked 20 October 2026",
  lede: "No page can certify a program as safe, and we did not audit or scan any ArtCraft file. You can still check three things: that the file came from an official source, that it matches the checksum the project published, and that you can read the source code when the risk matters. This guide shows how to check each one and what the checks cannot prove.",
  sections: [
    {
      id: "official-source",
      heading: "Start from an official source",
      paragraphs: [
        "The official ArtCraft pages we checked on 20 October 2026 link to downloads from getartcraft.com. The studio, ArtCraft Launcher and each Craft App are published on GitHub under the storytold organisation. The browser version of the studio runs at app.getartcraft.com, so it needs no installer.",
        "Other sites use similar names. Some describe themselves as mirrors, community portals or guides. We have not assessed them, and this site does not host installers. Type the official address yourself, or follow links from getartcraft.com or the storytold GitHub organisation.",
      ],
      links: [
        { label: "Which ArtCraft GitHub repository?", href: "/github/" },
        { label: "Download guide for the Craft Apps", href: "/download/" },
      ],
    },
    {
      id: "checksums",
      heading: "Compare the file with its checksum",
      paragraphs: [
        "PhotoCraft 0.16.0, published on 25 October 2026 UTC, includes a SHA256SUMS.txt file, and GitHub shows a sha256 digest next to every file in the release. ArtCraft studio 0.41.0, published on 26 September 2026, has no SHA256SUMS.txt among its release files, but GitHub still shows a sha256 digest for each installer.",
      ],
      table: {
        caption: "What the two releases provide",
        columns: ["Check", "PhotoCraft 0.16.0", "ArtCraft studio 0.41.0"],
        rows: [
          { label: "Checksum file", cells: ["Checksum file", "SHA256SUMS.txt in the release", "None among the release files"] },
          { label: "Digest per file", cells: ["Digest per file", "sha256 shown by GitHub", "sha256 shown by GitHub"] },
          { label: "Windows installers", cells: ["Windows installers", "MSI installers and a portable ZIP", "Setup .exe and MSI"] },
          { label: "macOS files", cells: ["macOS files", "Universal DMG and command-line ZIP", "Universal DMG and app archive"] },
        ],
      },
    },
    {
      id: "checksum-steps",
      heading: "How to check a download",
      paragraphs: [
        "Work through these steps on the computer that will run the file. The example commands are standard ones on each system.",
      ],
      list: [
        "Download the file, and SHA256SUMS.txt if the release has one, from the same release page.",
        "Compute the SHA-256 hash on your computer. On macOS, run shasum -a 256 followed by the file name. On Linux, run sha256sum on the file. On Windows PowerShell, run Get-FileHash with the file name and -Algorithm SHA256.",
        "Compare the result with the matching line in SHA256SUMS.txt, or with the digest GitHub shows for that file. If they differ, delete the file and download it again from the official release.",
      ],
    },
    {
      id: "what-checksum-means",
      heading: "What a matching checksum shows",
      paragraphs: [
        "A match shows that your copy is identical to the file the release published. It does not show that the release is free of bugs or malicious code, and it cannot detect a release that was built badly or changed before it was published. Treat it as protection against corruption and tampering in transit, not as a security audit.",
      ],
    },
    {
      id: "signing",
      heading: "Check code signing and notarisation",
      paragraphs: [
        "PhotoCraft’s install guide says its Windows installers and executables are code-signed, and that its macOS disk image is signed and notarized by Apple. These are the project’s statements. We did not verify the signatures ourselves.",
        "We did not find an equivalent statement for the ArtCraft studio on the pages we checked. Before you run an installer, check it on your own system. On Windows, open the file’s Properties and look for a Digital Signatures tab. On macOS, Gatekeeper checks downloaded apps when you first open them.",
      ],
    },
    {
      id: "source-code",
      heading: "Read the code if the risk matters",
      paragraphs: [
        "The studio and the Craft Apps publish their code under MIT OR Apache-2.0. PhotoCraft’s repository includes a SECURITY.md file that explains how to report a vulnerability. The studio’s repository includes a development setup guide for building from source.",
        "Open source makes review possible. It does not mean that anyone has reviewed every line. If you depend on the software for client work, decide whether you need a source review or a build from source, and who will maintain that build.",
      ],
    },
    {
      id: "data",
      heading: "Check what leaves your computer",
      paragraphs: [
        "The Craft Apps are described as working on your own files. PhotoCraft’s selection tools run on your computer, and its guide says they need no account and no cloud.",
        "Hosted generation in the AI studio works differently. Prompts and images you submit for generation are processed on remote servers by the provider of the model you choose. We could not find a privacy policy or terms page at getartcraft.com/privacy or getartcraft.com/terms; both returned “not found” when we checked. Do not upload private material to hosted generation until you have read the terms the app shows you.",
      ],
    },
    {
      id: "alpha",
      heading: "Treat alpha builds as test builds",
      paragraphs: [
        "The official Craft Apps page labels PhotoCraft, PdfCraft and FigCraft as early alpha. The other ten apps are labelled in development. Keep copies of your files, test with copies first, and do not make an alpha app your only route to important work.",
      ],
    },
    {
      id: "limits",
      heading: "What these checks do not prove",
      paragraphs: [
        "Use these checks as a filter, not as a verdict. They leave the following questions open.",
      ],
      list: [
        "They do not scan a file for malware and do not audit the code.",
        "They do not prove that the release process was secure.",
        "They do not show that the software works with your files or your hardware.",
        "They cannot verify hosted services, because there is no downloaded file to check.",
      ],
    },
  ],
  faqs: [
    { question: "Can I trust a checksum published on a different website?", answer: "Only if it comes from the project’s own release page. A checksum copied from a third-party site can match a file that is not the official one, so compare it with the official release." },
    { question: "Does OpenSourceAdobe host or check the installers?", answer: "No. We link to official files and do not mirror, repackage or scan them. For this page we did not run the installers." },
    { question: "Is the browser version safer than an installer?", answer: "This page cannot say that. The browser version runs on remote servers, so it avoids a local install but sends your inputs to a service. Read its terms before you use private material." },
    { question: "Why does the studio release have no checksum file?", answer: "The release we checked includes no SHA256SUMS.txt. Use the sha256 digest GitHub shows for each file, and read the release notes for any update before you install." },
  ],
  sourceIds: ["artcraft-home", "artcraft-apps", "artcraft-repository", "artcraft-release-0410", "photocraft-repository", "photocraft-release-0160", "photocraft-checksums-0160", "photocraft-user-install", "photocraft-security", "artcraft-dev-setup", "artcraft-pricing-official", "photocraft-user-select-mask"],
};
