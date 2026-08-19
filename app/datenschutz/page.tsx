import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz | CB Immoservice',
  description: 'Datenschutzerklärung der CBImmoService GmbH.',
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <section className="section-shell legal-shell fade-up" data-reveal>
        <p className="section-kicker">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>
        <article className="legal-card">
          <pre>
{`Datenschutzerklärung

Verantwortlicher: CBImmoService GmbH, Schortens, info@cbimmoservice.de

1. Erhebung und Verarbeitung personenbezogener Daten
Wir erheben personenbezogene Daten nur, soweit dies zur Erbringung unserer Dienstleistungen erforderlich ist.

2. Kontaktformular
Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage und für Rückfragen gespeichert.

3. Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit. Wenden Sie sich hierzu an info@cbimmoservice.de.

4. Cookies
Diese Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies eingesetzt.

5. Hosting
Diese Website wird über Netlify gehostet. Netlify kann technische Verbindungsdaten erfassen. Weitere Informationen: https://www.netlify.com/privacy/

Letzte Aktualisierung: 2024`}
          </pre>
        </article>
      </section>
    </main>
  );
}
