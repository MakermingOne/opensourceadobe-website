import { PageUpdated } from "@/components/page-updated";
import Image from "next/image";
import Link from "next/link";

import { AppTable } from "@/components/app-table";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { LatestUpdates } from "@/components/latest-updates";
import { WorkflowIcon, type WorkflowSlug } from "@/components/workflow-icon";
import { apps } from "@/content/apps";
import { workflowProfiles } from "@/content/guides";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { workflowLabels } from "@/lib/workflow-labels";

export const metadata = pageMetadata({
  title: `ArtCraft Adobe Alternatives: ${apps.length} Open-Source Creative Apps`,
  description:
    `Explore ${apps.length} ArtCraft apps for photos, video and design. Compare Adobe alternatives, check app status and find official downloads.`,
  path: "/",
  image: "/images/og/artcraft-directory.png",
});

const homeSources = ["artcraft-apps", "photocraft-official", "photocraft-repository", "photocraft-release", "figcraft-official"]
  .map((id) => sourcesById.get(id))
  .filter((source) => source !== undefined);

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", name: "OpenSourceAdobe", url: absoluteUrl("/"), description: metadata.description },
          { "@type": "CollectionPage", name: `${apps.length} ArtCraft open-source creative apps`, url: absoluteUrl("/"), mainEntity: apps.map((app) => ({ "@type": "SoftwareApplication", name: app.name })) },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }] },
        ],
      }} />

      <section className="poster-hero" aria-labelledby="home-heading">
        <div className="container">
          <div className="poster-grid">
            <div className="poster-copy">
              <Eyebrow>Independent directory · {apps.length} ArtCraft apps</Eyebrow>
              <p className="poster-manifesto">An independent, source-led guide to open-source creative software.</p>
              <h1 id="home-heading">Find your open source Adobe alternative <span>by workflow.</span></h1>
              <p className="poster-deck">Compare PhotoCraft, VectorCraft, FilmCraft, LightCraft and the wider ArtCraft family before you switch. New to the directory: FigCraft for interface design and prototyping.</p>
              <div className="button-row">
                <Link className="button button--light" href="#app-directory">See all {apps.length} apps</Link>
                <Link className="text-link text-link--invert" href="/vs-adobe/">ArtCraft vs Adobe →</Link>
              </div>
              <p className="poster-disclaimer">Status and feature claims come from official ArtCraft sources; production readiness is not independently verified.</p>
            </div>

            <figure className="hero-workbench">
              <Image
                alt="Illustrated creative workbench with tools for photos, video, design, documents, audio and spreadsheets"
                className="hero-workbench__image"
                height={887}
                priority
                sizes="(max-width: 960px) 100vw, 44vw"
                src="/images/home/twelve-workflows-hero.webp"
                width={1774}
              />
              <figcaption className="hero-workbench__caption">
                <span>A creative workbench</span>
                <small>Original editorial illustration · not a product screenshot</small>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section container" id="app-directory" aria-labelledby="directory-heading">
        <div className="section-heading"><p className="section-number">01</p><div><Eyebrow>ArtCraft software directory · Last updated <PageUpdated path="/" long /></Eyebrow><h2 id="directory-heading">Explore {apps.length} ArtCraft apps by workflow</h2><p>Find a tool for photo editing, illustration, video, interface design, documents, audio and more. Open its guide or official page to check availability and supported formats before switching.</p><p>Start with the <Link href="/apps/photocraft/">ArtCraft PhotoCraft guide</Link> for layered images, <Link href="/apps/pdfcraft/">download PdfCraft</Link> for PDF tasks, or find the source in our <Link href="/github/">official ArtCraft GitHub directory</Link>.</p></div></div>
        <div className="workflow-links">
          {apps.map((app) => {
            const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
            const card = <><span className="workflow-card__icon"><WorkflowIcon slug={app.slug as WorkflowSlug} /></span><span>{app.category}</span><strong>{app.name}</strong><small>{profile.bestFor}</small><small className="workflow-card__mapping">{workflowLabels(app).card ?? `For the ${app.adobeCounterpart} workflow`}</small></>;
            return app.detailPublished ? <Link className="workflow-card" href={`/apps/${app.slug}/`} key={app.slug}>{card}</Link> : <a className="workflow-card" href={app.officialPage} target="_blank" rel="noreferrer" key={app.slug}>{card}</a>;
          })}
        </div>
      </section>

      <section className="section container"><LatestUpdates /></section>
      <section className="section section--raised" aria-labelledby="decision-heading">
        <div className="container">
          <div className="section-heading"><p className="section-number">02</p><div><Eyebrow>Decision table</Eyebrow><h2 id="decision-heading">Which open-source Adobe alternative fits your work?</h2><p>Use the compared workflow column for orientation, then check status and platform before downloading.</p></div></div>
          <AppTable apps={apps} />
          <div className="section-action"><Link className="button" href="/vs-adobe/">Read the full ArtCraft vs Adobe comparison</Link></div>
        </div>
      </section>

      <section className="section container" aria-labelledby="boundaries-heading">
        <div className="section-heading"><p className="section-number">03</p><div><Eyebrow>Set the right expectation</Eyebrow><h2 id="boundaries-heading">Can these apps replace Adobe?</h2><p>Sometimes for a focused task; rarely as a complete, drop-in suite today. The useful answer is specific to your files, plug-ins, handoffs and deadline.</p></div></div>
        <div className="split-judgment">
          <article><p className="judgment-label judgment-label--fit">Good fit</p><h3>Focused, open-format work</h3><p>Try an app for a self-contained edit, SVG illustration, local photo library, short video or PDF organization task. Start with copies and verify the export you actually need.</p></article>
          <article><p className="judgment-label judgment-label--pause">Not a drop-in replacement</p><h3>Deep Adobe handoffs</h3><p>Do not assume native PSD, AI, PRPROJ, Lightroom catalog, After Effects or InDesign compatibility, plug-ins, preflight or long-session stability. Those boundaries need a real workflow test.</p></article>
        </div>
      </section>

      <section className="section section--raised" aria-labelledby="next-heading">
        <div className="container">
          <div className="section-heading"><p className="section-number">Next</p><div><Eyebrow>Choose your next page</Eyebrow><h2 id="next-heading">Go from the category to the evidence.</h2></div></div>
          <div className="workflow-links workflow-links--resources"><Link href="/apps/"><span>Navigation</span><strong>ArtCraft apps</strong><small>Browse the official app family</small></Link><Link href="/download/"><span>Official sources</span><strong>Downloads</strong><small>Find the right platform and installer</small></Link><Link href="/faq/"><span>Switching questions</span><strong>FAQ</strong><small>Understand alpha and compatibility limits</small></Link></div>
        </div>
      </section>

      <section className="section container"><div className="method-note method-note--home"><div><Eyebrow>Independent and unofficial</Eyebrow><h2>Clear boundaries are part of the recommendation.</h2></div><div><p>We translate official ArtCraft documentation into practical workflow guidance, label unknowns and keep sources visible. Read the app-specific page before trusting a claim with important work.</p><p><Link href="/about/">How we research these apps →</Link></p></div></div></section>
      <section className="section container"><SourceList sources={homeSources} /></section>
    </>
  );
}
