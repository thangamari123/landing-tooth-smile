import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Star, ShieldCheck, Heart, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  },
  {
    name: "Dr. Huzefa .N.J",
    qualification: "BDS, MDS",
    specialty: "Consultant Endodontist",
    experience: "10+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1779867905/ChatGPT_Image_May_27_2026_01_14_43_PM_ozpkzd.png",
    about: "Specialized in painless single-visit root canal treatments and saving severely damaged teeth."
  },
  {
    name: "Dr. Vijayalakshmi",
    qualification: "BDS, MDS",
    specialty: "Oral Surgeon",
    experience: "8+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329940/Vijayalakshmi_Oral_surgeon._cbayd2.png",
    about: "Expert in complex tooth extractions, jaw surgeries, and providing comfortable oral surgical care."
  },
  {
    name: "Dr. Padmavathy Srinivasan",
    qualification: "BDS",
    specialty: "Dental Surgeon",
    experience: "5+ Years",
    rating: "4.8",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329932/Dr.padmavathy_srinivasan_bds_arxwjs.png",
    about: "Dedicated to comprehensive general dentistry and providing a comfortable, stress-free experience for all patients."
  },
  {
    name: "Dr. Lakshman",
    qualification: "BDS, FDS",
    specialty: "Endodontics Specialist",
    experience: "9+ Years",
    rating: "4.9",
    image: "https://res.cloudinary.com/dcldlvuib/image/upload/v1778329927/DR.Lakshman_BDS_Fellowship_in_Endodontics_FDS_bftvuc.png",
    about: "Fellowship in Endodontics with extensive clinical expertise, including Senior Residency at Stanley."
  }
];

export default function OurDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  return (
    <section id="doctors" className="py-10 sm:py-16 bg-[#0F172A] relative overflow-hidden">
      {/* Clinical Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#06B6D4 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan/10 border border-cyan/20 rounded-full mb-4"
          >
            <ShieldCheck size={12} className="text-cyan" />
            <span className="text-cyan text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">Board Certified Specialists</span>
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

        {/* Mobile View: Compact Horizontal Slider */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 pb-8">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-center shrink-0 w-[280px]"
            >
              <div 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col h-full cursor-pointer hover:border-cyan/30 transition-colors"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-1">
                    <Star size={10} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-[10px] font-bold">{doctor.rating}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-cyan rounded-lg flex items-center gap-1.5">
                    <Calendar size={10} className="text-white" />
                    <span className="text-white text-[9px] font-bold uppercase">{doctor.experience}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-secondary text-[8px] font-bold uppercase tracking-[0.2em] mb-1">{doctor.qualification}</span>
                  <h3 className="text-white font-bold text-lg mb-0.5">{doctor.name}</h3>
                  <p className="text-cyan/80 text-[11px] font-medium mb-3">{doctor.specialty}</p>
                  <p className="text-white/40 text-[11px] italic mb-3 line-clamp-2">"{doctor.about}"</p>
                  <button className="mt-auto flex items-center gap-2 text-white text-[11px] font-bold group/btn text-left">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-cyan transition-all">
                      <ArrowRight size={14} />
                    </div>
                    <span>View Profile</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Clean Responsive Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col h-full">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-6 left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-bold">{doctor.rating}</span>
                  </div>

                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-cyan backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-2">
                    <Calendar size={14} className="text-white" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{doctor.experience}</span>
                  </div>
                </div>

                <div className="p-8 pt-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart size={14} className="text-secondary" />
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] italic">{doctor.qualification}</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-2xl mb-1 group-hover:text-cyan transition-colors">
                    {doctor.name}
                  </h3>
                  <div className="text-cyan/80 font-medium text-sm mb-4">
                    {doctor.specialty}
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1 italic">
                    "{doctor.about}"
                  </p>

                  <button 
                    className="inline-flex items-center gap-4 text-white font-bold text-sm group/btn mt-auto text-left"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-cyan group-hover/btn:border-cyan transition-all">
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                    <span>View Profile</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doctor Details Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-16 sm:mt-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#1E293B] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col sm:flex-row z-10 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 transition-colors backdrop-blur-md"
              >
                <X size={18} />
              </button>
              
              <div className="w-full sm:w-2/5 h-[300px] sm:h-auto relative shrink-0">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent sm:bg-gradient-to-r" />
              </div>
              
              <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center bg-[#1E293B]">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={16} className="text-cyan" />
                  <span className="text-cyan text-[10px] sm:text-xs font-bold uppercase tracking-widest">{selectedDoctor.qualification}</span>
                </div>
                
                <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">{selectedDoctor.name}</h3>
                <p className="text-cyan/90 font-medium text-sm sm:text-base mb-6">{selectedDoctor.specialty}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs sm:text-sm font-bold">{selectedDoctor.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                    <Calendar size={16} className="text-cyan" />
                    <span className="text-white text-xs sm:text-sm font-bold">{selectedDoctor.experience} Exp.</span>
                  </div>
                </div>
                
                <h4 className="text-white/90 font-bold mb-2">About the Doctor</h4>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedDoctor.about}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/10">
                  <Link 
                    to="/book-appointment" 
                    onClick={() => setSelectedDoctor(null)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan to-secondary hover:from-cyan/90 hover:to-secondary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan/20 group"
                  >
                    <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Book Appointment with {selectedDoctor.name.split(' ').pop()}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
