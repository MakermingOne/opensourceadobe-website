import { dailyUpdates, updatePath } from "@/content/updates";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";
function escapeXml(value: string) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;"); }
export function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>OpenSourceAdobe — ArtCraft Updates</title><link>${absoluteUrl("/updates/")}</link><description>Official releases, new apps and development changes with practical workflow notes.</description><language>en</language>
<atom:link href="${siteConfig.url}/updates/feed.xml" rel="self" type="application/rss+xml"/>
${dailyUpdates.map((issue) => `<item><title>${escapeXml(issue.title)}</title><link>${absoluteUrl(updatePath(issue.date))}</link><guid isPermaLink="true">${absoluteUrl(updatePath(issue.date))}</guid><description>${escapeXml(`${issue.date}: ${issue.description}`)}</description></item>`).join("\n")}
</channel></rss>`;
  return new Response(rss, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
