import { comparedProduct } from "@/lib/workflow-labels";
import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = pageMetadata({
  title: "ArtCraft vs Adobe: Photoshop and 6 More Workflows",
  description: "Compare ArtCraft software with Photoshop, Illustrator, Premiere Pro, Lightroom, Acrobat, After Effects and InDesign, including what each app can and cannot replace.",
  path: "/vs-adobe/",
});

const beyondAdobe = new Set(["figcraft", "wordcraft", "soundcraft", "deckcraft", "cadcraft", "gridcraft"]);
const comparisonGroups = [
  { id: "adobe-workflows", title: "Adobe workflows", apps: apps.filter((app) => !beyondAdobe.has(app.slug)) },
  { id: "beyond-adobe-workflows", title: "Beyond Adobe", apps: apps.filter((app) => beyondAdobe.has(app.slug)) },
];

const directorySource = sourcesById.get("artcraft-apps");

export default function ComparePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "ArtCraft vs Adobe workflow comparison", url: absoluteUrl("/vs-adobe/") }} />
      <div className="container page-shell comparison-page">
        <Breadcrumbs currentPath="/vs-adobe/" items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
        <header className="page-intro">
          <Eyebrow>ArtCraft · 13 workflow comparisons</Eyebrow>
          <h1>ArtCraft software vs Adobe, <span>one workflow at a time.</span></h1>
          <p className="lede">Compare seven Adobe workflows, plus six tools for interface design, documents, audio, presentations, CAD and spreadsheets. A category match does not guarantee project-file compatibility or production readiness.</p>
          <p className="updated">Last updated: <PageUpdated path="/vs-adobe/" /></p>
        </header>

        <nav className="comparison-jumps" aria-label="Comparison groups">{comparisonGroups.map((group) => <a href={`#${group.id}`} key={group.id}>{group.title} · {group.apps.length} →</a>)}</nav>
        {comparisonGroups.map((group) => <section className="comparison-group" key={group.id} aria-labelledby={group.id}>
        <h2 id={group.id}>{group.title}</h2>
        <div className="comparison-stack">
          {group.apps.map((app, index) => {
            const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
            return (
              <article className="comparison-row" key={app.slug}>
                <div className="comparison-row__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="comparison-row__title">
                  <p>{profile.prompt}</p>
                  <h3>{app.name} <span>Compared with {comparedProduct(app)}</span></h3>
                  <StatusBadge value={app.status} />
                </div>
                <div>
                  <h3>Best starting point</h3>
                  <p className="comparison-row__answer">{profile.bestFor}</p>
                  <p className="comparison-row__meta">{app.platforms.join(" · ")} · {app.version === "Not verified" ? "Release not verified" : `v${app.version}`}</p>
                </div>
                <div>
                  <h3>Check before switching</h3>
                  <p className="comparison-row__answer">{profile.checkFirst}</p>
                  <div className="comparison-links">
                    {app.detailPublished ? <Link href={`/apps/${app.slug}/`}>Read the {app.name} guide</Link> : <a href={app.officialPage} target="_blank" rel="noreferrer">Visit official page ↗</a>}
                    <a href={app.repository} target="_blank" rel="noreferrer">Source code ↗</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div></section>)}
        {directorySource ? <div className="comparison-sources"><SourceList sources={[directorySource]} /></div> : null}
      </div>
    </>
  );
}
