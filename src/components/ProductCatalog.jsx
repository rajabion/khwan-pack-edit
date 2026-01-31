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
    <section
      id="catalog"
      className="py-20 bg-background-light dark:bg-background-dark min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h2 className="text-4xl font-display font-black text-slate-900 dark:text-white mb-2">
              {t('catalog.title')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-arabic">
              {t('catalog.subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 sticky top-24">
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>{' '}
                {lang === 'ar' ? 'الأقسام' : 'Categories'}
              </h3>
              <div className="space-y-2">
                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl font-bold transition-all flex justify-between items-center ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
                    <span
                      className={`text-xs ${activeCategory === cat.id ? 'opacity-100' : 'opacity-50'}`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProducts.map(product => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 group"
                  >
                    <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 p-10 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-primary border border-primary/20">
                        {product.sizes[0]}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="font-display font-bold text-xl mb-2 text-slate-900 dark:text-white">
                        {lang === 'ar' ? product.name : product.nameEn}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                          High Quality
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`flex items-center justify-center p-3 rounded-2xl transition-all ${
                            addedItems[product.id]
                              ? 'bg-green-500 text-white'
                              : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white'
                          }`}
                        >
                          {addedItems[product.id] ? (
                            <span className="material-icons text-xl">
                              check
                            </span>
                          ) : (
                            <span className="material-icons-round text-xl">
                              add_shopping_cart
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
