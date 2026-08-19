import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise von CB Immoservice.",
  path: "/datenschutz",
});

export default function PrivacyPage() {
  return (
    <section className="bg-[#f8f9fa] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Datenschutz</p>
        <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Hinweise zum Datenschutz</h1>
        <div className="mt-10 rounded-[2rem] border border-navy/10 bg-white p-8 leading-8 text-navy/70 shadow-lg shadow-navy/5">
          {/* TODO: Vollständige Datenschutzerklärung mit Verantwortlichem, Rechtsgrundlagen und Betroffenenrechten ergänzen */}
          <p>
            Diese Seite enthält Platzhaltertexte. Bitte ergänzen Sie vor dem Livegang eine vollständige,
            rechtlich geprüfte Datenschutzerklärung mit allen erforderlichen Informationen zur Verarbeitung
            personenbezogener Daten.
          </p>
          <p className="mt-5">
            Dazu gehören insbesondere Angaben zu Kontaktformularen, Hosting, Logfiles, Analyse-Tools,
            Speicherfristen sowie den Rechten betroffener Personen.
          </p>
        </div>
      </div>
    </section>
  );
}
