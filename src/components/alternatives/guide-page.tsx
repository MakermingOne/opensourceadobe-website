import Link from "next/link";
import type { ReactNode } from "react";

import { PageUpdated } from "@/components/page-updated";
import { AlternativeTable } from "@/components/alternatives/alternative-table";
import { faqSchema, GuideFaq } from "@/components/alternatives/guide-faq";
import { GuideSources } from "@/components/alternatives/guide-sources";
import { VerdictPanel } from "@/components/alternatives/verdict-panel";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import type { BaseAlternativeGuide, GuideTable } from "@/content/alternatives/types";
import { absoluteUrl } from "@/lib/site";

type Guide = BaseAlternativeGuide & { table: GuideTable };

export function AlternativeGuidePage({
  guide,
  path,
  breadcrumbLabel,
  eyebrow,
  toc,
  sectionIds,
  sectionKickers,
  optionsIntro,
  criteriaHeading,
  criteriaParagraphs,
  related,
}: {
  guide: Guide;
  path: string;
  breadcrumbLabel: string;
  eyebrow: string;
  toc: Array<[string, string]>;
  sectionIds: [string, string];
  sectionKickers: [string, string];
  optionsIntro: ReactNode;
  criteriaHeading: string;
  criteriaParagraphs: ReactNode[];
  related: { href: string; label: string };
}) {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      faqSchema(guide.faqs),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: absoluteUrl("/alternatives/") },
        { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: absoluteUrl(path) },
      ] },
    ] }} />
    <div className="container guide-shell">
      <Breadcrumbs currentPath={path} items={[{ label: "Home", href: "/" }, { label: "Alternatives", href: "/alternatives/" }, { label: breadcrumbLabel }]} />
      <header className="guide-header"><Eyebrow>{eyebrow}</Eyebrow><h1>{guide.h1}</h1><p className="lede">{guide.introduction}</p><p className="updated">Last updated: <PageUpdated path={path} /></p></header>
      <VerdictPanel items={guide.verdicts} />
      <div className="guide-layout"><main className="guide-main">
        <section className="guide-section" id="glance"><p className="guide-kicker">Comparison</p><h2>The six options at a glance</h2><AlternativeTable table={guide.table} /></section>
        <section className="guide-section" id="options"><p className="guide-kicker">Detailed assessment</p><h2>Option by option</h2>{optionsIntro}<div className="guide-options">
          {guide.options.map((option) => <article className="guide-option" key={option.name}><h3>{option.name}</h3><div className="guide-option__copy">{option.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}
        </div></section>
        {guide.sections.map((section, index) => <section className="guide-section" id={sectionIds[index]} key={section.heading}><p className="guide-kicker">{sectionKickers[index]}</p><h2>{section.heading}</h2><div className="guide-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
        <section className="guide-section" id="choosing"><p className="guide-kicker">Selection criteria</p><h2>{criteriaHeading}</h2><div className="guide-prose">{criteriaParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></section>
        <section className="guide-section" id="faq"><p className="guide-kicker">Common switching questions</p><h2>FAQ</h2><GuideFaq items={guide.faqs} /></section>
        <GuideSources sources={guide.sources} />
        <Link className="guide-related" href={related.href}>{related.label}</Link>
      </main><aside className="guide-toc" aria-label="On this page"><p>On this page</p><ol>{toc.map(([href, label]) => <li key={href}><a href={`#${href}`}>{label}</a></li>)}</ol></aside></div>
    </div>
  </>;
}
