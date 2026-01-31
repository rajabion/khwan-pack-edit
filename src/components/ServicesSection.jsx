import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function ServicesSection() {
  const { lang, t } = useLang();

  const cards = [
    {
      icon: 'auto_awesome',
      color: 'bg-accent',
      iconColor: 'text-dark-grey',
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
      icon: 'speed',
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
      className="py-24 bg-dark-grey text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary transform -skew-x-12 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div
            className={`col-span-1 ${lang === 'ar' ? 'border-r-4 pr-6 text-right' : 'border-l-4 pl-6 text-left'} border-primary`}
          >
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">
              {t('services.subtitle')}
            </h2>
            <h3 className="text-4xl font-bold mb-4 font-display leading-tight">
              {t('services.title')}
            </h3>
            <p className="text-slate-400 text-sm font-arabic">
              {lang === 'ar'
                ? 'حلول إبداعية متكاملة لتنمية علامتك التجارية'
                : 'Integrated creative solutions to grow your brand'}
            </p>
          </div>

          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white/5 p-8 rounded border border-white/10 ${card.hoverBorder} transition-all duration-300 group hover:-translate-y-2`}
            >
              <div
                className={`w-14 h-14 ${card.color} flex items-center justify-center rounded-lg mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <span className={`material-icons ${card.iconColor} text-2xl`}>
                  {card.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-display">
                {card.title}
              </h4>
              <p
                className={`text-slate-400 text-sm leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}
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
