import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'Is the implant procedure painful?', a: 'No. The procedure is performed under local anesthesia, and most patients report minimal discomfort. We also offer sedation options for anxious patients.' },
  { q: 'How long do dental implants last?', a: 'With proper oral hygiene and regular check-ups, dental implants can last 25+ years or even a lifetime. The crown may need replacement after 10-15 years.' },
  { q: 'Is root canal treatment painful?', a: 'Modern RCT is virtually painless. We use advanced anesthesia techniques, and most patients report the procedure is as comfortable as getting a filling.' },
  { q: 'How many visits does RCT require?', a: 'Most cases are completed in a single visit (45-90 minutes). Complex cases may require 2 visits for optimal results.' },
  { q: 'What is the best age for braces?', a: 'While braces can be done at any age, early evaluation at age 7-8 helps identify issues. Adults can also achieve excellent results with modern options.' },
  { q: 'Is teeth whitening safe?', a: 'Yes, when performed by a dental professional. We use protective barriers for gums and carefully control the whitening agent concentration for safe, effective results.' },
  { q: 'What are your clinic timings?', a: 'We are open Monday through Saturday from 9:30 AM to 8:00 PM. Sunday appointments are available by prior booking only.' },
  { q: 'Do you accept dental insurance?', a: 'We can provide the necessary documentation for insurance claims. Please check with your insurance provider regarding coverage details. We also offer flexible payment plans.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 lg:py-16 bg-[#F2F4F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#333333]/60 max-w-xl mx-auto">Find answers to common questions about our treatments, procedures, and clinic policies.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-white border border-[#F2F4F7] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F2F4F7]/50 transition-colors"
                >
                  <span className="font-semibold text-[#1E2A78] text-sm pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#00A8A8] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#333333]/30 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-[#333333]/70 text-sm leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
