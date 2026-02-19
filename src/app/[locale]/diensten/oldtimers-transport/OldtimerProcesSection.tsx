'use client';

import { Phone, Camera, CalendarCheck, Package, Truck, CheckCircle, ArrowRight, Clock } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function OldtimerProcesSection() {
  
  const stappen = [
    {
      stap: '01',
      icon: Phone,
      title: 'Vertel over je klassieker',
      subtitle: 'Persoonlijk advies',
      description: 'Bel ons en vertel over je oldtimer. Bouwjaar, type, bijzonderheden - we luisteren naar elk detail om de beste aanpak te bepalen.',
      features: ['Direct persoonlijk contact', 'Technisch advies', 'Offerte op maat'],
      time: '5-10 min',
      color: 'from-blue-500 to-blue-600'
    },
    {
      stap: '02',
      icon: CalendarCheck,
      title: 'Plan de afspraak',
      subtitle: 'Op jouw moment',
      description: 'We plannen het transport op een moment dat jou uitkomt. Geen haast, wel de tijd voor een zorgvuldige voorbereiding.',
      features: ['Flexibel inplannen', 'Voorbereiding bespreken', 'Bevestiging per mail'],
      time: 'Naar wens',
      color: 'from-purple-500 to-purple-600'
    },
    {
      stap: '03',
      icon: Camera,
      title: 'Inspectie & fotografie',
      subtitle: 'Voor transport',
      description: 'Bij aankomst maken we foto\'s van je klassieker. Zo documenteren we de staat en kunnen we later aantonen dat alles perfect is verlopen.',
      features: ['Volledige fotoreportage', 'Schade check', 'Digitaal archief'],
      time: '10-15 min',
      color: 'from-amber-500 to-amber-600'
    },
    {
      stap: '04',
      icon: Package,
      title: 'Zorgvuldig laden',
      subtitle: 'Met bescherming',
      description: 'We gebruiken zachte riemen, beschermingsdoeken en speciaal gereedschap. Elk contactpunt wordt beschermd, elke beweging doordacht.',
      features: ['Zachte bevestiging', 'Beschermmateriaal', 'Speciale techniek'],
      time: '30-45 min',
      color: 'from-orange-500 to-orange-600'
    },
    {
      stap: '05',
      icon: Truck,
      title: 'Transport & aflevering',
      subtitle: 'Veilig naar bestemming',
      description: 'Rustige rit naar de bestemming. Bij aflevering nogmaals foto\'s, controle en pas dan is de klus geklaard. Jouw klassieker verdient dat.',
      features: ['Veilige rijstijl', 'Live updates mogelijk', 'Check bij aflevering'],
      time: 'Afhankelijk van afstand',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Clock weight="fill" className="w-4 h-4" />
            Ons werkproces
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            In 5 stappen naar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              veilig transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van eerste contact tot aflevering: wij nemen de tijd voor jouw klassieker.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/20 via-orange-500/60 to-orange-500/20 -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {stappen.map((stap, i) => (
              <motion.div
                key={stap.stap}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                  <div className={`inline-block ${i % 2 === 0 ? 'lg:float-right lg:text-right' : ''}`}>
                    
                    {/* Step number badge */}
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stap.color} text-white flex items-center justify-center font-black text-lg shadow-lg`}>
                        {stap.stap}
                      </div>
                      <div className="text-sm font-bold text-gray-500">{stap.time}</div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                      {stap.title}
                    </h3>
                    <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-4">
                      {stap.subtitle}
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-md">
                      {stap.description}
                    </p>

                    {/* Features */}
                    <div className={`space-y-2 ${i % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {stap.features.map((feature) => (
                        <div key={feature} className="inline-flex items-center gap-2">
                          <CheckCircle weight="fill" className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-semibold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon card */}
                <div className={`relative ${i % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Main card */}
                    <div className={`relative bg-gradient-to-br ${stap.color} rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden`}>
                      
                      {/* Decorative circles */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                      
                      {/* Icon */}
                      <div className="relative flex items-center justify-center">
                        <stap.icon weight="duotone" className="w-24 h-24 md:w-32 md:h-32 text-white" />
                      </div>
                    </div>

                    {/* Floating step indicator */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-gray-50">
                      <span className="text-2xl font-black text-gray-900">{stap.stap}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot on timeline */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${stap.color} shadow-lg`} />
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Klaar om je oldtimer te laten vervoeren?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Bel ons voor een persoonlijk adviesgesprek. We bespreken de details en plannen het transport op jouw moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 12 34 56 78
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-500 transition-all"
              >
                Online aanvragen
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}