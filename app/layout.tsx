import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AppointmentModal from '../components/AppointmentModal';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';
import MobileDock from '../components/MobileDock';
import RevealObserver from '../components/RevealObserver';
import './globals.css';

export const metadata: Metadata = {
  title: 'ImmoService GmbH Metropolregion Nürnberg | Wir machen das für Sie',
  description:
    'Immobilienmakler für Verkauf, Vermietung, Bewertung, Beratung und Finanzierung in der Metropolregion Nürnberg.',
  keywords: [
    'ImmoService Nürnberg',
    'Immobilienmakler Nürnberg',
    'Immobilienverkauf',
    'Immobilienvermietung',
    'Immobilienbewertung',
    'Finanzierungsberatung',
  ],
  metadataBase: new URL('https://www.cbimmoservice.de'),
  openGraph: {
    title: 'Wir machen das für Sie. | ImmoService Nürnberg',
    description:
      'Persönliche Immobilienberatung in der Metropolregion Nürnberg: Kauf, Verkauf, Vermietung und Bewertung.',
    locale: 'de_DE',
    type: 'website',
    images: ['/images/hero/hero-main-1600.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'ImmoService GmbH Metropolregion Nürnberg',
  description:
    'Immobilienmakler für Verkauf, Vermietung, Bewertung, Beratung und Finanzierung in der Metropolregion Nürnberg.',
  telephone: '+49 911 23 55 69-0',
  email: 'info@immoservice.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ostendstraße 149',
    postalCode: '90482',
    addressLocality: 'Nürnberg',
    addressCountry: 'DE',
  },
  areaServed: ['Nürnberg', 'Fürth', 'Erlangen', 'Metropolregion Nürnberg'],
  slogan: 'Wir machen das für Sie.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <RevealObserver />
        <div className="site-shell">
          {children}
          <Footer />
        </div>
        <AppointmentModal />
        <CookieBanner />
        <MobileDock />
      </body>
    </html>
  );
}
