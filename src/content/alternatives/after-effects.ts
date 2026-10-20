import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-20";

export const afterEffectsGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source After Effects Alternatives: Blender, Natron & More",
  description: "Six free and open source After Effects alternatives compared for compositing, motion graphics, tracking and rendering — with honest limits on templates and plug-ins.",
  h1: "Open source After Effects alternatives, compared",
  introduction: "An open source After Effects alternative is usually a compromise between three jobs: compositing footage, animating graphics and integrating with an editor. Blender covers compositing, tracking and 3D in one GPL package. Natron is the closest dedicated node compositor. Fusion is capable but proprietary, Kdenlive is an editor rather than a compositor, Glaxnimate focuses on vector animation, and EffectCraft is ArtCraft’s in-development project for this workflow. The comparison marks where each option breaks, because a tool that can key a green screen is not automatically a replacement for an After Effects template, a plug-in stack or a client delivery pipeline.",
  verdicts: [
    "Blender is the strongest all-round open source option for compositing, tracking and 3D motion work, but its node compositor and sequencer do not reproduce After Effects’ layer-and-timeline model.",
    "Natron is the closest dedicated node compositor for keying and tracking, yet development is slow and it lacks After Effects’ text, template and plug-in ecosystem.",
    "EffectCraft is the ArtCraft project aimed at this workflow, but it is in development; do not assume .aep interchange or production render reliability.",
  ],
  table: {
    caption: "Six free and open-source After Effects alternatives compared",
    columns: ["Option", "License", "Platform", "Compositing model", "Motion graphics", "Where it breaks down"],
    rows: [
      { label: "Blender", cells: ["Blender", "GPL-3.0-or-later", "Windows, macOS, Linux", "Node compositor plus 3D and video sequencer", "3D titles, camera moves, Grease Pencil animation", "Not a layer-and-timeline AE; steep learning curve; no .aep import"] },
      { label: "Natron", cells: ["Natron", "GPL-2.0", "Windows, macOS, Linux", "Node-based 2D compositing with OpenFX", "Basic text and transform nodes", "Slow release cadence; weak typography and character animation; no AE templates"] },
      { label: "DaVinci Resolve Fusion", cells: ["Fusion", "Proprietary; free edition available", "Windows, macOS, Linux", "Node compositing inside Resolve", "Fusion titles and motion graphics", "Not open source; free-edition limits; workflow tied to Resolve"] },
      { label: "Kdenlive", cells: ["Kdenlive", "GPL-2.0-or-later", "Windows, macOS, Linux", "Timeline editor with effects and keyframes", "Titles, transitions and simple motion", "Not a compositor; limited tracking and 3D; no AE project import"] },
      { label: "Glaxnimate", cells: ["Glaxnimate", "GPL-3.0", "Windows, macOS, Linux", "Vector animation timeline", "Lottie and vector motion graphics", "Not VFX compositing; limited raster, tracking and 3D"] },
      { label: "EffectCraft", cells: ["EffectCraft", "MIT OR Apache-2.0", "macOS, Windows, Linux, Web listed", "Motion graphics and VFX workbench in development", "Described by the project; unverified", "In development; interchange, plug-ins and render reliability unknown"] },
    ],
  },
  options: [
    {
      name: "Blender",
      paragraphs: [
        "Blender is a GPL-3.0-or-later 3D creation suite with a node compositor, a video sequencer, motion tracking, masking, keying and a full 3D pipeline. It runs on Windows, macOS and Linux. For an After Effects user, the relevant parts are the Compositor workspace, the Movie Clip Editor for tracking, and the ability to combine rendered 3D elements with live footage.",
        "Its strength is range. Camera tracking, planar tracking, rotoscoping, keying, colour correction, lens distortion and 3D titles can all be done inside one application, and the result can be rendered through the same node graph. Geometry, particles and simulation add options that After Effects does not provide natively.",
        "The break is the mental model and the ecosystem. Blender’s compositor is node-based, not a layer stack with a timeline, and its text and shape animation tools are less convenient for broadcast graphics. After Effects project files, templates and most third-party plug-ins do not transfer. Learning the compositor well enough to replace a familiar workflow takes time, and render performance depends heavily on the machine and the scene.",
      ],
    },
    {
      name: "Natron",
      paragraphs: [
        "Natron is a GPL-2.0 node-based compositing application for Windows, macOS and Linux. It supports keying, rotoscoping, tracking, colour correction, masking and OpenFX plug-ins, and it is designed around a node graph rather than a layer timeline. For pure compositing, it is the closest open source counterpart to the compositing half of After Effects.",
        "The appeal is a familiar compositor model without a subscription. OpenFX support gives access to a range of third-party effects, and the node graph makes complex multi-source composites inspectable. It can also read common image sequences and movie files through its FFmpeg-backed readers, which fits a shot-based pipeline.",
        "The limitation is maintenance and motion graphics. Natron’s release cadence has been slow, so check current builds and platform support before committing. Its text, shape animation and template features are not an After Effects substitute, and it does not open .aep projects. Teams that depend on pack shots, lower thirds, expression-driven animation or a large plug-in library will find it incomplete.",
      ],
    },
    {
      name: "DaVinci Resolve Fusion",
      paragraphs: [
        "Fusion is the node-based compositing and motion-graphics page inside DaVinci Resolve. It runs on Windows, macOS and Linux, and Resolve is available in a free edition alongside a paid Studio version. It combines keying, tracking, 3D compositing, particles, text and title tools with direct access to Resolve’s editing and colour pipeline.",
        "For many small teams, Fusion is the pragmatic answer: it is capable, widely documented and integrated with an editor that may already be in use. The free edition covers a great deal of compositing work, and the paid edition adds features and support. Projects stay inside the Resolve ecosystem, which reduces round trips.",
        "It is not open source. The free edition has limits, the licence is proprietary, and the workflow is tied to Resolve rather than to an open project you can audit or fork. After Effects project files and templates do not import as editable compositions. Include Fusion as a free-to-use proprietary option, not as an open source replacement, and check the current licence terms before standardising on it.",
      ],
    },
    {
      name: "Kdenlive",
      paragraphs: [
        "Kdenlive is a GPL-2.0-or-later non-linear video editor for Windows, macOS and Linux. It provides a multitrack timeline, transitions, effects, keyframable parameters, titles and proxy workflows. It can handle simple motion graphics and compositing inside an edit, and it integrates with other KDE tools and common video formats.",
        "Its advantage is that it starts from the edit. A user who needs a lower third, a picture-in-picture, a colour adjustment or a simple animated callout can finish the job without leaving the timeline. It is also lighter and more approachable than a node compositor for short-form work, and the interface is familiar to editors.",
        "The boundary is depth. Kdenlive is not a shot compositor: tracking, keying, rotoscoping and 3D integration are limited, and complex node graphs are not its model. It does not import After Effects projects, and its title and expression tools are simpler. Use it for editorial motion graphics, not for a VFX-heavy After Effects composition.",
      ],
    },
    {
      name: "Glaxnimate",
      paragraphs: [
        "Glaxnimate is a GPL-3.0 vector animation application for Windows, macOS and Linux. It focuses on 2D vector graphics, keyframe animation and Lottie export, with a timeline, shape tools and support for importing SVG artwork. It can also be used as a companion to video editors for animated overlays.",
        "It is a good fit for interface motion, animated icons, explainer graphics and Lottie assets that will run in an app or on the web. The output is small and resolution-independent, and the tool is easier to learn than a full compositor when the job is purely vector animation. The project is actively developed and integrates with several video editors.",
        "It is not an After Effects replacement. There is no footage compositing, 3D, particle system or advanced tracking, and its effect set is deliberately narrow. After Effects project files do not open. Use Glaxnimate for vector motion design and pair it with Blender or Natron when live-action compositing is required.",
      ],
    },
    {
      name: "EffectCraft",
      paragraphs: [
        "EffectCraft is ArtCraft’s open-source motion-graphics and visual-effects application, distributed under MIT OR Apache-2.0. The official directory describes it as a native Rust application for motion graphics and VFX workflows, with macOS, Windows, Linux and web targets listed. It is the closest ArtCraft project to After Effects in intent.",
        "The project is in development, and the public description does not establish the depth of its compositing, tracking, text animation or plug-in support. After Effects project interchange and render reliability are listed as unknowns in our app record, and we have not completed an independent hands-on test. Those gaps matter more in VFX than in many other categories because a failed render can waste an entire delivery window.",
        "Treat EffectCraft as a project to evaluate on copies and to watch, not as a production replacement today. If you need a working open source compositor now, start with Blender or Natron. If you want an ArtCraft-native workflow and can contribute bug reports, read the EffectCraft app guide first and keep a proven fallback for client work.",
      ],
    },
  ],
  sections: [
    {
      heading: "Blender vs After Effects: what actually still breaks",
      paragraphs: [
        "Compositing is the area where Blender can genuinely replace After Effects for a self-contained shot. Its node compositor handles keying, masks, colour correction, blurs, glows, lens distortion and multilayer exports, and the Movie Clip Editor provides tracking and stabilization. Because the same application can render 3D elements, a motion designer can build a shot that would otherwise require several tools.",
        "Motion graphics is less direct. After Effects is built around layers, text, shape layers, expressions and a timeline that editors understand. Blender’s equivalent work is split between the compositor, the 3D viewport, Grease Pencil and the sequencer, and its text and shape animation are not as immediately convenient. Templates, MOGRTs and the wider After Effects preset market do not transfer.",
        "Plug-ins and pipeline are the final boundary. Many After Effects workflows depend on third-party effects, scripts and integrations with Premiere Pro or Adobe Media Encoder. Blender has its own extension ecosystem, but it is not compatible with those plug-ins. Budget time for rebuilding the look, not just for learning the interface. The same caution applies to any open source alternative here.",
      ],
    },
    {
      heading: "If you rely on .aep templates and plug-ins",
      paragraphs: [
        "Start by separating templates you can rebuild from templates you must preserve. A lower-third animation, a simple transition or a title card can often be recreated in Blender, Natron or a vector animation tool. A complex template with expressions, Essential Graphics controls, third-party effects and editable text layers is a different problem, and no open source application here imports it reliably.",
        "For each recurring deliverable, document the elements: footage, fonts, logo assets, animation timing, effects and export settings. Rebuild one representative piece and compare it side by side with the original. If the client supplies an .aep and expects an editable return, keep After Effects available or renegotiate the deliverable format. Do not promise a round trip that the tools cannot make.",
        "Use Blender for 3D and shot compositing, Natron for node-based 2D compositing, Kdenlive for editorial graphics and Glaxnimate for vector motion. EffectCraft is worth testing on copies as it matures. A mixed pipeline can cover more ground than a single replacement, provided the handoffs are tested and the client understands which files are not editable.",
      ],
    },
  ],
  faqs: [
    { question: "Can Blender replace After Effects completely?", answer: "No. Blender is strong for compositing, tracking and 3D motion work, but its layer-and-timeline model, text animation and template ecosystem differ. It does not import .aep projects, and many After Effects plug-ins have no equivalent. Test the specific shots you need to deliver." },
    { question: "Does any open source tool open After Effects projects?", answer: "None of the tools compared here imports .aep projects reliably. Some can read rendered media or exported image sequences, but editable compositions, expressions and plug-in effects do not transfer. Plan to rebuild the work or keep After Effects for those files." },
    { question: "Is Natron still maintained?", answer: "Natron has had a slow release cadence, so check the current repository and available builds for your platform before adopting it. It remains capable for node-based compositing, but it is not a safe assumption for a long-term pipeline without verifying maintenance and support." },
    { question: "What is the best free option for motion graphics?", answer: "It depends on the output. Blender suits 3D and composited motion, Glaxnimate suits vector and Lottie animation, and Kdenlive suits simple editorial graphics. Fusion is capable but proprietary. No single free tool covers the full After Effects feature set, so match the tool to the deliverable." },
  ],
  sources: [
    { id: "blender-compositor", type: "official-page", title: "Blender compositor manual", url: "https://docs.blender.org/manual/en/latest/compositing/index.html", accessedAt },
    { id: "blender-tracking", type: "official-page", title: "Blender motion tracking manual", url: "https://docs.blender.org/manual/en/latest/movie_clip/tracking/index.html", accessedAt },
    { id: "natron-home", type: "official-page", title: "Natron official site", url: "https://natrongithub.github.io/", accessedAt },
    { id: "natron-repo", type: "official-repository", title: "Natron source repository", url: "https://github.com/NatronGitHub/Natron", accessedAt },
    { id: "resolve-fusion", type: "official-page", title: "DaVinci Resolve Fusion", url: "https://www.blackmagicdesign.com/products/davinciresolve/fusion", accessedAt },
    { id: "kdenlive-docs", type: "official-page", title: "Kdenlive documentation", url: "https://docs.kdenlive.org/", accessedAt },
    { id: "glaxnimate-home", type: "official-page", title: "Glaxnimate official site", url: "https://glaxnimate.mattbas.org/", accessedAt },
    { id: "effectcraft-official-alt", type: "official-page", title: "EffectCraft official product page", url: "https://getartcraft.com/apps/effectcraft", accessedAt },
    { id: "effectcraft-repository-alt", type: "official-repository", title: "EffectCraft source repository", url: "https://github.com/storytold/effectcraft", accessedAt },
  ],
};
