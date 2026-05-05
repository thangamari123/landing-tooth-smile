import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurDoctors() {
  return (
    <section id="doctors" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#F2F4F7]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Our Experts</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-6">Meet The Expert Behind Your Smile</h2>
          <p className="text-[#333333]/70 text-lg">
            Experienced, highly qualified, and dedicated to providing you with the best dental care in a comfortable environment.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1E2A78]/5 border border-[#1E2A78]/5 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 relative bg-[#1E2A78] min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78] via-[#1E2A78]/20 to-transparent z-10 opacity-80" />
              <img src="/images/doctor-portrait.png" alt="Dr. R. Murali Karthik" className="absolute inset-0 w-full h-full object-cover object-top opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-white font-serif italic text-sm sm:text-base leading-relaxed">
                    "Every patient deserves to smile with confidence. It's my privilege to make that happen."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold text-[#1E2A78] mb-2">Dr. R. Murali Karthik</h3>
              <p className="text-[#00A8A8] font-bold tracking-wide text-sm uppercase mb-6">Chief Dental Surgeon | Prosthodontist & Implantologist</p>
              
              <p className="text-[#333333]/70 leading-relaxed mb-8">
                With over <strong className="text-[#1E2A78]">13+ years of clinical experience</strong>, Dr. Murali Karthik is one of Chennai's most trusted names in advanced dentistry. He specializes in complex full mouth rehabilitations, dental implants, and smile designing, combining rigorous academic knowledge with a gentle, patient-first approach.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A8A8]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-[#00A8A8]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E2A78] text-sm mb-1">Highly Qualified</div>
                    <div className="text-xs text-[#333333]/60 leading-relaxed">BDS, MDS from Saveetha Dental College</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A8A8]/10 flex items-center justify-center flex-shrink-0">
                    <Award size={22} className="text-[#00A8A8]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E2A78] text-sm mb-1">Award Winning</div>
                    <div className="text-xs text-[#333333]/60 leading-relaxed">2× National Best Paper Award Winner</div>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/about" className="inline-flex items-center gap-2 text-[#00A8A8] font-bold hover:text-[#008f8f] transition-colors group">
                  View Full Profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
