import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const [lang, setLang] = useState('en');

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('preferred_lang');
    if (saved) {
      setLang(saved);
      // Wait for Google Translate script to load
      setTimeout(() => triggerTranslation(saved), 1000);
    }
  }, []);

  const triggerTranslation = (targetLang: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('preferred_lang', newLang);
    triggerTranslation(newLang);
  };

  return (
    <div className="flex items-center bg-gray-100/80 backdrop-blur-md rounded-full p-1 border border-gray-200/50 shadow-inner">
      <button 
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 ${lang === 'en' ? 'bg-white text-[#1E2A78] shadow-sm' : 'text-gray-500 hover:text-[#1E2A78]'}`}
      >
        <Languages size={14} className={lang === 'en' ? 'text-primary' : 'text-gray-400'} />
        EN
      </button>
      <button 
        onClick={() => handleLanguageChange('ta')}
        className={`px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 ${lang === 'ta' ? 'bg-white text-[#1E2A78] shadow-sm' : 'text-gray-500 hover:text-[#1E2A78]'}`}
      >
        <span className={lang === 'ta' ? 'text-primary' : 'text-gray-400'}>அ</span>
        தமிழ்
      </button>
    </div>
  );
}
