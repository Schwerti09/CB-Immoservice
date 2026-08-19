import Link from 'next/link';
import { company } from './siteContent';

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-soft md:hidden">
      <a href={company.phoneHref} className="button-secondary text-center">
        Jetzt anrufen
      </a>
      <Link href="/kontakt" className="button-primary text-center">
        Angebot anfordern
      </Link>
    </div>
  );
}
