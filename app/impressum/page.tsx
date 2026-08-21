import { createPageMetadata } from "@/lib/metadata";

<<<<<<< HEAD
export const metadata = createPageMetadata({
  title: "Impressum",
  description: "Impressumsangaben von CB Immoservice.",
  path: "/impressum",
});
=======
export const metadata: Metadata = {
  title: 'Impressum | ImmoService GmbH Metropolregion Nürnberg',
  description: 'Impressum der ImmoService GmbH Metropolregion Nürnberg.',
};
>>>>>>> origin/main

export default function ImprintPage() {
  return (
<<<<<<< HEAD
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Impressum</p>
        <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Rechtliche Angaben</h1>
        <div className="mt-10 rounded-[2rem] border border-navy/10 bg-[#f8f9fa] p-8 leading-8 text-navy/70 shadow-lg shadow-navy/5">
          {/* TODO: Vollständige Impressumsangaben mit Rechtsform, Vertretungsberechtigten, Anschrift und Registernummer ergänzen */}
          <p>CB Immoservice</p>
          <p>Website: www.cbimmoservice.de</p>
          <p>E-Mail: info@cbimmoservice.de</p>
        </div>
      </div>
    </section>
=======
    <main className="legal-page">
      <section className="section-shell legal-shell fade-up" data-reveal>
        <p className="section-kicker">Rechtliches</p>
        <h1>Impressum</h1>
        <article className="legal-card">
          <pre>
{`Angaben gemäß § 5 TMG

ImmoService GmbH Metropolregion Nürnberg
Ostendstraße 149
90482 Nürnberg

Vertreten durch:
Geschäftsführer Günter Schenk

Kontakt:
Telefon: +49 911 23 55 69-0
E-Mail: info@immoservice.de

Handelsregister:
Amtsgericht Nürnberg, HRB 14670

Umsatzsteuer-ID gemäß § 27a UStG:
DE 186953147

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
Günter Schenk, Ostendstraße 149, 90482 Nürnberg

Haftungsausschluss:
Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`}
          </pre>
          {/* TODO(owner): Impressumsdaten mit Live-Domain cbimmoservice.de final gegenprüfen, sobald der direkte Zugriff wieder möglich ist. */}
        </article>
      </section>
    </main>
>>>>>>> origin/main
  );
}
