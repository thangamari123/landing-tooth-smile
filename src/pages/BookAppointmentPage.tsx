import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Clock, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function BookAppointmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-main min-h-screen">
      {/* Premium Page Header - Matched with About Page style */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-[#1E2A78] overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A78]/90 to-[#0F8ACB]/80 z-10" />
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80" alt="Clinic Interior" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-full backdrop-blur-sm">
              Online Booking
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Book Your Appointment
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Take the first step towards a perfect smile. Fill out the form below and our team will get back to you within 15 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="relative -mt-10 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-2">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="py-5 px-6 flex items-center gap-4 justify-center">
              <Clock size={20} className="text-cyan" />
              <span className="text-sm font-bold text-primary">Fast Response</span>
            </div>
            <div className="py-5 px-6 flex items-center gap-4 justify-center">
              <Shield size={20} className="text-secondary" />
              <span className="text-sm font-bold text-primary">Secure Booking</span>
            </div>
            <div className="py-5 px-6 flex items-center gap-4 justify-center">
              <MapPin size={20} className="text-cyan" />
              <span className="text-sm font-bold text-primary">Mylapore, Chennai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16">
        <ContactForm />
      </section>
    </div>
  );
}
