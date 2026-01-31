import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function ServicesSection() {
  const { lang, t } = useLang();

  const cards = [
    {
      icon: 'auto_awesome',
      color: 'bg-accent',
      iconColor: 'text-slate-900',
      title: t('services.s1_title'),
      desc: t('services.s1_desc'),
      hoverBorder: 'hover:border-accent',
    },
    {
      icon: 'print',
      color: 'bg-primary',
      iconColor: 'text-white',
      title: t('services.s2_title'),
      desc: t('services.s2_desc'),
      hoverBorder: 'hover:border-primary',
    },
    {
      icon: 'bolt',
      color: 'bg-secondary',
      iconColor: 'text-white',
      title: t('services.s3_title'),
      desc: t('services.s3_desc'),
      hoverBorder: 'hover:border-secondary',
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-dark-grey text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary transform -skew-x-12 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          <div
            className={`col-span-1 ${lang === 'ar' ? 'border-r-8 pr-10 text-right' : 'border-l-8 pl-10 text-left'} border-primary flex flex-col justify-center`}
          >
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">
              {t('services.subtitle')}
            </h2>
            <h3 className="text-5xl font-black font-display leading-tight mb-6">
              {t('services.title')}
            </h3>
            <p className="text-slate-400 text-sm font-arabic leading-relaxed font-medium">
              {lang === 'ar'
                ? 'حلول إبداعية متكاملة لتنمية علامتك التجارية وتغليف منتجاتك بأعلى المعايير.'
                : 'Integrated creative solutions to grow your brand and package your products with the highest standards.'}
            </p>
          </div>

          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white/5 p-12 rounded-[40px] border border-white/10 ${card.hoverBorder} transition-all duration-500 group hover:-translate-y-4 hover:bg-white/10`}
            >
              <div
                className={`w-20 h-20 ${card.color} flex items-center justify-center rounded-3xl mb-10 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <span
                  className={`material-icons-round ${card.iconColor} text-4xl`}
                >
                  {card.icon}
                </span>
              </div>
              <h4 className="text-2xl font-black mb-4 font-display uppercase tracking-tight">
                {card.title}
              </h4>
              <p
                className={`text-slate-400 text-lg leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''} font-medium`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
