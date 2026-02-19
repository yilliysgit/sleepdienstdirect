'use client';

import { CheckCircle, X, Phone, Shield, Clock, MapPin, Info } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OldtimerPricingSection() {
  const [activeTab, setActiveTab] = useState('oldtimer');

  const pricingComparison = {
    standaard: {
      title: 'Standaard Auto',
      subtitle: 'Regulier sleepvervoer',
      price: 'Vanaf €89',
      popular: false,
      color: 'from-gray-500 to-gray-600',
      features: [
        { text: 'Standaard bevestiging', included: true },
        { text: 'Snelle laadtijd (15 min)', included: true },
        { text: 'Basis verzekering', included: true },
        { text: 'Beschermingsmateriaal', included: false },
        { text: 'Technische expertise', included: false },
        { text: 'Fotodocumentatie', included: false },
        { text: 'Extra laadtijd', included: false },
        { text: 'Speciaal gereedschap', included: false }
      ]
    },
    oldtimer: {
      title: 'Oldtimer / Klassieker',
      subtitle: 'Premium zorgvuldig transport',
      price: 'Vanaf €149',
      popular: true,
      color: 'from-orange-500 to-orange-600',
      features: [
        { text: 'Zachte riemen & bevestiging', included: true },
        { text: 'Extra laadtijd (30+ min)', included: true },
        { text: 'Premium verzekering €2M', included: true },
        { text: 'Beschermingsmateriaal', included: true },
        { text: 'Technische expertise', included: true },
        { text: 'Fotodocumentatie', included: true },
        { text: 'Speciaal laadgereedschap', included: true },
        { text: 'Kennis klassieke auto\'s', included: true }
      ]
    }
  };

  const distancePricing = [
    { distance: '0-25 km', standaard: '€89', oldtimer: '€149' },
    { distance: '25-50 km', standaard: '€129', oldtimer: '€189' },
    { distance: '50-100 km', standaard: '€179', oldtimer: '€249' },
    { distance: '100+ km', standaard: 'Op aanvraag', oldtimer: 'Op aanvraag' }
  ];

  const extraServices = [
    { service: 'Binnen ophalen/afleveren', price: '+ €25' },
    { service: 'Buiten kantooruren', price: '+ €35' },
    { service: 'Opslag per dag', price: '€15/dag' },
    { service: 'Spoedopdracht (< 1 uur)', price: '+ €50' }
  ];

  const whatsIncluded = [
    'Volledig verzekerd transport',
    'Gecertificeerde chauffeurs',
    'Geen verborgen kosten',
    'Vaste prijsafspraak',
    'Transparante communicatie',
    'BTW inbegrepen'
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
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
            <Shield weight="fill" className="w-4 h-4" />
            Transparante prijzen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Wat kost{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              oldtimer transport
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Eerlijke prijzen voor premium service. Geen verrassingen, wel de beste zorg voor jouw klassieker.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {Object.entries(pricingComparison).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {Object.entries(pricingComparison).map(([key, plan], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative ${activeTab === key ? 'lg:scale-105' : 'lg:scale-95 opacity-60'} transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase shadow-lg">
                    Aanbevolen
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-3xl border-2 ${plan.popular ? 'border-orange-500' : 'border-gray-200'} p-8 shadow-xl`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} text-white mb-4 shadow-lg`}>
                    <Shield weight="duotone" className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                  <div className="text-5xl font-black text-gray-900">{plan.price}</div>
                  <div className="text-sm text-gray-500 mt-1">Binnen Amsterdam</div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle weight="fill" className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-orange-500' : 'text-gray-400'}`} />
                      ) : (
                        <X weight="bold" className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-300" />
                      )}
                      <span className={`text-sm ${feature.included ? 'font-semibold text-gray-900' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="tel:0612345678"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <Phone weight="fill" className="w-5 h-5 inline mr-2" />
                  Bel voor offerte
                </motion.a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Distance-based pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin weight="duotone" className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-black text-gray-900">Prijzen op afstand</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-black text-gray-900">Afstand</th>
                  <th className="text-right py-4 px-4 font-black text-gray-900">Standaard Auto</th>
                  <th className="text-right py-4 px-4 font-black text-orange-600">Oldtimer</th>
                </tr>
              </thead>
              <tbody>
                {distancePricing.map((row, i) => (
                  <tr key={row.distance} className={i !== distancePricing.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.distance}</td>
                    <td className="py-4 px-4 text-right text-gray-600">{row.standaard}</td>
                    <td className="py-4 px-4 text-right font-bold text-orange-600">{row.oldtimer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Extra services & What's included */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Extra services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock weight="duotone" className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-black text-gray-900">Extra diensten</h3>
            </div>
            <div className="space-y-3">
              {extraServices.map((item) => (
                <div key={item.service} className="flex items-center justify-between py-2">
                  <span className="text-gray-700 font-medium">{item.service}</span>
                  <span className="text-gray-900 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What's included */}
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
            <div className="space-y-3">
              {whatsIncluded.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <Info weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Twijfel je over de prijs?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bel ons voor een vrijblijvende offerte op maat. We denken graag met je mee!
            </p>
            <motion.a
              href="tel:0612345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
            >
              <Phone weight="fill" className="w-6 h-6" />
              Bel: 06 12 34 56 78
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}