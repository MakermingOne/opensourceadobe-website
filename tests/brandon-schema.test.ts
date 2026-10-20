import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import BrandonThomasPage from '@/app/(en)/brandon-thomas/page';
import { pageUpdatedAt } from '@/content/page-dates';

it('describes an independent biography as an Article about a Person with valid zoned timestamps', () => {
 const html=renderToStaticMarkup(createElement(BrandonThomasPage));
 const graph=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].flatMap(match=>JSON.parse(match[1])['@graph']??[]);
 expect(graph.some(entity=>entity['@type']==='ProfilePage')).toBe(false);
 const article=graph.find(entity=>entity['@type']==='Article');
 const person=graph.find(entity=>entity['@type']==='Person');
 expect(article).toBeDefined();
 expect(article.about['@id']).toBe(person['@id']);
 expect(article.dateCreated).toBeUndefined();
 expect(article.author.name).toBe('OpenSourceAdobe');
 for(const field of ['datePublished','dateModified']) {
  expect(article[field]).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/);
  expect(Number.isFinite(Date.parse(article[field]))).toBe(true);
 }
 expect(Date.parse(article.dateModified)).toBeGreaterThanOrEqual(Date.parse(article.datePublished));
 expect(article.dateModified.slice(0,10)).toBe(pageUpdatedAt('/brandon-thomas/'));
 expect(article.datePublished.slice(0,10)).toBe('2026-10-18');
});
