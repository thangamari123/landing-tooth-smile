import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorCard from '../components/DoctorCard';
import Timings from '../components/Timings';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Stats />
      <BeforeAfter />
      <Testimonials />
      <WhyChooseUs />
      <DoctorCard />
      <Timings />
      <FAQSection />
      <ContactForm />
    </>
  );
}
