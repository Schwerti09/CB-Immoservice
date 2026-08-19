import Link from "next/link";
import { CheckCircle2, KeyRound, Siren, Wrench } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hausmeisterservice / Facility Management",
  description:
    "Hausmeisterservice und Facility Management für gepflegte, funktionierende und professionell betreute Immobilien.",
  path: "/leistungen/hausmeisterservice",
});

const serviceModules = [
  "Regelmäßige Kontrollgänge und Sichtprüfungen",
  "Kleinreparaturen und operative Entlastung im Alltag",
  "Koordination von Handwerks-, Wartungs- und Serviceterminen",
  "Schadensmeldungen erfassen, priorisieren und nachverfolgen",
];

export default function CaretakerPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Hausmeisterservice / Facility Management</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Präsenz vor Ort, wenn Ihre Immobilie sie braucht</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Unser Hausmeisterservice mit Facility Management sorgt für Ordnung, Kontrolle und
              schnelle Reaktionsfähigkeit im Alltag. Damit Objekte funktionieren, gepflegt wirken
              und kleine Themen nicht zu großen werden.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
            >
              Service anfragen
            </Link>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-serif text-3xl">Typische Aufgaben</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              {serviceModules.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {[
            {
              icon: KeyRound,
              title: "Verlässliche Präsenz",
              text: "Regelmäßige Begehungen schaffen Sicherheit, Ordnung und einen reibungslosen Gebäudebetrieb.",
            },
            {
              icon: Wrench,
              title: "Pragmatische Unterstützung",
              text: "Kleine technische oder organisatorische Aufgaben werden schnell aufgegriffen und lösungsorientiert begleitet.",
            },
            {
              icon: Siren,
              title: "Kurze Reaktionswege",
              text: "Bei Auffälligkeiten oder Meldungen werden Themen priorisiert und sauber an die richtigen Stellen weitergegeben.",
            },
          ].map((feature) => (
            <article key={feature.title} className="rounded-[2rem] border border-navy/10 p-8 shadow-lg shadow-navy/5">
              <feature.icon className="h-8 w-8 text-gold" aria-hidden="true" />
              <h2 className="mt-6 font-serif text-2xl text-navy">{feature.title}</h2>
              <p className="mt-4 leading-7 text-navy/70">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
