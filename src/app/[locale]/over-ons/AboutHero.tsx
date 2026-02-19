'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Clock, Truck, Phone, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';

type AboutHeroProps = {
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappHref?: string;
  className?: string;
};

export default function AboutHero({
  phoneDisplay = '06 12 34 56 78',
  phoneHref = 'tel:0612345678',
  whatsappHref = 'https://wa.me/31612345678',
  className = '',
}: AboutHeroProps) {
  const t = useTranslations('overons.hero');
  
  // Haal badges op als array
  const badges = t.raw('badges') as string[];
  
  // Icon mapping voor badges
  const badgeIcons = [Clock, ShieldCheck, Truck];

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Donkere achtergrond met gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Subtiel grid patroon */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Tekstblok */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
              {t('eyebrow')}
            </span>

            {/* Titel */}
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                {t('highlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-gray-300 max-w-2xl text-lg">
              {t('subtitle')}
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((label, i) => {
                const Icon = badgeIcons[i] ?? ShieldCheck;
                return (
                  <div 
                    key={i} 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-200"
                  >
                    <Icon className="w-4 h-4 text-orange-400" weight="fill" />
                    {label}
                  </div>
                );
              })}
            </div>

            {/* CTA's */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-black text-white shadow-lg shadow-orange-500/20 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-orange-500/30 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                {t('cta.call')} {phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition"
              >
                <WhatsappLogo className="w-5 h-5 text-green-400" />
                {t('cta.whatsapp')}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition"
              >
                {t('cta.service')} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Statskaart */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">
                    {t('stats.vehicles.value')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-gray-400">
                    {t('stats.vehicles.label')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">
                    {t('stats.satisfaction.value')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-gray-400">
                    {t('stats.satisfaction.label')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">
                    {t('stats.availability.value')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-gray-400">
                    {t('stats.availability.label')}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-300 leading-relaxed">
                {t('statsDescription')}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}