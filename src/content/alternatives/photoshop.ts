import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-11";

export const photoshopGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source Photoshop Alternatives: PhotoCraft, GIMP & More",
  description: "Six open source and free Photoshop alternatives compared on layers, PSD support, plugins and AI features — plus what each one still cannot do. Updated October 2026.",
  h1: "Open source Photoshop alternatives, compared",
  introduction: "If you need an open source Photoshop alternative, start by naming the files and jobs that must survive the move. GIMP is the closest mature general-purpose editor here, but no candidate reproduces every Photoshop workflow. Photopea preserves familiar browser-based PSD editing without being open source; Krita is stronger for painting; Paint.NET favors quick Windows edits; and PhotoCraft remains an early-alpha project. The comparison below separates free from open source and treats PSD support as a spectrum, not a yes-or-no badge. A true open source Photoshop alternative must also survive real file exchange, not just open in a browser.",
  verdicts: [
    "GIMP is the closest mature replacement for general raster editing because it combines layers, masks, high-bit-depth processing, scripting, and a long-lived plug-in ecosystem.",
    "Paint.NET is the lightest practical desktop choice for quick Windows edits, especially for people who value fast startup and a small, conventional interface over cross-platform depth.",
    "Exclude Glimpse first: it is an inactive fork of an older GIMP codebase, so choosing current GIMP gives you newer fixes, file support, and an active community.",
  ],
  table: {
    caption: "Six free and open-source Photoshop alternatives compared",
    columns: ["Option", "License", "Platform", "PSD support", "Plugin ecosystem", "Where it breaks down"],
    rows: [
      { label: "GIMP", cells: ["GIMP", "GPL-3.0-or-later", "Windows, macOS, Linux", "Import and export; some Photoshop-only features do not round-trip", "Mature plug-ins, scripts, brushes, and filters", "No native Photoshop parity for adjustment-layer workflows, Smart Objects, or high-end CMYK production"] },
      { label: "PhotoCraft", cells: ["PhotoCraft", "Open source; repository license is the authority", "macOS, Windows, Linux, Web listed; availability varies", "Official project claims PSD work, but compatibility is not independently verified", "Early project; no mature third-party ecosystem", "Early alpha, with production stability and complex-file fidelity still unproven"] },
      { label: "Photopea", cells: ["Photopea", "Free to use under proprietary terms; not open source", "Modern web browser", "Strong PSD-focused browser workflow", "Web plug-in API and scripts, smaller ecosystem than Photoshop", "Browser resource limits, advertisements on the free tier, and no open-source codebase"] },
      { label: "Krita", cells: ["Krita", "GPL-3.0", "Windows, macOS, Linux; Android builds also offered", "Loads and saves many PSD layer features; not complete", "Brush packs, resources, Python and C++ extensions", "Designed for painting and illustration, not broad photo retouching or Photoshop-perfect PSD exchange"] },
      { label: "Paint.NET", cells: ["Paint.NET", "Freeware/proprietary; paid Store edition also available", "Windows 10/11 and Windows Server 2022", "Requires third-party file-type support for broader Photoshop workflows", "Large community effects and file-type plug-in catalog", "Windows-only, limited prepress workflow, and less capable non-destructive editing"] },
      { label: "Glimpse", cells: ["Glimpse", "GPL-3.0", "Historical Windows and Linux builds", "Inherited from its older GIMP base", "Inherited older GIMP plug-ins", "Development stopped; its old GIMP base makes it a poor new installation choice"] },
    ],
  },
  options: [
    {
      name: "GIMP",
      paragraphs: [
        "GIMP is a free, community-developed raster editor distributed under GPL-3.0-or-later. Official builds cover Windows, macOS, and Linux, and the application is designed for retouching, image composition, painting, and format conversion. It is the most established Photoshop alternative in this comparison, with layers, masks, channels, high-bit-depth processing, color management, automation, and a broad supply of community plug-ins and resources.",
        "Its strength is depth without a subscription. Web graphics, photography retouching, compositing, texture work, and exports to common formats can move successfully once a user learns GIMP’s terminology. PSD import and export exist, but GIMP’s own documentation warns that blending modes do not always map exactly. Photoshop-specific constructs such as Smart Objects, editable layer effects, and some adjustment-layer behavior can flatten, change, or require rebuilding. GIMP’s developer roadmap also describes high-end CMYK backend support as work in progress, which matters for controlled prepress and ink workflows.",
        "Choose GIMP when you own the workflow, can make XCF the working format, and deliver flattened or standard exports. Do not make it the only editor in a team that exchanges complex, continually editable PSD files with Photoshop users or depends on Adobe plug-ins and actions.",
      ],
    },
    {
      name: "PhotoCraft",
      paragraphs: [
        "PhotoCraft is ArtCraft’s open-source image-editor project, presented as a familiar layer-based alternative for Photoshop-style work. GitHub lists version 0.9.0, checked October 15, 2026. Its official materials show adjustment layers, masks, text, selections, and PSD-oriented editing across desktop and web targets. The project remains in Early alpha, so those demonstrations do not guarantee that every advertised workflow is dependable on deadline.",
        "The attraction is a modern interface and an architecture being built in public rather than another skin over an old editor. It may suit curious designers who want to test a new open-source Photoshop alternative, report bugs, and help shape keyboard, layer, and file-format behavior. The failure point is maturity: there is no long production history, no Photoshop-sized plug-in marketplace, and no independent evidence that complicated PSD documents preserve every type layer, effect, mask, profile, and blend mode through repeated round trips. Platform labels also should not be confused with equally polished installers on every system.",
        "Use copies of files and verify exports before trusting it with client work. Read the dedicated PhotoCraft guide for its current status, official screenshots, and known unknowns; early adopters are the right audience, while teams needing proven compatibility should keep a mature editor available.",
      ],
    },
    {
      name: "Photopea",
      paragraphs: [
        "Photopea is a browser-based image editor built around a Photoshop-like interface and strong PSD handling. Its official terms allow anyone to use the editor for free and to sell work created with it, while premium removes some constraints and advertising. Those terms are not an open-source license and the product does not publish its application code as a community-governed open-source project, so it belongs in a free Photoshop alternatives list but not a strictly open-source-only shortlist.",
        "Its best feature is immediacy. A user can open a layered document on a managed computer without installing an application, retain a familiar tool arrangement, and handle many common masks, text, vector, Smart Object, and export tasks. Files are processed on the device according to Photopea’s privacy statement. It also exposes scripting and a web plug-in API. Where it breaks is the browser boundary: memory pressure, tab suspension, keyboard conflicts, local-font handling, and very large multi-layer documents can be less predictable than a native workstation. Its ecosystem and color-managed prepress path are not equivalent to Adobe’s.",
        "Choose Photopea for occasional PSD access, classroom or locked-down machines, and quick handoffs. Avoid treating free access as source-code freedom or assuming every Photoshop automation and enterprise workflow transfers unchanged.",
      ],
    },
    {
      name: "Krita",
      paragraphs: [
        "Krita is a GPL-3.0 digital painting application for Windows, macOS, and Linux, with additional mobile builds. The project explicitly focuses on illustration, concept art, comics, textures, animation, and prolonged drawing sessions. Its brush engines, stabilizers, assistants, layer types, masks, color spaces, HDR support, and artist resources make it more capable than Photoshop for some painting-centered workflows.",
        "Krita can load and save PSD features including raster layers, groups, blending modes, layer styles, text, vector shapes, and transparency masks. Its manual is equally clear that PSD is an internal Adobe format that no outside application can support perfectly. A document built around unsupported Photoshop effects, linked Smart Objects, application-specific adjustment behavior, or repeated exchange with an Adobe production team can change. Krita also says it is not intended as a Photoshop replacement for broad image manipulation; batch retouching, photography utilities, and some compositing conventions are not its design center. CMYK is available, but the project still recommends an RGB working space for many jobs and conversion using the target printer profile.",
        "Choose Krita if the canvas, brush system, and drawing experience matter more than Photoshop parity. Illustrators can switch confidently after testing deliverable formats; photo retouchers should evaluate GIMP or Photopea first.",
      ],
    },
    {
      name: "Paint.NET",
      paragraphs: [
        "Paint.NET is a fast Windows image editor distributed in two functionally similar editions: a free Classic download and a paid Microsoft Store version with automatic updating. Its license permits personal, academic, commercial, government, and business use, but forbids modification and derivative works. It is therefore freeware, not open-source software. Current requirements center on 64-bit Windows 10 or 11, Direct3D 11 graphics, and an SSD.",
        "The application is strong at the work its name suggests: quick crops, color changes, selections, layers, effects, annotations, and web-ready exports without a complex workspace. Community effect and file-type plug-ins can broaden it, and the official documentation maintains installation guidance and a plug-in index. The same documentation notes that those plug-ins are third-party software without support from the Paint.NET team. PSD work therefore depends more heavily on extensions and cannot be assumed to preserve an advanced Photoshop document. There is no macOS or Linux edition, and non-destructive adjustment workflows, sophisticated typography, controlled CMYK prepress, automation, and large collaborative documents are not its core strengths.",
        "Choose Paint.NET for a Windows user who wants a responsive editor for modest raster tasks. Do not choose it as the main interchange application for layered agency files or as an open-source project you can audit and modify.",
      ],
    },
    {
      name: "Glimpse",
      paragraphs: [
        "Glimpse Image Editor was a GPL-3.0 downstream fork of GIMP created primarily to provide a different product name and, later, improve aspects of the interface. Its initial releases were based on the GIMP 2.10 generation, so layers, masks, filters, PSD handling, and plug-in behavior largely came from that inherited code rather than an independent editing engine.",
        "That history explains both its appeal and its decisive weakness. A person who liked GIMP’s capabilities but wanted alternate branding could get a familiar editor. The project then went on hiatus and its main repository was archived; it no longer offers a current development path comparable with GIMP itself. Installing it now means accepting an older base, outdated dependencies, missing security and compatibility improvements, and an ecosystem that did not develop separately. Any apparent Photoshop compatibility is constrained by what the underlying historical GIMP version supported, while modern GIMP has continued to improve PSD import/export, high-bit-depth processing, and platform packages.",
        "Glimpse is useful as project history, not as a 2026 recommendation. Existing users should plan a controlled move to current GIMP, preserving original files and checking fonts, plug-ins, and exports. New users should exclude it first rather than investing in abandoned tooling.",
      ],
    },
  ],
  sections: [
    {
      heading: "GIMP vs Photoshop: what actually still breaks",
      paragraphs: [
        "GIMP can replace Photoshop for a large class of self-contained raster work, but the answer changes when the working file must remain Adobe-native. Layers, groups, raster masks, channels, selections, curves, levels, and common blend modes cover everyday retouching and compositing. GIMP 3 also supports high-bit-depth processing and a modern plug-in API. The practical problem is semantic compatibility: a Photoshop feature and a similarly named GIMP feature do not necessarily serialize into the same PSD structure. GIMP’s PSD documentation warns that blend modes may not convert exactly, while editable Photoshop effects and Smart Object workflows can require rasterization or reconstruction.",
        "Color is another dividing line. GIMP supports profiles, soft proofing, CMYK import/export paths, and high-precision RGB editing, but its roadmap still labels high-end CMYK backend storage as work in progress. A photographer preparing RGB web and print exports can often switch; a prepress operator controlling separations, spot colors, overprint, trapping, and PDF/X delivery should not assume parity. Channels and 16/32-bit processing are capable, yet specialized Adobe filters and automation may not exist. Non-destructive editing is improving, but Photoshop’s adjustment layers, Smart Filters, linked objects, and embedded asset conventions remain a difficult handoff boundary.",
        "The plug-in question is similar. GIMP has a healthy ecosystem, but it does not run Photoshop plug-ins or actions as a drop-in platform. Interface layout and shortcuts also require relearning, especially in teams with documented Adobe procedures. Switch web graphics, independent photo retouching, texture creation, and flattened delivery after testing. Keep Photoshop in the loop for complex PSD collaboration, Adobe-only automation, and tightly controlled CMYK production. The broader ArtCraft vs Adobe comparison explains why matching a category is not the same as preserving a production pipeline.",
      ],
    },
    {
      heading: "If you are already using Photopea",
      paragraphs: [
        "Do not switch merely because Photopea runs in a browser. If it opens the PSD files you receive, preserves the features you edit, and exports the required result, it may be the lowest-friction choice. Its official terms permit free use and commercial output, but Photopea is not an open-source project: the terms grant use of the service rather than a source-code license. That distinction matters if offline control, auditable code, community governance, or the ability to maintain a fork is the reason you are leaving Adobe.",
        "Move to GIMP when you want a mature native, open-source workstation and can make XCF the primary working format. Move to Krita when painting, brushes, illustration, or frame animation dominate. Try PhotoCraft only when you are comfortable testing Early alpha software and reporting failures; its dedicated guide documents the current boundary. Keep Photopea for occasional PSD rescue even if another tool becomes your daily editor. For a wider path through free and open tools, return to the alternatives hub before selecting by license alone.",
      ],
    },
  ],
  faqs: [
    { question: "Can these tools open PSD files?", answer: "GIMP, Photopea, and Krita can open many PSD files, while PhotoCraft advertises PSD-oriented editing that still needs careful testing. Paint.NET generally relies on community file-type support, and Glimpse inherited older GIMP behavior. None should be assumed to preserve every Smart Object, effect, adjustment, font, color mode, or blend setting." },
    { question: "Are they free for commercial work?", answer: "GIMP and Krita permit commercial use under their GPL licenses, and Photopea’s terms allow selling work created in the editor. Paint.NET also permits commercial use under its proprietary freeware license. PhotoCraft and Glimpse are open-source projects, but always verify the exact repository license and any third-party assets before redistributing software." },
    { question: "Do I need plugins like I do in Photoshop?", answer: "Not for basic editing, but plug-ins may be needed to reproduce specialized filters, file formats, or automation. GIMP and Krita have established extension ecosystems; Paint.NET relies heavily on community effects and file-type plug-ins. Photopea exposes web plug-ins and scripting. PhotoCraft is too early to offer an equivalent mature marketplace." },
    { question: "What do I lose by leaving Photoshop?", answer: "The largest losses are reliable round-trip PSD fidelity, Adobe-only Smart Object and adjustment workflows, Creative Cloud integration, familiar actions and plug-ins, and established CMYK prepress tooling. You may also spend time relearning shortcuts and rebuilding presets. Independent web, illustration, and photo work can move more easily than agency handoffs." },
  ],
  sources: [
    { id: "gimp-faq", type: "official-page", title: "GIMP User FAQ and license", url: "https://www.gimp.org/docs/userfaq.html", accessedAt },
    { id: "gimp-psd", type: "official-page", title: "GIMP PSD export documentation", url: "https://docs.gimp.org/3.2/en/file-psd-export.html", accessedAt },
    { id: "gimp-roadmap", type: "official-page", title: "GIMP development roadmap", url: "https://developer.gimp.org/", accessedAt },
    { id: "photocraft-official-alt", type: "official-page", title: "PhotoCraft official product page", url: "https://getartcraft.com/apps/photocraft", accessedAt: "2026-10-15" },
    { id: "photocraft-release-alt", type: "official-repository", title: "PhotoCraft v0.9.0 release notes", url: "https://github.com/storytold/photocraft/releases/tag/v0.9.0", accessedAt: "2026-10-15" },
    { id: "photocraft-parity-alt", type: "official-repository", title: "PhotoCraft current parity assessment", url: "https://github.com/storytold/photocraft/blob/main/docs/target-app-parity.md", accessedAt: "2026-10-13" },
    { id: "photopea-terms", type: "official-page", title: "Photopea terms of use and privacy policy", url: "https://www.photopea.com/privacy.html", accessedAt },
    { id: "photopea-plugins", type: "official-page", title: "Photopea plug-in API", url: "https://www.photopea.com/api/plugins", accessedAt },
    { id: "krita-license", type: "official-page", title: "Krita license", url: "https://krita.org/en/about/license/", accessedAt },
    { id: "krita-psd", type: "official-page", title: "Krita PSD format documentation", url: "https://docs.krita.org/en/general_concepts/file_formats/file_psd.html", accessedAt },
    { id: "paintnet-license", type: "official-page", title: "Paint.NET licensing and FAQ", url: "https://www.getpaint.net/license.html", accessedAt },
    { id: "paintnet-plugins", type: "official-page", title: "Paint.NET plug-in documentation", url: "https://www.getpaint.net/doc/latest/InstallPlugins.html", accessedAt },
    { id: "glimpse-repo", type: "official-repository", title: "Glimpse Image Editor repository", url: "https://github.com/glimpse-editor/Glimpse", accessedAt },
  ],
};
