'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Rocket, TrendUp, Handshake, MapPin } from '@phosphor-icons/react';

export default function AboutTimeline() {
  const t = useTranslations('overons.timeline');
  
  const iconMap = {
    rocket: Rocket,
    trendUp: TrendUp,
    handshake: Handshake,
    mapPin: MapPin,
  };

  const items = [
    { key: 'start', icon: 'rocket' },
    { key: 'expansion', icon: 'trendUp' },
    { key: 'partnerships', icon: 'handshake' },
    { key: 'regional', icon: 'mapPin' },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {t('title')}
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 transform -translate-x-1/2" />
          
          {/* Left line - Mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200" />

          <div className="space-y-12">
            {items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const isLeft = i % 2 === 0;
              
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:block">
                    <div className="grid grid-cols-2 gap-8 items-center">
                      {/* Linker content (voor even items) */}
                      {isLeft && (
                        <div className="text-right pr-12">
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-sm rounded-full mb-2">
                            {t(`items.${item.key}.year`)}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {t(`items.${item.key}.title`)}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {t(`items.${item.key}.text`)}
                          </p>
                        </div>
                      )}
                      
                      {/* Lege cel als het een rechter item is */}
                      {!isLeft && <div />}
                      
                      {/* Rechter content (voor oneven items) */}
                      {!isLeft && (
                        <div className="pl-12">
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-sm rounded-full mb-2">
                            {t(`items.${item.key}.year`)}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {t(`items.${item.key}.title`)}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {t(`items.${item.key}.text`)}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg border-4 border-white">
                        <Icon className="w-6 h-6 text-white" weight="bold" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg border-4 border-white">
                        <Icon className="w-6 h-6 text-white" weight="bold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-sm rounded-full mb-2">
                        {t(`items.${item.key}.year`)}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {t(`items.${item.key}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(`items.${item.key}.text`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}