import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveHorizontal, Sparkles } from 'lucide-react';

const cases = [
  { id: 1, title: 'Complete Smile Makeover', description: 'Full mouth rehabilitation with implants and porcelain crowns', beforeImage: '/images/cases/smile_transform_before.png', afterImage: '/images/cases/smile_transform_after.png' },
  { id: 2, title: 'Laser Teeth Whitening', description: 'Professional zoom whitening treatment results in 1 hour', beforeImage: '/images/cases/teeth_whitening_before.png', afterImage: '/images/cases/teeth_whitening_after.png' },
  { id: 3, title: 'Dental Implants', description: 'Single tooth implant matching natural teeth perfectly', beforeImage: '/images/cases/dental_implant_before.png', afterImage: '/images/cases/dental_implant_after.png' },
];

function ComparisonSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-col-resize select-none shadow-2xl border-4 border-white"
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden bg-gray-100" style={{ width: `${sliderPosition}%` }}>
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }} draggable={false} />
        <span className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase rounded-full border border-white/20">Before</span>
      </div>
      <div className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-cyan cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          onMouseDown={() => setIsDragging(true)} onTouchStart={() => setIsDragging(true)}
        >
          <MoveHorizontal size={24} className="text-cyan" />
        </div>
      </div>
      <span className="absolute top-6 right-6 px-4 py-1.5 bg-cyan/90 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase rounded-full border border-white/20">After</span>
    </div>
  );
}

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  
  return (
    <section id="before-after" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-[-20%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
            <Sparkles size={14} /> Real Results
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-primary mb-6">Smile Transformations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">See the remarkable transformations our patients have experienced. Drag the slider to compare.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((c, index) => (
            <button key={c.id} onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeCase === index ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-primary'}`}
            >{c.title}</button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCase} 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }} 
              className="bg-bg-main p-4 sm:p-8 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <ComparisonSlider beforeImage={cases[activeCase].beforeImage} afterImage={cases[activeCase].afterImage} />
              <div className="text-center mt-8 px-4">
                <h3 className="text-2xl font-bold text-primary mb-2">{cases[activeCase].title}</h3>
                <p className="text-gray-500 font-medium">{cases[activeCase].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
