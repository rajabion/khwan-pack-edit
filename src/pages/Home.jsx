import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ConfiguratorSection from '../components/ConfiguratorSection';
import ProductCatalog from '../components/ProductCatalog';
import ContactSection from '../components/ContactSection';
import BrandValuesSection from '../components/BrandValuesSection';
import { useLang } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLang();

  return (
    <main className="bg-background-light overflow-x-hidden">
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <section id="custom" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full brand-pattern opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div
              className={`max-w-2xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">
                {t('configurator.preview_label')}
              </h2>
              <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 mb-4">
                {t('configurator.title')}
              </h2>
              <p className="text-lg text-slate-600 font-arabic leading-relaxed">
                {t('configurator.desc')}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[40px] p-1 md:p-8 shadow-inner border border-slate-200">
            <Suspense
              fallback={
                <div className="h-[600px] w-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              }
            >
              <ConfiguratorSection />
            </Suspense>
          </div>
        </div>
      </section>

      <ProductCatalog />

      <ContactSection />

      <BrandValuesSection />
    </main>
  );
}
