import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Premium Decorative Elements */}
      <div
        className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-1/2 h-full bg-primary/[0.03] ${lang === 'ar' ? '-skew-x-12 transform origin-top-left' : '-skew-x-12 transform origin-top-right'} transition-transform duration-1000`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full brand-pattern opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`space-y-10 ${lang === 'ar' ? 'order-2 lg:order-1' : ''}`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full">
              <span className="material-icons-round text-lg">
                settings_suggest
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {lang === 'ar'
                  ? 'الهوية البصرية والتغليف الصناعي'
                  : 'Visual Identity & Industrial Packaging'}
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
              {lang === 'ar' ? (
                <>
                  نحن <span className="text-primary">نخطط</span>،
                  <br />
                  نحن <span className="text-secondary">ننفذ</span>،
                  <br />
                  نحن <span className="text-accent">نتميز</span>.
                </>
              ) : (
                <>
                  We <span className="text-primary">Plan</span>,
                  <br />
                  We <span className="text-secondary">Execute</span>,
                  <br />
                  We <span className="text-accent">Differentiate</span>.
                </>
              )}
            </h1>

            <p
              className="text-xl text-slate-500 max-w-xl font-arabic leading-relaxed font-medium"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById('catalog')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-10 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95"
              >
                {t('hero.cta_primary')}
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-10 py-5 border-2 border-slate-200 text-slate-900 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-slate-50 transition-all active:scale-95"
              >
                {t('hero.cta_secondary')}
              </button>
            </div>
          </div>

          <div
            className={`relative ${lang === 'ar' ? 'order-1 lg:order-2' : ''}`}
          >
            <div className="relative aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[40px] transform rotate-3 scale-105 opacity-50 blur-2xl"></div>
              <img
                alt="Premium Branded Packaging"
                className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10 border-8 border-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBr58f3Ywt4JLpSKBoQPr5i9xb-vQV_fyVF8U84LfUl8v3keheemAYmJFe2N58R5CFn5o5n3Q8AGu2pJmqSKcUysXod2k6vQSc4EZ_g0aZ-bZOHBztqsxKGnmJggZwBfpRfDNsbE4lhu6bXtutq62GFEZqSkWP9z_DBwOwcfe6_PZM4iv8Qmg_OYnQ1CcP8sKmhoz8jVTpOM0xMXPm3uXyBTCe6sUqMq4ZUPR2kBuvVnsyNToOCRNEGBlKbsSt-bmwzoaO7bRGDAE"
              />

              {/* Floating Badge */}
              <div
                className={`absolute bottom-10 ${lang === 'ar' ? '-left-10' : '-right-10'} z-20 bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl border border-white/50 max-w-[240px] animate-float`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-icons-round text-3xl">
                      verified
                    </span>
                  </div>
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                      {lang === 'ar' ? 'جودة معتمدة' : 'Certified Quality'}
                    </h4>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">
                      {lang === 'ar' ? 'المعايير السعودية' : 'Saudi Standards'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
