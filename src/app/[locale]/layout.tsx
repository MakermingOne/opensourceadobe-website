import { notFound } from "next/navigation";
import { SiteDocument, metadata, viewport } from "@/components/site-document";
import { isLocale, translatedLocales } from "@/i18n/config";
export { metadata, viewport };
export const dynamicParams = false;
export function generateStaticParams() { return translatedLocales.map((locale) => ({ locale })); }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
