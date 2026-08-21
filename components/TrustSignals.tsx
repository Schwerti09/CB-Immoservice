"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { trustStats } from "@/lib/site-data";

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [displayed, setDisplayed] = useState("0");

  // Parse numeric part and suffix (e.g. "12+" → 12, "+"), ("98 %" → 98, " %")
  const match = value.match(/^(\d+)(.*)/);
  const numericTarget = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || numericTarget === null) {
      setDisplayed(value);
      return;
    }
    const duration = 1400;
    const steps = 50;
    const increment = numericTarget / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + increment, numericTarget);
      setDisplayed(`${Math.round(current)}${suffix}`);
      if (current >= numericTarget) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, numericTarget, suffix, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] border border-navy/10 bg-[#fbfbfc] p-8 text-center shadow-lg shadow-navy/5"
    >
      <div className="font-serif text-4xl text-navy sm:text-5xl">{displayed}</div>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-navy/55">{label}</p>
    </motion.div>
  );
}

export default function TrustSignals() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:grid-cols-3 sm:px-8 lg:px-10">
        {trustStats.map((stat, i) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} index={i} />
        ))}
      </div>
    </section>
  );
}

