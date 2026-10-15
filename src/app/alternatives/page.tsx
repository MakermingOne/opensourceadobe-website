import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Open Source Adobe Alternatives: Every App Compared (2026)",
  description: "Honest guide to open source Adobe alternatives, app by app. Compare free replacements for Photoshop, Lightroom, Premiere, Illustrator, Acrobat and more, with verified licensing and workflow limits.",
  path: "/alternatives/",
});

const hubSources = ["artcraft-apps"].map((id) => sourcesById.get(id)).filter((source) => source !== undefined);

const coverageRows: Array<{ adobe: string; app: string; status: "Published" | "In progress" }> = [
  { adobe: "Photoshop", app: "PhotoCraft", status: "Published" },
  { adobe: "Lightroom", app: "LightCraft", status: "Published" },
  { adobe: "Premiere Pro", app: "FilmCraft", status: "In progress" },
  { adobe: "Illustrator", app: "VectorCraft", status: "In progress" },
  { adobe: "Acrobat", app: "PdfCraft", status: "In progress" },
  { adobe: "After Effects", app: "EffectCraft", status: "In progress" },
  { adobe: "InDesign", app: "DesignCraft", status: "In progress" },
];

const honestyRows: Array<{ adobe: string; verdict: string; ceiling: "High" | "Partial" | "Low" }> = [
  { adobe: "Photoshop", verdict: "Strong for still image editing and painting; weak for production-grade PSD interchange and pro plug-in ecosystems.", ceiling: "Partial" },
  { adobe: "Lightroom", verdict: "Strong for RAW development and cataloging; weaker for cloud sync, mobile and AI-driven masking.", ceiling: "High" },
  { adobe: "Premiere Pro", verdict: "Usable for short-form and editorial cuts; limited for collaboration, color management and motion-graphics templates.", ceiling: "Partial" },
  { adobe: "Illustrator", verdict: "Solid for SVG-first illustration, icons and posters; less reliable for .ai round-trips and print production.", ceiling: "Partial" },
  { adobe: "Acrobat", verdict: "Good for reading, merging and simple edits; weaker for forms, digital signatures and preflight.", ceiling: "Low" },
  { adobe: "After Effects", verdict: "Early-stage; expect missing plug-ins, slower renders and limited template compatibility.", ceiling: "Low" },
  { adobe: "InDesign", verdict: "Early-stage; expect missing long-document features, preflight and advanced typography.", ceiling: "Low" },
];

export default function AlternativesPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: "Open source Adobe alternatives, by the app you are replacing", url: absoluteUrl("/alternatives/") },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: absoluteUrl("/alternatives/") },
      ] },
    ] }} />
    <div className="container page-shell">
      <Breadcrumbs currentPath="/alternatives/" items={[{ label: "Home", href: "/" }, { label: "Alternatives" }]} />
      <header className="page-intro">
        <Eyebrow>Unofficial · Independent guide</Eyebrow>
        <h1>Open source Adobe alternatives, <span>by the app you are replacing.</span></h1>
        <p className="lede">A free editor is not automatically open source, and a tool that opens an Adobe file is not automatically a drop-in replacement. Start with the workflow you need, then compare the license, platform, editable file handoff, and the specific point where each option breaks.</p>
        <p className="updated">Last updated: 2026-10-13</p>
      </header>

      <section className="content-section" aria-labelledby="coverage-heading">
        <div className="section-heading"><p className="section-number">01</p><div><h2 id="coverage-heading">Coverage map</h2><p>Every Adobe product we track, the closest open source ArtCraft app, and whether a full guide is published yet.</p></div></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Adobe product</th><th>Closest open source app</th><th>Guide status</th><th>Next step</th></tr></thead>
            <tbody>
              {coverageRows.map((row) => (
                <tr key={row.adobe}>
                  <td>{row.adobe}</td>
                  <td>{row.app}</td>
                  <td>{row.status}</td>
                  <td>{row.status === "Published" ? <Link href={`/alternatives/${row.adobe === "Photoshop" ? "photoshop" : "lightroom"}/`}>Open guide →</Link> : "Guide in progress"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section" aria-labelledby="honesty-heading">
        <div className="section-heading"><p className="section-number">02</p><div><h2 id="honesty-heading">The honest table</h2><p>How close each open source alternative actually gets to the Adobe product it replaces.</p></div></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Adobe product</th><th>What is true today</th><th>Ceiling</th></tr></thead>
            <tbody>
              {honestyRows.map((row) => (
                <tr key={row.adobe}>
                  <td>{row.adobe}</td>
                  <td>{row.verdict}</td>
                  <td>{row.ceiling}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section" aria-labelledby="only-open-source-heading">
        <div className="section-heading"><p className="section-number">03</p><div><h2 id="only-open-source-heading">Only open-source options</h2><p>Free is not the same as open source. Photopea is free and runs in a browser, but its code is closed. These tools are licensed open source, which means you can audit, fork, and redistribute them.</p></div></div>
        <div className="prose">
          <p>If you are specifically looking for an <Link href="/alternatives/photoshop/">open source Photoshop alternative</Link>, the shortlist is PhotoCraft, GIMP, and Krita. Each one trades away something different: PhotoCraft is the newest and most ambitious, GIMP has the deepest feature history, and Krita is best for painting.</p>
          <p><Link href="/alternatives/photoshop/">Paint.NET is free but not open source; it belongs in a free-software list, not an open-source one</Link>. Paint.NET is the lightest on Windows.</p>
          <p>For an <Link href="/alternatives/lightroom/">open source Lightroom alternative</Link>, the choice splits between RAW developers (darktable, RawTherapee, ART) and catalog managers (digiKam, Shotwell). Most photographers end up using one of each, not a single replacement.</p>
          <p>The ArtCraft family is the newest entrant. The official directory now lists 13 open-source apps, including FigCraft for interface design and prototyping. The family covers Adobe-style workflows as well as documents, audio, presentations, CAD and spreadsheets. You can browse the full <Link href="/apps/">ArtCraft app directory</Link> to see every project, platform and license.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="leaving-heading">
        <div className="section-heading"><p className="section-number">04</p><div><h2 id="leaving-heading">Leaving Creative Cloud</h2><p>Practical steps if you are moving away from Adobe subscriptions.</p></div></div>
        <div className="prose">
          <p>Start by exporting your cloud documents. Adobe does not make it easy to batch-export PSD, AI or INDD files, so plan for a manual weekend. Keep the originals in at least two places: one local drive and one off-site backup.</p>
          <p>Next, test the open source replacement with real files, not demo files. Open your largest PSD in PhotoCraft or GIMP. Import a full Lightroom catalog into darktable. Try a .ai round-trip in VectorCraft. The point is not to find the perfect app; it is to find the app that fails in a way you can live with.</p>
          <p>Finally, decide whether you need a full replacement or a partial one. Many designers keep Acrobat for PDF signatures, or Premiere for client work, while moving still image editing to open source. The <Link href="/vs-adobe/">ArtCraft vs Adobe workflow map</Link> shows which workflows are easiest to move first.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="deep-dive-heading">
        <div className="section-heading"><p className="section-number">05</p><div><h2 id="deep-dive-heading">Deep-dive guides</h2><p>The two complete guides currently published.</p></div></div>
        <div className="alternatives-grid">
          <Link className="alternatives-card" href="/alternatives/photoshop/"><span>Image editing</span><div><h2>Photoshop alternatives</h2><p>Compare GIMP, PhotoCraft, Photopea, Krita, Paint.NET, and Glimpse for layers, PSD files, plug-ins, and production boundaries.</p></div><strong>Open the guide →</strong></Link>
          <Link className="alternatives-card" href="/alternatives/lightroom/"><span>Photography workflow</span><div><h2>Lightroom alternatives</h2><p>Separate RAW development from catalog management, then compare darktable, RawTherapee, ART, LightCraft, digiKam, and Shotwell.</p></div><strong>Open the guide →</strong></Link>
        </div>
      </section>

      <section className="content-section method-note"><div><Eyebrow>Sources</Eyebrow><h2>Sources & verification</h2></div><div><p>Accessed 2026-10-13. ArtCraft app status and feature claims are taken from official project pages and repositories. Adobe product names are trademarks of Adobe Inc. This site is not affiliated with Adobe or ArtCraft.</p><p><Link href="/faq/">Read the FAQ →</Link></p></div></section>

      <SourceList sources={hubSources} />
    </div>
  </>;
}
