"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  HandPlatter,
  Leaf,
  Trash2,
  Wrench,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */
const services = [
  { icon: HandPlatter, label: "Objektbetreuung" },
  { icon: Wrench,      label: "Handwerkerservice" },
  { icon: Trash2,      label: "Entrümpelungen" },
  { icon: Leaf,        label: "Gartenpflege" },
];

const stats = [
  { value: 5, suffix: "+", label: "Jahre Erfahrung" },
  { value: 200, suffix: "+", label: "Zufriedene Kunden" },
  { value: 100, suffix: "%", label: "Persönlicher Service" },
];

/* ─── framer-motion variants ────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── animated counter ──────────────────────────────────── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const controls = animate(0, value, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setDisplay(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/* ─── floating particle ─────────────────────────────────── */
function GoldParticle({
  x,
  y,
  size,
  delay,
  duration,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full bg-gold"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        y: [0, -60, -120],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 2,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: 30 + Math.random() * 60,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 3,
}));

/* ─── component ─────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* subtle mouse-follow tilt on the glass card */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top)  / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Startbereich"
    >
      {/* ── Parallax background ── */}
      <motion.div
        className="absolute left-0 top-[-15%] h-[130%] w-full"
        style={{ y: bgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=85&auto=format&fit=crop"
          alt="Schönes Haus – CB Immoservice"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ── Multi-layer overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_40%,rgba(201,168,76,0.12),transparent)]" />

      {/* ── Animated gold glow orbs ── */}
      <motion.div
        className="pointer-events-none absolute -right-40 -top-20 h-[700px] w-[700px] rounded-full bg-gold/[0.12] blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-32 h-[500px] w-[500px] rounded-full bg-gold/[0.07] blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Gold particles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <GoldParticle key={p.id} {...p} />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-36 sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:py-44"
      >
        {/* Left copy */}
        <div className="max-w-2xl flex-1">
          {/* eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <motion.span
              className="h-px w-10 origin-left bg-gold"
              variants={lineReveal}
              initial="hidden"
              animate="show"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.36em] text-gold">
              CBImmoService GmbH · Schortens & Umgebung
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 font-serif text-5xl leading-[1.1] text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Ihr Rundum-Service{" "}
            <br className="hidden sm:block" />
            fürs{" "}
            <span className="relative inline-block text-gold">
              Haus
              {/* underline sweep */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gold/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
            .
          </motion.h1>

          {/* subline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-8 text-white/70"
          >
            Von der Entrümpelung über die Gartenpflege bis hin zu
            Handwerkerarbeiten und Objektbetreuung – <strong className="text-white/90 font-semibold">alles aus einer Hand</strong>,
            persönlich und zuverlässig.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/dienstleistungen"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-[1.04] hover:bg-gold-light hover:shadow-gold/50"
            >
              Dienstleistungen entdecken
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>

          {/* trust stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-14 flex flex-wrap gap-x-10 gap-y-5"
          >
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-gold">
                  <AnimatedCounter value={value} suffix={suffix} />
                </span>
                <span className="mt-0.5 text-xs uppercase tracking-widest text-white/50">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Glass card with mouse-tilt */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/[0.07] p-8 shadow-2xl shadow-navy/60 backdrop-blur-xl lg:max-w-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold/80">
            Alles aus einer Hand
          </p>
          <p className="mt-3 font-serif text-2xl leading-snug text-white">
            Zeit, Nerven und Geld sparen.
          </p>

          <ul className="mt-8 space-y-4">
            {services.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-white">{label}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-gold/70" aria-hidden="true" />
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            <ul className="space-y-2">
              {[
                "Regional & persönlich vor Ort",
                "Schnell, zuverlässig und transparent",
                "Auch kurzfristig verfügbar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* inner gold shimmer line */}
          <motion.div
            className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Entdecken</span>
        {/* mouse icon */}
        <div className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/30 pt-1.5">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-gold/70"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
