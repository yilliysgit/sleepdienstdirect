'use client';

import { CheckCircle, ArrowRight, Phone, Shield } from '@phosphor-icons/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function OldtimerHeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    'Zorgvuldig laden',
    'Beschermingsmateriaal',
    'Op afspraak'
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield weight="fill" className="w-4 h-4" />
              Specialist in klassiekers
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mb-6">
              Oldtimers /{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500">
                projectauto's
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Jouw klassieker verdient het allerbeste transport. Wij behandelen elke oldtimer met de zorg en aandacht die het verdient.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-black shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone weight="fill" className="w-5 h-5" />
                  Bel voor advies
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-orange-500 text-gray-900 px-8 py-4 rounded-xl text-lg font-bold transition-all"
              >
                Meer info
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm text-gray-500 flex items-center gap-2"
            >
              <Shield weight="fill" className="w-4 h-4 text-green-500" />
              100% verzekerd • Gecertificeerde chauffeurs • Vaste prijzen
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20 bg-white p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/Oldtimer-transport.jpg"
                  alt="Oldtimer transport met sleepwagen - zwarte Mercedes Sprinter met klassieke Mustang en witte oldtimer"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      Oldtimers / projectauto's
                    </h3>
                    <div className="space-y-1.5">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle weight="fill" className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ArrowRight weight="bold" className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-30">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-orange-500" />
                ))}
              </div>
            </div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-1">500+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Oldtimers vervoerd</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}