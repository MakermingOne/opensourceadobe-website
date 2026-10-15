import { pageUpdatedAt } from "@/content/page-dates";

export function PageUpdated({ path, long = false }: { path: string; long?: boolean }) {
  const date = pageUpdatedAt(path);
  const label = long ? new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`)) : date;
  return <time dateTime={date} data-page-updated>{label}</time>;
}
