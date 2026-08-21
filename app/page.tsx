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
import TrustBadges from "@/components/TrustBadges";
import TestimonialSlider from "@/components/TestimonialSlider";
import { createPageMetadata } from "@/lib/metadata";
import { serviceItems, testimonials } from "@/lib/site-data";

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

      <TrustBadges />

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
              );
            })}
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
  );
}
