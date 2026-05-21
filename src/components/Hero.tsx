import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SLIDE_DURATION = 4000;

const slides = [
  {
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png",
    alt: "Dr. Muralikarthik – Prosthodontist & Implantologist",
    heading: "Your Smile Deserves",
    highlight: "the Best Care.",
    sub: "Experience world-class, pain-free dentistry with advanced technology.",
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=85",
    alt: "Advanced Dental Technology",
    heading: "State-of-the-Art",
    highlight: "Digital Equipment.",
    sub: "Cutting-edge tools for precise, comfortable, and efficient treatments.",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=85",
    alt: "Painless Dental Treatment",
    heading: "Comfort-First",
    highlight: "Painless Dentistry.",
    sub: "Modern techniques that make every visit relaxed and worry-free.",
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85",
    alt: "Happy Patient Smiles",
    heading: "Over 5,000",
    highlight: "Happy Healthy Smiles.",
    sub: "Trusted by thousands of patients across Chennai for beautiful smiles.",
  },
];

export default function Hero() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrent(index);
    setProgress(0);
  }, []);



  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, current]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    if (paused) return;
    const step = 100 / (SLIDE_DURATION / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [current, paused]);

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-15%' : '15%',
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeIn' },
    }),
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: 'easeOut' },
    }),
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '100vh' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Slides ── */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* No zoom - just sliding */}
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Dark gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />



      {/* ── Main content overlay ── */}
      <div className="relative z-20 h-full flex items-end sm:items-center pb-10 sm:pb-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">

            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-5 border border-white/25 shadow-sm"
              >
                <Shield size={14} className="text-cyan-300" />
                <span className="text-white/90 text-xs sm:text-base font-bold tracking-widest uppercase">
                  #1 Premium Dental Clinic in Chennai
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Heading */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h1-${current}`}
                custom={0.1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-3 sm:mb-4 tracking-tight drop-shadow-lg"
              >
                {slides[current].heading}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  {slides[current].highlight}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                custom={0.22}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="text-base sm:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-lg font-medium drop-shadow mx-auto sm:mx-0"
              >
                {slides[current].sub}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <button
                onClick={() => navigate('/book-appointment')}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-xl shadow-blue-900/40 transition-all hover:-translate-y-1 hover:shadow-2xl text-base sm:text-lg"
              >
                <Calendar size={18} /> Book an Appointment
              </button>
              <a
                href="tel:9551120208"
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-xl text-base sm:text-lg"
              >
                <Phone size={18} /> Call Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}
