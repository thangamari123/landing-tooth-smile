import Hero from '../components/Hero';
import GoogleReviews from '../components/GoogleReviews';
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
      <GoogleReviews />
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
