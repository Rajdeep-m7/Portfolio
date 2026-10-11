import { contact, site } from "@/data/portfolio";
import ContactForm from "./ContactForm";
import Icon from "./Icon";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-surface-container-low border-t border-outline-variant py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal">
          <SectionLabel>07 — Reach Out</SectionLabel>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="reveal lg:col-span-5 flex flex-col">
            <h2 id="contact-heading" className="font-display text-headline-md text-on-surface mb-4">
              {contact.heading}
            </h2>
            <p className="text-body-md text-on-surface-variant mb-8">{contact.intro}</p>
            <ul className="space-y-4">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-5 rounded-xl bg-surface border border-outline-variant hover:border-primary lift flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 shrink-0 rounded bg-surface-container flex items-center justify-center text-primary border border-outline-variant">
                        <Icon name={link.icon} size={20} />
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-mono text-meta-caption text-secondary block">
                          {link.label}
                        </span>
                        <span className="text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors break-all">
                          {link.value}
                        </span>
                      </div>
                    </div>
                    <Icon
                      name={link.external ? "external" : "arrow"}
                      size={20}
                      className="text-secondary group-hover:text-primary transition-colors shrink-0"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-7">
            <div className="p-6 lg:p-10 rounded-2xl bg-surface border border-outline-variant">
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-outline-variant mb-6">
                <div>
                  <h3 className="font-display text-headline-sm text-on-surface">Direct Dispatch</h3>
                  <p className="text-body-sm text-secondary mt-1">Send a message straight to my inbox.</p>
                </div>
                <span className="font-label-mono text-meta-caption px-2.5 py-1 rounded bg-surface-container text-secondary font-semibold shrink-0">
                  Sent to my inbox
                </span>
              </div>
              <ContactForm email={site.email} intents={contact.intents} responseTime={contact.responseTime} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
