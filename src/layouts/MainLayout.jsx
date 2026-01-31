import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCart from '../components/FloatingCart';
import { useLang } from '../context/LanguageContext';

export default function MainLayout() {
  const { lang } = useLang();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Header />
      <div className="pt-0">
        <Outlet />
      </div>
      <Footer />
      <FloatingCart />
    </div>
  );
}
