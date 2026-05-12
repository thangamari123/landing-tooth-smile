import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Stethoscope, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Happy Smiles', value: '5000+', icon: <Heart className="text-[#38BDF8]" size={20} /> },
    { label: 'Experience', value: '13+ Years', icon: <ShieldCheck className="text-[#2563EB]" size={20} /> },
    { label: 'Dental Care', value: 'Advanced', icon: <Stethoscope className="text-[#38BDF8]" size={20} /> }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle Gradient Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F2FE]/30 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Professional Dentist Portrait with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] border-[12px] border-white group">
              <img
                src="https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png"
                alt="Dr. R. Murali Karthik - Expert Dentist"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Dental Icons */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20"
            >
              <Sparkles className="text-[#38BDF8]" size={28} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-white rounded-[24px] shadow-2xl flex items-center justify-center z-20"
            >
              <Star className="text-[#2563EB] fill-[#2563EB]/10" size={32} />
            </motion.div>
          </motion.div>

          {/* Right Side: Premium Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E0F2FE] text-[#2563EB] text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-8">
                <ShieldCheck size={14} /> Exceptional Dental Standards
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-[#0F172A] mb-8 leading-[1.1] tracking-tight">
                Pioneering the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">Advanced Dentistry.</span>
              </h2>

              <p className="text-[#0F172A]/70 text-lg sm:text-xl font-medium leading-relaxed mb-8">
                Welcome to Tooth & Smile, where luxury meets clinical precision. Our practice is dedicated to providing a transformative dental experience that prioritizes your comfort and long-term oral health.
              </p>

              {/* Personal Vision Quote */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-secondary mb-10"
              >
                <p className="text-[#0F172A] text-sm sm:text-base font-serif italic font-medium leading-relaxed">
                  "I believe every patient deserves to smile with confidence and it's my privilege to make that happen."
                </p>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mt-2">— Dr. R. Murali Karthik</p>
              </motion.div>

              <p className="text-[#0F172A]/60 text-base leading-relaxed mb-12">
                Led by <strong className="text-[#0F172A]">Dr. R. Murali Karthik</strong>, we integrate 13+ years of expert surgical care with next-gen 3D digital technology. From complex rehabilitations to cosmetic smile design, our mission is to build lasting relationships—one smile at a time.
              </p>

              {/* Glassmorphism Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-5 bg-white/60 backdrop-blur-xl border border-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center transition-all"
                  >
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Rounded Gradient CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button
                  onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white font-bold rounded-full hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Book Your Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-[#0F172A]/40 font-bold text-[10px] uppercase tracking-[0.3em]">
                  <div className="w-8 h-[1px] bg-gray-200" /> Mylapore, Chennai
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
