import type { Metadata } from "next";
import Link from "next/link";
import { AppTable } from "@/components/app-table";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/status-badge";
import { apps } from "@/content/apps";
import { workflowProfiles } from "@/content/guides";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { workflowLabels } from "@/lib/workflow-labels";

export const metadata: Metadata = pageMetadata({
  title: `ArtCraft Apps: ${apps.length} Open-Source Creative Tools`,
  description: `Browse ${apps.length} ArtCraft apps for photos, video, interfaces, documents and audio. Check each tool’s status and find its official project page.`,
  path: "/apps/",
});

const directorySource = sourcesById.get("artcraft-apps");

export default function AppsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "ArtCraft app directory", url: absoluteUrl("/apps/") }} />
      <div className="container page-shell page-shell--scan">
        <Breadcrumbs currentPath="/apps/" items={[{ label: "Home", href: "/" }, { label: "Apps" }]} />
        <header className="page-intro">
          <Eyebrow>Official directory · getartcraft apps</Eyebrow>
          <h1>Browse the <span>ArtCraft app family.</span></h1>
          <p className="lede">Browse {apps.length} ArtCraft projects for photo editing, vector illustration, video, RAW development, PDFs, motion graphics, publishing, interface design, documents, audio, presentations, CAD and spreadsheets.</p>
          <p className="updated">Last updated: <time dateTime="2026-10-15">2026-10-15</time></p>
        </header>

        <section className="content-section" aria-labelledby="choose-app-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">01</p>
            <div>
              <h2 id="choose-app-heading">Choose an app by the work you need to do.</h2>
              <p>Open a full guide where one is published, including our <Link href="/apps/pdfcraft/">PdfCraft download guide</Link>. Other cards take you to the official product page. Find source code and release notes in the <Link href="/github/">ArtCraft GitHub directory</Link>.</p>
            </div>
          </div>
          <div className="choice-grid">
            {apps.map((app, index) => {
              const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
              return (
                <article className="choice-card" key={app.slug}>
                  <div className="choice-card__topline">
                    <span>{String(index + 1).padStart(2, "0")} · {profile.prompt}</span>
                    <StatusBadge value={app.status} />
                  </div>
                  <div className="choice-card__body">
                    <p>{app.category}</p>
                    <h3>{app.name}</h3>
                    <p className="choice-card__mapping">{workflowLabels(app).card ?? `Closest to ${app.adobeCounterpart}`}</p>
                    <p>{profile.bestFor}</p>
                  </div>
                  <div className="choice-card__footer">
                    <span>{app.platforms.join(" · ")}</span>
                    {app.detailPublished ? (
                      <Link href={`/apps/${app.slug}/`}>Explore {app.name} →</Link>
                    ) : (
                      <a href={app.officialPage} target="_blank" rel="noreferrer">Visit official page ↗</a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section" aria-labelledby="directory-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">02</p>
            <div>
              <h2 id="directory-heading">Compare releases and platforms.</h2>
              <p>Alpha software can be useful, but it still deserves a test with copies of your own files.</p>
            </div>
          </div>
          <AppTable apps={apps} />
        </section>
        {directorySource ? <SourceList sources={[directorySource]} /> : null}
      </div>
    </>
  );
}
