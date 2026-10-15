import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { ProductScreenshot } from "@/components/product-screenshot";
import { SourceList } from "@/components/source-list";
import { ReleaseNote } from "@/components/release-note";
import { LatestUpdates } from "@/components/latest-updates";
import { OfficialDownloads } from "@/components/official-downloads";
import { StatusBadge } from "@/components/status-badge";
import type { AppRecord, SourceRecord } from "@/content/types";
import { photocraftMedia } from "@/content/media";
import { absoluteUrl } from "@/lib/site";

const features = [
  {
    number: "01",
    title: "Layered PSD and PSB files",
    body: "The project says PhotoCraft can open, edit and save layered Photoshop documents instead of flattening everything into one image.",
  },
  {
    number: "02",
    title: "Non-destructive adjustments",
    body: "Curves, Levels, Vibrance, Hue/Saturation and other adjustments can remain editable, reorderable and maskable.",
  },
  {
    number: "03",
    title: "Layers, masks and smart objects",
    body: "Groups, clipping masks, pixel and vector masks, layer styles and smart filters are listed in the project documentation.",
  },
  {
    number: "04",
    title: "Selections that run locally",
    body: "PhotoCraft includes familiar selection tools and describes subject and object selection that runs on your device.",
  },
  {
    number: "05",
    title: "Type, vectors and brushes",
    body: "Editable type, shape layers, paths, vector masks and a pressure-aware brush engine cover more than basic photo adjustments.",
  },
  {
    number: "06",
    title: "Professional color modes",
    body: "Official documentation lists RGB, CMYK, Lab and Grayscale documents at 8, 16 and 32 bits, plus ICC color management.",
  },
] as const;

const faqs = [
  {
    question: "Is PhotoCraft free and open source?",
    answer:
      "Yes. The official repository publishes PhotoCraft under the MIT or Apache-2.0 license, and the official download page lists the app as free.",
  },
  {
    question: "Can PhotoCraft open Photoshop PSD files?",
    answer:
      "The project says PhotoCraft opens and saves layered PSD and PSB files. We have not independently tested complex client files, so use copies until your own workflow is proven.",
  },
  {
    question: "Is PhotoCraft a complete Photoshop replacement?",
    answer:
      "Not for every user yet. It already covers many familiar editing workflows, but the project is labeled early alpha and still needs independent testing for stability, plug-ins and demanding production files.",
  },
  {
    question: "Which platforms support PhotoCraft?",
    answer:
      "The official page lists macOS, Windows, Linux and Web. Download formats and architecture support vary, so check the current official download page for the right build.",
  },
  {
    question: "Can I use PhotoCraft in a browser?",
    answer:
      "ArtCraft lists a WebAssembly build alongside the desktop apps. Browser capabilities and performance can differ from native builds, so test the exact files and tools you need.",
  },
  {
    question: "Is PhotoCraft suitable for commercial or client work?",
    answer:
      "The license permits broad use, but permission and production readiness are different questions. Because PhotoCraft is early alpha, keep a proven editor available and test copies of real client files before relying on it for deadlines.",
  },
] as const;

const workflowRows = [
  ["Layered PSD editing", "Open and save layered PSD and PSB documents", "Not independently verified", "Test copies of representative files"],
  ["Masks and adjustments", "Editable masks and non-destructive adjustment layers", "Not independently verified", "Suitable for a reversible trial"],
  ["Type and vector work", "Editable type, shapes, paths and vector masks", "Not independently verified", "Check fonts, layout and export"],
  ["Color-managed documents", "RGB, CMYK, Lab and Grayscale with ICC support", "Not independently verified", "Compare against a calibrated reference"],
  ["Plug-ins and automation", "No complete Photoshop plug-in or action parity claim", "Not verified", "Keep Photoshop for dependent workflows"],
  ["Complex production round-trips", "PSD and PSB support is listed", "Not independently verified", "Do not trust without repeated reopen tests"],
] as const;

export function PhotoCraftLanding({ app, sources }: { app: AppRecord; sources: SourceRecord[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: app.name,
          applicationCategory: "GraphicsApplication",
          operatingSystem: app.platforms.join(", "),
          softwareVersion: app.version,
          isAccessibleForFree: true,
          license: "https://github.com/storytold/photocraft#license",
          url: absoluteUrl("/apps/photocraft/"),
          sameAs: [app.officialPage, app.repository],
          description:
            "ArtCraft PhotoCraft is a free, native image editor for layered workflows. Its documentation lists PSD and PSB support, masks, adjustments, type, vectors and brushes.",
          dateModified: app.lastVerified,
        }}
      />
      <JsonLd data={faqSchema} />

      <div className="container page-shell photocraft-page">
        <Breadcrumbs
          currentPath="/apps/photocraft/"
          items={[{ label: "Home", href: "/" }, { label: "Apps", href: "/apps/" }, { label: "PhotoCraft" }]}
        />

        <header className="photocraft-hero">
          <div className="photocraft-hero__copy">
            <Eyebrow><span>Independent guide · Last updated <time dateTime={app.lastVerified}>{app.lastVerified}</time></span></Eyebrow>
            <h1 className="photocraft-hero__heading--compact">ArtCraft PhotoCraft: an <span>open-source Photoshop alternative</span></h1>
            <p className="lede">
              ArtCraft PhotoCraft is a free, native image editor for layered workflows. Its documentation lists PSD and PSB support, masks, adjustments, type, vectors and brushes. Find official downloads below, and check the early-alpha limits before switching from Photoshop.
            </p>
            <div className="button-row">
              <a className="button" href="#download-heading">Download PhotoCraft</a>
              <a className="button button--secondary" href={app.repository} rel="noreferrer" target="_blank">View the source code</a>
            </div>
            <p className="hero-caution"><strong>Our take:</strong> promising enough to test on copies of your files, but still too early for an unqualified production switch.</p>
          </div>

          <div className="layer-panel" aria-label="PhotoCraft at a glance">
            <div className="layer-panel__topline"><span>PhotoCraft</span><StatusBadge value={app.status} /></div>
            <div className="layer-panel__canvas" aria-hidden="true">
              <div className="canvas-mark canvas-mark--one" />
              <div className="canvas-mark canvas-mark--two" />
              <span>PC</span>
            </div>
            <div className="layer-row"><span>04</span><strong>Adjustment layers</strong><small>Live + maskable</small></div>
            <div className="layer-row"><span>03</span><strong>PSD / PSB</strong><small>Open + save</small></div>
            <div className="layer-row"><span>02</span><strong>Type + vectors</strong><small>Editable</small></div>
            <div className="layer-row"><span>01</span><strong>Native canvas</strong><small>GPU-backed</small></div>
          </div>
        </header>

        <section className="landing-section answer-block" aria-labelledby="artcraft-photocraft-heading">
          <div><Eyebrow>Know which app you are choosing</Eyebrow><h2 id="artcraft-photocraft-heading">What is ArtCraft PhotoCraft?</h2></div>
          <div className="answer-block__body prose">
            <p>PhotoCraft is the ArtCraft team’s standalone image editor, one of the Crafting Apps. It is separate from the ArtCraft AI image and video studio: downloading that studio is not the same as installing PhotoCraft. The <a href={app.repository} target="_blank" rel="noreferrer">official PhotoCraft repository</a> is storytold/photocraft.</p>
            <p>Want to compare it before installing? Our <Link href="/alternatives/photoshop/">Photoshop alternatives guide</Link> puts PhotoCraft alongside GIMP, Krita and Photopea. The <Link href="/github/">ArtCraft GitHub directory</Link> separates the studio, Launcher and individual app repositories.</p>
          </div>
        </section>

        <section className="landing-section answer-block" aria-labelledby="replacement-heading">
          <div>
            <Eyebrow>The short answer</Eyebrow>
            <h2 id="replacement-heading">Can PhotoCraft replace Photoshop?</h2>
          </div>
          <div className="answer-block__body">
            <p className="answer-lead">For experiments, personal work and open-source exploration: possibly. For client-critical production: not without testing your exact files first.</p>
            <p>
              PhotoCraft already targets the parts of Photoshop many people recognize—layered editing, masks,
              adjustments, selections, type, vectors and PSD documents. But its official status is <strong>early alpha</strong>.
              We have not independently confirmed plug-in compatibility, long-session stability or reliable round-trips for complex production files.
            </p>
          </div>
        </section>

        <section className="landing-section" aria-labelledby="interface-heading">
          <div className="landing-heading">
            <Eyebrow>Official product images</Eyebrow>
            <h2 id="interface-heading">See PhotoCraft&apos;s interface</h2>
            <p>These ArtCraft screenshots show specific tools and panels. They help you recognize the workflow, but they are not independent evidence of speed or reliability.</p>
          </div>
          <div className="product-gallery">
            {photocraftMedia.map((media) => <ProductScreenshot key={media.id} media={media} />)}
          </div>
        </section>

        <section className="landing-section" aria-labelledby="features-heading">
          <div className="landing-heading">
            <Eyebrow>What is already there</Eyebrow>
            <h2 id="features-heading">What can you do with PhotoCraft?</h2>
            <p>These capabilities are documented by the PhotoCraft project. They are useful reasons to explore the app, not a promise that every Photoshop workflow behaves identically.</p>
          </div>
          <div className="feature-matrix">
            {features.map((feature) => (
              <article key={feature.number}>
                <p className="feature-number">{feature.number}</p>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section" aria-labelledby="comparison-heading">
          <div className="landing-heading">
            <Eyebrow>Decision matrix</Eyebrow>
            <h2 id="comparison-heading">PhotoCraft vs. Photoshop by task</h2>
            <p>A listed feature is a reason to test—not evidence that every Photoshop document will behave identically.</p>
          </div>
          <div className="comparison-scroll" tabIndex={0} aria-label="PhotoCraft and Photoshop workflow comparison">
            <table className="workflow-table">
              <thead><tr><th>Workflow</th><th>Officially listed</th><th>Independent verification</th><th>Recommendation</th></tr></thead>
              <tbody>{workflowRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="landing-section risk-section" aria-labelledby="proof-heading">
          <div className="landing-heading">
            <Eyebrow>Early-alpha boundaries</Eyebrow>
            <h2 id="proof-heading">What still needs proof</h2>
            <p>The unanswered questions matter most when files are valuable, deadlines are fixed or other people must reopen your work.</p>
          </div>
          <div className="risk-grid">
            <article><h3>Complex PSD and PSB fidelity</h3><p>Layer styles, smart objects, text layout and unusual blend behavior need real round-trip comparisons.</p></article>
            <article><h3>Plug-ins and automation</h3><p>Do not assume Photoshop plug-ins, actions or team scripts transfer to PhotoCraft.</p></article>
            <article><h3>Large-file performance</h3><p>High-resolution, many-layer and long-session behavior has not been independently benchmarked here.</p></article>
            <article><h3>Fonts and color output</h3><p>Check font substitution, profiles, soft proofing and exported color against your existing setup.</p></article>
          </div>
        </section>

        <section className="landing-section first-test" aria-labelledby="first-test-heading">
          <div className="landing-heading">
            <Eyebrow>A reversible evaluation</Eyebrow>
            <h2 id="first-test-heading">Your first PhotoCraft test</h2>
            <p>Use one small job to find the boundary before considering any wider switch.</p>
          </div>
          <ol>
            <li><span>01</span><p><strong>Choose a non-critical file.</strong> Duplicate a representative PSD; never start with the only copy.</p></li>
            <li><span>02</span><p><strong>Inspect before editing.</strong> Compare layer order, masks, type, color mode and visible effects.</p></li>
            <li><span>03</span><p><strong>Repeat one normal task.</strong> Make an adjustment, edit a mask and change a type or vector layer.</p></li>
            <li><span>04</span><p><strong>Save both ways.</strong> Save a PhotoCraft copy and export the delivery format you usually send.</p></li>
            <li><span>05</span><p><strong>Reopen and compare.</strong> Check the saved document in PhotoCraft and your established editor before trusting the result.</p></li>
          </ol>
        </section>

        <section className="landing-section fit-section" aria-labelledby="fit-heading">
          <div className="landing-heading">
            <Eyebrow>Before you switch</Eyebrow>
            <h2 id="fit-heading">Who should try PhotoCraft now?</h2>
          </div>
          <div className="fit-grid">
            <article>
              <p className="judgment-label judgment-label--fit">A good test candidate</p>
              <h3>Try it if you want to…</h3>
              <ul className="check-list">
                <li>Explore a free image editor with a Photoshop-like workflow.</li>
                <li>Work on Linux without giving up layered editing.</li>
                <li>Inspect or edit copies of PSD and PSB files.</li>
                <li>Follow or contribute to a fast-moving open-source project.</li>
              </ul>
            </article>
            <article>
              <p className="judgment-label judgment-label--pause">Wait or test carefully</p>
              <h3>Do not switch blindly if you…</h3>
              <ul className="check-list check-list--caution">
                <li>Deliver client files that must round-trip perfectly.</li>
                <li>Depend on Photoshop plug-ins, actions or team automation.</li>
                <li>Need proven stability for large, color-critical documents.</li>
                <li>Cannot tolerate bugs or rapid changes in an early-alpha app.</li>
              </ul>
            </article>
          </div>
        </section>

        <OfficialDownloads slug="photocraft" name={app.name} />

        <section className="landing-section faq-section" aria-labelledby="faq-heading">
          <div className="landing-heading">
            <Eyebrow>Common questions</Eyebrow>
            <h2 id="faq-heading">PhotoCraft FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="landing-section method-note" aria-labelledby="method-heading">
          <div>
            <Eyebrow>How we evaluated this page</Eyebrow>
            <h2 id="method-heading">Useful first, cautious where evidence stops.</h2>
          </div>
          <div>
            <p>This guide summarizes the official PhotoCraft page and repository. We clearly separate project claims from independent testing and do not treat an official feature list as proof of production reliability.</p>
            <p><Link href="/about/">Read our editorial approach →</Link></p>
          </div>
        </section>

        <ReleaseNote slug={app.slug} />
        <LatestUpdates appSlug={app.slug} />
        <SourceList sources={sources} />
      </div>
    </>
  );
}
