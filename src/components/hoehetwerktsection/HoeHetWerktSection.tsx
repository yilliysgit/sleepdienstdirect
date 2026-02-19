'use client';

import { Phone, MapPin, Truck, CheckCircle, ArrowRight, Clock } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HoeHetWerktSection() {
const t = useTranslations('home.hoeHetWerkt');

  const stappen = [
    {
      stap: '01',
      icon: Phone,
      id: 'bellen'
    },
    {
      stap: '02',
      icon: MapPin,
      id: 'locatie'
    },
    {
      stap: '03',
      icon: Truck,
      id: 'slepen'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 md:py-32">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff6b1e_1px,transparent_1px),linear-gradient(to_bottom,#ff6b1e_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 border border-orange-200 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <Clock weight="fill" className="w-4 h-4" /> 
            {t('badge')}
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight mb-6">
            {t('title.line1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500">
              {t('title.line2')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stappen Grid */}
        <div className="relative mb-20">
          
          {/* Connecting line - alleen desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-[2px]">
            <div className="relative max-w-5xl mx-auto px-8">
              <div className="h-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {stappen.map((stap, i) => (
              <motion.div
                key={stap.stap}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 border border-gray-100">
                  
                  {/* Decorative number */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 rotate-3 hover:rotate-6 transition-transform">
                    <span className="text-2xl font-black text-white">{stap.stap}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl relative z-10">
                      <stap.icon weight="duotone" className="w-8 h-8 text-orange-600" />
                    </div>
                    {/* Subtle glow behind icon */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-orange-400 opacity-20 blur-xl rounded-full" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight">
                    {t(`stappen.${stap.id}.title`)}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4 opacity-80">
                    {t(`stappen.${stap.id}.subtitle`)}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`stappen.${stap.id}.description`)}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-gray-700">
                          {t(`stappen.${stap.id}.features.${idx}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section - Premium White Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-gray-200 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />
            
            {/* Decorative corner gradients */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side - Text & Stats */}
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                    {t('cta.title.line1')}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      {t('cta.title.line2')}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {t('cta.subtitle')}
                  </p>

                  {/* Stat chips */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      { label: t('cta.stats.time.label'), value: t('cta.stats.time.value') },
                      { label: t('cta.stats.available.label'), value: t('cta.stats.available.value') },
                      { label: t('cta.stats.insured.label'), value: t('cta.stats.insured.value') },
                    ].map((s) => (
                      <div key={s.label} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
                        <span className="text-sm font-extrabold text-gray-900">{s.value}</span>
                        <span className="text-[11px] uppercase tracking-wide text-gray-500">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - CTAs */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 sm:items-center lg:items-end">
                  <motion.a
                    href="tel:0625375323"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-black text-white shadow-lg overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" />
                    <Phone weight="fill" className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">{t('cta.call')}</span>
                  </motion.a>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold border border-gray-300 bg-white hover:border-gray-400 transition"
                  >
                    <span>{t('cta.request')}</span>
                    <ArrowRight weight="bold" className="w-5 h-5" />
                  </motion.button>

                  {/* Guarantee line */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <CheckCircle weight="fill" className="w-4 h-4 text-green-500" />
                    <span className="text-xs">{t('cta.guarantee')}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}