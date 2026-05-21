import { motion } from 'framer-motion';
import { Star, Building2, Users, UserCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { icon: Star, label: 'Google Rating', value: 4.9, suffix: '', decimals: 1, color: 'text-yellow-400' },
  { icon: Building2, label: 'Years Experience', value: 15, suffix: '+', decimals: 0, color: 'text-secondary' },
  { icon: Users, label: 'Happy Patients', value: 50, suffix: 'K+', decimals: 0, color: 'text-cyan' },
  { icon: UserCheck, label: 'Expert Doctors', value: 12, suffix: '+', decimals: 0, color: 'text-accent' }
];

// Duplicate stats to create a seamless infinite scroll effect
const loopingStats = [...stats, ...stats, ...stats, ...stats];

function Counter({ value, decimals, suffix }: { value: number, decimals: number, suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(start + (end - start) * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <div className="relative mt-4 lg:mt-6 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="glass-card rounded-[1.5rem] py-4 border border-white/60 bg-white/80 overflow-hidden relative">
        
        {/* Fading Edges for the marquee */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }} // Scrolls half the width of the double-duplicated container
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopingStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-8 sm:px-12 md:px-16"
              >
                <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-2 shadow-sm border border-gray-100 ${stat.color}`}>
                  <Icon size={20} />
                </div>
                <div className="text-2xl font-extrabold text-primary mb-0.5">
                  {/* To prevent multiple unneeded counter animations dragging performance, only the first set animates fully, others just show value */}
                  {index < 4 ? (
                    <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value.toFixed(stat.decimals)}{stat.suffix}</span>
                  )}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
