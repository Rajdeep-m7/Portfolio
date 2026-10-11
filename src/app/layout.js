import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, navItems, projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollEffects from "@/components/ScrollEffects";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name} · Portfolio`,
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d12" },
  ],
};

// Runs before first paint so the saved / system theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}document.documentElement.classList.add('js')})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      url: siteUrl,
      jobTitle: site.role,
      description: site.description,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Siliguri",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Siliguri Institute of Technology" },
      worksFor: { "@type": "Organization", name: "REBOOT AI" },
      sameAs: [site.github, site.linkedin],
      knowsAbout: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "React Native",
        "Generative AI",
        "REST APIs",
        "Socket.io",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${site.name} · Portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ItemList",
      name: "Featured projects",
      itemListElement: projects.featured.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          description: p.description,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          url: p.live,
          codeRepository: p.github,
          author: { "@id": `${siteUrl}/#person` },
        },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-on-surface antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-on-primary font-label-mono text-label-mono uppercase"
        >
          Skip to content
        </a>
        <ScrollEffects />
        <CustomCursor />
        <Header items={navItems} name={site.name} initials={site.initials} role={site.role} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
