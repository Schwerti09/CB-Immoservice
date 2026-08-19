import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import ServiceAreas from '../components/ServiceAreas';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Trust from '../components/Trust';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Trust />
      <Team />
      <Testimonials />
      <ServiceAreas />
      <ContactForm />
    </main>
  );
}
