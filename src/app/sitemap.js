import { pages } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...Object.values(pages).map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
