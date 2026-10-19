import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { dailyUpdates, updatePath } from "@/content/updates";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { PageUpdated } from "@/components/page-updated";
import { pageUpdatedAt } from "@/content/page-dates";

export const dynamicParams = false;
export function generateStaticParams() { return dailyUpdates.map((issue) => ({ date: issue.date })); }
type Props = { params: Promise<{ date: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;
  const issue = dailyUpdates.find((item) => item.date === date);
  if (!issue) return {};
  const metadata = pageMetadata({ title: issue.seoTitle, description: issue.description, path: updatePath(date), image: "/images/og/artcraft-updates.png", absoluteTitle: true });
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: date, modifiedTime: pageUpdatedAt(updatePath(date)) } };
}

export default async function DailyUpdatePage({ params }: Props) {
  const { date } = await params;
  const issue = dailyUpdates.find((item) => item.date === date);
  if (!issue) notFound();
  const sources = issue.entries.map((entry) => ({ id: entry.id, type: entry.kind === "Community report" ? "third-party" as const : entry.kind === "Project announcement" ? "official-page" as const : "official-repository" as const, title: entry.sourceTitle, url: entry.sourceUrl, accessedAt: date }));
  return <article className="container page-shell updates-shell">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: issue.title, description: issue.description, datePublished: date, dateModified: pageUpdatedAt(updatePath(date)), author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, image: `${siteConfig.url}/images/og/artcraft-updates.png`, mainEntityOfPage: absoluteUrl(updatePath(date)) }} />
    <Breadcrumbs currentPath={updatePath(date)} items={[{ label: "Home", href: "/" }, { label: "Updates", href: "/updates/" }, { label: date }]} />
    <header className="page-intro"><Eyebrow>Daily development brief · {date}</Eyebrow><h1>{issue.title}</h1><p className="lede">{issue.introduction}</p><p className="updated">By OpenSourceAdobe · Published <time dateTime={date}>{date}</time> · Last updated: <PageUpdated path={updatePath(date)} /></p></header>
    <nav className="update-contents" aria-label="In this brief"><p className="eyebrow">In this brief</p><ul>{issue.entries.map((entry) => <li key={entry.id}><a href={`#${entry.id}`}>{entry.title}</a></li>)}</ul></nav>
    <div className="update-entries">{issue.entries.map((entry) => <section className="update-entry" id={entry.id} key={entry.id}><p className="eyebrow">{entry.appName} · {entry.kind}</p><h2>{entry.title}</h2><p>{entry.summary}</p><p className="update-impact"><strong>What it means for you:</strong> {entry.impact}</p><p className="updated">{entry.eventDate ? <>{entry.kind === "Official release" ? "Release published" : "Event dated"} <time dateTime={entry.eventDate}>{entry.eventDate}</time> UTC · </> : null}Source checked <time dateTime={date}>{date}</time></p><div className="update-links"><a href={entry.sourceUrl} target="_blank" rel="noreferrer">{entry.sourceTitle} ↗</a><Link href={entry.relatedPath}>{entry.relatedLabel} →</Link></div></section>)}</div>
    <aside className="safety-note"><h2>A release is a reason to test, not a guarantee</h2><p>These summaries describe sources checked on {date}. Only official releases, project announcements and dated upstream documentation changes are included. Development documentation does not establish that a feature is available in a released installer. Later releases may change the picture. Keep copies and backups, and compare the exports and file types you use before committing important work.</p><p><Link href="/updates/">See newer development updates →</Link> · <Link href="/vs-adobe/">Compare ArtCraft and Adobe workflows →</Link> · <Link href="/download/">Find official downloads →</Link></p></aside>
    <SourceList sources={sources} />
    <div className="button-row"><Link className="button" href="/updates/">Back to all updates</Link><Link className="text-link" href="/contact/">Report a correction →</Link></div>
  </article>;
}
