import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz | ImmoService GmbH Metropolregion Nürnberg',
  description: 'Datenschutzerklärung der ImmoService GmbH Metropolregion Nürnberg.',
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

Verantwortlicher:
ImmoService GmbH Metropolregion Nürnberg
Ostendstraße 149, 90482 Nürnberg
E-Mail: info@immoservice.de
Telefon: +49 911 23 55 69-0

1. Verarbeitung personenbezogener Daten
Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Vorgaben (DSGVO/BDSG),
insbesondere zur Bearbeitung von Anfragen, Terminvereinbarungen und der Vertragsanbahnung.

2. Kontakt- und Anfrageformulare
Wenn Sie uns über Formulare kontaktieren, speichern wir Ihre Angaben zur Bearbeitung Ihres Anliegens
sowie für mögliche Rückfragen.

3. Rechtsgrundlagen
Die Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen),
Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).

4. Cookies
Es werden technisch notwendige Cookies gesetzt. Optionale Cookies werden nur nach Ihrer Einwilligung verarbeitet.

5. Ihre Rechte
Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
Datenübertragbarkeit sowie Beschwerde bei einer Aufsichtsbehörde.

6. Hosting
Diese Website wird auf Infrastruktur in der EU bzw. mit geeigneten Garantien gemäß Art. 44 ff. DSGVO betrieben.

Stand: August 2026`}
          </pre>
          {/* TODO(owner): Datenschutztext mit finaler Fassung der Live-Seite cbimmoservice.de harmonisieren. */}
        </article>
      </section>
    </main>
  );
}
