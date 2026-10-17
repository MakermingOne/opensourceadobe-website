import { enPages } from "@/content/pages/en";
import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/status-badge";
import { apps, publishedApps } from "@/content/apps";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { releasesBySlug } from "@/content/releases";

export const metadata: Metadata = pageMetadata({
  title: enPages.download.title,
  description: enPages.download.description,
  path: "/download/",
});

const otherApps = apps.filter((app) => !app.detailPublished);
const downloadSources = ["artcraft-apps", "craft-launcher-release", ...apps.flatMap((app) => [`${app.slug}-official`, `${app.slug}-release`])]
  .map((id) => sourcesById.get(id))
  .filter((source) => source !== undefined);

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Official ArtCraft app downloads",
        url: absoluteUrl("/download/"),
        description: metadata.description,
      }} />

      <div className="container page-shell">
        <Breadcrumbs currentPath="/download/" items={[{ label: "Home", href: "/" }, { label: "Download" }]} />
        <header className="page-intro">
          <Eyebrow>Safe download directory</Eyebrow>
          <h1>{enPages.download.h1}<span>{enPages.download.h1Emphasis}</span></h1>
          <p className="lede">We do not mirror installers. Download buttons open an official ArtCraft product page or a checked GitHub release. Choose the Launcher or a standalone package for your system, and check the listed version before installing.</p>
          <p className="updated">Last updated: <PageUpdated path="/download/" /></p>
          <p>ArtCraft Launcher {releasesBySlug.get("craft-launcher")?.version} is the current GitHub release. Check its app list before installing newly added projects such as FigCraft. <a href={releasesBySlug.get("craft-launcher")?.url} target="_blank" rel="noreferrer">Launcher release notes →</a></p>
        </header>

        <section className="content-section" aria-labelledby="available-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">01</p>
            <div>
              <h2 id="available-heading">{enPages.download.heading1}</h2>
              <p>These {publishedApps.length} apps have a sourced OpenSourceAdobe guide. Need a PDF tool? <Link href="/apps/pdfcraft/">Download PdfCraft for your system</Link> and check its Acrobat workflow limits before installing.</p>
            </div>
          </div>
          <div className="download-grid">
            {publishedApps.map((app) => (
              <article className="download-card" key={app.slug}>
                <div className="download-card__topline">
                  <span>{app.category}</span>
                  <StatusBadge value={app.status} />
                </div>
                <div className="download-card__body">
                  <h3>{app.name}</h3>
                  <p className="download-card__mapping">For {app.adobeCounterpart} workflows</p>
                  <dl>
                    <div><dt>Latest GitHub release</dt><dd>{app.version}</dd></div>
                    <div><dt>Platforms</dt><dd>{app.platforms.join(" · ")}</dd></div>
                    <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
                  </dl>
                </div>
                <div className="download-card__actions">
                  <a className="button" href={app.slug === "vectorcraft" ? releasesBySlug.get(app.slug)!.url : app.officialPage} target="_blank" rel="noreferrer">Download {app.name} ↗</a>
                  <Link href={`/apps/${app.slug}/`}>Read the guide</Link>
                  <a href={releasesBySlug.get(app.slug)?.url} target="_blank" rel="noreferrer">Latest release notes ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section" aria-labelledby="other-downloads-heading">
          <div className="landing-heading">
            <Eyebrow>Also in the ArtCraft family</Eyebrow>
            <h2 id="other-downloads-heading">{enPages.download.heading2}</h2>
            <p>We have not published full independent guides for these apps yet. Their links therefore go directly to the official project pages.</p>
          </div>
          <div className="resource-list">
            {otherApps.map((app) => (
              <article key={app.slug}>
                <div><span>{app.category}</span><h3>{app.name}</h3><p>Closest to {app.adobeCounterpart}</p></div>
                <StatusBadge value={app.status} />
                <a href={app.officialPage} target="_blank" rel="noreferrer">Official downloads ↗</a>
              </article>
            ))}
          </div>
        </section>

        <aside className="safety-note" aria-labelledby="download-safety-heading">
          <Eyebrow>Before installing</Eyebrow>
          <h2 id="download-safety-heading">{enPages.download.heading3}</h2>
          <p>Confirm the domain, select the correct architecture, keep important files backed up, and test with copies. Availability does not prove that an app is ready for every production workflow.</p>
        </aside>

        <SourceList sources={downloadSources} />
      </div>
    </>
  );
}
