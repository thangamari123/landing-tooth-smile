import { motion } from 'framer-motion';
import { GraduationCap, Award, Stethoscope, BookOpen, MapPin, Phone } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function DoctorCard() {
  return (
    <section id="doctor" className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Meet Our Doctor</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78]">Expert Care You Can Trust</h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] overflow-hidden border border-[#F2F4F7] shadow-xl shadow-[#1E2A78]/5"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative">
                <div className="h-80 md:h-full relative">
                  <img src="/images/doctor-portrait.png" alt="Dr. R. R. Murali Karthik" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-[#00A8A8]" />
                      <span className="text-sm font-semibold text-[#1E2A78]">MDS Prosthodontist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78] mb-1">Dr. R. R. Murali Karthik</h3>
                <p className="text-[#00A8A8] font-semibold mb-6">MDS – Prosthodontist & Implantologist</p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: GraduationCap, title: 'Academic Background', desc: 'Master of Dental Surgery (MDS) in Prosthodontics' },
                    { icon: BookOpen, title: 'Current Position', desc: 'Assistant Professor, Sri Venkateshwara Dental College' },
                    { icon: Stethoscope, title: 'Specializations', desc: 'Dental Implants, Smile Design, Full Mouth Rehabilitation' },
                    { icon: MapPin, title: 'Clinic Location', desc: '60/71, Appu Street, Mylapore, Chennai – 600004' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#00A8A8]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon size={18} className="text-[#00A8A8]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#1E2A78] text-sm">{item.title}</div>
                        <div className="text-[#333333]/50 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <WhatsAppButton label="Book Consultation" variant="primary" />
                  <a href="tel:9551120208" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#F2F4F7] text-[#333333] text-sm font-semibold rounded-xl hover:border-[#00A8A8] hover:text-[#00A8A8] transition-all">
                    <Phone size={15} />Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
