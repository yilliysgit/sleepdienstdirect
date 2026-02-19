'use client';

import { useTranslations } from 'next-intl';
import { Phone, WhatsappLogo, ShieldCheck, Clock, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

type Props = {
  dark?: boolean;
  className?: string;
};

export default function FinalCta({
  dark = false,
  className = '',
}: Props) {
  const t = useTranslations('contact.finalCta');

  return (
    <section className={`relative overflow-hidden py-16 md:py-20 ${dark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-orange-50 to-white'} ${className}`}>
      
      {/* Decorative background */}
      {dark && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl ${dark ? 'bg-white/5 backdrop-blur-xl border-white/10' : 'bg-white border-gray-200'} border p-8 md:p-12 shadow-2xl`}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left - Text */}
            <div className="lg:col-span-7">
              <h2 className={`text-3xl md:text-4xl font-black ${dark ? 'text-white' : 'text-gray-900'} mb-4 leading-tight`}>
                {t('title.line1')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  {t('title.line2')}
                </span>
              </h2>
              
              <div className={`flex flex-wrap items-center gap-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="inline-flex items-center gap-2">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${dark ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                    <Clock weight="fill" className={`w-4 h-4 ${dark ? 'text-orange-400' : 'text-orange-600'}`} />
                  </div>
                  <span className="font-medium">{t('features.speed')}</span>
                </div>
                
                <div className={`w-1 h-1 rounded-full ${dark ? 'bg-gray-600' : 'bg-gray-400'}`} />
                
                <div className="inline-flex items-center gap-2">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${dark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <ShieldCheck weight="fill" className={`w-4 h-4 ${dark ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <span className="font-medium">{t('features.insured')}</span>
                </div>
              </div>
            </div>

            {/* Right - CTAs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              
                <a href="tel:0625375323"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-black bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                {t('cta.call')}
                <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              
                <a href="https://wa.me/31625375323"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold ${dark ? 'bg-white/10 border-white/20 text-white hover:bg-white/15' : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'} border transition-all`}
              >
                <WhatsappLogo weight="fill" className="w-5 h-5 text-green-500" />
                {t('cta.whatsapp')}
              </a>
            </div>
          </div>

          {/* Bottom text */}
          <div className={`mt-8 pt-8 border-t ${dark ? 'border-white/10' : 'border-gray-200'}`}>
            <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              {t('footer')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}