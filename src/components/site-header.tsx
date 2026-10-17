import Link from "next/link";

import { dictionaries } from "@/i18n/dictionaries";
import { localePath, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const copy = dictionaries[locale];
  const navigation = copy.navigation;
  return (
    <header className="site-header">
      <div className="identity-bar">
        <div className="container identity-bar__inner">
          <span className="identity-mark" aria-hidden="true" />
          <span>{copy.identity}</span>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
      <div className="container header-main">
        <Link href={localePath(locale, "/")} className="wordmark" aria-label={copy.homeLabel}>
          OpenSource<span>Adobe</span>
        </Link>
        <nav aria-label={copy.primaryNav}>
          <ul className="primary-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={localePath(locale, item.href)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
