import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { PageUpdated } from "@/components/page-updated";
import { SourceList } from "@/components/source-list";
import { brandonSources } from "@/content/brandon-thomas";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

const path = "/brandon-thomas/";
// Original editorial timestamp. Schema-only fixes do not refresh it;
// update modifiedAt after substantive editorial edits.
const publishedAt = "2026-10-18T01:11:44+08:00";
const modifiedAt = publishedAt;
const summary = "Brandon Thomas is the founder of ArtCraft. Known as echelon on GitHub, he describes himself as an engineer and filmmaker and also lists founder roles at Storyteller.ai and FakeYou.";

export const metadata = pageMetadata({
  title: "Brandon Thomas: ArtCraft Founder & Developer",
  description: "Who is Brandon Thomas? Meet ArtCraft’s founder, explore his public engineering and filmmaking background, and find the official projects and sources.",
  path,
});

export default function BrandonThomasPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      {
        "@type": "Article", "@id": absoluteUrl(path), url: absoluteUrl(path),
        headline: "Brandon Thomas and ArtCraft", description: summary, inLanguage: "en",
        datePublished: publishedAt, dateModified: modifiedAt,
        mainEntityOfPage: absoluteUrl(path), image: absoluteUrl("/images/og/brandon-thomas-artcraft.png"),
        author: { "@type": "Organization", name: "OpenSourceAdobe", url: absoluteUrl("/about/") },
        about: { "@id": `${absoluteUrl(path)}#person` },
        citation: brandonSources.map((source) => source.url),
      },
      {
        "@type": "Person", "@id": `${absoluteUrl(path)}#person`, name: "Brandon Thomas",
        alternateName: "echelon", description: summary, url: "https://brand.io/",
        sameAs: ["https://github.com/echelon"],
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Brandon Thomas", item: absoluteUrl(path) },
      ] },
    ] }} />
    <div className="container page-shell page-shell--read founder-profile">
      <Breadcrumbs currentPath={path} items={[{ label: "Home", href: "/" }, { label: "Brandon Thomas" }]} />
      <header className="page-intro">
        <Eyebrow>People · ArtCraft founder</Eyebrow>
        <h1>Brandon Thomas<br /><span>and ArtCraft.</span></h1>
        <p className="lede">{summary}</p>
        <p>His <a href="https://github.com/echelon">public GitHub profile</a> is the starting point for this introduction to the person behind the tools.</p>
        <p className="updated">By <Link href="/about/">OpenSourceAdobe</Link> · Published <time dateTime="2026-10-18">October 18, 2026</time> · Last updated: <PageUpdated path={path} /></p>
        <div className="button-row"><a className="button" href="https://github.com/echelon">Brandon on GitHub ↗</a><Link className="button button--secondary" href="/apps/">Explore ArtCraft apps</Link></div>
      </header>

      <article className="prose">
        <h2>Who is Brandon Thomas?</h2>
        <p>Brandon Thomas publicly identifies himself as ArtCraft’s founder under the GitHub username <strong>echelon</strong>. His profile links to <a href="https://brand.io/">brand.io</a>, his personal website. These links identify the developer discussed here when searching for Brandon Thomas and ArtCraft.</p>
        <p>His <a href="https://github.com/echelon">GitHub biography and pinned projects</a> connect software engineering with creative work: alongside ArtCraft, the profile features Rust libraries for speech synthesis and laser projection, and a Python laser-projector game. His listed founder roles also include Storyteller.ai and FakeYou. The profile does not establish a dated employment history or the size of the ArtCraft team.</p>

        <h2>How does his filmmaking background relate to ArtCraft?</h2>
        <p>In <a href="https://getartcraft.com/news/world-models-for-film">Machinima 2.0: World Models for Consistent AI Filmmaking</a>, an official article signed Brandon Thomas and dated January 30, 2026 in the <a href="https://getartcraft.com/news">news index</a>, he describes himself as a former Machinima creator. Machinima uses rendered game environments and characters to make films.</p>
        <p>The article focuses on a practical filmmaking problem: keeping locations, characters and camera relationships consistent across shots. Thomas describes staging a 3D set, positioning props and characters, then using image and video models to render the result. That helps explain the studio’s emphasis on composing a scene before generation. This is his published creative approach, rather than an independent test of the software.</p>

        <h2>What is the connection between Brandon Thomas and ArtCraft?</h2>
        <p>His founder role spans a project family with different tools. The <a href="https://getartcraft.com/">official ArtCraft website</a> presents the studio as a workspace for controlled AI image and video creation. The separate <a href="https://getartcraft.com/apps">Crafting Apps directory</a> covers editing and productivity tasks. Choose between these projects by what you want to make:</p>
        <ul>
          <li><strong>ArtCraft studio:</strong> compose images and stage scenes for AI image and video generation.</li>
          <li><strong>Crafting Apps:</strong> separate open-source applications, including PhotoCraft for images, VectorCraft for illustration and FilmCraft for video editing.</li>
          <li><strong>ArtCraft Launcher:</strong> an installer and updater for the Crafting Apps, linked from the official directory.</li>
        </ul>
        <p>As checked on October 17, 2026, the official directory lists 13 Crafting Apps. It labels PhotoCraft, PdfCraft and FigCraft early alpha, with the other apps in development. Our <Link href="/github/">ArtCraft GitHub guide</Link> separates the studio, app repositories and Launcher so you can find the correct source.</p>

        <h2>Why are these tools relevant to Adobe users?</h2>
        <p>The Crafting Apps target familiar tasks such as layered image editing, vector drawing, photo development, video editing and page layout. The team presents them as free, native applications built in Rust, with local file workflows. That makes them relevant to readers exploring <Link href="/alternatives/">open-source Adobe alternatives</Link>. See the <a href="https://getartcraft.com/apps">official directory</a> for the team’s product descriptions.</p>
        <p>For a practical starting point, read our <Link href="/apps/photocraft/">PhotoCraft guide</Link> or <Link href="/apps/pdfcraft/">PdfCraft guide</Link>. Official feature lists describe the project’s claims; test your own files, exports and handoffs before replacing an established workflow.</p>

        <h2>Is everything under the ArtCraft name free?</h2>
        <p>The Crafting Apps are listed as free and open source. The AI studio has a separate cost model: the <a href="https://getartcraft.com/pricing">official pricing page</a> offers paid generation credits and plans, and says users can bring their own compute and third-party subscriptions. Free access to software does not mean every image or video generation is free.</p>

        <h2>Where can you follow Brandon Thomas and the projects?</h2>
        <ul>
          <li><a href="https://github.com/echelon">Brandon Thomas on GitHub</a> — his public developer profile and projects.</li>
          <li><a href="https://brand.io/">brand.io</a> — the personal website linked from that profile.</li>
          <li><a href="https://getartcraft.com/">getartcraft.com</a> — the official ArtCraft product website.</li>
          <li><Link href="/download/">Our download guide</Link> — links to official installers by product.</li>
          <li><Link href="/updates/">Our ArtCraft updates</Link> — dated release and community notes with sources.</li>
        </ul>
      </article>

      <aside className="method-note">
        <div><Eyebrow>About this profile</Eyebrow><h2>Independent editorial research.</h2></div>
        <div><p>OpenSourceAdobe is an unofficial guide and is not affiliated with Brandon Thomas, ArtCraft or Adobe. This profile uses public first-party materials checked October 17, 2026; it is not an interview or an endorsement. Personal statements are attributed to their sources.</p><p><Link href="/about/">Read our editorial method</Link> or <Link href="/contact/">send a correction with a source</Link>.</p></div>
      </aside>
      <SourceList sources={brandonSources} />
    </div>
  </>;
}
