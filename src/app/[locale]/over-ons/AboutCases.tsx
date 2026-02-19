'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Truck, MapPin, ShieldCheck } from '@phosphor-icons/react';

export default function AboutCases() {
  const t = useTranslations('overons.cases');

  const iconMap = {
    truck: Truck,
    mapPin: MapPin,
    shield: ShieldCheck,
  };

  const cases = [
    { key: 'motorStoring', icon: 'truck' },
    { key: 'bestelbus', icon: 'mapPin' },
    { key: 'aanrijding', icon: 'shield' },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      
      {/* Decoratieve blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, i) => {
            const Icon = iconMap[caseItem.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={caseItem.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl bg-white border border-gray-200 p-8 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 hover:border-orange-200 transition-all duration-300"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300 mb-5">
                    <Icon className="w-7 h-7 text-white" weight="bold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`items.${caseItem.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`items.${caseItem.key}.desc`)}
                  </p>

                  {/* Decoratieve lijn */}
                  <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}