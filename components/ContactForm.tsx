'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  privacy: boolean;
  botField: string;
};

type RequestEventDetail = {
  service?: string;
  message?: string;
};

const serviceOptions = [
  'Entrümpelungen',
  'Gartenpflege',
  'Handwerkerservice',
  'Objektbetreuung',
];

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  message: '',
  privacy: false,
  botField: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const isDisabled = useMemo(
    () =>
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !form.privacy ||
      status === 'loading',
    [form, status],
  );

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<RequestEventDetail>;
      setForm((current) => ({
        ...current,
        service: customEvent.detail.service || current.service,
        message: customEvent.detail.message || current.message,
      }));
    };

    window.addEventListener('cb:set-service', handler as EventListener);
    return () => window.removeEventListener('cb:set-service', handler as EventListener);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const body = new URLSearchParams({
        'form-name': 'anfrage',
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
        'bot-field': form.botField,
      });

      // Must target the static skeleton, not '/': a POST to '/' is handled by the
      // Next.js SSR function and never reaches Netlify's form processing.
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="contact-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="contact-grid">
          <div>
            <p className="section-kicker">Kontakt</p>
            <h2>Kostenloses Angebot anfordern</h2>
            <form className="contact-form" name="anfrage" method="POST" onSubmit={handleSubmit}>
              {/* Netlify Forms is registered via the static skeleton in public/__forms.html.
                  The `data-netlify` attribute must not appear here: the Next.js runtime
                  rejects prerendered pages that contain it. */}
              <input type="hidden" name="form-name" value="anfrage" />
              <p className="hidden-field" aria-hidden="true">
                <label>
                  Bitte nicht ausfüllen
                  <input
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.botField}
                    onChange={(event) => setForm({ ...form, botField: event.target.value })}
                  />
                </label>
              </p>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    autoComplete="name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    autoComplete="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Leistung</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(event) => setForm({ ...form, service: event.target.value })}
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </div>

              <label className="checkbox-row" htmlFor="privacy">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(event) => setForm({ ...form, privacy: event.target.checked })}
                />
                <span>Ich akzeptiere die Datenschutzhinweise.</span>
              </label>

              <div className="form-actions">
                <button className="primary-button" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Wird gesendet ...' : 'Anfrage absenden'}
                </button>
                {status === 'success' && (
                  <span className="form-success">Vielen Dank! Wir melden uns zeitnah zurück.</span>
                )}
                {status === 'error' && (
                  <span className="form-error">Bitte füllen Sie alle Felder aus.</span>
                )}
              </div>
            </form>
          </div>

          <aside className="contact-copy">
            <p>
              Zuverlässiger Partner für Haus, Garten und Immobilie im Landkreis Friesland.
            </p>
            <div className="contact-stack">
              <div className="contact-panel">
                <span className="contact-badge">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6.7 4h2.6l1.3 4.2-1.6 1.6a15 15 0 0 0 5 5l1.6-1.6L20 14.5V17a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 1.7-2Z" />
                  </svg>
                  Direkt erreichbar
                </span>
                <p className="contact-detail">+49 4461 9169 850</p>
                <p className="contact-note">Schnelle Reaktionszeiten für Anfragen aus der Region.</p>
              </div>
              <div className="contact-panel">
                <span className="contact-badge">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  Per E-Mail
                </span>
                <p className="contact-detail">info@cbimmoservice.de</p>
                <p className="contact-note">Für Angebote, Rückfragen und Terminabstimmungen.</p>
              </div>
              <div className="contact-panel">
                <span className="contact-badge">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Vor Ort
                </span>
                <p className="contact-detail">Schortens, Deutschland</p>
                <p className="contact-note">Im Einsatz in Schortens, Jever, Wilhelmshaven, Wittmund und Umgebung.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
