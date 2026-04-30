import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Priya S.', location: 'Mylapore, Chennai', rating: 5, text: 'I was terrified of dental procedures, but Dr. Murali Karthik made my root canal treatment completely painless. The clinic is spotless, the staff is warm, and the technology is world-class.', treatment: 'Root Canal Treatment', avatar: 'P', color: 'bg-[#5BC0EB]/20 text-[#0F8ACB]' },
  { id: 2, name: 'Rajesh K.', location: 'Adyar, Chennai', rating: 5, text: 'After years of hiding my smile, I finally got dental implants at Tooth & Smile. The results are incredible — they look and feel exactly like my natural teeth.', treatment: 'Dental Implants', avatar: 'R', color: 'bg-[#1E2A78]/10 text-[#1E2A78]' },
  { id: 3, name: 'Ananya M.', location: 'T. Nagar, Chennai', rating: 5, text: 'Got my braces done here and the experience was fantastic. The digital planning meant I could see my results before we even started. Highly recommend!', treatment: 'Braces', avatar: 'A', color: 'bg-[#00A8A8]/10 text-[#00A8A8]' },
  { id: 4, name: 'Venkatesh R.', location: 'Royapettah, Chennai', rating: 5, text: 'My teeth whitening results were amazing — went 6 shades lighter in one session! The clinic uses the latest technology and Dr. Karthik is a true expert.', treatment: 'Teeth Whitening', avatar: 'V', color: 'bg-[#0F8ACB]/10 text-[#0F8ACB]' },
  { id: 5, name: 'Lakshmi N.', location: 'Alwarpet, Chennai', rating: 5, text: 'The smile makeover completely changed my life. I used to avoid photos and social gatherings. Now I can\'t stop smiling!', treatment: 'Smile Makeover', avatar: 'L', color: 'bg-[#1E2A78]/10 text-[#1E2A78]' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Patient Stories</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">What Our Patients Say</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">Real stories from real patients who transformed their smiles and their lives.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={t.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F2F4F7] shadow-lg shadow-black/5"
              >
                <Quote size={40} className="text-[#00A8A8]/20 mb-6" />
                <p className="text-[#333333]/80 text-lg sm:text-xl leading-relaxed mb-8">{t.text}</p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${t.color} rounded-2xl flex items-center justify-center text-xl font-bold`}>{t.avatar}</div>
                    <div>
                      <div className="font-bold text-[#1E2A78]">{t.name}</div>
                      <div className="text-[#333333]/50 text-sm">{t.location}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <span className="text-xs text-[#00A8A8] font-medium bg-[#00A8A8]/10 px-2 py-0.5 rounded-full">{t.treatment}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 bg-white border border-[#F2F4F7] rounded-full flex items-center justify-center text-[#333333]/60 hover:border-[#00A8A8] hover:text-[#00A8A8] transition-colors shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-[#00A8A8]' : 'w-2 bg-[#333333]/20 hover:bg-[#333333]/40'}`} />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 bg-white border border-[#F2F4F7] rounded-full flex items-center justify-center text-[#333333]/60 hover:border-[#00A8A8] hover:text-[#00A8A8] transition-colors shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
