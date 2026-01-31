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
      icon: 'speed',
    },
    {
      id: 3,
      title: t('values.v3_title'),
      desc: t('values.v3_desc'),
      color: 'bg-accent',
      icon: 'palette',
    },
    {
      id: 4,
      title: t('values.v4_title'),
      desc: t('values.v4_desc'),
      color: 'bg-orange',
      icon: 'lightbulb',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {values.map(value => (
          <div
            key={value.id}
            className={`flex-1 ${value.color} p-12 text-white min-h-[300px] flex flex-col justify-between transition-all duration-500 hover:flex-[1.5] group cursor-default`}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">{value.icon}</span>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 font-display uppercase tracking-tight">
                {value.title}
              </h3>
              <p className="text-white/80 font-arabic text-sm leading-relaxed max-w-xs">
                {value.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
