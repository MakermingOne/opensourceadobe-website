import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-26";

export const premiereGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Free & Open Source Premiere Pro Alternatives: Six Editors",
  description: "Compare OpenShot, Kdenlive, Shotcut, DaVinci Resolve, Flowblade and Pitivi on price, licensing, platforms and the editing workflows they can replace.",
  h1: "Free and open source Premiere Pro alternatives",
  introduction: "An open source Premiere Pro alternative should fit your footage, editing habits and delivery requirements. Kdenlive is a useful starting point for a conventional multitrack workflow; OpenShot favors a simpler first edit; Shotcut offers flexible filters and format support. Flowblade and Pitivi serve Linux users. DaVinci Resolve adds an integrated editing, grading, effects and audio environment, but its free edition is proprietary. None should be selected on price alone: test camera codecs, timeline playback, captions and an actual export before moving a client project.",
  verdicts: [
    "Start with Kdenlive for a general-purpose open source editor across Windows, macOS and Linux, particularly when proxies and a conventional multitrack timeline matter.",
    "Try OpenShot for a straightforward first project, or Shotcut when filters, format flexibility and local editing are the priority. Linux users can also evaluate Flowblade and Pitivi.",
    "Choose DaVinci Resolve when integrated color and audio finishing matter more than source-code freedom. The free edition is not open source and has feature and codec limits.",
  ],
  table: {
    caption: "Six free and open source Premiere Pro alternatives compared",
    columns: ["Option", "Price and license", "Platform", "Highlights", "Best for", "Where it breaks down"],
    rows: [
      { label: "OpenShot", cells: ["OpenShot", "Free; GPL-3.0-or-later", "Windows, macOS, Linux", "Drag-and-drop timeline, titles, transitions, keyframes", "Beginners and straightforward short videos", "No Premiere project round trip or Adobe template ecosystem"] },
      { label: "Kdenlive", cells: ["Kdenlive", "Free; GPL-2.0-or-later", "Windows, macOS, Linux", "Multitrack editing, proxies, effects, titles, subtitles", "Independent editors and longer timeline work", "Premiere plug-ins, MOGRTs and Adobe integrations do not transfer"] },
      { label: "Shotcut", cells: ["Shotcut", "Free; GPL-3.0", "Windows, macOS, Linux", "Broad format support, filters, scopes, proxies", "Local editing with flexible media and filters", "Different workflow; complex Adobe timelines need rebuilding"] },
      { label: "DaVinci Resolve", cells: ["DaVinci Resolve", "Free edition; proprietary, paid Studio available", "Windows, macOS, Linux", "Editing, color, Fusion effects and Fairlight audio", "Editors who also need integrated finishing", "Free-edition features and codec support vary by platform; hardware demands"] },
      { label: "Flowblade", cells: ["Flowblade", "Free; GPL-3.0", "Linux", "Precise timeline tools, compositing, filters, proxy editing", "Linux editors who value deliberate trimming workflows", "No native Windows/macOS edition or Adobe project parity"] },
      { label: "Pitivi", cells: ["Pitivi", "Free; LGPL", "Linux", "GNOME interface, trimming, keyframed effects, waveforms", "Linux users making straightforward edits", "GStreamer codec dependencies; check available release and export support"] },
    ],
  },
  options: [
    { name: "OpenShot", paragraphs: [
      "OpenShot is a free video editor under GPL-3.0-or-later, with official downloads for Windows, macOS and Linux. It combines a drag-and-drop multitrack timeline with transitions, titles, compositing and keyframed animation. Its emphasis on an approachable interface makes it a reasonable first stop for a school video, a presentation montage or a simple social clip.",
      "Choose it when the edit is mostly arranging footage, trimming, adding music and exporting a finished video. Build a sample from your own media before committing: the number of tracks, effects and source resolution all affect playback and render time. Keep source footage and a separate project backup. A successful short export is more useful evidence than a screenshot of the timeline.",
      "OpenShot does not reproduce Premiere’s project format, Adobe integrations or motion-graphics template ecosystem. If your team needs an editable Premiere project back, rendering the same-looking video is insufficient. It suits self-contained delivery better than an agency handoff built around Adobe-specific effects and plug-ins.",
    ] },
    { name: "Kdenlive", paragraphs: [
      "Kdenlive is a free, GPL-2.0-or-later non-linear editor for Windows, macOS and Linux. Its multitrack timeline, clip organization, effects, titles, subtitles and proxy workflow make it a strong candidate for editors who want a conventional desktop editing environment. The project publishes a detailed manual covering everyday editing and project management.",
      "Start here for interviews, tutorials, independent films and channel videos that need more timeline control than a basic montage. Proxies let you edit lighter copies while retaining original media for output, although they do not remove every performance bottleneck. Test audio synchronization, caption styling, project reopening and the final encode with your actual camera footage. Budget time for learning track targeting, trimming commands and effect controls.",
      "Kdenlive has its own project model. Premiere plug-ins, MOGRTs, Adobe Dynamic Link compositions and team conventions do not carry across simply because both applications have tracks and bins. Use it when you control the working format and deliver rendered media; keep a tested interchange plan for collaborators using other editors.",
    ] },
    { name: "Shotcut", paragraphs: [
      "Shotcut is a free GPL-3.0 video editor for Windows, macOS and Linux. It supports a broad set of formats through FFmpeg, alongside multitrack editing, keyframed filters, audio tools and video scopes. Proxy editing and preview scaling can help when source media is too demanding for comfortable playback on the available machine.",
      "It suits users who want direct local editing, flexible exports and a substantial filter collection without a subscription. Its interface and playlist-driven organization require adjustment if you learned Premiere first. Try one complete job rather than copying your old workspace: import footage, assemble an edit, balance audio, add titles and produce the delivery file. Shotcut’s official FAQ also explains that saving a project is different from exporting the finished video.",
      "Do not infer a performance winner from the license or download size. Resolution, codec, filters and hardware determine responsiveness. Shotcut cannot serve as a transparent host for Premiere effects or editable Adobe projects; plan to rebuild those pieces and compare exports before switching a recurring production workflow.",
    ] },
    { name: "DaVinci Resolve", paragraphs: [
      "DaVinci Resolve offers a free proprietary edition for Windows, macOS and Linux, alongside paid Resolve Studio. The application combines timeline editing with color grading, Fusion compositing and Fairlight audio. It is relevant to a free Premiere alternatives list, but it does not meet an open-source requirement: free access does not grant the right to inspect, modify or maintain the application’s source code.",
      "Evaluate it when editing is only one part of your delivery and you also need integrated finishing. The workflow can reduce round trips between separate applications, while its breadth takes time to learn. Check the current free-versus-Studio comparison and the supported-codec list for your operating system before importing a camera archive. Hardware, GPU memory and source compression matter as much as the headline feature list.",
      "Interchange formats can help move an edit, but they do not preserve every Premiere effect, title or linked composition. Cloud services and paid features also have separate conditions. Choose Resolve after an end-to-end test, accepting its proprietary license and any platform-specific constraints of the free edition.",
    ] },
    { name: "Flowblade", paragraphs: [
      "Flowblade is a free GPL-3.0 multitrack editor for Linux. It focuses on timeline editing, precise trimming, compositing and image and audio filters, with media support built on the Linux multimedia stack. Its editing tools appeal to users who want a deliberate desktop workflow and are comfortable installing and maintaining Linux applications.",
      "Try it for interviews, narrative edits and other projects where clip arrangement and trimming dominate. Proxy media can make heavier footage easier to work with. As with other editors, verify that your installed media libraries decode the camera files and export the requested deliverable. Test a sequence containing transitions, layered graphics and mixed audio before using it for a deadline. Keep the original media and project files together in a documented folder structure.",
      "The platform boundary is decisive: Flowblade is not a cross-platform choice for a mixed Windows and Mac team. It also does not recreate Premiere’s project semantics, plug-in market or Adobe service integrations. Select it for a Linux-centered workflow with agreed rendered outputs, rather than promising editable Adobe deliverables.",
    ] },
    { name: "Pitivi", paragraphs: [
      "Pitivi is a free, LGPL-licensed editor for Linux, designed around GNOME interface conventions and the GStreamer multimedia framework. It provides timeline trimming, transitions, animated effects and audio waveforms. Its design is attractive for Linux users who want a focused editing application instead of a large all-in-one post-production environment.",
      "It can suit lessons, personal films and straightforward video assembly. Format support follows the installed GStreamer components, so a codec that works on one distribution or package is not a guarantee for another. Check the available release, installation route, source-media decoding and export settings on the actual workstation. A small test should include your real audio format, footage frame rate, titles and an output that plays correctly in the delivery environment.",
      "Do not interpret an uncluttered interface as equivalent to Premiere’s broader production system. Adobe templates, plug-ins and editable projects require a different workflow. Pitivi is worth evaluating when Linux and simplicity are priorities, with a proven fallback if a needed effect, format or project operation is unavailable in your installed build.",
    ] },
  ],
  sections: [
    { heading: "Kdenlive vs Premiere Pro: where the workflow changes", paragraphs: [
      "Both editors can organize footage, assemble a multitrack edit and produce finished video. Kdenlive offers a subscription-free, open source workflow across the main desktop platforms. Premiere remains the practical choice when an existing team depends on Adobe projects, shared conventions, paid plug-ins or linked After Effects compositions. The right choice follows the handoff requirements.",
      "Rebuild one representative sequence in Kdenlive and check trimming accuracy, titles, captions, color adjustments, audio levels and export. Do not treat similarly named effects as identical. If a client requires the original Premiere project with editable graphics, agree on a different deliverable before changing editors.",
    ] },
    { heading: "Moving Premiere projects without promising a perfect round trip", paragraphs: [
      "Archive the original project, media, fonts and any licensed assets before migration. Export reference videos and audio stems so you have a visual and audible baseline. Where both tools support a suitable interchange format, treat it as a starting point for rebuilding the timeline, then inspect cuts, speed changes, transitions, grades and captions individually.",
      "Expect Adobe-only effects, Dynamic Link compositions and motion-graphics templates to need rendering or reconstruction. Keep the original editor available when editable return files are contractual. For new projects, agreeing on media formats, graphics and delivery requirements up front makes a free editor much easier to adopt.",
    ] },
  ],
  faqs: [
    { question: "What is the best open source Premiere Pro alternative?", answer: "Kdenlive is a useful first evaluation for a conventional multitrack workflow on Windows, macOS and Linux. OpenShot favors simpler edits, Shotcut emphasizes flexible filters and formats, and Flowblade and Pitivi serve Linux users. Choose after testing your footage, timeline requirements and final export rather than relying on one universal ranking." },
    { question: "Is DaVinci Resolve free and open source?", answer: "Resolve has a free edition, but it is proprietary software, not open source. Paid Studio adds features, and codec and hardware support vary by operating system and edition. Check the current official comparison and supported-codec documentation with your footage before assuming that the free download covers a particular production workflow." },
    { question: "Can these editors open Premiere Pro projects?", answer: "Do not expect a complete, editable Premiere project round trip. Interchange formats may transfer parts of a timeline where supported, but effects, captions, speed changes, plug-ins and linked compositions can change or disappear. Archive the original project and compare the rebuilt edit against a reference export before using it for delivery." },
    { question: "Can I make commercial videos with open source editors?", answer: "The open source editors listed here permit commercial use. Their software licenses do not automatically license the footage, music, fonts, stock assets or third-party effects you use. Check those permissions separately. Resolve is proprietary, so consult its current terms for the edition and any additional services included in your workflow." },
  ],
  sources: [
    { id: "premiere-openshot", type: "official-page", title: "OpenShot features and platform support", url: "https://www.openshot.org/features/", accessedAt },
    { id: "premiere-openshot-license", type: "official-page", title: "OpenShot license and project background", url: "https://www.openshot.org/about/", accessedAt },
    { id: "premiere-kdenlive", type: "official-page", title: "Kdenlive features", url: "https://kdenlive.org/features/", accessedAt },
    { id: "premiere-kdenlive-manual", type: "official-page", title: "Kdenlive manual", url: "https://docs.kdenlive.org/", accessedAt },
    { id: "premiere-shotcut", type: "official-page", title: "Shotcut features", url: "https://www.shotcut.org/features/", accessedAt },
    { id: "premiere-shotcut-faq", type: "official-page", title: "Shotcut system requirements and FAQ", url: "https://www.shotcut.org/FAQ/", accessedAt },
    { id: "premiere-resolve", type: "official-page", title: "DaVinci Resolve free and Studio editions", url: "https://www.blackmagicdesign.com/products/davinciresolve", accessedAt },
    { id: "premiere-flowblade", type: "official-page", title: "Flowblade features and GPL license", url: "https://jliljebl.github.io/flowblade/", accessedAt },
    { id: "premiere-pitivi", type: "official-page", title: "Pitivi Linux video editor", url: "https://www.pitivi.org/", accessedAt },
    { id: "premiere-pitivi-tour", type: "official-page", title: "Pitivi features and LGPL license", url: "https://www.pitivi.org/tour/", accessedAt },
  ],
};
