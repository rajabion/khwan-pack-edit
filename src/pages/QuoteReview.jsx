import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LanguageContext';
import { Trash2, Send, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuoteReview() {
  const { cart, removeFromCart, clearCart, cartCount } = useCart();
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    whatsapp: '',
    email: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate form submission
    console.log('Submitting Quote Request:', { user: formData, items: cart });
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-background-light">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[50px] shadow-2xl border border-green-100 max-w-2xl"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 font-display">
            {t('review.success_title')}
          </h2>
          <p
            className="text-xl text-slate-500 mb-10 leading-relaxed font-arabic"
            dangerouslySetInnerHTML={{ __html: t('review.success_desc') }}
          />
          <Link
            to="/"
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl active:scale-95"
          >
            {t('review.back_home')}{' '}
            <ChevronRight
              size={20}
              className={lang === 'ar' ? '' : 'rotate-180'}
            />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background-light min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`mb-16 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-5xl font-black font-display text-slate-900 mb-4 uppercase tracking-tighter">
            {lang === 'ar' ? 'مراجعة طلب التسعير' : 'Quote Review'}
          </h1>
          <div className="w-24 h-2 bg-primary rounded-full inline-block"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Selected Items List */}
          <div className="lg:w-3/5 order-1">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-50 min-h-[400px]">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 font-display uppercase tracking-tight">
                  {t('review.cart_title')}{' '}
                  <span className="text-primary ml-2">({cartCount})</span>
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-50 px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Trash2 size={14} /> {t('review.clear_cart')}
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <span className="material-icons-round text-6xl mb-6 opacity-20">
                    shopping_basket
                  </span>
                  <p className="font-black text-xs uppercase tracking-widest mb-6">
                    {t('review.empty_cart')}
                  </p>
                  <Link
                    to="/"
                    className="px-8 py-4 bg-primary text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:-translate-y-1 transition-all"
                  >
                    {lang === 'ar' ? 'العودة للكتالوج' : 'Back to Catalog'}
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => {
                    const uniqueKey = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
                    return (
                      <div
                        key={uniqueKey}
                        className="flex items-center gap-8 p-6 bg-slate-50 rounded-[32px] border border-slate-100 group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100"
                      >
                        <div className="w-24 h-24 bg-white rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-50 p-4">
                          <img
                            src={item.image}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            alt={item.name}
                          />
                        </div>
                        <div
                          className={`flex-grow ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                        >
                          <h4 className="font-black text-slate-900 text-xl leading-tight mb-2 uppercase tracking-tight">
                            {lang === 'ar' ? item.name : item.nameEn}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.selectedSize && (
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                                {item.selectedSize}
                              </span>
                            )}
                            {item.selectedColor && (
                              <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                                {item.selectedColor}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                            <span className="text-secondary">
                              {item.quantity.toLocaleString()}
                            </span>
                            <span>{lang === 'ar' ? 'قطعة' : 'Units'}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(uniqueKey)}
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    );
                  })}

                  <div
                    className={`mt-12 pt-8 border-t border-slate-100 ${lang === 'ar' ? 'text-right font-arabic' : 'text-left'}`}
                  >
                    <p className="text-slate-400 text-xs leading-relaxed italic">
                      {t('review.note')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:w-2/5 order-2">
            <div className="bg-slate-900 p-12 rounded-[40px] shadow-2xl border border-white/5 relative overflow-hidden group">
              {/* Background Decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>

              <h2 className="text-3xl font-black mb-10 text-white font-display uppercase tracking-tight relative z-10">
                {t('review.contact_title')}
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-8 relative z-10"
                name="quote-request"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="quote-request" />
                <input
                  type="hidden"
                  name="cart-json"
                  value={JSON.stringify(cart)}
                />

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    {t('review.name_label')}
                  </label>
                  <input
                    required
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    placeholder={t('review.name_placeholder')}
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    {t('review.business_label')}
                  </label>
                  <input
                    required
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    placeholder={t('review.business_placeholder')}
                    value={formData.business}
                    onChange={e =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      {t('review.phone_label')}
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                      placeholder="05xxxxxxx"
                      value={formData.whatsapp}
                      onChange={e =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      {t('review.email_label')}
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={cartCount === 0}
                  className="w-full py-6 bg-white text-slate-900 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-primary hover:text-white active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-30 disabled:pointer-events-none"
                >
                  {t('review.submit_btn')}{' '}
                  <Send
                    size={18}
                    className={lang === 'ar' ? '' : 'rotate-180'}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
