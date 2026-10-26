import { PageUpdated } from "@/components/page-updated";
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

type CoverageStatus = "published" | "app-only" | "hub-only";
type CoverageRow = { adobe: string; app: string; status: CoverageStatus; guide?: string; appSlug?: string };

const coverageRows: CoverageRow[] = [
  { adobe: "Photoshop", app: "PhotoCraft", status: "published", guide: "photoshop" },
  { adobe: "Lightroom", app: "LightCraft", status: "published", guide: "lightroom" },
  { adobe: "Illustrator", app: "VectorCraft", status: "published", guide: "illustrator" },
  { adobe: "Acrobat", app: "PdfCraft", status: "published", guide: "acrobat" },
  { adobe: "After Effects", app: "EffectCraft", status: "published", guide: "after-effects" },
  { adobe: "InDesign", app: "DesignCraft", status: "published", guide: "indesign" },
  { adobe: "Substance Painter", app: "ArmorPaint", status: "published", guide: "substance-painter" },
  { adobe: "Premiere Pro", app: "FilmCraft", status: "published", guide: "premiere" },
  { adobe: "Dreamweaver", app: "—", status: "hub-only" },
  { adobe: "Adobe Express", app: "—", status: "hub-only" },
  { adobe: "Adobe XD", app: "FigCraft", status: "hub-only", appSlug: "figcraft" },
  { adobe: "Character Animator", app: "—", status: "hub-only" },
  { adobe: "Audition", app: "SoundCraft", status: "hub-only", appSlug: "soundcraft" },
  { adobe: "Animate", app: "—", status: "hub-only" },
  { adobe: "Adobe Fresco", app: "—", status: "hub-only" },
];

const statusLabel: Record<CoverageStatus, string> = {
  published: "Comparison guide published",
  "app-only": "App guide only",
  "hub-only": "Covered here only",
};

const honestyRows: Array<{ adobe: string; verdict: string; ceiling: "High" | "Partial" | "Low" }> = [
  { adobe: "Photoshop", verdict: "Strong for still image editing and painting; weak for production-grade PSD interchange and pro plug-in ecosystems.", ceiling: "Partial" },
  { adobe: "Lightroom", verdict: "Strong for RAW development and cataloging; weaker for cloud sync, mobile and AI-driven masking.", ceiling: "High" },
  { adobe: "Illustrator", verdict: "Solid for SVG-first illustration, icons and posters; less reliable for .ai round-trips and print production.", ceiling: "Partial" },
  { adobe: "Acrobat", verdict: "Good for reading, merging, annotation and simple edits; weaker for text reflow, forms, signatures and preflight.", ceiling: "Partial" },
  { adobe: "After Effects", verdict: "Blender and Natron cover compositing, but templates, typography and the plug-in ecosystem do not transfer; EffectCraft is still in development.", ceiling: "Low" },
  { adobe: "InDesign", verdict: "Scribus covers print layout, but expect IDML reflow, weaker long-document automation and an InDesign-free rebuild.", ceiling: "Partial" },
  { adobe: "Substance Painter", verdict: "ArmorPaint covers hand-painted PBR sets; smart materials, generators and export presets are thinner.", ceiling: "Partial" },
  { adobe: "Premiere Pro", verdict: "Usable for short-form and editorial cuts; limited for collaboration, color management and motion-graphics templates.", ceiling: "Partial" },
  { adobe: "Dreamweaver", verdict: "No dedicated open source replacement tracked; code editors and static-site tools cover parts of the job.", ceiling: "Low" },
  { adobe: "Adobe Express", verdict: "Template-driven open source tools exist, but not the same brand-template and stock-asset ecosystem.", ceiling: "Low" },
  { adobe: "Adobe XD", verdict: "FigCraft and Penpot cover interface design; XD file interchange is not a reliable workflow.", ceiling: "Partial" },
  { adobe: "Character Animator", verdict: "No direct open source equivalent tracked; 2D animation tools cover only parts of the performance-driven workflow.", ceiling: "Low" },
  { adobe: "Audition", verdict: "SoundCraft targets audio editing; spectral repair, batch restoration and Adobe integration differ.", ceiling: "Partial" },
  { adobe: "Animate", verdict: "Vector animation tools exist, but they do not reproduce Animate’s timeline, symbols and runtime targets.", ceiling: "Low" },
  { adobe: "Adobe Fresco", verdict: "PhotoCraft and Krita cover painting, not Fresco’s live brushes, cloud library and Adobe ecosystem.", ceiling: "Low" },
];

const guides = [
  { href: "/alternatives/premiere/", category: "Video editing", title: "Premiere Pro alternatives", copy: "Compare OpenShot, Kdenlive, Shotcut, DaVinci Resolve, Flowblade and Pitivi on licensing, platforms and timeline workflows." },
  { href: "/alternatives/photoshop/", category: "Image editing", title: "Photoshop alternatives", copy: "Compare GIMP, PhotoCraft, Photopea, Krita, Paint.NET, and Glimpse for layers, PSD files, plug-ins, and production boundaries." },
  { href: "/alternatives/lightroom/", category: "Photography workflow", title: "Lightroom alternatives", copy: "Separate RAW development from catalog management, then compare darktable, RawTherapee, ART, LightCraft, digiKam, and Shotwell." },
  { href: "/alternatives/illustrator/", category: "Vector illustration", title: "Illustrator alternatives", copy: "Compare Inkscape, VectorCraft, Scribus, LibreOffice Draw, Penpot, and Vectr on SVG editing, .ai interchange, and print output." },
  { href: "/alternatives/acrobat/", category: "PDF workflow", title: "Acrobat alternatives", copy: "Compare PdfCraft, PDF Arranger, LibreOffice Draw, Okular, Stirling PDF, and PDF24 for reading, editing, forms, and signatures." },
  { href: "/alternatives/after-effects/", category: "Motion and VFX", title: "After Effects alternatives", copy: "Compare Blender, Natron, Fusion, Kdenlive, Glaxnimate, and EffectCraft for compositing, motion graphics, and rendering." },
  { href: "/alternatives/indesign/", category: "Page layout", title: "InDesign alternatives", copy: "Compare Scribus, DesignCraft, LibreOffice Writer, LaTeX, Affinity Publisher, and Canva for layout, long documents, and print." },
  { href: "/alternatives/substance-painter/", category: "3D texturing", title: "Substance Painter alternatives", copy: "Compare ArmorPaint, Blender, Material Maker, Krita, GIMP, and 3D-Coat for PBR painting, baking, and material authoring." },
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
    <div className="container page-shell alternatives-page">
      <Breadcrumbs currentPath="/alternatives/" items={[{ label: "Home", href: "/" }, { label: "Alternatives" }]} />
      <header className="page-intro">
        <Eyebrow>Unofficial · Independent guide</Eyebrow>
        <h1>Open source Adobe alternatives, <span>by the app you are replacing.</span></h1>
        <p className="lede">A free editor is not automatically open source, and a tool that opens an Adobe file is not automatically a drop-in replacement. Start with the workflow you need, then compare the license, platform, editable file handoff, and the specific point where each option breaks.</p>
        <p className="updated">Last updated: <PageUpdated path="/alternatives/" /></p>
      </header>

      <nav className="comparison-jumps" aria-label="Photoshop comparisons">
        <Link href="/vs/gimp-vs-photoshop/">GIMP vs Photoshop →</Link>
        <Link href="/vs/photopea-vs-photoshop/">Photopea vs Photoshop →</Link>
      </nav>

      <section className="content-section" aria-labelledby="coverage-heading">
        <div className="section-heading"><p className="section-number">01</p><div><h2 id="coverage-heading">Coverage map</h2><p>Every Adobe product we track, the closest open source app, and whether a full comparison guide is published yet.</p></div></div>
        <div className="table-wrap">
          <table className="alternatives-table">
            <caption className="sr-only">Adobe products and available comparison guides</caption>
            <thead><tr><th scope="col">Adobe product</th><th scope="col">Closest open source app</th><th scope="col">Guide status</th><th scope="col">Next step</th></tr></thead>
            <tbody>
              {coverageRows.map((row) => (
                <tr key={row.adobe}>
                  <th scope="row" data-label="Adobe product">{row.adobe}</th>
                  <td data-label="Closest open source app">{row.app}</td>
                  <td data-label="Guide status">{statusLabel[row.status]}</td>
                  <td data-label="Next step">{row.status === "published" && row.guide
                    ? <Link href={`/alternatives/${row.guide}/`}>Open guide →</Link>
                    : row.appSlug
                      ? <Link href={`/apps/${row.appSlug}/`}>App guide →</Link>
                      : <span>No dedicated guide</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prose">A guide is published when a full comparison exists. “App guide only” means the closest ArtCraft app has a page but no standalone Adobe comparison yet. “Covered here only” means the product is not worth a separate page at current demand; the honest-table row below explains why.</p>
      </section>

      <section className="content-section" aria-labelledby="honesty-heading">
        <div className="section-heading"><p className="section-number">02</p><div><h2 id="honesty-heading">The honest table</h2><p>How close each open source alternative actually gets to the Adobe product it replaces.</p></div></div>
        <div className="table-wrap">
          <table className="alternatives-table">
            <caption className="sr-only">Workflow suitability and limitations</caption>
            <thead><tr><th scope="col">Adobe product</th><th scope="col">What is true today</th><th scope="col">How close it gets</th></tr></thead>
            <tbody>
              {honestyRows.map((row) => (
                <tr key={row.adobe}>
                  <th scope="row" data-label="Adobe product">{row.adobe}</th>
                  <td data-label="What is true today">{row.verdict}</td>
                  <td data-label="How close it gets">{row.ceiling}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prose">High, Partial and Low describe how close the alternatives currently get to the original product; they are not quality ratings.</p>
      </section>

      <section className="content-section" aria-labelledby="only-open-source-heading">
        <div className="section-heading"><p className="section-number">03</p><div><h2 id="only-open-source-heading">Only open-source options</h2><p>Free is not the same as open source. Photopea is free and runs in a browser, but its code is closed. These tools are licensed open source, which means you can audit, fork, and redistribute them.</p></div></div>
        <div className="prose">
          <p>If you are specifically looking for an <Link href="/alternatives/photoshop/">open source Photoshop alternative</Link>, the shortlist is PhotoCraft, GIMP, and Krita. Each one trades away something different: PhotoCraft is the newest and most ambitious, GIMP has the deepest feature history, and Krita is best for painting.</p>
          <p><Link href="/alternatives/photoshop/">Paint.NET is free but not open source; it belongs in a free-software list, not an open-source one</Link>. Paint.NET is the lightest on Windows.</p>
          <p>For an <Link href="/alternatives/lightroom/">open source Lightroom alternative</Link>, the choice splits between RAW developers (darktable, RawTherapee, ART) and catalog managers (digiKam, Shotwell). Most photographers end up using one of each, not a single replacement.</p>
          <p>For an <Link href="/alternatives/illustrator/">open source Illustrator alternative</Link>, Inkscape is the mature starting point and VectorCraft is the ArtCraft project to watch. For <Link href="/alternatives/acrobat/">Acrobat</Link>, PdfCraft, PDF Arranger and Okular cover different parts of the PDF workflow. For <Link href="/alternatives/after-effects/">After Effects</Link>, Blender and Natron are the strongest open source options, while Fusion is free but proprietary.</p>
          <p>For <Link href="/alternatives/indesign/">InDesign</Link>, Scribus is the only mature open source page-layout application here; Affinity Publisher and Canva are capable but closed. For <Link href="/alternatives/substance-painter/">Substance Painter</Link>, ArmorPaint is the closest open source PBR painter, with Blender covering baking and Material Maker covering procedural materials.</p>
          <p>The ArtCraft family is the newest entrant. The official directory now lists 13 open-source apps, including FigCraft for interface design and prototyping. The family covers Adobe-style workflows as well as documents, audio, presentations, CAD and spreadsheets. You can browse the full <Link href="/apps/">ArtCraft app directory</Link> to see every project, platform and license.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="leaving-heading">
        <div className="section-heading"><p className="section-number">04</p><div><h2 id="leaving-heading">Leaving Creative Cloud</h2><p>Practical steps if you are moving away from Adobe subscriptions.</p></div></div>
        <div className="prose">
          <p>Start by exporting your cloud documents. Adobe does not make it easy to batch-export PSD, AI or INDD files, so plan for a manual weekend. Keep the originals in at least two places: one local drive and one off-site backup.</p>
          <p>Next, test the open source replacement with real files, not demo files. Open your largest PSD in PhotoCraft or GIMP. Import a full Lightroom catalog into darktable. Try a .ai round-trip in VectorCraft or an IDML import in Scribus. The point is not to find the perfect app; it is to find the app that fails in a way you can live with.</p>
          <p>Finally, decide whether you need a full replacement or a partial one. Many designers keep Acrobat for PDF signatures, or Premiere for client work, while moving still image editing to open source. The <Link href="/vs-adobe/">ArtCraft vs Adobe workflow map</Link> shows which workflows are easiest to move first.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="deep-dive-heading">
        <div className="section-heading"><p className="section-number">05</p><div><h2 id="deep-dive-heading">Deep-dive guides</h2><p>The {guides.length} complete guides currently published.</p></div></div>
        <div className="alternatives-grid">
          {guides.map((guide) => <Link className="alternatives-card" href={guide.href} key={guide.href}><span>{guide.category}</span><div><h2>{guide.title}</h2><p>{guide.copy}</p></div><strong>Open the guide →</strong></Link>)}
        </div>
      </section>

      <section className="content-section method-note"><div><Eyebrow>Sources</Eyebrow><h2>Sources & verification</h2></div><div><p>Accessed 2026-10-20. ArtCraft app status and feature claims are taken from official project pages and repositories. Adobe product names are trademarks of Adobe Inc. This site is not affiliated with Adobe or ArtCraft.</p><p><Link href="/faq/">Read the FAQ →</Link></p></div></section>

      <SourceList sources={hubSources} />
    </div>
  </>;
}
