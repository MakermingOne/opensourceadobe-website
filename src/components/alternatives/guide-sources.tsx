import type { SourceRecord } from "@/content/types";

export function GuideSources({ sources }: { sources: SourceRecord[] }) {
  return (
    <section className="guide-section guide-sources" aria-labelledby="sources-heading">
      <p className="guide-kicker">Evidence</p>
      <h2 id="sources-heading">Sources</h2>
      <p>Official sources used for factual claims. Each source shows its most recent check date.</p>
      <ol>{sources.map((source, index) => <li key={source.id}><span>{String(index + 1).padStart(2, "0")}</span><div><a href={source.url} rel="noreferrer" target="_blank">{source.title}</a><small> · Accessed <time dateTime={source.accessedAt}>{source.accessedAt}</time></small></div></li>)}</ol>
    </section>
  );
}
