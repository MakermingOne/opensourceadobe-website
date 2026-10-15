"use client";
import Link from "next/link";
import { useState } from "react";
import { dailyUpdates, updatePath } from "@/content/updates";

export function UpdateTimeline() {
  const [selected, setSelected] = useState("all");
  const apps = [...new Map(dailyUpdates.flatMap((issue) => issue.entries.map((entry) => [entry.appSlug, entry.appName] as const))).entries()];
  return <>
    <div className="update-filters" role="group" aria-label="Filter updates by app"><button type="button" aria-pressed={selected === "all"} onClick={() => setSelected("all")}>All apps</button>{apps.map(([slug, name]) => <button type="button" aria-pressed={selected === slug} onClick={() => setSelected(slug)} key={slug}>{name}</button>)}</div>
    <div className="update-timeline" aria-live="polite">{dailyUpdates.map((issue) => {
      const entries = issue.entries.filter((entry) => selected === "all" || entry.appSlug === selected);
      if (!entries.length) return null;
      return <section className="update-day" key={issue.date} aria-label={`Updates checked ${issue.date}`}><div className="update-date"><time dateTime={issue.date}>{issue.date}</time><Link href={updatePath(issue.date)}>Read the daily brief →</Link></div><div className="update-entries">{entries.map((entry) => <article className="update-entry" key={entry.id}><p className="eyebrow">{entry.appName} · {entry.kind}</p><h2><Link href={`${updatePath(issue.date)}#${entry.id}`}>{entry.title}</Link></h2><p>{entry.summary}</p><p className="update-impact"><strong>What it means for you:</strong> {entry.impact}</p><div className="update-links"><Link href={entry.relatedPath}>{entry.relatedLabel} →</Link><a href={entry.sourceUrl} target="_blank" rel="noreferrer">Original source ↗</a></div></article>)}</div></section>;
    })}</div>
  </>;
}
