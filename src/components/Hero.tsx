import { motion } from 'framer-motion';
import { Calendar, Phone, Shield, Award, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[88px] overflow-hidden bg-white">
      {/* Background gradient shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#5BC0EB]/20 via-[#5BC0EB]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-[#0F8ACB]/10 to-transparent rounded-full blur-3xl" />
        {/* Centered background logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] opacity-[0.03] pointer-events-none select-none blur-[1px]">
          <img src="/images/Thooth_Smile_Logo.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A8A8]/10 rounded-full mb-6 max-w-full"
            >
              <Shield size={16} className="text-[#00A8A8] flex-shrink-0" />
              <span className="text-[#00A8A8] text-xs sm:text-sm font-semibold leading-tight">Specialist in Implants & Smile Correction</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="text-[#00A8A8] font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-4"
            >
              Your Smile Deserves The Best Care
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1E2A78] leading-[1.15] mb-6"
            >
              Healthy Smile,{' '}
              <span className="text-[#0F8ACB]">Confident You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#333333]/70 mb-8 leading-relaxed max-w-lg"
            >
              Permanent solutions for missing teeth, painless treatments, and confident smiles.
              Experience world-class dental care right here in Mylapore, Chennai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold rounded-xl shadow-lg shadow-[#00A8A8]/25 transition-all hover:shadow-xl hover:shadow-[#00A8A8]/30 hover:-translate-y-0.5"
              >
                <Calendar size={18} />Book Appointment
              </button>
              <a href="https://wa.me/919551120208" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1E2A78]/15 text-[#1E2A78] font-semibold rounded-xl hover:border-[#00A8A8] hover:text-[#00A8A8] transition-all hover:-translate-y-0.5"
              >
                <Phone size={18} />Call / WhatsApp
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-[#333333]/60 text-sm">
                <Award size={18} className="text-[#00A8A8]" /><span>Dr. R. R. Murali Karthik, MDS</span>
              </div>
              <div className="flex items-center gap-2 text-[#333333]/60 text-sm">
                <Clock size={18} className="text-[#00A8A8]" /><span>Mon – Sat: 9:30 AM – 8 PM</span>
              </div>
              <div className="flex items-center gap-2 text-[#333333]/60 text-sm">
                <MapPin size={18} className="text-[#00A8A8]" /><span>Mylapore, Chennai</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Patient image */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0F8ACB]/20 to-[#1E2A78]/10 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1E2A78]/10">
                <img src="/images/doctor-portrait.png" alt="Dr. R. R. Murali Karthik" className="w-full h-[550px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/30 via-transparent to-transparent" />
              </div>
              {/* Professional Name Tag Overlay */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
                className="absolute top-8 -left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border border-white/20 z-10"
              >
                <div className="text-[#1E2A78] font-bold text-base leading-tight">Dr. R. R. Murali Karthik</div>
                <div className="text-[#00A8A8] text-[10px] font-bold uppercase tracking-[0.1em] mt-0.5">MDS – Prosthodontist & Implantologist</div>
              </motion.div>
              {/* Floating stat card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl shadow-black/10 p-5 border border-[#F2F4F7]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00A8A8]/10 rounded-xl flex items-center justify-center">
                    <Award size={22} className="text-[#00A8A8]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E2A78] text-lg">10+ Years</div>
                    <div className="text-[#333333]/50 text-sm">Clinical Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
