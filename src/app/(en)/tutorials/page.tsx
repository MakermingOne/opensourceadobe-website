import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { LearningLibrary } from "@/components/learning-library";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "ArtCraft Tutorials: PhotoCraft, FilmCraft & Creative Workflows",
  description: "Follow PhotoCraft, VectorCraft, FilmCraft, LightCraft and EffectCraft tutorials from YouTube and Bilibili. Filter by task, language and platform, with Reddit discussions and written guides.",
  path: "/tutorials/",
});

const paths = [
  {
    label: "Image editing",
    title: "Make your first PhotoCraft thumbnail",
    app: "PhotoCraft",
    href: "/apps/photocraft/",
    lesson: "https://www.youtube.com/watch?v=FWeBQ2HChc0",
    steps: ["Create a small thumbnail canvas", "Add an image, gradient and text", "Try a mask and one layer effect", "Save the layers and export an image"],
  },
  {
    label: "Vector drawing",
    title: "Build and export a simple SVG",
    app: "VectorCraft",
    href: "/apps/vectorcraft/",
    lesson: "https://www.youtube.com/watch?v=HdWglcQ2o08",
    steps: ["Start with a small SVG or blank file", "Draw paths and combine shapes", "Add one editable effect", "Export SVG and PDF copies"],
  },
  {
    label: "Video editing",
    title: "Cut a short FilmCraft test sequence",
    app: "FilmCraft",
    href: "/apps/filmcraft/",
    lesson: "https://www.youtube.com/watch?v=Z5RR1I-DGrQ",
    steps: ["Use copied source media", "Create a short multitrack timeline", "Try a trim, title and color change", "Export and inspect the result"],
  },
  {
    label: "RAW photography",
    title: "Check your camera files in LightCraft",
    app: "LightCraft",
    href: "/apps/lightcraft/",
    lesson: "https://www.youtube.com/watch?v=O3e4LzWI_ds",
    steps: ["Copy a small mixed photo set", "Confirm RAW decoding and color", "Try ratings, adjustments and masks", "Export without moving your main catalog"],
  },
  {
    label: "Motion graphics", title: "Animate a title in EffectCraft", app: "EffectCraft",
    href: "/apps/effectcraft/", lesson: "https://www.youtube.com/watch?v=66de0oxGqZ4",
    steps: ["Create a short composition", "Add text and two keyframes", "Adjust easing and preview the motion", "Save the project and inspect an exported video"],
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

      <div className="container page-shell tutorials-page">
        <Breadcrumbs currentPath="/tutorials/" items={[{ label: "Home", href: "/" }, { label: "Tutorials" }]} />
        <header className="page-intro">
          <Eyebrow>Watch · Explore · Read</Eyebrow>
          <h1>Start with the task <span>you want to complete.</span></h1>
          <p className="lede">Learn a specific task: make a thumbnail, refine a mask, import an Illustrator file, cut a video or animate a title. Browse recent lessons by tool, language and platform.</p>
          <p className="updated">Last updated: <PageUpdated path="/tutorials/" /></p>
        </header>

        <LearningLibrary />

        <section className="content-section" aria-labelledby="paths-heading">
          <div className="section-heading section-heading--tight">
            <Eyebrow>Try it yourself</Eyebrow>
            <div>
              <h2 id="paths-heading">Five practical first sessions.</h2>
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
                <details className="tutorial-exercise"><summary>Show the four steps</summary><ol>{path.steps.map((step) => <li key={step}>{step}</li>)}</ol></details>
                <a href={path.lesson} target="_blank" rel="noreferrer">Watch the {path.app} walkthrough ↗</a>
                <Link href={path.href}>Open the {path.app} guide →</Link>
              </article>
            ))}
          </div>
        </section>

        <SourceList sources={tutorialSources} />
      </div>
    </>
  );
}
