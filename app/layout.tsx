import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import KIBerater from '../components/KIBerater';
import MobileDock from '../components/MobileDock';
import RevealObserver from '../components/RevealObserver';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CB Immoservice – Hausservice, Entrümpelung & Gartenpflege',
  description:
    'CB Immoservice GmbH ist Ihr regionaler Partner in Schortens, Jever und Umgebung für Entrümpelung, Gartenpflege, Handwerkerservice und Objektbetreuung.',
  keywords: [
    'CB Immoservice',
    'Schortens',
    'Jever',
    'Entrümpelung',
    'Gartenpflege',
    'Handwerkerservice',
    'Objektbetreuung',
    'Landkreis Friesland',
  ],
  metadataBase: new URL('https://cbimmoservice.de'),
  openGraph: {
    title: 'CB Immoservice – Rundum-Service fürs Haus',
    description:
      'Zuverlässiger Partner für Haus, Garten und Immobilie im Landkreis Friesland.',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CBImmoService GmbH',
  description:
    'Zuverlässiger Partner für Haus, Garten und Immobilie im Landkreis Friesland.',
  telephone: '+49 4461 9169 850',
  email: 'info@cbimmoservice.de',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Schortens',
    addressCountry: 'DE',
  },
  areaServed: [
    'Schortens',
    'Jever',
    'Wilhelmshaven',
    'Wittmund',
    'Landkreis Friesland',
  ],
  slogan: 'Rundum-Service fürs Haus – Aus einer Hand.',
  makesOffer: [
    'Entrümpelungen',
    'Gartenpflege',
    'Handwerkerservice',
    'Objektbetreuung',
  ].map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service,
    },
  })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <RevealObserver />
        <div className="site-shell">
          {children}
          <Footer />
        </div>
        <KIBerater />
        <MobileDock />
      </body>
    </html>
  );
}
