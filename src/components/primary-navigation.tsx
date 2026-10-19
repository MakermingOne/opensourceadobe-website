"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { dictionaries } from "@/i18n/dictionaries";
import { frontendCopy } from "@/i18n/frontend";
import { localePath, type Locale } from "@/i18n/config";

export function PrimaryNavigation({ locale }: { locale: Locale }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const menu = useRef<HTMLDetailsElement>(null);
  const copy = dictionaries[locale];
  const links = copy.navigation.map((item) => {
    const href = localePath(locale, item.href);
    const normalized = href.replace(/\/$/, "") || "/";
    const exact = pathname === normalized;
    const active = exact || (item.href !== "/" && pathname.startsWith(`${normalized}/`));
    return <li key={href}><Link href={href} aria-current={exact ? "page" : active ? "location" : undefined} onClick={() => { if (menu.current) menu.current.open = false; }}>{item.label}</Link></li>;
  });
  return <nav className="site-navigation" aria-label={copy.primaryNav}>
    <ul className="primary-nav desktop-primary-nav">{links}</ul>
    <details className="mobile-menu" ref={menu} onKeyDown={(event) => { if (event.key === "Escape" && menu.current?.open) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
      <summary>{frontendCopy[locale].menu}<span aria-hidden="true">☰</span></summary>
      <ul className="primary-nav mobile-primary-nav">{links}</ul>
    </details>
  </nav>;
}
