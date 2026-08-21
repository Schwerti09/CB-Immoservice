<<<<<<< HEAD
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ConciergeBell,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceCard from "@/components/ServiceCard";
import TrustSignals from "@/components/TrustSignals";
import TestimonialSlider from "@/components/TestimonialSlider";
import { createPageMetadata } from "@/lib/metadata";
import { serviceItems, testimonials } from "@/lib/site-data";
=======
import Image from 'next/image';
import Link from 'next/link';
import { Home, Leaf, Wrench, KeyRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import { additionalServices, company, homeIntro, serviceCards, testimonials, whyItems } from '../components/siteContent';

const icons = [Home, Leaf, Wrench, KeyRound] as const;
>>>>>>> origin/main

const serviceIcons = {
  hausverwaltung: Building2,
  gebaeudereinigung: Sparkles,
  hausmeisterservice: Wrench,
};

const serviceImages: Record<string, { url: string; alt: string }> = {
  hausverwaltung: {
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75&auto=format&fit=crop",
    alt: "Modernes Wohngebäude – Hausverwaltung",
  },
  gebaeudereinigung: {
    url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=75&auto=format&fit=crop",
    alt: "Professionelle Gebäudereinigung",
  },
  hausmeisterservice: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75&auto=format&fit=crop",
    alt: "Hausmeister bei der Arbeit",
  },
};

export const metadata = createPageMetadata({
  title: "Startseite",
  description:
    "CB Immoservice bietet hochwertige Hausverwaltung, Gebäudereinigung und Hausmeisterservices aus einer Hand.",
  path: "/",
});

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <section className="bg-navy bg-grid-pattern bg-radial-luxury text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Premium Immobilienservice
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Ihr zuverlässiger Partner für Immobilien-Management
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Professionelle Hausverwaltung, Gebäudereinigung und Hausmeisterservice aus einer Hand.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
              >
                Leistungen entdecken
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-gold hover:bg-white/5"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Verlässlich organisiert",
                  text: "Klare Prozesse, feste Ansprechpartner und transparente Betreuung für Eigentümer und Objekte.",
                },
                {
                  icon: ConciergeBell,
                  title: "Alles aus einer Hand",
                  text: "Verwaltung, Reinigung und Hausmeisterservice intelligent aufeinander abgestimmt.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <item.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <h2 className="mt-5 font-serif text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Unsere Leistungen</p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              Maßgeschneiderte Lösungen für gepflegte, werthaltige Immobilien
            </h2>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Wir verstehen Immobilien nicht als Verwaltungsobjekte, sondern als langfristige Werte.
              Deshalb verbinden wir operative Verlässlichkeit mit repräsentativer Qualität.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceItems.map((service) => {
              const Icon = serviceIcons[service.slug];
              const img = serviceImages[service.slug];
              return (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  bullets={service.bullets}
                  icon={Icon}
                  imageUrl={img?.url}
                  imageAlt={img?.alt}
                />
=======
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
>>>>>>> origin/main
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <TrustSignals />
      <ProcessSteps />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Kundenstimmen</p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              Vertrauen entsteht durch saubere Leistung
            </h2>
          </div>
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
=======
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
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Persönliche Beratung</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Lassen Sie uns über Ihr Objekt sprechen.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Ob laufende Betreuung, Reinigungsstrategie oder operative Entlastung im Gebäudealltag:
              Wir entwickeln ein passendes Konzept für Ihren Bedarf.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>
    </>
=======
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
>>>>>>> origin/main
  );
}
