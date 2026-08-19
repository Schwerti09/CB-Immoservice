import Link from 'next/link';
import { company } from './siteContent';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{company.name}</h3>
            <p className="footer-copy">{company.slogan} Ihr Immobilienmakler in der Metropolregion Nürnberg.</p>
          </div>
          <div className="footer-links" aria-label="Schnelllinks">
            <Link className="footer-link" href="/#leistungen">
              Leistungen
            </Link>
            <Link className="footer-link" href="/#ueber-uns">
              Über uns
            </Link>
            <Link className="footer-link" href="/#team">
              Team
            </Link>
            <Link className="footer-link" href="/#kontakt">
              Kontakt
            </Link>
            <Link className="footer-link" href="/impressum">
              Impressum
            </Link>
            <Link className="footer-link" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
          <div>
            <p className="footer-contact">{company.phone}</p>
            <p className="footer-contact">{company.email}</p>
            <p className="footer-contact">{company.addressLine1}</p>
            <p className="footer-contact">{company.addressLine2}</p>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>{company.region}</span>
        </div>
      </div>
    </footer>
  );
}
