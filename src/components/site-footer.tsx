import Link from "next/link";
import { pageUpdateDates } from "@/content/page-dates";
import { FooterUpdatedDate } from "@/components/footer-updated-date";

import { dictionaries } from "@/i18n/dictionaries";
import { localePath, type Locale } from "@/i18n/config";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const copy = dictionaries[locale];
  const footerGroups = copy.footerGroups;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="wordmark wordmark--footer">OpenSource<span>Adobe</span></p>
          <p className="footer-note">{copy.footerNote}</p>
        </div>
        <nav aria-label={copy.footerNav} className="footer-links">
          {footerGroups.map((group, index) => <div className="footer-link-group" key={group.title}>
            <h2 id={`footer-group-${index}`}>{group.title}</h2>
            <ul aria-labelledby={`footer-group-${index}`}>{group.links.map((link) => <li key={link.href}>
              {link.href.endsWith(".xml") ? <a href={link.href}>{link.label}</a> : <Link href={localePath(locale, link.href)}>{link.label}</Link>}
            </li>)}</ul>
          </div>)}
        </nav>
        <div className="footer-meta">
          <span>{copy.evidence}</span>
          <FooterUpdatedDate dates={pageUpdateDates()} label={copy.updated} />
        </div>
      </div>
    </footer>
  );
}
