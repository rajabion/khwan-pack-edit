import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { getCalApi } from '@calcom/embed-react';

export default function ContactSection() {
  const { lang, t } = useLang();
  const [selectedOption, setSelectedOption] = useState('none');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: {
          branding: {
            brandColor: '#D82D64',
          },
        },
      });
    })();
  }, []);

  const eventTypes = [
    {
      id: 'intro',
      title: lang === 'ar' ? 'لقاء تعارفي' : 'Intro Call',
      slug: '15min',
      desc:
        lang === 'ar'
          ? 'مكالمة سريعة لمدة ١٥ دقيقة لنعرف كيف نخدمك.'
          : 'A quick 15-min call to see how we can help.',
    },
    {
      id: 'discovery',
      title: lang === 'ar' ? 'جلسة استشارية' : 'Discovery Session',
      slug: '30min',
      desc:
        lang === 'ar'
          ? 'جلسة تفصيلية لمدة ٣٠ دقيقة لمناقشة هويتك وتغليفك.'
          : 'A detailed 30-min session to discuss your identity.',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full brand-pattern opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl min-h-[600px] flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-4 font-display">
                {t('contact.info')}
              </h2>
              <p className="text-white/80 font-arabic mb-12">
                {t('booking.subtitle')}
              </p>

              <div className="space-y-8">
                <div
                  className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">phone</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="font-bold">+966 50 000 0000</p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">email</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Email
                    </p>
                    <p className="font-bold">hello@khwanpack.com</p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-4 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                      Location
                    </p>
                    <p className="font-bold">{t('footer.location')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex gap-4 mt-12 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>

          {/* Flow Side */}
          <div className="flex-1 p-12 bg-slate-900 text-white relative">
            <AnimatePresence mode="wait">
              {selectedOption === 'none' && (
                <motion.div
                  key="selection"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col"
                >
                  <h2 className="text-4xl font-black mb-4 font-display">
                    {t('booking.title')}
                  </h2>
                  <p className="text-slate-400 font-arabic mb-12 leading-relaxed max-w-xl">
                    {t('booking.desc')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 flex-1">
                    {/* Option 1: Direct */}
                    <div
                      onClick={() => setSelectedOption('direct')}
                      className="group bg-slate-800 p-8 rounded-[32px] border-2 border-transparent hover:border-primary transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <span className="material-icons text-3xl">
                            calendar_today
                          </span>
                        </div>
                        <h3 className="text-xl font-black mb-2">
                          {t('booking.direct_title')}
                        </h3>
                        <p className="text-slate-400 text-sm font-arabic">
                          {t('booking.direct_desc')}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center text-primary font-bold gap-2">
                        <span>{t('booking.direct_btn')}</span>
                        <span className="material-icons">chevron_right</span>
                      </div>
                    </div>

                    {/* Option 2: Discuss */}
                    <div
                      onClick={() => setSelectedOption('discuss')}
                      className="group bg-slate-800 p-8 rounded-[32px] border-2 border-transparent hover:border-secondary transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <span className="material-icons text-3xl">
                            chat_bubble
                          </span>
                        </div>
                        <h3 className="text-xl font-black mb-2">
                          {t('booking.discuss_title')}
                        </h3>
                        <p className="text-slate-400 text-sm font-arabic">
                          {t('booking.discuss_desc')}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center text-secondary font-bold gap-2">
                        <span>{t('booking.discuss_btn')}</span>
                        <span className="material-icons">chevron_right</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedOption === 'direct' && (
                <motion.div
                  key="direct"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button
                    onClick={() => setSelectedOption('none')}
                    className="flex items-center gap-2 text-primary font-bold mb-8 hover:opacity-70 transition-opacity"
                  >
                    <span className="material-icons">arrow_back</span>
                    {t('booking.back')}
                  </button>

                  <h3 className="text-3xl font-black mb-2">
                    {t('booking.select_event')}
                  </h3>
                  <p className="text-slate-400 font-arabic mb-8">
                    {t('booking.event_desc')}
                  </p>

                  <div className="grid gap-4">
                    {eventTypes.map(event => (
                      <button
                        key={event.id}
                        data-cal-link={`rajabion/${event.slug}`}
                        className="bg-slate-800 p-6 rounded-2xl text-right flex flex-row-reverse items-center justify-between border-2 border-transparent hover:border-primary transition-all group"
                      >
                        <div className="text-right">
                          <h4 className="font-black text-lg mb-1">
                            {event.title}
                          </h4>
                          <p className="text-slate-400 text-xs">{event.desc}</p>
                        </div>
                        <span className="material-icons text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          event_available
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedOption === 'discuss' && (
                <motion.div
                  key="discuss"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button
                    onClick={() => setSelectedOption('none')}
                    className="flex items-center gap-2 text-secondary font-bold mb-8 hover:opacity-70 transition-opacity"
                  >
                    <span className="material-icons">arrow_back</span>
                    {t('booking.back')}
                  </button>

                  <h3 className="text-3xl font-black mb-8">
                    {t('contact.title')}
                  </h3>

                  <form
                    name="contact-discuss"
                    method="POST"
                    data-netlify="true"
                    className="space-y-4"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-discuss"
                    />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{' '}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {t('contact.name')}
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                          {t('contact.email')}
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        {t('contact.message')}
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all text-white"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-xl"
                    >
                      {t('contact.send')}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
