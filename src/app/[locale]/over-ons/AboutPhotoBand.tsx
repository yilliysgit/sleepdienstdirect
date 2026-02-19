'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ShieldCheck, Clock, CheckCircle } from '@phosphor-icons/react';

type Props = {
  imageUrl?: string;
};

export default function AboutPhotoBand({
  imageUrl = '/images/sleepdienstdirect.jpg',
}: Props) {
  const t = useTranslations('overons.photoBand');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const reduce = useReducedMotion();
  const outputRange: [string, string] = reduce ? ['0%', '0%'] : ['-8%', '8%'];
  const y = useTransform(scrollYProgress, [0, 1], outputRange);

  return (
    <section ref={containerRef} className="relative my-16 md:my-24">
      {/* Full-width parallax foto */}
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
        <motion.div
          style={{ 
            y, 
            backgroundImage: `url(${imageUrl})` 
          }}
          className="absolute inset-[-10%] bg-cover bg-center will-change-transform"
          aria-hidden
        />
        
        {/* Mooiere gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent" />
        
        {/* Badges overlay op foto - top right */}
        <div className="absolute top-8 right-8 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-orange-600" weight="fill" />
              <span className="text-sm font-black text-gray-900">100% Verzekerd</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <Clock className="w-6 h-6 text-orange-600" weight="fill" />
              <span className="text-sm font-black text-gray-900">±30 min</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-6 h-6 text-orange-600" weight="fill" />
              <span className="text-sm font-black text-gray-900">Gecertificeerd</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Caption card - floats over foto */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border-2 border-gray-200 bg-white p-8 md:p-12 shadow-2xl shadow-gray-900/10"
          >
            {/* Decoratieve accent lijn */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {t('captionTitle')}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('captionText')}
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <ShieldCheck className="w-5 h-5 text-white" weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('features.insured.title')}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{t('features.insured.text')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <CheckCircle className="w-5 h-5 text-white" weight="bold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('features.certified.title')}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{t('features.certified.text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}