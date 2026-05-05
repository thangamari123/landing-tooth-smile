import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Services from '../components/Services';
import Stats from '../components/Stats';
import BeforeAfter from '../components/BeforeAfter';
import OurDoctors from '../components/OurDoctors';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Timings from '../components/Timings';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Services />
      <Stats />
      <BeforeAfter />
      <OurDoctors />
      <Testimonials />
      <WhyChooseUs />
      <Timings />
      <FAQSection />
    </>
  );
}
