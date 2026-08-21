import { aboutValues } from './siteContent';

export default function About() {
  return (
    <section id="ueber-uns" className="trust-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Über uns</p>
          <h2>Immobilienkompetenz mit klaren Werten</h2>
          <p>
            Wir begleiten Eigentümer, Käufer und Mieter in der Metropolregion Nürnberg mit
            persönlicher Beratung und einem belastbaren Netzwerk.
          </p>
          {/* TODO(owner): Kurzbio-Text mit finaler Fassung von cbimmoservice.de gegenprüfen, da Domain aktuell nicht direkt abrufbar war. */}
        </div>
        <div className="facts-grid">
          {aboutValues.map((value) => (
            <div className="fact-pill" key={value}>
              <div className="fact-copy">
                <strong>{value}</strong>
                <span>ImmoService-Team</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
