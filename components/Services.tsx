const serviceIcons = {
  entruempelungen: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h16" />
      <path d="M7 7V5.8a1.8 1.8 0 0 1 1.8-1.8h6.4A1.8 1.8 0 0 1 17 5.8V7" />
      <path d="M6 7l1 11a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8L18 7" />
      <path d="M10 11v5" />
      <path d="M14 11v5" />
    </svg>
  ),
  gartenpflege: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 20V9" />
      <path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7Z" />
      <path d="M12 15c0-3.5-2.8-6.5-6.5-6.5C5.5 12 8 15 12 15Z" />
      <path d="M9 20h6" />
    </svg>
  ),
  handwerkerservice: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m14 6 4 4" />
      <path d="M5 19l6.5-6.5a3 3 0 0 0 3.8-.4l1.6-1.6a3 3 0 0 0-3.8-4.7L11.8 7a3 3 0 0 0-.4 3.8L5 17.2V19Z" />
    </svg>
  ),
  objektbetreuung: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20V9.5L12 4l8 5.5V20" />
      <path d="M9 20v-5h6v5" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  ),
};

const services = [
  {
    key: 'entruempelungen' as const,
    title: 'Entrümpelungen',
    description:
      'Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden. Schnell, diskret und besenrein.',
  },
  {
    key: 'gartenpflege' as const,
    title: 'Gartenpflege',
    description:
      'Gartenpflege, Rasenmähen, Heckenschnitt, Baumpflege und Saisonbepflanzung – wir halten Ihren Garten in Topform.',
  },
  {
    key: 'handwerkerservice' as const,
    title: 'Handwerkerservice',
    description:
      'Kleine und mittlere Reparaturen, Renovierungen und Modernisierungen. Verlässliche Ausführung zu fairen Preisen.',
  },
  {
    key: 'objektbetreuung' as const,
    title: 'Objektbetreuung',
    description:
      'Professionelle Betreuung von Wohn- und Gewerbeobjekten: Wartung, Instandhaltung, Schlüsselservice.',
  },
];

const partnerServices = [
  'Immobilienverkauf & -vermietung',
  'Immobilienbewertung',
  'Finanzierungsberatung',
  'Energieberatung',
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v5" />
      <path d="M12 16v5" />
      <path d="M3 12h5" />
      <path d="M16 12h5" />
      <path d="m6 6 3 3" />
      <path d="m15 15 3 3" />
      <path d="m6 18 3-3" />
      <path d="m15 9 3-3" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="leistungen">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Leistungen</p>
          <h2>Unsere Leistungen</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {serviceIcons[service.key]}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="ghost-link" href="#kontakt">
                Anfrage stellen
              </a>
            </article>
          ))}
        </div>

        <div className="partner-services">
          <h3>Partner-Services</h3>
          <p>
            Ergänzende Leistungen rund um Ihre Immobilie – kompakt gebündelt über unser
            Netzwerk.
          </p>
          <div className="partner-grid">
            {partnerServices.map((service) => (
              <div className="partner-pill" key={service}>
                <SparkIcon />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
