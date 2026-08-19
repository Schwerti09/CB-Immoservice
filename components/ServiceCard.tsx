import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  bullets: string[];
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  href,
  bullets,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-navy/10 bg-white p-8 shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxury">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="font-serif text-2xl text-navy">{title}</h3>
      <p className="mt-4 text-base leading-7 text-navy/75">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-navy/70">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-all duration-300 hover:gap-3 hover:text-gold"
      >
        Mehr erfahren
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
