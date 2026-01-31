import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  // The actual location provided: https://maps.app.goo.gl/N4rQGjPBLwR3zsgr5
  const officeLocationUrl = 'https://maps.app.goo.gl/N4rQGjPBLwR3zsgr5';

  // Encoded embed URL for the specific Khwan Pack location coordinates
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3624.582844123214!2d46.703211!3d24.701234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f032a39764047%3A0xed0c9ed91c59a43c!2z2K7ZiNin2YYg2KjYp9mD!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa';

  return (
    <footer className="bg-dark-grey text-white pt-20 pb-10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <div
              className={`flex flex-col mb-8 ${lang === 'ar' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-3xl font-bold tracking-tighter text-white uppercase font-display">
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

          {/* Interactive Mini Map */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent font-display">
              {lang === 'ar' ? 'موقعنا' : 'Find Us'}
            </h4>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 h-[160px] w-full transition-transform duration-500 hover:scale-[1.02]">
                <iframe
                  title="Khwan Pack Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.5] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                {/* Invisible Click Overlay to open full map */}
                <a
                  href={officeLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label="Open Khwan Pack on Google Maps"
                ></a>
              </div>
              <div
                className={`mt-4 flex flex-col ${lang === 'ar' ? 'items-end text-right' : 'items-start text-left'}`}
              >
                <p className="text-[11px] font-black text-white/90 uppercase tracking-widest leading-none mb-1">
                  KHWAN PACK
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  {lang === 'ar'
                    ? 'الرياض، المملكة العربية السعودية'
                    : 'Riyadh, Saudi Arabia'}
                </p>
              </div>
            </div>
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
