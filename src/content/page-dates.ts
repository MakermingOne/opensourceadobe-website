import { dailyUpdates, updatePath } from "@/content/updates";

// Dates of substantive editorial changes, not builds or source-access checks.
// Update this record when changing a page; body, footer and sitemap share it.
const editorialDates: Record<string, string> = {
  "/en-AU/": "2026-10-27",
  "/en-AU/alternatives/photoshop/": "2026-10-27",
  "/en-AU/apps/photocraft/": "2026-10-27",
  "/en-AU/download/": "2026-10-27",

  "/fr/": "2026-10-27",
  "/fr/alternatives/photoshop/": "2026-10-27",
  "/fr/apps/photocraft/": "2026-10-27",
  "/fr/download/": "2026-10-27",

  "/ja/": "2026-10-27",
  "/ja/alternatives/photoshop/": "2026-10-27",
  "/ja/apps/photocraft/": "2026-10-27",
  "/ja/download/": "2026-10-27",
  "/ko/": "2026-10-27",
  "/ko/alternatives/photoshop/": "2026-10-27",
  "/ko/apps/photocraft/": "2026-10-27",
  "/ko/download/": "2026-10-27",

  "/zh-Hant/vs-adobe/": "2026-10-27",
  "/pl/": "2026-10-27",
  "/pl/alternatives/photoshop/": "2026-10-27",
  "/pl/apps/photocraft/": "2026-10-27",
  "/pl/download/": "2026-10-27",
  "/de/": "2026-10-27",
  "/de/alternatives/photoshop/": "2026-10-27",
  "/de/apps/photocraft/": "2026-10-27",
  "/de/download/": "2026-10-27",
  "/hi/": "2026-10-27",
  "/hi/alternatives/photoshop/": "2026-10-27",
  "/hi/apps/photocraft/": "2026-10-27",
  "/hi/download/": "2026-10-27",

  "/zh-Hant/": "2026-10-27",
  "/zh-Hant/alternatives/photoshop/": "2026-10-27",
  "/zh-Hant/apps/photocraft/": "2026-10-27",
  "/zh-Hant/download/": "2026-10-27",
  "/": "2026-10-26",
  "/apps/": "2026-10-26",
  "/vs-adobe/": "2026-10-20",
  "/vs/gimp-vs-photoshop/": "2026-10-26",
  "/vs/photopea-vs-photoshop/": "2026-10-26",
  "/download/": "2026-10-26",
  "/tutorials/": "2026-10-20",
  "/faq/": "2026-10-18",
  "/apps/photocraft/": "2026-10-26",
  "/apps/vectorcraft/": "2026-10-26",
  "/apps/filmcraft/": "2026-10-26",
  "/apps/lightcraft/": "2026-10-27",
  "/apps/pdfcraft/": "2026-10-26",
  "/apps/effectcraft/": "2026-10-26",
  "/apps/designcraft/": "2026-10-26",
  "/apps/figcraft/": "2026-10-27",
  "/apps/wordcraft/": "2026-10-27",
  "/apps/soundcraft/": "2026-10-26",
  "/apps/deckcraft/": "2026-10-26",
  "/apps/cadcraft/": "2026-10-26",
  "/apps/gridcraft/": "2026-10-26",
  "/brandon-thomas/": "2026-10-18",
  "/about/": "2026-10-11",
  "/contact/": "2026-10-13",
  "/disclaimer/": "2026-10-11",
  "/privacy/": "2026-10-11",
  "/alternatives/": "2026-10-26",
  "/alternatives/premiere/": "2026-10-26",
  "/alternatives/photoshop/": "2026-10-15",
  "/alternatives/lightroom/": "2026-10-15",
  "/alternatives/illustrator/": "2026-10-20",
  "/alternatives/acrobat/": "2026-10-20",
  "/alternatives/after-effects/": "2026-10-20",
  "/alternatives/indesign/": "2026-10-20",
  "/alternatives/substance-painter/": "2026-10-20",
  "/artcraft/": "2026-10-20",
  "/artcraft/pricing/": "2026-10-20",
  "/artcraft/safety/": "2026-10-26",
  "/artcraft/alternatives/": "2026-10-20",
  "/artcraft/photocraft-how-to-use/": "2026-10-26",
  "/github/": "2026-10-26",
};

export function pageUpdateDates(): Record<string, string> {
  const issueDates = Object.fromEntries(dailyUpdates.map((issue) => [updatePath(issue.date), issue.modifiedDate ?? issue.date]));
  const latestJournalChange = Object.values(issueDates).sort().at(-1);
  return { ...editorialDates, ...issueDates, ...(latestJournalChange ? { "/updates/": latestJournalChange, "/": [editorialDates["/"], latestJournalChange].sort().at(-1)! } : {}) };
}

export function pageUpdatedAt(path: string): string {
  const normalized = path === "/" ? path : `/${path.split("/").filter(Boolean).join("/")}/`;
  const date = pageUpdateDates()[normalized];
  if (!date) throw new Error(`Missing editorial date for ${normalized}`);
  return date;
}
