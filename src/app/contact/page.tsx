import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact and corrections",
  description: "Email OpenSourceAdobe to report a correction, suggest a primary source, ask an attribution question or share feedback about the site.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/contact/" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <header className="page-intro">
        <Eyebrow>Contact · corrections first</Eyebrow>
        <h1>Get in touch.<br /><span>Help keep this guide accurate.</span></h1>
        <p className="lede">Email us with corrections, source suggestions, attribution questions or feedback about the site.</p>
        <p className="updated">Last updated: <PageUpdated path="/contact/" /></p>
      </header>
      <section className="contact-block">
        <p className="section-number">01</p>
        <div>
          <h2>Email</h2>
          <p>Please include the page URL, the exact statement in question, and a primary source where available.</p>
          <a className="button" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </div>
      </section>
      <EditorialSourceNote>This email is for OpenSourceAdobe. For help with an ArtCraft app or an Adobe subscription, contact the relevant project or company directly.</EditorialSourceNote>
    </div>
  );
}
