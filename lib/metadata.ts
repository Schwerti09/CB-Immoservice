import type { Metadata } from "next";

const configuredUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.cbimmoservice.de";

export const siteUrl = configuredUrl.startsWith("http")
  ? configuredUrl
  : `https://${configuredUrl}`;

export const companyName = "CB Immoservice";
export const defaultDescription =
  "CB Immoservice: Hausverwaltung, WEG-Verwaltung, Mietverwaltung, Gebäudereinigung und Hausmeisterservice für anspruchsvolle Immobilien.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CB Immoservice – Hausverwaltung & Immobilienservice",
    template: "%s | CB Immoservice",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Hausverwaltung",
    "WEG-Verwaltung",
    "Mietverwaltung",
    "Gebäudereinigung",
    "Hausmeisterservice",
    "Immobilienservice",
    "CB Immoservice",
  ],
  openGraph: {
    title: "CB Immoservice – Hausverwaltung & Immobilienservice",
    description: defaultDescription,
    url: siteUrl,
    siteName: companyName,
    locale: "de_DE",
    type: "website",
  },
};

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: companyName,
      locale: "de_DE",
      type: "website",
    },
  };
}
