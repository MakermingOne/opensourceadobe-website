"use client";

import { usePathname } from "next/navigation";

export function FooterUpdatedDate({ dates, label = "Updated" }: { dates: Record<string, string>; label?: string }) {
  const pathname = usePathname();
  const path = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean).join("/")}/`;
  const date = dates[path];
  if (!date) return null;
  return <span>{label} <time dateTime={date} data-footer-updated>{date}</time></span>;
}
