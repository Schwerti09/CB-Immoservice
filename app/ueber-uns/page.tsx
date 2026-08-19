import { BadgeCheck, HeartHandshake, Telescope } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { companyValues, teamPlaceholders } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Über Uns",
  description:
    "Erfahren Sie mehr über CB Immoservice, unsere Werte und unsere Arbeitsweise im Immobilienservice.",
  path: "/ueber-uns",
});

const valueIcons = [BadgeCheck, HeartHandshake, Telescope];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Über Uns</p>
            <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">CB Immoservice steht für gepflegte Standards und verlässliche Betreuung</h1>
            <p className="mt-6 text-lg leading-8 text-navy/70">
              Als inhabergeprägtes Dienstleistungsunternehmen begleiten wir Immobilien mit der Sorgfalt,
              die Eigentümer und Nutzer erwarten dürfen. Unser Anspruch ist eine Betreuung, die hochwertig,
              diskret und im Alltag wirklich entlastend ist.
            </p>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Wir kombinieren operative Präsenz vor Ort mit strukturierten Prozessen, damit jede Immobilie
              professionell geführt, gepflegt und repräsentativ betreut wird.
            </p>
          </div>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-luxury">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Unsere Geschichte</p>
            <p className="mt-5 leading-8 text-navy/70">
              CB Immoservice wurde mit dem Ziel aufgebaut, Eigentümern und Verwaltern einen zentralen,
              vertrauenswürdigen Partner für die Betreuung anspruchsvoller Immobilien zu bieten.
              Aus diesem Gedanken ist ein Leistungsspektrum entstanden, das Verwaltung, Reinigung und
              Hausmeisterservice sinnvoll verbindet.
            </p>
            <p className="mt-5 leading-8 text-navy/70">
              Heute stehen wir für Mittelstandsqualität: persönlich, verbindlich und mit einem klaren
              Qualitätsverständnis über alle Servicebereiche hinweg.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {companyValues.map((value, index) => {
              const Icon = valueIcons[index] ?? BadgeCheck;
              return (
                <article key={value.title} className="rounded-[2rem] border border-navy/10 p-8 shadow-lg shadow-navy/5">
                  <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <h2 className="mt-6 font-serif text-2xl text-navy">{value.title}</h2>
                  <p className="mt-4 leading-7 text-navy/70">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Teamstruktur</p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">Klare Rollen für eine zuverlässige Betreuung</h2>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Unsere Teams arbeiten eng verzahnt, damit Verwaltungsfragen, operative Themen und Serviceleistungen sauber ineinandergreifen.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {teamPlaceholders.map((member) => (
              <article key={member.role} className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 font-serif text-xl text-gold">
                  CB
                </div>
                <h3 className="mt-6 font-serif text-2xl text-navy">{member.role}</h3>
                <p className="mt-4 leading-7 text-navy/70">{member.description}</p>
                {/* TODO: Echte Teamvorstellung ergänzen */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
