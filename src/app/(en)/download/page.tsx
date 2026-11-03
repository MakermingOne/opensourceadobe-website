import { DownloadPicker } from "@/components/download-picker";
import { enPages } from "@/content/pages/en";
import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/status-badge";
import { comparedProduct } from "@/lib/workflow-labels";
import { officialAssetUrl, officialDownloads, type DownloadSlug } from "@/content/downloads";
import { apps, publishedApps } from "@/content/apps";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { additionalOfficialReleases, releasesBySlug } from "@/content/releases";

export const metadata: Metadata = pageMetadata({
  title: enPages.download.title,
  description: enPages.download.description,
  path: "/download/",
});

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

      <div className="container page-shell download-page">
        <Breadcrumbs currentPath="/download/" items={[{ label: "Home", href: "/" }, { label: "Download" }]} />
        <header className="page-intro download-intro">
          <Eyebrow>Safe download directory</Eyebrow>
          <h1>{enPages.download.h1}<span>{enPages.download.h1Emphasis}</span></h1>
          <p className="lede">Choose from 13 free, open-source apps. Use a checked official GitHub package below, or open the app’s guide for platform choices, installation steps and compatibility limits. We do not mirror installers.</p>
          <p className="updated">Last updated: <PageUpdated path="/download/" /></p>

        </header>

        <DownloadPicker />

        <section className="content-section" aria-labelledby="available-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">01</p>
            <div>
              <h2 id="available-heading">{enPages.download.heading1}</h2>
              <p>All {publishedApps.length} apps have a sourced download guide. Select your tool below; the Windows buttons are for x64, the Mac packages are universal, and the Linux buttons are for x86_64. Other architectures are linked in each guide.</p>
            </div>
          </div>
          <details className="download-app-index"><summary>Jump to an app</summary><nav className="download-jump-links" aria-label="Jump to an app download">{apps.map((app) => <a key={app.slug} href={`#${app.slug}`}>{app.name}</a>)}</nav></details>
          <div className="download-grid">
            {publishedApps.map((app) => (
              <article className="download-card" id={app.slug} key={app.slug}>
                <div className="download-card__topline">
                  <span>{app.category}</span>
                  <StatusBadge value={app.status} />
                </div>
                <div className="download-card__body">
                  <h3>{app.name}</h3>
                  <p className="download-card__mapping">For {comparedProduct(app)} workflows</p>
                  <dl>
                    <div><dt>Latest GitHub release</dt><dd>{app.version}</dd></div>
                    <div><dt>Platforms</dt><dd>{app.platforms.join(" · ")}</dd></div>
                    <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
                  </dl>
                </div>
                <div className="download-card__actions">
                  <Link className="text-link" href={`/apps/${app.slug}/#download-heading`}>Choose your {app.name} download</Link>
                  <div className="download-jump-links" aria-label={`${app.name} platform downloads`}>{officialDownloads[app.slug as DownloadSlug].packages.map((item) => <a className="button button--secondary" key={item.platform} href={officialAssetUrl(app.slug as DownloadSlug, item.filename)}>{item.platform} ↗</a>)}</div>
                  <Link href={`/apps/${app.slug}/#install`}>Installation guide</Link>
                  <a href={releasesBySlug.get(app.slug)?.url} target="_blank" rel="noreferrer">Latest release notes ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="additional-tools-heading">
          <h2 id="additional-tools-heading">Additional official tools</h2>
          <p>MaterialCraft, TextureCraft and Craft Anything also appear in the official suite. Full guides are not published here yet. MaterialCraft remains in development. Their GitHub releases below were checked November 4; product-page download versions can lag behind GitHub. No independent installation or compatibility test is implied.</p>
          <ul>{additionalOfficialReleases.map((release) => <li key={release.slug}><a href={release.url} target="_blank" rel="noreferrer">{release.name} {release.version}: official release and uploaded packages</a> · <a href={release.officialPage} target="_blank" rel="noreferrer">Official product page</a></li>)}</ul>
        </section>

          <p>ArtCraft Launcher {releasesBySlug.get("craft-launcher")?.version} is the current GitHub release. Version 0.14.0 adds MaterialCraft. Version 0.13.0 adds TextureCraft and a setting to hide community apps. Version 0.12.0 notes document a Windows antivirus incident involving Update all; read the official notes before updating. See the release notes for current platform limits. Uploaded package metadata was checked November 4; no independent installation test was performed. <a href={releasesBySlug.get("craft-launcher")?.url} target="_blank" rel="noreferrer">Launcher release notes →</a></p>
        <aside className="safety-note" aria-labelledby="download-safety-heading">
          <Eyebrow>Before installing</Eyebrow>
          <h2 id="download-safety-heading">{enPages.download.heading3}</h2>
          <p>Confirm the domain, select the correct architecture, keep important files backed up, and test with copies. Availability does not prove that an app is ready for every production workflow.</p>
          <p><Link href="/artcraft/safety/">Check a download against its published checksum →</Link></p>
        </aside>

        <SourceList sources={downloadSources} />
      </div>
    </>
  );
}
