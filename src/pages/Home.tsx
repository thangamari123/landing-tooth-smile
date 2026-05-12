import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import DoctorExplains from '../components/DoctorExplains';
import WhyChooseUs from '../components/WhyChooseUs';
import OurDoctors from '../components/OurDoctors';
import Testimonials from '../components/Testimonials';
import BeforeAfter from '../components/BeforeAfter';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <OurDoctors />
      <DoctorExplains />
      <Testimonials />
      <BeforeAfter />
      <FAQSection />
    </>
  );
}
