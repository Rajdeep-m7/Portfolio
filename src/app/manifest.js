import { site } from "@/data/portfolio";

export default function manifest() {
  return {
    name: `${site.name} · Portfolio`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
  };
}
