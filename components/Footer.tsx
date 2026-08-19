import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { serviceItems } from "@/lib/site-data";

const footerLinks = [
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">CB Immoservice</p>
          <h2 className="mt-4 font-serif text-3xl">Premium-Betreuung für Immobilien mit Substanz</h2>
          <p className="mt-5 max-w-xl leading-8 text-white/72">
            Wir verbinden Verlässlichkeit, gepflegte Abläufe und professionelle Ansprechpartner
            für Eigentümer, Hausgemeinschaften und gewerbliche Objekte.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl">Leistungen</h3>
          <ul className="mt-5 space-y-3 text-white/72">
            {serviceItems.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="transition-all duration-300 hover:text-gold">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl">Kontakt</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/72">
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-gold" aria-hidden="true" />
              <a
                href="https://www.cbimmoservice.de"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:text-gold"
              >
                www.cbimmoservice.de
              </a>
            </li>
            {/* TODO: Echte Telefonnummer eintragen und bei Bedarf im Footer ergänzen. */}
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
              <a
                href="mailto:info@cbimmoservice.de"
                className="transition-all duration-300 hover:text-gold"
              >
                info@cbimmoservice.de
              </a>
            </li>
          </ul>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm text-white/72">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-all duration-300 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/55 sm:px-8 lg:px-10">
        © {new Date().getFullYear()} CB Immoservice. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
