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
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeReel) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [activeReel]);

  return (
    <section className="py-20 bg-[#0A1128] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1E2A78_0%,#0A1128_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-cyan text-[10px] font-bold tracking-widest uppercase rounded-full mb-6"
            >
              <Instagram size={14} /> Instagram Reels
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Doctor <span className="text-cyan">Explains</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
            <button onClick={slideLeft} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan transition-all">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 w-[70vw] sm:w-[280px]"
            >
              <button
                onClick={() => setActiveReel(reel.reelId)}
                className="w-full relative aspect-[9/16] rounded-[2rem] overflow-hidden border-2 border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan/30"
              >
                <img
                  src={reel.thumbnail}
                  alt="Instagram Reel"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Instagram size={20} className="text-white/60" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300">
                    <Play size={28} fill="currentColor" className="text-white ml-1" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.instagram.com/toothsmiledentalclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E4405F] text-white font-bold text-xs rounded-xl hover:bg-[#D62976] transition-all shadow-xl hover:-translate-y-1"
          >
            Instagram Reels <Instagram size={16} />
          </a>
          <a
            href="https://www.youtube.com/@toothandsmiledentalclinic-7818/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white font-bold text-xs rounded-xl hover:bg-[#CC0000] transition-all shadow-xl hover:-translate-y-1"
          >
            YouTube Channel <Youtube size={16} />
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
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-[#E4405F] transition-all z-[110] group"
              onClick={() => setActiveReel(null)}
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Reel Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[400px] h-[75vh] sm:h-[85vh] bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(228,64,95,0.2)] border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <Instagram size={48} className="text-white/10 mb-4 animate-pulse" />
                <p className="text-white/30 text-sm mb-6">If the video doesn't load, it may be restricted by Instagram's security policy.</p>
                <a
                  href={`https://www.instagram.com/reels/${activeReel}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#E4405F] text-white font-bold text-xs rounded-xl shadow-lg"
                >
                  Watch on Instagram
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
                style={{ minHeight: '100%' }}
              ></iframe>
            </motion.div>

            {/* Background Branding */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/20 font-bold text-xs tracking-[0.3em] uppercase pointer-events-none">
              <Instagram size={14} /> Clinical Reels Insight
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
