'use client';

import { useTranslations } from 'next-intl';
import { MapPin, CheckCircle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

type Props = {
  className?: string;
  mapEmbedUrl?: string;
  variant?: 'light' | 'dark';
};

export default function ServiceArea({ 
  className = '', 
  mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.21883313464!2d4.762925699999999!3d52.3675734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1234567890',
  variant = 'light'
}: Props) {
  const t = useTranslations('contact.serviceArea');
  const areas: string[] = t.raw('areas') ?? [];

  const isDark = variant === 'dark';

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 ${isDark ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-500/10 text-orange-600 border-orange-500/30'} px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border`}>
            <MapPin weight="fill" className="w-4 h-4" />
            {t('badge')}
          </div>
          <h2 className={`text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            {t('title')}
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Gebieden lijst - Compacter in kolommen */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className={`rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border p-6 md:p-8 shadow-lg`}>
              <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-5`}>
                {t('coverageTitle')}
              </h3>
              
              {/* Grid met 2 kolommen op mobile, 2 op desktop */}
              <div className="grid grid-cols-2 gap-2.5">
                {areas.map((area, i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}
                  >
                    <CheckCircle 
                      weight="fill" 
                      className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-500'}`} 
                    />
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-orange-500/10 border-orange-500/20' : 'bg-orange-50 border-orange-200'} border`}>
                <p className={`text-sm ${isDark ? 'text-orange-300' : 'text-orange-900'} font-medium`}>
                  {t('otherLocation')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Kaart */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'border-white/10' : 'border-gray-200'} border shadow-xl`}>
              {mapEmbedUrl ? (
                <iframe
                  title={t('mapTitle')}
                  className="w-full h-[400px] lg:h-[500px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              ) : (
                <div className={`w-full h-[400px] lg:h-[500px] flex flex-col items-center justify-center ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                  <MapPin className="w-12 h-12 mb-3 opacity-50" />
                  <p className="text-sm">{t('noMap')}</p>
                </div>
              )}
            </div>

            {/* Response time banner */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border shadow-sm`}>
                <div className="text-2xl font-black text-orange-500">±30</div>
                <div className={`text-xs uppercase tracking-wide mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('stats.responseTime')}
                </div>
              </div>
              <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border shadow-sm`}>
                <div className="text-2xl font-black text-orange-500">24/7</div>
                <div className={`text-xs uppercase tracking-wide mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('stats.available')}
                </div>
              </div>
              <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border shadow-sm`}>
                <div className="text-2xl font-black text-orange-500">100%</div>
                <div className={`text-xs uppercase tracking-wide mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('stats.coverage')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}