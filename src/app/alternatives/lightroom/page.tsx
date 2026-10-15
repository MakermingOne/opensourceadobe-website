import { PageUpdated } from "@/components/page-updated";
import Link from "next/link";

import { AlternativeTable } from "@/components/alternatives/alternative-table";
import { faqSchema, GuideFaq } from "@/components/alternatives/guide-faq";
import { GuideSources } from "@/components/alternatives/guide-sources";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { lightroomGuide as guide } from "@/content/alternatives/lightroom";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: guide.title, description: guide.description, path: "/alternatives/lightroom/", image: "/images/og/lightroom-alternatives.png", absoluteTitle: true });

const toc = [
  ["raw", "RAW development"], ["catalog", "Cataloguing"], ["options", "Option by option"],
  ["darktable-vs-lightroom", "darktable vs Lightroom"], ["migration", "Migration"], ["faq", "FAQ"], ["sources-heading", "Sources"],
];

export default function LightroomAlternativesPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      faqSchema(guide.faqs),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: absoluteUrl("/alternatives/") },
        { "@type": "ListItem", position: 3, name: "Lightroom alternatives", item: absoluteUrl("/alternatives/lightroom/") },
      ] },
    ] }} />
    <div className="container guide-shell">
      <Breadcrumbs currentPath="/alternatives/lightroom/" items={[{ label: "Home", href: "/" }, { label: "Alternatives", href: "/alternatives/" }, { label: "Lightroom" }]} />
      <header className="guide-header"><Eyebrow>Photography workflow guide · Development and cataloguing</Eyebrow><h1>{guide.h1}</h1><p className="lede">{guide.introduction}</p><p className="updated">Last updated: <PageUpdated path="/alternatives/lightroom/" /></p></header>
      <div className="guide-layout"><main className="guide-main">
        <section className="guide-section" id="raw"><p className="guide-kicker">Develop</p><h2>RAW development: who does it well</h2><AlternativeTable table={guide.rawTable} /></section>
        <section className="guide-section" id="catalog"><p className="guide-kicker">Organize</p><h2>Cataloguing and library management</h2><p className="guide-prose">The second table is separate because library continuity is where many otherwise capable Lightroom alternatives become incomplete.</p><AlternativeTable table={guide.catalogTable} /></section>
        <section className="guide-section" id="options"><p className="guide-kicker">Detailed assessment</p><h2>Option by option</h2><div className="guide-options">
          {guide.options.map((option) => <article className="guide-option" key={option.name}><h3>{option.name}</h3><div className="guide-option__copy">{option.paragraphs.map((paragraph, index) => <p key={paragraph}>{paragraph}{option.name === "LightCraft" && index === 2 ? <> Check the <Link href="/apps/lightcraft/">LightCraft app guide</Link> for its current official status.</> : null}</p>)}</div></article>)}
        </div></section>
        {guide.sections.map((section, index) => <section className="guide-section" id={index === 0 ? "darktable-vs-lightroom" : "migration"} key={section.heading}><p className="guide-kicker">{index === 0 ? "Direct comparison" : "Migration order"}</p><h2>{section.heading}</h2><div className="guide-prose">{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph}>{paragraph}{index === 0 && paragraphIndex === 2 ? <> The <Link href="/vs-adobe/">ArtCraft vs Adobe guide</Link> applies the same workflow test to the wider suite.</> : null}{index === 1 && paragraphIndex === 2 ? <> Return to the <Link href="/alternatives/">alternatives hub</Link> if you need to split development and cataloguing between tools.</> : null}</p>)}</div></section>)}
        <section className="guide-section" id="choosing"><p className="guide-kicker">Selection criteria</p><h2>Choosing an open source Lightroom alternative</h2><div className="guide-prose"><p>A good open source Lightroom alternative needs to do two jobs at once: develop RAW files and manage a growing photo library. darktable is the closest match because it combines a database-backed catalog with a scene-referred RAW pipeline. RawTherapee and ART are stronger on pure development but weaker on organization. digiKam and Shotwell are the reverse: excellent catalogs, limited development depth.</p><p>The right choice depends on your camera, your catalog size, and whether you need local adjustments. If you shoot a supported camera and want one app, start with darktable. If you already have a folder-based workflow and only need better RAW rendering, RawTherapee or ART may be enough. LightCraft is the newest entrant and worth watching, but it is still in development.</p></div></section>
        <section className="guide-section" id="faq"><p className="guide-kicker">Common migration questions</p><h2>FAQ</h2><GuideFaq items={guide.faqs} /></section>
        <GuideSources sources={guide.sources} />
        <Link className="guide-related" href="/alternatives/photoshop/">Related: open-source Photoshop alternatives →</Link>
      </main><aside className="guide-toc" aria-label="On this page"><p>On this page</p><ol>{toc.map(([href, label]) => <li key={href}><a href={`#${href}`}>{label}</a></li>)}</ol></aside></div>
    </div>
  </>;
}
