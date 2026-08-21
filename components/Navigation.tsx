"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { serviceItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const homeLink = { href: "/", label: "Startseite" };

const mainLinks = [
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/leistungen");

  const baseLinkClass =
    "transition-all duration-300 text-sm font-medium text-navy/75 hover:text-gold";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl text-navy">CB Immoservice</span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
            Immobilienservice mit Anspruch
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href={homeLink.href}
            className={cn(baseLinkClass, pathname === homeLink.href && "text-gold")}
          >
            {homeLink.label}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-2 transition-all duration-300 text-sm font-medium hover:text-gold",
                isServicesActive ? "text-gold" : "text-navy/75",
              )}
            >
              Leistungen
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full mt-3 w-80 rounded-3xl border border-navy/10 bg-white p-3 shadow-luxury transition-all duration-300",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0",
              )}
            >
              {serviceItems.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="block rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-navy hover:text-white"
                >
                  <span className="block font-semibold">{service.shortTitle}</span>
                  <span className="mt-1 block text-sm opacity-75">{service.description}</span>
                </Link>
              ))}
            </div>
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(baseLinkClass, pathname === link.href && "text-gold")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold"
          >
            Beratungsgespräch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-navy transition-all duration-300 hover:border-gold hover:text-gold lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white px-6 py-6 lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:px-2">
            <Link
              href={homeLink.href}
              className="rounded-2xl px-4 py-3 text-navy transition-all duration-300 hover:bg-[#f8f9fa]"
            >
              {homeLink.label}
            </Link>
            <div className="rounded-[1.75rem] border border-navy/10 p-2">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Leistungen
              </p>
              {serviceItems.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="block rounded-2xl px-4 py-3 text-navy transition-all duration-300 hover:bg-[#f8f9fa]"
                >
                  <span className="font-medium">{service.shortTitle}</span>
                  <span className="mt-1 block text-sm text-navy/65">{service.description}</span>
                </Link>
              ))}
            </div>
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-navy transition-all duration-300 hover:bg-[#f8f9fa]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold"
            >
              Beratungsgespräch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
