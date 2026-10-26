import Link from "next/link";
import { AlternativeGuidePage } from "@/components/alternatives/guide-page";
import { premiereGuide as guide } from "@/content/alternatives/premiere";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/premiere/", absoluteTitle: true });

const toc: Array<[string, string]> = [
  ["glance", "The six options at a glance"], ["options", "Option by option"],
  ["kdenlive-vs-premiere", "Kdenlive vs Premiere Pro"], ["migration", "Moving Premiere projects"],
  ["choosing", "What to look for"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function PremiereAlternativesPage() {
  return <AlternativeGuidePage
    guide={guide}
    path="/alternatives/premiere/"
    breadcrumbLabel="Premiere Pro"
    eyebrow="Video editing guide · Six options compared"
    toc={toc}
    sectionIds={["kdenlive-vs-premiere", "migration"]}
    sectionKickers={["Workflow verdict", "Interchange decision"]}
    optionsIntro={<p className="guide-prose">Compare established editors below. For the ArtCraft project targeting this workflow, read the <Link href="/apps/filmcraft/">FilmCraft status guide</Link>.</p>}
    criteriaHeading="What makes a good free Premiere Pro alternative"
    criteriaParagraphs={[
      <>Start with the deliverable: a rendered video, an editable team project or a reusable graphics template. Test source codecs, audio, captions, proxy relinking and export on your own hardware. A working timeline is only one part of the job.</>,
      <>For compositing and motion graphics, see the <Link href="/alternatives/after-effects/">After Effects alternatives guide</Link>. Browse the <Link href="/alternatives/">alternatives hub</Link> for the rest of your creative workflow.</>,
    ]}
    related={{ href: "/alternatives/after-effects/", label: "Related: open source After Effects alternatives →" }}
  />;
}
