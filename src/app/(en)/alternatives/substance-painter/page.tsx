import Link from "next/link";

import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { substancePainterGuide as guide } from "@/content/alternatives/substance-painter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/substance-painter/", image: "/images/og/substance-painter-alternatives.png", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["armorpaint-vs-substance", "ArmorPaint vs Substance"],
  ["materials", "Smart materials and generators"], ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function SubstancePainterAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/substance-painter/"
    breadcrumbLabel="Substance Painter"
    eyebrow="3D texturing guide · Six options compared"
    toc={toc}
    sectionIds={["armorpaint-vs-substance", "materials"]}
    sectionKickers={["Workflow verdict", "Material pipeline"]}
    optionsIntro={<p className="guide-prose">There is no ArtCraft application dedicated to 3D texture painting yet. This guide is therefore a neutral comparison of the open source and free options that exist today.</p>}
    criteriaHeading="What makes a good open source Substance Painter alternative"
    criteriaParagraphs={[
      <>A good open source Substance Painter alternative must support the full texture loop: load a model, paint PBR channels, bake detail and export maps that the renderer accepts. A brush engine alone is not enough, and a procedural material generator is not a painter. Test the exported maps in the engine you actually use, not only in the application’s viewport.</>,
      <>ArmorPaint is the closest dedicated option; Blender is the strongest integrated fallback; Material Maker, Krita and GIMP cover parts of the pipeline. For the rest of the creative workflow, return to the <Link href="/alternatives/">Adobe alternatives hub</Link> or compare the <Link href="/alternatives/photoshop/">Photoshop alternatives</Link> for 2D texture work.</>,
    ]}
    related={{ href: "/alternatives/photoshop/", label: "Related: open-source Photoshop alternatives →" }}
  />;
}
