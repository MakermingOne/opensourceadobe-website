import type { ArticleGuide } from "./types";

export const photoCraftHowToUseGuide: ArticleGuide = {
  path: "/artcraft/photocraft-how-to-use/",
  title: "How to Use PhotoCraft: First Edit, Save and Export",
  description: "A first PhotoCraft edit, step by step, from PhotoCraft’s official user guides: install, layers, masks, text, saving, export and the fixes they list.",
  h1: "How to use PhotoCraft: a first edit",
  eyebrow: "PhotoCraft guide · Based on the official docs",
  lede: "This guide follows PhotoCraft’s official user documentation from installation to a layered edit, a saved file and an export. We have not completed this walkthrough on our own machine, so treat it as a checklist. Confirm menu names in your version, and work on copies of your files.",
  sections: [
    {
      id: "version",
      heading: "Check your version first",
      paragraphs: [
        "The official user guides we followed are labelled version 0.8.2, and one FAQ page is labelled 0.9.0. The latest GitHub release checked on 22 October 2026 is PhotoCraft 0.12.0, originally published on 21 October UTC. Open Help › System Info… to see your version. If a menu name below does not match, read the release notes for your version.",
      ],
    },
    {
      id: "install",
      heading: "Install PhotoCraft",
      paragraphs: [
        "Download the file for your system from the PhotoCraft page on getartcraft.com or from the latest GitHub release. Windows 10 or later is required. Most Intel and AMD PCs use the 64-bit Windows installer (.msi), and Arm PCs use the Arm build. Macs use the universal DMG, which runs on Apple silicon and Intel. On Linux, choose an AppImage, a .deb or .rpm package, a Flatpak or a tarball.",
        "Before you run the file, check it against SHA256SUMS.txt. The download safety guide shows how.",
      ],
      links: [{ label: "How to check a download", href: "/artcraft/safety/" }],
    },
    {
      id: "start",
      heading: "Open or create a file",
      paragraphs: [
        "Choose File › Open… to edit an existing image, including PSD files. To start a new image, choose File › New…, then click Create. The panels you will use most are Layers, Properties and History. Every step appears in History, and you can undo it there.",
      ],
    },
    {
      id: "adjust",
      heading: "Adjust colours without changing your pixels",
      paragraphs: [
        "Click the layer that the adjustment should sit above, then choose Layer › New Adjustment Layer and pick an option such as Curves…, Levels… or Hue/Saturation…. Change the settings in the Properties panel. Because the adjustment sits on its own layer, you can edit or hide it later.",
      ],
    },
    {
      id: "mask",
      heading: "Limit a change to part of the image",
      paragraphs: [
        "Make a selection with the Elliptical Marquee Tool, or choose Select › Subject to let PhotoCraft pick the main subject. Use Select › Modify › Feather… for a soft edge. With the adjustment layer active, choose Layer › Layer Mask › Reveal Selection so that only the selected area shows the change. Hide Selection does the opposite.",
        "According to the guide, smart selection runs on your computer and needs no account or cloud service.",
      ],
    },
    {
      id: "text",
      heading: "Add text",
      paragraphs: [
        "Press T to choose the Horizontal Type Tool. Click the canvas for one line of text, or drag a rectangle for a paragraph block, then type. Set the font, size and colour in the character and paragraph controls. Add a drop shadow or another effect from Layer › Layer Style.",
        "Type › Convert to Shape turns the letters into vector shapes. Type › Rasterize Type Layer turns them into pixels, and after that you can no longer edit the words, so keep an editable copy first.",
      ],
    },
    {
      id: "save",
      heading: "Save with layers",
      paragraphs: [
        "Choose File › Save As… and pick PSD Document to share the file with Photoshop users, or PhotoCraft (.pcraft) for PhotoCraft’s own format. File › Save a Copy… writes a new file and leaves the open document as it is.",
        "Saving a PSD again keeps the layers and the rendered result, but the file is not byte for byte the same as the one you opened, because PhotoCraft rewrites some internal records. Keep the original file.",
      ],
    },
    {
      id: "export",
      heading: "Export a flat image",
      paragraphs: [
        "Choose File › Export › Export As…, pick PNG, JPG, WebP, TIFF or TGA, and check the preview and the estimated file size before you click Export. Exporting makes a flat copy and leaves your layered document unchanged.",
        "For a one-click PNG, set your options under File › Export › Export Preferences…, then use File › Export › Quick Export as PNG.",
      ],
    },
    {
      id: "trouble",
      heading: "If something goes wrong",
      paragraphs: [
        "The official troubleshooting pages cover the problems below. Each entry names the fix the project gives.",
      ],
      list: [
        "Windows with Intel graphics: if PhotoCraft closes while it starts, start it again. After a crash it picks a safer graphics mode. The troubleshooting page also describes a PowerShell workaround for advanced users.",
        "Intel Mac: update to PhotoCraft 0.8.2 or later. The troubleshooting page says Macs patched with OpenCore Legacy Patcher had no fix when that page was written.",
        "A PSD text layer jumps when you start editing it: update to 0.8.2 or later, then open the file again.",
        "To report a bug, choose Help › Report an Issue…, copy the text from Help › System Info…, and attach a file only if it contains nothing private.",
      ],
    },
    {
      id: "limits",
      heading: "What PhotoCraft cannot do yet",
      paragraphs: [
        "The project says PhotoCraft is in early alpha and is not yet a Photoshop replacement for daily professional work. The gaps it lists include AI and generative features, tools that Photoshop has and PhotoCraft does not yet, depth in typography and professional workflows, and plug-in compatibility.",
        "Test your own files before you depend on PhotoCraft for a deadline. Our comparison of PhotoCraft with other open-source editors is in the Photoshop alternatives guide.",
      ],
      links: [{ label: "Open-source Photoshop alternatives", href: "/alternatives/photoshop/" }],
    },
  ],
  faqs: [
    { question: "Is PhotoCraft free?", answer: "Yes. The official pages describe PhotoCraft as free and open source, and its repository publishes the code under MIT OR Apache-2.0. ArtCraft’s paid plans apply to the hosted AI studio, not to this desktop editor." },
    { question: "Can PhotoCraft open my Photoshop files?", answer: "The user guides say it opens and saves layered PSD and PSB files. When a feature cannot be matched exactly, such as some layer effects or adjustments, PhotoCraft approximates it or leaves it out and shows a warning. Test copies of complex files." },
    { question: "Where can I get help?", answer: "Ask in the ArtCraft Discord, or choose Help › Report an Issue… to open the issue tracker. Include your version and system details from Help › System Info…." },
    { question: "Does PhotoCraft use Photoshop’s shortcuts?", answer: "The README says its menus, panels, tools and shortcuts follow Photoshop’s layout. Check individual shortcuts in your version, because they can change between releases." },
  ],
  sourceIds: ["photocraft-user-index", "photocraft-user-start", "photocraft-user-install", "photocraft-user-open-save", "photocraft-user-adjustments", "photocraft-user-select-mask", "photocraft-user-text", "photocraft-user-export", "photocraft-user-troubleshooting-start", "photocraft-user-troubleshooting-text", "photocraft-user-get-help", "photocraft-user-faq-replace", "photocraft-release-0120", "photocraft-gaps-0120", "photocraft-repository"],
};
