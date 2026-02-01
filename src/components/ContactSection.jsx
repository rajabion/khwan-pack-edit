import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { getCalApi } from '@calcom/embed-react';

export default function ContactSection() {
  const { lang, t } = useLang();
  const [selectedOption, setSelectedOption] = useState('none');
  const [submitted, setSubmitted] = useState(false);

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

  const handleFormSubmit = e => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(error => alert(error));
  };

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
          <div className="lg:w-1/3 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4 font-display uppercase tracking-tight">
                {t('contact.info')}
              </h2>
              <p className="text-white/80 font-arabic mb-12 leading-relaxed">
                {t('booking.subtitle')}
              </p>

              <div className="space-y-8">
                <div
                  className={`flex items-center gap-5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10">
                    <span className="material-icons-round">phone</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="font-black tracking-wider">
                      +966 54 662 2266
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10">
                    <span className="material-icons-round">email</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="font-black">hello@khwanpack.com</p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-5 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10">
                    <span className="material-icons-round">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="font-black font-arabic text-sm">
                      {t('footer.location')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex gap-4 mt-12 relative z-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all active:scale-90 border border-white/5"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all active:scale-90 border border-white/5"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Flow Side */}
          <div className="flex-1 p-12 bg-slate-900 text-white relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-24 h-24 bg-primary/20 text-primary rounded-[32px] flex items-center justify-center mb-8 shadow-2xl animate-bounce">
                    <span className="material-icons-round text-5xl">
                      auto_awesome
                    </span>
                  </div>
                  <h2 className="text-4xl font-black mb-6 font-display uppercase tracking-tight">
                    {t('contact.success_title')}
                  </h2>
                  <p
                    className="text-slate-400 font-arabic text-xl leading-relaxed max-w-lg mb-10"
                    dangerouslySetInnerHTML={{
                      __html: t('contact.success_desc'),
                    }}
                  />
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedOption('none');
                    }}
                    className="px-10 py-5 bg-white text-slate-900 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95"
                  >
                    {lang === 'ar'
                      ? 'إرسال رسالة أخرى'
                      : 'Send another message'}
                  </button>
                </motion.div>
              ) : selectedOption === 'none' ? (
                <motion.div
                  key="selection"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col"
                >
                  <h2 className="text-4xl font-black mb-4 font-display uppercase tracking-tight">
                    {t('booking.title')}
                  </h2>
                  <p className="text-slate-400 font-arabic text-lg mb-12 leading-relaxed max-w-xl font-medium">
                    {t('booking.desc')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 flex-1">
                    {/* Option 1: Direct */}
                    <div
                      onClick={() => setSelectedOption('direct')}
                      className="group bg-slate-800/50 p-10 rounded-[40px] border border-white/5 hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col justify-between hover:bg-slate-800 hover:-translate-y-2 shadow-xl"
                    >
                      <div>
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          <span className="material-icons-round text-3xl">
                            calendar_today
                          </span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 font-display uppercase tracking-tight">
                          {t('booking.direct_title')}
                        </h3>
                        <p className="text-slate-400 text-sm font-arabic leading-relaxed">
                          {t('booking.direct_desc')}
                        </p>
                      </div>
                      <div className="mt-10 flex items-center text-primary font-black text-[10px] uppercase tracking-[0.2em] gap-3">
                        <span>{t('booking.direct_btn')}</span>
                        <span className="material-icons-round text-sm">
                          arrow_forward
                        </span>
                      </div>
                    </div>

                    {/* Option 2: Discuss */}
                    <div
                      onClick={() => setSelectedOption('discuss')}
                      className="group bg-slate-800/50 p-10 rounded-[40px] border border-white/5 hover:border-secondary/50 transition-all duration-500 cursor-pointer flex flex-col justify-between hover:bg-slate-800 hover:-translate-y-2 shadow-xl"
                    >
                      <div>
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-[24px] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                          <span className="material-icons-round text-3xl">
                            chat_bubble
                          </span>
                        </div>
                        <h3 className="text-2xl font-black mb-3 font-display uppercase tracking-tight">
                          {t('booking.discuss_title')}
                        </h3>
                        <p className="text-slate-400 text-sm font-arabic leading-relaxed">
                          {t('booking.discuss_desc')}
                        </p>
                      </div>
                      <div className="mt-10 flex items-center text-secondary font-black text-[10px] uppercase tracking-[0.2em] gap-3">
                        <span>{t('booking.discuss_btn')}</span>
                        <span className="material-icons-round text-sm">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : selectedOption === 'direct' ? (
                <motion.div
                  key="direct"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button
                    onClick={() => setSelectedOption('none')}
                    className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-10 hover:opacity-70 transition-opacity"
                  >
                    <span className="material-icons-round text-lg">
                      arrow_back
                    </span>
                    {t('booking.back')}
                  </button>

                  <h3 className="text-4xl font-black mb-3 font-display uppercase tracking-tight">
                    {t('booking.select_event')}
                  </h3>
                  <p className="text-slate-400 font-arabic text-lg mb-10 leading-relaxed">
                    {t('booking.event_desc')}
                  </p>

                  <div className="grid gap-6">
                    {eventTypes.map(event => (
                      <button
                        key={event.id}
                        data-cal-link={`rajabion/${event.slug}`}
                        className={`bg-slate-800/50 p-8 rounded-[32px] border border-white/5 transition-all duration-500 hover:bg-slate-800 hover:border-primary group flex ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center justify-between shadow-xl`}
                      >
                        <div
                          className={lang === 'ar' ? 'text-right' : 'text-left'}
                        >
                          <h4 className="font-black text-xl mb-2 font-display uppercase tracking-tight group-hover:text-primary transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-slate-400 text-sm font-arabic font-medium">
                            {event.desc}
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <span className="material-icons-round">
                            event_available
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="discuss"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button
                    onClick={() => setSelectedOption('none')}
                    className="flex items-center gap-3 text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-10 hover:opacity-70 transition-opacity"
                  >
                    <span className="material-icons-round text-lg">
                      arrow_back
                    </span>
                    {t('booking.back')}
                  </button>

                  <h3 className="text-4xl font-black mb-10 font-display uppercase tracking-tight">
                    {t('contact.title')}
                  </h3>

                  <form
                    name="contact-discuss"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleFormSubmit}
                    className="space-y-8"
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
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                          {t('contact.name')}
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] p-5 focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-white/10"
                          placeholder={t('review.name_placeholder')}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                          {t('contact.email')}
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] p-5 focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-white/10"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        {t('contact.message')}
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-[20px] p-5 focus:ring-2 focus:ring-primary transition-all text-white placeholder:text-white/10"
                        placeholder="..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-6 bg-white text-slate-900 font-black text-xs uppercase tracking-[0.3em] rounded-[24px] hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-2xl shadow-black/50"
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
