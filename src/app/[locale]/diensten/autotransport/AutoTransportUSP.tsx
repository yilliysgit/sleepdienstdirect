'use client';

import { Lightning, Shield, CurrencyEur, Clock, Users, Star, CheckCircle, MapPin, Phone } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function AutoTransportUSP() {
  
  const usps = [
    {
      icon: Lightning,
      title: 'Snelste responstijd',
      description: 'Binnen 30 minuten ter plaatse in Amsterdam en directe omgeving. Wij zijn de snelste sleepdienst van de regio.',
      stats: '< 30 min',
      color: 'from-orange-500 to-orange-600',
      features: ['GPS tracking', 'Live ETA updates', 'Direct onderweg']
    },
    {
      icon: Shield,
      title: '100% verzekerd',
      description: 'Alle transporten zijn volledig verzekerd tot €2 miljoen. Jouw auto is bij ons in veilige handen.',
      stats: '€2M dekking',
      color: 'from-blue-500 to-blue-600',
      features: ['WA verzekering', 'Schadeverzekering', 'Geen eigen risico']
    },
    {
      icon: CurrencyEur,
      title: 'Vaste prijzen',
      description: 'Transparante prijzen vanaf €89. Geen verborgen kosten, geen verrassingen achteraf. Wat je ziet is wat je betaalt.',
      stats: 'Vanaf €89',
      color: 'from-green-500 to-green-600',
      features: ['Geen toeslag', 'BTW inbegrepen', 'Vooraf duidelijk']
    },
    {
      icon: Clock,
      title: '24/7 bereikbaar',
      description: 'Dag en nacht, weekend en feestdagen. Wij zijn er altijd voor je wanneer je ons nodig hebt.',
      stats: '365 dagen',
      color: 'from-purple-500 to-purple-600',
      features: ['Ook nachts', 'Weekenden', 'Feestdagen']
    },
    {
      icon: Users,
      title: 'Ervaren chauffeurs',
      description: 'Onze chauffeurs hebben jarenlange ervaring en kennen Amsterdam als hun broekzak. Professioneel en vriendelijk.',
      stats: '10+ jaar',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Gecertificeerd', 'Lokale kennis', 'Vakmanschap']
    },
    {
      icon: MapPin,
      title: 'Heel Amsterdam',
      description: 'Van Noord tot Zuid, van Oost tot West. Wij dekken heel Amsterdam en omgeving af met snelle service.',
      stats: 'Alle wijken',
      color: 'from-red-500 to-red-600',
      features: ['Amsterdam', 'Amstelveen', 'Diemen']
    }
  ];

  const cijfers = [
    { number: '10.000+', label: 'Tevreden klanten', icon: Users },
    { number: '< 30 min', label: 'Gemiddelde responstijd', icon: Clock },
    { number: '4.9/5', label: 'Klantbeoordeling', icon: Star },
    { number: '24/7', label: 'Bereikbaar', icon: Phone }
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
            Onze voordelen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Waarom{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              10.000+ klanten
            </span>{' '}
            voor ons kiezen
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Snel, betrouwbaar en transparant. De beste sleepdienst van Amsterdam.
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Vertrouwd door duizenden Amsterdammers
              </h3>
              <p className="text-xl text-gray-300">De cijfers spreken voor zich</p>
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Wij vs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                de rest
              </span>
            </h3>
            <p className="text-lg text-gray-600">Zie direct het verschil</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-black text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-black">
                      <CheckCircle weight="fill" className="w-4 h-4" />
                      Sleepdienst Direct
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-black text-gray-500">Andere diensten</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Responstijd', ons: '< 30 minuten', anderen: '45-60 minuten' },
                  { feature: 'Bereikbaarheid', ons: '24/7 direct', anderen: 'Beperkte tijden' },
                  { feature: 'Prijzen', ons: 'Vast & transparant', anderen: 'Variabel' },
                  { feature: 'Verzekering', ons: '€2M dekking', anderen: 'Basis' },
                  { feature: 'GPS tracking', ons: 'Live updates', anderen: 'Niet altijd' },
                  { feature: 'Klantbeoordeling', ons: '4.9/5 sterren', anderen: '3.5-4.0/5' }
                ].map((row, i) => (
                  <tr key={row.feature} className={i !== 5 ? 'border-b border-gray-100' : ''}>
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex items-center gap-2 text-orange-600 font-bold">
                        <CheckCircle weight="fill" className="w-5 h-5" />
                        {row.ons}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.anderen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}