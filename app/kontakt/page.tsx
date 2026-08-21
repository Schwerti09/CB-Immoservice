import { Clock3, Globe, Mail, MapPin } from "lucide-react";
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
    <>
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
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-navy">Einsatzgebiet</p>
                  <p className="mt-2 text-sm leading-7 text-navy/70">
                    Schortens · Jever · Friesland<br />
                    und Umgebung
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* OpenStreetMap Embed */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Einsatzgebiet</p>
            <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
              Lokal verwurzelt in Friesland
            </h2>
            <p className="mt-5 text-lg leading-8 text-navy/70">
              Unser Team ist in Schortens, Jever und dem gesamten Landkreis Friesland präsent –
              für schnelle Reaktionszeiten und persönliche Betreuung vor Ort.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-navy/10 shadow-luxury">
            <iframe
              title="Einsatzgebiet CB Immoservice – Schortens, Jever, Friesland"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.8%2C53.45%2C8.1%2C53.65&layer=mapnik&marker=53.54%2C7.955"
              width="100%"
              height="460"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-navy/45">
            Kartengrundlage:{" "}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-gold"
            >
              OpenStreetMap
            </a>{" "}
            contributors
          </p>
        </div>
      </section>
    </>
  );
}

