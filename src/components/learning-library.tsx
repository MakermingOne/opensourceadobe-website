'use client';

import { useState } from 'react';
import Image from 'next/image';
import { filterLearningResources, learningResources, learningType, sortLearningResources, type LearningResource, type LearningFilters } from '@/content/learning-resources';

const tools=['ArtCraft suite','PhotoCraft','VectorCraft','FilmCraft','LightCraft','EffectCraft','FigCraft','ArtCraft AI studio'];
const topics=['Getting started','Installation','Selections & masks','Automation & actions','Adobe file migration','Vector drawing','Video editing','Motion graphics','Photo import & RAW','Self-hosting','2D & 3D','Workflow demos','Reviews & context','Troubleshooting','Documentation'];
const sources=[...new Set(learningResources.map(r=>r.source))];

function Credit({item}:{item:LearningResource}) {
 return <p className="learning-credit">{item.authorUrl ? <a href={item.authorUrl} target="_blank" rel="noreferrer">{item.author}</a> : item.author}{item.publishedAt && /^\d{4}-\d{2}-\d{2}$/.test(item.publishedAt) ? <> · <time dateTime={item.publishedAt}>{item.publishedAt}</time></> : null}{item.language ? <> · {item.language}</> : null}</p>;
}
function Notes({item}:{item:LearningResource}) {
 return <details className="learning-notes"><summary>Context & version notes</summary><p>{item.summary}</p>{item.versionNote ? <p><strong>Applies to:</strong> {item.versionNote}</p> : null}<p>{item.keyTakeaway}</p>{item.authorDetail ? <p>{item.authorDetail}</p> : null}</details>;
}
function VideoCard({item}:{item:LearningResource}) {
 return <article className="learning-video" id={item.id}>
  <a className="learning-video__cover" href={item.url} target="_blank" rel="noreferrer" aria-label={`Watch ${item.title} on YouTube`}>
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`} alt={`Video cover: ${item.title}`} loading="lazy" width="480" height="270" />
   <span className="learning-video__play" aria-hidden="true">▶</span>
   <span className="learning-video__authority">{item.official ? 'Official' : item.source}</span>
   {item.duration ? <span className="learning-video__duration">{item.duration}</span> : null}
  </a>
  <div className="learning-video__body"><p className="learning-tool">{item.tool}</p><h3><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></h3><Credit item={item} />
   <p className="learning-preview">{item.summary}</p><div className="learning-tags"><span>{learningType(item)}</span>{item.topics.map(topic=><span key={topic}>{topic}</span>)}</div>
   <Notes item={item} />
   <details className="learning-player"><summary>Watch here</summary><iframe title={`YouTube embed: ${item.title}`} src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></details>
  </div>
 </article>;
}
function ReadingRow({item}:{item:LearningResource}) {
 return <article className="learning-reading" id={item.id}><div className="learning-reading__source"><span>{item.source}</span><small>{learningType(item)}</small></div><div><p className="learning-tool">{item.tool}</p><h3><a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a></h3><Credit item={item}/><p className="learning-preview">{item.summary}</p><Notes item={item}/></div></article>;
}

export function LearningLibrary() {
 const [filters,setFilters]=useState<LearningFilters>({});
 const [order,setOrder]=useState('newest');
 const set=(key:keyof LearningFilters,value:string)=>setFilters(previous=>({...previous,[key]:value}));
 const active=Object.values(filters).some(value=>value && value!=='all');
 const matches=sortLearningResources(filterLearningResources(filters),order);
 const videos=matches.filter(r=>r.format==='video' && r.kind==='youtube');
 const platformVideos=matches.filter(r=>r.format==='video' && r.kind!=='youtube');
 const images=matches.filter(r=>r.format==='image');
 const reading=matches.filter(r=>r.format==='text');
 return <div className="learning-library" id="learning-library">
  <noscript><style>{`.learning-filters { display:none; }`}</style></noscript>
  <div className="learning-filters">
   <fieldset><legend>Choose a tool</legend><div className="learning-chips"><button type="button" aria-pressed={!filters.tool || filters.tool==='all'} onClick={()=>set('tool','all')}>All tools</button>{tools.map(tool=><button type="button" key={tool} aria-pressed={filters.tool===tool} onClick={()=>set('tool',tool)}>{tool}</button>)}</div></fieldset>
   <details className="learning-filter-details"><summary>Filter by topic, language, resource type or platform</summary><div className="learning-filter-details__body">
    <fieldset><legend>Learning topic</legend><div className="learning-chips"><button type="button" aria-pressed={!filters.topic || filters.topic==='all'} onClick={()=>set('topic','all')}>All topics</button>{topics.map(topic=><button type="button" key={topic} aria-pressed={filters.topic===topic} onClick={()=>set('topic',topic)}>{topic}</button>)}</div></fieldset>
    <div className="learning-selects"><div><label htmlFor="learning-source">Source platform</label><select id="learning-source" value={filters.source ?? 'all'} onChange={event=>set('source',event.target.value)}><option value="all">All sources</option>{sources.map(source=><option key={source}>{source}</option>)}</select></div><div><label htmlFor="learning-system">Operating system</label><select id="learning-system" value={filters.system ?? 'all'} onChange={event=>set('system',event.target.value)}><option value="all">Any system</option>{['Windows','macOS','Linux','Web','Not specified'].map(system=><option key={system}>{system}</option>)}</select></div></div>
    <div className="learning-selects">
     <div><label htmlFor="learning-language">Language</label><select id="learning-language" value={filters.language ?? 'all'} onChange={event=>set('language',event.target.value)}><option value="all">All languages</option>{['English','Português','中文','Not specified'].map(language=><option key={language}>{language}</option>)}</select></div>
     <div><label htmlFor="learning-type">Resource type</label><select id="learning-type" value={filters.type ?? 'all'} onChange={event=>set('type',event.target.value)}><option value="all">All types</option>{['Step-by-step','Reviews & comparisons','Discussion & troubleshooting','Reference'].map(type=><option key={type}>{type}</option>)}</select></div>
     <div><label htmlFor="learning-order">Sort resources</label><select id="learning-order" value={order} onChange={event=>setOrder(event.target.value)}><option value="newest">Newest published first</option><option value="lessons">Step-by-step first</option></select></div>
    </div>
   </div></details>
  </div>
  <div className="learning-results"><p role="status">{videos.length+platformVideos.length} videos · {images.length} illustrated {images.length===1?'guide':'guides'} · {reading.length} reading sources</p>{active ? <button type="button" onClick={()=>setFilters({})}>Clear filters</button> : null}</div>
  {matches.length===0 ? <div className="learning-empty"><h2>No resources match these filters.</h2><p>Choose another tool or clear the filters to explore the full library.</p><button className="button" type="button" onClick={()=>setFilters({})}>Show all resources</button></div> : null}
  {videos.length ? <section className="learning-section" id="video-library" aria-labelledby="video-library-heading"><div className="learning-heading"><div><p className="eyebrow">Watch a workflow</p><h2 id="video-library-heading">Video library</h2></div><span>{videos.length} videos</span></div><p className="learning-section-intro">Follow a CraftApps lesson, compare an Adobe file workflow or explore the separate ArtCraft AI studio. Use Resource type to choose step-by-step lessons.</p><div className="learning-video-grid">{videos.map(item=><VideoCard key={item.id} item={item}/>)}</div></section> : null}
  {platformVideos.length ? <section className="learning-section" id="platform-video-library" aria-labelledby="platform-video-heading"><div className="learning-heading"><div><p className="eyebrow">Watch on the original platform</p><h2 id="platform-video-heading">Bilibili videos</h2></div></div><div className="learning-reading-list">{platformVideos.map(item=><ReadingRow key={item.id} item={item}/>)}</div></section> : null}
  {images.length ? <section className="learning-section" id="illustrated-guides" aria-labelledby="illustrated-guides-heading"><div className="learning-heading"><div><p className="eyebrow">Explore with images</p><h2 id="illustrated-guides-heading">Illustrated guides</h2></div></div>{images.map(item=><article className="learning-feature" key={item.id}><a href={item.url} className="learning-feature__image"><Image src={item.image!.src} alt={item.image!.alt} width={1400} height={933} sizes="(max-width: 700px) 100vw, 50vw" /></a><div><p className="eyebrow">Illustrated learning guide</p><h3><a href={item.url}>{item.title}</a></h3><p>{item.summary}</p><Credit item={item}/><a className="text-link" href={item.url}>Read the guide →</a></div></article>)}</section> : null}
  {reading.length ? <section className="learning-section" id="reading-library" aria-labelledby="reading-library-heading"><div className="learning-heading"><div><p className="eyebrow">Read & compare</p><h2 id="reading-library-heading">Reading & discussions</h2></div><span>{reading.length} sources</span></div><p className="learning-section-intro">Read a companion discussion, troubleshoot a project or follow a written installation and automation guide.</p><div className="learning-reading-list">{reading.map(item=><ReadingRow key={item.id} item={item}/>)}</div></section> : null}
  <aside className="learning-source-note"><strong>About these sources.</strong> Official studio lessons cover the ArtCraft AI studio, while CraftApps have separate workflows. Community reports and launch-era videos describe their recorded builds; version notes retain those limits. Original links and publisher credits stay attached to every item. Open each source for the creator’s full lesson and latest corrections.</aside>
 </div>;
}
