import { zhHantPages } from "./zh-Hant";
import { plPages } from "./pl";
import { dePages } from "./de";
import { hiPages } from "./hi";
import type { LocalizedPage } from "./types";
import type { Locale } from "@/i18n/config";

// Additional languages supply data here, never a second route tree.
export const pageContent: Partial<Record<Locale, Record<string, LocalizedPage>>> = { "zh-Hant": zhHantPages, pl: plPages, de: dePages, hi: hiPages };
export function getPageContent(locale: Locale, path: string): LocalizedPage | undefined { return pageContent[locale]?.[path]; }
