"use client";
import { usePathname } from "next/navigation";
import { enabledLocales, locales, switchLocalePath, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <nav className="language-switcher" aria-label="Language">{enabledLocales.map((target) =>
    <a key={target} href={switchLocalePath(pathname, target)} hrefLang={target} lang={target} aria-current={locale === target ? "page" : undefined}>{locales[target].label}</a>
  )}</nav>;
}
