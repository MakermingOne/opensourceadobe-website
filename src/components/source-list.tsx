import type { SourceRecord } from "@/content/types";

export function SourceList({ sources }: { sources: SourceRecord[] }) {
  return (
    <section className="sources" aria-labelledby="sources-heading">
      <div className="section-heading section-heading--tight">
        <p className="section-number">SRC</p>
        <div>
          <h2 id="sources-heading">Sources</h2>
          <p>Sources used for the facts and attributed reports on this page.</p>
        </div>
      </div>
      <ol className="source-list">
        {sources.map((source, index) => (
          <li key={source.id}>
            <span className="source-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <a href={source.url} rel="noreferrer" target="_blank">{source.title}</a>
              <p>{source.type.replaceAll("-", " ")} · Accessed {source.accessedAt}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
