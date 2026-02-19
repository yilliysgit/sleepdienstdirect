'use client';

import { Shield, Wrench, Clock, Heart, CheckCircle, Gauge, Star } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function WaaromOldtimersSpeciaalSection() {
  
  const differences = [
    {
      icon: Shield,
      title: 'Extra bescherming',
      normal: 'Standaard bevestiging',
      oldtimer: 'Zachte riemen & beschermingsdoeken',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Technische kennis',
      normal: 'Moderne auto\'s',
      oldtimer: 'Klassieke mechanica & onderdelen',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Extra tijd',
      normal: '15 minuten laden',
      oldtimer: '30+ minuten zorgvuldig laden',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Passie & respect',
      normal: 'Efficient transport',
      oldtimer: 'Behandelen als eigen auto',
      color: 'from-red-500 to-red-600'
    }
  ];

  const expertise = [
    {
      icon: Gauge,
      stat: '500+',
      label: 'Oldtimers vervoerd',
      description: 'Van pre-war tot youngtimers'
    },
    {
      icon: Star,
      stat: '4.9/5',
      label: 'Review score',
      description: 'Door oldtimer eigenaren'
    },
    {
      icon: Shield,
      stat: '€2M',
      label: 'Verzekering',
      description: 'Volledig gedekt transport'
    }
  ];

  const specialFeatures = [
    'Speciale laadhulpmiddelen voor lage klassiekers',
    'Beschermingsdoeken voor lak en chroom',
    'Kennis van historische voertuigen',
    'Zachte riemen zonder scherpe randen',
    'Extra aandacht voor zeldzame onderdelen',
    'Fotodocumentatie voor & na transport'
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <Heart weight="fill" className="w-4 h-4" />
            Onze expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Waarom oldtimers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              speciaal
            </span>{' '}
            zijn
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Jouw klassieker is meer dan een auto - het is een stukje geschiedenis. Daarom verdient het een unieke aanpak.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differences.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-orange-200 transition-all h-full">
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${diff.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <diff.icon weight="duotone" className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4">{diff.title}</h3>

                {/* Normal vs Oldtimer */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2 opacity-50">
                    <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold mb-1">Normale auto</div>
                      <div className="text-sm text-gray-600">{diff.normal}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle weight="fill" className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-orange-600 uppercase font-bold mb-1">Oldtimer</div>
                      <div className="text-sm font-semibold text-gray-900">{diff.oldtimer}</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                Bewezen expertise in klassiekers
              </h3>
              <p className="text-gray-400 text-lg">Vertrouwd door oldtimer liefhebbers in heel Nederland</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <item.icon weight="duotone" className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{item.stat}</div>
                  <div className="text-sm font-bold text-orange-400 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Special Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Wat maakt ons{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                anders
              </span>
            </h3>
            <p className="text-lg text-gray-600">Speciaal voor jouw klassieker</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle weight="fill" className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-base font-semibold text-gray-900 leading-relaxed">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}