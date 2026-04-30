import { motion } from 'framer-motion';
import { Scan, Zap, FlaskConical, Heart, Shield, Clock, Award, Users } from 'lucide-react';

const reasons = [
  { icon: Scan, title: 'Advanced OPG Imaging', description: 'Digital panoramic X-rays for precise diagnosis and treatment planning with minimal radiation exposure.' },
  { icon: Zap, title: 'Laser Technology', description: 'Laser-assisted procedures for painless treatments, faster healing, and reduced bleeding.' },
  { icon: FlaskConical, title: 'In-house Dental Lab', description: 'Our on-site laboratory ensures faster turnaround, better quality control, and perfect-fitting restorations.' },
  { icon: Heart, title: 'Personalized Care', description: 'Every treatment plan is customized to your unique needs, goals, and comfort level.' },
  { icon: Shield, title: 'Sterilization Protocol', description: 'Hospital-grade sterilization and infection control for your complete safety and peace of mind.' },
  { icon: Clock, title: 'Flexible Timings', description: 'Open 6 days a week with extended hours. Sunday appointments available for busy professionals.' },
  { icon: Award, title: 'MDS Specialist', description: 'Treatment by a qualified MDS Prosthodontist with specialized training in implants and aesthetics.' },
  { icon: Users, title: 'Patient Education', description: 'We explain every procedure, show you digital previews, and ensure you make informed decisions.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">The Tooth & Smile Difference</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">We combine advanced technology, specialist expertise, and genuine care to deliver an unmatched dental experience.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group bg-[#F2F4F7] hover:bg-white rounded-2xl p-6 border border-transparent hover:border-[#00A8A8]/20 hover:shadow-lg hover:shadow-[#1E2A78]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00A8A8]/10 group-hover:bg-[#00A8A8]/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <reason.icon size={22} className="text-[#00A8A8]" />
              </div>
              <h3 className="text-[#1E2A78] font-bold text-base mb-2">{reason.title}</h3>
              <p className="text-[#333333]/60 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
