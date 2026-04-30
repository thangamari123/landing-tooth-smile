import { motion } from 'framer-motion';
import { Check, ArrowRight, Stethoscope } from 'lucide-react';

const features = [
  'Dental Implants & Prosthetics',
  'Root Canal Treatment (RCT)',
  'Braces & Smile Correction',
  'Laser-Assisted Procedures',
  'Modern Diagnostic Tools',
  'Long-Lasting Results',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#5BC0EB]/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1E2A78]/10">
                <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80" alt="Modern dental clinic interior" className="w-full h-[520px] object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl shadow-black/5 p-5 max-w-xs border border-[#F2F4F7]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#00A8A8]/10 rounded-xl flex items-center justify-center">
                    <Stethoscope size={20} className="text-[#00A8A8]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E2A78] text-sm">Patient-First Approach</div>
                    <div className="text-[#333333]/50 text-xs">Your comfort is our priority</div>
                  </div>
                </div>
                <div className="h-1.5 bg-[#F2F4F7] rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-[#00A8A8] rounded-full" />
                </div>
                <div className="text-right text-xs text-[#333333]/40 mt-1">98% Patient Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">About Our Clinic</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-6 leading-tight">
              Advanced Dentistry, <span className="text-[#0F8ACB]">Personalized Care</span>
            </h2>
            <div className="space-y-4 text-[#333333]/70 leading-relaxed mb-8">
              <p>At <strong className="text-[#333333]">Tooth & Smile Advanced Dentistry</strong>, we help patients fix dental problems quickly, safely, and with long-lasting results.</p>
              <p>Led by <strong className="text-[#333333]">Dr. R. R. Murali Karthik</strong>, we specialize in dental implants, root canal treatments, braces, and smile correction. We use modern diagnostic tools and laser-assisted procedures to ensure accurate diagnosis, less pain, and faster recovery.</p>
              <p className="text-[#333333] font-medium">Our focus is simple: Solve your dental problem properly — not temporarily.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div key={feature} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 bg-[#00A8A8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#00A8A8]" />
                  </div>
                  <span className="text-sm text-[#333333]/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E2A78] hover:bg-[#151f5a] text-white font-semibold rounded-xl transition-all hover:shadow-lg"
            >
              Explore Treatments <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
