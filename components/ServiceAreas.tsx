import { serviceAreas } from './siteContent';

export default function ServiceAreas() {
  return (
    <section id="einsatzgebiet">
      <div className="section-shell service-areas-layout fade-up" data-reveal>
        <div className="service-areas-copy">
          <p className="section-kicker">Regional im Einsatz</p>
          <h2>Unser Marktgebiet</h2>
          <p>
            Unser Schwerpunkt liegt in Nürnberg und der Metropolregion. So sichern wir kurze Wege,
            realistische Marktpreise und persönliche Betreuung.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#kontakt">
              Regionale Anfrage starten
            </a>
          </div>
        </div>
        <div className="service-areas-card">
          <h3>Vor Ort vernetzt für schnelle Entscheidungen</h3>
          <div className="city-grid">
            {serviceAreas.map((city) => (
              <span className="city-chip" key={city}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
