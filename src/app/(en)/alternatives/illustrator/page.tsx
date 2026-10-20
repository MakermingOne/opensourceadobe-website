import Link from "next/link";

import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { illustratorGuide as guide } from "@/content/alternatives/illustrator";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/illustrator/", image: "/images/og/illustrator-alternatives.png", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["inkscape-vs-illustrator", "Inkscape vs Illustrator"],
  ["ai-workflow", "Moving an .ai workflow"], ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function IllustratorAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/illustrator/"
    breadcrumbLabel="Illustrator"
    eyebrow="Vector illustration guide · Six options compared"
    toc={toc}
    sectionIds={["inkscape-vs-illustrator", "ai-workflow"]}
    sectionKickers={["Workflow verdict", "Interchange decision"]}
    optionsIntro={<p className="guide-prose">For the ArtCraft option in this list, begin with the <Link href="/apps/vectorcraft/">current VectorCraft status and feature guide</Link> before testing it against important artwork.</p>}
    criteriaHeading="What makes a good open source Illustrator alternative"
    criteriaParagraphs={[
      <>A good open source Illustrator alternative needs more than a pen tool. It must handle the files you exchange, the colour your output requires, and the typography your brand depends on. For SVG-first work, the bar is lower than for a studio that receives editable .ai files from clients. Decide which of those two situations describes you before comparing feature lists.</>,
      <>Test the whole handoff: import, edit, export, reopen in the destination application and, for print, pass the printer’s preflight. Inkscape is the mature starting point and VectorCraft is the ArtCraft project to watch. For the adjacent PDF workflow, see the <Link href="/alternatives/acrobat/">Acrobat alternatives</Link>, or return to the <Link href="/alternatives/">full alternatives hub</Link>.</>,
    ]}
    related={{ href: "/alternatives/after-effects/", label: "Related: open-source After Effects alternatives →" }}
  />;
}
