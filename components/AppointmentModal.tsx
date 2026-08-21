'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { services } from './siteContent';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type OpenEventDetail = {
  message?: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: services[0].title,
  message: '',
};

export default function AppointmentModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [form, setForm] = useState<FormState>(initialState);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openModal = (event: Event) => {
      const customEvent = event as CustomEvent<OpenEventDetail>;
      setForm((current) => ({ ...current, message: customEvent.detail?.message ?? current.message }));
      setOpen(true);
    };

    window.addEventListener('cb:open-appointment', openModal as EventListener);
    return () => window.removeEventListener('cb:open-appointment', openModal as EventListener);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key === 'Tab' && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const canSubmit = useMemo(
    () => form.name.trim() && form.phone.trim() && form.email.trim() && form.message.trim() && status !== 'loading',
    [form, status],
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setStatus('idle');
      setOpen(false);
      setSent(true);
      setForm(initialState);
      window.setTimeout(() => setSent(false), 2600);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {open && (
        <div className="ki-overlay" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="ki-panel appointment-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            onClick={(event) => event.stopPropagation()}
            ref={panelRef}
          >
            <div className="ki-header">
              <div>
                <span className="ki-step-badge">Terminvereinbarung</span>
                <h3 id="appointment-title">Beratungstermin anfragen</h3>
                <p>Wir melden uns schnellstmöglich persönlich zurück.</p>
              </div>
              <button className="ki-close" type="button" aria-label="Schließen" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
            <form className="ki-body appointment-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="appointment-name">Name</label>
                  <input
                    id="appointment-name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="appointment-phone">Telefon</label>
                  <input
                    id="appointment-phone"
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="appointment-email">E-Mail</label>
                  <input
                    id="appointment-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="appointment-service">Leistung</label>
                  <select
                    id="appointment-service"
                    value={form.service}
                    onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                  >
                    {services.map((service) => (
                      <option key={service.key} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="appointment-message">Nachricht</label>
                <textarea
                  id="appointment-message"
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                />
              </div>
              <div className="ki-footer">
                <button className="secondary-button" type="button" onClick={() => setOpen(false)}>
                  Abbrechen
                </button>
                <button className="primary-button" type="submit" disabled={!canSubmit}>
                  {status === 'loading' ? 'Wird gesendet ...' : 'Termin anfragen'}
                </button>
              </div>
              {status === 'error' && <span className="form-error">Bitte alle Felder vollständig ausfüllen.</span>}
            </form>
          </div>
        </div>
      )}

      {sent && (
        <div className="toast" role="status" aria-live="polite">
          Vielen Dank! Ihre Terminanfrage wurde gesendet.
        </div>
      )}
    </>
  );
}
