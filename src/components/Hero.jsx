import { hero, site } from "@/data/portfolio";
import Icon from "./Icon";

// `--i` drives the staggered entrance delay (see .hero-in in globals.css).
const step = (i) => ({ "--i": i });

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background: dotted grid + two slowly drifting glows */}
      <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="blob-a glow-a absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full"
        aria-hidden="true"
      />
      <div
        className="blob-b glow-b absolute top-32 -right-32 w-[32rem] h-[32rem] rounded-full"
        aria-hidden="true"
      />

      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 md:pt-20 pb-16 md:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div
              style={step(0)}
              className="hero-in inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface border border-outline-variant mb-6"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-label-mono text-meta-caption text-primary font-semibold">
                {hero.availability}
              </span>
            </div>

            <h1
              id="hero-heading"
              style={step(1)}
              className="hero-in font-display text-display-xl-mobile md:text-display-xl text-on-surface mb-4"
            >
              <span className="sr-only">{site.name} – </span>
              {hero.headlineTop}
              <br />
              <span className="text-primary">{hero.headlineAccent}</span>
            </h1>

            <p
              style={step(2)}
              className="hero-in font-display text-headline-sm text-secondary max-w-xl mb-6"
            >
              {hero.tagline}
            </p>

            <p style={step(3)} className="hero-in text-body-md text-on-surface-variant max-w-xl mb-8">
              I&apos;m <strong className="text-on-surface font-semibold">{site.name}</strong>,{" "}
              {hero.intro}
            </p>

            <div style={step(4)} className="hero-in flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="group lift inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-label-mono text-label-mono hover:bg-primary-container"
              >
                <span>Explore My Work</span>
                <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="lift inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-outline-variant text-on-surface font-label-mono text-label-mono hover:border-primary hover:text-primary"
              >
                <Icon name="mail" size={16} />
                <span>Get in Touch</span>
              </a>
            </div>

            <div
              style={step(5)}
              className="hero-in flex items-center gap-2.5 pt-4 border-t border-outline-variant max-w-lg"
            >
              <Icon name="verified" size={18} className="text-primary shrink-0" />
              <p className="font-label-mono text-meta-caption text-secondary">{hero.footnote}</p>
            </div>
          </div>

          <div
            style={step(3)}
            className="hero-in lg:col-span-5 flex flex-col pt-2"
            aria-label="Terminal summary"
          >
            <div className="w-full rounded-xl bg-inverse-surface border border-outline-variant overflow-hidden shadow-2xl shadow-primary/15">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full bg-error inline-block" />
                  <span className="w-3 h-3 rounded-full bg-primary-container inline-block" />
                  <span className="w-3 h-3 rounded-full bg-outline inline-block" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-meta-caption text-secondary-fixed-dim">
                  <Icon name="terminal" size={14} />
                  <span>~/rajdeep · zsh</span>
                </div>
                <span className="font-mono text-meta-caption text-secondary-fixed-dim">
                  x86_64
                </span>
              </div>
              <div className="p-6 font-mono text-[0.8125rem] leading-6 space-y-4 text-inverse-on-surface selection:bg-primary selection:text-on-primary">
                {hero.terminal.map((line, i) => (
                  <div key={line.cmd} className="term-line" style={step(i)}>
                    <span className="text-inverse-primary">guest@rajdeep-machine</span>
                    <span className="text-secondary-fixed-dim">:~</span>$ {line.cmd}
                    <p className={`mt-1 ${i === 0 ? "text-on-primary-container font-semibold" : "text-secondary-fixed-dim"}`}>
                      {line.out}
                    </p>
                  </div>
                ))}
                <div className="term-line" style={step(hero.terminal.length)}>
                  <span className="text-inverse-primary">guest@rajdeep-machine</span>
                  <span className="text-secondary-fixed-dim">:~</span>$ cat status.txt
                  <div className="flex items-center gap-2 mt-1 px-2.5 py-1 rounded bg-white/10 text-inverse-primary border border-inverse-primary/20 w-fit max-w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary animate-pulse shrink-0" aria-hidden="true" />
                    <span className="text-meta-caption font-semibold">{hero.terminalStatus}</span>
                  </div>
                </div>
                <div className="term-line pt-2" style={step(hero.terminal.length + 1)} aria-hidden="true">
                  <span className="text-inverse-primary">guest@rajdeep-machine</span>
                  <span className="text-secondary-fixed-dim">:~</span>$ <span className="caret-blink">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="w-full mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {hero.metrics.map((metric) => (
            <li
              key={metric.label}
              className="reveal lift p-6 rounded-xl bg-surface border border-outline-variant hover:border-primary flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-mono text-meta-caption text-secondary">{metric.label}</span>
                <span className="bob w-9 h-9 rounded-lg bg-primary-fixed text-primary flex items-center justify-center">
                  <Icon name={metric.icon} size={20} />
                </span>
              </div>
              <div>
                <div data-count={metric.value} className="font-display text-display-lg text-on-surface font-semibold">
                  {metric.value}
                </div>
                <p className="text-body-sm text-secondary mt-1">{metric.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
