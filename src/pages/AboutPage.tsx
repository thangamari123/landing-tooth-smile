import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Stethoscope, Clock, Users, Award, BookOpen, GraduationCap, Star, Quote } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: Shield, text: 'Modern, hygienic clinic environment' },
    { icon: Stethoscope, text: 'Advanced digital X-ray and 3D imaging' },
    { icon: Star, text: 'Painless injection techniques' },
    { icon: Clock, text: 'Flexible appointment timings, including weekends' },
    { icon: Users, text: 'Accessible for elderly and special needs patients' },
    { icon: Award, text: 'NABH-aligned sterilization protocols' },
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

  const clinicTestimonials = [
    { id: 1, name: 'Priya R.', location: 'Mylapore', rating: 5, text: "I was terrified of the dentist for years. The team at Tooth & Smile made my root canal completely painless. I actually can't believe how easy it was. I only wish I had come sooner.", treatment: 'Root Canal Treatment', avatar: 'P', color: 'bg-[#5BC0EB]/20 text-[#0F8ACB]' },
    { id: 2, name: 'Karthik S.', location: 'Adyar', rating: 5, text: "My son used to cry every time we visited a dentist. Here, the pediatric doctor was so patient and friendly that he actually looks forward to his checkups now. Truly remarkable.", treatment: 'Pediatric Dentistry', avatar: 'K', color: 'bg-[#1E2A78]/10 text-[#1E2A78]' },
    { id: 3, name: 'Meena V.', location: 'Velachery', rating: 5, text: "I got dental implants after years of hiding my smile. The procedure was smooth, the team was professional, and the result looks completely natural. It's changed my confidence entirely.", treatment: 'Dental Implants', avatar: 'M', color: 'bg-[#00A8A8]/10 text-[#00A8A8]' },
    { id: 4, name: 'Rahul N.', location: 'T. Nagar', rating: 5, text: "Best dental clinic in Chennai — no exaggeration. From the moment I walked in to the follow-up calls after treatment, everything was handled with so much care. Highly recommend.", treatment: 'General Dentistry', avatar: 'R', color: 'bg-[#0F8ACB]/10 text-[#0F8ACB]' },
    { id: 5, name: 'Anitha K.', location: 'NRI Patient', rating: 5, text: "I was visiting from abroad and needed emergency treatment. Tooth & Smile fit me in the same day, gave me excellent care, and the pricing was completely transparent. Outstanding.", treatment: 'Emergency Care', avatar: 'A', color: 'bg-[#1E2A78]/10 text-[#1E2A78]' },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#1E2A78] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A78]/90 to-[#0F8ACB]/80 z-10" />
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80" alt="Clinic Interior" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold tracking-wider uppercase rounded-full mb-6 backdrop-blur-md border border-white/20">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by Thousands of Families in Chennai
          </motion.h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-6 leading-tight">
                Expert Dental Care in a <br/><span className="text-[#0F8ACB]">Judgment-Free Environment</span>
              </h2>
              <div className="space-y-5 text-lg text-[#333333]/70 leading-relaxed mb-8">
                <p>
                  Tooth & Smile was founded with one belief — that every patient deserves expert dental care in a comfortable, judgment-free environment. Located in Mylapore, Chennai, we've been serving families across the city for over 13 years, earning the trust of more than 5,000 happy patients.
                </p>
                <p>
                  Our clinic is equipped with the latest digital dentistry tools - from 3D imaging and intraoral cameras to laser dentistry systems - ensuring that every diagnosis is precise and every treatment is efficient.
                </p>
                <p className="font-medium text-[#1E2A78] text-xl">
                  We believe that great dental care goes beyond fixing teeth. It's about building relationships, easing anxieties, and transforming lives - one smile at a time.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#F2F4F7] rounded-[2rem] p-8 sm:p-10 border border-[#1E2A78]/5 shadow-xl shadow-[#1E2A78]/5">
                <h3 className="font-bold text-[#1E2A78] text-2xl mb-8 font-serif">Clinic Highlights</h3>
                <div className="space-y-4">
                  {highlights.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} 
                      className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-[#1E2A78]/5 hover:border-[#00A8A8]/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#00A8A8]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={22} className="text-[#00A8A8]" />
                      </div>
                      <span className="font-semibold text-[#1E2A78] text-[15px]">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Meet the Expert Behind Your Smile</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-6">Specialists With Genuine Dedication</h2>
            <p className="text-[#333333]/70 text-lg leading-relaxed">
              At Tooth & Smile, you're treated by specialists who bring not just qualifications, but genuine dedication to every patient. Our lead doctor combines academic excellence, hands-on clinical experience, and a deeply patient-centred approach.
            </p>
          </motion.div>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1E2A78]/10 border border-[#1E2A78]/5 w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Doctor Image & Quote */}
              <div className="w-full lg:w-2/5 relative bg-[#1E2A78] min-h-[500px] lg:min-h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78] via-transparent to-transparent opacity-90 z-10" />
                <img src="/images/doctor-portrait.png" alt="Dr. R. Murali Karthik" className="w-full h-full object-cover object-top opacity-90 absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                    <p className="text-white text-lg sm:text-xl italic font-serif leading-relaxed">
                      "I believe every patient deserves to smile with confidence and it's my privilege to make that happen."
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-8 pb-8 border-b border-[#F2F4F7]">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A78] mb-3">Dr. R. Murali Karthik</h3>
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

                <div className="space-y-6 text-[#333333]/80 leading-relaxed mb-10 text-base sm:text-lg">
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

                <div className="grid sm:grid-cols-2 gap-8 bg-[#F2F4F7]/60 p-8 rounded-3xl">
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
                        <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#333333]/80 font-medium">
                          <Check size={18} className="text-[#00A8A8] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12">
                  <WhatsAppButton label="Book Consultation with Dr. Karthik" variant="large" className="w-full sm:w-auto px-10 py-4 text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2A78] mb-4">What Patients Say About Dr. Murali Karthik</h3>
            <div className="w-24 h-1 bg-[#00A8A8] mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {doctorTestimonials.map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#F2F4F7]/40 p-8 rounded-2xl border border-[#1E2A78]/5 relative"
              >
                <Quote size={32} className="text-[#00A8A8]/20 absolute top-6 left-6" />
                <div className="relative z-10 pl-4">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#333333]/80 text-[15px] leading-relaxed italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1E2A78]/10 flex items-center justify-center text-[#1E2A78] font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1E2A78] text-sm">{testimonial.author}</div>
                      <div className="text-xs text-[#00A8A8] font-medium">{testimonial.source}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfter 
        headline="Real Patients. Real Transformations." 
        intro="See the difference expert dental care makes. These are real patient cases treated at Tooth & Smile — with their full consent and trust." 
        subhead="Before & After" 
      />

      {/* Clinic Testimonials Section */}
      <Testimonials 
        headline="What Our Patients Say" 
        intro="We measure our success by the smiles we create and the trust we earn. Here's what our patients have to say about their experience at Tooth & Smile." 
        data={clinicTestimonials} 
      />
    </div>
  );
}
