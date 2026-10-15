import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { UpdateTimeline } from "@/components/update-timeline";
import { dailyUpdates, latestUpdateDate, updatePath } from "@/content/updates";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: "ArtCraft Updates: Releases, New Apps & Development News", description: "Follow ArtCraft releases, new apps and documented limitations. Dated updates explain what changed, what to test and where to find the original source.", path: "/updates/", image: "/images/og/artcraft-updates.png" });

export default function UpdatesPage() {
  return <div className="container page-shell updates-shell">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "ArtCraft development updates", url: absoluteUrl("/updates/"), mainEntity: { "@type": "ItemList", itemListElement: dailyUpdates.map((issue, index) => ({ "@type": "ListItem", position: index + 1, name: issue.title, url: absoluteUrl(updatePath(issue.date)) })) } }} />
    <Breadcrumbs currentPath="/updates/" items={[{ label: "Home", href: "/" }, { label: "Updates" }]} />
    <header className="page-intro"><Eyebrow>Open-source development journal</Eyebrow><h1>What changed.<br /><span>What it means for your work.</span></h1><p className="lede">Follow new ArtCraft apps, official releases and changing workflow limits. Every entry links to its source and explains what is worth testing before you switch.</p><p className="updated">Last updated: <time dateTime={latestUpdateDate}>{latestUpdateDate}</time> · Latest source check</p><div className="button-row"><a className="button button--secondary" href="/updates/feed.xml">Subscribe via RSS</a><Link className="text-link" href="/apps/">Explore the app directory →</Link></div></header>
    <UpdateTimeline />
    <aside className="safety-note"><h2>How to read these updates</h2><p>“Official release” means changes listed by the project, not independently tested fixes. “Project announcement” records new listings or plans. “Documentation update” summarizes the limits described when we checked. “Community report” identifies an attributed Reddit discussion or user experience, not an official announcement or verified test. We publish a brief when there is a meaningful change; a source-check date is not a promise of a new release every day.</p><p><Link href="/about/">Read our research approach →</Link> · <Link href="/contact/">Send a correction →</Link></p></aside>
    <section className="editorial-source"><div><h2>Sources</h2><p>Every entry links to its original source. Full source lists and dates are included in the <Link href={updatePath(latestUpdateDate)}>latest daily brief</Link>.</p></div></section>
  </div>;
}
