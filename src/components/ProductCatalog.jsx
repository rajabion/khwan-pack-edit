import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../assets/products';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LanguageContext';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('cups');
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();
  const { lang, t } = useLang();

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = product => {
    const size = product.sizes[0];
    addToCart({ ...product, selectedSize: size }, 1);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="catalog" className="py-32 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <div className="inline-block mb-4">
              <span className="text-xs font-black text-secondary uppercase tracking-[0.3em] bg-secondary/5 px-4 py-2 rounded-full">
                {lang === 'ar' ? 'اختر وتخير' : 'Premium Selection'}
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black font-display text-slate-900 mb-4">
              {t('catalog.title')}
            </h2>
            <p className="text-slate-500 font-arabic text-xl font-medium">
              {t('catalog.subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <aside className="w-full lg:w-72 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-28">
              <h3 className="font-display font-black text-xl mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>{' '}
                {lang === 'ar' ? 'الأقسام' : 'Categories'}
              </h3>
              <div className="space-y-3">
                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex justify-between items-center group ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-[1.02]'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] transition-colors ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}
                    >
                      {PRODUCTS.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
              <AnimatePresence mode="wait">
                {filteredProducts.map(product => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-[40px] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-50 group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="aspect-[4/5] bg-slate-50 p-12 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 bg-white shadow-xl px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest text-primary border border-slate-100 uppercase">
                        {product.sizes[0]}
                      </div>
                    </div>

                    <div className="p-10">
                      <h3 className="font-display font-black text-2xl mb-3 text-slate-900 leading-tight">
                        {lang === 'ar' ? product.name : product.nameEn}
                      </h3>
                      <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                            Material
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            High Grade
                          </span>
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 shadow-xl ${
                            addedItems[product.id]
                              ? 'bg-green-500 text-white shadow-green-200'
                              : 'bg-slate-900 text-white hover:bg-primary shadow-slate-200'
                          }`}
                        >
                          {addedItems[product.id] ? (
                            <span className="material-icons-round text-2xl">
                              done_all
                            </span>
                          ) : (
                            <span className="material-icons-round text-2xl">
                              shopping_cart
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
