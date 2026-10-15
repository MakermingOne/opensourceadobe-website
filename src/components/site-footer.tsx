import Link from "next/link";
import { latestUpdateDate } from "@/content/updates";

const footerGroups = [
  { title: "Apps & downloads", links: [{ href: "/apps/", label: "Apps" }, { href: "/download/", label: "Download" }, { href: "/github/", label: "GitHub" }] },
  { title: "Compare & learn", links: [{ href: "/alternatives/", label: "Alternatives" }, { href: "/vs-adobe/", label: "Compare" }, { href: "/tutorials/", label: "Tutorials" }, { href: "/faq/", label: "FAQ" }] },
  { title: "Updates & site", links: [{ href: "/updates/", label: "Updates" }, { href: "/updates/feed.xml", label: "RSS" }, { href: "/about/", label: "About" }, { href: "/contact/", label: "Contact" }, { href: "/disclaimer/", label: "Disclaimer" }, { href: "/privacy/", label: "Privacy" }] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="wordmark wordmark--footer">OpenSource<span>Adobe</span></p>
          <p className="footer-note">An independent guide. Not affiliated with Adobe or ArtCraft.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          {footerGroups.map((group, index) => <div className="footer-link-group" key={group.title}>
            <h2 id={`footer-group-${index}`}>{group.title}</h2>
            <ul aria-labelledby={`footer-group-${index}`}>{group.links.map((link) => <li key={link.href}>
              {link.href.endsWith(".xml") ? <a href={link.href}>{link.label}</a> : <Link href={link.href}>{link.label}</Link>}
            </li>)}</ul>
          </div>)}
        </nav>
        <div className="footer-meta">
          <span>Evidence before enthusiasm.</span>
          <span>Latest brief: <time dateTime={latestUpdateDate}>{latestUpdateDate}</time></span>
        </div>
      </div>
    </footer>
  );
}
