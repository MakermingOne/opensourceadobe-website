import { Suspense } from "react";
import { SiteDocument } from "@/components/site-document";
import NotFound from "./(en)/not-found";
export const metadata = { title: "OpenSourceAdobe — independent ArtCraft app guide", robots: { index: false, follow: true } };
export default function GlobalNotFound() {
  return <SiteDocument locale="en"><NotFound /><Suspense>{null}</Suspense></SiteDocument>;
}
