"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";

export default function ProcessSteps() {
  return (
    <section className="bg-[#f8f9fa] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Unser Ablauf</p>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
            Strukturierte Betreuung statt Zufall
          </h2>
          <p className="mt-5 text-lg leading-8 text-navy/70">
            Von der ersten Einschätzung bis zur laufenden Objektbetreuung schaffen wir Klarheit,
            Zuständigkeit und einen professionellen Ablauf.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative flex gap-0">
            {/* connecting line */}
            <div className="absolute left-8 right-8 top-6 h-px bg-navy/10" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-1 flex-col px-6"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-white text-sm font-bold text-navy shadow-lg shadow-navy/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-8 rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5">
                  <h3 className="font-serif text-2xl text-navy">{step.title}</h3>
                  <p className="mt-4 leading-7 text-navy/70">{step.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 flex flex-col gap-0 lg:hidden">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* vertical line */}
              {index < processSteps.length - 1 && (
                <div
                  className="absolute left-6 top-12 bottom-0 w-px bg-navy/10"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-white text-sm font-bold text-navy shadow-lg shadow-navy/10">
                {String(index + 1).padStart(2, "0")}
              </div>
              <article className="flex-1 rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5">
                <h3 className="font-serif text-2xl text-navy">{step.title}</h3>
                <p className="mt-4 leading-7 text-navy/70">{step.description}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

