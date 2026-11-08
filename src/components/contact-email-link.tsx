'use client';

import type { ReactNode } from 'react';

type ContactType = 'support' | 'business' | 'tool_submission';

export function ContactEmailLink({ href, type, children, className }: {
 href: string; type: ContactType; children: ReactNode; className?: string;
}) {
 return <a href={href} className={className} onClick={() => {
  // Measure email intent only. Never send the address, subject, body or user text.
  if (window.sitePrivacy?.get() !== 'accepted') return;
  const analytics = window as unknown as { gtag?: (...args: unknown[]) => void };
  analytics.gtag?.('event', 'contact_email_click', { contact_type: type, entry_point: 'contact_page' });
 }} data-pvuv-event="contact_email_click" data-pvuv-contact-type={type}>{children}</a>;
}
