export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>CBImmoService GmbH</h3>
            <p className="footer-copy">Rundum-Service fürs Haus – Aus einer Hand.</p>
          </div>
          <div className="footer-links" aria-label="Schnelllinks">
            <a className="footer-link" href="/#leistungen">
              Leistungen
            </a>
            <a className="footer-link" href="/#kontakt">
              Kontakt
            </a>
            <a className="footer-link" href="/impressum">
              Impressum
            </a>
            <a className="footer-link" href="/datenschutz">
              Datenschutz
            </a>
          </div>
          <div>
            <p className="footer-contact">+49 4461 9169 850</p>
            <p className="footer-contact">info@cbimmoservice.de</p>
            <p className="footer-contact">Schortens, Deutschland</p>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} CBImmoService GmbH</span>
          <span>Schortens, Jever, Wilhelmshaven, Wittmund und Umgebung</span>
        </div>
      </div>
    </footer>
  );
}
