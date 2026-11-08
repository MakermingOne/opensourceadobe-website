import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About this independent open-source creative guide",
  description: "How OpenSourceAdobe researches ArtCraft apps, labels evidence, separates official claims from testing, and corrects uncertain information.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/about/" items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <header className="page-intro">
        <Eyebrow>About · editorial method</Eyebrow>
        <h1>Useful skepticism<br /><span>for ambitious software.</span></h1>
        <p className="lede">OpenSourceAdobe is an unofficial, independent guide to open-source creative tools that overlap with Adobe workflows.</p>
        <p className="updated">Last updated: <PageUpdated path="/about/" /></p>
      </header>
      <article className="prose">
        <h2>Publisher and independence</h2>
        <p>OpenSourceAdobe is maintained by <a href="https://github.com/MakermingOne" target="_blank" rel="noreferrer">Makerming ↗</a>. The <a href="https://github.com/MakermingOne/opensourceadobe-website" target="_blank" rel="noreferrer">website source and published content ↗</a> are public. We are not affiliated with Adobe, ArtCraft or the projects covered here. Adobe product names identify workflows readers already know; this is not an official download or support service.</p>
        <h2>What we do</h2>
        <p>We turn scattered project pages, repositories, release information, and later hands-on tests into a navigable map. The goal is to help readers decide what deserves attention without turning early development into a marketing promise.</p>
        <h2>How evidence is labeled</h2>
        <p><strong>Official source verified</strong> means we checked an official page or repository. <strong>Partially tested</strong> will mean our own test covered only a documented scope. <strong>Reported</strong> attributes a claim to an external source. <strong>Not verified</strong> means the evidence is insufficient.</p>
        <h2>How a guide is put together</h2>
        <p>We compare official release notes, repository documentation, available installers and license information, then explain which tasks are reasonable starting points and what readers should verify. A source-code commit is not automatically a released feature. Publication dates, source-check dates and release dates are kept distinct.</p>
        <p>Our current guides are source-based editorial analysis, not hands-on product tests. Screenshots illustrate the interface rather than prove compatibility. Community reports are attributed to their authors and are not treated as independently verified results. A claim about a specific build should link to the relevant release or documentation so readers can check it.</p>
        <h2>What we recommend testing</h2>
        <p>Opening a file is different from preserving its editable structure. Our <Link href="/vs-adobe/#migration-check">migration checklist</Link> covers a reversible trial, representative files, export checks and a clear stopping point. We do not claim replacement parity, professional stability, format fidelity or measured performance without a reproducible test.</p>
        <h2>Funding and placements</h2>
        <p>We accept relevant business inquiries through our <Link href="/contact/">contact page</Link>. Any sponsored placement must be labeled and does not determine editorial verdicts. Google ads are currently disabled. Download links lead to project sources; we do not sell or redistribute installers.</p>
        <h2>Corrections</h2>
        <p>If a source changed or a statement is wrong, use the <Link href="/contact/">contact page</Link>. Include the affected URL and a primary source when possible.</p>
      </article>
      <EditorialSourceNote>This page documents OpenSourceAdobe’s own editorial method and evidence labels. Product facts elsewhere on the site link to their primary sources.</EditorialSourceNote>
    </div>
  );
}
