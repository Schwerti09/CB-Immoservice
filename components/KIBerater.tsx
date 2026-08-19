'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type ServiceKey = 'Entrümpelungen' | 'Gartenpflege' | 'Handwerkerservice' | 'Objektbetreuung' | 'Ich bin nicht sicher';

type Step = 1 | 2 | 3;

type Answers = {
  service: ServiceKey | '';
  qualifierA: string;
  qualifierB: string;
  description: string;
};

const serviceChoices: Array<{ title: ServiceKey; description: string }> = [
  {
    title: 'Entrümpelungen',
    description: 'Wohnungen, Häuser, Keller oder Dachböden professionell und besenrein.',
  },
  {
    title: 'Gartenpflege',
    description: 'Pflege, Schnitt und saisonale Arbeiten für private und gewerbliche Flächen.',
  },
  {
    title: 'Handwerkerservice',
    description: 'Kleine und mittlere Reparaturen, Renovierungen und Modernisierungen.',
  },
  {
    title: 'Objektbetreuung',
    description: 'Wartung, Instandhaltung und Schlüsselservice für Ihre Immobilie.',
  },
  {
    title: 'Ich bin nicht sicher',
    description: 'Ich beschreibe mein Anliegen und lasse mich einordnen.',
  },
];

const qualifierContent: Record<Exclude<ServiceKey, 'Ich bin nicht sicher'>, { questionA: string; optionsA: string[]; questionB: string; optionsB: string[] }> = {
  Entrümpelungen: {
    questionA: 'Wie groß ist das Objekt?',
    optionsA: ['Klein', 'Mittel', 'Groß'],
    questionB: 'Wann soll die Entrümpelung stattfinden?',
    optionsB: ['Schnellstmöglich', 'Innerhalb von 2 Wochen', 'Später planbar'],
  },
  Gartenpflege: {
    questionA: 'Welche Fläche betrifft es?',
    optionsA: ['Vorgarten', 'Hausgarten', 'Großes Grundstück'],
    questionB: 'Welche Leistung steht im Fokus?',
    optionsB: ['Rasen & Pflege', 'Hecken & Schnitt', 'Saisonservice'],
  },
  Handwerkerservice: {
    questionA: 'Wie groß ist der Umfang?',
    optionsA: ['Kleine Reparatur', 'Mehrere Arbeiten', 'Modernisierung'],
    questionB: 'Wie dringend ist es?',
    optionsB: ['Akut', 'In den nächsten Tagen', 'Flexibel'],
  },
  Objektbetreuung: {
    questionA: 'Um welches Objekt geht es?',
    optionsA: ['Wohnobjekt', 'Gewerbeobjekt', 'Ferienimmobilie'],
    questionB: 'Welche Betreuung benötigen Sie?',
    optionsB: ['Wartung', 'Schlüsselservice', 'Regelmäßige Betreuung'],
  },
};

const initialAnswers: Answers = {
  service: '',
  qualifierA: '',
  qualifierB: '',
  description: '',
};

export default function KIBerater() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const panelRef = useRef<HTMLDivElement>(null);

  const selectedService = answers.service && answers.service !== 'Ich bin nicht sicher' ? answers.service : null;

  const summaryText = useMemo(() => {
    if (answers.service === 'Ich bin nicht sicher') {
      return answers.description.trim();
    }

    if (!selectedService) {
      return '';
    }

    return `${selectedService} – ${answers.qualifierA}; ${answers.qualifierB}`;
  }, [answers, selectedService]);

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

  const close = () => {
    setOpen(false);
  };

  const reset = () => {
    setStep(1);
    setAnswers(initialAnswers);
  };

  const handleChoice = (title: ServiceKey) => {
    setAnswers({ ...initialAnswers, service: title });
    setStep(2);
  };

  const goToSummary = () => {
    if (answers.service === 'Ich bin nicht sicher') {
      if (!answers.description.trim()) {
        return;
      }
    } else if (!answers.qualifierA || !answers.qualifierB) {
      return;
    }

    setStep(3);
  };

  const sendToContact = () => {
    const detail = {
      service: selectedService || 'Entrümpelungen',
      message: summaryText,
    };

    window.dispatchEvent(new CustomEvent('cb:set-service', { detail }));
    close();
    const target = document.getElementById('kontakt');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#kontakt';
    }
    window.setTimeout(reset, 240);
  };

  return (
    <>
      <button
        className="ki-launcher"
        aria-label="KI-Berater öffnen"
        onClick={() => setOpen(true)}
        type="button"
      >
        🤖
      </button>

      {open && (
        <div className="ki-overlay" role="presentation" onClick={close}>
          <div
            aria-modal="true"
            className="ki-panel"
            onClick={(event) => event.stopPropagation()}
            ref={panelRef}
            role="dialog"
            aria-labelledby="ki-berater-title"
          >
            <div className="ki-handle" aria-hidden="true" />
            <div className="ki-header">
              <div>
                <span className="ki-step-badge">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  KI-Berater
                </span>
                <h3 id="ki-berater-title">KI-Berater</h3>
                <p>🤖 Automatisiert – kein Mitarbeiter</p>
              </div>
              <button className="ki-close" onClick={close} type="button" aria-label="Schließen">
                ×
              </button>
            </div>

            <div className="ki-body">
              <p className="ki-privacy">Ihre Eingaben werden nicht gespeichert oder weitergeleitet.</p>

              {step === 1 && (
                <div className="ki-choices">
                  <p className="ki-label">Was können wir für Sie tun?</p>
                  {serviceChoices.map((choice) => (
                    <button
                      className="ki-option"
                      key={choice.title}
                      onClick={() => handleChoice(choice.title)}
                      type="button"
                    >
                      <strong>{choice.title}</strong>
                      <small>{choice.description}</small>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && answers.service === 'Ich bin nicht sicher' && (
                <div className="ki-choices">
                  <p className="ki-label">Beschreiben Sie kurz Ihr Anliegen</p>
                  <textarea
                    className="ki-textarea"
                    value={answers.description}
                    onChange={(event) =>
                      setAnswers((current) => ({ ...current, description: event.target.value }))
                    }
                  />
                  <p className="ki-helper">Je genauer die Beschreibung, desto besser die Vorauswahl.</p>
                </div>
              )}

              {step === 2 && selectedService && (
                <div className="ki-choices">
                  <p className="ki-label">{qualifierContent[selectedService].questionA}</p>
                  {qualifierContent[selectedService].optionsA.map((option) => (
                    <button
                      className="ki-option"
                      key={option}
                      onClick={() => setAnswers((current) => ({ ...current, qualifierA: option }))}
                      type="button"
                    >
                      <strong>{option}</strong>
                    </button>
                  ))}

                  <p className="ki-label">{qualifierContent[selectedService].questionB}</p>
                  {qualifierContent[selectedService].optionsB.map((option) => (
                    <button
                      className="ki-option"
                      key={option}
                      onClick={() => setAnswers((current) => ({ ...current, qualifierB: option }))}
                      type="button"
                    >
                      <strong>{option}</strong>
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="ki-summary-card">
                  <strong>Ihre Zusammenfassung</strong>
                  <p>{summaryText}</p>
                  <p>
                    Wir übernehmen die Vorauswahl und leiten Sie direkt zum Kontaktformular mit
                    passender Leistung weiter.
                  </p>
                </div>
              )}
            </div>

            <div className="ki-footer">
              <button
                className="secondary-button"
                onClick={() => {
                  if (step === 1) {
                    close();
                    return;
                  }
                  setStep((current) => (current === 3 ? 2 : 1));
                }}
                type="button"
              >
                {step === 1 ? 'Schließen' : 'Zurück'}
              </button>
              <div className="ki-footer-actions">
                {step === 2 && (
                  <button className="primary-button" onClick={goToSummary} type="button">
                    Zusammenfassung anzeigen
                  </button>
                )}
                {step === 3 && (
                  <button className="primary-button" onClick={sendToContact} type="button">
                    Anfrage abschicken
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
