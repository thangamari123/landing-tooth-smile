import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Calendar, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { getTreatmentBySlug } from '../lib/treatments';
import WhatsAppButton from '../components/WhatsAppButton';

export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || '');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!treatment) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Treatment Not Found</h1>
          <Link to="/" className="text-[#00A8A8] hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1E2A78] to-[#0F8ACB] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={treatment.heroImage} alt={treatment.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={16} />Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 bg-white/15 text-[#5BC0EB] text-xs font-semibold tracking-wide mb-4 rounded-full">{treatment.shortTitle}</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">{treatment.title}</h1>
            <p className="text-white/70 text-lg max-w-xl mb-8">{treatment.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton treatment={treatment.title} label="Book This Treatment" variant="large" />
              <a href="tel:9551120208" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium text-base tracking-wide hover:border-white/60 transition-all rounded-xl">
                <Calendar size={18} />Call to Book
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F2F4F7]">
            <div className="py-5 px-4 flex items-center gap-3">
              <Clock size={20} className="text-[#00A8A8]" />
              <div><div className="text-xs text-[#333333]/40 uppercase tracking-wide">Duration</div><div className="text-sm font-semibold text-[#1E2A78]">{treatment.duration}</div></div>
            </div>
            <div className="py-5 px-4 flex items-center gap-3">
              <Check size={20} className="text-[#00A8A8]" />
              <div><div className="text-xs text-[#333333]/40 uppercase tracking-wide">Recovery</div><div className="text-sm font-semibold text-[#1E2A78]">{treatment.recovery}</div></div>
            </div>
            <div className="py-5 px-4 flex items-center gap-3">
              <Calendar size={20} className="text-[#00A8A8]" />
              <div><div className="text-xs text-[#333333]/40 uppercase tracking-wide">Cost</div><div className="text-sm font-semibold text-[#1E2A78]">{treatment.costRange}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-4 rounded-full">Overview</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78] mb-6">About {treatment.title}</h2>
              <div className="space-y-4 text-[#333333]/70 leading-relaxed">
                <p className="text-lg font-medium text-[#333333]">{treatment.overview}</p>
                {treatment.description.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={treatment.image} alt={treatment.title} className="w-full h-72 object-cover" />
              </div>
              <div className="mt-6 p-6 bg-[#F2F4F7] rounded-2xl">
                <h3 className="font-semibold text-[#1E2A78] mb-4">Ready to get started?</h3>
                <p className="text-sm text-[#333333]/50 mb-5">Book a consultation with Dr. R. R. Murali Karthik and get a personalized treatment plan.</p>
                <WhatsAppButton treatment={treatment.title} label="Book Consultation" variant="primary" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-4 rounded-full">Procedure</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78]">How It Works</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {treatment.procedure.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 mb-6 last:mb-0"
              >
                <div className="w-8 h-8 bg-[#00A8A8] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{index + 1}</div>
                <div className="pb-6 border-b border-[#333333]/10 last:border-0 flex-1"><p className="text-[#333333]/80">{step}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-4 rounded-full">Benefits</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78]">Why Choose This Treatment?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {treatment.benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}
                className="flex items-start gap-3 p-5 bg-white border border-[#F2F4F7] rounded-xl"
              >
                <div className="w-6 h-6 bg-[#00A8A8]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={14} className="text-[#00A8A8]" /></div>
                <span className="text-sm text-[#333333]/80 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {treatment.beforeAfter.length > 0 && (
        <section className="py-16 bg-[#F2F4F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-4 rounded-full">Results</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78]">Before & After</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {treatment.beforeAfter.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] shadow-sm"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative"><img src={item.beforeImg} alt="Before" className="w-full h-48 object-cover" /><span className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 text-white text-xs font-semibold">Before</span></div>
                    <div className="relative"><img src={item.afterImg} alt="After" className="w-full h-48 object-cover" /><span className="absolute top-3 right-3 px-2 py-0.5 bg-[#00A8A8]/80 text-white text-xs font-semibold">After</span></div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#1E2A78] text-sm">{item.title}</h4>
                    <p className="text-[#333333]/50 text-xs mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-xs font-semibold tracking-wide mb-4 rounded-full">FAQs</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78]">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {treatment.faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className="border border-[#F2F4F7] rounded-xl overflow-hidden"
              >
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F2F4F7] transition-colors">
                  <span className="font-semibold text-[#1E2A78] text-sm pr-4">{faq.q}</span>
                  {openFaq === index ? <ChevronUp size={18} className="text-[#333333]/40 flex-shrink-0" /> : <ChevronDown size={18} className="text-[#333333]/40 flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.2 }}>
                    <div className="px-5 pb-5 text-[#333333]/70 text-sm leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
