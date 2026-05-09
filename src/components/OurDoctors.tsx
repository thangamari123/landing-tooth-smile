import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, GraduationCap, Award, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const doctors = [
  {
    name: "Dr. R. Murali Karthik",
    qualification: "BDS, MDS",
    specialty: "Prosthodontist & Implantologist",
    experience: "13+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png",
    about: "Expert in complex full mouth rehabilitations, dental implants, and smile designing with a gentle, patient-first approach."
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
    experience: "8+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329942/Dr_M._Alagammai_MDS_Prosthodontist_and_Implantologist_gnynwt.png",
    about: "Specialized in restoring smiles through high-quality crowns, bridges, dentures, and advanced implant prosthetics."
  },
  {
    name: "Dr. Saravana Kumar",
    qualification: "BDS, MDS",
    specialty: "Oral & Maxillofacial Surgeon",
    experience: "12+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329936/Dr.saravana_kumar_MDS_Oral_surgey_saxpzc.png",
    about: "Highly skilled in painless wisdom tooth extractions, jaw surgeries, and complex surgical procedures with precision."
  },
  {
    name: "Dr. Raaja Sreepathy CS",
    qualification: "BDS, MDS",
    specialty: "Periodontist & Implantologist",
    experience: "10+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329932/Dr._Raaja_Sreepathy_CS_Periodontist_and_Implantologist_azhl4h.png",
    about: "Expert in laser gum surgeries, bone grafting, and treating complex periodontal diseases to save loose teeth."
  },
  {
    name: "Dr. Nidhyavarshini Gurubaran",
    qualification: "BDS, MDS",
    specialty: "Orthodontist",
    experience: "7+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329939/Nidhyavarshini_Gurubaran_Orthodontist_p0uorv.png",
    about: "Creating perfect smiles with traditional braces, ceramic braces, and modern clear aligners for all age groups."
  },
  {
    name: "Dr. Vijayalakshmi",
    qualification: "BDS, MDS",
    specialty: "Oral Surgeon",
    experience: "9+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329940/Vijayalakshmi_Oral_surgeon._cbayd2.png",
    about: "Focused on surgical extractions, impactions, and comprehensive surgical care with minimal post-operative discomfort."
  },
  {
    name: "Dr. Lakshman",
    qualification: "BDS, Fellowship in Endodontics",
    specialty: "Endodontist",
    experience: "9+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329927/DR.Lakshman_BDS_Fellowship_in_Endodontics_FDS_bftvuc.png",
    about: "Specialized in painless root canal treatments and advanced microscopic endodontics for saving natural teeth."
  },
  {
    name: "Dr. Padmavathy Srinivasan",
    qualification: "BDS",
    specialty: "General Dentist",
    experience: "5+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329932/Dr.padmavathy_srinivasan_bds_arxwjs.png",
    about: "Focused on preventive dentistry, pain-free extractions, and high-quality restorative treatments for lasting results."
  }
];

export default function OurDoctors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we reached the end (accounting for a 10px rounding buffer)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 424, behavior: 'smooth' }); // 400 width + 24 gap
        }
      }
    }, 4000); // Slides every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="doctors" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
              Our Experts
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">Meet Your Smile Architects</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-3">
            <button onClick={slideLeft} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors z-10 relative">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button onClick={slideRight} className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary-light transition-colors z-10 relative">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }}
              className="snap-center shrink-0 w-full sm:w-[400px] group"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-primary-light border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] h-full flex flex-col">
                <div className="relative h-[300px] overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-light to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-white text-sm font-bold border border-white/10">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" /> {doctor.rating}
                  </div>
                </div>

                <div className="p-8 pt-0 relative z-10 flex-1 flex flex-col">
                  <div className="-mt-8 mb-4 flex justify-between items-end">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg text-secondary">
                      <GraduationCap size={28} />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-2xl text-white mb-1">{doctor.name}</h3>
                  <div className="text-cyan font-semibold text-sm mb-4">{doctor.specialty}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {doctor.about}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-white/80 font-medium mb-8">
                    <div className="flex items-center gap-1.5"><Award size={16} className="text-secondary" /> {doctor.qualification}</div>
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                    <div className="flex items-center gap-1.5"><Calendar size={16} className="text-secondary" /> {doctor.experience}</div>
                  </div>

                  <Link to="/book-appointment" className="w-full py-4 rounded-xl border border-white/20 text-white font-bold text-center hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Book Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
