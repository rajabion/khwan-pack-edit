import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const CLIENTS = [
  {
    id: 1,
    name: 'GLAZE',
    industryAr: 'قهوة مختصة',
    industryEn: 'Specialty Coffee',
    style: 'text-slate-900 font-serif',
    bgColor: 'bg-white',
  },
  {
    id: 2,
    name: 'BLACK ROSE',
    industryAr: 'كافيه / لاونج',
    industryEn: 'Cafe / Lounge',
    style: 'text-[#D4AF37] font-display',
    bgColor: 'bg-slate-900',
  },
  {
    id: 3,
    name: 'Reefi Cafe',
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-[#C5A059] font-bold',
    bgColor: 'bg-white',
  },
  {
    id: 4,
    name: 'Attention',
    industryAr: 'مقهى',
    industryEn: 'Coffee Shop',
    style: 'text-red-600 font-black italic',
    bgColor: 'bg-white',
  },
  {
    id: 5,
    name: 'First Exit',
    industryAr: 'قهوة مختصة',
    industryEn: 'Specialty Coffee',
    style: 'text-blue-700 font-display italic',
    bgColor: 'bg-white',
  },
  {
    id: 6,
    name: 'Repose Cafe',
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-slate-800 font-display',
    bgColor: 'bg-slate-50',
  },
  {
    id: 7,
    name: "JOE'S CAFE",
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-yellow-500 font-display',
    bgColor: 'bg-white',
  },
  {
    id: 8,
    name: 'XV CAFE',
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-slate-900 font-serif tracking-[0.3em]',
    bgColor: 'bg-white',
  },
  {
    id: 9,
    name: 'Phi Boutique',
    industryAr: 'مطعم فاخر',
    industryEn: 'Fine Dining',
    style: 'text-[#D4AF37] font-serif',
    bgColor: 'bg-[#1A3020]',
  },
  {
    id: 10,
    name: 'VELOCE',
    industryAr: 'مشروبات',
    industryEn: 'Beverages',
    style: 'text-pink-500 font-black lowercase',
    bgColor: 'bg-white',
  },
  {
    id: 11,
    name: 'Galini Cafe',
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-slate-900 font-bold',
    bgColor: 'bg-pink-50',
  },
];

export default function PartnerMarquee() {
  const { lang } = useLang();

  // Create a very long list for seamlessness
  const displayClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div className="mt-32 relative">
      <div
        className={`mb-12 flex flex-col ${lang === 'ar' ? 'items-end' : 'items-start'}`}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="w-12 h-[2px] bg-primary"></span>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
            {lang === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </span>
        </div>
        <h3 className="text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
          {lang === 'ar' ? 'علامات تجارية تثق بنا' : 'Brands That Trust Us'}
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8 mask-fade-edges">
        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: lang === 'ar' ? [-2000, 0] : [0, -2000],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          drag="x"
          dragConstraints={{ left: -3000, right: 3000 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {displayClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className={`${client.bgColor} min-w-[260px] h-[140px] rounded-[32px] p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-slate-200/50 border border-slate-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group/card`}
            >
              <span
                className={`text-2xl mb-2 tracking-tight ${client.style} transition-transform duration-500 group-hover/card:scale-110`}
              >
                {client.name}
              </span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {lang === 'ar' ? client.industryAr : client.industryEn}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
