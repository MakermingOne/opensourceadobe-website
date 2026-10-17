"use client";
import { usePathname } from "next/navigation";
import { enabledLocales, locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <nav className="language-switcher" aria-label="Language">
    <details>
      <summary lang={locale}>{locales[locale].label} <span aria-hidden="true">⌄</span></summary>
      <ul>{enabledLocales.map((target) => <li key={target}>
        <a href={switchLocalePath(pathname, target)} hrefLang={target} lang={target} aria-current={locale === target ? "page" : undefined}>{locales[target].label}</a>
      </li>)}</ul>
    </details>
  </nav>;
}
