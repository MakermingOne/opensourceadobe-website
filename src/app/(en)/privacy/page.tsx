import { PageUpdated } from "@/components/page-updated";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EditorialSourceNote } from "@/components/editorial-source-note";
import { Eyebrow } from "@/components/eyebrow";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy, cookies and advertising",
  description: "Your analytics choices, Google advertising cookie disclosures, external links and privacy contact at OpenSourceAdobe.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <div className="container page-shell page-shell--read">
      <Breadcrumbs currentPath="/privacy/" items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <header className="page-intro">
        <Eyebrow>Privacy · cookies & choices</Eyebrow>
        <h1>Your privacy.<br /><span>Your choice.</span></h1>
        <p className="updated">Effective: 2026-10-11 · Last updated: <PageUpdated path="/privacy/" /></p>
      </header>
      <article className="prose">
        <h2>Who operates this site</h2>
        <p>OpenSourceAdobe is an independent publication maintained by Makerming. It is not an Adobe or ArtCraft service. For privacy questions or requests concerning information you sent us, email <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p>
        <h2>Analytics and your choices</h2>
        <p>Google Analytics 4 and PVUV load by default. To stop future collection, open “Privacy choices” at the bottom of any page and select “Turn off analytics.” You can turn analytics back on from the same menu.</p>
        <p>Your browser stores your choice for up to 180 days. A browser with no saved choice uses the default setting. If browser storage is unavailable, your choice applies to the current page only.</p>
        <h2>Google Analytics</h2>
        <p>Google Analytics uses cookies to measure page visits and interactions, such as choosing a contact link. Google may process browser and device characteristics and approximate location derived from network information. We send page paths without query strings or URL fragments, and do not intentionally send email addresses, email templates, API keys, filenames or document contents. Advertising personalization and Google signals are disabled for this analytics configuration.</p>
        <p>Read <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s Privacy Policy ↗</a> and <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from partner sites ↗</a>. You can also use <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google’s Analytics opt-out browser add-on ↗</a>.</p>
        <h2>PVUV analytics</h2>
        <p>PVUV measures page visits, referrals, browser and device characteristics, time on page, scroll depth and outbound links. It uses first-party cookies and local storage to recognize visitors and sessions. We remove URL query strings, fragments, campaign values, click text and error messages from its collection requests. File download tracking is disabled. Learn about the service at <a href="https://www.pvuv.ai/" target="_blank" rel="noreferrer">PVUV ↗</a>.</p>
        <h2>Google advertising</h2>
        <p>Google ads are currently disabled on this site. Our ads.txt file lists the Google AdSense publisher authorized to sell advertising here. Advertising has its own consent settings.</p>
        <p>If Google advertising is enabled in the future, third-party vendors, including Google, may use cookies to serve ads based on your prior visits to this or other websites. Google’s advertising cookies allow Google and its partners to serve ads based on those visits. We will provide the applicable advertising consent choices before activating advertising.</p>
        <p>You can manage personalized advertising through <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">Google My Ad Center ↗</a> and opt out of participating third-party vendors through <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer">YourAdChoices ↗</a>. See <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google’s advertising privacy explanation ↗</a>. These choices do not replace this site’s analytics controls.</p>
        <h2>Hosting, external links and email</h2>
        <p>Cloudflare delivers this website and may process IP addresses and request information for delivery, reliability and security. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">Cloudflare’s privacy policy ↗</a>. Our footer also retrieves a directory badge from Findly.tools, which receives the network information necessary to deliver that image.</p>
        <p>Downloads open the software publisher’s official website or GitHub. Video thumbnails are loaded from YouTube’s image service, which receives network information to deliver them. Embedded YouTube players load only after you choose “Load YouTube video”; playback is then subject to Google’s privacy practices. You may instead follow the link to watch on YouTube. Those services apply their own privacy policies when you visit them. We do not host installers or ask you to upload your working files.</p>
        <p>Contact links open your email application. Nothing in the suggested email template is sent to us until you send the email. If you contact us, we receive your address and message to handle your request. Please do not include passwords, API keys or confidential documents. You may ask us to delete correspondence, subject to any recordkeeping obligations.</p>
        <h2>Storage and changes</h2>
        <p>Analytics records are subject to the providers’ retention settings. You can clear existing cookies and local storage in your browser’s site settings. We update the date on this page when these practices change.</p>
      </article>
      <EditorialSourceNote>This policy describes this site’s current configuration. Google’s advertising cookie requirements were checked on November 8, 2026; the provider policies above offer further details.</EditorialSourceNote>
    </div>
  );
}
