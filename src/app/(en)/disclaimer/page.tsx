import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Independence, trademarks, and accuracy disclaimer",
  description: "OpenSourceAdobe is independent, unaffiliated, source-led, and not a substitute for testing software against your own production requirements.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/disclaimer/" items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />
      <header className="page-intro">
        <Eyebrow>Disclaimer · independence</Eyebrow>
        <h1>No affiliation.<br /><span>No implied endorsement.</span></h1>
        <p className="updated">Last updated: <PageUpdated path="/disclaimer/" /></p>
      </header>
      <article className="prose">
        <h2>Independent publication</h2>
        <p>OpenSourceAdobe is not affiliated with, endorsed by, or sponsored by Adobe, ArtCraft, or the maintainers of the software discussed here.</p>
        <h2>Trademarks</h2>
        <p>Adobe, Photoshop, Illustrator, Premiere Pro, Lightroom, Acrobat, After Effects, and InDesign are referenced only to identify familiar product categories and workflows. All trademarks belong to their respective owners.</p>
        <h2>Accuracy and software risk</h2>
        <p>Open-source projects change quickly. Dates and sources are provided so readers can reassess each statement. Verify downloads, licenses, compatibility, security, and backups directly before using any software in production.</p>
        <h2>No professional advice</h2>
        <p>This site provides editorial information, not legal, security, procurement, or professional workflow advice. “Alternative” describes category overlap, not guaranteed equivalence.</p>
      </article>
      <EditorialSourceNote>This disclaimer states OpenSourceAdobe’s editorial relationship and usage boundaries. Product names are used only for identification and comparison.</EditorialSourceNote>
    </div>
  );
}
