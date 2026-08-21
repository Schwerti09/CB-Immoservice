import { ArrowUpRight, Building, ClipboardCheck } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { referenceProjects } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Referenzen",
  description:
    "Ausgewählte Referenzprojekte und typische Einsatzszenarien von CB Immoservice.",
  path: "/referenzen",
});

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Referenzen</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl sm:text-6xl">Einblicke in typische Projekte und Betreuungssituationen</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Die folgenden Beispiele zeigen anonymisierte Szenarien, in denen unsere Leistungen Mehrwert,
            Struktur und spürbare Entlastung geschaffen haben.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {referenceProjects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-luxury">
              <div className="flex items-center justify-between">
                <Building className="h-8 w-8 text-gold" aria-hidden="true" />
                <ArrowUpRight className="h-5 w-5 text-navy/30" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-serif text-2xl text-navy">{project.title}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{project.service}</p>
              <p className="mt-5 leading-7 text-navy/70">{project.description}</p>
              <div className="mt-6 rounded-3xl bg-[#f8f9fa] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <ClipboardCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                  Ergebnis
                </div>
                <p className="mt-3 text-sm leading-7 text-navy/70">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
