export type ServiceSlug = "hausverwaltung" | "gebaeudereinigung" | "hausmeisterservice";

export const serviceItems = [
  {
    slug: "hausverwaltung" as const,
    shortTitle: "Hausverwaltung",
    title: "Hausverwaltung, WEG-Verwaltung & Mietverwaltung",
    href: "/leistungen/hausverwaltung",
    description:
      "Professionelle Hausverwaltung für Wohn- und Gewerbeimmobilien mit Fokus auf WEG-Verwaltung, Mietverwaltung und klaren Abläufen.",
    bullets: [
      "WEG-Verwaltung mit strukturierter Eigentümerkommunikation",
      "Mietverwaltung und Koordination laufender Vorgänge",
      "Werterhalt durch geordnete Prozesse und Qualitätskontrolle",
    ],
  },
  {
    slug: "gebaeudereinigung" as const,
    shortTitle: "Gebäudereinigung",
    title: "Gebäudereinigung mit Unterhalts-, Glas- und Sonderreinigung",
    href: "/leistungen/gebaeudereinigung",
    description:
      "Professionelle Gebäudereinigung mit Unterhaltsreinigung, Glas- und Rahmenreinigung sowie Sonderreinigung für gepflegte Immobilien.",
    bullets: [
      "Unterhaltsreinigung für laufende Pflege und Sauberkeit",
      "Glas- und Rahmenreinigung für einen repräsentativen Eindruck",
      "Sonderreinigung nach Objektbedarf und Anlass",
    ],
  },
  {
    slug: "hausmeisterservice" as const,
    shortTitle: "Hausmeisterservice",
    title: "Hausmeisterservice & Facility Management",
    href: "/leistungen/hausmeisterservice",
    description:
      "Verlässlicher Hausmeisterservice mit Facility Management für Kontrollgänge, Koordination und einen reibungslosen Objektbetrieb.",
    bullets: [
      "Kontrollgänge und laufende Objektbetreuung",
      "Koordination bei Schadensmeldungen und Dienstleistern",
      "Facility Management mit pragmatischer Entlastung im Alltag",
    ],
  },
];

export const trustStats = [
  { value: "12+", label: "Jahre Branchenerfahrung" },
  { value: "150+", label: "betreute Einheiten" },
  { value: "98 %", label: "Weiterempfehlungsquote" },
];

export const processSteps = [
  {
    title: "Erstgespräch",
    description:
      "Wir erfassen Ziele, Herausforderungen und Prioritäten Ihrer Immobilie in einem strukturierten Beratungsgespräch.",
  },
  {
    title: "Analyse",
    description:
      "Wir prüfen Objektzustand, Abläufe, Schnittstellen und Potenziale für Effizienz, Qualität und Werterhalt.",
  },
  {
    title: "Konzept",
    description:
      "Sie erhalten ein passendes Leistungsmodell mit klaren Zuständigkeiten, Intervallen und transparenter Betreuung.",
  },
  {
    title: "Betreuung",
    description:
      "Unser Team setzt die vereinbarten Leistungen zuverlässig um und bleibt für Eigentümer wie Nutzer jederzeit ansprechbar.",
  },
];

export const testimonials = [
  {
    name: "Sabine K., WEG-Beirätin",
    quote:
      "CB Immoservice arbeitet strukturiert, verbindlich und mit einem Blick fürs Detail. Gerade in der Kommunikation mit Eigentümern erleben wir eine wohltuende Verlässlichkeit.",
  },
  {
    name: "Thomas R., privater Bestandshalter",
    quote:
      "Die Kombination aus Verwaltung, Reinigung und Hausmeisterservice spart uns Zeit und Abstimmung. Das Objekt wirkt seit der Zusammenarbeit deutlich gepflegter.",
  },
  {
    name: "Miriam L., Gewerbeobjekt-Managerin",
    quote:
      "Anfragen werden schnell aufgenommen, priorisiert und sauber nachverfolgt. Für uns ist CB Immoservice ein professioneller Partner mit Mittelstands-DNA.",
  },
];

export const referenceProjects = [
  {
    title: "Wohnanlage mit 36 Einheiten",
    service: "Hausverwaltung & Hausmeisterservice",
    description:
      "Neuordnung der Objektkommunikation, Einführung fester Kontrollroutinen und koordinierte Betreuung von Dienstleistern für einen ruhigeren Betriebsablauf.",
    result: "Spürbar schnellere Rückmeldungen und klarere Abläufe für Eigentümer und Bewohner.",
  },
  {
    title: "Gewerbestandort mit gemischter Nutzung",
    service: "Gebäudereinigung",
    description:
      "Erstellung eines belastbaren Reinigungsplans für frequentierte Gemeinschaftsflächen inklusive Qualitätskontrollen und Abstimmung mit dem Standortmanagement.",
    result: "Konstant repräsentatives Erscheinungsbild auch bei hoher Besucherfrequenz.",
  },
  {
    title: "Mehrfamilienhaus im Bestand",
    service: "Hausverwaltung / Mietverwaltung",
    description:
      "Regelmäßige Objektbegehungen, Koordination kleiner Instandsetzungen und strukturierte Dokumentation offener Punkte.",
    result: "Mehr Transparenz über Maßnahmen und eine zuverlässige Präsenz vor Ort.",
  },
];

export const companyValues = [
  {
    title: "Verbindlichkeit",
    description:
      "Wir arbeiten planbar, termintreu und mit klaren Ansprechpartnern – für Eigentümer, Mieter und Partnerunternehmen.",
  },
  {
    title: "Qualitätsbewusstsein",
    description:
      "Jede Leistung folgt nachvollziehbaren Standards, damit Ihre Immobilie ihren Wert und ihren professionellen Eindruck behält.",
  },
  {
    title: "Diskretion & Vertrauen",
    description:
      "Als Dienstleister im sensiblen Immobilienumfeld handeln wir umsichtig, respektvoll und lösungsorientiert.",
  },
];

export const teamPlaceholders = [
  {
    role: "Geschäftsführung",
    description: "Strategische Kundenbetreuung und Qualitätssteuerung über alle Leistungsbereiche hinweg.",
  },
  {
    role: "Objektkoordination",
    description: "Zentrale Schnittstelle für Eigentümer, Bewohner, Dienstleister und operative Umsetzung.",
  },
  {
    role: "Service-Team vor Ort",
    description: "Regelmäßige Präsenz für Kontrolle, Pflege, Reinigung und schnelle Reaktion im Objektalltag.",
  },
];
