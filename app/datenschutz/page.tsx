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
        <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Datenschutzerklärung</h1>
        <div className="mt-10 space-y-6 rounded-[2rem] border border-navy/10 bg-white p-8 leading-8 text-navy/70 shadow-lg shadow-navy/5">
          <div>
            <h2 className="font-serif text-xl text-navy">Verantwortlicher</h2>
            <p className="mt-2">CBImmoService GmbH · Am Wald 7 · 26419 Schortens</p>
            <p>E-Mail: info@cbimmoservice.de</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">1. Verarbeitung personenbezogener Daten</h2>
            <p className="mt-2">
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorgaben
              (DSGVO/BDSG), insbesondere zur Bearbeitung von Anfragen und der Vertragsanbahnung.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">2. Kontakt- und Anfrageformulare</h2>
            <p className="mt-2">
              Wenn Sie uns über Formulare kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihres
              Anliegens sowie für mögliche Rückfragen.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">3. Rechtsgrundlagen</h2>
            <p className="mt-2">
              Die Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen),
              Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse).
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">4. Cookies</h2>
            <p className="mt-2">
              Es werden technisch notwendige Cookies gesetzt. Optionale Cookies werden nur nach Ihrer
              Einwilligung verarbeitet.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">5. Ihre Rechte</h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Beschwerde bei einer Aufsichtsbehörde.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">6. Hosting</h2>
            <p className="mt-2">
              Diese Website wird auf Infrastruktur in der EU bzw. mit geeigneten Garantien gemäß
              Art. 44 ff. DSGVO betrieben.
            </p>
          </div>
          <p className="text-sm text-navy/50">Stand: August 2026</p>
        </div>
      </div>
    </section>
  );
}
