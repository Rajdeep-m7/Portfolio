import { experience } from "@/data/portfolio";
import Chip from "./Chip";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24"
    >
      <div className="reveal">
        <SectionLabel>02 — Experience</SectionLabel>
        <h2 id="experience-heading" className="font-display text-headline-md text-on-surface mb-10">
          {experience.heading}
        </h2>
      </div>

      <article className="reveal w-full p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-outline-variant">
          <div>
            <span className="font-label-mono text-meta-caption text-primary font-semibold">
              Internship Role
            </span>
            <h3 className="font-display text-headline-md text-on-surface mt-1">{experience.role}</h3>
            <p className="text-body-md text-secondary font-medium">{experience.company}</p>
          </div>
          <div className="inline-flex items-center gap-2 self-start md:self-center px-3.5 py-1.5 rounded-full bg-surface border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="font-label-mono text-label-mono text-on-surface">
              {experience.period}
            </span>
          </div>
        </div>
        <p className="py-6 text-body-md text-on-surface-variant max-w-4xl">{experience.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {experience.tracks.map((track) => (
            <div
              key={track.title}
              className="reveal lift p-6 rounded-xl bg-surface border border-outline-variant hover:border-primary flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                  <Icon name={track.icon} size={20} />
                </div>
                <div>
                  <h4 className="font-display text-headline-sm text-on-surface">{track.title}</h4>
                  <p className="font-label-mono text-meta-caption text-secondary">{track.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-body-sm text-on-surface-variant">
                {track.works.map((work) => (
                  <li key={work} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-outline-variant">
                {track.skills.map((skill) => (
                  <Chip key={skill} tone="surface">
                    {skill}
                  </Chip>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h4 className="font-label-mono text-meta-caption text-secondary font-semibold mb-3">
          Tools &amp; focus areas
        </h4>
        <ul className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <Chip key={tag} tone="surface">
              {tag}
            </Chip>
          ))}
        </ul>
      </article>
    </section>
  );
}
