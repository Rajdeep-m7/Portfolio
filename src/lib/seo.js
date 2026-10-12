import { site } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

// Per-page metadata. Each page needs its own canonical + Open Graph URL, otherwise
// it would inherit the root layout's "/" canonical and Google would treat it as a
// duplicate of the home page.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: `${site.name} · Portfolio`,
      title: `${title} · ${site.name}`,
      description,
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title: `${title} · ${site.name}`, description },
  };
}

// JSON-LD for an inner page: the page itself plus a breadcrumb trail.
export function pageJsonLd({ type, title, description, path }) {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: `${title} · ${site.name}`,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}
