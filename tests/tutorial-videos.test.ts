import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import TutorialsPage from '@/app/(en)/tutorials/page';

it('retains the requested video links and provenance in the unified media library', () => {
 const html = renderToStaticMarkup(createElement(TutorialsPage));
 expect(html).toContain('id="video-library"');
 expect(html).toContain('id="illustrated-guides"');
 expect(html).toContain('id="reading-library"');
 expect(html.indexOf('id="video-library"')).toBeLessThan(html.indexOf('id="paths-heading"'));
 for (const id of ['ZASPqlqUBQc','t8F-sy_zyK4','oL4_LZxnTRA','ZKaW8u26afU']) expect(html).toContain(`https://www.youtube.com/watch?v=${id}`);
 for (const author of ['ArtCraft AI', 'Benja Review','GYAN BATO']) expect(html).toContain(author);
 for (const duration of ['2:22','2:47','1:22','3:27']) expect(html).toContain(duration);
 expect(html).toContain('Exact app versions not verified');
 expect(html).toContain('ArtCraft AI studio');
});
