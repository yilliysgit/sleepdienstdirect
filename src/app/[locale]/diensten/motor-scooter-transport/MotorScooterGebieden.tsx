'use client';

import { MapPin, CheckCircle, Phone, Clock, ArrowRight, Lightning, Motorcycle, Wrench } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MotorScooterGebieden() {

  const amsterdamWijken = [
    'Amsterdam Centrum',
    'Amsterdam Noord',
    'Amsterdam Oost',
    'Amsterdam West',
    'Amsterdam Zuid',
    'Amsterdam Zuidoost',
    'Amsterdam Nieuw-West',
    'De Pijp',
    'Jordaan',
    'Oud-West',
    'Oud-Zuid',
    'Rivierenbuurt',
    'Watergraafsmeer',
    'Buitenveldert',
    'Slotervaart',
    'Geuzenveld',
    'Slotermeer',
    'Osdorp',
    'De Baarsjes',
    'Westerpark'
  ];

  const omliggendeGemeenten = [
    { naam: 'Amstelveen', afstand: '10 km', prijs: '€99', type: 'Ook custom bikes' },
    { naam: 'Diemen', afstand: '8 km', prijs: '€99', type: 'Alle motoren' },
    { naam: 'Zaandam', afstand: '15 km', prijs: '€129', type: 'Ook Harley' },
    { naam: 'Hoofddorp', afstand: '18 km', prijs: '€129', type: 'Ook driewielers' },
    { naam: 'Haarlem', afstand: '25 km', prijs: '€169', type: 'Alle types' },
    { naam: 'Purmerend', afstand: '20 km', prijs: '€129', type: 'Ook scooters' },
    { naam: 'Almere', afstand: '30 km', prijs: '€169', type: 'Ook liggende' },
    { naam: 'Hilversum', afstand: '35 km', prijs: '€169', type: 'Custom OK' },
    { naam: 'Utrecht', afstand: '50 km', prijs: '€209', type: 'Alle merken' },
    { naam: 'Alkmaar', afstand: '45 km', prijs: '€209', type: 'Ook custom' },
    { naam: 'Leiden', afstand: '45 km', prijs: '€209', type: 'Alle types' },
    { naam: 'Den Haag', afstand: '65 km', prijs: '€259', type: 'Ook chopper' }
  ];

  const popularRoutes = [
    { van: 'Amsterdam Centrum', naar: 'Dealer Zaandam', tijd: '20 min', prijs: '€129', info: 'Ook custom bikes' },
    { van: 'Amsterdam Noord', naar: 'Motor garage', tijd: '15 min', prijs: '€99', info: 'Snelste route' },
    { van: 'Amsterdam Zuid', naar: 'Harley Dealer', tijd: '25 min', prijs: '€129', info: 'Ook cruisers' },
    { van: 'Amsterdam Oost', naar: 'Almere', tijd: '30 min', prijs: '€169', info: 'Alle types' },
    { van: 'Amsterdam West', naar: 'Haarlem garage', tijd: '25 min', prijs: '€169', info: 'Ook sportmotoren' },
    { van: 'Amsterdam', naar: 'Utrecht dealer', tijd: '40 min', prijs: '€209', info: 'Ook liggende' }
  ];

  const motorHotspots = [
    { gebied: 'Motordealer Zaandam', info: 'Veel Harley & BMW' },
    { gebied: 'Vespa dealer Amsterdam', info: 'Scooter specialist' },
    { gebied: 'Custom garage Haarlem', info: 'Choppers & customs' },
    { gebied: 'Sportmotor dealer Utrecht', info: 'Ducati & Yamaha' }
  ];

  const stats = [
    { label: 'Dekking', value: '100+ plaatsen' },
    { label: 'Max afstand', value: '150 km' },
    { label: 'Responstijd', value: '< 30 min' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <MapPin weight="fill" className="w-4 h-4" />
            Onze dekking
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Motor transport in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              heel Amsterdam
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Harley, Ducati, Vespa - binnen 30 minuten bij je. Ook custom bikes & driewielers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg hover:border-red-200 transition-all"
            >
              <div className="text-4xl font-black text-red-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Amsterdam Wijken */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <Motorcycle weight="fill" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  Alle wijken in Amsterdam
                </h3>
                <p className="text-sm text-gray-600">Motor & scooter transport binnen 30 minuten</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {amsterdamWijken.map((wijk, i) => (
                <motion.div
                  key={wijk}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-white hover:from-red-50 hover:to-red-50 border border-gray-200 hover:border-red-500 px-4 py-2.5 rounded-xl transition-all cursor-default group"
                >
                  <CheckCircle weight="fill" className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-900">{wijk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Motor Hotspots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl border border-red-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Wrench weight="fill" className="w-4 h-4" />
                Motor hotspots
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Veel actief bij dealers & garages
              </h3>
              <p className="text-lg text-gray-600">Van Harley dealer tot custom garage</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {motorHotspots.map((hotspot, i) => (
                <motion.div
                  key={hotspot.gebied}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-red-200 p-6 text-center hover:shadow-lg hover:border-red-500 transition-all"
                >
                  <Motorcycle weight="duotone" className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h4 className="font-black text-gray-900 mb-2">{hotspot.gebied}</h4>
                  <p className="text-sm text-gray-600">{hotspot.info}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Omliggende Gemeenten */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Ook in de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                omgeving
              </span>
            </h3>
            <p className="text-lg text-gray-600">Motor & scooter transport door heel Noord-Holland</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {omliggendeGemeenten.map((gemeente, i) => (
              <motion.div
                key={gemeente.naam}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-red-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-1">{gemeente.naam}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin weight="fill" className="w-4 h-4 text-red-500" />
                      {gemeente.afstand} vanaf Amsterdam
                    </div>
                    <div className="text-xs text-red-600 font-bold">{gemeente.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-red-600">{gemeente.prijs}</div>
                    <div className="text-xs text-gray-500">vanaf</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                  <Lightning weight="fill" className="w-4 h-4" />
                  <span className="font-bold">Snelle service</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Populaire Routes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Populaire routes
                </h3>
                <p className="text-lg text-gray-300">Meest gekozen trajecten voor motoren & scooters</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularRoutes.map((route, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Motorcycle weight="fill" className="w-5 h-5 text-red-400" />
                      <ArrowRight weight="bold" className="w-4 h-4 text-gray-400" />
                      <MapPin weight="fill" className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="mb-3">
                      <div className="text-sm text-gray-400 mb-1">Van</div>
                      <div className="font-bold text-white">{route.van}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-1">Naar</div>
                      <div className="font-bold text-white">{route.naar}</div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock weight="fill" className="w-4 h-4" />
                        {route.tijd}
                      </div>
                      <div className="text-xl font-black text-red-400">{route.prijs}</div>
                    </div>
                    <div className="text-xs text-red-300 font-bold">{route.info}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Motorcycle weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Staat jouw locatie er niet bij?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Geen probleem! We rijden door heel Nederland. Ook voor custom bikes, choppers en driewielers.
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-6 h-6" />
                Bel: 06 25 375 323
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}