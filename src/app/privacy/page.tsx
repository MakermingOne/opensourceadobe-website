import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy and Google Analytics disclosure",
  description: "How OpenSourceAdobe uses Google Analytics on the production site, what access and device data may be processed, and how visitors can block it.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/privacy/" items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <header className="page-intro">
        <Eyebrow>Privacy · production analytics</Eyebrow>
        <h1>A small site<br /><span>with a plain disclosure.</span></h1>
        <p className="updated">Effective: 2026-10-11 · Last updated: <PageUpdated path="/privacy/" /></p>
      </header>
      <article className="prose">
        <h2>Google Analytics</h2>
        <p>The production version of OpenSourceAdobe uses Google Analytics 4 to understand aggregate visits and site usage. Local development and Vercel preview deployments do not load the analytics tag.</p>
        <p>Google Analytics may process information such as visited pages, approximate location derived from network information, device and browser characteristics, referral information, and interaction events. OpenSourceAdobe does not ask you to create an account or submit personal profile information.</p>
        <h2>Google as a service provider</h2>
        <p>Analytics data is processed by Google under its own terms and privacy practices. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s Privacy Policy ↗</a> and its explanation of <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from sites and apps ↗</a>.</p>
        <h2>Your choices</h2>
        <p>You can block analytics requests with browser privacy controls, content blockers, network filtering, or Google’s opt-out tools. Blocking analytics does not prevent access to the site’s editorial content.</p>
        <h2>Retention and changes</h2>
        <p>This page does not promise a specific retention period that has not been independently confirmed. Material changes to the site’s data practices will be reflected here with a new update date.</p>
      </article>
      <EditorialSourceNote>Google Privacy Policy and Google’s partner sites disclosure are linked in the text above. Both were accessed on 2026-10-11.</EditorialSourceNote>
    </div>
  );
}
