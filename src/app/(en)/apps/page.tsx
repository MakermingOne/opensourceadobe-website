import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";
import { AppTable } from "@/components/app-table";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { AppDirectory } from "@/components/app-directory";
import { apps } from "@/content/apps";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `ArtCraft Apps: ${apps.length} Open-Source Creative Tools`,
  description: `Browse ${apps.length} ArtCraft apps for photos, video, interfaces, documents and audio. Check each tool’s status and find its official project page.`,
  path: "/apps/",
});

const directorySource = sourcesById.get("artcraft-apps");

export default function AppsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "ArtCraft app directory", url: absoluteUrl("/apps/") }} />
      <div className="container page-shell page-shell--scan directory-page">
        <Breadcrumbs currentPath="/apps/" items={[{ label: "Home", href: "/" }, { label: "Apps" }]} />
        <header className="page-intro">
          <Eyebrow>Independent directory · Official project sources</Eyebrow>
          <h1>Browse the <span>ArtCraft app family.</span></h1>
          <p className="lede">Find a tool by task, app name or platform. Compare {apps.length} projects and check their release status before downloading.</p>
          <p className="updated">Last updated: <PageUpdated path="/apps/" /></p>
        </header>

        <section className="content-section" aria-labelledby="choose-app-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">01</p>
            <div>
              <h2 id="choose-app-heading">Choose an app by the work you need to do.</h2>
              <p>Every app now has a download and installation guide, including our <Link href="/apps/pdfcraft/">PdfCraft download guide</Link>. Choose your platform, check installation steps and review each tool’s compatibility limits. Find source code and release notes in the <Link href="/github/">ArtCraft GitHub directory</Link>.</p>
            </div>
          </div>
          <AppDirectory />
        </section>

        <section className="content-section" aria-labelledby="directory-heading">
          <div className="section-heading section-heading--tight">
            <p className="section-number">02</p>
            <div>
              <h2 id="directory-heading">Compare releases and platforms.</h2>
              <p>Alpha software can be useful, but it still deserves a test with copies of your own files.</p>
            </div>
          </div>
          <AppTable apps={apps} />
        </section>
        {directorySource ? <SourceList sources={[directorySource]} /> : null}
      </div>
    </>
  );
}
