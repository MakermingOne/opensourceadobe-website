import Link from "next/link";

import { PageUpdated } from "@/components/page-updated";
import { AlternativeTable } from "@/components/alternatives/alternative-table";
import { faqSchema, GuideFaq } from "@/components/alternatives/guide-faq";
import { GuideSources } from "@/components/alternatives/guide-sources";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import type { ArticleGuide } from "@/content/artcraft/types";
import type { SourceRecord } from "@/content/types";

export function ArticleGuidePage({ guide, sources, breadcrumbs }: {
  guide: ArticleGuide;
  sources: SourceRecord[];
  breadcrumbs: Array<{ label: string; href?: string }>;
}) {
  const toc: Array<[string, string]> = [
    ...guide.sections.map((section): [string, string] => [section.id, section.heading]),
    ["faq", "FAQ"],
    ["sources-heading", "Sources"],
  ];
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [faqSchema(guide.faqs)] }} />
    <div className="container guide-shell">
      <Breadcrumbs currentPath={guide.path} items={breadcrumbs} />
      <header className="guide-header"><Eyebrow>{guide.eyebrow}</Eyebrow><h1>{guide.h1}</h1><p className="lede">{guide.lede}</p><p className="updated">Last updated: <PageUpdated path={guide.path} /></p></header>
      <div className="guide-layout"><main className="guide-main">
        {guide.sections.map((section, index) => <section className="guide-section" id={section.id} key={section.id}>
          <p className="guide-kicker">{String(index + 1).padStart(2, "0")}</p>
          <h2>{section.heading}</h2>
          <div className="guide-prose">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list ? <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          </div>
          {section.table ? <AlternativeTable table={section.table} /> : null}
          {section.links ? <ul className="guide-links">{section.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label} →</Link></li>)}</ul> : null}
        </section>)}
        <section className="guide-section" id="faq"><p className="guide-kicker">Questions</p><h2>FAQ</h2><GuideFaq items={guide.faqs} /></section>
        <GuideSources sources={sources} />
      </main><aside className="guide-toc" aria-label="On this page"><p>On this page</p><ol>{toc.map(([href, label]) => <li key={href}><a href={`#${href}`}>{label}</a></li>)}</ol></aside></div>
    </div>
  </>;
}
