import React from 'react';
import { useLang } from '../context/LanguageContext';
import PartnerMarquee from './PartnerMarquee';

export default function AboutSection() {
  const { lang, t } = useLang();

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className={`relative ${lang === 'ar' ? 'order-2' : ''}`}>
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Khwan Pack Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-primary/5 rounded-full -z-10 blur-3xl animate-pulse"></div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full -z-10 blur-2xl"></div>

            <div
              className={`absolute -bottom-6 ${lang === 'ar' ? 'left-12' : 'right-12'} bg-slate-900 text-white p-10 rounded-[32px] shadow-2xl border border-white/10 max-w-[280px] z-20`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-black text-5xl">100%</span>
                <span className="material-icons-round text-primary text-3xl">
                  verified_user
                </span>
              </div>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed text-center">
                {lang === 'ar'
                  ? 'جودة وطباعة سعودية فخمة'
                  : 'Premium Saudi Quality & Printing'}
              </p>
            </div>
          </div>

          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <div className="inline-block mb-6">
              <span className="text-xs font-black text-primary uppercase tracking-[0.3em] bg-primary/5 px-4 py-2 rounded-full">
                {t('about.subtitle')}
              </span>
            </div>

            <h3 className="text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              {t('about.title')}
            </h3>

            <div className="space-y-8 text-xl text-slate-500 leading-relaxed font-arabic font-medium">
              <p dangerouslySetInnerHTML={{ __html: t('about.desc1') }} />

              <div
                className={`py-8 px-10 ${lang === 'ar' ? 'border-r-8 pr-10' : 'border-l-8 pl-10'} border-accent bg-slate-50 rounded-[32px] relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-6xl text-slate-300">
                    format_quote
                  </span>
                </div>
                <p className="italic font-black text-slate-800 relative z-10 leading-relaxed">
                  {t('about.quote')}
                </p>
              </div>

              <p className="text-lg opacity-80">{t('about.desc2')}</p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-12">
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-icons-round text-3xl">
                    verified
                  </span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                  {lang === 'ar' ? 'موثوق' : 'Trusted'}
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <span className="material-icons-round text-3xl">bolt</span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                  {lang === 'ar' ? 'سريع' : 'Fast'}
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <span className="material-icons-round text-3xl">
                    auto_awesome
                  </span>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                  {lang === 'ar' ? 'مبدع' : 'Creative'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Partner Marquee */}
        <PartnerMarquee />
      </div>
    </section>
  );
}
