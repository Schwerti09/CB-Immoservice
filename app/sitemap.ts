import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";

const routes = [
  "/",
  "/leistungen",
  "/leistungen/hausverwaltung",
  "/leistungen/gebaeudereinigung",
  "/leistungen/hausmeisterservice",
  "/ueber-uns",
  "/referenzen",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
