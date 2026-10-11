import nodemailer from "nodemailer";
import { site } from "@/data/portfolio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 100, email: 200, intent: 120, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort rate limit: 5 messages per 10 minutes per IP (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function tooManyRequests(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const clean = (value, max) => String(value ?? "").trim().slice(0, max);
const oneLine = (value) => value.replace(/[\r\n]+/g, " ");
const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function json(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function getTransport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;

  const port = Number(process.env.SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (clean(payload.hp_trap_field, 200)) {
    console.warn("[contact] honeypot field was filled; message dropped.");
    return json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (tooManyRequests(ip)) {
    return json({ error: "Too many messages. Please try again in a few minutes." }, 429);
  }

  const name = oneLine(clean(payload.name, LIMITS.name));
  const email = oneLine(clean(payload.email, LIMITS.email));
  const intent = oneLine(clean(payload.intent, LIMITS.intent)) || "General inquiry";
  const message = clean(payload.message, LIMITS.message);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter your name, a valid email and a message." }, 400);
  }

  const transport = getTransport();
  if (!transport) {
    console.error("[contact] SMTP_USER / SMTP_PASS are not configured.");
    return json({ error: "The contact form isn't configured yet." }, 503);
  }

  const to = process.env.CONTACT_TO_EMAIL || site.inbox;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  try {
    await transport.sendMail({
      from: `"${name.replace(/"/g, "")} via ${site.name} Portfolio" <${from}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfolio] ${intent} — ${name}`,
      text: `${message}\n\n—\nFrom: ${name} <${email}>\nIntent: ${intent}`,
      html: `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><p><strong>From:</strong> ${escapeHtml(
        name,
      )} &lt;${escapeHtml(email)}&gt;<br><strong>Intent:</strong> ${escapeHtml(intent)}</p>`,
    });
    console.log(`[contact] message from ${email} sent to ${to}.`);
    return json({ ok: true });
  } catch (error) {
    console.error("[contact] send failed:", error);
    return json({ error: "Couldn't send your message. Please try again or email me directly." }, 502);
  }
}
