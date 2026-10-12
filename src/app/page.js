import { projects, site } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: site.title,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
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

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
    </>
  );
}
