'use client';

import { MapPin, CheckCircle, Phone, Clock, ArrowRight, Lightning, Truck, Briefcase } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function BedrijfsBusjesGebieden() {

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
    { naam: 'Amstelveen', afstand: '10 km', prijs: '€149', busjes: 'Tot 3 tegelijk' },
    { naam: 'Diemen', afstand: '8 km', prijs: '€149', busjes: 'Tot 3 tegelijk' },
    { naam: 'Zaandam', afstand: '15 km', prijs: '€179', busjes: 'Tot 3 tegelijk' },
    { naam: 'Hoofddorp', afstand: '18 km', prijs: '€179', busjes: 'Tot 3 tegelijk' },
    { naam: 'Haarlem', afstand: '25 km', prijs: '€229', busjes: 'Tot 3 tegelijk' },
    { naam: 'Purmerend', afstand: '20 km', prijs: '€179', busjes: 'Tot 3 tegelijk' },
    { naam: 'Almere', afstand: '30 km', prijs: '€229', busjes: 'Tot 3 tegelijk' },
    { naam: 'Hilversum', afstand: '35 km', prijs: '€229', busjes: 'Tot 3 tegelijk' },
    { naam: 'Utrecht', afstand: '50 km', prijs: '€279', busjes: 'Tot 3 tegelijk' },
    { naam: 'Alkmaar', afstand: '45 km', prijs: '€279', busjes: 'Tot 3 tegelijk' },
    { naam: 'Leiden', afstand: '45 km', prijs: '€279', busjes: 'Tot 3 tegelijk' },
    { naam: 'Den Haag', afstand: '65 km', prijs: '€339', busjes: 'Tot 3 tegelijk' }
  ];

  const popularRoutes = [
    { van: 'Amsterdam Sloterdijk', naar: 'Schiphol', tijd: '20 min', prijs: '€179', info: 'Ook meerdere busjes' },
    { van: 'Amsterdam Noord', naar: 'Zaandam', tijd: '15 min', prijs: '€149', info: 'Zakelijk veel gekozen' },
    { van: 'Amsterdam Zuid', naar: 'Amstelveen', tijd: '10 min', prijs: '€149', info: 'Snelste route' },
    { van: 'Amsterdam Oost', naar: 'Almere', tijd: '30 min', prijs: '€229', info: 'Ook voor bedrijven' },
    { van: 'Amsterdam West', naar: 'Haarlem', tijd: '25 min', prijs: '€229', info: 'Volume korting' },
    { van: 'Amsterdam', naar: 'Utrecht', tijd: '40 min', prijs: '€279', info: 'Tot 3 busjes' }
  ];

  const zakelijkeHotspots = [
    { gebied: 'Bedrijventerrein Sloterdijk', info: 'Veel verhuurbedrijven' },
    { gebied: 'Schiphol / Hoofddorp', info: 'Logistieke bedrijven' },
    { gebied: 'Amsterdam Zuidoost', info: 'Grote bedrijven' },
    { gebied: 'Havengebied', info: 'Transport & logistiek' }
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <MapPin weight="fill" className="w-4 h-4" />
            Onze dekking
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Bedrijfsbusjes transport in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              heel Amsterdam
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sprinter, Crafter, Master - binnen 30 minuten bij je. Ook meerdere busjes tegelijk.
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
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Truck weight="fill" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  Alle wijken in Amsterdam
                </h3>
                <p className="text-sm text-gray-600">Bedrijfsbusjes transport binnen 30 minuten</p>
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-blue-50 border border-gray-200 hover:border-blue-500 px-4 py-2.5 rounded-xl transition-all cursor-default group"
                >
                  <CheckCircle weight="fill" className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-900">{wijk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Zakelijke Hotspots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Briefcase weight="fill" className="w-4 h-4" />
                Zakelijke hotspots
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Veel actief voor bedrijven
              </h3>
              <p className="text-lg text-gray-600">Specialist in logistiek, bouw en verhuurbedrijven</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {zakelijkeHotspots.map((hotspot, i) => (
                <motion.div
                  key={hotspot.gebied}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-blue-200 p-6 text-center hover:shadow-lg hover:border-blue-500 transition-all"
                >
                  <MapPin weight="duotone" className="w-8 h-8 text-blue-500 mx-auto mb-3" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                omgeving
              </span>
            </h3>
            <p className="text-lg text-gray-600">Bedrijfsbusjes transport door heel Noord-Holland</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {omliggendeGemeenten.map((gemeente, i) => (
              <motion.div
                key={gemeente.naam}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-1">{gemeente.naam}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin weight="fill" className="w-4 h-4 text-blue-500" />
                      {gemeente.afstand} vanaf Amsterdam
                    </div>
                    <div className="text-xs text-blue-600 font-bold">{gemeente.busjes}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-600">{gemeente.prijs}</div>
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Populaire routes
                </h3>
                <p className="text-lg text-gray-300">Meest gekozen trajecten voor bedrijfsbusjes</p>
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
                      <Truck weight="fill" className="w-5 h-5 text-blue-400" />
                      <ArrowRight weight="bold" className="w-4 h-4 text-gray-400" />
                      <MapPin weight="fill" className="w-5 h-5 text-blue-400" />
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
                      <div className="text-xl font-black text-blue-400">{route.prijs}</div>
                    </div>
                    <div className="text-xs text-blue-300 font-bold">{route.info}</div>
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
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Truck weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Staat jouw locatie er niet bij?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Geen probleem! We rijden door heel Nederland. Ook meerdere bedrijfsbusjes tegelijk mogelijk.
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
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