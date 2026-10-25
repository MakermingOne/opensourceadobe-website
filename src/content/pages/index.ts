import { october26Digest } from "./october-26-notes";
import { october25Digest } from "./october-25-notes";
import { october24Digest } from "./october-24-notes";
import { october23Digest } from "./october-23-notes";
import { october22Digest } from "./october-22-notes";
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
  const digests = [october26Digest(locale), october25Digest(locale), october24Digest(locale), october23Digest(locale), october22Digest(locale), october20Digest(locale)].filter((digest): digest is NonNullable<typeof digest> => !!digest);
  return page && digests.length ? { ...page, sections: [...digests, ...page.sections] } : page;
}
