import { Footer, Masthead } from "./components/Chrome";

export const metadata = { title: "Seite nicht gefunden" };

export default function NotFound() {
  return (
    <>
      <Masthead />
      <main className="shell notfound">
        <p className="eyebrow">
          <span>404</span>
          <span>Nichts hinter dieser Tür</span>
        </p>
        <h1>Adresse unbekannt.</h1>
        <p>
          Die Seite wurde verschoben oder hat nie existiert. Zurück zur Startseite oder direkt
          zum Kontakt.
        </p>
        <div className="hero__actions">
          <a className="btn" href="/">
            Zur Startseite
          </a>
          <a className="btn btn--ghost" href="/#kontakt">
            Kontakt
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
