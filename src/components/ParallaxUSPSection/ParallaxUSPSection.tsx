'use client';

import { Star, Clock, Shield, MapPin, CheckCircle, Users, TrendUp } from '@phosphor-icons/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function ParallaxUSPSection() {
const t = useTranslations('home.usp');

const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const usps = [
    {
      icon: Clock,
      id: 'snelheid',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      id: 'verzekering',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Star,
      id: 'reviews',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: MapPin,
      id: 'bereik',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 animate-pulse" style={{ animationDuration: '8s' }} />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              <TrendUp weight="fill" className="w-4 h-4" />
              {t('badge')}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t('title.line1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                {t('title.line2')}
              </span>
              <br />
              {t('title.line3')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br ${usp.color} rounded-2xl -z-10`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${usp.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <usp.icon weight="duotone" className="w-7 h-7" />
                </div>

                {/* Stat badge */}
                <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                  <span className="text-xs font-black text-white">{t(`items.${usp.id}.stat`)}</span>
                </div>

                <h3 className="text-xl font-black text-white mb-2">{t(`items.${usp.id}.title`)}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{t(`items.${usp.id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
            
            {/* Reviews */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-gray-900 flex items-center justify-center">
                    <Users weight="fill" className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 justify-center md:justify-start mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-5 h-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-black text-white">{t('socialProof.rating')}</span> {t('socialProof.reviewsText')}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-16 w-px bg-white/10 mx-auto" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-black text-white mb-1">{t('socialProof.stats.customers.value')}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{t('socialProof.stats.customers.label')}</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">{t('socialProof.stats.available.value')}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{t('socialProof.stats.available.label')}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Areas - SEO Gold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              {t('serviceArea.title.line1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                {t('serviceArea.title.line2')}
              </span>
            </h3>
            <p className="text-gray-300">{t('serviceArea.subtitle')}</p>
          </div>

          {/* Location chips - Google loves this */}
          <div className="flex flex-wrap justify-center gap-3">
            {t.raw('serviceArea.locations').map((location: string, i: number) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full cursor-default transition-all"
              >
                <CheckCircle weight="fill" className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-white">{location}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-300 mb-4">{t('serviceArea.cta.text')}</p>
            <motion.a
              href="tel:0625375323"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
            >
              {t('serviceArea.cta.button')}
            </motion.a>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}