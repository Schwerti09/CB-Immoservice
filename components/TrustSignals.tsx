import { trustStats } from "@/lib/site-data";

export default function TrustSignals() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 sm:grid-cols-3 sm:px-8 lg:px-10">
        {trustStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[2rem] border border-navy/10 bg-[#fbfbfc] p-8 text-center shadow-lg shadow-navy/5"
          >
            <div className="font-serif text-4xl text-navy sm:text-5xl">{stat.value}</div>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-navy/55">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
