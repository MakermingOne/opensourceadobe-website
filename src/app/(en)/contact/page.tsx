import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactEmailLink } from "@/components/contact-email-link";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { contactLinks, toolSubmissionTemplate } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact, tool submissions and partnerships",
  description: "Submit a creative tool for consideration, discuss sponsorships and partnerships, or contact OpenSourceAdobe for website support and corrections.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/contact/" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <header className="page-intro">
        <Eyebrow>Contact · tools & partnerships</Eyebrow>
        <h1>Let’s talk.<br /><span>Tools, ideas and better guides.</span></h1>
        <p className="lede">Building a creative tool our readers should know about? Submit it for consideration or get in touch about a partnership.</p>
        <p className="updated">Last updated: <PageUpdated path="/contact/" /></p>
      </header>
      <section className="contact-block" aria-labelledby="business-heading">
        <p className="section-number">01</p>
        <div>
          <h2 id="business-heading">Business & partnerships</h2>
          <p>For sponsorships, sponsored placements and partnerships relevant to creative software, open-source tools and Adobe alternatives.</p>
          <ContactEmailLink type="business" href={contactLinks.business} className="button">{siteConfig.businessEmail}</ContactEmailLink>
        </div>
      </section>
      <section className="contact-block" aria-labelledby="submission-heading">
        <p className="section-number">02</p>
        <div>
          <h2 id="submission-heading">Submit your tool</h2>
          <p>Tell us what your tool does, who it helps and how readers can try it. Include current pricing and a documentation or demo link.</p>
          <ContactEmailLink type="tool_submission" href={contactLinks.submission} className="button">Submit a tool by email →</ContactEmailLink>
          <details className="contact-template">
            <summary>View the submission template</summary>
            <pre>{toolSubmissionTemplate}</pre>
          </details>
          <p>Submissions are reviewed for relevance and do not guarantee a listing. Sponsored placements are clearly labeled and do not determine editorial verdicts.</p>
        </div>
      </section>
      <section className="contact-block" aria-labelledby="support-heading">
        <p className="section-number">03</p>
        <div>
          <h2 id="support-heading">Website support & corrections</h2>
          <p>For broken links, factual corrections, attribution questions or problems with this website. Include the affected page and a primary source when possible.</p>
          <ContactEmailLink type="support" href={contactLinks.support} className="button">{siteConfig.contactEmail}</ContactEmailLink>
        </div>
      </section>
      <EditorialSourceNote>These addresses are for OpenSourceAdobe. For help with an ArtCraft app or an Adobe subscription, contact the relevant project or company directly.</EditorialSourceNote>
    </div>
  );
}
