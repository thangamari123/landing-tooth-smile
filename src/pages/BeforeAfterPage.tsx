import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { treatments } from '../lib/treatments';
import WhatsAppButton from '../components/WhatsAppButton';

export default function BeforeAfterPage() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F2F4F7] to-white border-b border-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <Link to="/" className="inline-flex items-center gap-2 text-[#333333]/40 hover:text-[#1E2A78] text-sm mb-6 transition-colors">
              <ChevronDown size={16} className="rotate-90" />Back to Home
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Before & After Gallery</h1>
            <p className="text-[#333333]/60 text-lg">Real transformations by Dr. R. R. Murali Karthik. See the remarkable results our patients have achieved.</p>
          </motion.div>
        </div>
      </section>
      {treatments.map((treatment) => (
        <section key={treatment.slug} className="py-16 border-b border-[#F2F4F7] last:border-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-3 rounded-full">{treatment.shortTitle}</span>
                <h2 className="font-serif text-2xl font-bold text-[#1E2A78]">{treatment.title}</h2>
              </div>
              <Link to={`/treatments/${treatment.slug}`} className="inline-flex items-center gap-1 text-[#00A8A8] text-sm font-semibold hover:gap-2 transition-all">
                View Treatment Details<ArrowRight size={16} />
              </Link>
            </motion.div>
            {treatment.beforeAfter.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatment.beforeAfter.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] shadow-sm"
                  >
                    <div className="grid grid-cols-2">
                      <div className="relative"><img src={item.beforeImg} alt="Before" className="w-full h-52 object-cover" /><span className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 text-white text-xs font-semibold">Before</span></div>
                      <div className="relative"><img src={item.afterImg} alt="After" className="w-full h-52 object-cover" /><span className="absolute top-3 right-3 px-2 py-0.5 bg-[#00A8A8]/80 text-white text-xs font-semibold">After</span></div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-[#1E2A78]">{item.title}</h4>
                      <p className="text-[#333333]/50 text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-[#333333]/40 text-sm">Before & after images for this treatment will be updated soon.</p>
            )}
          </div>
        </section>
      ))}
      <section className="py-16 bg-gradient-to-r from-[#1E2A78] to-[#0F8ACB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">Start Your Transformation</h2>
            <p className="text-white/70 mb-8">Book a consultation with Dr. R. R. Murali Karthik and see what is possible for your smile.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton label="Book via WhatsApp" variant="large" />
              <a href="tel:9551120208" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium tracking-wide hover:border-white/60 transition-all rounded-xl">
                Call 95511 20208
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
