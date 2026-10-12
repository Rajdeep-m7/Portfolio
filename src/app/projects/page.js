import { pages } from "@/data/portfolio";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";

const page = pages.projects;

export const metadata = pageMetadata(page);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, type: "CollectionPage" })} />
      <PageIntro
        label="Projects"
        heading={page.heading}
        crumb={page.title}
        intro="Things I've built, with live demos and source code."
      />
      <Projects />
    </>
  );
}
