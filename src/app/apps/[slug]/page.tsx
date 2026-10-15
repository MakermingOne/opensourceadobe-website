import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppGuideLanding } from "@/components/app-guide-landing";
import { PhotoCraftLanding } from "@/components/photocraft-landing";
import { appsBySlug, publishedApps } from "@/content/apps";
import { guideBySlug } from "@/content/guides";
import { sourcesById } from "@/content/sources";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return publishedApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = appsBySlug.get(slug);
  if (!app || !app.detailPublished) return {};
  if (app.slug === "photocraft") {
    return pageMetadata({
      title: "ArtCraft PhotoCraft: Downloads & Photoshop Alternative",
      absoluteTitle: true,
      description: "Explore ArtCraft PhotoCraft, its official downloads, PSD editing and early-alpha limits before replacing Photoshop.",
      path: "/apps/photocraft/",
      image: "/images/og/artcraft-photocraft.png",
    });
  }

  if (app.slug === "pdfcraft") {
    return pageMetadata({
      title: "Download PdfCraft: ArtCraft PDF Tool for Windows, Mac & Linux",
      absoluteTitle: true,
      description: "Download PdfCraft from official ArtCraft releases. Choose a Windows, Mac or Linux build and check its PDF features and alpha limits.",
      path: "/apps/pdfcraft/",
      image: "/images/og/download-pdfcraft.png",
    });
  }
  return pageMetadata({
    title: `${app.name}: Free ${app.adobeCounterpart} Alternative`,
    description: `See what ${app.name} can do, who should try it, current downloads, and the alpha limits to check before replacing ${app.adobeCounterpart}.`,
    path: `/apps/${app.slug}/`,
  });
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = appsBySlug.get(slug);
  if (!app || !app.detailPublished) notFound();

  const appSources = app.sourceIds.map((id) => sourcesById.get(id)).filter((source) => source !== undefined);

  if (app.slug === "photocraft") {
    return <PhotoCraftLanding app={app} sources={appSources} />;
  }

  const guide = guideBySlug[app.slug as keyof typeof guideBySlug];
  if (!guide) notFound();

  return <AppGuideLanding app={app} guide={guide} sources={appSources} />;
}
