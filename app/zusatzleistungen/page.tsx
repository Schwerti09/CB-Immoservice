import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import { additionalServices } from '../../components/siteContent';

export const metadata: Metadata = {
  title: 'Zusatzleistungen',
  description:
    'Zusatzleistungen von CBImmoService: Immobilienverkauf & Vermietung, Immobilienbewertung, Baufinanzierung und Energieberatung.',
};

export default function ZusatzleistungenPage() {
  return (
    <main className="section-space">
      <div className="container-shell">
        <h1 className="text-4xl font-bold tracking-tight text-brand-950">Zusatzleistungen</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {additionalServices.map((service) => (
            <Reveal key={service.title}>
              <section className="card">
                <h2 className="text-xl font-semibold text-brand-950">{service.title}</h2>
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
