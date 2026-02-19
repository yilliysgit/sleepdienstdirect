'use client';

import { Phone, MapPin, Clock, Shield, ArrowRight, CheckCircle, Lightning, Truck } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MiniBusjesHero() {
  const [van, setVan] = useState('');
  const [naar, setNaar] = useState('');

  const handleCalculate = () => {
    console.log('Calculate:', van, naar);
  };

  const quickFacts = [
    { icon: Clock, text: 'Binnen 30 minuten ter plaatse', highlight: '< 30 min' },
    { icon: Truck, text: 'Tot 3 busjes tegelijk', highlight: 'Uniek!' },
    { icon: Shield, text: '100% verzekerd transport', highlight: '€2M' }
  ];

  const busTypes = ['Vito', 'Transporter', 'Transit Connect', 'Trafic', 'Vivaro'];

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/sleepdienst2.jpg"
          alt="Mini busjes transport - Vito Transporter Transit"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-20">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Truck weight="fill" className="w-4 h-4" />
              Specialist in mini busjes
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
              Mini busjes
              <br />
              transport
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
                vanaf €119
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Vito, Transporter, Transit - professioneel vervoerd binnen 30 minuten.
            </p>

            {/* Bus types badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {busTypes.map((bus) => (
                <div key={bus} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg">
                  <span className="text-sm font-bold text-white">{bus}</span>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="space-y-3 mb-8">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={fact.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                    <fact.icon weight="fill" className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-base font-semibold text-white">{fact.text}</span>
                    <span className="text-xs font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                      {fact.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-xl text-lg font-black shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone weight="fill" className="w-6 h-6" />
                  Bel direct: 06 25 375 323
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-8 py-5 rounded-xl text-lg font-bold transition-all"
              >
                Bereken prijs
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-gray-400 flex items-center gap-2"
            >
              <CheckCircle weight="fill" className="w-4 h-4 text-green-400" />
              Zakelijk & particulier • Korting bij meerdere busjes • Geen verborgen kosten
            </motion.p>
          </motion.div>

          {/* Right Side - Price Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-900/50 p-8 md:p-10 border border-gray-100">
              
              {/* Top badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                  Direct prijs berekenen
                </div>
              </div>

              <div className="space-y-6 mt-4">
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Van (vertreklocatie)
                  </label>
                  <div className="relative">
                    <MapPin weight="fill" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                    <input
                      type="text"
                      value={van}
                      onChange={(e) => setVan(e.target.value)}
                      placeholder="bijv. Amsterdam Centrum"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 font-semibold focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Naar (bestemming)
                  </label>
                  <div className="relative">
                    <MapPin weight="fill" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                    <input
                      type="text"
                      value={naar}
                      onChange={(e) => setNaar(e.target.value)}
                      placeholder="bijv. Haarlem"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 font-semibold focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <motion.button
                  onClick={handleCalculate}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Bereken prijs & boek direct
                  <ArrowRight weight="bold" className="w-5 h-5 inline ml-2" />
                </motion.button>

              </div>

              {/* Bottom info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Responstijd:</span>
                  <span className="font-black text-orange-600">± 30 minuten</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Startprijs binnen Amsterdam:</span>
                  <span className="font-black text-gray-900">Vanaf €119</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Meerdere busjes:</span>
                  <span className="font-black text-green-600 flex items-center gap-1">
                    <CheckCircle weight="fill" className="w-4 h-4" />
                    Tot 3 tegelijk
                  </span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['24/7', 'Vaste prijzen', 'Tot 3 busjes'].map((badge) => (
                  <div key={badge} className="bg-gray-50 rounded-lg px-3 py-2 text-center">
                    <span className="text-xs font-bold text-gray-900">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 opacity-50">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-orange-500" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}