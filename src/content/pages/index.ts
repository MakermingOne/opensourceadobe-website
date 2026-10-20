import { october20Digest } from "./october-20-notes";
import { zhHantPages } from "./zh-Hant";
import { plPages } from "./pl";
import { dePages } from "./de";
import { hiPages } from "./hi";
import { jaPages } from "./ja";
import { koPages } from "./ko";
import { frPages } from "./fr";
import { enAUPages } from "./en-AU";
import type { LocalizedPage } from "./types";
import type { Locale } from "@/i18n/config";

// Additional languages supply data here, never a second route tree.
export const pageContent: Partial<Record<Locale, Record<string, LocalizedPage>>> = { "zh-Hant": zhHantPages, pl: plPages, de: dePages, hi: hiPages, ja: jaPages, ko: koPages, fr: frPages, "en-AU": enAUPages };
export function getPageContent(locale: Locale, path: string): LocalizedPage | undefined {
  const page = pageContent[locale]?.[path];
  const digest = october20Digest(locale);
  return page && digest ? { ...page, sections: [digest, ...page.sections] } : page;
}
