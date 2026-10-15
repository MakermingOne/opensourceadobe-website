import Link from "next/link";
import { officialAssetUrl, officialDownloads, type DownloadSlug } from "@/content/downloads";
import { releaseCheckedOn, releasesBySlug } from "@/content/releases";
import { Eyebrow } from "@/components/eyebrow";

export function OfficialDownloads({ slug, name }: { slug: DownloadSlug; name: string }) {
  const record = officialDownloads[slug];
  const releaseUrl = `https://github.com/storytold/${slug}/releases/tag/v${record.version}`;
  const launcher = releasesBySlug.get("craft-launcher")!;

  return <section className="landing-section" aria-labelledby="download-heading">
    <div className="landing-heading">
      <Eyebrow>Official downloads · Checked {releaseCheckedOn(slug)}</Eyebrow>
      <h2 id="download-heading">Download {name} for your computer</h2>
      <p>Choose a standalone package below, or use ArtCraft Launcher to install and update the Crafting Apps together. These links go directly to official GitHub assets; OpenSourceAdobe does not host installers.</p>
    </div>
    <div className="platform-grid platform-grid--3">
      {record.packages.map((item) => <article key={item.platform}>
        <h3>{item.platform}</h3>
        <p>{item.description}</p>
        <p><a href={officialAssetUrl(slug, item.filename)}>Download {name} for {item.platform} ↗</a></p>
      </article>)}
    </div>
    <div className="download-cta">
      <div><strong>Standalone version {record.version}</strong><span>Free · MIT or Apache-2.0 · Alpha software</span></div>
      <a className="button button--light" href={releaseUrl} target="_blank" rel="noreferrer">All packages and release notes ↗</a>
    </div>
    <div className="prose">
      <p>Need Windows ARM64 or x86, a portable ZIP, Linux ARM64, DEB, RPM or Flatpak? Open the <a href={releaseUrl} target="_blank" rel="noreferrer">full release asset list</a> and match the package to your system. Linux requirements vary; read the repository’s download notes before installing. The WebAssembly ZIP is a self-hostable build, not a ready-to-use hosted web editor.</p>
      <p>The official product page may show an older version. The buttons above use the GitHub release checked on {releaseCheckedOn(slug)}. For newer builds, check <a href={`https://github.com/storytold/${slug}/releases/latest`} target="_blank" rel="noreferrer">the latest official release</a>. Compare your downloaded file with <a href={officialAssetUrl(slug, "SHA256SUMS.txt")}>SHA256SUMS.txt</a>; matching a checksum checks file integrity, not whether an alpha app is suitable for sensitive work.</p>
      <p>Prefer one installer for the family? <a href={launcher.url} target="_blank" rel="noreferrer">ArtCraft Launcher {launcher.version}</a> is a separate project. Use our <Link href="/github/">ArtCraft GitHub directory</Link> to find its source code, or browse <Link href="/download/">all app downloads</Link>.</p>
    </div>
  </section>;
}
