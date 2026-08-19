'use client';

import { company } from './siteContent';

export default function MobileDock() {
  const openAppointmentModal = () => {
    window.dispatchEvent(new CustomEvent('cb:open-appointment', { detail: { source: 'dock' } }));
  };

  return (
    <div className="mobile-dock" aria-label="Mobile Schnellaktionen">
      <a className="mobile-dock-primary" href={company.phoneHref}>
        <span aria-hidden="true">📞</span>
        Anrufen
      </a>
      <button className="mobile-dock-secondary" type="button" onClick={openAppointmentModal}>
        <span aria-hidden="true">🗓</span>
        Termin
      </button>
    </div>
  );
}
