import { services } from './siteContent';

const serviceIcons = {
  verkauf: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20V9.5L12 4l8 5.5V20" />
      <path d="M9 20v-5h6v5" />
      <path d="M8 11h8" />
    </svg>
  ),
  vermietung: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  ),
  bewertung: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3v18" />
      <path d="M7 7h8a3 3 0 1 1 0 6H9a3 3 0 1 0 0 6h8" />
    </svg>
  ),
  beratung: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 4h12v16l-6-3-6 3V4Z" />
      <path d="M9 9h6" />
      <path d="M9 12h4" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="leistungen">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Leistungen</p>
          <h2>Was wir für Sie übernehmen</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {serviceIcons[service.key as keyof typeof serviceIcons]}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="ghost-link" href="#kontakt">
                Anfrage stellen
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
