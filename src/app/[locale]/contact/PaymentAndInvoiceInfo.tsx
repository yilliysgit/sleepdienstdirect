'use client';

import { useTranslations } from 'next-intl';
import { CreditCard, Receipt, FileText, Coin } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  variant?: 'light' | 'dark';
};

export default function PaymentAndInvoiceInfo({ 
  className = '',
  variant = 'light' 
}: Props) {
  const t = useTranslations('contact.payment');

  const isDark = variant === 'dark';

  const items = [
    {
      icon: CreditCard,
      key: 'methods',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Coin,
      key: 'rates',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FileText,
      key: 'invoice',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
            {t('title')}
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border p-6 hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon weight="duotone" className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                {t(`items.${item.key}.label`)}
              </div>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} leading-relaxed`}>
                {t(`items.${item.key}.value`)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-8 rounded-2xl ${isDark ? 'bg-orange-500/10 border-orange-500/20' : 'bg-orange-50 border-orange-200'} border p-6`}
        >
          <div className="flex items-start gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${isDark ? 'bg-orange-500/20' : 'bg-orange-100'} flex-shrink-0`}>
              <Receipt weight="duotone" className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold ${isDark ? 'text-orange-300' : 'text-orange-900'} mb-1`}>
                {t('extra.title')}
              </h3>
              <p className={`text-sm ${isDark ? 'text-orange-200' : 'text-orange-800'}`}>
                {t('extra.description')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}