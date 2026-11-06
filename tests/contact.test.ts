import { expect, it } from 'vitest';
import { contactLinks, toolSubmissionTemplate } from '@/content/contact';
import { siteConfig } from '@/lib/site';

it('keeps website support and commercial submissions on their domain addresses', () => {
 expect(siteConfig.contactEmail).toBe('support@opensourceadobe.com');
 expect(siteConfig.businessEmail).toBe('business@opensourceadobe.com');
 for (const [key,href] of Object.entries(contactLinks)) {
  const url = new URL(href);
  expect(url.protocol).toBe('mailto:');
  expect(url.pathname).toBe(key === 'support' ? siteConfig.contactEmail : siteConfig.businessEmail);
  expect(url.searchParams.get('subject')).toBeTruthy();
  expect(url.searchParams.get('body')).toBeTruthy();
 }
 expect(new URL(contactLinks.submission).searchParams.get('body')).toBe(toolSubmissionTemplate);
 for(const field of ['Website URL:', 'Pricing and free plan:', 'Documentation or demo URL:', 'Request (editorial listing / sponsored placement / other):']) expect(toolSubmissionTemplate).toContain(field);
});
