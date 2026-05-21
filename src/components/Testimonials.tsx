import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    name: 'Priya R.', 
    location: 'Mylapore',
    text: "I was terrified of the dentist for years. The team at Tooth & Smile made my root canal completely painless. I actually can't believe how easy it was. I only wish I had come sooner.", 
    treatment: 'Root Canal'
  },
  { 
    id: 2, 
    name: 'Karthik S.', 
    location: 'Adyar',
    text: "My son used to cry every time we visited a dentist. Here, the pediatric doctor was so patient and friendly that he actually looks forward to his checkups now. Truly remarkable.", 
    treatment: 'Pediatric Care'
  },
  { 
    id: 3, 
    name: 'Meena V.', 
    location: 'Velachery',
    text: "I got dental implants after years of hiding my smile. The procedure was smooth, the team was professional, and the result looks completely natural. It's changed my confidence entirely.", 
    treatment: 'Dental Implants'
  },
  { 
    id: 4, 
    name: 'Rahul N.', 
    location: 'T. Nagar',
    text: "Best dental clinic in Chennai — no exaggeration. From the moment I walked in to the follow-up calls after treatment, everything was handled with so much care. Highly recommend.", 
    treatment: 'General Dentistry'
  },
  { 
    id: 5, 
    name: 'Anitha K.', 
    location: 'NRI Patient',
    text: "I was visiting from abroad and needed emergency treatment. Tooth & Smile fit me in the same day, gave me excellent care, and the pricing was completely transparent. Outstanding.", 
    treatment: 'Emergency Care'
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const slideLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-10 lg:py-16 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A8A8]/5 skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="inline-flex items-center px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
              Patient Testimonials
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2A78] mb-3 sm:mb-4">What Our Patients Say</h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              We measure our success by the smiles we create and the trust we earn. Here's what our patients have to say about their experience at Tooth & Smile.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
            <button onClick={slideLeft} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 w-[88vw] sm:w-[350px]"
            >
              <div className="h-full bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col relative group hover:border-[#00A8A8]/30 transition-all duration-300">
                <div className="absolute top-8 right-8 text-[#00A8A8]/10 group-hover:text-[#00A8A8]/20 transition-colors">
                  <Quote size={48} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-[#333333]/80 text-base leading-relaxed mb-8 flex-grow italic">
                  "{t.text}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E2A78] to-[#0F8ACB] flex items-center justify-center text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1E2A78] text-lg">{t.name}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#00A8A8] text-xs font-bold uppercase tracking-wider">{t.treatment}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-gray-400 text-xs font-medium">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
