import { pages } from "@/data/portfolio";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";

const page = pages.about;

export const metadata = pageMetadata(page);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, type: "AboutPage" })} />
      <PageIntro
        label="About"
        heading={page.heading}
        crumb={page.title}
        intro="Background, experience, education and the tools I work with."
      />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Philosophy />
    </>
  );
}
