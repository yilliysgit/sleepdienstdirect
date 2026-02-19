'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Gauge, Coins } from '@phosphor-icons/react';

export default function AboutMission() {
  const t = useTranslations('overons.mission');

  const iconMap = {
    gauge: Gauge,
    shield: ShieldCheck,
    coins: Coins,
  } as const;

  const items = [
    { icon: 'gauge', key: 'fast' },
    { icon: 'shield', key: 'insured' },
    { icon: 'coins', key: 'pricing' },
  ] as const;

  return (
    <section className="relative bg-white py-12 md:py-16">
      {/* Subtiel gridpatroon – heel licht en alleen op grote schermen */}
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(transparent_1px,#ffffff_1px)] bg-[size:22px_22px] opacity-[0.015] md:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
            {t('description')}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="group relative rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm ring-1 ring-black/0 transition-all duration-200 hover:shadow-md hover:ring-black/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon className="h-5 w-5" weight="duotone" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-gray-900">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {t(`items.${item.key}.text`)}
                    </p>
                  </div>
                </div>

                {/* subtiele underline bij hover */}
                <span className="pointer-events-none absolute inset-x-6 bottom-5 block h-px translate-y-1 scale-x-0 bg-gradient-to-r from-orange-500/50 to-orange-600/50 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:scale-x-100 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
