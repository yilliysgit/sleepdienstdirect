'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  UserCircle,
  Wrench,
  Buildings,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle,
} from '@phosphor-icons/react';

export default function VoorWieRijdenSection() {
const t = useTranslations('home.voorWie');

const [active, setActive] = useState('particulier');

  const segments = [
    {
      key: 'particulier',
      colorFrom: 'from-orange-500',
      colorTo: 'to-amber-500',
      icon: UserCircle,
    },
    {
      key: 'garages',
      colorFrom: 'from-blue-600',
      colorTo: 'to-indigo-600',
      icon: Wrench,
    },
    {
      key: 'lease',
      colorFrom: 'from-emerald-600',
      colorTo: 'to-teal-600',
      icon: Buildings,
    },
    {
      key: 'schade',
      colorFrom: 'from-rose-600',
      colorTo: 'to-orange-600',
      icon: ShieldCheck,
    },
  ];

  const current = segments.find((s) => s.key === active)!;

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
            {t('badge')}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            {t('title.line1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {t('title.line2')}
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-10 md:mb-14 flex flex-wrap gap-2">
          {segments.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === s.key
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <s.icon weight="duotone" className="w-5 h-5" /> {t(`segments.${s.key}.label`)}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${current.colorFrom} ${current.colorTo}`} />

                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white bg-gradient-to-br ${current.colorFrom} ${current.colorTo}`}>
                    <current.icon weight="duotone" className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t(`segments.${current.key}.kicker`)}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  {t(`segments.${current.key}.title`)}
                </h3>
                <p className="mt-2 text-gray-600">{t(`segments.${current.key}.copy`)}</p>

                <ul className="mt-5 space-y-2.5">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-[15px] text-gray-800">
                      <CheckCircle weight="fill" className="w-4 h-4 text-orange-500" />
                      {t(`segments.${current.key}.bullets.${i}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  
                    <a href="tel:0625375323"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-white shadow-lg bg-gradient-to-r ${current.colorFrom} ${current.colorTo}`}
                  >
                    <Phone weight="fill" className="w-5 h-5" /> {t('cta.call')}
                  </a>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold border border-gray-300 bg-white hover:border-gray-400 transition">
                    {t('cta.request')} <ArrowRight weight="bold" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                  <div className="text-lg font-extrabold text-gray-900">
                    {t(`segments.${current.key}.stats.${i}.value`)}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-gray-500">
                    {t(`segments.${current.key}.stats.${i}.label`)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3">
                {t('partners.title')}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Klant A', 'Klant B', 'Klant C', 'Klant D', 'Klant E'].map((n) => (
                  <div key={n} className="px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 bg-gray-50">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}