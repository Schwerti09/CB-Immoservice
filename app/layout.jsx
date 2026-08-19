import "./globals.css";

const SITE = "https://elaborate-cuchufli-5c5fd2.netlify.app";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CB Immoservice — Hausverwaltung und Objektbetreuung",
    template: "%s · CB Immoservice",
  },
  description:
    "CB Immoservice übernimmt WEG- und Mietverwaltung, technische Objektbetreuung sowie Vermietung im Rheinland. Feste Ansprechpartner, transparente Abrechnung, dokumentierte Reaktionszeiten.",
  keywords: [
    "Hausverwaltung",
    "WEG-Verwaltung",
    "Mietverwaltung",
    "Objektbetreuung",
    "Immobilienservice",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE,
    siteName: "CB Immoservice",
    title: "CB Immoservice — Hausverwaltung und Objektbetreuung",
    description:
      "WEG- und Mietverwaltung, technische Objektbetreuung und Vermietung. Feste Ansprechpartner statt Ticketnummern.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f2ede3",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Karla:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
