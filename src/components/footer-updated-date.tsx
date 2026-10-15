"use client";

import { usePathname } from "next/navigation";

export function FooterUpdatedDate({ dates }: { dates: Record<string, string> }) {
  const pathname = usePathname();
  const path = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean).join("/")}/`;
  const date = dates[path];
  if (!date) return null;
  return <span>Updated <time dateTime={date} data-footer-updated>{date}</time></span>;
}
