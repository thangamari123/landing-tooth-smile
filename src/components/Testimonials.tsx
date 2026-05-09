import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    name: 'Priya S.', 
    text: 'I was terrified of the dentist, but Dr. Karthik made my root canal completely painless. Best clinic in Chennai!', 
    treatment: 'Root Canal', 
    videoCover: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    youtubeId: 'ScMzIvxBSi4'
  },
  { 
    id: 2, 
    name: 'Rajesh K.', 
    text: 'My new dental implants feel exactly like my natural teeth. I can finally eat apples again without worrying!', 
    treatment: 'Dental Implants', 
    videoCover: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    youtubeId: 'ScMzIvxBSi4'
  },
  { 
    id: 3, 
    name: 'Ananya M.', 
    text: 'I got my invisible aligners here. The 3D scan was so cool, and my teeth straightened out in just 8 months!', 
    treatment: 'Clear Aligners', 
    videoCover: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    youtubeId: 'ScMzIvxBSi4'
  },
  { 
    id: 4, 
    name: 'Venkatesh R.', 
    text: 'The laser teeth whitening took less than an hour, and my smile is so much brighter for my upcoming wedding!', 
    treatment: 'Teeth Whitening', 
    videoCover: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    youtubeId: 'ScMzIvxBSi4'
  },
  { 
    id: 5, 
    name: 'Lakshmi N.', 
    text: 'My smile makeover with porcelain veneers changed my life. I used to hide my smile, now I show it off everywhere!', 
    treatment: 'Smile Makeover', 
    videoCover: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    youtubeId: 'ScMzIvxBSi4'
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const slideLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Automatic sliding effect
  useEffect(() => {
    // Only auto-slide if the video modal is not open
    if (activeVideo) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we reached the end (accounting for a 10px rounding buffer)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3500); // Slides every 3.5 seconds

    return () => clearInterval(interval);
  }, [activeVideo]);

  return (
    <>
      <section id="testimonials" className="py-24 bg-bg-main overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center px-4 py-1.5 bg-cyan/10 text-cyan text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
                Patient Stories
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-primary">Real Smiles, Real Stories</h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
              <button onClick={slideLeft} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:bg-bg-main transition-colors shadow-sm z-10 relative">
                <ChevronLeft size={20} />
              </button>
              <button onClick={slideRight} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary hover:bg-bg-main transition-colors shadow-sm z-10 relative">
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
                className="snap-center shrink-0 w-[280px] sm:w-[320px] group cursor-pointer"
                onClick={() => setActiveVideo(t.youtubeId)}
              >
                <div className="relative h-[480px] rounded-[2rem] overflow-hidden shadow-lg shadow-primary/5 border-4 border-white group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-secondary/20 transition-all duration-500">
                  <img src={t.videoCover} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                      <Play size={24} className="ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold mb-4 border border-white/20">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" /> {t.treatment}
                    </div>
                    
                    <p className="text-white text-sm leading-relaxed font-medium mb-4 line-clamp-3">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="font-bold text-white text-lg">{t.name}</div>
                      <div className="flex gap-0.5">
                        <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                        <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                        <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                        <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                        <Star size={12} className="text-yellow-400 fill-yellow-400"/>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              onClick={() => setActiveVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              className="w-full max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={e => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="YouTube Shorts" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
