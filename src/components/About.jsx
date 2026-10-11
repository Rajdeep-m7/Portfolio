import { about } from "@/data/portfolio";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-surface-container-low border-y border-outline-variant py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal">
          <SectionLabel>01 — About Me</SectionLabel>
          <h2 id="about-heading" className="font-display text-headline-md text-on-surface mb-12">
            {about.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="reveal lg:col-span-5 space-y-6 text-body-md text-on-surface-variant">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.features.map((feature) => (
              <li
                key={feature.title}
                className="reveal p-6 rounded-lg bg-surface border border-outline-variant hover:border-primary lift"
              >
                <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary mb-4 border border-outline-variant">
                  <Icon name={feature.icon} size={20} />
                </div>
                <h3 className="font-display text-headline-sm text-on-surface mb-2">{feature.title}</h3>
                <p className="text-body-sm text-secondary">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
