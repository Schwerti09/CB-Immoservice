"use client";

import { motion } from "framer-motion";
import { Award, Building2, Shield, Star, Users } from "lucide-react";

const badges = [
  { icon: Shield, label: "IHK-Mitglied", sublabel: "IHK Oldenburg" },
  { icon: Award, label: "Zertifiziert", sublabel: "Qualitätsstandard" },
  { icon: Building2, label: "VDIV-orientiert", sublabel: "Branchenstandards" },
  { icon: Users, label: "Familienunternehmen", sublabel: "Persönlich & regional" },
  { icon: Star, label: "Top-Bewertungen", sublabel: "98 % Weiterempfehlung" },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-navy/8 bg-white py-10" aria-label="Auszeichnungen und Zertifikate">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-navy/40">
          Verlässlichkeit, die Sie kennen sollten
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-[#fbfbfc] px-5 py-3 shadow-sm"
            >
              <badge.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-navy">{badge.label}</p>
                <p className="text-xs text-navy/50">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
