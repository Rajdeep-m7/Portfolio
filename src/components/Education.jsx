import { education } from "@/data/portfolio";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

const rowTone = {
  strong: "text-on-surface font-semibold",
  accent: "text-primary font-semibold",
  muted: "text-secondary text-right",
};

export default function Education() {
  const { degree, achievements } = education;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="w-full bg-surface-container-low border-y border-outline-variant py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal">
          <SectionLabel>03 — Academics &amp; Honors</SectionLabel>
          <h2 id="education-heading" className="font-display text-headline-md text-on-surface mb-10">
            {education.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <article className="reveal lg:col-span-6 p-6 md:p-8 rounded-xl bg-surface border border-outline-variant">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded bg-surface-container text-primary font-label-mono text-meta-caption font-semibold">
                  {degree.badge}
                </span>
                <span className="font-label-mono text-meta-caption text-secondary">{degree.period}</span>
              </div>
              <h3 className="font-display text-headline-md text-on-surface mb-2">{degree.title}</h3>
              <p className="text-body-md text-secondary font-medium mb-6">{degree.school}</p>
              <dl className="space-y-4 pt-4 border-t border-outline-variant text-body-sm text-on-surface-variant">
                {degree.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <dt>{row.label}</dt>
                    <dd className={`font-label-mono ${rowTone[row.tone]}`}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant flex items-center justify-between gap-4">
              <div>
                <span className="font-label-mono text-meta-caption text-secondary block">
                  {degree.gradeLabel}
                </span>
                <span data-count={degree.grade} className="font-display text-display-lg text-primary font-semibold">
                  {degree.grade}
                </span>
              </div>
              <div className="px-3 py-1.5 rounded bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono font-semibold">
                {degree.gradeBadge}
              </div>
            </div>
          </article>

          <ul className="lg:col-span-6 flex flex-col justify-between gap-6">
            {achievements.map((item) => (
              <li
                key={item.title}
                className="reveal p-6 md:p-8 rounded-xl bg-surface border border-outline-variant hover:border-primary lift flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary border border-outline-variant">
                      <Icon name={item.icon} size={22} />
                    </div>
                    <span className="font-label-mono text-meta-caption text-primary font-semibold">
                      {item.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-headline-sm text-on-surface mb-2">{item.title}</h3>
                  <p className="text-body-md text-secondary">{item.text}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-2">
                  <span className="font-label-mono text-meta-caption text-secondary">
                    {item.footerLeft}
                  </span>
                  <span className="font-label-mono text-meta-caption text-primary font-semibold">
                    {item.footerRight}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
