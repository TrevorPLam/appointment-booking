import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "/",
  "/services",
  "/book",
  "/about",
  "/reviews",
  "/contact",
  "/policies",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return staticRoutes.map((path) => ({
    url: new URL(path, siteConfig.baseUrl).toString(),
    lastModified: updated,
  }));
}
