import { expect, it } from 'vitest';
import { learningResources, filterLearningResources, learningType, sortLearningResources } from '@/content/learning-resources';
import { externalResources } from '@/content/external-resources';
import { priorityTutorials } from '@/content/tutorial-videos';

it('preserves every source once and distinguishes media formats and provenance',()=>{
 expect(new Set(learningResources.map(r=>r.id)).size).toBe(learningResources.length);
 for(const item of [...externalResources,...priorityTutorials]) expect(learningResources.some(r=>r.id===item.id && r.url===item.url)).toBe(true);
 expect(learningResources.filter(r=>r.format==='video')).toHaveLength(21);
 expect(learningResources.filter(r=>r.format==='image')).toHaveLength(0);
 expect(learningResources.filter(r=>r.format==='text')).toHaveLength(11);
 expect(learningResources.find(r=>r.id==='official-studio-2d-basics')?.tool).toBe('ArtCraft AI studio');
});
it('combines tool, topic, source and verified operating-system filters',()=>{
 const filtered=filterLearningResources({tool:'ArtCraft suite',topic:'Installation',source:'YouTube',system:'Windows'});
 expect(filtered.map(r=>r.id)).toEqual(['community-craftapps-windows-benja','community-craftapps-overview-gyan']);
 expect(filterLearningResources({tool:'PhotoCraft',source:'Reddit'}).every(r=>r.format==='text')).toBe(true);
 expect(filterLearningResources({tool:'PhotoCraft',system:'macOS',topic:'Background'})).toHaveLength(0);
});

it('keeps recent lessons, language filters and comparisons distinct',()=>{
 const lessons=filterLearningResources({tool:'PhotoCraft',topic:'Automation & actions',type:'Step-by-step',language:'English'});
 expect(lessons.map(r=>r.id)).toEqual(['photocraft-record-actions-john','photocraft-atn-import-john']);
 expect(filterLearningResources({source:'Bilibili',language:'中文'}).map(r=>r.id)).toEqual(['photocraft-bilibili-zhou']);
 const comparison=learningResources.find(r=>r.id==='vectorcraft-ai-import-john')!;
 expect(learningType(comparison)).toBe('Reviews & comparisons');
 expect(filterLearningResources({tool:'EffectCraft',type:'Step-by-step'}).length).toBeGreaterThanOrEqual(2);
 const latest=sortLearningResources(learningResources,'newest');
 expect(latest[0].id).toBe('vectorcraft-ai-import-john');
 const byLesson=sortLearningResources(learningResources,'lessons');
 expect(byLesson[0].tier).toBe('tutorial');
 expect(learningResources.find(r=>r.id==='artcraft-agent-guide-github')?.publishedAt).toBeUndefined();
});
