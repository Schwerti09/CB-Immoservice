import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Impressum",
  description: "Impressumsangaben von CB Immoservice.",
  path: "/impressum",
});

export default function ImprintPage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Impressum</p>
        <h1 className="mt-4 font-serif text-5xl text-navy sm:text-6xl">Rechtliche Angaben</h1>
        <div className="mt-10 space-y-4 rounded-[2rem] border border-navy/10 bg-[#f8f9fa] p-8 leading-8 text-navy/70 shadow-lg shadow-navy/5">
          <div>
            <h2 className="font-serif text-xl text-navy">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">CBImmoService GmbH</p>
            <p>Am Wald 7</p>
            <p>26419 Schortens</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Vertreten durch</h2>
            <p className="mt-2">Geschäftsführer: Christoph Bierwirth</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Kontakt</h2>
            <p className="mt-2">Telefon: 0155 66112588</p>
            <p>E-Mail: info@cbimmoservice.de</p>
            <p>Website: www.cbimmoservice.de</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Handelsregister</h2>
            <p className="mt-2">HRB 220954, Registergericht Oldenburg</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Umsatzsteuer-ID gemäß § 27a UStG</h2>
            <p className="mt-2">DE368269661</p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Berufshaftpflichtversicherung</h2>
            <p className="mt-2">
              VHV Allgemeine Versicherung AG · VHV-Platz 1 · 30177 Hannover
              <br />
              Geltungsraum: Deutschland
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-navy">Haftungsausschluss</h2>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
