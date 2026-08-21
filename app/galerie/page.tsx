import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Einblicke in Arbeiten und Referenzen der CBImmoService GmbH.',
};

const galleryItems = [
  '/images/hero/hero-main-800.jpg',
  '/images/hero/hero-main-1600.jpg',
  '/images/hero/hero-main-800.webp',
];

export default function GaleriePage() {
  return (
    <main className="section-space">
      <div className="container-shell">
        <h1 className="text-4xl font-bold tracking-tight text-brand-950">Galerie</h1>
        <p className="mt-3 text-slate-700">
          Referenzbilder und Vorher/Nachher-Einblicke aus unseren Einsätzen.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((src) => (
            <Reveal key={src}>
              <div className="card p-0">
                <Image
                  src={src}
                  alt="Referenzbild von CBImmoService"
                  width={1600}
                  height={1067}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-64 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">
          TODO: Original-Bildmaterial von cbimmoservice.de in /public/images/ ergänzen, sobald vollständig
          verfügbar.
        </p>
      </div>
    </main>
  );
}
