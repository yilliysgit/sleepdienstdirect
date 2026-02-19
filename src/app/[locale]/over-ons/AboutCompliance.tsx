'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, FileText, Key, Certificate } from '@phosphor-icons/react';

export default function AboutCompliance() {
  const t = useTranslations('overons.compliance');

  const iconMap = {
    shield: ShieldCheck,
    file: FileText,
    key: Key,
    certificate: Certificate,
  };

  const items = [
    { key: 'insured', icon: 'shield' },
    { key: 'transparent', icon: 'file' },
    { key: 'secure', icon: 'key' },
    { key: 'certified', icon: 'certificate' },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('title')}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-300" />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300 mb-4">
                    <Icon className="w-7 h-7 text-white" weight="fill" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white">
                    {t(`items.${item.key}`)}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}