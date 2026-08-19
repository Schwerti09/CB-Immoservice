import { NextResponse } from "next/server";
import { serviceItems } from "@/lib/site-data";

const validSalutations = new Set(["Herr", "Frau"]);
const validServices = new Set<string>(serviceItems.map((service) => service.slug));

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  const trimmed = value.trim();
  const parts = trimmed.split("@");

  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;

  return Boolean(localPart) && domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const payload = {
      anrede: clean(body.anrede),
      vorname: clean(body.vorname),
      nachname: clean(body.nachname),
      email: clean(body.email),
      telefon: clean(body.telefon),
      leistung: clean(body.leistung),
      nachricht: clean(body.nachricht),
    };

    if (!validSalutations.has(payload.anrede)) {
      return NextResponse.json({ message: "Bitte wählen Sie eine gültige Anrede." }, { status: 400 });
    }
    if (!payload.vorname || !payload.nachname) {
      return NextResponse.json({ message: "Bitte geben Sie Ihren Vor- und Nachnamen an." }, { status: 400 });
    }
    if (!isEmail(payload.email)) {
      return NextResponse.json({ message: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
    }
    if (!validServices.has(payload.leistung)) {
      return NextResponse.json({ message: "Bitte wählen Sie eine gültige Leistung." }, { status: 400 });
    }
    if (payload.nachricht.length < 20) {
      return NextResponse.json(
        { message: "Bitte beschreiben Sie Ihr Anliegen ausführlicher." },
        { status: 400 },
      );
    }

    // TODO: Anfrage an CONTACT_EMAIL oder ein CRM zustellen, sobald die Live-Integration erfolgt.
    console.info("[CB Immoservice] Neue Kontaktanfrage", {
      leistung: payload.leistung,
      hatTelefon: Boolean(payload.telefon),
      nachrichtenlaenge: payload.nachricht.length,
    });

    return NextResponse.json({
      message:
        "Vielen Dank für Ihre Anfrage. Wir prüfen Ihr Anliegen intern und melden uns schnellstmöglich persönlich bei Ihnen zurück.",
    });
  } catch {
    return NextResponse.json(
      { message: "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut." },
      { status: 500 },
    );
  }
}
