'use client';

import { Lightning, Shield, Users, Wrench, CurrencyEur, Star, CheckCircle, Truck, Clock } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MiniBusjesUSP() {
  
  const usps = [
    {
      icon: Users,
      title: 'Tot 3 busjes tegelijk',
      description: 'Uniek in Amsterdam: we kunnen tot 3 mini busjes in één keer vervoeren. Perfect voor bedrijven met meerdere voertuigen of verhuurbedrijven.',
      stats: 'Max 3x',
      color: 'from-orange-500 to-orange-600',
      features: ['Korting bij meerdere', 'Alles in één rit', 'Tijdbesparend']
    },
    {
      icon: Wrench,
      title: 'Specialistische kennis',
      description: 'Onze chauffeurs hebben ervaring met alle mini busjes: Vito, Transporter, Transit, Trafic. We kennen de technische details en laden veilig.',
      stats: '10+ jaar',
      color: 'from-blue-500 to-blue-600',
      features: ['Alle merken', 'Technische kennis', 'Veilig laden']
    },
    {
      icon: Truck,
      title: 'Grotere voertuigen',
      description: 'Mini busjes zijn groter en zwaarder dan auto\'s. Wij hebben speciale apparatuur en ervaring om deze professioneel te vervoeren.',
      stats: 'Tot 3.500kg',
      color: 'from-green-500 to-green-600',
      features: ['Speciale equipment', 'Hogere laadcapaciteit', 'Professioneel']
    },
    {
      icon: Lightning,
      title: 'Snelste service',
      description: 'Binnen 30 minuten ter plaatse in Amsterdam. Ook voor zakelijke klanten met spoed. Direct contact, geen wachttijden.',
      stats: '< 30 min',
      color: 'from-purple-500 to-purple-600',
      features: ['GPS tracking', 'Live updates', 'Direct hulp']
    },
    {
      icon: CurrencyEur,
      title: 'Zakelijke tarieven',
      description: 'Vaste prijzen vanaf €119. Korting bij meerdere busjes. Zakelijke facturen mogelijk. Transparant en vooraf duidelijk.',
      stats: 'Vanaf €119',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Vaste prijzen', 'Factuur mogelijk', 'Volume korting']
    },
    {
      icon: Shield,
      title: '100% verzekerd',
      description: 'Alle mini busjes zijn volledig verzekerd tijdens transport. WA en casco tot €2 miljoen. Ook voor zakelijke voertuigen.',
      stats: '€2M dekking',
      color: 'from-red-500 to-red-600',
      features: ['Volledig gedekt', 'Ook zakelijk', 'Geen eigen risico']
    }
  ];

  const verschillen = [
    {
      aspect: 'Voertuigtype',
      auto: 'Personenauto',
      minibus: 'Vito, Transporter, Transit',
      highlight: true
    },
    {
      aspect: 'Gewicht',
      auto: 'Tot 2.000 kg',
      minibus: 'Tot 3.500 kg',
      highlight: false
    },
    {
      aspect: 'Laadtijd',
      auto: '15 minuten',
      minibus: '20-30 minuten',
      highlight: false
    },
    {
      aspect: 'Prijs',
      auto: 'Vanaf €89',
      minibus: 'Vanaf €119',
      highlight: false
    },
    {
      aspect: 'Meerdere tegelijk',
      auto: 'Niet mogelijk',
      minibus: 'Tot 3 busjes',
      highlight: true
    },
    {
      aspect: 'Zakelijke service',
      auto: 'Basis',
      minibus: 'Premium + factuur',
      highlight: true
    }
  ];

  const cijfers = [
    { number: '1.000+', label: 'Mini busjes vervoerd', icon: Truck },
    { number: '< 30 min', label: 'Gemiddelde responstijd', icon: Clock },
    { number: '4.9/5', label: 'Klantbeoordeling', icon: Star },
    { number: 'Tot 3', label: 'Busjes tegelijk', icon: Users }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
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
            <Star weight="fill" className="w-4 h-4" />
            Onze expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Waarom mini busjes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              anders zijn
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Grotere voertuigen vragen om specialistische kennis en equipment. Wij zijn dé specialist.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:border-orange-200 transition-all">
                
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br ${usp.color} rounded-2xl -z-10`} />
                
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${usp.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <usp.icon weight="duotone" className="w-7 h-7" />
                  </div>
                  <div className="bg-gray-50 px-3 py-1.5 rounded-full">
                    <span className="text-xs font-black text-gray-900">{usp.stats}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-3">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{usp.description}</p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {usp.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Auto vs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Mini Busje
              </span>
            </h3>
            <p className="text-lg text-gray-600">Het verschil in transport</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-black text-gray-900">Aspect</th>
                  <th className="text-center py-4 px-4 font-black text-gray-500">Gewone Auto</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-black">
                      <CheckCircle weight="fill" className="w-4 h-4" />
                      Mini Busje
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {verschillen.map((row, i) => (
                  <tr key={row.aspect} className={i !== verschillen.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.aspect}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.auto}</td>
                    <td className="py-4 px-4 text-center">
                      <div className={`inline-flex items-center gap-2 font-bold ${row.highlight ? 'text-orange-600' : 'text-gray-900'}`}>
                        {row.highlight && <CheckCircle weight="fill" className="w-5 h-5" />}
                        {row.minibus}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Vertrouwd door bedrijven & particulieren
              </h3>
              <p className="text-xl text-gray-300">Specialist in mini busjes transport</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cijfers.map((cijfer, i) => (
                <motion.div
                  key={cijfer.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <cijfer.icon weight="duotone" className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{cijfer.number}</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{cijfer.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}