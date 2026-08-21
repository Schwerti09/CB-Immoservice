import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConciergeWidget from "@/components/ConciergeWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyName, defaultDescription, defaultMetadata, siteUrl } from "@/lib/metadata";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyName,
  description: defaultDescription,
  url: siteUrl,
  email: "info@cbimmoservice.de",
  // TODO: Telefonnummer ergänzen, sobald freigegeben.
  // TODO: Geschäftsadresse ergänzen, sobald freigegeben.
  areaServed: "Deutschland",
  serviceType: [
    "Hausverwaltung",
    "WEG-Verwaltung",
    "Mietverwaltung",
    "Gebäudereinigung",
    "Hausmeisterservice",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ConciergeWidget />
        <WhatsAppButton />
      </body>
    </html>
  );
}
