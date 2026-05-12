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
    <section className="py-16 sm:py-24 bg-[#0A1128] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1E2A78_0%,#0A1128_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-16 gap-8 text-center md:text-left">
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
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.instagram.com/toothsmiledentalclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-[#E4405F] transition-all shadow-xl group"
          >
            <Instagram size={16} className="group-hover:scale-110 transition-transform" /> Follow on Instagram
          </a>
          <a
            href="https://www.youtube.com/@toothandsmiledentalclinic-7818/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl hover:bg-[#FF0000] transition-all shadow-xl group"
          >
            <Youtube size={16} className="group-hover:scale-110 transition-transform" /> YouTube Channel
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
