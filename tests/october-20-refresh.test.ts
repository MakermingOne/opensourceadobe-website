import { describe, expect, it } from 'vitest';
import { dailyUpdates, latestUpdateDate } from '@/content/updates';
import { releasesBySlug } from '@/content/releases';
import { officialDownloads, type DownloadSlug } from '@/content/downloads';
import { translatedLocales } from '@/i18n/config';
import { getPageContent } from '@/content/pages';

const versions = {"filmcraft": "0.20.1", "vectorcraft": "0.24.1", "photocraft": "0.23.1", "lightcraft": "0.21.1", "pdfcraft": "0.21.1", "effectcraft": "0.24.1", "designcraft": "0.20.1", "figcraft": "0.18.1", "wordcraft": "0.18.1", "soundcraft": "0.20.1", "deckcraft": "0.18.1", "cadcraft": "0.20.1", "gridcraft": "0.19.1", "craft-launcher": "0.19.2"};
describe('October 20 verified release and community refresh', () => {
 it('records published assets instead of newer release-named development commits', () => {
  for (const [slug, version] of Object.entries(versions)) {
   expect(releasesBySlug.get(slug)?.version).toBe(version);
   if (slug !== 'craft-launcher') {
    const snapshot = officialDownloads[slug as DownloadSlug];
    expect(snapshot.version).toBe(version);
    expect(snapshot.checkedAt).toBe("2026-11-15");
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
