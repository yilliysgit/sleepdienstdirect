'use client';

import { Phone, MapPin, Truck, CheckCircle, ArrowRight, Clock, Lightning, Briefcase } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function BedrijfsBusjesHoeWerkt() {
  
  const stappen = [
    {
      stap: '01',
      icon: Phone,
      title: 'Bel of boek zakelijk',
      subtitle: 'Direct contact met specialist',
      description: 'Bel 06 25 375 323 of boek online. Geef door hoeveel bedrijfsbusjes je wilt vervoeren (tot 3 tegelijk mogelijk). Zakelijke factuur direct geregeld.',
      features: ['Zakelijke aanpak', 'Ook meerdere busjes', 'Vaste zakelijke tarieven'],
      time: '< 2 min',
      color: 'from-blue-500 to-blue-600'
    },
    {
      stap: '02',
      icon: MapPin,
      title: 'We komen naar je toe',
      subtitle: 'Binnen 30 minuten ter plaatse',
      description: 'Onze chauffeur is snel bij je in Amsterdam en omgeving. Met specialistische apparatuur voor grote bedrijfsbusjes zoals Sprinter, Crafter en Master.',
      features: ['GPS tracking', 'Live updates', 'Extra zware apparatuur'],
      time: '± 30 min',
      color: 'from-orange-500 to-orange-600'
    },
    {
      stap: '03',
      icon: Truck,
      title: 'Professioneel laden',
      subtitle: 'Ook voor geladen busjes',
      description: 'We laden je bedrijfsbusje(s) veilig. Geladen met gereedschap of materiaal? Geen probleem. Tot 3 busjes tegelijk mogelijk - ideaal voor logistieke bedrijven.',
      features: ['Geladen busjes OK', 'Tot 3 tegelijk', '100% verzekerd'],
      time: '25-35 min',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Lightning weight="fill" className="w-4 h-4" />
            Zakelijk proces
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            In 3 stappen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              bedrijfsbusje vervoerd
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van telefoontje tot aflevering. Ook voor logistiek, bouw en verhuurbedrijven.
          </p>
        </motion.div>

        <div className="relative">
          
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5">
            <div className="max-w-6xl mx-auto px-4">
              <div className="h-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            </div>
          </div>

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
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all">
                  
                  <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border-2 border-gray-200 shadow-sm">
                    <span className="text-xs font-black text-gray-900">{stap.stap}</span>
                  </div>

                  <div className="mb-6 relative z-20">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stap.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <stap.icon weight="duotone" className="w-8 h-8" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-3 py-1 rounded-full text-xs font-bold ml-3">
                      <Clock weight="fill" className="w-3 h-3" />
                      {stap.time}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {stap.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-4">
                    {stap.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stap.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {stap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-4">
                <Briefcase weight="fill" className="w-4 h-4" />
                Voor zakelijke klanten
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Tot 3 bedrijfsbusjes<br />tegelijk vervoeren
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Perfect voor logistieke bedrijven, bouwbedrijven of verhuurbedrijven met meerdere voertuigen. Efficiënter en voordeliger dan apart transport.
              </p>
              <div className="space-y-3">
                {[
                  'Zakelijke volume korting',
                  'Alles in één keer klaar',
                  'Vaste zakelijke tarieven'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle weight="fill" className="w-5 h-5 text-white" />
                    <span className="text-white font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl font-black text-white mb-2">1+1+1</div>
                <div className="text-white/90 font-bold">= Bespaar tijd & geld</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold">2e busje</span>
                  <span className="text-green-300 font-black">-10%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                  <span className="text-white font-semibold">3e busje</span>
                  <span className="text-green-300 font-black">-15%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3 border border-white/20">
                  <span className="text-white font-semibold">Zakelijke factuur</span>
                  <span className="text-green-300 font-black">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
            { value: 'Tot 3', label: 'Busjes tegelijk' },
            { value: '500+', label: 'Zakelijke klanten' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Zakelijk? Meerdere busjes nodig?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Bel voor een zakelijke offerte op maat. Volume korting bij 2 of 3 busjes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-500 transition-all"
              >
                Zakelijke offerte
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}