'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Phone, WhatsappLogo, Clock, ShieldCheck, Truck } from '@phosphor-icons/react';

export default function ServicesHero() {
  const t = useTranslations('diensten.hero');

  const badges = [
    { icon: Clock, key: 'fast' },
    { icon: ShieldCheck, key: 'insured' },
    { icon: Truck, key: 'vehicles' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{t('highlight')}</span>
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b.key} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
                  <b.icon className="w-4 h-4 text-gray-500" weight="fill" />
                  {t(`badges.${b.key}`)}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:0612345678" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 font-black text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                {t('cta.call')}
              </a>
              <a 
                href="https://wa.me/31612345678" 
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-900 hover:border-gray-400 transition"
              >
                <WhatsappLogo className="w-5 h-5 text-green-600" />
                {t('cta.whatsapp')}
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/sleepdienstdirect.jpg"
                alt="Sleepdienst Direct"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              
              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-orange-600" weight="fill" />
                  <span className="text-sm font-black text-gray-900">100% Verzekerd</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}