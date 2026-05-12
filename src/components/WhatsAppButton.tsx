import { MessageCircle, ArrowRight } from 'lucide-react';

interface WhatsAppButtonProps {
  treatment?: string;
  label?: string;
  variant?: 'primary' | 'outline' | 'large';
  className?: string;
}

export default function WhatsAppButton({
  treatment,
  label = 'Book via WhatsApp',
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const baseText = treatment
    ? `Hi, I would like to book an appointment for ${treatment} at Tooth & Smile Advanced Dentistry. Please share the available slots.`
    : `Hi, I would like to book an appointment at Tooth & Smile Advanced Dentistry. Please share the available slots.`;

  const encodedText = encodeURIComponent(baseText);
  const href = `https://wa.me/919551120208?text=${encodedText}`;

  const variants = {
    primary:
      'inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold text-sm tracking-wide transition-all hover:shadow-lg rounded-xl',
    outline:
      'inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-sm tracking-wide transition-all rounded-xl',
    large:
      'inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-bold text-base tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5 rounded-xl',
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${variants[variant]} ${className}`}>
      <MessageCircle size={variant === 'large' ? 20 : 18} />
      {label}
      <ArrowRight size={16} className="ml-1" />
    </a>
  );
}
