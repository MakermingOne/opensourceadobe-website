import Link from "next/link";

import { AlternativeTable } from "@/components/alternatives/alternative-table";
import { faqSchema, GuideFaq } from "@/components/alternatives/guide-faq";
import { GuideSources } from "@/components/alternatives/guide-sources";
import { VerdictPanel } from "@/components/alternatives/verdict-panel";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { photoshopGuide as guide } from "@/content/alternatives/photoshop";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/photoshop/", image: "/images/og/photoshop-alternatives.png", absoluteTitle: true });

const toc = [
  ["glance", "The six options at a glance"], ["options", "Option by option"], ["gimp-vs-photoshop", "GIMP vs Photoshop"],
  ["photopea", "If you use Photopea"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function PhotoshopAlternativesPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      faqSchema(guide.faqs),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: absoluteUrl("/alternatives/") },
        { "@type": "ListItem", position: 3, name: "Photoshop alternatives", item: absoluteUrl("/alternatives/photoshop/") },
      ] },
    ] }} />
    <div className="container guide-shell">
      <Breadcrumbs currentPath="/alternatives/photoshop/" items={[{ label: "Home", href: "/" }, { label: "Alternatives", href: "/alternatives/" }, { label: "Photoshop" }]} />
      <header className="guide-header"><Eyebrow>Image editing guide · Six options compared</Eyebrow><h1>{guide.h1}</h1><p className="lede">{guide.introduction}</p><p className="updated">Last updated: 2026-10-15</p></header>
      <VerdictPanel items={guide.verdicts} />
      <div className="guide-layout"><main className="guide-main">
        <section className="guide-section" id="glance"><p className="guide-kicker">Comparison</p><h2>The six options at a glance</h2><AlternativeTable table={guide.table} /></section>
        <section className="guide-section" id="options"><p className="guide-kicker">Detailed assessment</p><h2>Option by option</h2><p className="guide-prose">For the newest project in this list, begin with the <Link href="/apps/photocraft/">current PhotoCraft status and feature guide</Link> before testing it against important files. For hands-on setup steps, see the <Link href="/apps/photocraft/">PhotoCraft app guide</Link>.</p><div className="guide-options">
          {guide.options.map((option) => <article className="guide-option" key={option.name}><h3>{option.name}</h3><div className="guide-option__copy">{option.paragraphs.map((paragraph, index) => <p key={paragraph}>{paragraph}{option.name === "PhotoCraft" && index === 2 ? <> See the <Link href="/apps/photocraft/">PhotoCraft guide</Link> before downloading.</> : null}</p>)}</div></article>)}
        </div></section>
        {guide.sections.map((section, index) => <section className="guide-section" id={index === 0 ? "gimp-vs-photoshop" : "photopea"} key={section.heading}><p className="guide-kicker">{index === 0 ? "Workflow verdict" : "Switching decision"}</p><h2>{section.heading}</h2><div className="guide-prose">{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph}>{paragraph}{index === 0 && paragraphIndex === 2 ? <> Read the <Link href="/vs-adobe/">broader ArtCraft vs Adobe comparison</Link> for other workflow boundaries.</> : null}{index === 1 && paragraphIndex === 1 ? <> Browse the <Link href="/alternatives/">alternatives hub</Link> to choose by task.</> : null}</p>)}</div></section>)}
        <section className="guide-section" id="what-makes"><p className="guide-kicker">Selection criteria</p><h2>What makes a good open source Photoshop alternative</h2><div className="guide-prose"><p>A good open source Photoshop alternative needs more than a free download. It must handle layered files, support the formats you actually exchange, and run on the platform you use. The candidates below are ranked by how close they get to replacing Photoshop for real work, not by how many features they list on a landing page.</p><p>We separate free from open source. Photopea is free and capable, but it is not open source. PhotoCraft is open source and ambitious, but it is still early alpha. GIMP is the mature middle ground: open source, cross-platform, and battle-tested, though its interface and PSD fidelity have limits. The right choice depends on whether you need a production tool today or a project to watch tomorrow.</p></div></section>
        <section className="guide-section" id="faq"><p className="guide-kicker">Common switching questions</p><h2>FAQ</h2><GuideFaq items={guide.faqs} /></section>
        <GuideSources sources={guide.sources} />
        <Link className="guide-related" href="/alternatives/lightroom/">Related: open-source Lightroom alternatives →</Link>
      </main><aside className="guide-toc" aria-label="On this page"><p>On this page</p><ol>{toc.map(([href, label]) => <li key={href}><a href={`#${href}`}>{label}</a></li>)}</ol></aside></div>
    </div>
  </>;
}
