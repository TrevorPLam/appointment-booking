import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk, Work_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import StickyCTA from "@/components/StickyCTA";
import { siteConfig } from "@/config/site";
import { getLocalBusinessSchema, getWebsiteSchema } from "@/lib/schema";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const body = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.seo.siteTitle,
  description: siteConfig.seo.metaDescription,
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: siteConfig.seo.siteTitle,
    description: siteConfig.seo.metaDescription,
    url: siteConfig.baseUrl,
    siteName: siteConfig.businessName,
    images: siteConfig.seo.ogImagePath
      ? [{ url: siteConfig.seo.ogImagePath }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.siteTitle,
    description: siteConfig.seo.metaDescription,
    images: siteConfig.seo.ogImagePath ? [siteConfig.seo.ogImagePath] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Header />
        <main className="container py-10">
          {children}
          <StickyCTA />
        </main>
        <Footer />
        <JsonLd data={[getLocalBusinessSchema(), getWebsiteSchema()]} id="site-jsonld" />
        {siteConfig.analytics.provider === "ga4" && siteConfig.analytics.ga4MeasurementId && (
          <GoogleAnalytics gaId={siteConfig.analytics.ga4MeasurementId} />
        )}
      </body>
    </html>
  );
}
