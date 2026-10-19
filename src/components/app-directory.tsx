"use client";

import { useState } from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import { apps } from "@/content/apps";
import { workflowProfiles } from "@/content/guides";
import { workflowLabels } from "@/lib/workflow-labels";

const groups = [
  { label: "All apps", slugs: [] },
  { label: "Photos", slugs: ["photocraft", "lightcraft"] },
  { label: "Design", slugs: ["vectorcraft", "designcraft", "figcraft", "cadcraft"] },
  { label: "Video", slugs: ["filmcraft", "effectcraft"] },
  { label: "Documents", slugs: ["pdfcraft", "wordcraft", "deckcraft", "gridcraft"] },
  { label: "Audio", slugs: ["soundcraft"] },
];

export function AppDirectory() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState(0);
  const filtered = apps.filter(app => {
    const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
    return (group === 0 || groups[group].slugs.includes(app.slug)) &&
      [app.name, app.category, workflowLabels(app).card, app.adobeCounterpart, profile.bestFor, ...app.platforms].join(" ").toLowerCase().includes(query.trim().toLowerCase());
  });
  return <>
    <noscript><style>{`.directory-controls { display: none; }`}</style></noscript>
    <div className="directory-controls">
      <label htmlFor="app-search">Search apps</label>
      <input id="app-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try Photoshop, PDF or Linux" aria-controls="app-results" />
      <div className="directory-filters" role="group" aria-label="Filter by task">
        {groups.map((item, index) => <button type="button" key={item.label} aria-pressed={group === index} onClick={() => setGroup(index)}>{item.label}</button>)}
      </div>
      <div className="directory-result-summary"><p role="status">{filtered.length} of {apps.length} apps</p>{query || group !== 0 ? <button type="button" onClick={() => { setQuery(""); setGroup(0); }}>Reset filters</button> : null}</div>
    </div>
    <div className="choice-grid" id="app-results">
      {filtered.map(app => {
        const profile = workflowProfiles[app.slug as keyof typeof workflowProfiles];
        return <article className="choice-card" key={app.slug}>
          <div className="choice-card__topline"><span>{profile.prompt}</span><StatusBadge value={app.status} /></div>
          <div className="choice-card__body"><p>{app.category}</p><h3>{app.name}</h3><p className="choice-card__mapping">{workflowLabels(app).card ?? `Closest to ${app.adobeCounterpart}`}</p><p>{profile.bestFor}</p></div>
          <div className="choice-card__footer"><span>{app.platforms.join(" · ")}</span><Link href={`/apps/${app.slug}/`}>Explore {app.name} →</Link></div>
        </article>;
      })}
    </div>
    {filtered.length === 0 ? <p className="directory-empty">No apps match. Try another term or reset the filters.</p> : null}
  </>;
}
