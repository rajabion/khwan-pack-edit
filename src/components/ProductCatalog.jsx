import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../assets/products';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LanguageContext';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('hot_cups');
  const [addedItems, setAddedItems] = useState({});
  const [selections, setSelections] = useState({}); // Track {productId: {size, color}}

  const { addToCart } = useCart();
  const { lang, t } = useLang();

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = product => {
    const productSelection = selections[product.id] || {};
    // Smart default: take the first available option if none selected
    const selectedSize =
      productSelection.size ||
      (product.options.sizes ? product.options.sizes[0] : null);
    const selectedColor =
      productSelection.color ||
      (product.options.colors ? product.options.colors[0] : null);

    const itemToAdd = {
      ...product,
      selectedSize,
      selectedColor,
      displayOptions: [selectedSize, selectedColor].filter(Boolean).join(' / '),
    };

    addToCart(itemToAdd, 1);

    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const updateSelection = (productId, type, value) => {
    setSelections(prev => ({
      ...prev,
      [productId]: {
        ...(prev[productId] || {}),
        [type]: value,
      },
    }));
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

                      {/* Selection Summary Badge */}
                      <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                        {product.options.sizes && (
                          <div className="bg-white shadow-lg px-3 py-1.5 rounded-xl text-[9px] font-black tracking-widest text-primary border border-slate-100 uppercase">
                            {selections[product.id]?.size ||
                              product.options.sizes[0]}
                          </div>
                        )}
                        {product.options.colors && (
                          <div className="bg-slate-900 shadow-lg px-3 py-1.5 rounded-xl text-[9px] font-black tracking-widest text-white border border-white/10 uppercase">
                            {selections[product.id]?.color ||
                              product.options.colors[0]}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-10">
                      <h3 className="font-display font-black text-2xl mb-3 text-slate-900 leading-tight">
                        {lang === 'ar' ? product.name : product.nameEn}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                        {lang === 'ar'
                          ? product.description
                          : product.descriptionEn}
                      </p>

                      {/* Smart Options Selection */}
                      <div className="space-y-4 mb-8">
                        {product.options.sizes && (
                          <div className="flex flex-wrap gap-2">
                            {product.options.sizes.map(size => (
                              <button
                                key={size}
                                onClick={() =>
                                  updateSelection(product.id, 'size', size)
                                }
                                className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${selections[product.id]?.size === size || (!selections[product.id]?.size && product.options.sizes[0] === size) ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        )}

                        {product.options.colors && (
                          <div className="flex flex-wrap gap-2">
                            {product.options.colors.map(color => (
                              <button
                                key={color}
                                onClick={() =>
                                  updateSelection(product.id, 'color', color)
                                }
                                className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${selections[product.id]?.color === color || (!selections[product.id]?.color && product.options.colors[0] === color) ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                              >
                                {color}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                            {lang === 'ar' ? 'الجودة' : 'Material'}
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            {lang === 'ar' ? 'نخب أول' : 'High Grade'}
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
