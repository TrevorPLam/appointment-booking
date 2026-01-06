// schema.ts — Structured data builders powered by site config.

import { siteConfig, type SiteConfig } from "@/config/site";

export const getLocalBusinessSchema = () => {
  const { businessName, phoneDial, address, baseUrl, services } = siteConfig;
  type PhysicalAddress = Exclude<SiteConfig["address"], { serviceAreaOnly: true }>;
  const addressPayload =
    "serviceAreaOnly" in address && address.serviceAreaOnly
      ? undefined
      : ((addr: PhysicalAddress) => ({
          streetAddress: addr.line1,
          addressLocality: addr.city,
          addressRegion: addr.state,
          postalCode: addr.zip,
          addressCountry: "US",
        }))(address as PhysicalAddress);

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: businessName,
    url: baseUrl,
    telephone: phoneDial,
    address: addressPayload,
    priceRange: "$",
    areaServed: siteConfig.serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    makesOffer: services.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      category: service.category,
    })),
  };
};

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.seo.siteTitle,
  url: siteConfig.baseUrl,
  inLanguage: "en-US",
  potentialAction: {
    "@type": "ReserveAction",
    target: `${siteConfig.baseUrl}/book`,
  },
});

export const getBreadcrumbSchema = (items: { label: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.url,
  })),
});
