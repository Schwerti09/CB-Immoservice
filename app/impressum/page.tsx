import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | CB Immoservice',
  description: 'Impressum der CBImmoService GmbH aus Schortens.',
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

CBImmoService GmbH
Schortens, Deutschland

Telefon: +49 4461 9169 850
E-Mail: info@cbimmoservice.de

Registereintrag: Eingetragen im Handelsregister
Registergericht: Amtsgericht Aurich

Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: wird auf Anfrage mitgeteilt

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
CBImmoService GmbH, Schortens

Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`}
          </pre>
        </article>
      </section>
    </main>
  );
}
