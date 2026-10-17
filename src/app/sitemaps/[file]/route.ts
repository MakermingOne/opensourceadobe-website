import { notFound } from "next/navigation";
import { enabledLocales, isLocale } from "@/i18n/config";
import { sitemapXml } from "@/lib/sitemap";
export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return enabledLocales.map((locale) => ({ file: `${locale}.xml` })); }
export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const locale = file.replace(/\.xml$/, "");
  if (!file.endsWith(".xml") || !isLocale(locale)) notFound();
  return new Response(sitemapXml(locale), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
