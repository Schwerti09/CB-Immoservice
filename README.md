# CB Immoservice Website

Premium-Unternehmenswebsite für **CB Immoservice** auf Basis von **Next.js 15**, **TypeScript** und **Tailwind CSS v4**.

## Überblick

Die Website präsentiert drei Kernleistungen in deutscher Sprache:

- **Hausverwaltung / WEG-Verwaltung / Mietverwaltung**
- **Gebäudereinigung**
- **Hausmeisterservice / Facility Management**

Enthalten sind unter anderem:

- hochwertige Startseite mit Premium-Design
- Leistungsübersicht und Detailseiten
- Über-uns-, Referenzen- und Kontaktseite
- validiertes Kontaktformular mit API-Route
- **CB Concierge** als schwebender Beratungsassistent im Mock-Modus
- SEO-Basis mit Metadaten, `sitemap.xml`, `robots.txt` und LocalBusiness-Structured-Data
- Platzhalter für Impressum und Datenschutz

## Technologie-Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react
- clsx + tailwind-merge

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Anwendung läuft anschließend standardmäßig unter `http://localhost:3000`.

## Wichtige Umgebungsvariablen

```env
CONCIERGE_PROVIDER=mock
GEMINI_API_KEY=
CLAUDE_API_KEY=
CONTACT_EMAIL=info@cbimmoservice.de
NEXT_PUBLIC_APP_URL=https://www.cbimmoservice.de
NEXT_PUBLIC_WHATSAPP_NUMBER=4915566112588
```

### Hinweise

- Ohne API-Schlüssel arbeitet der Concierge bewusst im **Mock-Modus**.
- Das Kontaktformular protokolliert Anfragen serverseitig in die Konsole. Eine echte Mail- oder CRM-Anbindung kann später ergänzt werden.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` akzeptiert auch deutsche Rufnummern mit führender `0`; für den WhatsApp-Link wird automatisch die Ländervorwahl `49` verwendet.

## Projektstruktur

```text
app/
├── api/
│   ├── concierge/route.ts
│   └── contact/route.ts
├── datenschutz/page.tsx
├── impressum/page.tsx
├── kontakt/page.tsx
├── leistungen/
│   ├── gebaeudereinigung/page.tsx
│   ├── hausmeisterservice/page.tsx
│   ├── hausverwaltung/page.tsx
│   └── page.tsx
├── referenzen/page.tsx
├── robots.ts
├── sitemap.ts
├── ueber-uns/page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── ConciergeWidget.tsx
├── ContactForm.tsx
├── Footer.tsx
├── Navigation.tsx
├── ProcessSteps.tsx
├── ServiceCard.tsx
└── TrustSignals.tsx

lib/
├── concierge.ts
├── metadata.ts
├── site-data.ts
└── utils.ts
```

## Designsystem

Verwendete Kernfarben:

- Navy: `#0a1628`
- Gold: `#c9a84c`
- Hellgrau: `#f8f9fa`
- Weiß: `#ffffff`

Typografie:

- **Inter** für Fließtext
- **Playfair Display** für Überschriften

## Inhalte mit Platzhalterstatus

Einige Inhalte sind bewusst als Platzhalter markiert und sollten vor dem Livegang ersetzt werden:

- Geschäftsadresse
- Telefonnummer
- Impressum
- Datenschutzerklärung
- Teamvorstellungen
- Kennzahlen/Testimonial-Inhalte nach Bedarf validieren

Diese Stellen sind direkt im Code mit `TODO` gekennzeichnet.

## Validierung

Vor Auslieferung sollten folgende Befehle erfolgreich laufen:

```bash
npm run lint
npm run build
```

## Weiterentwicklungsideen

- Anbindung des Kontaktformulars an E-Mail, CRM oder Ticketsystem
- Integration eines echten LLM-Providers im Concierge-Service
- Austausch der Platzhalter durch echte Unternehmensdaten
- Ergänzung von Bildmaterial, Referenzen und rechtlichen Texten
