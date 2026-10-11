import { skills } from "@/data/portfolio";

const FEATURED = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "React Native",
  "Docker",
  "Nginx",
  "GitHub Actions CI/CD",
  "Google Cloud Platform (GCP)",
  "VPS Hosting",
  "Socket.io",
  "Redux Toolkit",
  "Tailwind CSS",
  "Gemini API",
  "Git & GitHub",
];

// Only show names that exist in the skills data, so this can't drift.
const known = new Set(skills.domains.flatMap((d) => d.items));
const items = FEATURED.filter((name) => known.has(name));

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {items.map((name) => (
        <li
          key={name}
          className="px-4 py-2 rounded-full border border-outline-variant bg-surface text-body-sm font-medium text-on-surface-variant whitespace-nowrap"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies" className="marquee w-full overflow-hidden py-6 border-y border-outline-variant bg-surface">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
