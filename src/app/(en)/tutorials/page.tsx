import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ExternalResourceDirectory, TutorialVideoSelections } from "@/components/external-resources";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "ArtCraft Tutorials: Official Studio Lessons & App Install Guides",
  description: "Official ArtCraft AI studio lessons, clearly credited community CraftApps installation videos, and starter paths for PhotoCraft, VectorCraft, FilmCraft and LightCraft.",
  path: "/tutorials/",
});

const paths = [
  {
    label: "Image editing",
    title: "Test a layered PSD in PhotoCraft",
    app: "PhotoCraft",
    href: "/apps/photocraft/",
    steps: ["Duplicate a non-critical PSD", "Check layers, masks and type", "Make one reversible edit", "Save a new copy and reopen it"],
  },
  {
    label: "Vector drawing",
    title: "Build and export a simple SVG",
    app: "VectorCraft",
    href: "/apps/vectorcraft/",
    steps: ["Start with a small SVG or blank file", "Draw paths and combine shapes", "Add one editable effect", "Export SVG and PDF copies"],
  },
  {
    label: "Video editing",
    title: "Cut a short FilmCraft test sequence",
    app: "FilmCraft",
    href: "/apps/filmcraft/",
    steps: ["Use copied source media", "Create a short multitrack timeline", "Try a trim, title and color change", "Export and inspect the result"],
  },
  {
    label: "RAW photography",
    title: "Check your camera files in LightCraft",
    app: "LightCraft",
    href: "/apps/lightcraft/",
    steps: ["Copy a small mixed photo set", "Confirm RAW decoding and color", "Try ratings, adjustments and masks", "Export without moving your main catalog"],
  },
] as const;

const tutorialSources = ["photocraft-official", "vectorcraft-official", "filmcraft-official", "lightcraft-official"]
  .map((id) => sourcesById.get(id))
  .filter((source) => source !== undefined);

export default function TutorialsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ArtCraft starter tutorials",
        url: absoluteUrl("/tutorials/"),
        description: metadata.description,
      }} />

      <div className="container page-shell">
        <Breadcrumbs currentPath="/tutorials/" items={[{ label: "Home", href: "/" }, { label: "Tutorials" }]} />
        <header className="page-intro">
          <Eyebrow>Low-risk starter paths</Eyebrow>
          <h1>Start with the task <span>you want to complete.</span></h1>
          <p className="lede">Choose an official ArtCraft AI studio lesson or a community CraftApps installation guide, then try a small project with copied files.</p>
          <p className="updated">Last updated: <PageUpdated path="/tutorials/" /></p>
          <div className="button-row"><a className="button" href="#official-studio-tutorials">Official studio tutorials</a><a className="button button--secondary" href="#community-installation-guides">Community installation guides</a></div>
        </header>

        <TutorialVideoSelections />

        <section className="content-section" aria-labelledby="paths-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">03</p>
            <div>
              <h2 id="paths-heading">Four practical first sessions.</h2>
              <p>Each path begins with copied files and ends with a result you can inspect outside the app.</p>
            </div>
          </div>
          <div className="tutorial-grid">
            {paths.map((path) => (
              <article className="tutorial-card" key={path.app}>
                <div className="tutorial-card__heading">
                  <span>{path.label}</span>
                  <h3>{path.title}</h3>
                  <p>Using {path.app}</p>
                </div>
                <ol>{path.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                <Link href={path.href}>Open the {path.app} guide →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section answer-block" aria-labelledby="ai-history-background-heading">
          <div><Eyebrow>Creative technology background</Eyebrow><h2 id="ai-history-background-heading">Where did the idea of AI begin?</h2></div>
          <div className="answer-block__body"><p className="answer-lead">Before today’s AI creative tools, a 1955 research proposal gave artificial intelligence its name.</p><p>Explore an illustrated history of the Dartmouth proposal, Logic Theorist, and the difference between the 1955 groundwork and the 1956 workshop. A short pop-culture detour explains why Back to the Future also points to 1955.</p><Link href="/learn/ai-history-1955/">Explore AI history: 1955 →</Link></div>
        </section>

        <ExternalResourceDirectory />

        <section className="landing-section answer-block" aria-labelledby="tutorial-scope-heading">
          <div>
            <Eyebrow>Current scope</Eyebrow>
            <h2 id="tutorial-scope-heading">Starter paths now. Tested walkthroughs next.</h2>
          </div>
          <div className="answer-block__body">
            <p className="answer-lead">We will only call something a full tutorial after completing the workflow and documenting its inputs, version and result.</p>
            <p>Upcoming walkthroughs will prioritize PhotoCraft PSD basics, VectorCraft SVG export, FilmCraft timeline fundamentals and LightCraft camera compatibility. Until then, the product guides contain the verified feature and limitation details.</p>
          </div>
        </section>

        <SourceList sources={tutorialSources} />
      </div>
    </>
  );
}
