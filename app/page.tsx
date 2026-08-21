import Link from "next/link";
import {
  ArrowRight,
  HandPlatter,
  Leaf,
  Trash2,
  Wrench,
} from "lucide-react";
import TrustBadges from "@/components/TrustBadges";
import Hero from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";
import { mainServices, additionalServices } from "@/components/siteContent";

const mainServiceIcons = {
  Objektbetreuung: HandPlatter,
  Handwerkerservice: Wrench,
  "Entrümpelungen": Trash2,
  Gartenpflege: Leaf,
};

export const metadata = createPageMetadata({
  title: "Startseite",
  description:
    "CBImmoService GmbH – Ihr Rundum-Service fürs Haus in Schortens, Jever und Umgebung. Entrümpelung, Gartenpflege, Handwerker, Objektbetreuung und mehr.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* Hero – cinematic intro */}
      <Hero />

      <TrustBadges />

      {/* Core services */}
      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Unsere Dienstleistungen
            </p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              Was wir für Sie übernehmen
            </h2>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Ob privates Eigenheim, Mehrfamilienhaus oder Mietobjekt – wir arbeiten schnell,
              zuverlässig und mit persönlichem Service direkt vor Ort.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainServices.map((service) => {
              const Icon = mainServiceIcons[service.title as keyof typeof mainServiceIcons];
              return (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-navy/8 bg-white p-8 shadow-sm"
                >
                  <span className="text-3xl" aria-hidden="true">{service.emoji}</span>
                  <h3 className="mt-4 font-serif text-xl text-navy">{service.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gold">{service.subline}</p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-navy/70">{service.text}</p>
                  <Link
                    href="/kontakt"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Zusatzleistungen über starke Partner
            </p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              Immobilien-Rundum-Service
            </h2>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Dank unserer starken Partner bieten wir Ihnen zudem Unterstützung bei
              Immobilienverkauf, Vermietung, Bewertung, Baufinanzierung und Energieberatung –
              alles aus einer Hand.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-navy/8 bg-[#f8f9fa] p-8"
              >
                <h3 className="font-serif text-xl text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-navy/70">{service.text}</p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors"
                >
                  {service.cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              CBImmoService – Schnell. Zuverlässig. Vor Ort!
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Ihr individuelles, unverbindliches Angebot.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Rufen Sie uns an oder senden Sie uns eine Nachricht – wir erstellen Ihnen schnell
              ein passendes Angebot für Ihr Objekt. Besonders ältere Menschen und Familien
              schätzen unsere unkomplizierte, freundliche Art und den reibungslosen Ablauf.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
