import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full brand-pattern opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-4 font-display">
                {t('contact.info')}
              </h2>
              <p className="text-white/80 font-arabic mb-12">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">phone</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="font-bold">+966 50 000 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">email</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Email
                    </p>
                    <p className="font-bold">hello@khwanpack.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Location
                    </p>
                    <p className="font-bold">{t('footer.location')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-12 bg-slate-900 text-white">
            <h2 className="text-3xl font-black mb-8 font-display">
              {t('contact.title')}
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                    placeholder="Moutasem Rajab"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                  placeholder="Request for quotation"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {t('contact.message')}
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className="w-full py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-xl">
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
