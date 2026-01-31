import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function AboutSection() {
  const { lang, t } = useLang();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${lang === 'ar' ? 'order-2' : ''}`}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Khwan Pack Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/10 rounded-full -z-10 blur-2xl"></div>

            <div
              className={`absolute bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs`}
            >
              <p className="text-primary font-black text-4xl mb-1">100%</p>
              <p className="text-slate-600 font-bold text-sm">
                {lang === 'ar'
                  ? 'جودة وطباعة سعودية'
                  : 'Saudi Quality & Printing'}
              </p>
            </div>
          </div>

          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">
              {t('about.subtitle')}
            </h2>
            <h3 className="text-4xl lg:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
              {t('about.title')}
            </h3>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-arabic">
              <p dangerouslySetInnerHTML={{ __html: t('about.desc1') }} />

              <div
                className={`py-6 ${lang === 'ar' ? 'border-r-4 pr-6' : 'border-l-4 pl-6'} border-accent bg-slate-50 rounded-xl`}
              >
                <p className="italic font-bold text-slate-800">
                  {t('about.quote')}
                </p>
              </div>

              <p>{t('about.desc2')}</p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                  <span className="material-icons text-primary">verified</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {lang === 'ar' ? 'موثوق' : 'Trusted'}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                  <span className="material-icons text-primary">speed</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {lang === 'ar' ? 'سريع' : 'Fast'}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                  <span className="material-icons text-primary">palette</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {lang === 'ar' ? 'مبدع' : 'Creative'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
