import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isProductionDeployment } from "@/lib/deployment";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "../assets/fonts/archivo-latin-variable.woff2",
  variable: "--font-archivo",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  weight: "100 900",
});

const inter = localFont({
  src: "../assets/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  weight: "100 900",
});

const geistMono = localFont({
  src: "../assets/fonts/geist-mono-latin-variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
  fallback: ["Courier New", "monospace"],
  weight: "100 900",
});

const isProduction = isProductionDeployment();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OpenSourceAdobe — independent ArtCraft app guide",
    template: "%s | OpenSourceAdobe",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "OpenSourceAdobe" }],
  creator: "OpenSourceAdobe",
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#101114",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loadAnalytics = isProduction && Boolean(siteConfig.analyticsId);

  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {loadAnalytics ? <GoogleAnalytics gaId={siteConfig.analyticsId} /> : null}
      </body>
    </html>
  );
}
