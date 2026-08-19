'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { company, services } from './siteContent';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  privacy: boolean;
};

type RequestEventDetail = {
  service?: string;
  message?: string;
};

const serviceOptions = services.map((service) => service.title);

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  message: '',
  privacy: false,
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
      });

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
            <h2>Unverbindlich beraten lassen</h2>
            <form className="contact-form" name="anfrage" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="anfrage" />
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
              Als Immobilienmakler in der Metropolregion Nürnberg stehen wir Ihnen für Kauf,
              Verkauf, Vermietung, Bewertung und Finanzierung persönlich zur Verfügung.
            </p>
            <div className="contact-stack">
              <div className="contact-panel">
                <span className="contact-badge">Telefon</span>
                <p className="contact-detail">{company.phone}</p>
                <p className="contact-note">Montag bis Freitag, persönliche Erreichbarkeit.</p>
              </div>
              <div className="contact-panel">
                <span className="contact-badge">E-Mail</span>
                <p className="contact-detail">{company.email}</p>
                <p className="contact-note">Für Exposés, Rückfragen und Terminabstimmung.</p>
              </div>
              <div className="contact-panel">
                <span className="contact-badge">Standort</span>
                <p className="contact-detail">{company.addressLine1}</p>
                <p className="contact-note">{company.addressLine2}</p>
                <p className="contact-note">Öffnungszeiten: {company.openingHours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
