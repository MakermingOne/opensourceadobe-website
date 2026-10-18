"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { enabledLocales, locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <nav className="language-switcher" aria-label="Language">
    <details>
      <summary lang={locale}><Image className="language-flag" src={locales[locale].flag} width={20} height={15} alt="" unoptimized />{locales[locale].label} <span aria-hidden="true">⌄</span></summary>
      <ul>{enabledLocales.map((target) => <li key={target}>
        <a href={switchLocalePath(pathname, target)} hrefLang={target} lang={target} aria-current={locale === target ? "page" : undefined}><Image className="language-flag" src={locales[target].flag} width={20} height={15} alt="" unoptimized />{locales[target].label}</a>
      </li>)}</ul>
    </details>
  </nav>;
}
