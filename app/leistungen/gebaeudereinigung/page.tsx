import Link from "next/link";
import { CheckCircle2, ClipboardList, Gem, Sparkles } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gebäudereinigung",
  description:
    "Gebäudereinigung mit Unterhaltsreinigung, Glas- und Rahmenreinigung sowie Sonderreinigung für gepflegte Wohn- und Gewerbeimmobilien.",
  path: "/leistungen/gebaeudereinigung",
});

const services = [
  "Unterhaltsreinigung für Treppenhäuser, Eingänge und Gemeinschaftsflächen",
  "Glas- und Rahmenreinigung für einen gepflegten Auftritt",
  "Sichtkontrollen und abgestimmte Reinigungsintervalle",
  "Sonderreinigung nach Bedarf und Objektanforderung",
];

export default function CleaningPage() {
  return (
    <>
      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Gebäudereinigung</p>
            <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Gepflegte Immobilien hinterlassen Eindruck – jeden Tag</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70">
              Unsere Reinigungsleistungen orientieren sich an Nutzung, Frequenz und Anspruch Ihres Objekts.
              So entsteht ein dauerhaft hochwertiger Gesamteindruck statt bloßer Routine.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold"
            >
              Reinigungskonzept anfragen
            </Link>
          </div>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-luxury">
            <h2 className="font-serif text-3xl text-navy">Typische Leistungsbausteine</h2>
            <ul className="mt-6 space-y-4 text-navy/75">
              {services.map((item) => (
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
              icon: Sparkles,
              title: "Sichtbar gepflegt",
              text: "Saubere Eingänge, Treppenhäuser und Gemeinschaftsflächen stärken den Wert- und Qualitäts­eindruck Ihrer Immobilie.",
            },
            {
              icon: ClipboardList,
              title: "Klar definierte Intervalle",
              text: "Reinigungspläne werden nachvollziehbar abgestimmt und passend zu Objektgröße, Nutzung und Anspruch festgelegt.",
            },
            {
              icon: Gem,
              title: "Premium statt Standard",
              text: "Wir arbeiten mit einem hohen Anspruch an Sorgfalt, Auftreten und Detailtreue – gerade bei repräsentativen Objekten.",
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
