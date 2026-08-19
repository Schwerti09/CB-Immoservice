'use client';

import { teamMembers } from './siteContent';

export default function Team() {
  const openAppointmentModal = (memberName: string) => {
    window.dispatchEvent(
      new CustomEvent('cb:open-appointment', {
        detail: { source: 'team', message: `Terminwunsch mit ${memberName}` },
      }),
    );
  };

  return (
    <section id="team" className="team-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Team</p>
          <h2>Ihre Ansprechpartner</h2>
          <p>
            Direkt, verbindlich und auf Augenhöhe: Unser Team begleitet Sie durch jeden Schritt
            Ihrer Immobilienentscheidung.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.email}>
              <picture className="team-image-wrap">
                <source
                  type="image/webp"
                  srcSet={`${member.imageBase}-480.webp 480w, ${member.imageBase}-960.webp 960w`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <img
                  src={`${member.imageBase}-960.jpg`}
                  srcSet={`${member.imageBase}-480.jpg 480w, ${member.imageBase}-960.jpg 960w`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                  alt={`${member.name}, ${member.role}`}
                />
              </picture>

              <div className="team-card-body">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.focus}</p>
              </div>

              <div className="team-overlay" aria-hidden="true">
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`}>📞 {member.phone}</a>
                <a href={`mailto:${member.email}`}>✉ {member.email}</a>
              </div>

              <div className="team-actions">
                <a className="ghost-link" href={`mailto:${member.email}`}>
                  E-Mail senden
                </a>
                <button className="primary-button" type="button" onClick={() => openAppointmentModal(member.name)}>
                  Termin vereinbaren
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* TODO(owner): Teamfotos durch finale Portraits von cbimmoservice.de ersetzen, sobald Originaldateien bereitgestellt sind. */}
      </div>
    </section>
  );
}
