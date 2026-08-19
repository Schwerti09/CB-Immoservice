export default function MobileDock() {
  return (
    <div className="mobile-dock" aria-label="Mobile Schnellaktionen">
      <a className="mobile-dock-primary" href="tel:+4944619169850">
        <span aria-hidden="true">📞</span>
        Anrufen
      </a>
      <a className="mobile-dock-secondary" href="#kontakt">
        <span aria-hidden="true">✉</span>
        Anfrage stellen
      </a>
    </div>
  );
}
