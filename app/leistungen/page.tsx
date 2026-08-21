import { Building2, Sparkles, Wrench } from "lucide-react";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceCard from "@/components/ServiceCard";
import { createPageMetadata } from "@/lib/metadata";
import { serviceItems } from "@/lib/site-data";

const serviceIcons = {
  hausverwaltung: Building2,
  gebaeudereinigung: Sparkles,
  hausmeisterservice: Wrench,
};

export const metadata = createPageMetadata({
  title: "Leistungen",
  description:
    "Überblick über die Leistungen von CB Immoservice: Hausverwaltung, Gebäudereinigung und Hausmeisterservice.",
  path: "/leistungen",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Leistungen</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl sm:text-6xl">
            Immobilienservice mit klarer Haltung und sauberer Umsetzung
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Unsere Leistungen greifen ineinander und lassen sich flexibel auf Ihre Immobilie,
            Ihre Eigentümerstruktur und Ihre operativen Anforderungen abstimmen.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {serviceItems.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={service.href}
                bullets={service.bullets}
                icon={Icon}
              />
            );
          })}
        </div>
      </section>

      <ProcessSteps />
    </>
  );
}
