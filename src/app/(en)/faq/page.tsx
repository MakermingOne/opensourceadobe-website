import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Eyebrow } from "@/components/eyebrow";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { brandonSources } from "@/content/brandon-thomas";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "OpenSourceAdobe FAQ",
  description: "Answers about ArtCraft apps, Adobe replacement claims, pricing, licenses, compatibility, downloads and how OpenSourceAdobe verifies information.",
  path: "/faq/",
});

const faqs = [
  { question: "Who created ArtCraft?", answer: "Brandon Thomas identifies himself as ArtCraft’s founder in his public GitHub profile, where he uses the username echelon. He describes himself as an engineer and filmmaker and also lists founder roles at Storyteller.ai and FakeYou." },
  {
    question: "What is OpenSourceAdobe?",
    answer: "OpenSourceAdobe is an independent guide to open-source creative apps that target familiar Adobe workflows. It is not affiliated with Adobe or ArtCraft.",
  },
  {
    question: "Are the ArtCraft apps free and open source?",
    answer: "The official repositories for the apps covered here publish their code under MIT or Apache-2.0 licensing, and the official product pages list the downloads as free. Always review the current repository and release page before use.",
  },
  {
    question: "Can these apps completely replace Adobe Creative Cloud?",
    answer: "Not as a single guaranteed replacement today. Individual apps may already cover useful parts of Photoshop, Illustrator, Premiere Pro or Lightroom workflows, but alpha status, file interchange and production requirements vary.",
  },
  {
    question: "Where should I download the apps?",
    answer: "Use the official ArtCraft product pages linked from our Download page. OpenSourceAdobe does not host or mirror installers.",
  },
  {
    question: "What does alpha mean?",
    answer: "Alpha software is actively developed and may contain bugs, incomplete features or changing file behavior. Test it with copies, keep backups and avoid making it the only path to important work.",
  },
  {
    question: "Will Adobe project files open perfectly?",
    answer: "Do not assume perfect round-trips. Support differs by app and file complexity. Our guides identify known official claims and gaps, but you should test your own files before switching.",
  },
  {
    question: "Have you independently tested every feature?",
    answer: "No. Pages currently distinguish official project claims from independent testing. We will add hands-on conclusions only when the tested version, inputs and result can be documented.",
  },
  {
    question: "Which app should I try first?",
    answer: "Start with PhotoCraft for layered image editing, VectorCraft for vector artwork, FilmCraft for video editing, or LightCraft for local photo organization and RAW development.",
  },
  {
    question: "What is FigCraft?",
    answer: "FigCraft is the newly listed ArtCraft app for interface design and prototyping, with frames, auto layout, components and variants. The official directory labels it early alpha. It targets Figma-style work rather than an Adobe product, and collaboration or file interchange should be tested before a team switches.",
  },
  {
    question: "Why is the GitHub version newer than the official download page?",
    answer: "GitHub releases and product pages may update at different times. Our version tables show the latest published GitHub release checked on the displayed date. Open its release notes to confirm the package and changes. A higher version number does not mean the app is now production-ready.",
  },
] as const;

const faqSources = [
  "artcraft-apps",
  "photocraft-repository",
  "vectorcraft-repository",
  "filmcraft-repository",
  "lightcraft-repository",
  "figcraft-official",
  "photocraft-release",
]
  .map((id) => sourcesById.get(id))
  .filter((source) => source !== undefined);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: absoluteUrl("/faq/"),
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }} />

      <div className="container page-shell page-shell--read">
        <Breadcrumbs currentPath="/faq/" items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <header className="page-intro">
          <Eyebrow>Questions before you switch</Eyebrow>
          <h1>OpenSourceAdobe <span>FAQ</span></h1>
          <p className="lede">Short answers about what these apps are, what “open source” and “alpha” mean, and what you should verify before replacing an Adobe workflow.</p>
          <p className="updated">Last updated: <PageUpdated path="/faq/" /></p>
        </header>

        <section className="content-section" aria-labelledby="faq-list-heading">
          <h2 className="sr-only" id="faq-list-heading">Frequently asked questions</h2>
          <div className="faq-list faq-list--large">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                {item.question === "Who created ArtCraft?" ? (
                  <p>{item.answer} Read our <Link href="/brandon-thomas/">Brandon Thomas and ArtCraft profile</Link> for background and sources.</p>
                ) : item.question === "Can these apps completely replace Adobe Creative Cloud?" ? (
                  <p>{item.answer} Browse the <Link href="/alternatives/">alternatives hub</Link> to compare each app by workflow.</p>
                ) : (
                  <p>{item.answer}</p>
                )}
              </details>
            ))}
          </div>
        </section>

        <SourceList sources={[brandonSources[0], ...faqSources]} />
      </div>
    </>
  );
}
