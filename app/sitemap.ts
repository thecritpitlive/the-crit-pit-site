import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://thecritpit.com";
  const now = new Date().toISOString();
  const pages = ["","/streams","/about","/links","/press","/contact","/privacy","/terms"];
  return pages.map(p => ({
    url: `${url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
}
