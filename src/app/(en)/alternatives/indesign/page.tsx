import Link from "next/link";

import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { indesignGuide as guide } from "@/content/alternatives/indesign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/indesign/", image: "/images/og/indesign-alternatives.png", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["scribus-vs-indesign", "Scribus vs InDesign"],
  ["migration", "Migrating INDD and IDML"], ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function InDesignAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/indesign/"
    breadcrumbLabel="InDesign"
    eyebrow="Page layout guide · Six options compared"
    toc={toc}
    sectionIds={["scribus-vs-indesign", "migration"]}
    sectionKickers={["Workflow verdict", "Migration order"]}
    optionsIntro={<p className="guide-prose">For the ArtCraft option in this list, begin with the <Link href="/apps/designcraft/">current DesignCraft status and feature guide</Link> before testing it against important documents.</p>}
    criteriaHeading="What makes a good open source InDesign alternative"
    criteriaParagraphs={[
      <>A good open source InDesign alternative must be honest about which half of the job it covers. Visual page layout, long-document structure and print output are different problems. Scribus is the mature layout option; LibreOffice Writer and LaTeX can be better for text-heavy documents; DesignCraft is a project to watch. Choose by the document you must deliver, not by the closest-looking interface.</>,
      <>Test with the assets and the printer. Collect fonts and images, export a reference PDF from the original, compare pages, and run preflight before the final delivery. For the PDF side of the workflow, see the <Link href="/alternatives/acrobat/">Acrobat alternatives</Link>, or return to the <Link href="/alternatives/">alternatives hub</Link>.</>,
    ]}
    related={{ href: "/alternatives/substance-painter/", label: "Related: open-source Substance Painter alternatives →" }}
  />;
}
