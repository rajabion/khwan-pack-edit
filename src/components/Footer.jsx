import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  const officeLocationUrl = 'https://maps.app.goo.gl/N4rQGjPBLwR3zsgr5';
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3624.582844123214!2d46.703211!3d24.701234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f032a39764047%3A0xed0c9ed91c59a43c!2z2K7ZiNin2YYg2KjYp9mD!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa';

  return (
    <footer className="bg-dark-grey text-white pt-32 pb-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-24">
          {/* Brand Column */}
          <div className="col-span-1">
            <div
              className={`flex flex-col mb-10 ${lang === 'ar' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-4xl font-black tracking-tighter text-white uppercase font-display leading-none mb-2">
                KHWAN PACK
              </span>
              <span
                className="text-3xl font-black font-arabic text-primary leading-none"
                dir="rtl"
              >
                خوان باك
              </span>
            </div>
            <p
              className={`text-slate-400 text-lg mb-10 leading-relaxed ${lang === 'ar' ? 'text-right font-arabic' : 'text-left'} font-medium`}
            >
              {t('footer.desc')}
            </p>
            <div
              className={`flex gap-6 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}
            >
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-500 hover:-translate-y-1"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-500 hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">
              {t('footer.links_title')}
            </h4>
            <ul className="space-y-6">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
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
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
                  {t('nav.catalog')}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
                  {t('footer.guide')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors text-lg font-bold"
                >
                  {t('footer.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-secondary mb-10">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-8">
              <li
                className={`flex items-start gap-5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round text-primary">
                    location_on
                  </span>
                </div>
                <span
                  className={`text-slate-400 text-lg leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''} font-bold`}
                >
                  {t('footer.location')}
                </span>
              </li>
              <li
                className={`flex items-start gap-5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round text-secondary">
                    phone
                  </span>
                </div>
                <span className="text-white text-lg font-black tracking-wider">
                  +966 50 000 0000
                </span>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-10">
              {lang === 'ar' ? 'موقعنا' : 'Find Us'}
            </h4>
            <div className="relative group">
              <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10 h-[200px] w-full transition-all duration-700 group-hover:border-accent/50 group-hover:scale-[1.02]">
                <iframe
                  title="Khwan Pack Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale-[0.8] contrast-[1.2] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <a
                  href={officeLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                ></a>
              </div>
              <div
                className={`mt-6 flex flex-col ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
                  <p className="text-[11px] font-black text-white uppercase tracking-widest leading-none">
                    KHWAN PACK HQ
                  </p>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                  {lang === 'ar'
                    ? 'الرياض، المملكة العربية السعودية'
                    : 'Riyadh, Saudi Arabia'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} KHWAN PACK. {t('footer.rights')}
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
