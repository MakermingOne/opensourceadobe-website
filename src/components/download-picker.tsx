"use client";
import { useState } from "react";
import { apps } from "@/content/apps";
import { officialAssetUrl, officialDownloads, type DownloadSlug } from "@/content/downloads";
import { frontendCopy } from "@/i18n/frontend";
import { localePath, localizedPaths, type Locale } from "@/i18n/config";

export function DownloadPicker({ locale = "en" }: { locale?: Locale }) {
  const [slug, setSlug] = useState<DownloadSlug>("photocraft");
  const [system, setSystem] = useState(0);
  const copy = frontendCopy[locale];
  const app = apps.find((item) => item.slug === slug)!;
  const release = officialDownloads[slug];
  const asset = release.packages[system];
  const guidePath = `/apps/${slug}/`;
  const guide = localizedPaths(locale).includes(guidePath) ? `${localePath(locale, guidePath)}#${locale === "en" ? "install" : "steps"}` : `https://github.com/storytold/${slug}/releases/tag/v${release.version}`;
  return <section className="download-picker" aria-labelledby="download-picker-heading">
    <h2 id="download-picker-heading">{copy.heading}</h2>
    <div className="download-picker__controls">
      <div><label htmlFor="download-app">{copy.app}</label><select id="download-app" value={slug} onChange={(event) => setSlug(event.target.value as DownloadSlug)}>{apps.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></div>
      <div><label htmlFor="download-system">{copy.system}</label><select id="download-system" value={system} onChange={(event) => setSystem(Number(event.target.value))}>{release.packages.map((item, index) => <option key={item.platform} value={index}>{item.platform}</option>)}</select></div>
    </div>
    <div className="download-picker__result" aria-live="polite" aria-atomic="true">
      <p><strong>{app.name} {release.version}</strong><span>{asset.platform} · {(asset.sizeBytes / 1024 / 1024).toFixed(1)} MB · {asset.filename.split(".").at(-1)?.toUpperCase()}</span></p>
      <a className="button" href={officialAssetUrl(slug, asset.filename)}>{copy.download} {app.name} ↗</a>
    </div>
    <div className="download-picker__links">{localizedPaths(locale).includes(guidePath) ? <a href={guide}>{copy.guide} →</a> : null}<a href={`https://github.com/storytold/${slug}/releases/tag/v${release.version}`}>{copy.packages} ↗</a></div>
    <p className="download-picker__note">{copy.note}</p>
    <noscript><p>{copy.packages}: <a href={`https://github.com/storytold/${slug}/releases/tag/v${release.version}`}>PhotoCraft</a>. {locale === "en" ? "JavaScript is off. Use the app links below to choose another download." : copy.note}</p></noscript>
  </section>;
}
