import { notFound } from "next/navigation";
import { LocalizedPage } from "@/components/localized-page";
import { getPageContent } from "@/content/pages";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, localePath, localizedPaths, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { canonicalPath } from "@/lib/site";

type Params = { locale: string; segments?: string[] };
export const dynamicParams = false;
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return [...localizedPaths(params.locale).map((path) => ({ segments: path.split("/").filter(Boolean) })), { segments: ["404"] }];
}
async function resolve(params: Promise<Params>) {
  const { locale, segments = [] } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return { locale, path: canonicalPath(segments.join("/")) };
}
function LocalizedNotFound({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale];
  return <div className="container not-found"><h1>{copy.notFoundTitle}</h1><p>{copy.notFoundDescription}</p><a className="button" href={localePath(locale, "/")}>{copy.backHome}</a></div>;
}
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale, path } = await resolve(params);
  if (path === "/404/") return { title: dictionaries[locale].notFoundTitle, description: dictionaries[locale].notFoundDescription, robots: { index: false, follow: true } };
  const page = getPageContent(locale, path);
  if (!page) notFound();
  return pageMetadata({ title: page.title, description: page.description, path: localePath(locale, path), absoluteTitle: true });
}
export default async function LocalePage({ params }: { params: Promise<Params> }) {
  const { locale, path } = await resolve(params);
  if (path === "/404/") return <LocalizedNotFound locale={locale} />;
  const page = getPageContent(locale, path);
  if (!page || !localizedPaths(locale).includes(path)) notFound();
  return <LocalizedPage page={page} locale={locale} />;
}
