import { dailyUpdates, updatePath } from "@/content/updates";

// Dates of substantive editorial changes, not builds or source-access checks.
// Update this record when changing a page; body, footer and sitemap share it.
const editorialDates: Record<string, string> = {
  "/en-AU/": "2026-10-20",
  "/en-AU/alternatives/photoshop/": "2026-10-20",
  "/en-AU/apps/photocraft/": "2026-10-20",
  "/en-AU/download/": "2026-10-20",

  "/fr/": "2026-10-20",
  "/fr/alternatives/photoshop/": "2026-10-20",
  "/fr/apps/photocraft/": "2026-10-20",
  "/fr/download/": "2026-10-20",

  "/ja/": "2026-10-20",
  "/ja/alternatives/photoshop/": "2026-10-20",
  "/ja/apps/photocraft/": "2026-10-20",
  "/ja/download/": "2026-10-20",
  "/ko/": "2026-10-20",
  "/ko/alternatives/photoshop/": "2026-10-20",
  "/ko/apps/photocraft/": "2026-10-20",
  "/ko/download/": "2026-10-20",

  "/zh-Hant/vs-adobe/": "2026-10-20",
  "/pl/": "2026-10-20",
  "/pl/alternatives/photoshop/": "2026-10-20",
  "/pl/apps/photocraft/": "2026-10-20",
  "/pl/download/": "2026-10-20",
  "/de/": "2026-10-20",
  "/de/alternatives/photoshop/": "2026-10-20",
  "/de/apps/photocraft/": "2026-10-20",
  "/de/download/": "2026-10-20",
  "/hi/": "2026-10-20",
  "/hi/alternatives/photoshop/": "2026-10-20",
  "/hi/apps/photocraft/": "2026-10-20",
  "/hi/download/": "2026-10-20",

  "/zh-Hant/": "2026-10-20",
  "/zh-Hant/alternatives/photoshop/": "2026-10-20",
  "/zh-Hant/apps/photocraft/": "2026-10-20",
  "/zh-Hant/download/": "2026-10-20",
  "/": "2026-10-20",
  "/apps/": "2026-10-20",
  "/vs-adobe/": "2026-10-20",
  "/download/": "2026-10-20",
  "/tutorials/": "2026-10-20",
  "/learn/ai-history-1955/": "2026-10-19",
  "/faq/": "2026-10-18",
  "/apps/photocraft/": "2026-10-20",
  "/apps/vectorcraft/": "2026-10-20",
  "/apps/filmcraft/": "2026-10-20",
  "/apps/lightcraft/": "2026-10-20",
  "/apps/pdfcraft/": "2026-10-20",
  "/apps/effectcraft/": "2026-10-20",
  "/apps/designcraft/": "2026-10-20",
  "/apps/figcraft/": "2026-10-20",
  "/apps/wordcraft/": "2026-10-20",
  "/apps/soundcraft/": "2026-10-20",
  "/apps/deckcraft/": "2026-10-20",
  "/apps/cadcraft/": "2026-10-20",
  "/apps/gridcraft/": "2026-10-20",
  "/brandon-thomas/": "2026-10-18",
  "/about/": "2026-10-11",
  "/contact/": "2026-10-13",
  "/disclaimer/": "2026-10-11",
  "/privacy/": "2026-10-11",
  "/alternatives/": "2026-10-19",
  "/alternatives/photoshop/": "2026-10-15",
  "/alternatives/lightroom/": "2026-10-15",
  "/github/": "2026-10-20",
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
