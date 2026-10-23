import { dailyUpdates, updatePath } from "@/content/updates";

// Dates of substantive editorial changes, not builds or source-access checks.
// Update this record when changing a page; body, footer and sitemap share it.
const editorialDates: Record<string, string> = {
  "/en-AU/": "2026-10-24",
  "/en-AU/alternatives/photoshop/": "2026-10-24",
  "/en-AU/apps/photocraft/": "2026-10-24",
  "/en-AU/download/": "2026-10-24",

  "/fr/": "2026-10-24",
  "/fr/alternatives/photoshop/": "2026-10-24",
  "/fr/apps/photocraft/": "2026-10-24",
  "/fr/download/": "2026-10-24",

  "/ja/": "2026-10-24",
  "/ja/alternatives/photoshop/": "2026-10-24",
  "/ja/apps/photocraft/": "2026-10-24",
  "/ja/download/": "2026-10-24",
  "/ko/": "2026-10-24",
  "/ko/alternatives/photoshop/": "2026-10-24",
  "/ko/apps/photocraft/": "2026-10-24",
  "/ko/download/": "2026-10-24",

  "/zh-Hant/vs-adobe/": "2026-10-24",
  "/pl/": "2026-10-24",
  "/pl/alternatives/photoshop/": "2026-10-24",
  "/pl/apps/photocraft/": "2026-10-24",
  "/pl/download/": "2026-10-24",
  "/de/": "2026-10-24",
  "/de/alternatives/photoshop/": "2026-10-24",
  "/de/apps/photocraft/": "2026-10-24",
  "/de/download/": "2026-10-24",
  "/hi/": "2026-10-24",
  "/hi/alternatives/photoshop/": "2026-10-24",
  "/hi/apps/photocraft/": "2026-10-24",
  "/hi/download/": "2026-10-24",

  "/zh-Hant/": "2026-10-24",
  "/zh-Hant/alternatives/photoshop/": "2026-10-24",
  "/zh-Hant/apps/photocraft/": "2026-10-24",
  "/zh-Hant/download/": "2026-10-24",
  "/": "2026-10-24",
  "/apps/": "2026-10-24",
  "/vs-adobe/": "2026-10-20",
  "/download/": "2026-10-24",
  "/tutorials/": "2026-10-20",
  "/faq/": "2026-10-18",
  "/apps/photocraft/": "2026-10-24",
  "/apps/vectorcraft/": "2026-10-24",
  "/apps/filmcraft/": "2026-10-24",
  "/apps/lightcraft/": "2026-10-24",
  "/apps/pdfcraft/": "2026-10-24",
  "/apps/effectcraft/": "2026-10-24",
  "/apps/designcraft/": "2026-10-24",
  "/apps/figcraft/": "2026-10-24",
  "/apps/wordcraft/": "2026-10-24",
  "/apps/soundcraft/": "2026-10-24",
  "/apps/deckcraft/": "2026-10-24",
  "/apps/cadcraft/": "2026-10-24",
  "/apps/gridcraft/": "2026-10-24",
  "/brandon-thomas/": "2026-10-18",
  "/about/": "2026-10-11",
  "/contact/": "2026-10-13",
  "/disclaimer/": "2026-10-11",
  "/privacy/": "2026-10-11",
  "/alternatives/": "2026-10-20",
  "/alternatives/photoshop/": "2026-10-15",
  "/alternatives/lightroom/": "2026-10-15",
  "/alternatives/illustrator/": "2026-10-20",
  "/alternatives/acrobat/": "2026-10-20",
  "/alternatives/after-effects/": "2026-10-20",
  "/alternatives/indesign/": "2026-10-20",
  "/alternatives/substance-painter/": "2026-10-20",
  "/artcraft/": "2026-10-20",
  "/artcraft/pricing/": "2026-10-20",
  "/artcraft/safety/": "2026-10-24",
  "/artcraft/alternatives/": "2026-10-20",
  "/artcraft/photocraft-how-to-use/": "2026-10-24",
  "/github/": "2026-10-24",
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
