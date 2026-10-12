import Link from "next/link";
import SectionLabel from "./SectionLabel";

// Shared header block for inner pages: breadcrumb, label, the page's single <h1>.
export default function PageIntro({ label, heading, intro, crumb }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 md:pt-20 pb-10 md:pb-14">
      <nav aria-label="Breadcrumb" className="font-label-mono text-meta-caption text-secondary mb-6">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-on-surface">
            {crumb}
          </li>
        </ol>
      </nav>
      <SectionLabel>{label}</SectionLabel>
      <h1 className="font-display text-display-xl-mobile md:text-display-xl text-on-surface mb-4">
        {heading}
      </h1>
      {intro && <p className="text-body-md text-on-surface-variant max-w-2xl">{intro}</p>}
    </section>
  );
}
