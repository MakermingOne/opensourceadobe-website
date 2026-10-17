import type { AppRecord } from "@/content/types";
import { localePath, localizedPaths, type Locale } from "./config";

// App catalog publication in English does not imply a translated guide exists.
export function appGuideHref(locale: Locale, app: Pick<AppRecord, "slug" | "officialPage">): string {
  const path = `/apps/${app.slug}/`;
  return localizedPaths(locale).includes(path) ? localePath(locale, path) : app.officialPage;
}
