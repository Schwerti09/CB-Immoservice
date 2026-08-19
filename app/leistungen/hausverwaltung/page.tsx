import Link from "next/link";
import { CheckCircle2, FileCheck2, Handshake, LineChart } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hausverwaltung",
  description:
    "Professionelle Hausverwaltung, WEG-Verwaltung und Mietverwaltung für Wohn- und Gewerbeobjekte mit CB Immoservice.",
  path: "/leistungen/hausverwaltung",
});

const highlights = [
  "Hausverwaltung mit klarer Objektorganisation und verlässlicher Kommunikation",
  "WEG-Verwaltung mit strukturierter Betreuung von Eigentümergemeinschaften",
  "Mietverwaltung inklusive Koordination laufender Vorgänge und Meldungen",
  "Transparente Prozesse für Eigentümer, Mieter und Dienstleister",
];

export default function PropertyManagementPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Hausverwaltung</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">WEG-Verwaltung und Mietverwaltung mit Struktur und Verlässlichkeit</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Wir betreuen Wohn- und Gewerbeimmobilien mit Fokus auf Hausverwaltung,
              WEG-Verwaltung und Mietverwaltung. So bleiben Abläufe geordnet, Zuständigkeiten klar
              und der Werterhalt Ihrer Immobilie im Blick.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
            >
              Beratung anfragen
            </Link>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="font-serif text-3xl">Leistungsschwerpunkte</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              {highlights.map((item) => (
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
              icon: Handshake,
              title: "Kommunikation mit Haltung",
              text: "Wir sorgen für verlässliche Rückmeldungen, nachvollziehbare Zuständigkeiten und eine professionelle Ansprache aller Beteiligten.",
            },
            {
              icon: FileCheck2,
              title: "Saubere Objektkoordination",
              text: "Leistungen, Maßnahmen und Prioritäten werden strukturiert gesteuert – ohne operative Reibungsverluste.",
            },
            {
              icon: LineChart,
              title: "Wirtschaftlicher Blick",
              text: "Unsere Betreuung schafft Transparenz und unterstützt eine wertorientierte Entwicklung Ihrer Immobilie.",
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
