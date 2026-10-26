import Link from "next/link";
import { AlternativeTable } from "@/components/alternatives/alternative-table";
import { faqSchema, GuideFaq } from "@/components/alternatives/guide-faq";
import { GuideSources } from "@/components/alternatives/guide-sources";
import { VerdictPanel } from "@/components/alternatives/verdict-panel";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { PageUpdated } from "@/components/page-updated";
import type { ComparisonGuide } from "@/content/comparisons/types";
import { absoluteUrl } from "@/lib/site";

export function ComparisonGuidePage({ guide }: { guide: ComparisonGuide }) {
  const toc = [
    { id: "comparison", heading: "Side-by-side comparison" },
    { id: "scenarios", heading: "Which editor suits your work?" },
    ...guide.sections,
    { id: "faq", heading: "FAQ" },
    { id: "sources-heading", heading: "Sources" },
  ];

  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      faqSchema(guide.faqs),
      { "@type": "WebPage", name: guide.h1, description: guide.description, url: absoluteUrl(guide.path) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Compare", item: absoluteUrl("/vs-adobe/") },
        { "@type": "ListItem", position: 3, name: guide.h1, item: absoluteUrl(guide.path) },
      ] },
    ] }} />
    <div className="container guide-shell comparison-page">
      <Breadcrumbs currentPath={guide.path} items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/vs-adobe/" }, { label: guide.h1 }]} />
      <header className="guide-header">
        <Eyebrow>Independent comparison · Image editing</Eyebrow>
        <h1>{guide.h1}</h1><p className="lede">{guide.introduction}</p>
        <p className="updated">Last updated: <PageUpdated path={guide.path} /></p>
      </header>
      <VerdictPanel items={guide.verdicts} />
      <div className="guide-layout"><div className="guide-main">
        <section className="guide-section" id="comparison"><p className="guide-kicker">Comparison</p><h2>Side-by-side comparison</h2><AlternativeTable table={guide.table} /></section>
        <section className="guide-section" id="scenarios">
          <p className="guide-kicker">Workflow verdicts</p><h2>Which editor suits your work?</h2>
          <div className="guide-options">{guide.scenarios.map((scenario) => <article className="guide-option" key={scenario.heading}>
            <h3>{scenario.heading}</h3><div className="guide-option__copy">{scenario.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </article>)}</div>
        </section>
        {guide.sections.map((section) => <section className="guide-section" id={section.id} key={section.id}>
          <p className="guide-kicker">Before choosing</p><h2>{section.heading}</h2>
          <div className="guide-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>)}
        <section className="guide-section" id="faq"><p className="guide-kicker">Common questions</p><h2>FAQ</h2><GuideFaq items={guide.faqs} /></section>
        <section className="guide-section"><h2>More Photoshop alternatives</h2><p className="guide-prose">For GIMP, Photopea and other image editors, read the <Link href="/alternatives/photoshop/">Photoshop alternatives guide</Link>. Explore the <Link href="/alternatives/">alternatives hub</Link> for the rest of your workflow.</p></section>
        <GuideSources sources={guide.sources} />
        <Link className="guide-related" href={guide.related.href}>{guide.related.label}</Link>
      </div><aside className="guide-toc" aria-label="On this page"><p>On this page</p><ol>{toc.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.heading}</a></li>)}</ol></aside></div>
    </div>
  </>;
}
