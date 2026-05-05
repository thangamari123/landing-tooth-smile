import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function BookAppointmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[72px]">
      <ContactForm />
    </div>
  );
}
