import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Award, Calendar, Star, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const doctors = [
  {
    name: "Dr. R. Murali Karthik",
    qualification: "BDS, MDS",
    specialty: "Prosthodontist & Implantologist",
    experience: "13+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png",
    about: "Expert in complex full mouth rehabilitations and dental implants with a gentle, patient-first approach."
  },
  {
    name: "Dr. K. Lakshmikumari",
    qualification: "BDS, MDS",
    specialty: "Pediatric Dentist",
    experience: "10+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329933/Dr.K.Lakshmikumari_alias_Sudharshini_Pedodontist_socjf8.png",
    about: "Dedicated to providing a comfortable, fear-free dental experience for children with a focus on preventive care."
  },
  {
    name: "Dr. M. Alagammai",
    qualification: "BDS, MDS",
    specialty: "Prosthodontist & Implantologist",
    experience: "10+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329942/Dr_M._Alagammai_MDS_Prosthodontist_and_Implantologist_gnynwt.png",
    about: "Specialized in restoring smiles through high-quality crowns, bridges, and advanced implant prosthetics."
  },
  {
    name: "Dr. Saravana Kumar",
    qualification: "BDS, MDS",
    specialty: "Oral & Maxillofacial Surgeon",
    experience: "12+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329936/Dr.saravana_kumar_MDS_Oral_surgey_saxpzc.png",
    about: "Highly skilled in painless wisdom tooth extractions and jaw surgeries with precision."
  },
  {
    name: "Dr. Raaja Sreepathy CS",
    qualification: "BDS, MDS",
    specialty: "Periodontist & Implantologist",
    experience: "10+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329932/Dr._Raaja_Sreepathy_CS_Periodontist_and_Implantologist_azhl4h.png",
    about: "Expert in laser gum surgeries and treating complex periodontal diseases to save loose teeth."
  },
  {
    name: "Dr. Nidhyavarshini Gurubaran",
    qualification: "BDS, MDS",
    specialty: "Orthodontist",
    experience: "7+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329939/Nidhyavarshini_Gurubaran_Orthodontist_p0uorv.png",
    about: "Creating perfect smiles with traditional braces and modern clear aligners for all age groups."
  }
];

// Duplicate for infinite loop
const displayDoctors = [...doctors, ...doctors, ...doctors];

export default function OurDoctors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Reset to middle if we reach near the end to create infinite feel
        if (scrollLeft + clientWidth >= scrollWidth - 100) {
          scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Initial scroll to middle for infinite effect
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'auto' });
    }
  }, []);

  return (
    <section id="doctors" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Clinical Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#06B6D4 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan/10 border border-cyan/20 rounded-full mb-6"
            >
              <ShieldCheck size={14} className="text-cyan" />
              <span className="text-cyan text-[10px] font-bold tracking-[0.2em] uppercase">Board Certified Specialists</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-secondary">Expert Clinicians</span>
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button onClick={slideLeft} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all group">
              <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all group">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayDoctors.map((doctor, index) => (
            <motion.div 
              key={index}
              className="snap-center shrink-0 w-[75vw] sm:w-[320px] group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col">
                
                {/* Doctor Image Container - COMPACT HEIGHT */}
                <div className="relative h-[240px] sm:h-[340px] overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* High-End Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
                  
                  {/* Rating Badge - COMPACT */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-1.5">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-[10px] font-bold">{doctor.rating}</span>
                  </div>

                  {/* Experience Floating Badge - COMPACT */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3 py-1.5 bg-cyan backdrop-blur-md rounded-xl shadow-xl flex items-center gap-2">
                    <Calendar size={12} className="text-white" />
                    <span className="text-white text-[9px] font-bold uppercase tracking-wider">{doctor.experience}</span>
                  </div>
                </div>

                {/* Content Area - COMPACT PADDING */}
                <div className="p-6 sm:p-8 pt-3 sm:pt-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart size={12} className="text-secondary" />
                    <span className="text-secondary text-[9px] font-bold uppercase tracking-widest italic">{doctor.qualification}</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-1 group-hover:text-cyan transition-colors leading-tight">
                    {doctor.name}
                  </h3>
                  <div className="text-cyan/80 font-medium text-xs sm:text-sm mb-4">
                    {doctor.specialty}
                  </div>

                  <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed mb-6 flex-1 italic line-clamp-3">
                    "{doctor.about}"
                  </p>

                  <Link 
                    to="/book-appointment" 
                    className="inline-flex items-center gap-3 text-white font-bold text-xs sm:text-sm group/btn"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-cyan group-hover/btn:border-cyan transition-all">
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                    <span>Consult Dr. {doctor.name.split(' ')[doctor.name.split(' ').length - 1]}</span>
                  </Link>
                </div>

                {/* Professional Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
