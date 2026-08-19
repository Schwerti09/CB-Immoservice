import { processSteps } from "@/lib/site-data";

export default function ProcessSteps() {
  return (
    <section className="bg-[#f8f9fa] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Unser Ablauf</p>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
            Strukturierte Betreuung statt Zufall
          </h2>
          <p className="mt-5 text-lg leading-8 text-navy/70">
            Von der ersten Einschätzung bis zur laufenden Objektbetreuung schaffen wir Klarheit,
            Zuständigkeit und einen professionellen Ablauf.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-4 leading-7 text-navy/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
