import Link from "next/link";

import { dictionaries } from "@/i18n/dictionaries";
import { localePath, type Locale } from "@/i18n/config";
import { PrimaryNavigation } from "@/components/primary-navigation";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const copy = dictionaries[locale];
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
        <PrimaryNavigation locale={locale} />
      </div>
    </header>
  );
}
