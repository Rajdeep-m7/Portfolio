import { beyond, philosophy } from "@/data/portfolio";
import Icon from "./Icon";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="beyond-heading"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="reveal lg:col-span-5">
          <span className="font-label-mono text-label-mono text-primary font-semibold block mb-2">
            06 — {beyond.eyebrow}
          </span>
          <h2 id="beyond-heading" className="font-display text-headline-md text-on-surface mb-6">
            {beyond.heading}
          </h2>
          <p className="text-body-md text-on-surface-variant mb-8">{beyond.intro}</p>
          <ul className="space-y-4">
            {beyond.items.map((item) => (
              <li key={item.title} className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
                <h3 className="font-display text-body-md font-semibold text-on-surface mb-1">{item.title}</h3>
                <p className="text-body-sm text-secondary">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="reveal">
            <span className="font-label-mono text-label-mono text-primary font-semibold block mb-2">
              {philosophy.eyebrow}
            </span>
            <h2 className="font-display text-headline-md text-on-surface mb-6">{philosophy.heading}</h2>
            <p className="text-body-md text-on-surface-variant mb-8">{philosophy.intro}</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophy.items.map((item, i) => (
                <li
                  key={item.title}
                  className="p-6 rounded-xl bg-surface-container-low border border-outline-variant flex flex-col justify-between"
                >
                  <div>
                    <span className="font-label-mono text-label-mono text-primary font-semibold block mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-headline-sm text-on-surface mb-3">{item.title}</h3>
                    <p className="text-body-sm text-secondary">{item.text}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-outline-variant font-label-mono text-meta-caption text-secondary">
                    {item.footer}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal p-6 rounded-xl bg-surface-container-high border border-outline-variant mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="terminal" size={24} className="text-primary shrink-0" />
              <span className="font-label-mono text-body-sm text-on-surface">{philosophy.commitment}</span>
            </div>
            <span className="font-label-mono text-meta-caption text-secondary">
              {philosophy.locale}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
