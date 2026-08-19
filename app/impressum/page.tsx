import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | ImmoService GmbH Metropolregion Nürnberg',
  description: 'Impressum der ImmoService GmbH Metropolregion Nürnberg.',
};

export default function ImpressumPage() {
  return (
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
  );
}
