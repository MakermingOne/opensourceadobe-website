import Link from "next/link";

import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { acrobatGuide as guide } from "@/content/alternatives/acrobat";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/acrobat/", image: "/images/og/acrobat-alternatives.png", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["acrobat-vs-open-source", "Acrobat vs open source tools"],
  ["switching", "If you only read, fill or sign"], ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function AcrobatAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/acrobat/"
    breadcrumbLabel="Acrobat"
    eyebrow="PDF workflow guide · Six options compared"
    toc={toc}
    sectionIds={["acrobat-vs-open-source", "switching"]}
    sectionKickers={["Workflow verdict", "Switching decision"]}
    optionsIntro={<p className="guide-prose">For the ArtCraft option in this list, begin with the <Link href="/apps/pdfcraft/">current PdfCraft status and feature guide</Link> before testing it against important documents.</p>}
    criteriaHeading="What makes a good open source Acrobat alternative"
    criteriaParagraphs={[
      <>A good open source Acrobat alternative must be judged by the document operations you repeat, not by a feature count. Reading, annotation and form filling are common; page assembly is common; text editing, redaction and certificate signatures are specialised. List the jobs you perform in a month, then test each one on a copy of a real file. A tool that handles reading well may be the wrong choice for a legal signature workflow.</>,
      <>The second test is fidelity. Open the result in a different viewer, print it, and if the document is for a printer, ask which preflight checks it passes. Keep the original until the final file has been verified. For a broader view of free and open-source options, return to the <Link href="/alternatives/">Adobe alternatives hub</Link> or compare the <Link href="/alternatives/illustrator/">Illustrator alternatives</Link> if the job also involves vector artwork.</>,
    ]}
    related={{ href: "/alternatives/illustrator/", label: "Related: open-source Illustrator alternatives →" }}
  />;
}
