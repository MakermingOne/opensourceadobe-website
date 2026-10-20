import Link from "next/link";

import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { afterEffectsGuide as guide } from "@/content/alternatives/after-effects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/after-effects/", image: "/images/og/after-effects-alternatives.png", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["blender-vs-after-effects", "Blender vs After Effects"],
  ["templates", "Templates and plug-ins"], ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function AfterEffectsAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/after-effects/"
    breadcrumbLabel="After Effects"
    eyebrow="Motion and VFX guide · Six options compared"
    toc={toc}
    sectionIds={["blender-vs-after-effects", "templates"]}
    sectionKickers={["Workflow verdict", "Interchange decision"]}
    optionsIntro={<p className="guide-prose">For the ArtCraft option in this list, begin with the <Link href="/apps/effectcraft/">current EffectCraft status and feature guide</Link> before testing it against important projects.</p>}
    criteriaHeading="What makes a good open source After Effects alternative"
    criteriaParagraphs={[
      <>A good open source After Effects alternative must match the work, not the marketing. If the job is shot compositing, node tools such as Blender and Natron are the relevant comparison. If it is broadcast graphics, text and shape animation matter more. If it is a template-driven deliverable, the ability to rebuild and re-export the template may decide the switch before any feature list does.</>,
      <>Test a representative shot or graphic end to end: media import, tracking, keying, animation, render and delivery in the editor or engine the client uses. Keep After Effects for files that must remain editable .aep projects. For the surrounding edit, see the <Link href="/apps/filmcraft/">FilmCraft app guide</Link>, or return to the <Link href="/alternatives/">alternatives hub</Link>.</>,
    ]}
    related={{ href: "/alternatives/indesign/", label: "Related: open-source InDesign alternatives →" }}
  />;
}
