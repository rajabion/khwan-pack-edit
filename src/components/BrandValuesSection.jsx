import React from 'react';
import { useLang } from '../context/LanguageContext';

export default function BrandValuesSection() {
  const { t } = useLang();

  const values = [
    {
      id: 1,
      title: t('values.v1_title'),
      desc: t('values.v1_desc'),
      color: 'bg-primary',
      icon: 'verified',
    },
    {
      id: 2,
      title: t('values.v2_title'),
      desc: t('values.v2_desc'),
      color: 'bg-secondary',
      icon: 'bolt',
    },
    {
      id: 3,
      title: t('values.v3_title'),
      desc: t('values.v3_desc'),
      color: 'bg-accent',
      icon: 'auto_awesome',
    },
    {
      id: 4,
      title: t('values.v4_title'),
      desc: t('values.v4_desc'),
      color: 'bg-orange',
      icon: 'tips_and_updates',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {values.map(value => (
          <div
            key={value.id}
            className={`flex-1 ${value.color} p-16 text-white min-h-[400px] flex flex-col justify-between transition-all duration-700 hover:flex-[1.8] group cursor-default relative overflow-hidden`}
          >
            {/* Background Decoration */}
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-150 transition-transform duration-1000">
              <span className="material-icons-round text-[200px]">
                {value.icon}
              </span>
            </div>

            <div className="w-20 h-20 bg-white/20 rounded-[32px] flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 backdrop-blur-md border border-white/10 relative z-10">
              <span className="material-icons-round text-4xl">
                {value.icon}
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 font-display uppercase tracking-tight leading-none">
                {value.title}
              </h3>
              <p className="text-white/90 font-arabic text-lg leading-relaxed max-w-xs font-medium">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
