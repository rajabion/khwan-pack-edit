import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg h-16' : 'bg-transparent h-24'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex flex-col">
              <span
                className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'} leading-none group-hover:text-primary`}
              >
                KHWAN PACK
              </span>
              <span
                className="text-xl font-black font-arabic text-primary leading-none"
                dir="rtl"
              >
                خوان باك
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors text-slate-900"
              to="/"
            >
              {t('nav.home')}
            </Link>
            <button
              onClick={() => scrollTo('about')}
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors text-slate-900"
            >
              {t('footer.about')}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors text-slate-900"
            >
              {t('services.title')}
            </button>
            <button
              onClick={() => scrollTo('catalog')}
              className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors text-slate-900"
            >
              {t('nav.catalog')}
            </button>

            <div className="flex items-center gap-6 ml-6 pl-6 border-l border-slate-200">
              <button
                onClick={toggleLang}
                className="px-4 py-1.5 border-2 border-primary rounded-full text-[10px] font-black hover:bg-primary hover:text-white transition-all text-primary uppercase tracking-widest"
              >
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>

              <button
                className="px-6 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-opacity-90 shadow-xl shadow-primary/20 transition-all active:scale-95"
                onClick={() => scrollTo('contact')}
              >
                {t('nav.book')}
              </button>
            </div>
          </nav>

          <button className="md:hidden p-2 text-slate-900">
            <span className="material-icons-round">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
