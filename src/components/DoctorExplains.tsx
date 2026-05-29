import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Instagram, Info, Youtube, ChevronLeft, ChevronRight, X } from 'lucide-react';

const reels = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778570148/doctor_thumb_5_qi1q45.png",
    reelId: "DXwKbVuEQSd"
  },
  {
    id: 2,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778570151/doctor_thumb_6_iiwkxg.png",
    reelId: "DXgtjUnj6YY"
  },
  {
    id: 3,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778570149/doctor_thumb_3_dyjalm.png",
    reelId: "DXRQ155Ez35"
  },
  {
    id: 4,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778570147/doctor_thumb_1_egg1ik.png",
    reelId: "DOlaiuUEfqA"
  },
  {

    id: 5,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778570147/doctor_thumb_2_mqgrl7.png",
    reelId: "DXB0DV7kxHG"


  },
  {
    id: 6,
    thumbnail: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778572119/doctor_thumb_4_nodegd.png",
    reelId: "DVdgr5QkpJ3"
  }
];

export default function DoctorExplains() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const slideLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? scrollRef.current.clientWidth * 0.85 : 280;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? scrollRef.current.clientWidth * 0.85 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activeReel) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = window.innerWidth < 640 ? clientWidth * 0.85 : 280;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeReel]);

  return (
    <section className="py-10 sm:py-16 bg-[#0A1128] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1E2A78_0%,#0A1128_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-10 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-cyan text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-4 sm:mb-6"
            >
              <Instagram size={12} /> Clinical Educational Series
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Doctor <span className="text-cyan">Explains</span>
            </motion.h2>
            <p className="text-white/50 text-xs sm:text-sm font-medium">Expert dental advice delivered in bite-sized videos.</p>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden sm:flex gap-3">
            <button onClick={slideLeft} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan transition-all">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Compact Horizontal Slider */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[260px]"
            >
              <button
                onClick={() => setActiveReel(reel.reelId)}
                className="w-full relative aspect-[9/16] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan/40 group"
              >
                <img
                  src={reel.thumbnail}
                  alt="Instagram Reel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Overlay Play UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan group-hover:scale-110 transition-all duration-500">
                    <Play size={20} fill="currentColor" className="text-white ml-1 sm:size-[24px]" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF0069] to-[#7600C5] flex items-center justify-center p-1">
                    <Instagram size={12} className="text-white" />
                  </div>
                  <span className="text-[10px] text-white font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">Watch Now</span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://www.instagram.com/toothsmiledentalclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-5 sm:px-8 bg-white/5 border border-white/10 text-white rounded-3xl hover:bg-white/10 transition-all group w-full sm:w-[240px] justify-center sm:justify-start shadow-lg"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 group-hover:scale-110 transition-transform">
              <defs>
                <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F58529" />
                  <stop offset="10%" stopColor="#FEDA77" />
                  <stop offset="50%" stopColor="#DD2A7B" />
                  <stop offset="70%" stopColor="#8134AF" />
                  <stop offset="100%" stopColor="#515BD4" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="12" fill="url(#ig-grad)" />
              <rect x="6" y="6" width="12" height="12" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="15.5" cy="8.5" r="1" fill="white" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm leading-tight text-white">Follow on</span>
              <span className="font-bold text-sm leading-tight text-white">Instagram</span>
            </div>
          </a>
          <a
            href="https://www.youtube.com/@toothandsmiledentalclinic-7818/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-5 sm:px-8 bg-white/5 border border-white/10 text-white rounded-3xl hover:bg-white/10 transition-all group w-full sm:w-[240px] justify-center sm:justify-start shadow-lg"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 group-hover:scale-110 transition-transform">
              <path d="M21.58 6.42C21.41 5.75 20.89 5.2 20.21 5.03C19 4.7 12 4.7 12 4.7C12 4.7 5 4.7 3.79 5.03C3.11 5.2 2.59 5.75 2.42 6.42C2.1 7.64 2.1 12 2.1 12C2.1 12 2.1 16.36 2.42 17.58C2.59 18.25 3.11 18.8 3.79 18.97C5 19.3 12 19.3 12 19.3C12 19.3 19 19.3 20.21 18.97C20.89 18.8 21.41 18.25 21.58 17.58C21.9 16.36 21.9 12 21.9 12C21.9 12 21.9 7.64 21.58 6.42Z" fill="#FF0000" />
              <path d="M9.9 15.3L15.3 12L9.9 8.7V15.3Z" fill="white" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm leading-tight text-white">YouTube</span>
              <span className="font-bold text-sm leading-tight text-white">Channel</span>
            </div>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1128]/95 p-4 backdrop-blur-2xl"
            onClick={() => setActiveReel(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-cyan transition-all z-[110]"
              onClick={() => setActiveReel(null)}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[380px] h-[80vh] bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-zinc-950">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Instagram size={32} className="text-white/20 animate-pulse" />
                </div>
                <p className="text-white/40 text-xs mb-8 leading-relaxed">Opening secure connection to Instagram...<br/>If the video doesn't load, please use the button below.</p>
                <a
                  href={`https://www.instagram.com/reels/${activeReel}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-cyan text-white font-bold text-xs rounded-xl shadow-lg hover:bg-cyan/90 transition-all"
                >
                  View Direct on Instagram
                </a>
              </div>
              <iframe
                src={`https://www.instagram.com/p/${activeReel}/embed/`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="absolute inset-0 z-10"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
