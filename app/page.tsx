import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import ServiceAreas from '../components/ServiceAreas';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Trust from '../components/Trust';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Trust />
      <Testimonials />
      <ServiceAreas />
      <ContactForm />
    </main>
  );
}
