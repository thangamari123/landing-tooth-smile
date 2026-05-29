import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Shield, Stethoscope, Clock, Users, Award, BookOpen, GraduationCap, Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import EnquiryButton from '../components/EnquiryButton';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import OurDoctors from '../components/OurDoctors';

export default function AboutPage() {
  const doctorScrollRef = useRef<HTMLDivElement>(null);

  const slideDoctorTestimonials = (direction: 'left' | 'right') => {
    if (doctorScrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 420;
      doctorScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: Shield, title: 'Hygienic Care', text: 'Modern, sterile and safe clinic environment' },
    { icon: Stethoscope, title: 'Digital Precision', text: 'Advanced digital X-ray and 3D imaging' },
    { icon: Star, title: 'Painless Tech', text: 'Innovative painless injection techniques' },
    { icon: Clock, title: 'Flexible Timing', text: 'Convenient weekend and evening appointments' },
    { icon: Users, title: 'Inclusive Care', text: 'Accessible for elderly and special needs' },
    { icon: Award, title: 'Certified Safety', text: 'NABH-aligned sterilization protocols' },
  ];

  const specializations = [
    'Dental Implants & Implant-Retained Dentures',
    'Full Mouth Rehabilitation & Fixed Prosthodontics',
    'BPS Dentures & CAD/CAM Technology',
    'Root Canal Treatment (RCT)',
    'Teeth Whitening & Smile Designing',
    'Geriatric Dentistry (specialized care for senior patients)',
  ];

  const achievements = [
    '2× National Level Best Paper Award Winner',
    '6 Published Research Papers in Prosthodontics',
    'Director - Apex Academy of Continuing Dental Education',
    'Pioneer in Dental Tourism at Tooth & Smile Clinic',
    'Active Researcher — Silver Nanoparticles in Dentistry & CAD/CAM Technology',
  ];

  const doctorTestimonials = [
    { text: "Root canal treatment done by Dr. Murali Karthik was too good and completely painless. I highly recommend him to family and friends.", author: "Verified Patient", source: "Dentee" },
    { text: "Since I lost my tooth, I felt very insecure about my smile. After getting an implant from Dr. Murali Karthik, I am truly satisfied. The procedure was not painful at all and very affordable.", author: "Verified Patient", source: "Practo" },
    { text: "The root canal treatment had some complications, but the entire procedure was handled brilliantly. Hats off to Dr. Murali and his team.", author: "Verified Patient", source: "Google" },
    { text: "Dr. Murali Karthik explains everything clearly and performs procedures painlessly. Extremely friendly staff. Highly recommended.", author: "Verified Patient", source: "Google" },
  ];



  return (
    <div className="pt-20 lg:pt-28 bg-white">
      {/* Responsive Hero Section */}
      <section className="relative pt-8 pb-12 lg:pt-10 lg:pb-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-cyan/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content Left */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-secondary/20"
              >
                <Star size={14} className="fill-secondary" /> Our Legacy of Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary mb-6 leading-[1.15]"
              >
                Transforming Smiles with <br className="hidden sm:block" />
                <span className="text-secondary italic">Artistry & Science</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium mb-10"
              >
                Over 13 years of clinical expertise, 5,000+ satisfied smiles, and a relentless commitment to painless dental innovation at Tooth & Smile.
              </motion.p>

              {/* Stats Grid - Desktop and Mobile friendly */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:max-w-md mb-8 lg:mb-0">
                {[
                  { label: 'Clinically Proven', value: '13+ Yrs', icon: Award, color: 'bg-secondary/10 text-secondary' },
                  { label: 'Patient Trust', value: '5,000+', icon: Users, color: 'bg-cyan/10 text-cyan' },
                  { label: 'Modern Tech', value: 'Digital 3D', icon: Stethoscope, color: 'bg-accent/10 text-accent' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="bg-white/50 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 ${stat.color}`}>
                      <stat.icon size={18} />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-primary">{stat.value}</div>
                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Right */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Main Image Container */}
                <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
                    alt="Advanced Dentistry"
                    className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                  {/* Advanced Dentistry Overlay Label */}
                  <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Advanced Dentistry</span>
                    </div>
                  </div>
                </div>

                {/* Floating Element for Desktop */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 hidden lg:block bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">NABH Aligned</div>
                      <div className="text-sm font-bold text-primary">Certified Safety</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned About Content Section */}
      <section className="py-10 lg:py-16 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif text-2xl sm:text-4xl font-bold text-[#1E2A78] mb-8 leading-tight"
            >
              Expert Dental Care in a <br /><span className="text-[#0F8ACB]">Judgment-Free Environment</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="space-y-6 text-base text-[#333333]/70 leading-relaxed font-medium"
            >
              <p>
                Tooth & Smile was founded with one belief — that every patient deserves expert dental care in a comfortable, judgment-free environment. Located in Mylapore, Chennai, we've been serving families across the city for over 13 years, earning the trust of more than 5,000 happy patients.
              </p>
              <p>
                Our clinic is equipped with the latest digital dentistry tools - from 3D imaging and intraoral cameras to laser dentistry systems - ensuring that every diagnosis is precise and every treatment is efficient.
              </p>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-[#F8FAFC] p-5 lg:p-6 rounded-2xl border border-[#1E2A78]/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-50">
                  <item.icon size={20} className="text-[#00A8A8]" />
                </div>
                <h4 className="font-bold text-[#1E2A78] text-base mb-2">{item.title}</h4>
                <p className="text-[13px] text-[#333333]/60 leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="mt-8 lg:mt-12 p-6 sm:p-10 bg-gradient-to-br from-[#1E2A78] to-[#0F8ACB] rounded-[2rem] lg:rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <p className="font-serif text-white text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed max-w-4xl mx-auto">
                "We believe that great dental care goes beyond fixing teeth. It's about building relationships, easing anxieties, and transforming lives - one smile at a time."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-10 lg:py-16 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Meet the Expert Behind Your Smile</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78] mb-4">Specialists With Genuine Dedication</h2>
            <p className="text-[#333333]/70 text-base leading-relaxed">
              At Tooth & Smile, you're treated by specialists who bring not just qualifications, but genuine dedication to every patient. Our lead doctor combines academic excellence, hands-on clinical experience, and a deeply patient-centred approach.
            </p>
          </motion.div>

          <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-2xl shadow-[#1E2A78]/10 border border-[#1E2A78]/5 w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Doctor Image & Quote - Responsive Layout */}
              <div className="w-full lg:w-2/5 flex flex-col">
                <div className="relative bg-[#1E2A78] h-[300px] sm:h-[400px] lg:h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/40 via-transparent to-transparent opacity-90 z-10" />
                  <img 
                    src="https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png" 
                    alt="Dr. R. Murali Karthik" 
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105" 
                  />
                  
                  {/* Desktop Only Quote Overlay */}
                  <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-10 z-20">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                      <p className="text-white text-xl italic font-serif leading-relaxed">
                        "I believe every patient deserves to smile with confidence and it's my privilege to make that happen."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet Only Quote Block (Below Image) */}
                <div className="lg:hidden p-6 bg-[#1E2A78]">
                  <div className="pl-4 border-l-2 border-secondary/50">
                    <p className="text-white/90 text-base sm:text-lg italic font-serif leading-relaxed">
                      "I believe every patient deserves to smile with confidence and it's my privilege to make that happen."
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6 pb-6 border-b border-[#F2F4F7]">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2A78] mb-3">Dr. R. Murali Karthik</h3>
                  <p className="text-[#00A8A8] font-bold tracking-wider uppercase text-sm sm:text-base mb-8">Chief Dental Surgeon | Prosthodontist & Implantologist</p>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 bg-[#00A8A8]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-[#00A8A8]" size={26} />
                      </div>
                      <div>
                        <div className="text-xs text-[#333333]/50 uppercase tracking-wider font-bold mb-1">Qualifications</div>
                        <div className="font-semibold text-[#1E2A78] text-base">BDS, MDS – Prosthodontics</div>
                        <div className="text-[#333333]/70 text-sm mt-1">Saveetha Dental College</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 bg-[#00A8A8]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="text-[#00A8A8]" size={26} />
                      </div>
                      <div>
                        <div className="text-xs text-[#333333]/50 uppercase tracking-wider font-bold mb-1">Academic Role</div>
                        <div className="font-semibold text-[#1E2A78] text-base">Associate Professor</div>
                        <div className="text-[#333333]/70 text-sm mt-1">Sri Venkateshwara Dental College</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-[#333333]/80 leading-relaxed mb-8 text-sm sm:text-base">
                  <p>
                    <strong className="text-[#1E2A78]">Dr. R. Murali Karthik</strong> is one of Chennai's most trusted names in Prosthodontics and Implantology, with over <strong className="text-[#1E2A78]">13+ years of clinical and academic experience</strong>. He completed both his BDS and MDS from the prestigious Saveetha Dental College, Chennai (one of India's most prestigious dental institutions).
                  </p>
                  <p>
                    Inspired by the clinical philosophy of Dr. Jiro Abe of Japan, Dr. Murali Karthik has built a reputation for successfully treating complex prosthodontic cases — particularly challenging mandibular edentulous patients — with exceptional precision and care.
                  </p>
                  <p>
                    As the Director of the Apex Academy of Continuing Dental Education, he is deeply committed to advancing the standards of dentistry in India. He has presented and won awards at multiple national and international conferences, and has 6 published research papers to his credit — including active research in the application of silver nanoparticles in dentistry and CAD/CAM innovations.
                  </p>
                  <p>
                    At Tooth & Smile, Dr. Murali Karthik brings this academic rigor into everyday clinical care ensuring that every patient, whether they need a routine filling or a full smile reconstruction, receives world-class treatment in a warm, comfortable environment.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 bg-[#F2F4F7]/60 p-6 rounded-3xl">
                  <div>
                    <h4 className="font-bold text-[#1E2A78] text-lg mb-5 flex items-center gap-2"><Stethoscope size={20} className="text-[#00A8A8]" /> Specializations</h4>
                    <ul className="space-y-4">
                      {specializations.map((spec, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#333333]/80 font-medium">
                          <Check size={18} className="text-[#00A8A8] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E2A78] text-lg mb-5 flex items-center gap-2"><Award size={20} className="text-[#00A8A8]" /> Achievements</h4>
                    <ul className="space-y-4">
                      {achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#333333]/80 font-medium">
                          <Check size={16} className="text-[#00A8A8] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <EnquiryButton label="Book Consultation with Dr. Karthik" variant="large" className="w-full sm:w-auto px-8 py-3 text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Testimonials Section */}
      <section className="py-8 lg:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6 max-w-5xl mx-auto">
            <div className="text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78] mb-4">What Patients Say About Dr. Murali Karthik</h3>
              <div className="w-24 h-1 bg-[#00A8A8] rounded-full" />
            </div>
            
            <div className="flex gap-3">
              <button onClick={() => slideDoctorTestimonials('left')} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-colors shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => slideDoctorTestimonials('right')} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-colors shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={doctorScrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide pt-4 max-w-5xl mx-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doctorTestimonials.map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[450px] bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col relative group hover:border-[#00A8A8]/30 transition-all duration-300"
              >
                <div className="absolute top-8 right-8 text-[#00A8A8]/10 group-hover:text-[#00A8A8]/20 transition-colors">
                  <Quote size={48} fill="currentColor" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-900 text-base leading-relaxed italic font-semibold mb-8 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#1E2A78]/10 flex items-center justify-center text-[#1E2A78] font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1E2A78] text-base">{testimonial.author}</div>
                      <div className="text-xs text-[#00A8A8] font-bold uppercase tracking-wider mt-0.5">{testimonial.source}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expert Clinicians Section */}
      <OurDoctors />

      {/* Before & After Section */}
      <BeforeAfter />

      {/* Clinic Testimonials Section */}
      <Testimonials />

    </div>
  );
}
