'use client';

import { CheckCircle, ArrowRight, Phone } from '@phosphor-icons/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function OldtimerHeroBgV2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative">
      
      {/* Hero with background image - 50vh */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <img
            src="/images/Oldtimer-transport.jpg"
            alt="Oldtimer transport - professionele sleepdienst voor klassieke auto's"
            className="w-full h-full object-cover scale-110"
          />
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            <div className="max-w-2xl">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-6">
                  Oldtimers
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                    projectauto's
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-gray-200 mb-10 leading-relaxed font-light"
              >
                Zorgvuldig transport voor jouw klassieker
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="tel:0612345678"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
                >
                  <Phone weight="fill" className="w-5 h-5" />
                  Bel direct
                  <ArrowRight weight="bold" className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Meer info
                </motion.button>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      {/* Feature bar - sits on top of next section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden"
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              {[
                { title: 'Zorgvuldig laden', desc: 'Met beschermingsmateriaal' },
                { title: 'Op afspraak', desc: 'Wanneer het jou uitkomt' },
                { title: '100% verzekerd', desc: 'Volledig gedekt transport' }
              ].map((feature, i) => (
                <div key={feature.title} className="p-8 text-center md:text-left group hover:bg-orange-50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500 mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle weight="fill" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}