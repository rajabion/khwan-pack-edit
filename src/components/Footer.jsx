import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-dark-grey text-white pt-20 pb-10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
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
              className={`text-slate-400 text-sm mb-8 leading-relaxed ${lang === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
            >
              {t('footer.desc')}
            </p>
            <div
              className={`flex gap-4 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}
            >
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
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

          {/* Location Map */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">
              {lang === 'ar' ? 'موقعنا' : 'Our Location'}
            </h4>
            <div className="rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 group shadow-2xl h-[120px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.583412323456!2d46.7032!3d24.7012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033333333333%3A0x3333333333333333!2sEbttikar%20Technology%20Co.%20Ltd.!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/N4rQGjPBLwR3zsgr5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white transition-colors uppercase tracking-widest"
            >
              <span>{lang === 'ar' ? 'افتح في الخرائط' : 'Open in Maps'}</span>
              <span className="material-icons text-xs">open_in_new</span>
            </a>
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
