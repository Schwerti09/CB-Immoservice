const processSteps = [
  {
    title: '1. Analyse',
    description: 'Wir erfassen Ziele, Objektstatus und Marktlage in einem strukturierten Erstgespräch.',
  },
  {
    title: '2. Strategie',
    description: 'Sie erhalten eine klare Vermarktungs- und Preisstrategie inkl. Zeitplan.',
  },
  {
    title: '3. Umsetzung',
    description: 'Exposé, Vermarktung, Besichtigungen und Verhandlung aus einer Hand.',
  },
  {
    title: '4. Abschluss',
    description: 'Begleitung bis zum Notartermin sowie Übergabe und Nachbetreuung.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Ablauf</p>
          <h2>So arbeiten wir zusammen</h2>
        </div>
        <div className="testimonials-track">
          {processSteps.map((step) => (
            <article className="testimonial-card" key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
