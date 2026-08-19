const testimonials = [
  {
    quote:
      'Wir waren begeistert – Entrümpelung und Gartenpflege in einer Woche erledigt, pünktlich und zum vereinbarten Preis.',
    author: 'Familie Hartmann, Schortens',
  },
  {
    quote:
      'Endlich ein Handwerker, der kommt was er verspricht. Kleine Reparaturen schnell und ordentlich.',
    author: 'M. Schreiber, Jever',
  },
  {
    quote:
      'Die Objektbetreuung unserer Ferienwohnung läuft seit zwei Jahren reibungslos – absolut empfehlenswert.',
    author: 'K. Lübbers, Wittmund',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-shell fade-up" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Stimmen aus der Region</p>
          <h2>Was unsere Kunden sagen</h2>
        </div>
        <div className="testimonials-track">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.author}>
              <span className="testimonial-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <cite>{testimonial.author}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
