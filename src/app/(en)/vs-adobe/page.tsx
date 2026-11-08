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
        <section className="prose" aria-labelledby="migration-check">
          <h2 id="migration-check">A reversible migration test</h2>
          <p>A useful comparison ends with a decision you can check on your own work. This is our suggested acceptance process, not a claim that we have tested these applications. Keep your current editor available until the trial passes.</p>
          <h3>1. Choose three representative copies</h3>
          <p>Use a simple project, a normal recent job and the most demanding job you expect to repeat. Put copies in a separate folder with their linked images, fonts, media and reference exports. Record the original application, version, operating system and export settings. Never make a new editor’s first save your only copy of a client file.</p>
          <h3>2. Separate appearance from editability</h3>
          <p>First compare the opened project against a reference image, PDF or video export. Then change one meaningful object: a text layer, mask, timeline clip, adjustment or linked image. Save in the alternative’s native format, close the app and reopen it. A flattened file can look right while losing the structure you need for the next revision.</p>
          <h3>3. Check the parts that can change silently</h3>
          <ul>
            <li><strong>Photos and RAW:</strong> inspect color profiles, white balance, masks, blend modes and small text at full size. Compare a neutral area and a saturated area in the same viewer. Decide whether you need editable RAW adjustments or only a finished raster export.</li>
            <li><strong>Vectors and page layout:</strong> inspect font substitution, line breaks, clipping, transparency, page dimensions and linked assets. For print work, ask the printer to check a sample against their required PDF, bleed and color specifications.</li>
            <li><strong>Video and effects:</strong> check missing media, frame rate, duration, transitions, captions, audio synchronization and the final frame. Watch the rendered output rather than judging only the timeline preview.</li>
            <li><strong>PDF documents:</strong> check selectable text, page order, forms, annotations and a printed sample. Treat signatures, redaction and archival requirements as separate acceptance checks; a file that opens is not proof those properties survived.</li>
          </ul>
          <h3>4. Try a real handoff</h3>
          <p>Export the format your recipient actually needs and open it in their target application or viewer. If editable collaboration is required, ask them to make and return a small change. List anything that becomes flattened, substituted or unsupported. A good PNG export may be enough for a web illustration but does not establish a workable PSD handoff.</p>
          <h3>5. Make a narrow decision</h3>
          <p>Keep a short record: task, tested build, input format, expected result, observed difference and pass or fail. Switch only the tasks that pass. If a required feature is missing or a saved project cannot be reopened reliably, retain your existing workflow for that task and revisit after a relevant release. This is more useful than treating a free download as proof that an entire subscription can be replaced.</p>
        </section>
        {directorySource ? <div className="comparison-sources"><SourceList sources={[directorySource]} /></div> : null}
      </div>
    </>
  );
}
