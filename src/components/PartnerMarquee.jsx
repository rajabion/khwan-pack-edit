import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';

const CLIENTS = [
  {
    id: 1,
    name: 'GLAZE',
    industryAr: 'قهوة مختصة / حلويات',
    industryEn: 'Specialty Coffee / Dessert',
    style: 'text-black font-serif',
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
    style: 'text-yellow-400 font-display',
    bgColor: 'bg-white',
  },
  {
    id: 8,
    name: 'XV CAFE',
    industryAr: 'كافيه',
    industryEn: 'Cafe',
    style: 'text-black font-serif tracking-[0.3em]',
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

  // Duplicate list for seamless loop
  const displayClients = [...CLIENTS, ...CLIENTS];

  return (
    <div className="py-20 bg-slate-50/50 border-y border-slate-100 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className={`flex flex-col ${lang === 'ar' ? 'items-end' : 'items-start'}`}
        >
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">
            {lang === 'ar' ? 'شركاء النجاح' : 'Partners in Success'}
          </span>
          <h3 className="text-3xl font-black text-slate-900 font-display">
            {lang === 'ar' ? 'عملاؤنا الذين نعتز بهم' : 'Brands That Trust Us'}
          </h3>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: lang === 'ar' ? [0, 1000] : [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: 'fit-content' }}
          drag="x"
          dragConstraints={{ left: -2000, right: 2000 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {displayClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className={`${client.bgColor} min-w-[280px] h-[160px] rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group/card`}
            >
              <span className={`text-2xl mb-2 tracking-tight ${client.style}`}>
                {client.name}
              </span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/card:text-primary transition-colors">
                {lang === 'ar' ? client.industryAr : client.industryEn}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fades for depth */}
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background-light to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background-light to-transparent z-10"></div>
    </div>
  );
}
