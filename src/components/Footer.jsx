import { site } from "@/data/portfolio";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center">
            <span className="font-label-mono text-meta-caption font-semibold text-primary">
              {site.initials}
            </span>
          </div>
          <p className="font-label-mono text-label-mono text-secondary tracking-normal">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Social" className="flex items-center gap-6 font-label-mono text-label-mono text-secondary">
          <a className="hover:text-primary transition-colors" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="text-outline-variant" aria-hidden="true">/</span>
          <a className="hover:text-primary transition-colors" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="text-outline-variant" aria-hidden="true">/</span>
          <a className="hover:text-primary transition-colors" href={`mailto:${site.email}`}>
            Email
          </a>
        </nav>
        <a
          href="#main"
          className="inline-flex items-center gap-1 font-label-mono text-label-mono text-secondary hover:text-primary transition-colors"
        >
          <Icon name="up" size={16} />
          <span>Back to Top</span>
        </a>
      </div>
    </footer>
  );
}
