export const company = {
  name: 'CBImmoService GmbH',
  slogan: 'CBImmoService – Schnell. Zuverlässig. Vor Ort!',
  phone: '0155 66112588',
  phoneHref: 'tel:015566112588',
  email: 'info@cbimmoservice.de',
  addressLine1: 'Am Wald 7',
  addressLine2: '26419 Schortens',
  region: 'Schortens, Jever und Umgebung',
  instagram: 'https://www.instagram.com/cbimmoservice_schortens/',
};

export const navItems = [
  { href: '/', label: 'Startseite' },
  { href: '/dienstleistungen', label: 'Dienstleistungen' },
  { href: '/zusatzleistungen', label: 'Zusatzleistungen' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const homeIntro =
  'Willkommen bei der CBImmoService GmbH – zuverlässiger Partner in Schortens, Jever und Umgebung. Rundum-Service von Entrümpelung über Gartenpflege bis Handwerkerarbeiten und Objektbetreuung. Zusätzlich Unterstützung bei Immobilienverkauf, Vermietung, Bewertung, Baufinanzierung und Energieberatung über starke Partner — alles aus einer Hand.';

export const serviceCards = [
  { key: 'entruempelung', title: 'Entrümpelungen', claim: 'Platz schaffen, ganz ohne Stress' },
  { key: 'gartenpflege', title: 'Gartenpflege', claim: 'Ihr grünes Paradies in besten Händen' },
  { key: 'handwerkerservice', title: 'Handwerkerservice', claim: 'Reparieren, Montieren, Verschönern' },
  { key: 'objektbetreuung', title: 'Objektbetreuung', claim: 'Wir kümmern uns, auch wenn Sie nicht da sind' },
] as const;

export const whyItems = [
  'Regional & persönlich',
  'Freundlicher & zuverlässiger Service',
  'Faire und transparente Preise',
  'Alles aus einer Hand',
];

export const testimonials = [
  {
    name: 'De Do',
    text: '',
  },
  {
    name: 'Jan-Hendrik Meyer',
    text: 'Ich habe die Firma zwecks Verkaufsvorbereitung meines Elternhauses mit der Entrümpelung und Gartenpflege beauftragt. Die ruhige und verbindliche Art von Herrn Bierwirth beim ersten Treffen sowie die Ausführungen zum weiteren Vorgehen kamen mir sehr entgegen. Meine Erwartungen bei der Umsetzung wurden dann auch zu 100% erfüllt.',
  },
  {
    name: 'Uta Thiergard',
    text: 'CBImmoService bietet hervorragenden Service in Haus und Garten. Ich kann die Firma unbedingt empfehlen. Mit Kompetenz und Zuverlässigkeit, Freundlichkeit und guter Laune werden alle Arbeiten erledigt. In Notfällen wird auch kurzfristig geholfen. Vielen Dank CBImmoService.',
  },
];

export const mainServices = [
  {
    title: 'Entrümpelungen',
    subline: 'Platz schaffen, ganz ohne Stress',
    text: 'Wir entrümpeln Keller, Dachboden, Garage oder ganze Immobilien schnell, gründlich und diskret. Von der Sortierung über den Abtransport bis zur fachgerechten Entsorgung übernehmen wir alles – ideal für Haushaltsauflösungen, Wohnungswechsel sowie vor oder nach einem Immobilienverkauf. Ablauf: Besichtigung → Angebot → Durchführung.',
    emoji: '🏠',
    cta: 'Jetzt Besichtigungstermin anfragen',
  },
  {
    title: 'Gartenpflege',
    subline: 'Ihr grünes Paradies in besten Händen',
    text: 'Von der Rasenpflege bis zum Heckenschnitt übernehmen wir Gartenarbeiten zuverlässig – regelmäßig oder einmalig.',
    emoji: '🌿',
    cta: 'Gartenpflege-Angebot anfordern',
  },
  {
    title: 'Handwerkerservice',
    subline: 'Reparieren, Montieren, Verschönern',
    text: 'Wir erledigen kleine Reparaturen, Möbelmontage und Renovierungsarbeiten zuverlässig, sauber und detailgenau.',
    emoji: '🛠️',
    cta: 'Handwerkerservice buchen',
  },
  {
    title: 'Objektbetreuung',
    subline: 'Wir kümmern uns, auch wenn Sie nicht da sind',
    text: 'Ob Ferienhaus, Mehrfamilienhaus, Mietobjekt oder Leerstand: Wir sorgen für Sicherheit, Sauberkeit und Ordnung durch regelmäßige Kontrollen.',
    emoji: '🔑',
    cta: 'Objektbetreuung anfragen',
  },
];

export const additionalServices = [
  {
    title: 'Immobilienverkauf & Vermietung – Sicher und stressfrei',
    text: 'Mit starken Partnern unterstützen wir bei Inseraten, Besichtigungen, Vertragsabwicklung und Formalitäten.',
    cta: 'Erstgespräch vereinbaren',
  },
  {
    title: 'Immobilienbewertung – Verlässlich und marktgerecht',
    text: 'Wir unterstützen mit fundierter Marktwertermittlung als sichere Entscheidungsgrundlage.',
    cta: 'Unverbindlich anfragen',
  },
  {
    title: 'Baufinanzierung – Ihr Weg ins Eigenheim',
    text: 'Gemeinsam mit Partnern finden wir das passende Darlehen zu fairen Konditionen.',
    cta: 'Kontakt aufnehmen',
  },
  {
    title: 'Energieberatung – Effizient wohnen und sparen',
    text: 'Beratung zu energetischer Sanierung, Heizungstausch, Dämmung und Fördermöglichkeiten.',
    cta: 'Jetzt sparen',
  },
];

export const legal = {
  representedBy: 'Christoph Bierwirth',
  register: 'HRB 220954, Registergericht Oldenburg',
  ustId: 'DE368269661',
  insurance:
    'VHV Allgemeine Versicherung AG, VHV-Platz 1, 30177 Hannover (Geltungsraum: Deutschland)',
};

export const services = mainServices.map((service, index) => ({
  key: `${index}`,
  title: service.title,
  description: service.text,
}));

export const aboutValues = whyItems;
export const teamMembers: Array<{
  name: string;
  role: string;
  email: string;
  phone: string;
  imageBase: string;
  focus: string;
}> = [];
export const serviceAreas: string[] = [];
