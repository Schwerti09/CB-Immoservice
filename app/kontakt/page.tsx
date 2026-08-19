import { Clock3, Globe, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit CB Immoservice auf und vereinbaren Sie ein persönliches Beratungsgespräch.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <section className="bg-[#f8f9fa] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Kontakt</p>
          <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Sprechen wir über Ihre Immobilie</h1>
          <p className="mt-6 text-lg leading-8 text-navy/70">
            Beschreiben Sie kurz Ihren Bedarf. Wir melden uns mit einer ersten Einschätzung und den nächsten Schritten bei Ihnen zurück.
          </p>

          <div className="mt-10 space-y-5 rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5">
            <div className="flex items-start gap-4">
              <Globe className="mt-1 h-5 w-5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Website</p>
                <a
                  href="https://www.cbimmoservice.de"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm text-navy/70 transition-all duration-300 hover:text-gold"
                >
                  www.cbimmoservice.de
                </a>
              </div>
            </div>
            {/* TODO: Echte Telefonnummer ergänzen und bei Bedarf im Kontaktbereich anzeigen. */}
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">E-Mail</p>
                <a
                  href="mailto:info@cbimmoservice.de"
                  className="mt-2 inline-block text-sm text-navy/70 transition-all duration-300 hover:text-gold"
                >
                  info@cbimmoservice.de
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock3 className="mt-1 h-5 w-5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Erreichbarkeit</p>
                <p className="mt-2 text-sm leading-7 text-navy/70">
                  Montag bis Freitag<br />
                  08:00 – 17:00 Uhr
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
