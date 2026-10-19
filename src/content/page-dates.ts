import { dailyUpdates, updatePath } from "@/content/updates";

// Dates of substantive editorial changes, not builds or source-access checks.
// Update this record when changing a page; body, footer and sitemap share it.
const editorialDates: Record<string, string> = {
  "/ja/": "2026-10-18",
  "/ja/alternatives/photoshop/": "2026-10-18",
  "/ja/apps/photocraft/": "2026-10-18",
  "/ja/download/": "2026-10-18",
  "/ko/": "2026-10-18",
  "/ko/alternatives/photoshop/": "2026-10-18",
  "/ko/apps/photocraft/": "2026-10-18",
  "/ko/download/": "2026-10-18",

  "/zh-Hant/vs-adobe/": "2026-10-18",
  "/pl/": "2026-10-17",
  "/pl/alternatives/photoshop/": "2026-10-17",
  "/pl/apps/photocraft/": "2026-10-17",
  "/pl/download/": "2026-10-17",
  "/de/": "2026-10-17",
  "/de/alternatives/photoshop/": "2026-10-17",
  "/de/apps/photocraft/": "2026-10-17",
  "/de/download/": "2026-10-17",
  "/hi/": "2026-10-17",
  "/hi/alternatives/photoshop/": "2026-10-17",
  "/hi/apps/photocraft/": "2026-10-17",
  "/hi/download/": "2026-10-17",

  "/zh-Hant/": "2026-10-18",
  "/zh-Hant/alternatives/photoshop/": "2026-10-17",
  "/zh-Hant/apps/photocraft/": "2026-10-17",
  "/zh-Hant/download/": "2026-10-17",
  "/": "2026-10-18",
  "/apps/": "2026-10-17",
  "/vs-adobe/": "2026-10-17",
  "/download/": "2026-10-17",
  "/tutorials/": "2026-10-19",
  "/learn/ai-history-1955/": "2026-10-19",
  "/faq/": "2026-10-18",
  "/apps/photocraft/": "2026-10-17",
  "/apps/vectorcraft/": "2026-10-17",
  "/apps/filmcraft/": "2026-10-17",
  "/apps/lightcraft/": "2026-10-17",
  "/apps/pdfcraft/": "2026-10-17",
  "/apps/effectcraft/": "2026-10-17",
  "/apps/designcraft/": "2026-10-17",
  "/apps/figcraft/": "2026-10-17",
  "/apps/wordcraft/": "2026-10-17",
  "/apps/soundcraft/": "2026-10-17",
  "/apps/deckcraft/": "2026-10-17",
  "/apps/cadcraft/": "2026-10-17",
  "/apps/gridcraft/": "2026-10-17",
  "/brandon-thomas/": "2026-10-18",
  "/about/": "2026-10-11",
  "/contact/": "2026-10-13",
  "/disclaimer/": "2026-10-11",
  "/privacy/": "2026-10-11",
  "/alternatives/": "2026-10-15",
  "/alternatives/photoshop/": "2026-10-15",
  "/alternatives/lightroom/": "2026-10-15",
  "/github/": "2026-10-18",
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
