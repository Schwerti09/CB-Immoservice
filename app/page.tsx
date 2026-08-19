import Image from 'next/image';
import Link from 'next/link';
import { Home, Leaf, Wrench, KeyRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import { additionalServices, company, homeIntro, serviceCards, testimonials, whyItems } from '../components/siteContent';

const icons = [Home, Leaf, Wrench, KeyRound] as const;

export default function HomePage() {
  return (
    <main>
      <section className="section-space border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{company.region}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-950 md:text-5xl">
              Ihr Rundum-Service fürs Haus
            </h1>
            <p className="mt-4 max-w-2xl text-slate-700">{homeIntro}</p>
            <p className="mt-4 text-lg font-semibold text-brand-900">{company.slogan}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kontakt" className="button-primary">
                Jetzt kostenloses Angebot anfordern
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="card overflow-hidden p-0">
              <Image
                src="/images/hero/hero-main-1600.jpg"
                alt="CBImmoService bei der Arbeit"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-brand-950">Unsere Leistungen</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {serviceCards.map((item, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={item.title}>
                  <article className="card">
                    <Icon className="h-6 w-6 text-brand-800" aria-hidden="true" />
                    <h3 className="mt-3 text-xl font-semibold text-brand-950">{item.title}</h3>
                    <p className="mt-2 text-slate-700">{item.claim}</p>
                    <Link href="/dienstleistungen" className="mt-4 inline-flex text-sm font-semibold text-brand-800">
                      Mehr erfahren
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-brand-950">Warum CBImmoService?</h2>
          </Reveal>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {whyItems.map((item) => (
              <Reveal key={item}>
                <div className="card py-4">
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-100">
        <div className="container-shell">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-brand-950">Zusatzleistungen</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {additionalServices.map((service) => (
              <Reveal key={service.title}>
                <article className="card">
                  <h3 className="text-lg font-semibold text-brand-950">{service.title}</h3>
                  <p className="mt-2 text-slate-700">{service.text}</p>
                  <Link href="/zusatzleistungen" className="mt-4 inline-flex text-sm font-semibold text-brand-800">
                    Mehr erfahren
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-brand-950">Kundenstimmen</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name}>
                <article className="card">
                  <p className="text-yellow-500" aria-hidden="true">
                    ★★★★★
                  </p>
                  <p className="mt-3 text-slate-700">{testimonial.text || '—'}</p>
                  <p className="mt-4 font-semibold text-brand-900">{testimonial.name}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-slate-200 bg-brand-900 text-white">
        <div className="container-shell text-center">
          <h2 className="text-3xl font-bold">Jetzt kostenloses Angebot anfordern</h2>
          <div className="mt-6">
            <Link href="/kontakt" className="button-secondary">
              Zum Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
