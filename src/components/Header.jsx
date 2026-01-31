import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang, t } = useLang();

  const toggleTheme = () => document.documentElement.classList.toggle('dark');

  return (
    <header className="fixed w-full z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white leading-none group-hover:text-primary transition-colors">
                KHWAN PACK
              </span>
              <span
                className="text-xl font-bold font-arabic text-primary leading-none"
                dir="rtl"
              >
                خوان باك
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-bold hover:text-primary transition-colors"
              to="/"
            >
              {t('nav.home')}
            </Link>
            <a
              className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById('catalog')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('nav.catalog')}
            </a>

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={toggleLang}
                className="px-3 py-1 border border-primary rounded text-xs font-bold hover:bg-primary hover:text-white transition-all text-primary"
              >
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined dark:hidden text-slate-600">
                  dark_mode
                </span>
                <span className="material-symbols-outlined hidden dark:block text-brand-yellow">
                  light_mode
                </span>
              </button>

              <a
                className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-95"
                href="#contact"
              >
                {t('nav.book')}
              </a>
            </div>
          </nav>

          <button className="md:hidden p-2 text-slate-600 dark:text-slate-400">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
