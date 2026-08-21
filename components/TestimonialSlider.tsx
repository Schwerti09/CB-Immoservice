"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  quote: string;
};

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-advance every 5 seconds, respecting prefers-reduced-motion
  useEffect(() => {
    if (!emblaApi) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="min-w-0 shrink-0 basis-full rounded-[2rem] border border-navy/10 bg-[#fbfbfc] p-8 shadow-lg shadow-navy/5 sm:basis-1/2 lg:basis-1/3"
            >
              <Quote className="h-8 w-8 text-gold/50" aria-hidden="true" />
              <p className="mt-5 text-lg leading-8 text-navy/75">&bdquo;{t.quote}&ldquo;</p>
              <p className="mt-6 font-semibold text-navy">{t.name}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Vorherige Kundenstimme"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Kundenstimmen Navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === selectedIndex}
              aria-label={`Kundenstimme ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Nächste Kundenstimme"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 hover:border-gold hover:text-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}
