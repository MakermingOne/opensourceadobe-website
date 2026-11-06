import { siteConfig } from '@/lib/site';

export const toolSubmissionTemplate = `Tool name:
Website URL:
Your name and role:
Reply-to email:

What does the tool help people do?
Which Adobe app or creative workflow does it relate to?
Who is it for?
Platforms (Windows / macOS / Linux / web):
Pricing and free plan:
Source code and license (if applicable):
Documentation or demo URL:
What makes it different?

Request (editorial listing / sponsored placement / other):
Proposed placement, timing and budget (if applicable):
Anything else we should know?`;

export function contactMailto(address: string, subject: string, body?: string): string {
 return `mailto:${address}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}

export const contactLinks = {
 support: contactMailto(siteConfig.contactEmail, 'OpenSourceAdobe — website support or correction', 'Page URL:\nIssue or correction:\nPrimary source (if available):'),
 business: contactMailto(siteConfig.businessEmail, 'OpenSourceAdobe — business inquiry', 'Your name and company:\nWebsite:\nPartnership idea:\nPreferred timing:\nBudget (if applicable):'),
 submission: contactMailto(siteConfig.businessEmail, 'OpenSourceAdobe — tool submission', toolSubmissionTemplate),
};
