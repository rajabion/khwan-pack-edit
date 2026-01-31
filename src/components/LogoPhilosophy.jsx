import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function LogoPhilosophy() {
  const { lang } = useLang();

  const cards = [
    {
      icon: 'auto_awesome',
      color: 'bg-accent',
      iconColor: 'text-dark-grey',
      titleEn: 'Creative Solutions',
      titleAr: 'حلول إبداعية',
      descEn:
        'Innovative designs that translate brand values into visual reality.',
      descAr: 'تصاميم مبتكرة تترجم قيم العلامة التجارية إلى واقع بصري ملموس.',
      hoverBorder: 'hover:border-accent',
    },
    {
      icon: 'category',
      color: 'bg-primary',
      iconColor: 'text-white',
      titleEn: 'Smart Packaging',
      titleAr: 'تغليف ذكي',
      descEn:
        'Functional and aesthetic packaging tailored for your product needs.',
      descAr: 'تغليف وظيفي وجمالي مصمم خصيصاً ليتناسب مع احتياجات منتجك.',
      hoverBorder: 'hover:border-primary',
    },
    {
      icon: 'print',
      color: 'bg-secondary',
      iconColor: 'text-white',
      titleEn: 'High-End Printing',
      titleAr: 'طباعة فاخرة',
      descEn:
        'Utilizing the latest CMYK and Pantone technologies for precision.',
      descAr: 'نستخدم أحدث تقنيات CMYK وبانتون لضمان دقة الألوان والنتائج.',
      hoverBorder: 'hover:border-secondary',
    },
  ];

  return (
    <section className="py-24 bg-dark-grey text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary transform -skew-x-12 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div
            className={`col-span-1 ${lang === 'ar' ? 'border-r-4 pr-6 text-right' : 'border-l-4 pl-6 text-left'} border-primary`}
          >
            <h3 className="text-4xl font-bold mb-4 font-display leading-tight">
              {lang === 'ar' ? (
                <>
                  فلسفة
                  <br />
                  الشعار
                </>
              ) : (
                <>
                  Logo
                  <br />
                  Philosophy
                </>
              )}
            </h3>
            <p className="text-slate-400 text-sm font-arabic">
              {lang === 'ar'
                ? 'فلسفة الشعار وأبعاده الفنية'
                : 'Philosophy and artistic dimensions of the logo'}
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
                {lang === 'ar' ? card.titleAr : card.titleEn}
              </h4>
              <p
                className={`text-slate-400 text-sm leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}
              >
                {lang === 'ar' ? card.descAr : card.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
