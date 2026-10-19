import Link from "next/link";
import { officialAssetUrl, officialDownloads, type DownloadSlug } from "@/content/downloads";
import { releasesBySlug } from "@/content/releases";
import { Eyebrow } from "@/components/eyebrow";

export function OfficialDownloads({ slug, name, platformNotes }: { slug: DownloadSlug; name: string; platformNotes?: Array<[string, string]> }) {
  const record = officialDownloads[slug];
  const releaseUrl = `https://github.com/storytold/${slug}/releases/tag/v${record.version}`;
  const launcher = releasesBySlug.get("craft-launcher")!;

  return <section className="landing-section" aria-labelledby="download-heading">
    <div className="landing-heading">
      <Eyebrow>Official GitHub assets · Checked {record.checkedAt}</Eyebrow>
      <h2 id="download-heading">Download {name} for your computer</h2>
      <p>Free and open source. Choose your system below; every download comes directly from the official storytold/{slug} repository. We do not host or repackage installers.</p>
      <p><strong>Version {record.version}</strong> · Released <time dateTime={record.publishedAt}>{record.publishedAt.slice(0, 10)}</time> · <a href={`https://github.com/storytold/${slug}/releases/latest`} target="_blank" rel="noreferrer">Check for a newer release ↗</a></p>
    </div>
    <div className="platform-grid platform-grid--3">
      {record.packages.map((item) => <article key={item.platform}>
        <h3>{item.platform}</h3>
        <p>{item.description}</p>
        <p>{(item.sizeBytes / 1024 / 1024).toFixed(1)} MB · v{record.version}</p>
        <p><a className="button" href={officialAssetUrl(slug, item.filename)}>Download {name} for {item.platform} ↗</a></p>
      </article>)}
    </div>
    <p>Windows ARM64 or 32-bit PC? Linux ARM64, DEB, RPM, Flatpak or a portable Windows ZIP? <a href={releaseUrl} target="_blank" rel="noreferrer">Choose another package in the full release ↗</a>. Match the architecture to your computer; the buttons above are not suitable for every device.</p>
    <details className="install-guide" id="install">
      <summary>How to install {name} on Windows, macOS or Linux</summary>
      <div className="platform-grid platform-grid--3">
        <article><h3>Windows</h3><ol><li>Check Settings → System → About for your system type. The button above is for x64 Intel/AMD PCs.</li><li>Download the MSI and run it, then follow the installer.</li><li>Launch {name} and open a copied test file. For ARM PCs, 32-bit systems or a portable ZIP, use the full release list.</li></ol></article>
        <article><h3>macOS</h3><ol><li>Download the universal DMG and open it.</li><li>Drag {name} to Applications, then launch it.</li><li>If macOS blocks the app, verify the source and read the official repository’s signing and installation notes before proceeding.</li></ol></article>
        <article><h3>Linux</h3><ol><li>Download the AppImage that matches your processor. The button above is for x86_64.</li><li>In file properties, allow execution as a program, then launch it.</li><li>If it does not start, read the repository’s system-library and FUSE requirements, or choose a documented DEB, RPM or Flatpak package.</li></ol></article>
      </div>
      {platformNotes && <div className="prose"><h3>App-specific platform requirements</h3>{platformNotes.map(([platform, note]) => <p key={platform}><strong>{platform}:</strong> {note}</p>)}</div>}
      <p>Before opening important work, compare the downloaded file with the release’s <a href={officialAssetUrl(slug, "SHA256SUMS.txt")}>SHA256SUMS.txt</a>. Open a copy, save or export it, and inspect the output in another app. We checked package availability; we have not run every installer or independently tested production compatibility.</p>
    </details>
    <div className="download-cta">
      <div><strong>Standalone version {record.version}</strong><span>Free · MIT or Apache-2.0 · Development software</span></div>
      <a className="button button--light" href={releaseUrl} target="_blank" rel="noreferrer">All packages and release notes ↗</a>
    </div>
    <p>Installing several tools? <a href={launcher.url} target="_blank" rel="noreferrer">ArtCraft Launcher {launcher.version}</a> is a separate project; check its supported app list. The WebAssembly ZIP is a self-hostable build, not a hosted web editor. Browse <Link href="/download/">all 13 download guides</Link> or find repositories in our <Link href="/github/">GitHub directory</Link>.</p>
  </section>;
}
