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
        <div className="mt-10 rounded-[2rem] border border-navy/10 bg-[#f8f9fa] p-8 leading-8 text-navy/70 shadow-lg shadow-navy/5">
          {/* TODO: Vollständige Impressumsangaben mit Rechtsform, Vertretungsberechtigten, Anschrift und Registernummer ergänzen */}
          <p>CB Immoservice</p>
          <p>Website: www.cbimmoservice.de</p>
          <p>E-Mail: info@cbimmoservice.de</p>
        </div>
      </div>
    </section>
  );
}
