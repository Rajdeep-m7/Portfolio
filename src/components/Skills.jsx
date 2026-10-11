import { skills } from "@/data/portfolio";
import Chip from "./Chip";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  // Wide cards (DevOps) always close the grid so the rows stay even.
  const domains = [
    ...skills.domains.filter((d) => !d.wide),
    ...skills.domains.filter((d) => d.wide),
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24"
    >
      <div className="reveal">
        <SectionLabel>04 — Toolkit</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 id="skills-heading" className="font-display text-headline-md text-on-surface">
              {skills.heading}
            </h2>
            <p className="text-body-md text-secondary mt-1">{skills.intro}</p>
          </div>
          <span className="font-label-mono text-label-mono text-secondary shrink-0">
            [ {domains.length} Core Domains ]
          </span>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <li
            key={domain.title}
            className={`reveal lift p-6 rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between hover:border-primary ${
              domain.wide ? "md:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <div className={domain.wide ? "lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center" : ""}>
              <div className={domain.wide ? "lg:col-span-5" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={domain.icon} size={22} className="text-primary" />
                  <h3 className="font-display text-headline-sm text-on-surface">{domain.title}</h3>
                </div>
                <p className={`text-body-sm text-secondary ${domain.wide ? "mb-6 lg:mb-0" : "mb-6"}`}>
                  {domain.text}
                </p>
              </div>
              <ul className={`flex flex-wrap gap-2 ${domain.wide ? "lg:col-span-7" : ""}`}>
                {domain.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant flex items-center justify-between gap-2 font-label-mono text-meta-caption text-secondary">
              <span>{domain.footerLeft}</span>
              <span className="text-primary font-semibold">{domain.footerRight}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
