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
        <p className="updated">Last updated: 2026-10-11</p>
      </header>
      <article className="prose">
        <h2>What we do</h2>
        <p>We turn scattered project pages, repositories, release information, and later hands-on tests into a navigable map. The goal is to help readers decide what deserves attention without turning early development into a marketing promise.</p>
        <h2>How evidence is labeled</h2>
        <p><strong>Official source verified</strong> means we checked an official page or repository. <strong>Partially tested</strong> will mean our own test covered only a documented scope. <strong>Reported</strong> attributes a claim to an external source. <strong>Not verified</strong> means the evidence is insufficient.</p>
        <h2>What this first release does not do</h2>
        <p>It does not claim full replacement parity, professional stability, format fidelity, performance, or platform quality without a reproducible test. It does not publish thin pages for every listed project.</p>
        <h2>Corrections</h2>
        <p>If a source changed or a statement is wrong, use the <Link href="/contact/">contact page</Link>. Include the affected URL and a primary source when possible.</p>
      </article>
      <EditorialSourceNote>This page documents OpenSourceAdobe’s own editorial method and evidence labels. Product facts elsewhere on the site link to their primary sources.</EditorialSourceNote>
    </div>
  );
}
