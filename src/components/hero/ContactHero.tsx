// src/components/contact/ContactHero.tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Phone,
  WhatsappLogo,
  Clock,
  ShieldCheck,
  Car,
} from '@phosphor-icons/react';

export default function ContactHero() {
  const t = useTranslations('contact.hero');

  const badges = [
    { icon: Clock, label: t('badges.time') },
    { icon: ShieldCheck, label: t('badges.insured') },
    { icon: Car, label: t('badges.vehicles') },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Achtergrond */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          {/* Tekst */}
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 border border-orange-500/30 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
              {t('badge')}
            </span>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              {t('title.line1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {t('title.line2')}
              </span>
            </h1>

            <p className="mt-3 text-gray-600 max-w-2xl">{t('subtitle')}</p>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
                  >
                    <Icon className="w-4 h-4 text-gray-500" weight="fill" />
                    {b.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA knoppen */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
              <a href={t('cta.phone.href')}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-black text-white shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.02] transition-transform"
            >
              <Phone weight="fill" className="w-5 h-5" />
              {t('cta.phone.label')}
            </a>

            
              <a href={t('cta.whatsapp.href')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold border border-gray-300 bg-white hover:border-gray-400 transition"
            >
              <WhatsappLogo className="w-5 h-5 text-green-600" />
              {t('cta.whatsapp.label')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}