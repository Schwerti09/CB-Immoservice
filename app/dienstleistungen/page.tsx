import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { mainServices } from '../../components/siteContent';

export const metadata: Metadata = {
  title: 'Dienstleistungen',
  description:
    'Entrümpelungen, Gartenpflege, Handwerkerservice und Objektbetreuung durch die CBImmoService GmbH.',
};

export default function DienstleistungenPage() {
  return (
    <main className="section-space">
      <div className="container-shell">
        <h1 className="text-4xl font-bold tracking-tight text-brand-950">Dienstleistungen</h1>
        <div className="mt-8 space-y-4">
          {mainServices.map((service) => (
            <Reveal key={service.title}>
              <section className="card">
                <p className="text-2xl" aria-hidden="true">
                  {service.emoji}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-950">{service.title}</h2>
                <p className="mt-1 font-medium text-brand-700">{service.subline}</p>
                <p className="mt-3 text-slate-700">{service.text}</p>
                <Link href="/kontakt" className="button-primary mt-5">
                  {service.cta}
                </Link>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
