"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Building2, CheckCircle2, ConciergeBell, Wrench } from "lucide-react";

const features = [
  { icon: Building2, label: "Hausverwaltung & WEG" },
  { icon: ConciergeBell, label: "Gebäudereinigung" },
  { icon: Wrench, label: "Hausmeisterservice" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" aria-label="Startbereich">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&auto=format&fit=crop"
        alt="Moderne Wohnanlage – CB Immoservice"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/55" />
      {/* Gold top-right glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-32 sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:py-40">
        {/* Left copy */}
        <div className="max-w-2xl flex-1">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="text-sm font-semibold uppercase tracking-[0.32em] text-gold"
          >
            Premium Immobilienservice
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-5 font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Ihr zuverlässiger Partner für{" "}
            <span className="text-gold">Immobilien-Management</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-8 text-white/75"
          >
            Professionelle Hausverwaltung, Gebäudereinigung und Hausmeisterservice
            aus einer Hand – diskret, termintreu und mit höchsten Qualitätsstandards.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-[1.03] hover:bg-gold-light hover:shadow-gold/50"
            >
              Leistungen entdecken
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-white/10"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>

        {/* Glassmorphism card */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-xl lg:max-w-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">
            Alles aus einer Hand
          </p>
          <p className="mt-3 font-serif text-2xl text-white">
            Drei Kernleistungen, ein Ansprechpartner.
          </p>
          <ul className="mt-8 space-y-5">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-white">{label}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm leading-7 text-white/60">
              Über <span className="font-semibold text-gold">12 Jahre</span> Erfahrung · Mehr als{" "}
              <span className="font-semibold text-gold">150</span> betreute Einheiten
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-[0.28em]">Scrollen</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
