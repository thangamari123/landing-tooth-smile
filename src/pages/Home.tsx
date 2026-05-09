import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import OurDoctors from '../components/OurDoctors';
import Testimonials from '../components/Testimonials';
import BeforeAfter from '../components/BeforeAfter';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <OurDoctors />
      <Testimonials />
      <BeforeAfter />
      <ContactForm />
      <FAQSection />
    </>
  );
}
