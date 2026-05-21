import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { treatments } from '../lib/treatments';
import AnnouncementBar from './AnnouncementBar';

const navLinks = [
  { label: 'Home', href: '/', isHash: false },
  { label: 'Doctors', href: '#doctors', isHash: true },
  { label: 'Testimonials', href: '#testimonials', isHash: true },
  { label: 'About', href: '/about', isHash: false },
  { label: 'Blog', href: '/blog', isHash: false },
  { label: 'Contact', href: '/book-appointment', isHash: false },
];

// Treatment icons mapping
const treatmentIcons: Record<string, string> = {
  'dental-implants': '🦷',
  'root-canal-treatment': '🔬',
  'braces-aligners': '😁',
  'teeth-whitening': '✨',
  'smile-makeover': '💎',
  'pediatric-dentistry': '👶',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setTreatmentsOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string, isHash: boolean) => {
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
    if (isHash) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 300);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const textColor = 'text-primary/80 hover:text-primary hover:bg-primary/10';

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-transparent">
        <AnnouncementBar />
        <motion.nav
          initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
          className="transition-all duration-300 border-b bg-white shadow-lg border-gray-100 py-2"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link to="/" onClick={() => handleNavClick('/', false)} className="flex items-center gap-3 group flex-shrink-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm transition-all duration-300">
                  <img src="/images/Thooth_Smile_Logo.png" alt="Tooth & Smile Logo" className="w-full h-full object-contain p-1.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold leading-none tracking-tight transition-colors text-primary">Tooth & Smile</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold mt-1 text-cyan">Advanced Dentistry</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1 bg-primary/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-primary/10">

                {/* Home */}
                <button onClick={() => handleNavClick('/', false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${textColor}`}>
                  Home
                </button>

                {/* Treatments Dropdown */}
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setTreatmentsOpen(true)}
                  onMouseLeave={() => setTreatmentsOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${textColor}`}
                    onClick={() => handleNavClick('#services', true)}
                  >
                    Treatments
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${treatmentsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {treatmentsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden z-50"
                      >
                        {/* Dropdown header */}
                        <div className="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
                          <Sparkles size={14} className="text-secondary" />
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Treatments</span>
                        </div>

                        {/* Treatment list */}
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {treatments.map((t) => (
                            <Link
                              key={t.slug}
                              to={`/treatments/${t.slug}`}
                              onClick={() => setTreatmentsOpen(false)}
                              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary/5 transition-all duration-200 group"
                            >
                              <div className="w-9 h-9 rounded-xl bg-secondary/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-secondary/15 transition-colors">
                                {treatmentIcons[t.slug] || '🦷'}
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors truncate leading-tight">
                                  {t.title}
                                </div>
                                <div className="text-[11px] text-gray-400 truncate mt-0.5">{t.shortTitle}</div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* View all footer */}
                        <div className="px-5 py-3 bg-gray-50/60 border-t border-gray-100">
                          <button
                            onClick={() => handleNavClick('#services', true)}
                            className="w-full flex items-center justify-center gap-2 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors py-1"
                          >
                            <Sparkles size={12} />
                            View All Services on Home Page
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other nav links */}
                {navLinks.filter(l => l.label !== 'Home').map((link) => (
                  <button key={link.label} onClick={() => handleNavClick(link.href, link.isHash)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${textColor}`}>
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                <a href="tel:9551120208" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-primary/5 text-primary hover:bg-primary/10">
                  <Phone size={16} /> Call Now
                </a>
                <Link to="/book-appointment"
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  <Calendar size={16} /> Book Appointment
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full backdrop-blur-md bg-primary/5 text-primary"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-main/97 backdrop-blur-xl pt-32 px-5 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-1">

              {/* Home */}
              <button
                onClick={() => handleNavClick('/', false)}
                className="text-left px-4 py-3 text-primary text-base font-semibold rounded-2xl hover:bg-primary/5 transition-colors"
              >
                Home
              </button>

              {/* Treatments accordion */}
              <div>
                <button
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-primary text-base font-semibold rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  <span>Treatments</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 text-gray-400 ${mobileTreatmentsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileTreatmentsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mb-2 border-l-2 border-secondary/20 pl-3 flex flex-col gap-1">
                        {treatments.map((t) => (
                          <Link
                            key={t.slug}
                            to={`/treatments/${t.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                          >
                            <span className="text-lg">{treatmentIcons[t.slug] || '🦷'}</span>
                            <span className="text-sm font-semibold text-primary/80 group-hover:text-primary">{t.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other links */}
              {navLinks.filter(l => l.label !== 'Home').map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className="text-left px-4 py-3 text-primary text-base font-semibold rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:9551120208" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary/5 text-primary text-base font-bold rounded-2xl">
                  <Phone size={20} /> Call +91 95511 20208
                </a>
                <Link
                  to="/book-appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white text-base font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                >
                  <Calendar size={20} /> Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
