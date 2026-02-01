import React from 'react';
import { useLang } from '../context/LanguageContext';

const CLIENTS = [
  {
    id: 1,
    name: 'GLAZE',
    color: 'group-hover:text-black',
    brandColor: 'bg-black',
  },
  {
    id: 2,
    name: 'BLACK ROSE',
    color: 'group-hover:text-[#D4AF37]',
    brandColor: 'bg-[#D4AF37]',
  },
  {
    id: 3,
    name: 'REEFI CAFE',
    color: 'group-hover:text-[#C5A059]',
    brandColor: 'bg-[#C5A059]',
  },
  {
    id: 4,
    name: 'ATTENTION',
    color: 'group-hover:text-red-600',
    brandColor: 'bg-red-600',
  },
  {
    id: 5,
    name: 'FIRST EXIT',
    color: 'group-hover:text-blue-700',
    brandColor: 'bg-blue-700',
  },
  {
    id: 6,
    name: 'REPOSE',
    color: 'group-hover:text-slate-800',
    brandColor: 'bg-slate-800',
  },
  {
    id: 7,
    name: "JOE'S CAFE",
    color: 'group-hover:text-yellow-500',
    brandColor: 'bg-yellow-500',
  },
  {
    id: 8,
    name: 'XV CAFE',
    color: 'group-hover:text-black',
    brandColor: 'bg-black',
  },
  {
    id: 9,
    name: 'PHI BOUTIQUE',
    color: 'group-hover:text-[#D4AF37]',
    brandColor: 'bg-[#1A3020]',
  },
  {
    id: 10,
    name: 'VELOCE',
    color: 'group-hover:text-pink-500',
    brandColor: 'bg-pink-500',
  },
  {
    id: 11,
    name: 'GALINI',
    color: 'group-hover:text-slate-900',
    brandColor: 'bg-pink-500',
  },
];

export default function PartnerMarquee() {
  const { lang } = useLang();

  // Duplicate list for perfect wrap-around
  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <div className="mt-32 relative">
      <div
        className={`flex flex-col mb-12 ${lang === 'ar' ? 'items-end' : 'items-start'}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="w-10 h-[1px] bg-primary"></span>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
            {lang === 'ar' ? 'قصص نجاح' : 'Success Stories'}
          </span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 font-display uppercase tracking-tight">
          {lang === 'ar'
            ? 'العلامات التجارية التي تثق بنا'
            : 'Brands we have empowered'}
        </h3>
      </div>

      {/* The "Senior" Marquee: Constrained, Monochrome, Interactive */}
      <div className="relative w-full mask-marquee overflow-hidden py-4">
        <div
          className={`flex w-max pause-on-hover ${lang === 'ar' ? 'animate-scroll-rtl' : 'animate-scroll'}`}
        >
          {displayClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex flex-col items-center justify-center px-12 group cursor-pointer"
            >
              {/* Logo / Text Mark */}
              <span
                className={`text-2xl font-black font-display tracking-tighter text-slate-300 transition-all duration-500 ${client.color} group-hover:scale-110`}
              >
                {client.name}
              </span>

              {/* Subtle Indicator */}
              <div
                className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${client.brandColor} mt-2 rounded-full opacity-50`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Context */}
      <div
        className={`mt-8 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}
      >
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-l border-slate-200 pl-4">
          {lang === 'ar'
            ? 'أكثر من ١١ علامة تجارية رائدة'
            : 'Over 11 Industry Leaders'}
        </p>
      </div>
    </div>
  );
}
