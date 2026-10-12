import { pages } from "@/data/portfolio";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import Contact from "@/components/Contact";

const page = pages.contact;

export const metadata = pageMetadata(page);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ ...page, type: "ContactPage" })} />
      <PageIntro
        label="Contact"
        heading={page.heading}
        crumb={page.title}
        intro="Internships, freelance work, full-time roles or a collaboration — send a message or reach me directly."
      />
      <Contact />
    </>
  );
}
