import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const routes = ["", "#s1", "#s2", "#s3", "#s4", "#s5"].map((path) => {
  const url = path ? `${siteConfig.siteUrl}/${path}` : siteConfig.siteUrl;
  return {
    url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path ? 0.6 : 1,
  };
});

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
