import Link from "next/link";

import {
  externalResources,
  type ExternalResource,
  type ExternalResourceKind,
} from "@/content/external-resources";

const kindLabel: Record<ExternalResourceKind, string> = {
  youtube: "YouTube",
  reddit: "Reddit",
  hn: "Hacker News",
  article: "Press",
  official: "Official",
};

const tierLabel: Record<ExternalResource["tier"], string> = {
  "hands-on": "Hands-on test",
  "first-look": "First look",
  news: "News / overview",
  community: "Community thread",
};

function ResourceCard({ resource }: { resource: ExternalResource }) {
  const isYouTube = resource.kind === "youtube" && resource.youtubeId;
  const thumbnail = isYouTube
    ? `https://i.ytimg.com/vi/${resource.youtubeId}/hqdefault.jpg`
    : null;

  return (
    <article className="resource-card" data-kind={resource.kind}>
      {isYouTube ? (
        <div className="resource-card__media">
          <a
            aria-label={`Watch ${resource.title} on YouTube`}
            className="resource-card__thumb-link"
            href={resource.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`Thumbnail for ${resource.title}`}
              className="resource-card__thumb"
              loading="lazy"
              src={thumbnail!}
            />
            <span aria-hidden className="resource-card__play">▶</span>
          </a>
        </div>
      ) : null}

      <div className="resource-card__body">
        <header className="resource-card__meta">
          <span className="resource-card__kind">{kindLabel[resource.kind]}</span>
          <span className="resource-card__app">{resource.app}</span>
          <span className="resource-card__tier">{tierLabel[resource.tier]}</span>
        </header>

        <h3 className="resource-card__title">
          <a href={resource.url} rel="noopener noreferrer" target="_blank">
            {resource.title}
          </a>
        </h3>

        <p className="resource-card__credit">
          {resource.author}
          {resource.authorDetail ? ` · ${resource.authorDetail}` : ""}
          {resource.views ? ` · ${resource.views}` : ""}
          {" · "}
          <time dateTime={resource.publishedAt}>{resource.publishedAt}</time>
        </p>

        <p className="resource-card__summary">{resource.summary}</p>

        <p className="resource-card__takeaway">
          <strong>Why watch/read:</strong> {resource.keyTakeaway}
        </p>

        {isYouTube ? (
          <details className="resource-card__embed">
            <summary>Play inline (YouTube iframe)</summary>
            <div className="resource-card__iframe-wrap">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={`https://www.youtube-nocookie.com/embed/${resource.youtubeId}`}
                title={`YouTube embed: ${resource.title}`}
              />
            </div>
          </details>
        ) : null}

        <Link className="resource-card__cta" href={resource.url} target="_blank">
          Open {kindLabel[resource.kind]} →
        </Link>
      </div>
    </article>
  );
}

export function ExternalResourceDirectory() {
  const apps: Array<ExternalResource["app"]> = [
    "PhotoCraft",
    "VectorCraft",
    "FilmCraft",
    "LightCraft",
    "ArtCraft suite",
  ];

  return (
    <section aria-labelledby="external-resources-heading" className="content-section">
      <div className="section-heading section-heading--tight">
        <p className="section-number">02</p>
        <div>
          <h2 id="external-resources-heading">What people are already saying.</h2>
          <p>
            Tutorials, hands-on reviews and community threads we found across YouTube,
            Reddit, Hacker News and the press — summarized with attribution so you can
            judge each source yourself.
          </p>
          <p>Community sources checked October 13, 2026. Launch-era videos describe older builds; their bugs, feature counts and parity estimates may no longer match the latest release. Video playback could not be rechecked in this update.</p>
        </div>
      </div>

      {apps.map((app) => {
        const items = externalResources.filter((r) => r.app === app);
        if (items.length === 0) return null;
        return (
          <div className="resource-group" key={app}>
            <h3 className="resource-group__heading">
              <span>{app}</span>
              <em>{items.length} {items.length === 1 ? "source" : "sources"}</em>
            </h3>
            <div className="resource-grid">
              {items.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        );
      })}

      <aside className="resource-disclaimer">
        <p>
          <strong>Attribution note.</strong> Every card above links to the original
          source. Thumbnails are served from YouTube&apos;s public image CDN and
          videos play through YouTube&apos;s official embed — we don&apos;t host or
          re-upload anyone&apos;s content. Summaries are our editorial take; the
          source itself is the authoritative version. Found a tutorial we missed?{" "}
          <Link href="/contact/">Tell us</Link>.
        </p>
      </aside>
    </section>
  );
}
