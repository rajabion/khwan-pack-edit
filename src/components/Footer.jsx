import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  const officeLocationUrl = 'https://maps.app.goo.gl/N4rQGjPBLwR3zsgr5';

  return (
    <footer className="bg-dark-grey text-white pt-20 pb-10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <div
              className={`flex flex-col mb-8 ${lang === 'ar' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-3xl font-bold tracking-tighter text-white uppercase">
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
              className={`text-slate-400 text-sm mb-8 leading-relaxed ${lang === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
            >
              {t('footer.desc')}
            </p>
            <div
              className={`flex gap-4 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}
            >
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all active:scale-90"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all active:scale-90"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
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
                <button
                  onClick={() =>
                    document
                      .getElementById('catalog')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.catalog')}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.guide')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-secondary">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li
                className={`flex items-start gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="material-icons text-primary text-sm mt-1">
                  location_on
                </span>
                <span className={lang === 'ar' ? 'font-arabic' : ''}>
                  {t('footer.location')}
                </span>
              </li>
              <li
                className={`flex items-start gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="material-icons text-primary text-sm mt-1">
                  phone
                </span>
                <span className="font-bold">+966 50 000 0000</span>
              </li>
            </ul>
          </div>

          {/* Premium Location Gadget */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">
              {lang === 'ar' ? 'موقعنا' : 'Our Location'}
            </h4>
            <a
              href={officeLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20"
            >
              {/* Minimalist Map Background (Blurred/Abstracted for look) */}
              <div className="h-[140px] w-full bg-slate-800 relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-color group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400"
                  alt="Map"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                {/* Floating Marker Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="material-icons text-4xl text-primary animate-bounce">
                      location_on
                    </span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/40 rounded-full blur-[2px]"></div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                    Riyadh, KSA
                  </span>
                  <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/20">
                    {lang === 'ar' ? 'فتح الخريطة' : 'Open Map'}
                  </div>
                </div>
              </div>
            </a>
            <p className="mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Ebttikar Technology Co. Ltd.
              <br />
              {lang === 'ar'
                ? 'المقر الرئيسي - الرياض'
                : 'HQ - Riyadh, Saudi Arabia'}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>
            © {new Date().getFullYear()} KHWAN PACK. {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
