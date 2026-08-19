import Reveal from "./components/Reveal";
import { Footer, Masthead } from "./components/Chrome";

const FIGURES = [
  { value: "1.284", label: "verwaltete Einheiten" },
  { value: "4,3 Std.", label: "⌀ Reaktion auf Störmeldungen" },
  { value: "17 Jahre", label: "am Objekt, seit 2009" },
];

const MARQUEE = [
  "WEG-Verwaltung",
  "Mietverwaltung",
  "Betriebskosten",
  "Wartungsplanung",
  "Verkehrssicherung",
  "Modernisierung",
  "Vermietung",
];

const SERVICES = [
  {
    title: "WEG-Verwaltung",
    tags: ["Beschlusssammlung", "Jahresabrechnung", "Versammlung"],
    copy:
      "Vorbereitung und Leitung der Eigentümerversammlung, Umsetzung der Beschlüsse, Erhaltungsrücklage nach WEG-Novelle. Die Abrechnung liegt bis Ende März vor, nicht im Herbst.",
  },
  {
    title: "Mietverwaltung",
    tags: ["Nebenkosten", "Mahnwesen", "Indexmiete"],
    copy:
      "Mietinkasso mit tagesaktuellem Saldenblick, Betriebskostenabrechnung inklusive Belegprüfung, Anpassungen nach Index oder Vergleichsmiete mit dokumentierter Begründung.",
  },
  {
    title: "Technische Objektbetreuung",
    tags: ["Wartungsplan", "Verkehrssicherung", "Prüffristen"],
    copy:
      "Ein Wartungskalender pro Objekt: Aufzug, Heizung, Trinkwasser, Rauchwarnmelder, Blitzschutz. Prüffristen laufen nicht ab, weil sie terminiert und nachgehalten werden.",
  },
  {
    title: "Vermietung und Verkauf",
    tags: ["Exposé", "Bonität", "Übergabe"],
    copy:
      "Vorauswahl statt Massenbesichtigung: Bonitätsnachweis und Selbstauskunft vor dem Termin, Übergabeprotokoll mit Zählerständen und Fotostrecke.",
  },
  {
    title: "Instandsetzung und Modernisierung",
    tags: ["Ausschreibung", "Bauleitung", "Abnahme"],
    copy:
      "Drei belastbare Angebote pro Gewerk, Vergabeempfehlung mit Bewertungsraster, Baubegleitung bis zur Abnahme und Gewährleistungsverfolgung danach.",
  },
];

const STEPS = [
  {
    title: "Objektaufnahme",
    copy: "Begehung mit Checkliste, Sichtung der Verträge, Bestandsaufnahme der offenen Punkte. Dauer: rund zwei Wochen.",
  },
  {
    title: "Übergabeplan",
    copy: "Fester Termin für den Verwalterwechsel, Datenübernahme, Information an Eigentümer und Mieter aus einer Hand.",
  },
  {
    title: "Regelbetrieb",
    copy: "Feste Ansprechpartnerin, Störmeldung per Telefon oder Formular, Rückmeldung am selben Werktag.",
  },
  {
    title: "Jahresbericht",
    copy: "Abrechnung, Wirtschaftsplan und ein Vorschlag zur Instandhaltungsplanung für die kommenden fünf Jahre.",
  },
];

const OBJECTS = [
  {
    kind: "WEG-Verwaltung",
    title: "Gründerzeitensemble Lindenallee",
    facts: [
      ["Einheiten", "48"],
      ["Baujahr", "1904"],
      ["Seit", "2016"],
    ],
  },
  {
    kind: "Mietverwaltung",
    title: "Wohnpark Ostfeld, Haus C bis E",
    facts: [
      ["Einheiten", "112"],
      ["Baujahr", "1998"],
      ["Seit", "2019"],
    ],
  },
  {
    kind: "Gewerbe",
    title: "Kontorhaus am Fährweg",
    facts: [
      ["Fläche", "3.140 m²"],
      ["Mieter", "9"],
      ["Seit", "2021"],
    ],
  },
  {
    kind: "Modernisierung",
    title: "Zeilenbau Talstraße 7 bis 13",
    facts: [
      ["Volumen", "1,74 Mio. €"],
      ["Einheiten", "36"],
      ["Abschluss", "2025"],
    ],
  },
];

const VOICES = [
  {
    quote:
      "Nach dem Wechsel lag die Jahresabrechnung erstmals vor der Versammlung auf dem Tisch. Das klingt banal, war bei uns aber zwölf Jahre lang anders.",
    who: "Marek Dülfer",
    role: "Verwaltungsbeirat, WEG Lindenallee",
  },
  {
    quote:
      "Der Wasserschaden im Staffelgeschoss war um 7:40 gemeldet, der Notdienst um 9:15 vor Ort, die Regulierung lief ohne dass ich telefonieren musste.",
    who: "Ines Achterberg",
    role: "Eigentümerin, zwei Einheiten",
  },
  {
    quote:
      "Wir bekommen die Vergabeübersicht als Tabelle mit allen drei Angeboten. Der Beirat kann entscheiden, ohne Angebote selbst zu vergleichen.",
    who: "Hartmut Röskes",
    role: "Beiratsvorsitz, Wohnpark Ostfeld",
  },
];

export default function Home() {
  return (
    <>
      <Masthead />

      <main id="top">
        <section className="hero">
          <div className="shell hero__grid">
            <div>
              <Reveal delay={0}>
                <p className="eyebrow">
                  <span>CB</span>
                  <span>Hausverwaltung · Objektbetreuung · Vermietung</span>
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1>
                  Verwaltung, die <i>zurückruft</i> — und abrechnet, bevor Sie fragen.
                </h1>
              </Reveal>
              <Reveal delay={190}>
                <p className="hero__lead">
                  CB Immoservice betreut Eigentümergemeinschaften und Mietshäuser im Rheinland.
                  Eine feste Ansprechpartnerin pro Objekt, ein Wartungskalender, der eingehalten
                  wird, und Zahlen, die auch ein Beirat ohne Vorkenntnisse prüfen kann.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="hero__actions">
                  <a className="btn" href="#kontakt">
                    Objekt vorstellen
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        d="M2 8h11M9 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a className="btn btn--ghost" href="#leistungen">
                    Leistungen ansehen
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero__aside" delay={360}>
              <dl className="figures">
                {FIGURES.map((figure) => (
                  <div key={figure.label}>
                    <dt>{figure.value}</dt>
                    <dd>{figure.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <div className="strip" aria-hidden="true">
          <div className="strip__track">
            {[...MARQUEE, ...MARQUEE].map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))}
          </div>
        </div>

        <section className="section" id="leistungen">
          <div className="shell">
            <div className="section__head">
              <div>
                <p className="eyebrow">
                  <span>01</span>
                  <span>Leistungen</span>
                </p>
                <h2>Fünf Aufgaben, die wir vollständig übernehmen.</h2>
              </div>
              <p>
                Kein Baukasten mit Sternchen: Jede Position steht im Verwaltervertrag mit
                Leistungsumfang und Frist. Was nicht enthalten ist, steht dort ebenfalls.
              </p>
            </div>

            <div className="services">
              {SERVICES.map((service, index) => (
                <Reveal
                  key={service.title}
                  as="article"
                  className="service"
                  delay={index * 70}
                >
                  <span className="service__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <div className="service__meta">
                      {service.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>{service.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="ablauf">
          <div className="shell">
            <div className="section__head">
              <div>
                <p className="eyebrow">
                  <span>02</span>
                  <span>Ablauf</span>
                </p>
                <h2>Vom ersten Anruf bis zum Jahresbericht.</h2>
              </div>
              <p>
                Ein Verwalterwechsel scheitert selten am Vertrag, sondern an der Übergabe. Deshalb
                ist sie bei uns terminiert.
              </p>
            </div>

            <div className="process">
              {STEPS.map((step, index) => (
                <Reveal key={step.title} as="article" className="step" delay={index * 90}>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="objekte">
          <div className="shell">
            <div className="section__head">
              <div>
                <p className="eyebrow">
                  <span>03</span>
                  <span>Objekte</span>
                </p>
                <h2>Bestand, den wir seit Jahren begleiten.</h2>
              </div>
              <p>
                Vier Beispiele aus dem laufenden Portfolio — Altbau, Zeilenbau, Gewerbe und eine
                abgeschlossene Modernisierung.
              </p>
            </div>

            <div className="objects">
              {OBJECTS.map((object, index) => (
                <Reveal key={object.title} as="article" className="object" delay={index * 80}>
                  <p className="object__kind">{object.kind}</p>
                  <h3>{object.title}</h3>
                  <dl>
                    {object.facts.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section__head">
              <div>
                <p className="eyebrow">
                  <span>04</span>
                  <span>Stimmen</span>
                </p>
                <h2>Was Beiräte und Eigentümer berichten.</h2>
              </div>
              <p>
                Referenzen nennen wir auf Anfrage mit Kontakt — Gespräche mit bestehenden
                Gemeinschaften sagen mehr als jedes Exposé.
              </p>
            </div>

            <div className="voices">
              {VOICES.map((voice, index) => (
                <Reveal key={voice.who} as="figure" className="voice" delay={index * 100}>
                  <blockquote>„{voice.quote}“</blockquote>
                  <figcaption>
                    <strong>{voice.who}</strong>
                    {voice.role}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="shell contact__grid">
            <div>
              <p className="eyebrow">
                <span>05</span>
                <span>Kontakt</span>
              </p>
              <h2>Erzählen Sie uns von Ihrem Objekt.</h2>
              <p>
                Für ein Angebot brauchen wir Lage, Anzahl der Einheiten, Baujahr und den aktuellen
                Verwaltungsstand. Rückmeldung mit Einschätzung innerhalb von zwei Werktagen.
              </p>
              <div className="hero__actions">
                <a className="btn" href="mailto:kontakt@cb-immoservice.de">
                  E-Mail schreiben
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M2 8h11M9 4l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <ul className="contact__list">
              <li>
                <span>Telefon</span>
                <a href="tel:+4921189734120">0211 897 341 20</a>
              </li>
              <li>
                <span>E-Mail</span>
                <a href="mailto:kontakt@cb-immoservice.de">kontakt@cb-immoservice.de</a>
              </li>
              <li>
                <span>Büro</span>
                <p>Fährweg 12, 40219 Düsseldorf</p>
              </li>
              <li>
                <span>Sprechzeiten</span>
                <p>Mo bis Do 9–17 Uhr, Fr 9–13 Uhr</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
