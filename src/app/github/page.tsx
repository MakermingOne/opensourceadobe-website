import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { sourcesById } from "@/content/sources";
import { apps } from "@/content/apps";
import { releasesBySlug } from "@/content/releases";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { workflowLabels } from "@/lib/workflow-labels";

export const metadata = pageMetadata({
  title: "ArtCraft GitHub: Official Studio, App Repos & Downloads",
  absoluteTitle: true,
  description: "Find official ArtCraft GitHub links for the AI studio, PhotoCraft, PdfCraft and Launcher, with licenses and releases.",
  path: "/github/",
  image: "/images/og/artcraft-github.png",
});

const repoSources = ["artcraft-repository", "craft-launcher-repository", "craft-launcher-release", ...apps.flatMap((app) => app.sourceIds)].filter((id, index, ids) => ids.indexOf(id) === index).map((id) => sourcesById.get(id)).filter((source) => source !== undefined);

const repos = apps.map((app) => ({ name: app.name, slug: app.slug, adobe: workflowLabels(app).table, license: app.license, platforms: app.platforms.join(", "), version: app.version }));
export default function GitHubPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: "ArtCraft GitHub: official studio, apps and Launcher", description: metadata.description, dateModified: "2026-10-15", url: absoluteUrl("/github/") },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "GitHub", item: absoluteUrl("/github/") },
      ] },
    ] }} />
    <div className="container page-shell">
      <Breadcrumbs currentPath="/github/" items={[{ label: "Home", href: "/" }, { label: "GitHub" }]} />
      <header className="page-intro">
        <Eyebrow>Official repositories · Verified licenses</Eyebrow>
        <h1>ArtCraft GitHub: <span>find the official repository.</span></h1>
        <p className="lede">Looking for ArtCraft on GitHub? Start with storytold/artcraft for the AI image and video studio. PhotoCraft, PdfCraft and the other Crafting Apps have separate repositories; ArtCraft Launcher is a separate installer. Choose the project you actually want below.</p>
        <p className="updated">Last updated: <time dateTime="2026-10-15">2026-10-15</time></p>
        <div className="button-row"><a className="button" href="https://github.com/storytold/artcraft" target="_blank" rel="noreferrer">Official ArtCraft GitHub ↗</a><a className="button button--secondary" href="#repos-heading">Find a Crafting App</a></div>
      </header>

      <section className="content-section" aria-labelledby="which-repo-heading">
        <div className="section-heading"><p className="section-number">Start</p><div><h2 id="which-repo-heading">ArtCraft studio, Crafting Apps or Launcher?</h2><p>These projects share a team, but they are not one app or one download.</p></div></div>
        <div className="table-scroll guide-table-wrap" tabIndex={0} role="region" aria-label="Scroll the official project repository table"><table className="guide-table">
          <caption>Official repositories by the product you want</caption>
          <thead><tr><th>Project</th><th>What you get</th><th>Official GitHub</th><th>Downloads</th></tr></thead>
          <tbody>
            <tr><th scope="row">ArtCraft studio</th><td>AI image and video creation with composition and scene tools</td><td><a href="https://github.com/storytold/artcraft" target="_blank" rel="noreferrer">storytold/artcraft ↗</a></td><td><a href="https://github.com/storytold/artcraft/releases" target="_blank" rel="noreferrer">Studio releases ↗</a></td></tr>
            <tr><th scope="row">Crafting Apps</th><td>{apps.length} separate projects for photos, PDFs, video and more</td><td><a href="#repos-heading">See the app repository table</a></td><td><Link href="/download/">App download directory →</Link></td></tr>
            <tr><th scope="row">ArtCraft Launcher</th><td>Install and update the Crafting Apps together</td><td><a href="https://github.com/storytold/craft-launcher" target="_blank" rel="noreferrer">storytold/craft-launcher ↗</a></td><td><a href={releasesBySlug.get("craft-launcher")?.url} target="_blank" rel="noreferrer">Launcher {releasesBySlug.get("craft-launcher")?.version} ↗</a></td></tr>
          </tbody>
        </table></div>
        <div className="prose"><p>Need the image editor? Read our <Link href="/apps/photocraft/">ArtCraft PhotoCraft guide</Link>. Need PDF tools? <Link href="/apps/pdfcraft/">Download PdfCraft from the official release</Link>. We link only to the repositories traceable from official product materials, not similarly named forks or download mirrors.</p></div>
      </section>

      <section className="content-section" aria-labelledby="repos-heading">
        <div className="section-heading"><p className="section-number">01</p><div><h2 id="repos-heading">Repositories by app</h2><p>Official source repositories, with licenses checked in their documentation. Release dates are shown in the linked notes.</p></div></div>
        <div className="table-scroll guide-table-wrap" tabIndex={0} role="region" aria-label="Scroll the Crafting Apps repository table">
          <table className="guide-table">
            <caption>The {apps.length} Crafting Apps: repositories, platforms and release snapshot</caption>
            <thead><tr><th>App</th><th>Closest workflow</th><th>License</th><th>Platforms</th><th>Latest release</th><th>Repository</th></tr></thead>
            <tbody>
              {repos.map((repo) => (
                <tr key={repo.slug}>
                  <td>{repo.name}</td>
                  <td>{repo.adobe}</td>
                  <td>{repo.license}</td>
                  <td>{repo.platforms}</td>
                  <td><a href={releasesBySlug.get(repo.slug)?.url} target="_blank" rel="noreferrer">v{repo.version} ↗</a></td>
                  <td><a href={`https://github.com/storytold/${repo.slug}`} target="_blank" rel="noreferrer">github.com/storytold/{repo.slug} ↗</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section" aria-labelledby="licenses-heading">
        <div className="section-heading"><p className="section-number">02</p><div><h2 id="licenses-heading">License notes</h2><p>What the licenses actually mean for users and contributors.</p></div></div>
        <div className="prose">
          <p>The ArtCraft studio and the Crafting App repositories in this table state that they are dual-licensed under MIT or Apache-2.0, at your option. Read the LICENSE-MIT, LICENSE-APACHE and NOTICE files in the project you intend to use or redistribute; source-code terms and separate asset or branding terms are different questions.</p>
          <p>Check the repository’s license files before redistributing a modified build. Permission to reuse source code does not automatically grant permission to use a project’s name or branding.</p>
          <p>Fonts, icons and images may have separate terms. Review any asset attribution and license files included with the version you plan to use.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="build-heading">
        <div className="section-heading"><p className="section-number">03</p><div><h2 id="build-heading">Build from source</h2><p>Each repository includes build instructions for its supported platforms.</p></div></div>
        <div className="prose">
          <p>The Crafting Apps are written in Rust. Clone the individual app repository and follow its README rather than the AI studio’s build instructions. For the studio, use <a href="https://github.com/storytold/artcraft/blob/main/_docs/dev_setup.md" target="_blank" rel="noreferrer">ArtCraft’s development setup guide</a>. We do not provide build support or re-hosted binaries.</p>
          <p>The official directory lists browser targets for twelve apps, including FigCraft. FilmCraft is listed primarily for macOS, Windows and Linux. A web-build package is not the same as a hosted browser service.</p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="community-heading">
        <div className="section-heading"><p className="section-number">04</p><div><h2 id="community-heading">Community and support</h2><p>Where to ask questions and follow development.</p></div></div>
        <div className="prose">
          <p>The ArtCraft community is on Discord at discord.gg/artcraft. For bug reports and feature requests, open an issue on the relevant GitHub repository.</p>
          <p>For a broader view of how these apps compare to Adobe products, see our <Link href="/alternatives/">open source Adobe alternatives guide</Link> or the <Link href="/vs-adobe/">ArtCraft vs Adobe workflow map</Link>.</p>
        </div>
      </section>

      <SourceList sources={repoSources} />
    </div>
  </>;
}
