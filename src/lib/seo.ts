// seo.ts — Helpers for building strongly typed Metadata objects.

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetaInput {
  title?: string;
  description?: string;
  path?: string;
}

export const buildPageMetadata = ({
  title,
  description,
  path = "/",
}: PageMetaInput = {}): Metadata => {
  const canonical = new URL(path, siteConfig.baseUrl).toString();
  const computedTitle = title
    ? siteConfig.seo.titleTemplate.replace("%s", title)
    : siteConfig.seo.siteTitle;

  return {
    title: computedTitle,
    description: description ?? siteConfig.seo.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: computedTitle,
      description: description ?? siteConfig.seo.metaDescription,
      url: canonical,
      siteName: siteConfig.businessName,
      images: siteConfig.seo.ogImagePath
        ? [{ url: siteConfig.seo.ogImagePath }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: computedTitle,
      description: description ?? siteConfig.seo.metaDescription,
      images: siteConfig.seo.ogImagePath ? [siteConfig.seo.ogImagePath] : undefined,
    },
  };
};
