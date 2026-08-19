import Link from 'next/link';
import { company } from './siteContent';

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold text-brand-900">{company.name}</h2>
          <p className="mt-2 text-sm text-slate-600">{company.slogan}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/impressum" className="text-slate-700 hover:text-slate-900">
            Impressum
          </Link>
          <Link href="/datenschutzerklarung" className="text-slate-700 hover:text-slate-900">
            Datenschutzerklärung
          </Link>
          <Link href="/kontakt" className="text-slate-700 hover:text-slate-900">
            Kontakt
          </Link>
        </div>
        <div className="text-sm text-slate-700">
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <p>{company.addressLine1}</p>
          <p>{company.addressLine2}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {company.name}
      </div>
    </footer>
  );
}
