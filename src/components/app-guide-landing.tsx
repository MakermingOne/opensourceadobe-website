import { comparedProduct } from "@/lib/workflow-labels";
import type { DownloadSlug } from "@/content/downloads";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { ReleaseNote } from "@/components/release-note";
import { LatestUpdates } from "@/components/latest-updates";
import { OfficialDownloads } from "@/components/official-downloads";
import { StatusBadge } from "@/components/status-badge";
import type { AppRecord, SourceRecord } from "@/content/types";
import type { AppGuide } from "@/content/guides";
import { absoluteUrl } from "@/lib/site";
import { PageUpdated } from "@/components/page-updated";
import { pageUpdatedAt } from "@/content/page-dates";

export function AppGuideLanding({ app, guide, sources }: { app: AppRecord; guide: AppGuide; sources: SourceRecord[] }) {
  const counterpart = comparedProduct(app);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: guide.applicationCategory,
        operatingSystem: app.platforms.join(", "),
        softwareVersion: app.version,
        isAccessibleForFree: true,
        license: `${app.repository}#license-and-credits`,
        url: absoluteUrl(`/apps/${app.slug}/`),
        sameAs: [app.officialPage, app.repository],
        description: guide.intro,
        dateModified: pageUpdatedAt(`/apps/${app.slug}/`),
      }} />
      <JsonLd data={faqSchema} />

      <div className="container page-shell photocraft-page">
        <Breadcrumbs
          currentPath={`/apps/${app.slug}/`}
          items={[{ label: "Home", href: "/" }, { label: "Apps", href: "/apps/" }, { label: app.name }]}
        />

        <header className="photocraft-hero">
          <div className="photocraft-hero__copy">
            <Eyebrow><span>Independent guide · Last updated <PageUpdated path={`/apps/${app.slug}/`} /></span></Eyebrow>
            <h1 className={guide.headline ? "photocraft-hero__heading--compact" : undefined}>{guide.headline ?? <>{app.name}: an <span>open-source {counterpart} alternative</span></>}</h1>
            <p className="lede">{guide.intro}</p>
            <div className="button-row">
              <a className="button" href="#download-heading">Download {app.name}</a>
              <a className="text-link" href="#install">Installation guide</a>
              <a className="button button--secondary" href={app.repository} rel="noreferrer" target="_blank">View the source code</a>
            </div>
            <p className="hero-caution"><strong>Our take:</strong> {guide.verdict}</p>
          </div>

          <div className="guide-panel" aria-label={`${app.name} at a glance`}>
            <div className="guide-panel__topline"><span>{app.name}</span><StatusBadge value={app.status} /></div>
            <div className="guide-panel__mapping">
              <span>Compared workflow</span>
              <strong>{counterpart}</strong>
            </div>
            <dl>
              <div><dt>Release</dt><dd>{app.version}</dd></div>
              <div><dt>Platforms</dt><dd>{app.platforms.join(" · ")}</dd></div>
              <div><dt>License</dt><dd>MIT or Apache-2.0</dd></div>
              <div><dt>Verified</dt><dd>{app.lastVerified}</dd></div>
            </dl>
          </div>
        </header>

        <OfficialDownloads slug={app.slug as DownloadSlug} name={app.name} platformNotes={guide.platformNotes} />

        <section className="landing-section answer-block" aria-labelledby="replacement-heading">
          <div>
            <Eyebrow>The short answer</Eyebrow>
            <h2 id="replacement-heading">Can {app.name} replace {counterpart}?</h2>
          </div>
          <div className="answer-block__body">
            <p className="answer-lead">{guide.verdict}</p>
            <p>{guide.verdictDetail}</p>
          </div>
        </section>

        <section className="landing-section" aria-labelledby="features-heading">
          <div className="landing-heading">
            <Eyebrow>What is already there</Eyebrow>
            <h2 id="features-heading">What can you do with {app.name}?</h2>
            <p>These are capabilities documented by the official project. They are reasons to test the app, not a promise that every {counterpart} workflow behaves identically.</p>
          </div>
          <div className="feature-matrix">
            {guide.features.map((feature, index) => (
              <article key={feature.title}>
                <p className="feature-number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section fit-section" aria-labelledby="fit-heading">
          <div className="landing-heading">
            <Eyebrow>Before you switch</Eyebrow>
            <h2 id="fit-heading">Who should try {app.name} now?</h2>
          </div>
          <div className="fit-grid">
            <article>
              <p className="judgment-label judgment-label--fit">A good test candidate</p>
              <h3>Try it if you…</h3>
              <ul className="check-list">{guide.tryIf.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <p className="judgment-label judgment-label--pause">Wait or test carefully</p>
              <h3>Do not switch blindly if you…</h3>
              <ul className="check-list check-list--caution">{guide.waitIf.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="landing-section faq-section" aria-labelledby="faq-heading">
          <div className="landing-heading">
            <Eyebrow>Common questions</Eyebrow>
            <h2 id="faq-heading">{app.name} FAQ</h2>
          </div>
          <div className="faq-list">
            {guide.faqs.map((item) => (
              <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
            ))}
          </div>
        </section>

        <section className="landing-section method-note" aria-labelledby="method-heading">
          <div>
            <Eyebrow>How we evaluated this page</Eyebrow>
            <h2 id="method-heading">Official facts, practical guidance, visible limits.</h2>
          </div>
          <div>
            <p>This guide summarizes the official {app.name} product page and repository. We have not yet independently tested production files, performance or long-session stability, so those claims remain clearly bounded.</p>
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
