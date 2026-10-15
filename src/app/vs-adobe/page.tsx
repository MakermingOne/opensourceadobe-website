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

const directorySource = sourcesById.get("artcraft-apps");

export default function ComparePage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "ArtCraft vs Adobe workflow comparison", url: absoluteUrl("/vs-adobe/") }} />
      <div className="container page-shell">
        <Breadcrumbs currentPath="/vs-adobe/" items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
        <header className="page-intro">
          <Eyebrow>ArtCraft vs Adobe · 7 workflow comparisons</Eyebrow>
          <h1>ArtCraft software vs Adobe, <span>one workflow at a time.</span></h1>
          <p className="lede">Compare PhotoCraft with Photoshop, VectorCraft with Illustrator, FilmCraft with Premiere Pro and four more open-source alternatives. A category match does not guarantee project-file compatibility or production readiness.</p>
          <p className="updated">Last updated: <PageUpdated path="/vs-adobe/" /></p>
        </header>

        <div className="comparison-stack">
          {apps.map((app, index) => {
            const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
            return (
              <article className="comparison-row" key={app.slug}>
                <div className="comparison-row__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="comparison-row__title">
                  <p>{profile.prompt}</p>
                  <h2>{app.name} <span>instead of {app.adobeCounterpart}</span></h2>
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
        </div>
        {directorySource ? <div className="comparison-sources"><SourceList sources={[directorySource]} /></div> : null}
      </div>
    </>
  );
}
