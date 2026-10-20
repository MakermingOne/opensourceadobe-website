import { priorityTutorials } from "@/content/tutorial-videos";
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
  tutorial: "Tutorial",
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
    <article className="resource-card" data-kind={resource.kind} id={resource.id}>
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
          {resource.authorUrl ? <a href={resource.authorUrl} target="_blank" rel="noreferrer">{resource.author}</a> : resource.author}
          {resource.authorDetail ? ` · ${resource.authorDetail}` : ""}
          {resource.views ? ` · ${resource.views}` : ""}
          {resource.duration ? ` · ${resource.duration}` : ""}
          {resource.publishedAt ? <> · {/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(resource.publishedAt) ? <time dateTime={resource.publishedAt}>{resource.publishedAt}</time> : resource.publishedAt}</> : null}
        </p>

        <p className="resource-card__summary">{resource.summary}</p>
        {resource.versionNote ? <p className="resource-card__summary"><strong>Applies to:</strong> {resource.versionNote}</p> : null}

        <p className="resource-card__takeaway">
          <strong>Why watch/read:</strong> {resource.keyTakeaway}
        </p>

        {isYouTube ? (
          <details className="resource-card__embed">
            <summary>Watch here</summary>
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
        <p className="section-number">04</p>
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


export function TutorialVideoSelections() {
  return <>
    <section className="content-section" id="official-studio-tutorials" aria-labelledby="official-studio-heading">
      <div className="section-heading section-heading--tight"><p className="section-number">01</p><div>
        <h2 id="official-studio-heading">Official tutorials: ArtCraft AI studio</h2>
        <p>Start with ArtCraft’s own lessons for the 2D canvas and 3D editor. These 2025 videos cover the AI studio; PhotoCraft and the standalone CraftApps have separate workflows.</p>
        <p><a href="https://getartcraft.com/tutorials" target="_blank" rel="noreferrer">Browse the official ArtCraft tutorial library ↗</a></p>
      </div></div>
      <div className="resource-grid">{priorityTutorials.filter(video => video.collection === "official-studio").map(video => <ResourceCard key={video.id} resource={video} />)}</div>
    </section>
    <section className="content-section" id="community-installation-guides" aria-labelledby="community-install-heading">
      <div className="section-heading section-heading--tight"><p className="section-number">02</p><div>
        <h2 id="community-install-heading">Community guides: install the CraftApps</h2>
        <p>Third-party installation walkthroughs, credited to their publishers. Exact app versions are not verified; use the <Link href="/download/">current official download links</Link> and check your operating system before following recorded steps.</p>
      </div></div>
      <div className="resource-grid">{priorityTutorials.filter(video => video.collection === "community-install").map(video => <ResourceCard key={video.id} resource={video} />)}</div>
    </section>
  </>;
}
