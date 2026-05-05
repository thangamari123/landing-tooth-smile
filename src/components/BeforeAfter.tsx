import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const cases = [
  { id: 1, title: 'Smile Transformation', description: 'Full mouth rehabilitation with implants and crowns', beforeImage: '/images/cases/smile_transform_before.png', afterImage: '/images/cases/smile_transform_after.png' },
  { id: 2, title: 'Teeth Whitening', description: 'Professional whitening treatment results', beforeImage: '/images/cases/teeth_whitening_before.png', afterImage: '/images/cases/teeth_whitening_after.png' },
  { id: 3, title: 'Dental Implants', description: 'Single tooth implant with natural-looking crown', beforeImage: '/images/cases/dental_implant_before.png', afterImage: '/images/cases/dental_implant_after.png' },
];

function ComparisonSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    const rect = (document.querySelector('.slider-container') as HTMLElement)?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div className="slider-container relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }} draggable={false} />
        <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-lg">Before</span>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center"
          onMouseDown={() => setIsDragging(true)} onTouchStart={() => setIsDragging(true)}
        >
          <MoveHorizontal size={18} className="text-[#1E2A78]" />
        </div>
      </div>
      <span className="absolute top-4 right-4 px-3 py-1 bg-[#00A8A8]/80 text-white text-xs font-semibold rounded-lg">After</span>
    </div>
  );
}

export default function BeforeAfter({ 
  headline = 'Before & After Transformations', 
  intro = 'See the remarkable transformations our patients have experienced. Drag the slider to compare.',
  subhead = 'Real Results'
}: { 
  headline?: string; 
  intro?: string;
  subhead?: string;
}) {
  const [activeCase, setActiveCase] = useState(0);
  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">{subhead}</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">{headline}</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">{intro}</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cases.map((c, index) => (
            <button key={c.id} onClick={() => setActiveCase(index)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCase === index ? 'bg-[#1E2A78] text-white shadow-lg shadow-[#1E2A78]/25' : 'bg-white text-[#333333]/70 hover:bg-[#F2F4F7] border border-[#F2F4F7]'}`}
            >{c.title}</button>
          ))}
        </div>
        <motion.div key={activeCase} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto">
          <ComparisonSlider beforeImage={cases[activeCase].beforeImage} afterImage={cases[activeCase].afterImage} />
          <div className="text-center mt-6">
            <h3 className="text-xl font-bold text-[#1E2A78]">{cases[activeCase].title}</h3>
            <p className="text-[#333333]/50 mt-1">{cases[activeCase].description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
