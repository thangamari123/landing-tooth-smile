import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SLIDE_DURATION = 6000;

const slides = [
  {
    image: "/images/hero-banner1.webp",
    mobileImage: "/images/hero mobile -banner (1).webp",
    alt: "Dr. Muralikarthik – Prosthodontist & Implantologist",
  },
  {
    image: "/images/hero-banner4.webp",
    mobileImage: "/images/hero mobile -banner (2).webp",
    alt: "Advanced Dental Technology",
  },
  {
    image: "/images/hero-banner3.webp",
    mobileImage: "/images/hero mobile -banner (3).webp",
    alt: "Painless Dental Treatment",
  },
  {
    image: "/images/hero-banner2.webp",
    mobileImage: "/images/hero mobile -banner (4).webp",
    alt: "Happy Patient Smiles",
  },
  {
    image: "/images/hero-banner5.webp",
    mobileImage: "/images/hero mobile -banner (5).webp",
    alt: "Beautiful Smiles",
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => goTo((current + 1) % slides.length, 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, nextSlide]);

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeIn' },
    }),
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0b131e] aspect-[1080/810] md:aspect-[1920/800]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Slides ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full flex justify-center cursor-pointer"
          onClick={() => navigate('/book-appointment')}
        >
          {/* Mobile Image (Visible only on screens < 768px) */}
          <img
            src={slides[current].mobileImage}
            alt={slides[current].alt}
            className="w-full h-full object-cover md:hidden"
            width={1080}
            height={810}
            loading="eager"
          />
          {/* Desktop Image (Visible only on screens >= 768px) */}
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover hidden md:block"
            width={1920}
            height={800}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

    </section>
  );
}

