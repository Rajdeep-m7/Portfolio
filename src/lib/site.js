const FALLBACK = "http://localhost:3000";

// Resolve the public site URL without ever throwing, so a typo in an env var
// can't break the build. Accepts "example.com", "https://example.com/",
// quoted values, and falls back to Vercel's production URL, then localhost.
function resolveSiteUrl() {
  let raw = (process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/^["']+|["']+$/g, "").trim();

  if (!raw) {
    raw = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || FALLBACK;
  }
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  try {
    return new URL(raw).origin;
  } catch {
    return FALLBACK;
  }
}

export const siteUrl = resolveSiteUrl();
