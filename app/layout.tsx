import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import MobileActionBar from '../components/MobileActionBar';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cbimmoservice.de'),
  title: {
    default: 'CBImmoService GmbH | Ihr Rundum-Service fürs Haus',
    template: '%s | CBImmoService GmbH',
  },
  description:
    'CBImmoService GmbH in Schortens: Entrümpelung, Gartenpflege, Handwerkerservice, Objektbetreuung sowie Zusatzleistungen rund um Immobilien.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
