const NAV = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#objekte", label: "Objekte" },
  { href: "#kontakt", label: "Kontakt" },
];

function Monogram() {
  return (
    <svg className="wordmark__mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 23V9h6.5a3.6 3.6 0 0 1 0 7H10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.5 16a3.6 3.6 0 0 1 0 7H8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 11.5a4.6 4.6 0 1 0 0 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Masthead() {
  return (
    <header className="masthead">
      <div className="shell masthead__inner">
        <a className="wordmark" href="#top" aria-label="CB Immoservice, zur Startseite">
          <Monogram />
          CB Immoservice
          <em>Rheinland</em>
        </a>
        <nav className="nav" aria-label="Hauptnavigation">
          <span className="nav__links">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </span>
          <a className="nav__phone" href="tel:+4921189734120">
            0211 897 341 20
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p>CB Immoservice, Carola Brandt e.K. — Verwaltung seit 2009</p>
        <nav aria-label="Rechtliches">
          <a href="#kontakt">Impressum</a>
          <a href="#kontakt">Datenschutz</a>
          <a href="#leistungen">Leistungen</a>
        </nav>
      </div>
    </footer>
  );
}
