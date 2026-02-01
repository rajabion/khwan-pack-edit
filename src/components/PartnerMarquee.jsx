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

  // Duplicate list once for perfect 0 to -50% loop
  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <div className="mt-20 pt-16 border-t border-slate-100">
      <div
        className={`mb-8 flex flex-col ${lang === 'ar' ? 'items-end' : 'items-start'}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
            {lang === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
          </span>
        </div>
        <h3 className="text-xl font-black text-slate-400 font-display uppercase tracking-wider">
          {lang === 'ar'
            ? 'العلامات التجارية التي نخدمها'
            : 'Trusted by Leading Brands'}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden mask-fade-edges py-4">
        <motion.div
          className="flex gap-6"
          animate={{
            x: lang === 'ar' ? ['-50%', '0%'] : ['0%', '-50%'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: 'max-content' }}
          drag="x"
          dragConstraints={{ left: -2000, right: 2000 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {displayClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className={`${client.bgColor} min-w-[220px] h-[100px] rounded-[24px] p-6 flex flex-col justify-center items-center text-center shadow-sm border border-slate-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group/card`}
            >
              <span
                className={`text-lg mb-1 tracking-tight ${client.style} transition-transform duration-500 group-hover/card:scale-105`}
              >
                {client.name}
              </span>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {lang === 'ar' ? client.industryAr : client.industryEn}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
