"use client";

import { useState } from "react";
import Icon from "./Icon";

const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-secondary text-body-md focus:outline-none focus:border-primary transition-colors disabled:opacity-60";
const labelClass = "block font-label-mono text-label-mono text-secondary mb-2";

// Posts to /api/contact, which emails the message from the server.
export default function ContactForm({ email, intents, responseTime }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {/* Honeypot: hidden from people, tempting to bots. The odd name keeps browser autofill away. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-trap">Leave this empty</label>
        <input id="contact-trap" name="hp_trap_field" type="text" tabIndex={-1} autoComplete="off" data-lpignore="true" data-1p-ignore="true" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="e.g. Elena Rostova"
            disabled={sending}
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-email">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="e.g. elena@domain.com"
            disabled={sending}
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-intent">
          Subject / Intent
        </label>
        <select id="contact-intent" name="intent" disabled={sending} className={fieldClass}>
          {intents.map((intent) => (
            <option key={intent.value} value={intent.value}>
              {intent.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          maxLength={5000}
          placeholder="Describe your project, team goals, or engineering timeline..."
          disabled={sending}
          className={`${fieldClass} resize-none`}
        />
      </div>
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-on-primary font-label-mono text-label-mono hover:bg-primary-container transition-colors disabled:opacity-70 disabled:cursor-wait"
        >
          <span>{sending ? "Sending…" : "Send Message"}</span>
          <Icon name="send" size={16} />
        </button>
        <span className="font-label-mono text-meta-caption text-secondary">{responseTime}</span>
      </div>

      <div aria-live="polite">
        {status === "sent" && (
          <p
            role="status"
            className="p-4 rounded-lg bg-primary-fixed text-on-primary-fixed border border-primary font-label-mono text-meta-caption text-center"
          >
            Thanks, your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="p-4 rounded-lg border border-error text-error font-label-mono text-meta-caption text-center"
          >
            {error} You can also email me at{" "}
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
