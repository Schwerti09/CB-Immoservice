'use client';

import { FormEvent, useState } from 'react';
import { company } from './siteContent';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !privacy) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, privacy }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setPrivacy(false);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <form onSubmit={onSubmit} className="card space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-800">
            Name*
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-800">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-800">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-36 w-full rounded-xl border border-slate-300 px-3 py-2"
          />
        </div>

        <label htmlFor="privacy" className="flex items-start gap-2 text-sm text-slate-700">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            checked={privacy}
            onChange={(event) => setPrivacy(event.target.checked)}
            className="mt-1"
          />
          Ich stimme der Speicherung und Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
          Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen.
        </label>

        <button type="submit" className="button-primary w-full" disabled={status === 'loading'}>
          {status === 'loading' ? 'Wird übermittelt ...' : 'Jetzt unverbindlich anfragen'}
        </button>

        {status === 'success' && (
          <p className="text-sm font-medium text-emerald-700">
            Ich danke Ihnen! Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-medium text-red-700">
            Bei der Übermittlung Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
          </p>
        )}
      </form>

      <aside className="card space-y-3 text-sm text-slate-700">
        <h2 className="text-xl font-semibold text-brand-900">Direkter Kontakt</h2>
        <p>
          Telefon: <a href={company.phoneHref}>{company.phone}</a>
        </p>
        <p>
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <p>
          Adresse: {company.addressLine1}, {company.addressLine2}
        </p>
        <p>
          Instagram:{' '}
          <a href={company.instagram} target="_blank" rel="noreferrer">
            cbimmoservice_schortens
          </a>
        </p>
      </aside>
    </div>
  );
}
