"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header({ items, name, role }) {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/85 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 group shrink-0" aria-label={`${name} — home`}>
          <Logo size={36} className="shrink-0 rounded-lg transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-display text-body-md font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {name}
            </span>
            <span className="font-label-mono text-meta-caption text-secondary">
              {role}
            </span>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6 font-label-mono text-label-mono">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`py-1 transition-colors ${
                active === item.id
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="font-label-mono text-meta-caption text-tertiary">
              Open to opportunities
            </span>
          </div>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-on-primary font-label-mono text-label-mono transition-colors hover:bg-primary-container"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="xl:hidden w-9 h-9 rounded-lg border border-outline-variant bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-primary lift"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="xl:hidden border-t border-outline-variant bg-surface"
        >
          <ul className="max-w-7xl mx-auto px-6 py-4 grid gap-1 font-label-mono text-label-mono">
            {items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`flex items-center gap-3 px-2 py-3 border-b border-outline-variant ${
                    active === item.id ? "text-primary font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  <span className="text-secondary">{String(i).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
