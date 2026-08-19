const cities = ['Schortens', 'Jever', 'Wilhelmshaven', 'Wittmund', 'Landkreis Friesland'];

export default function ServiceAreas() {
  return (
    <section id="einsatzgebiet">
      <div className="section-shell service-areas-layout fade-up" data-reveal>
        <div className="service-areas-copy">
          <p className="section-kicker">Regional im Einsatz</p>
          <h2>Unser Einsatzgebiet</h2>
          <p>
            Wir sind in Schortens, Jever, Wilhelmshaven, Wittmund und dem gesamten
            Landkreis Friesland für Sie im Einsatz.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#kontakt">
              Anfrage für Ihre Region
            </a>
          </div>
        </div>
        <div className="service-areas-card">
          <h3>Vor Ort für kurze Wege und schnelle Reaktionen</h3>
          <div className="city-grid">
            {cities.map((city) => (
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
