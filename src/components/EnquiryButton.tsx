import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EnquiryButtonProps {
  label?: string;
  variant?: 'primary' | 'outline' | 'large';
  className?: string;
  treatment?: string;
}

export default function EnquiryButton({
  label = 'Book Appointment',
  variant = 'primary',
  className = '',
  treatment,
}: EnquiryButtonProps) {
  const variants = {
    primary:
      'inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary-light text-white font-semibold text-sm tracking-wide transition-all hover:shadow-lg rounded-xl',
    outline:
      'inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-sm tracking-wide transition-all rounded-xl',
    large:
      'inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold text-base tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5 rounded-xl',
  };

  return (
    <Link 
      to="/book-appointment" 
      state={{ selectedService: treatment }}
      className={`${variants[variant]} ${className}`}
    >
      <Calendar size={variant === 'large' ? 20 : 18} />
      {label}
      <ArrowRight size={16} className="ml-1" />
    </Link>
  );
}
