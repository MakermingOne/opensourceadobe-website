import { describe, expect, it } from 'vitest';
import { dailyUpdates, latestUpdateDate } from '@/content/updates';
import { releasesBySlug } from '@/content/releases';
import { officialDownloads, type DownloadSlug } from '@/content/downloads';
import { translatedLocales } from '@/i18n/config';
import { getPageContent } from '@/content/pages';

const versions = {"filmcraft": "0.14.0", "vectorcraft": "0.18.0", "photocraft": "0.17.0", "lightcraft": "0.15.0", "pdfcraft": "0.15.0", "effectcraft": "0.18.0", "designcraft": "0.14.0", "figcraft": "0.12.1", "wordcraft": "0.12.0", "soundcraft": "0.14.0", "deckcraft": "0.12.0", "cadcraft": "0.14.0", "gridcraft": "0.13.0", "craft-launcher": "0.9.0"};
describe('October 20 verified release and community refresh', () => {
 it('records published assets instead of newer release-named development commits', () => {
  for (const [slug, version] of Object.entries(versions)) {
   expect(releasesBySlug.get(slug)?.version).toBe(version);
   if (slug !== 'craft-launcher') {
    const snapshot = officialDownloads[slug as DownloadSlug];
    expect(snapshot.version).toBe(version);
    expect(snapshot.checkedAt).toBe("2026-10-30");
    expect(snapshot.packages.every(p => p.filename.includes(version) && p.sizeBytes > 0)).toBe(true);
   }
  }
 });
 it('preserves release event dates and separates unversioned community reports', () => {
  expect(latestUpdateDate >= '2026-10-22').toBe(true);
  const issue = dailyUpdates.find(i => i.date === '2026-10-20')!;
  expect(issue.entries.filter(e => e.kind === 'Official release')).toHaveLength(14);
  expect(issue.entries.filter(e => e.kind === 'Official release').every(e => ['2026-10-17', '2026-10-18'].includes(e.eventDate!))).toBe(true);
  expect(issue.entries.filter(e => e.kind === 'Community report')).toHaveLength(2);
  expect(issue.introduction).toContain('not new October 20 releases');
  expect(issue.introduction).toContain('limited');
  expect(new Set(dailyUpdates.map(i => i.date)).size).toBe(dailyUpdates.length);
 });
 it('provides a local-language digest linked to the English brief without inventing translated routes', () => {
  for (const locale of translatedLocales) for (const path of ['/', '/apps/photocraft/', '/download/']) {
   const section = getPageContent(locale, path)?.sections.find(s => s.id === 'update-2026-10-20');
   expect(section?.paragraphs.join(' ')).toContain('0.10.0');
   expect(section?.links?.some(l => l.href === 'https://opensourceadobe.com/updates/2026-10-20/')).toBe(true);
  }
 });
});
