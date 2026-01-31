import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div
        className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-1/3 h-full bg-primary/5 ${lang === 'ar' ? '-skew-x-12 transform origin-top-left' : '-skew-x-12 transform origin-top-right'}`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full brand-pattern opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${lang === 'ar' ? 'order-2 lg:order-1' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
              <span className="material-icons text-sm">
                precision_manufacturing
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                {lang === 'ar'
                  ? 'الهوية البصرية والتغليف الصناعي'
                  : 'Visual Identity & Industrial Packaging'}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1]">
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
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-arabic leading-relaxed"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById('catalog')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-primary text-white font-bold rounded shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all active:scale-95"
              >
                {t('hero.cta_primary')}
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                {t('hero.cta_secondary')}
              </button>
            </div>
          </div>

          <div
            className={`relative ${lang === 'ar' ? 'order-1 lg:order-2' : ''}`}
          >
            <div className="relative aspect-square">
              <img
                alt="Branded packaging mockup"
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBr58f3Ywt4JLpSKBoQPr5i9xb-vQV_fyVF8U84LfUl8v3keheemAYmJFe2N58R5CFn5o5n3Q8AGu2pJmqSKcUysXod2k6vQSc4EZ_g0aZ-bZOHBztqsxKGnmJggZwBfpRfDNsbE4lhu6bXtutq62GFEZqSkWP9z_DBwOwcfe6_PZM4iv8Qmg_OYnQ1CcP8sKmhoz8jVTpOM0xMXPm3uXyBTCe6sUqMq4ZUPR2kBuvVnsyNToOCRNEGBlKbsSt-bmwzoaO7bRGDAE"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white">
                      branding_watermark
                    </span>
                  </div>
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h4 className="font-bold text-white">
                      {lang === 'ar'
                        ? 'الهوية البصرية'
                        : 'Logo Visual Identity'}
                    </h4>
                    <p className="text-white/70 text-xs">
                      {lang === 'ar'
                        ? 'معايير التميز'
                        : 'Standard of Excellence'}
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
