import { releaseSummaries } from "@/content/release-summaries";
import { releasesBySlug, releaseCheckedOn } from "@/content/releases";


export function ReleaseNote({ slug }: { slug: string }) {
  const release = releasesBySlug.get(slug);
  if (!release) return null;
  const releaseCheckedAt = releaseCheckedOn(slug);
  return <aside className="method-note" aria-label="Latest release update"><div><p className="eyebrow">Latest GitHub release · Checked <time dateTime={releaseCheckedAt}>{releaseCheckedAt}</time></p><h2>Version {release.version}</h2></div><div><p>{releaseSummaries[slug] ?? "Check the official release notes for changes and available packages."}</p><p>The official product page may list an earlier build. A new release does not change the app’s development status.</p><a href={release.url} target="_blank" rel="noreferrer">Read the official release notes →</a></div></aside>;
}
