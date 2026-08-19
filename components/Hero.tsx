'use client';

import { useEffect, useState } from 'react';
import { company, navItems } from './siteContent';

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openAppointmentModal = () => {
    window.dispatchEvent(new CustomEvent('cb:open-appointment', { detail: { source: 'hero' } }));
  };

  return (
    <section className="hero" id="top" aria-label="Startbereich">
      <picture className="hero-image-wrap">
        <source
          type="image/webp"
          srcSet="/images/hero/hero-main-800.webp 800w, /images/hero/hero-main-1600.webp 1600w"
          sizes="100vw"
        />
        <img
          src="/images/hero/hero-main-1600.jpg"
          srcSet="/images/hero/hero-main-800.jpg 800w, /images/hero/hero-main-1600.jpg 1600w"
          sizes="100vw"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      <div className="hero-shell">
        <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
          <a className="brand-mark" href="#top" aria-label="Startseite">
            {company.name}
          </a>

          <nav className="hero-nav" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="secondary-button header-cta" type="button" onClick={openAppointmentModal}>
              Termin vereinbaren
            </button>
            <button
              className={`menu-toggle${mobileOpen ? ' is-open' : ''}`}
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <div id="mobile-menu" className={`mobile-menu${mobileOpen ? ' is-open' : ''}`}>
          <nav aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <button
              className="primary-button mobile-menu-button"
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openAppointmentModal();
              }}
            >
              Termin vereinbaren
            </button>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy fade-up is-visible">
            <p className="section-kicker">{company.region}</p>
            <div className="eyebrow-line" aria-hidden="true" />
            <h1>{company.slogan}</h1>
            <p className="hero-subheadline">Ihr Immobilienmakler in der Metropolregion Nürnberg</p>
            <p>
              Kaufen, verkaufen, vermieten, bewerten, beraten, finanzieren – {company.slogan}
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={openAppointmentModal}>
                Jetzt Termin anfragen
              </button>
              <a className="secondary-button" href={company.phoneHref}>
                Direkt anrufen
              </a>
            </div>
          </div>

          <aside className="hero-stat-card fade-up" data-reveal>
            <span className="hero-card-label">Value Proposition</span>
            <p className="hero-card-highlight">Regional. Persönlich. Verlässlich.</p>
            <p>
              Von der ersten Bewertung bis zum Notartermin begleiten wir Sie mit transparenten
              Prozessen und messbarer Qualität.
            </p>
            <ul className="hero-card-list">
              <li>Verkauf, Vermietung, Bewertung & Finanzierung aus einer Hand</li>
              <li>Marktnähe in Nürnberg, Fürth, Erlangen und Umgebung</li>
              <li>Persönliche Ansprechpartner statt Callcenter-Prozesse</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
