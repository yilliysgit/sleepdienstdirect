'use client';

import { CheckCircle, MapPin, Clock, Shield, Phone, ArrowRight, Info, Lightning, Users } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MiniBusjesPricing() {

  const distancePricing = [
    { distance: '0-10 km', price: '€119', popular: false, example: 'bijv. Amsterdam Centrum → Noord' },
    { distance: '10-25 km', price: '€149', popular: true, example: 'bijv. Amsterdam → Amstelveen' },
    { distance: '25-50 km', price: '€189', popular: false, example: 'bijv. Amsterdam → Haarlem' },
    { distance: '50-75 km', price: '€229', popular: false, example: 'bijv. Amsterdam → Utrecht' },
    { distance: '75-100 km', price: '€279', popular: false, example: 'bijv. Amsterdam → Rotterdam' },
    { distance: '100+ km', price: 'Op aanvraag', popular: false, example: 'Bel voor een offerte' }
  ];

  const volumeKorting = [
    { aantal: '1 busje', prijs: 'Normale prijs', korting: '0%', color: 'from-gray-500 to-gray-600' },
    { aantal: '2 busjes', prijs: '2e busje -10%', korting: '-10%', color: 'from-orange-500 to-orange-600' },
    { aantal: '3 busjes', prijs: '3e busje -15%', korting: '-15%', color: 'from-green-500 to-green-600' }
  ];

  const extraServices = [
    { service: 'Spoedopdracht (< 15 min)', price: '+ €50' },
    { service: 'Buiten kantooruren (22:00-07:00)', price: '+ €35' },
    { service: 'Binnen ophalen/afleveren', price: '+ €25' },
    { service: 'Opslag per dag', price: '€20/dag' },
    { service: 'Zakelijke factuur', price: 'Gratis' }
  ];

  const included = [
    'Professioneel laden & lossen',
    'Volledige WA & schadeverzekering',
    'GPS tracking & live updates',
    'Specialistische apparatuur',
    'BTW inbegrepen',
    'Geen verborgen kosten',
    'Vaste prijsafspraak vooraf',
    'Ook zakelijke facturen'
  ];

  const busTypes = [
    { type: 'Mercedes Vito', description: 'Compact formaat', priceStart: '€119' },
    { type: 'VW Transporter', description: 'Standaard busje', priceStart: '€119' },
    { type: 'Ford Transit Connect', description: 'Compact model', priceStart: '€119' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
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
            Transparante prijzen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Wat kost{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              mini busje transport
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vaste prijzen vanaf €119. Korting bij meerdere busjes tegelijk.
          </p>
        </motion.div>

        {/* Volume Discount Cards - PROMINENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-4">
                  <Users weight="fill" className="w-4 h-4" />
                  Volume korting
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Meerdere busjes? Bespaar direct!
                </h3>
                <p className="text-lg text-white/90">Tot 3 busjes tegelijk vervoeren met korting</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {volumeKorting.map((item, i) => (
                  <motion.div
                    key={item.aantal}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center relative overflow-hidden group hover:scale-105 transition-transform"
                  >
                    {i > 0 && (
                      <div className="absolute top-4 right-4">
                        <div className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-black`}>
                          SAVE {item.korting}
                        </div>
                      </div>
                    )}
                    <div className="text-5xl mb-2">{i === 0 ? '1️⃣' : i === 1 ? '2️⃣' : '3️⃣'}</div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">{item.aantal}</h4>
                    <p className="text-orange-600 font-bold mb-4">{item.prijs}</p>
                    {i > 0 && (
                      <div className="text-sm text-gray-600">
                        Bespaar op totaalprijs
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Distance Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {distancePricing.map((item, i) => (
            <motion.div
              key={item.distance}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase shadow-lg">
                    Meest gekozen
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-white rounded-2xl border-2 p-6 transition-all ${
                item.popular 
                  ? 'border-orange-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-orange-200 hover:shadow-lg'
              }`}>
                
                <div className="flex items-center gap-3 mb-4">
                  <MapPin weight="fill" className={`w-6 h-6 ${item.popular ? 'text-orange-500' : 'text-gray-400'}`} />
                  <h3 className="text-xl font-black text-gray-900">{item.distance}</h3>
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-black text-gray-900 mb-1">{item.price}</div>
                  <div className="text-sm text-gray-600">{item.example}</div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <Clock weight="fill" className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Binnen 30 min ter plaatse</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield weight="fill" className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Volledig verzekerd</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bus Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
            Prijzen per bustype
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {busTypes.map((bus, i) => (
              <motion.div
                key={bus.type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-orange-200 transition-all"
              >
                <h4 className="text-xl font-black text-gray-900 mb-2">{bus.type}</h4>
                <p className="text-sm text-gray-600 mb-4">{bus.description}</p>
                <div className="text-3xl font-black text-orange-600">
                  {bus.priceStart}
                </div>
                <div className="text-xs text-gray-500 mt-1">Binnen Amsterdam</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra Services & Included */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Extra Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock weight="duotone" className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-black text-gray-900">Extra diensten</h3>
            </div>
            <div className="space-y-3">
              {extraServices.map((item) => (
                <div key={item.service} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium text-sm">{item.service}</span>
                  <span className={`font-bold ${item.price === 'Gratis' ? 'text-green-600' : 'text-gray-900'}`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Always Included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle weight="duotone" className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-black text-gray-900">Altijd inbegrepen</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-16"
        >
          <div className="flex items-start gap-4">
            <Info weight="fill" className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-black text-gray-900 mb-2">Zakelijke klant?</h4>
              <p className="text-gray-700 leading-relaxed">
                We bieden <strong>speciale zakelijke tarieven</strong> bij regelmatig transport. Ook factuuradministratie en vaste afspraken mogelijk. Neem contact op voor een offerte op maat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Direct een offerte?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bel ons voor een vrijblijvende offerte. Speciale tarieven voor meerdere busjes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Bereken online
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}