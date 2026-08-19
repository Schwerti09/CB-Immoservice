const facts = [
  'Verkauf und Vermietung mit messbarer Strategie',
  'Objektbewertung auf Basis aktueller Marktdaten',
  'Finanzierungsbegleitung mit regionalen Bankpartnern',
  'Persönliche Ansprechpartner über den gesamten Prozess',
  'Transparente Kommunikation und verbindliche Termine',
  'Erfahrung von Bestand bis Neubauprojekt',
];

export default function Trust() {
  return (
    <section id="warum-wir" className="trust-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Warum wir</p>
          <h2>Premium-Service mit Substanz</h2>
          <p>
            Wir kombinieren lokale Marktkenntnis mit einem professionellen Vermarktungsprozess –
            für fundierte Entscheidungen und einen reibungslosen Ablauf.
          </p>
        </div>
        <div className="facts-grid">
          {facts.map((fact) => (
            <div className="fact-pill" key={fact}>
              <div className="fact-copy">
                <strong>{fact}</strong>
                <span>ImmoService GmbH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
