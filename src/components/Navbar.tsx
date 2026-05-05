import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { treatments } from '../lib/treatments';

const navLinks = [
  { label: 'Our Doctors', href: '#doctors', isHash: true },
  { label: 'Reviews', href: '#testimonials', isHash: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopTreatmentsOpen, setDesktopTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) { setActiveSection(''); return; }
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(`#${e.target.id}`); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach((l) => { const el = document.querySelector(l.href); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (treatmentsRef.current && !treatmentsRef.current.contains(e.target as Node)) setDesktopTreatmentsOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false); setDesktopTreatmentsOpen(false); setMobileTreatmentsOpen(false);
    if (!isHome) { navigate('/'); setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 300); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTreatmentClick = (slug: string) => { setMobileMenuOpen(false); setDesktopTreatmentsOpen(false); setMobileTreatmentsOpen(false); navigate(`/treatments/${slug}`); };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md shadow-black/5' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-[#F2F4F7] group-hover:border-[#00A8A8]/30 transition-all duration-300">
                <img src="/images/Thooth_Smile_Logo.png" alt="Tooth & Smile Logo" className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[17px] font-bold text-[#1E2A78] leading-none tracking-tight">Tooth & Smile</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#00A8A8] font-semibold mt-0.5">Advanced Dentistry</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0">
              <div ref={treatmentsRef} className="relative" onMouseEnter={() => setDesktopTreatmentsOpen(true)} onMouseLeave={() => setDesktopTreatmentsOpen(false)}>
                <button className={`relative flex items-center gap-1 px-3 py-6 text-[14px] font-medium tracking-wide transition-colors duration-200 ${location.pathname.startsWith('/treatments/') ? 'text-[#1E2A78]' : 'text-[#333333]/70 hover:text-[#1E2A78]'}`}>
                  Treatments
                  <ChevronDown size={14} className={`transition-transform duration-200 ${desktopTreatmentsOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00A8A8] transition-transform duration-300 origin-left ${location.pathname.startsWith('/treatments/') ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
                <AnimatePresence>
                  {desktopTreatmentsOpen && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-64 bg-white border border-[#F2F4F7] shadow-xl shadow-black/10 rounded-xl overflow-hidden py-2"
                    >
                      {treatments.map((t) => (
                        <button key={t.slug} onClick={() => handleTreatmentClick(t.slug)} className="w-full text-left px-5 py-2.5 text-[13px] text-[#333333]/70 hover:text-[#1E2A78] hover:bg-[#F2F4F7] transition-colors">{t.title}</button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <button key={link.label} onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 py-6 text-[14px] font-medium tracking-wide transition-colors duration-200 ${activeSection === link.href && isHome ? 'text-[#1E2A78]' : 'text-[#333333]/70 hover:text-[#1E2A78]'}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00A8A8] transition-transform duration-300 origin-left ${activeSection === link.href && isHome ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
              ))}

              <Link to="/about"
                className={`relative px-3 py-6 text-[14px] font-medium tracking-wide transition-colors duration-200 ${location.pathname === '/about' ? 'text-[#1E2A78]' : 'text-[#333333]/70 hover:text-[#1E2A78]'}`}>
                About
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00A8A8] transition-transform duration-300 origin-left ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>

              <Link to="/before-after"
                className={`relative px-3 py-6 text-[14px] font-medium tracking-wide transition-colors duration-200 ${location.pathname === '/before-after' ? 'text-[#1E2A78]' : 'text-[#333333]/70 hover:text-[#1E2A78]'}`}>
                Before & After
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00A8A8] transition-transform duration-300 origin-left ${location.pathname === '/before-after' ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>

              <Link to="/blog"
                className={`relative px-3 py-6 text-[14px] font-medium tracking-wide transition-colors duration-200 ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'text-[#1E2A78]' : 'text-[#333333]/70 hover:text-[#1E2A78]'}`}>
                Blog
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00A8A8] transition-transform duration-300 origin-left ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'scale-x-100' : 'scale-x-0'}`} />
              </Link>

            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:9551120208" className="flex items-center gap-2 px-5 py-2.5 border border-[#F2F4F7] text-[#333333] text-[13px] font-semibold tracking-wide rounded-lg hover:border-[#1E2A78] hover:text-[#1E2A78] transition-all duration-200">
                <Phone size={14} />Call Us
              </a>
              <Link to="/book-appointment"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#00A8A8] hover:bg-[#008f8f] text-white text-[13px] font-semibold tracking-wide rounded-lg transition-all duration-200 shadow-md shadow-[#00A8A8]/20 hover:shadow-lg hover:shadow-[#00A8A8]/30"
              >
                <Calendar size={14} />Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2.5 text-[#1E2A78]">
              {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 bottom-0 z-[60] bg-white overflow-y-auto lg:hidden"
          >
            <div className="px-6 py-4">
              {/* Treatments accordion */}
              <div className="border-b border-[#F2F4F7]">
                <button
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="flex items-center justify-between w-full px-2 py-4 text-[#333333] text-[15px] font-medium"
                >
                  <span>Treatments</span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileTreatmentsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {treatments.map((t) => (
                        <button
                          key={t.slug}
                          onClick={() => handleTreatmentClick(t.slug)}
                          className="block w-full text-left pl-6 pr-2 py-3 text-[#333333]/60 hover:text-[#1E2A78] text-sm transition-colors"
                        >
                          {t.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-2 py-4 text-[#333333] text-[15px] font-medium border-b border-[#F2F4F7]"
                >
                  {link.label}
                </button>
              ))}

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-4 text-[#333333] text-[15px] font-medium border-b border-[#F2F4F7]"
              >
                About
              </Link>

              <Link
                to="/before-after"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-4 text-[#333333] text-[15px] font-medium border-b border-[#F2F4F7]"
              >
                Before & After
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-4 text-[#333333] text-[15px] font-medium border-b border-[#F2F4F7]"
              >
                Blog
              </Link>

              <div className="pt-8 space-y-3">
                <a
                  href="tel:9551120208"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-[#F2F4F7] text-[#333333] text-[13px] font-medium rounded-lg hover:border-[#1E2A78] transition-colors"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <Link
                  to="/book-appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#00A8A8] text-white text-[13px] font-semibold rounded-lg"
                >
                  <Calendar size={15} />
                  Book Appointment
                </Link>
              </div>

              <div className="pt-8 pb-4 text-center">
                <p className="text-[#333333]/40 text-xs">60/71, Appu Street, Mylapore, Chennai – 600004</p>
                <p className="text-[#333333]/40 text-xs mt-1">Mon – Sat: 9:30 AM – 8:00 PM</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
