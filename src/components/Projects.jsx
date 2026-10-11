import { projects } from "@/data/portfolio";
import Chip from "./Chip";
import Icon from "./Icon";
import ProjectPreview from "./ProjectPreview";
import SectionLabel from "./SectionLabel";

function ProjectLinks({ project, large = false }) {
  const size = large ? "px-5 py-2.5" : "px-4 py-2";
  return (
    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-outline-variant">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} — live demo (opens in a new tab)`}
        className={`inline-flex items-center gap-2 ${size} rounded-lg bg-primary text-on-primary font-label-mono text-label-mono hover:bg-primary-container transition-colors`}
      >
        <span>Live Demo</span>
        <Icon name="external" size={16} />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} — source code on GitHub (opens in a new tab)`}
        className={`inline-flex items-center gap-2 ${size} rounded-lg bg-surface-container border border-outline-variant text-on-surface font-label-mono text-label-mono hover:border-primary hover:text-primary transition-colors`}
      >
        <Icon name="code" size={16} />
        <span>GitHub</span>
      </a>
    </div>
  );
}

export default function Projects() {
  const [lead, ...rest] = projects.featured;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full bg-surface-container-low border-y border-outline-variant py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal">
          <SectionLabel>05 — Selected Work</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 id="projects-heading" className="font-display text-headline-md text-on-surface">
                {projects.heading}
              </h2>
              <p className="text-body-md text-secondary mt-1 max-w-2xl">{projects.intro}</p>
            </div>
            <span className="font-label-mono text-label-mono text-secondary shrink-0">
              [ Live Deployments Included ]
            </span>
          </div>
        </div>

        <article className="reveal w-full rounded-2xl bg-surface border border-outline-variant p-6 lg:p-10 mb-8 hover:border-primary lift">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded bg-surface-container font-label-mono text-meta-caption text-primary font-semibold">
                    {lead.category}
                  </span>
                  <span className="font-label-mono text-meta-caption text-secondary">
                    Featured Artifact #01
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-3">{lead.name}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{lead.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {lead.techs.map((tech) => (
                    <Chip key={tech} tone="solid">
                      {tech}
                    </Chip>
                  ))}
                </ul>
              </div>
              <ProjectLinks project={lead} large />
            </div>
            <div className="lg:col-span-6">
              <ProjectPreview kind={lead.preview} />
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {rest.map((project, i) => (
            <article
              key={project.slug}
              className="reveal rounded-2xl bg-surface border border-outline-variant p-6 md:p-8 hover:border-primary lift flex flex-col justify-between gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded bg-surface-container font-label-mono text-meta-caption text-primary font-semibold">
                    {project.category}
                  </span>
                  <span className="font-label-mono text-meta-caption text-secondary">
                    Artifact #{String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-headline-md text-on-surface mb-2">{project.name}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{project.description}</p>
                <div className="mb-6">
                  <ProjectPreview kind={project.preview} />
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Chip key={tech} tone="solid">
                      {tech}
                    </Chip>
                  ))}
                </ul>
              </div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
