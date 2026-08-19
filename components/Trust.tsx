const facts = [
  'Über 10 Jahre Erfahrung',
  'Familiengeführtes Unternehmen',
  'Festpreise ohne versteckte Kosten',
  'Alle Leistungen aus einer Hand',
  'Kostenlose Erstberatung',
  'Schnelle Reaktionszeiten',
];

function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 5 6v5c0 5 3.4 8.7 7 10 3.6-1.3 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7L15 10" />
    </svg>
  );
}

export default function Trust() {
  return (
    <section id="warum-wir" className="trust-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Vertrauen</p>
          <h2>Warum CB Immoservice?</h2>
          <p>
            Premium im Auftritt, bodenständig in der Zusammenarbeit: Wir verbinden klare
            Kommunikation, verlässliche Termine und saubere Ergebnisse.
          </p>
        </div>
        <div className="facts-grid">
          {facts.map((fact) => (
            <div className="fact-pill" key={fact}>
              <TrustIcon />
              <div className="fact-copy">
                <strong>{fact}</strong>
                <span>CBImmoService GmbH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
