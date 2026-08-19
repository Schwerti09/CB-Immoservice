const navItems = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum-wir', label: 'Warum wir' },
  { href: '#einsatzgebiet', label: 'Einsatzgebiet' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Startbereich">
      <div className="hero-shell">
        <header className="hero-header fade-up is-visible">
          <a className="brand-mark" href="#top" aria-label="CBImmoService Startseite">
            CBImmoService GmbH
          </a>
          <nav className="hero-nav" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy fade-up is-visible">
            <p className="section-kicker">Schortens · Jever · Friesland</p>
            <div className="eyebrow-line" aria-hidden="true" />
            <h1>Rundum-Service fürs Haus</h1>
            <p className="hero-subheadline">Professionell. Zuverlässig. Aus einer Hand.</p>
            <p>
              CB Immoservice – Ihr regionaler Partner für Entrümpelung, Gartenpflege,
              Handwerk und Objektbetreuung in Schortens, Jever und Umgebung.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#kontakt">
                Angebot anfordern
              </a>
              <a className="secondary-button" href="tel:+4944619169850">
                Direkt anrufen
              </a>
            </div>
          </div>

          <aside className="hero-stat-card fade-up" data-reveal>
            <span className="hero-card-label">Rundum-Service fürs Haus – Aus einer Hand.</span>
            <p className="hero-card-highlight">Über 10 Jahre Erfahrung</p>
            <p>
              Zuverlässiger Partner für Haus, Garten und Immobilie im Landkreis Friesland.
            </p>
            <ul className="hero-card-list">
              <li>Entrümpelungen professionell, diskret und besenrein</li>
              <li>Gartenpflege und Objektservice mit schnellen Reaktionszeiten</li>
              <li>Familiengeführt, fair kalkuliert und persönlich erreichbar</li>
            </ul>
          </aside>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Nach unten scrollen</span>
          <span />
        </div>
      </div>
    </section>
  );
}
