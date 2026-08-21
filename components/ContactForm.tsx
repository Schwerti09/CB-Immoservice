"use client";

import { useMemo, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { serviceItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type FormValues = {
  anrede: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  leistung: string;
  nachricht: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  anrede: "",
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  leistung: "",
  nachricht: "",
};

function isEmail(value: string) {
  const trimmed = value.trim();
  const parts = trimmed.split("@");

  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;

  return Boolean(localPart) && domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.anrede) errors.anrede = "Bitte wählen Sie eine Anrede.";
  if (!values.vorname.trim()) errors.vorname = "Bitte geben Sie Ihren Vornamen ein.";
  if (!values.nachname.trim()) errors.nachname = "Bitte geben Sie Ihren Nachnamen ein.";
  if (!isEmail(values.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (values.telefon && values.telefon.replace(/[^\d+]/g, "").length < 7) {
    errors.telefon = "Bitte geben Sie eine gültige Telefonnummer ein.";
  }
  if (!values.leistung) errors.leistung = "Bitte wählen Sie eine Leistung aus.";
  if (values.nachricht.trim().length < 20) {
    errors.nachricht = "Bitte beschreiben Sie Ihr Anliegen mit mindestens 20 Zeichen.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverState, setServerState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const serviceOptions = useMemo(
    () => serviceItems.map((service) => ({ value: service.slug, label: service.shortTitle })),
    [],
  );

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setServerState(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      setServerState({
        type: "success",
        message:
          data.message ||
          "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah bei Ihnen.",
      });
      setValues(initialValues);
    } catch (error) {
      setServerState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClassName = (field: keyof FormValues) =>
    cn(
      "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-all duration-300 placeholder:text-navy/35 focus:border-gold",
      errors[field] ? "border-red-300" : "border-navy/10",
    );

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-luxury sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="anrede" className="mb-2 block text-sm font-medium text-navy">
            Anrede*
          </label>
          <select
            id="anrede"
            value={values.anrede}
            onChange={(event) => handleChange("anrede", event.target.value)}
            className={fieldClassName("anrede")}
          >
            <option value="">Bitte wählen</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
          {errors.anrede && <p className="mt-2 text-sm text-red-600">{errors.anrede}</p>}
        </div>

        <div>
          <label htmlFor="leistung" className="mb-2 block text-sm font-medium text-navy">
            Leistung*
          </label>
          <select
            id="leistung"
            value={values.leistung}
            onChange={(event) => handleChange("leistung", event.target.value)}
            className={fieldClassName("leistung")}
          >
            <option value="">Bitte wählen</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.leistung && <p className="mt-2 text-sm text-red-600">{errors.leistung}</p>}
        </div>

        <div>
          <label htmlFor="vorname" className="mb-2 block text-sm font-medium text-navy">
            Vorname*
          </label>
          <input
            id="vorname"
            type="text"
            value={values.vorname}
            onChange={(event) => handleChange("vorname", event.target.value)}
            className={fieldClassName("vorname")}
            placeholder="Max"
          />
          {errors.vorname && <p className="mt-2 text-sm text-red-600">{errors.vorname}</p>}
        </div>

        <div>
          <label htmlFor="nachname" className="mb-2 block text-sm font-medium text-navy">
            Nachname*
          </label>
          <input
            id="nachname"
            type="text"
            value={values.nachname}
            onChange={(event) => handleChange("nachname", event.target.value)}
            className={fieldClassName("nachname")}
            placeholder="Mustermann"
          />
          {errors.nachname && <p className="mt-2 text-sm text-red-600">{errors.nachname}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            E-Mail*
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className={fieldClassName("email")}
            placeholder="name@unternehmen.de"
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="telefon" className="mb-2 block text-sm font-medium text-navy">
            Telefon
          </label>
          <input
            id="telefon"
            type="tel"
            value={values.telefon}
            onChange={(event) => handleChange("telefon", event.target.value)}
            className={fieldClassName("telefon")}
            placeholder="+49 170 1234567"
          />
          {errors.telefon && <p className="mt-2 text-sm text-red-600">{errors.telefon}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="nachricht" className="mb-2 block text-sm font-medium text-navy">
          Nachricht*
        </label>
        <textarea
          id="nachricht"
          rows={6}
          value={values.nachricht}
          onChange={(event) => handleChange("nachricht", event.target.value)}
          className={fieldClassName("nachricht")}
          placeholder="Beschreiben Sie kurz Ihr Objekt, Ihren Bedarf und den gewünschten Zeitrahmen."
        />
        {errors.nachricht && <p className="mt-2 text-sm text-red-600">{errors.nachricht}</p>}
      </div>

      {serverState && (
        <div
          className={cn(
            "mt-6 rounded-2xl px-4 py-3 text-sm",
            serverState.type === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-red-50 text-red-700",
          )}
        >
          {serverState.message}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy/55">* Pflichtfelder. Ihre Daten werden vertraulich behandelt.</p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
              Wird gesendet...
            </>
          ) : (
            <>
              Anfrage senden
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
