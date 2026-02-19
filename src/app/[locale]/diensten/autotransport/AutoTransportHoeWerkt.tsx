'use client';

import { Phone, MapPin, Truck, CheckCircle, ArrowRight, Clock, Lightning } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function AutoTransportHoeWerkt() {
  
  const stappen = [
    {
      stap: '01',
      icon: Phone,
      title: 'Bel ons direct',
      subtitle: 'Direct een chauffeur onderweg',
      description: 'Bel 06 12 34 56 78 of boek online. Geef je locatie door en we komen meteen in actie.',
      features: ['Geen wachttijden', '24/7 bereikbaar', 'Direct persoonlijk contact'],
      time: '< 2 min',
      color: 'from-blue-500 to-blue-600'
    },
    {
      stap: '02',
      icon: MapPin,
      title: 'We komen naar je toe',
      subtitle: 'GPS tracking in real-time',
      description: 'Onze chauffeur is gemiddeld binnen 30 minuten ter plaatse in Amsterdam. Je ontvangt live updates.',
      features: ['Live GPS tracking', 'ETA updates', 'Directe communicatie'],
      time: '± 30 min',
      color: 'from-orange-500 to-orange-600'
    },
    {
      stap: '03',
      icon: Truck,
      title: 'Laden & transport',
      subtitle: 'Snel en professioneel',
      description: 'We laden je auto veilig en snel (±15 min) en vervoeren het naar de gewenste locatie.',
      features: ['Professioneel laden', '100% verzekerd', 'Vaste prijsafspraak'],
      time: '15 min laden',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Lightning weight="fill" className="w-4 h-4" />
            Supersnel proces
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            In 3 stappen naar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              veilig transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van telefoontje tot aflevering in gemiddeld 45 minuten binnen Amsterdam.
          </p>
        </motion.div>

        {/* Timeline with connecting line */}
        <div className="relative">
          
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5">
            <div className="max-w-6xl mx-auto px-4">
              <div className="h-full bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {stappen.map((stap, i) => (
              <motion.div
                key={stap.stap}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-orange-200 transition-all">
                  
                  {/* Number badge on top */}
                  <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border-2 border-gray-200 shadow-sm">
                    <span className="text-xs font-black text-gray-900">{stap.stap}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative z-20">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stap.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <stap.icon weight="duotone" className="w-8 h-8" />
                    </div>
                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-3 py-1 rounded-full text-xs font-bold ml-3">
                      <Clock weight="fill" className="w-3 h-3" />
                      {stap.time}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {stap.title}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-4">
                    {stap.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stap.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {stap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '< 30 min', label: 'Gemiddelde responstijd' },
            { value: '24/7', label: 'Altijd bereikbaar' },
            { value: '10.000+', label: 'Tevreden klanten' },
            { value: '4.9/5', label: 'Klantbeoordeling' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all"
            >
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Hulp nodig? <br />Wij zijn er binnen 30 minuten!
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Bel direct of boek online. Geen gedoe, geen wachttijden - gewoon snelle hulp.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle weight="fill" className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Vaste prijzen • Geen verrassingen</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel nu
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Online boeken
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}