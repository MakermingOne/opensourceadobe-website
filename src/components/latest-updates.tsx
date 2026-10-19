import Link from "next/link";
import { updatePath, updatesForApp } from "@/content/updates";

export function LatestUpdates({ appSlug }: { appSlug?: string }) {
  const entries = updatesForApp(appSlug).slice(0, 3);
  if (!entries.length) return null;
  return <section className="latest-updates" aria-label={appSlug ? "Related development updates" : "Latest development updates"}>
    <div className="updates-heading"><div><p className="eyebrow">Development journal</p><h2>{appSlug ? "Recent updates for this app" : "Latest updates"}</h2></div><Link className="text-link" href="/updates/">All updates →</Link></div>
    <div className="updates-preview">{entries.map((entry) => <article key={entry.id}><p className="updated"><time dateTime={entry.date}>{entry.date}</time> · {entry.kind}</p><h3><Link href={`${updatePath(entry.date)}#${entry.id}`}>{entry.title}</Link></h3><p>{entry.summary}</p></article>)}</div>
  </section>;
}
