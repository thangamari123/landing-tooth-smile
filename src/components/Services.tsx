import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, ArrowRight } from 'lucide-react';
import { treatments } from '../lib/treatments';
import WhatsAppButton from './WhatsAppButton';

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof treatments[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Our Treatments</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Comprehensive Dental Solutions</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">From preventive care to advanced restorative treatments, we offer everything you need for a healthy, beautiful smile.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((service, index) => (
            <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] hover:border-[#00A8A8]/20 hover:shadow-xl hover:shadow-[#1E2A78]/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[#333333]/60 text-sm leading-relaxed mb-4">{service.tagline}</p>
                <div className="flex items-center justify-between">
                  <button onClick={() => setSelectedService(service)} className="inline-flex items-center gap-1 text-[#00A8A8] text-sm font-semibold hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </button>
                  <Link to={`/treatments/${service.slug}`} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00A8A8]/10 hover:bg-[#00A8A8] text-[#00A8A8] hover:text-white text-xs font-semibold rounded-lg transition-all">
                    <ArrowRight size={13} />Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-56">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"><X size={20} /></button>
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-white font-serif text-2xl font-bold">{selectedService.title}</h3>
                  <p className="text-white/80 text-sm mt-1">Duration: {selectedService.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#333333]/70 leading-relaxed mb-6">{selectedService.overview}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-[#1E2A78] mb-3">Key Benefits</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedService.benefits.slice(0, 4).map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#00A8A8]/10 rounded-full flex items-center justify-center flex-shrink-0"><ChevronRight size={12} className="text-[#00A8A8]" /></div>
                        <span className="text-sm text-[#333333]/80">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={`/treatments/${selectedService.slug}`} onClick={() => setSelectedService(null)} className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E2A78] hover:bg-[#151f5a] text-white font-semibold rounded-xl transition-all">
                    View Full Details
                  </Link>
                  <WhatsAppButton treatment={selectedService.title} label="Book via WhatsApp" variant="outline" className="flex-1 rounded-xl" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
