import { PageUpdated } from "@/components/page-updated";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { UpdateTimeline } from "@/components/update-timeline";
import { dailyUpdates, latestUpdateDate, updatePath } from "@/content/updates";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({ title: "Official ArtCraft Updates: Releases & Announcements", description: "Follow official ArtCraft releases, announcements and dated upstream documentation changes, with links to original sources.", path: "/updates/", image: "/images/og/artcraft-updates.png" });

export default function UpdatesPage() {
  return <div className="container page-shell updates-shell">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Official ArtCraft updates", url: absoluteUrl("/updates/"), mainEntity: { "@type": "ItemList", itemListElement: dailyUpdates.map((issue, index) => ({ "@type": "ListItem", position: index + 1, name: issue.title, url: absoluteUrl(updatePath(issue.date)) })) } }} />
    <Breadcrumbs currentPath="/updates/" items={[{ label: "Home", href: "/" }, { label: "Updates" }]} />
    <header className="page-intro"><Eyebrow>Official ArtCraft updates</Eyebrow><h1>What changed.<br /><span>What it means for your work.</span></h1><p className="lede">Follow official ArtCraft releases, project announcements and dated documentation changes. Each event appears once, with its original source and practical workflow notes.</p><p className="updated">Last updated: <PageUpdated path="/updates/" /></p><div className="button-row"><a className="button button--secondary" href="/updates/feed.xml">Subscribe via RSS</a><Link className="text-link" href="/apps/">Explore the app directory →</Link></div></header>
    <UpdateTimeline />
    <aside className="safety-note"><h2>How to read these updates</h2><p>“Official release” means changes listed by the project, not independently tested fixes. “Project announcement” records new listings or plans. “Documentation update” records a dated change in an official repository. This feed includes only official product events. Routine website maintenance, source rechecks and community reports are excluded; an existing release is not republished as a new update.</p><p><Link href="/about/">Read our research approach →</Link> · <Link href="/contact/">Send a correction →</Link></p></aside>
    <section className="editorial-source"><div><h2>Sources</h2><p>Every entry links to its original source. Full source lists and dates are included in the <Link href={updatePath(latestUpdateDate)}>latest daily brief</Link>.</p></div></section>
  </div>;
}
