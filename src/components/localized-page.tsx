import { DownloadPicker } from "@/components/download-picker";
import { appGuideHref } from "@/i18n/app-links";
import { JsonLd } from "@/components/json-ld";
import { apps, appsBySlug } from "@/content/apps";
import type { LocalizedLink, LocalizedPage as PageContent } from "@/content/pages/types";
import { pageUpdatedAt } from "@/content/page-dates";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath, localizedPaths, type Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";

function contentHref(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [path, hash] = href.split("#");
  if (!localizedPaths(locale).includes(path)) throw new Error(`Unpublished localized link: ${locale} ${href}`);
  return `${localePath(locale, path)}${hash ? `#${hash}` : ""}`;
}
function RelatedLinks({ links, locale }: { links?: LocalizedLink[]; locale: Locale }) {
  if (!links?.length) return null;
  return <ul className="related-links">{links.map((link) => <li key={link.href}><a href={contentHref(locale, link.href)}>{link.label}</a></li>)}</ul>;
}

export function LocalizedPage({ page, locale }: { page: PageContent; locale: Locale }) {
  const copy = dictionaries[locale];
  const appCopy = "appTable" in copy ? copy : null;
  const appRows = appCopy ? apps.map((app) => ({
    app,
    cells: [app.name, app.adobeCounterpart.startsWith("None") || app.slug === "figcraft" ? appCopy.appTable.noCounterpart : app.adobeCounterpart, appCopy.appCategories[app.slug as keyof typeof appCopy.appCategories], app.platforms.join(" · "), app.status in appCopy.statuses ? appCopy.statuses[app.status as keyof typeof appCopy.statuses] : app.status],
  })) : [];
  const date = pageUpdatedAt(localePath(locale, page.path));
  const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: copy.navigation[0].label, item: absoluteUrl(localePath(locale, "/")) }, ...(page.path === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(localePath(locale, page.path)) }])];
  const tables = page.sections.flatMap((section) => section.table ? [{ name: section.table.caption, rows: section.table.rows }] : section.kind === "apps" && appCopy ? [{ name: appCopy.appTable.caption, rows: appRows.map((row) => row.cells) }] : []);
  const application = page.path === "/apps/photocraft/" ? appsBySlug.get("photocraft") : null;
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", name: page.title, description: page.description, url: absoluteUrl(localePath(locale, page.path)), inLanguage: locale, dateModified: date },
      { "@type": "BreadcrumbList", itemListElement: breadcrumbItems },
      { "@type": "FAQPage", inLanguage: locale, mainEntity: page.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      ...tables.map((table) => ({ "@type": "ItemList", name: table.name, itemListElement: table.rows.map((row, index) => ({ "@type": "ListItem", position: index + 1, name: row.join(" · ") })) })),
      ...(application ? [{ "@type": "SoftwareApplication", name: application.name, applicationCategory: "MultimediaApplication", operatingSystem: application.platforms.join(", "), url: application.officialPage, downloadUrl: `${application.repository}/releases`, description: page.intro[0], offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }] : []),
    ] }} />
    <article className={`container page-shell localized-page${page.path === "/download/" ? " download-page" : ""}`}>
      <nav className="breadcrumbs" aria-label={copy.breadcrumb}><a href={localePath(locale, "/")}>{copy.navigation[0].label}</a>{page.path !== "/" ? <span aria-current="page"> / {page.h1}</span> : null}</nav>
      <header className={`page-intro${page.path === "/download/" ? " download-intro" : ""}`}><p className="eyebrow">{copy.identity}</p><h1>{page.h1}</h1>{page.intro.map((text) => <p className="lede" key={text}>{text}</p>)}<p className="updated">{copy.updated}{copy.dateSeparator}<time dateTime={date} data-page-updated>{date}</time></p></header>
      {page.path === "/download/" ? <DownloadPicker locale={locale} /> : null}
      {page.sections.map((section) => <section className="content-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
        <h2 id={`${section.id}-heading`}>{section.heading}</h2>
        {section.paragraphs.map((text) => <p key={text}>{text}</p>)}
        {section.kind === "apps" && appCopy ? <div className="table-scroll" role="region" aria-label={appCopy.appTable.caption} tabIndex={0}><table><caption>{appCopy.appTable.caption}</caption><thead><tr>{appCopy.appTable.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{appRows.map(({ app, cells }) => <tr key={app.slug}><th scope="row"><a href={appGuideHref(locale, app)}>{cells[0]}</a></th>{cells.slice(1).map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div> : null}
        {section.table ? <div className="table-scroll" role="region" aria-label={section.table.caption} tabIndex={0}><table><caption>{section.table.caption}</caption><thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div> : null}
        <RelatedLinks links={section.links} locale={locale} />
      </section>)}
      <section className="content-section" id="faq" aria-labelledby="faq-heading"><h2 id="faq-heading">{copy.faq}</h2>{page.faq.map((faq) => <article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</section>
      <section className="content-section" id="sources" aria-labelledby="sources-heading"><h2 id="sources-heading">{copy.sources}</h2><ul className="source-links">{page.sources.map((source) => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}</ul></section>
      <p className="locale-counterpart"><a href={localePath("en", page.path)} hrefLang="en" lang="en">{copy.englishVersion}</a></p>
    </article>
  </>;
}
