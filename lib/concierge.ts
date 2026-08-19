import { serviceItems, type ServiceSlug } from "@/lib/site-data";

export type ConciergeStep = "category" | "objective" | "details" | "complete";

export type ConciergeOption = {
  value: string;
  label: string;
};

export type ConciergeRequest = {
  step?: ConciergeStep;
  category?: ServiceSlug;
  objective?: string;
  objectiveLabel?: string;
  details?: string;
};

export type ConciergeResponse = {
  step: ConciergeStep;
  prompt: string;
  options?: ConciergeOption[];
  summary?: string;
};

const categoryOptions: ConciergeOption[] = serviceItems.map((service) => ({
  value: service.slug,
  label: service.shortTitle,
}));

const objectiveOptions: Record<ServiceSlug, ConciergeOption[]> = {
  hausverwaltung: [
    { value: "laufende-betreuung", label: "Laufende Betreuung organisieren" },
    { value: "ablaufe-optimieren", label: "Abläufe und Kommunikation verbessern" },
    { value: "anbieterwechsel", label: "Übernahme von einer bestehenden Verwaltung" },
  ],
  gebaeudereinigung: [
    { value: "regelreinigung", label: "Regelmäßige Unterhaltsreinigung" },
    { value: "qualitaetsstandard", label: "Qualitätsstandard für ein Objekt aufsetzen" },
    { value: "sonderauftrag", label: "Sonder- oder Intervallreinigung anfragen" },
  ],
  hausmeisterservice: [
    { value: "kontrollgaenge", label: "Kontrollgänge und Präsenz vor Ort sichern" },
    { value: "kleinreparaturen", label: "Kleinreparaturen und Koordination bündeln" },
    { value: "vertretung", label: "Zuverlässige Entlastung im Tagesgeschäft" },
  ],
};

const categoryLabels = Object.fromEntries(
  serviceItems.map((service) => [service.slug, service.shortTitle]),
) as Record<ServiceSlug, string>;

export function getInitialConciergeResponse(): ConciergeResponse {
  return {
    step: "category",
    prompt: "Was suchen Sie aktuell für Ihre Immobilie?",
    options: categoryOptions,
  };
}

function getObjectivePrompt(category: ServiceSlug) {
  return `Was ist Ihnen im Bereich ${categoryLabels[category]} aktuell besonders wichtig?`;
}

function buildSummary(
  category: ServiceSlug,
  objective: string,
  objectiveLabel: string | undefined,
  details: string,
) {
  return `Anliegen: ${categoryLabels[category]} · Fokus: ${objectiveLabel || objective} · Details: ${details}`;
}

function getMockConciergeResponse({
  step,
  category,
  objective,
  objectiveLabel,
  details,
}: ConciergeRequest): ConciergeResponse {
  if (!step || step === "category") {
    if (!category) {
      return getInitialConciergeResponse();
    }

    return {
      step: "objective",
      prompt: getObjectivePrompt(category),
      options: objectiveOptions[category],
    };
  }

  if (step === "objective") {
    if (!category || !objective) {
      return getInitialConciergeResponse();
    }

    return {
      step: "details",
      prompt:
        "Beschreiben Sie kurz Ihr Objekt oder Ihr Anliegen. Wir bereiten daraufhin eine passende Rückmeldung vor.",
    };
  }

  if (step === "details") {
    if (!category || !objective || !details) {
      return {
        step: "details",
        prompt:
          "Bitte ergänzen Sie noch ein paar Details, damit wir Ihr Anliegen sinnvoll einordnen können.",
      };
    }

    return {
      step: "complete",
      prompt:
        "Vielen Dank. Wir melden uns bei Ihnen mit einer passenden Empfehlung und den nächsten Schritten.",
      summary: buildSummary(category, objective, objectiveLabel, details),
    };
  }

  return getInitialConciergeResponse();
}

export async function getConciergeResponse(
  request: ConciergeRequest,
  provider = process.env.CONCIERGE_PROVIDER || "mock",
): Promise<ConciergeResponse> {
  switch (provider) {
    case "mock":
    default:
      return getMockConciergeResponse(request);
  }
}
