import { releasesBySlug, releaseCheckedOn } from "@/content/releases";

const changes: Record<string, string> = {
  photocraft: "Release notes list system-printing changes, crop and straighten automation, grayscale export fixes and native-document saving changes. Test your own documents before relying on these fixes.",
  vectorcraft: "Release notes list artboard movement fixes and changes to PDF and Illustrator editing-data imports. Reliable layered Illustrator round-trips still need testing.",
  filmcraft: "Release notes list TTML caption timing, 32-bit audio export, raw ADTS AAC import and adjustment-layer transition changes. Direct Premiere project compatibility is still a documented gap.",
  lightcraft: "Release notes list selected-photo album creation, HEIC/HEIF/NRW folder import and filmstrip changes. Camera-color and migration limits still apply.",
  pdfcraft: "Release notes list font and Unicode fixes, text-editing changes and large-document handling improvements. Retest copies of your own documents; this remains alpha software.",
};

export function ReleaseNote({ slug }: { slug: string }) {
  const release = releasesBySlug.get(slug);
  if (!release) return null;
  const releaseCheckedAt = releaseCheckedOn(slug);
  return <aside className="method-note" aria-label="Latest release update"><div><p className="eyebrow">Latest GitHub release · Checked <time dateTime={releaseCheckedAt}>{releaseCheckedAt}</time></p><h2>Version {release.version}</h2></div><div><p>{changes[slug] ?? "Check the official release notes for changes and available packages."}</p><p>The official product page may list an earlier build. A new release does not change the app’s development status.</p><a href={release.url} target="_blank" rel="noreferrer">Read the official release notes →</a></div></aside>;
}
