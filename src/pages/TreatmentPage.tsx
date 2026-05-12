import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Calendar, ArrowLeft, ChevronDown, ChevronUp, ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getTreatmentBySlug } from '../lib/treatments';
import EnquiryButton from '../components/EnquiryButton';
import Testimonials from '../components/Testimonials';

export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || '');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Automatic sliding for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = reviewsRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          reviewsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          reviewsRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideReviews = (direction: 'left' | 'right') => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ 
        left: direction === 'left' ? -350 : 350, 
        behavior: 'smooth' 
      });
    }
  };

  if (!treatment) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-bg-main pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-primary mb-4">Treatment Not Found</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section with pt-32 to fix navbar overlap */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        {/* Animated background blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src={treatment.heroImage} alt={treatment.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold mb-8 transition-colors group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowLeft size={16} />
            </div>
            Back to Home
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 bg-secondary/20 border border-secondary/30 text-cyan text-xs font-bold tracking-widest uppercase mb-6 rounded-full backdrop-blur-sm">
              {treatment.shortTitle}
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl leading-[1.1] tracking-tight">
              {treatment.title}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-medium max-w-2xl mb-10 leading-relaxed">
              {treatment.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <EnquiryButton treatment={treatment.title} label="Book This Treatment" variant="large" />
              <a href="tel:9551120208" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white hover:text-primary transition-all rounded-full shadow-lg">
                <Calendar size={18} /> Call to Book
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-2">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="py-6 px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-cyan" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Duration</div>
                <div className="text-base font-bold text-primary">{treatment.duration}</div>
              </div>
            </div>
            <div className="py-6 px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Check size={24} className="text-secondary" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Recovery</div>
                <div className="text-base font-bold text-primary">{treatment.recovery}</div>
              </div>
            </div>
            <div className="py-6 px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <Calendar size={24} className="text-cyan" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Cost</div>
                <div className="text-base font-bold text-primary">{treatment.costRange}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Booking Card */}
      <section className="py-12 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-7">
              <span className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
                Overview
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary mb-8 leading-tight">About {treatment.title}</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p className="font-semibold text-primary text-xl leading-relaxed">{treatment.overview}</p>
                {treatment.description.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </motion.div>
            
            {/* Right Sticky Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white bg-bg-main relative group">
                <div className="relative h-72 overflow-hidden">
                  <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="font-bold text-xl">{treatment.shortTitle}</div>
                    <div className="text-sm font-medium text-white/80">Premium Care</div>
                  </div>
                </div>
                
                <div className="p-8 bg-white relative z-10">
                  <h3 className="font-extrabold text-2xl text-primary mb-2">Ready to get started?</h3>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed">Book a consultation with our specialists and get a personalized treatment plan.</p>
                  <EnquiryButton treatment={treatment.title} label="Book Consultation" variant="primary" className="w-full" />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-16 lg:py-24 bg-bg-main relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 bg-cyan/10 text-cyan text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
              Procedure
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary">How It Works</h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {treatment.procedure.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                className="flex items-start gap-6 mb-8 last:mb-0 group"
              >
                <div className="w-12 h-12 bg-white text-secondary shadow-lg shadow-secondary/10 rounded-2xl flex items-center justify-center text-lg font-extrabold flex-shrink-0 border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="pb-8 border-b border-gray-200 last:border-0 flex-1 pt-2">
                  <p className="text-gray-700 text-lg font-medium">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
              Benefits
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary">Why Choose This Treatment?</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {treatment.benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}
                className="flex items-start gap-4 p-6 bg-bg-main border border-gray-100 rounded-[1.5rem] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-cyan font-bold" />
                </div>
                <span className="text-base text-gray-700 font-semibold leading-relaxed pt-1.5">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      {treatment.beforeAfter.length > 0 && (
        <section className="pt-16 lg:pt-24 pb-0 bg-bg-main relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-1.5 bg-cyan/10 text-cyan text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
                Results
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary">Real Transformations</h2>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {treatment.beforeAfter.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg shadow-primary/5 hover:shadow-xl transition-all"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img src={item.beforeImg} alt="Before" className="w-full h-56 object-cover" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider">Before</span>
                    </div>
                    <div className="relative">
                      <img src={item.afterImg} alt="After" className="w-full h-56 object-cover" />
                      <span className="absolute top-4 right-4 px-3 py-1 bg-cyan rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg">After</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-extrabold text-primary text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="pt-0 pb-16 lg:pb-24 bg-cyan/5 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center px-4 py-1.5 bg-cyan/10 text-cyan text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
                Patient Success Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-primary">What Our Patients Say</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
              <button onClick={() => slideReviews('left')} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:bg-bg-main transition-colors shadow-sm z-10 relative">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => slideReviews('right')} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:bg-bg-main transition-colors shadow-sm z-10 relative">
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          <div 
            ref={reviewsRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {treatment.reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-center shrink-0 w-[300px] sm:w-[450px] bg-bg-main p-8 rounded-[2.5rem] border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all group relative"
              >
                <Quote size={40} className="text-secondary/10 absolute top-6 right-8" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className={star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed mb-8 italic text-lg">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-base">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-base">{review.author}</div>
                        <div className="text-xs text-gray-400">{review.date}</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-wider shadow-sm">
                      via {review.source}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
              FAQs
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-primary">Common Questions</h2>
          </motion.div>
          
          <div className="space-y-4">
            {treatment.faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-secondary/30 bg-secondary/5 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg pr-4 ${openFaq === index ? 'text-secondary' : 'text-primary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                
                {openFaq === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="px-6 pb-6 pt-2 text-gray-600 text-base leading-relaxed font-medium">
                      {faq.a}
                    </div>
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
