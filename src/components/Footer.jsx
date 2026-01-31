import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-dark-grey text-white pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div
              className={`flex flex-col mb-8 ${lang === 'ar' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-3xl font-bold tracking-tighter text-white">
                KHWAN PACK
              </span>
              <span
                className="text-2xl font-bold font-arabic text-primary leading-none"
                dir="rtl"
              >
                خوان باك
              </span>
            </div>
            <p
              className={`text-slate-400 max-w-sm mb-8 leading-relaxed ${lang === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
            >
              {t('footer.desc')}
            </p>
          </div>

          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-primary">
              {t('footer.links_title')}
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a
                  onClick={() =>
                    document
                      .getElementById('catalog')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.catalog')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.guide')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.faq')}
                </a>
              </li>
            </ul>
          </div>

          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-secondary">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li
                className={`flex items-start gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <span className="material-icons text-primary text-sm mt-1">
                  location_on
                </span>
                <span className={lang === 'ar' ? 'font-arabic' : ''}>
                  {t('footer.location')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} KHWAN PACK. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
