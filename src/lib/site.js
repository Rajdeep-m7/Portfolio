// Canonical production host. rajdeepmajumdar.me redirects to www on Vercel, so the
// canonical / sitemap / Open Graph URLs must use www too (a canonical that points at a
// redirecting URL confuses Google).
const PRODUCTION = "https://www.rajdeepmajumdar.me";
const FALLBACK = process.env.NODE_ENV === "production" ? PRODUCTION : "http://localhost:3000";

// Resolve the public site URL without ever throwing, so a typo in an env var
// can't break the build. Accepts "example.com", "https://example.com/",
// quoted values, and falls back to the production host (localhost in dev).
function resolveSiteUrl() {
  let raw = (process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/^["']+|["']+$/g, "").trim();

  if (!raw) raw = FALLBACK;
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  try {
    return new URL(raw).origin;
  } catch {
    return FALLBACK;
  }
}

export const siteUrl = resolveSiteUrl();
