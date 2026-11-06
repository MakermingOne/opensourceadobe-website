import { externalResources, type ExternalResource } from './external-resources';
import { priorityTutorials } from './tutorial-videos';
import { recentLearningResources } from './recent-learning-resources';

export type LearningResource = ExternalResource & {
  format: 'video' | 'image' | 'text';
  tool: string;
  topics: string[];
  systems: string[];
  source: string;
  official: boolean;
  language?: string;
  checkedAt?: string;
  image?: { src: string; alt: string };
};
export type LearningFilters = { tool?: string; topic?: string; source?: string; system?: string; language?: string; type?: string };
export function learningType(item: LearningResource): string {
 if (item.tier === 'tutorial') return 'Step-by-step';
 if (item.tier === 'community') return 'Discussion & troubleshooting';
 if (item.official) return 'Reference';
 return 'Reviews & comparisons';
}
export function sortLearningResources(items: LearningResource[], order: string): LearningResource[] {
 const date = (item: LearningResource) => /^\d{4}-\d{2}-\d{2}$/.test(item.publishedAt ?? '') ? item.publishedAt! : '';
 return [...items].sort((a,b) => (order === 'lessons' ? Number(b.tier === 'tutorial') - Number(a.tier === 'tutorial') : 0) || date(b).localeCompare(date(a)));
}

const topicsById: Record<string, string[]> = {
 'official-studio-2d-basics': ['Getting started', '2D & 3D'],
 'official-studio-2d-to-3d': ['2D & 3D', 'Workflow demos'],
 'community-craftapps-windows-benja': ['Installation', 'Getting started'],
 'community-craftapps-overview-gyan': ['Installation', 'Reviews & context'],
 'photocraft-beginner-abhishek': ['Getting started', 'Workflow demos'],
 'suite-overview-heroic': ['Reviews & context'],
 'vectorcraft-firstlook-krumark': ['Workflow demos', 'Reviews & context'],
 'filmcraft-install-geekrar': ['Installation', 'Workflow demos'],
 'lightcraft-review-sharkcookie': ['Workflow demos', 'Reviews & context'],
 'figcraft-reddit-announcement': ['Reviews & context'],
 'photocraft-pdf-community': ['Troubleshooting'],
 'reddit-vibecoding-launch': ['Reviews & context'],
 'hn-artcraft-discussion': ['Reviews & context'],
 'petapixel-coverage': ['Reviews & context'],
 'official-photocraft': ['Documentation'],
 'official-filmcraft': ['Documentation'],
};
// Systems are assigned only where the existing description establishes scope.
const systemsById: Record<string, string[]> = {
 'community-craftapps-windows-benja': ['Windows'],
 'community-craftapps-overview-gyan': ['Windows', 'macOS', 'Linux'],
 'filmcraft-install-geekrar': ['Windows'],
 'official-photocraft': ['Windows', 'macOS', 'Linux', 'Web'],
 'official-filmcraft': ['Windows', 'macOS', 'Linux'],
};
const sourceLabels = { youtube: 'YouTube', reddit: 'Reddit', hn: 'Hacker News', article: 'Blog / press', official: 'Official site', bilibili: 'Bilibili' };

export const learningResources: LearningResource[] = [...recentLearningResources, ...[...priorityTutorials, ...externalResources].map<LearningResource>(item => ({
 ...item, format: item.kind === 'youtube' ? 'video' : 'text', tool: item.id === "figcraft-reddit-announcement" ? "FigCraft" : item.app,
 topics: topicsById[item.id] ?? [], systems: systemsById[item.id] ?? [],
 source: sourceLabels[item.kind], official: item.kind === 'official' || ('collection' in item && item.collection === 'official-studio'),
}))];

export function filterLearningResources(filters: LearningFilters): LearningResource[] {
 const any=(value?:string)=>!value || value==='all';
 return learningResources.filter(r => (any(filters.tool) || r.tool===filters.tool) &&
  (any(filters.topic) || r.topics.includes(filters.topic!)) &&
  (any(filters.source) || r.source===filters.source) &&
  (any(filters.system) || (filters.system==='Not specified' ? r.systems.length===0 : r.systems.includes(filters.system!))) &&
  (any(filters.language) || (r.language ?? 'Not specified') === filters.language) &&
  (any(filters.type) || learningType(r) === filters.type));
}
