import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { treatments } from '../lib/treatments';
import AnnouncementBar from './AnnouncementBar';

const navLinks = [
  { label: 'Home', href: '/', isHash: false },
  { label: 'Services', href: '#services', isHash: true },
  { label: 'Doctors', href: '#doctors', isHash: true },
  { label: 'Testimonials', href: '#testimonials', isHash: true },
  { label: 'About', href: '/about', isHash: false },
  { label: 'Contact', href: '#contact', isHash: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isHash: boolean) => {
    setMobileMenuOpen(false);
    if (isHash) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 300);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <AnnouncementBar />
        <motion.nav
          initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`transition-all duration-300 border-b border-white/10 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-primary/5 py-2' 
              : 'bg-transparent py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" onClick={() => handleNavClick('/', false)} className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img src="/images/Thooth_Smile_Logo.png" alt="Tooth & Smile Logo" className="w-full h-full object-contain p-1.5" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-serif text-lg font-bold leading-none tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>Tooth & Smile</span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold mt-1 transition-colors ${isScrolled ? 'text-cyan' : 'text-cyan md:text-cyan'}`}>Advanced Dentistry</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20">
                {navLinks.map((link) => (
                  <button key={link.label} onClick={() => handleNavClick(link.href, link.isHash)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary hover:bg-primary/5' 
                        : 'text-primary md:text-white/90 hover:text-white hover:bg-white/20'
                    }`}>
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <a href="tel:9551120208" className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary/5 text-primary hover:bg-primary/10' 
                    : 'bg-white/10 text-primary md:text-white hover:bg-white/20 backdrop-blur-md'
                }`}>
                  <Phone size={16} /> Call Now
                </a>
                <Link to="/book-appointment"
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar size={16} /> Book Appointment
                </Link>
              </div>

              {/* Mobile menu button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2.5 rounded-full backdrop-blur-md ${isScrolled ? 'bg-primary/5 text-primary' : 'bg-white/20 text-primary md:text-white'}`}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} /> }
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className="text-left px-4 py-4 text-primary text-lg font-semibold rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a href="tel:9551120208" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary/5 text-primary text-base font-bold rounded-2xl">
                  <Phone size={20} /> Call +91 95511 20208
                </a>
                <Link to="/book-appointment" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white text-base font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
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
