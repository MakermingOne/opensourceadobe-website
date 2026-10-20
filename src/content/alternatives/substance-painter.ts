import type { BaseAlternativeGuide, GuideTable } from "./types";

const accessedAt = "2026-10-20";

export const substancePainterGuide: BaseAlternativeGuide & { table: GuideTable } = {
  title: "Open Source Substance Painter Alternatives: ArmorPaint & More",
  description: "Six free and open source Substance Painter alternatives compared for PBR texture painting, baking, channel packing and material authoring — with honest limits.",
  h1: "Open source Substance Painter alternatives, compared",
  introduction: "A Substance Painter alternative is judged on one workflow: painting physically based textures directly on a 3D model, then exporting channel-packed maps that a renderer or game engine will accept. ArmorPaint is the closest open source project to that job. Blender covers painting, baking and procedural materials in one GPL package but is not layer-based texture software. Material Maker builds materials rather than painting them, Krita and GIMP are 2D editors, and 3D-Coat is a capable proprietary option. The comparison marks where each one breaks, because a tool that can paint a texture is not automatically a replacement for smart materials, generators and a studio’s export presets.",
  verdicts: [
    "ArmorPaint is the closest direct open source replacement for hand-painted PBR texturing, but it is a smaller project with fewer smart materials, generators and export presets than Substance 3D Painter.",
    "Blender covers texture painting, baking and procedural materials in one GPL package, but it is not a layer-based texture-painting application and its bake setup is manual.",
    "Material Maker is excellent for procedural materials, not for painting directly on a model; Krita and GIMP remain 2D texture editors rather than PBR painting tools.",
  ],
  table: {
    caption: "Six free and open-source Substance Painter alternatives compared",
    columns: ["Option", "License", "Platform", "PBR painting", "Baking and export", "Where it breaks down"],
    rows: [
      { label: "ArmorPaint", cells: ["ArmorPaint", "Zlib", "Windows, Linux, macOS builds listed", "Layer-based PBR painting directly on a 3D model", "Channel packing and texture export", "Smaller material library and fewer generators; GPU and format support varies"] },
      { label: "Blender", cells: ["Blender", "GPL-3.0-or-later", "Windows, macOS, Linux", "Texture paint mode and shader-node materials", "Cycles baking and node-based channel packing", "Not layer-based PBR painting; manual bake setup; performance on dense meshes"] },
      { label: "Material Maker", cells: ["Material Maker", "MIT", "Windows, Linux, macOS", "Procedural material authoring, not hand painting", "Exports PBR maps for engines", "No direct model painting; node-graph learning curve"] },
      { label: "Krita", cells: ["Krita", "GPL-3.0", "Windows, macOS, Linux", "2D painting with wrap-around mode", "No PBR channel packing or baking", "No 3D model painting; texture sets must be assembled manually"] },
      { label: "GIMP", cells: ["GIMP", "GPL-3.0-or-later", "Windows, macOS, Linux", "2D texture editing and compositing", "No PBR export or baking", "Not designed for seamless PBR sets; no 3D painting workflow"] },
      { label: "3D-Coat", cells: ["3D-Coat", "Proprietary paid", "Windows, macOS, Linux", "PBR painting and voxel sculpting", "Baking and texture export", "Not open source; paid licence; different workflow and ecosystem"] },
    ],
  },
  options: [
    {
      name: "ArmorPaint",
      paragraphs: [
        "ArmorPaint is an open-source PBR texture-painting application distributed under the zlib licence. Source code is available, and compiled desktop builds are sold by the project. It lets an artist import a 3D model, paint colour, roughness, metallic and normal channels in layers, and export packed texture maps. Builds are listed for Windows, Linux and macOS, with platform support varying by release.",
        "Its model is the closest match to Substance 3D Painter in this list: a 3D viewport, a layer stack, brushes, masks, materials and export presets. For indie game assets, props and stylised environments, it can carry a complete texture workflow without a subscription. The source licence also makes it possible to inspect and modify the application.",
        "The break is ecosystem depth. ArmorPaint has a smaller library of smart materials, generators, brushes and export presets than Adobe’s product, and its community tutorials are thinner. GPU compatibility, performance on dense meshes and support for specific model formats should be tested on your hardware. It is a credible open source alternative, not a feature-for-feature clone.",
      ],
    },
    {
      name: "Blender",
      paragraphs: [
        "Blender is a GPL-3.0-or-later 3D suite with texture painting, vertex painting, shader nodes, UV editing and Cycles baking. It runs on Windows, macOS and Linux. An artist can paint base colour directly on a model, build roughness and metallic behaviour in a shader, bake maps and export them for a game engine or renderer.",
        "Its advantage is integration. Modelling, UV unwrapping, painting, baking and rendering happen in one application, so a small team can avoid moving assets between tools. Procedural node materials can generate detail that would be tedious to paint by hand, and the bake system can transfer high-poly detail to a low-poly mesh.",
        "The boundary is the texture-painting experience. Blender does not provide Substance Painter’s layer-based material stack, smart masks and generator library, and its painting tools are less specialised for production texturing. Bake setup is manual, and performance on very dense meshes can be limited. Use Blender when integration and procedural control matter more than a dedicated painter’s interface.",
      ],
    },
    {
      name: "Material Maker",
      paragraphs: [
        "Material Maker is an MIT-licensed procedural material authoring tool built with Godot. It uses a node graph to generate textures and PBR maps, and it can export those maps for engines and renderers. It runs on Windows, Linux and macOS and is aimed at artists who want reusable, parameter-driven materials.",
        "Its strength is procedural reuse. A stone, metal or fabric material can be built once, exposed with parameters and reused across assets, with variations generated without repainting. That fits environment art, stylised projects and technical art workflows where consistency and iteration matter.",
        "It is not a painting application. There is no 3D brush workflow, no layer stack on a model and no direct smart-material projection. The node graph has its own learning curve, and the output still has to be applied to a model in Blender or an engine. Use Material Maker for material generation and pair it with a painter when hand-authored detail is required.",
      ],
    },
    {
      name: "Krita",
      paragraphs: [
        "Krita is a GPL-3.0 digital painting application for Windows, macOS and Linux. It is built for illustration, concept art and texture work, with brush engines, wrap-around mode for seamless tiles, layers, masks and colour management. Many game artists use it for 2D textures, trim sheets and hand-painted detail.",
        "Its brush engine is stronger than most general-purpose editors for painterly work, and wrap-around mode makes seamless tiling practical. It handles large canvases and colour profiles well, and the interface is designed for long drawing sessions rather than photo correction or page layout.",
        "It is not a PBR painter. Krita does not load a 3D model, paint across UV seams in a viewport, bake maps or pack roughness, metallic and ambient occlusion channels. A texture set must be authored as separate 2D images and assembled elsewhere. Use Krita for the painted content, then combine the channels in Blender or another PBR tool.",
      ],
    },
    {
      name: "GIMP",
      paragraphs: [
        "GIMP is a GPL-3.0-or-later raster editor for Windows, macOS and Linux. It provides layers, masks, channels, selections, colour management and a large filter and plug-in ecosystem. For texture work, it can edit individual maps, remove seams, adjust levels and assemble channel-packed images.",
        "Its strength is general image manipulation rather than 3D painting. A technical artist can use GIMP to fix a normal map, combine an ambient-occlusion pass with a roughness map, or prepare a trim sheet. It is also widely available and well documented, which helps in a mixed team.",
        "The boundary is the 3D workflow. GIMP does not load a model, project paint through UVs, bake high-poly detail or export a complete PBR set with channel packing presets. Seamless tiling and channel work are possible but manual. It remains useful for preparing maps that other tools will pack, but treat it as a supporting 2D tool, not as a Substance Painter replacement.",
      ],
    },
    {
      name: "3D-Coat",
      paragraphs: [
        "3D-Coat is a proprietary application for voxel sculpting, retopology and PBR texture painting, available for Windows, macOS and Linux. It combines a sculpting workspace with paint room, layers, smart materials and export options, and it is used in game and character pipelines where sculpting and texturing meet.",
        "Its advantage is breadth. A user can block out a model, retopologise it, paint textures and bake maps in one application, which reduces round trips. The painting tools are mature, and the application has a long history in game development.",
        "It is not open source. The licence is paid and proprietary, the code cannot be audited or self-hosted, and the interface and workflow differ from Substance Painter. It is a commercial product with its own learning curve. It belongs in a commercial shortlist, not an open-source one. For a strictly open source pipeline, start with ArmorPaint and use Blender for baking and integration.",
      ],
    },
  ],
  sections: [
    {
      heading: "ArmorPaint vs Substance 3D Painter: what actually still breaks",
      paragraphs: [
        "The core painting loop is comparable. ArmorPaint can load a mesh, paint colour and material channels in layers, use masks and brushes, and export packed maps. For a small prop or a stylised asset, an artist can produce a complete texture set without Adobe. The 3D viewport, layer stack and export step are recognisably the same category of work.",
        "The break is the material system. Substance 3D Painter’s smart materials, smart masks, generators and procedural effects let an artist build complex wear and surface variation quickly, and the ecosystem of assets and tutorials is much larger. ArmorPaint has materials and generators too, but the library is smaller and the results are less turnkey. A studio that depends on a curated smart-material pipeline will spend time rebuilding it.",
        "Export compatibility is the second gap. Different engines expect different channel packing, naming and colour-space conventions. Substance Painter ships presets for common targets; ArmorPaint’s presets and per-project setup should be verified against your engine. Test the exported maps in the actual renderer, not just in the painting viewport, before declaring the switch complete.",
      ],
    },
    {
      heading: "If you depend on smart materials and generators",
      paragraphs: [
        "List the smart materials and generators your team actually uses, then decide which are essential and which are convenience. Simple grunge, edge wear and dirt can be rebuilt with masks, filters and procedural nodes. A large library of scanned materials with curated parameters is harder to replace, especially when artists rely on consistent looks across a project.",
        "ArmorPaint is the closest open source destination for hand-painted PBR work, while Material Maker can rebuild procedural materials and Blender can bake and combine maps. The Pipeline is not a single application: a team may paint in ArmorPaint, generate materials in Material Maker and bake in Blender. That is more setup, but it can be documented and version-controlled.",
        "Keep Substance 3D Painter for projects that depend on a specific smart material or client-approved look until the replacement has been tested on a full asset. Do not promise identical results from a different material system. The honest comparison is not which tool has more features, but which one can deliver the textures your renderer and client accept.",
      ],
    },
  ],
  faqs: [
    { question: "Is ArmorPaint a full Substance Painter replacement?", answer: "It covers the core loop of painting PBR channels on a 3D model and exporting maps, but it has a smaller smart-material, generator and preset library. Test your model formats, GPU and engine export against a real asset before treating it as a full replacement." },
    { question: "Can Blender paint PBR textures on a model?", answer: "Yes, Blender can paint base colour and other channels directly on a mesh, build materials with shader nodes and bake maps with Cycles. It is not layer-based texture software, so the workflow and performance differ from Substance Painter, and bake setup is manual." },
    { question: "Do Krita or GIMP support 3D texture painting?", answer: "No. Both are 2D image editors. They can paint seamless textures and edit individual maps, but they do not load a 3D model, project paint through UVs, bake high-poly detail or pack PBR channels automatically. Use them for painted source maps, then combine channels in a PBR tool." },
    { question: "What is the best open source option for procedural materials?", answer: "Material Maker is the strongest open source tool here for node-based procedural PBR materials and map export. Pair it with Blender for baking and ArmorPaint or Krita for hand-painted detail. It does not paint directly on a model by itself." },
  ],
  sources: [
    { id: "armorpaint-repo", type: "official-repository", title: "ArmorPaint repository and licence", url: "https://github.com/armory3d/armorpaint", accessedAt },
    { id: "armorpaint-site", type: "official-page", title: "ArmorPaint official site", url: "https://armorpaint.org/", accessedAt },
    { id: "blender-texture-paint", type: "official-page", title: "Blender texture painting manual", url: "https://docs.blender.org/manual/en/latest/sculpt_paint/texture_paint/index.html", accessedAt },
    { id: "blender-baking", type: "official-page", title: "Blender baking documentation", url: "https://docs.blender.org/manual/en/latest/render/cycles/baking.html", accessedAt },
    { id: "material-maker-repo", type: "official-repository", title: "Material Maker repository", url: "https://github.com/RodZill4/material-maker", accessedAt },
    { id: "krita-texture", type: "official-page", title: "Krita documentation", url: "https://docs.krita.org/en/", accessedAt },
    { id: "gimp-docs", type: "official-page", title: "GIMP documentation", url: "https://docs.gimp.org/", accessedAt },
    { id: "3dcoat-home", type: "official-page", title: "3D-Coat official site", url: "https://3dcoat.com/", accessedAt },
  ],
};
