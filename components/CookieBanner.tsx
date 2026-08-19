'use client';

import { useEffect, useState } from 'react';

type ConsentMode = 'all' | 'essential' | 'custom';

type CustomSettings = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'cb-cookie-consent-v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [custom, setCustom] = useState<CustomSettings>({ analytics: false, marketing: false });

  useEffect(() => {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!existing);
  }, []);

  const persist = (mode: ConsentMode, settings?: CustomSettings) => {
    const payload = {
      mode,
      settings: settings ?? { analytics: mode === 'all', marketing: mode === 'all' },
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie Einstellungen">
      <p>
        Wir verwenden Cookies, um die Website technisch sicher zu betreiben und auf Wunsch
        Nutzungsdaten anonym auszuwerten.
      </p>
      <div className="cookie-actions">
        <button className="primary-button" type="button" onClick={() => persist('all')}>
          Alle akzeptieren
        </button>
        <button className="secondary-button" type="button" onClick={() => persist('essential')}>
          Ablehnen
        </button>
        <button className="ghost-link" type="button" onClick={() => setShowCustom((value) => !value)}>
          Individuell
        </button>
      </div>
      {showCustom && (
        <div className="cookie-custom">
          <label>
            <input
              type="checkbox"
              checked={custom.analytics}
              onChange={(event) => setCustom((current) => ({ ...current, analytics: event.target.checked }))}
            />
            Analyse-Cookies
          </label>
          <label>
            <input
              type="checkbox"
              checked={custom.marketing}
              onChange={(event) => setCustom((current) => ({ ...current, marketing: event.target.checked }))}
            />
            Marketing-Cookies
          </label>
          <button className="primary-button" type="button" onClick={() => persist('custom', custom)}>
            Auswahl speichern
          </button>
        </div>
      )}
    </aside>
  );
}
