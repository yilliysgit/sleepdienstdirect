'use client';

import { Lightning, Shield, Wrench, CurrencyEur, Star, CheckCircle, Motorcycle, Clock, Heart, Users } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MotorScooterUSP() {
  
  const usps = [
    {
      icon: Wrench,
      title: 'Specialistische kennis',
      description: 'Onze chauffeurs hebben ervaring met alle motormerken en types. Van Harley cruiser tot Ducati sportmotor, van Vespa scooter tot Can-Am trike. We kennen de technische details en bevestigingspunten.',
      stats: '15+ jaar',
      color: 'from-red-500 to-orange-600',
      features: ['Alle merken & types', 'Custom bikes kennis', 'Veilige bevestiging']
    },
    {
      icon: Motorcycle,
      title: 'Speciale motortrailer',
      description: 'We gebruiken professionele motortrailers met zachte banden en verstelbare bevestigingssystemen. Geschikt voor alle types: van lichte scooters tot zware cruisers en custom choppers.',
      stats: 'Tot 400kg',
      color: 'from-orange-500 to-orange-600',
      features: ['Zachte banden', 'Verstelbaar systeem', 'Krasvrije lading']
    },
    {
      icon: Heart,
      title: 'Ook liggende motoren',
      description: 'Motorpech of ongeval? We kunnen ook liggende of beschadigde motoren veilig vervoeren. Speciale zijsteunen en bevestiging zorgen voor stabiel transport, zelfs als je motor niet op het standaard staat.',
      stats: 'Alle situaties',
      color: 'from-blue-500 to-blue-600',
      features: ['Pech & ongevallen', 'Liggende motoren OK', 'Extra zekering']
    },
    {
      icon: Lightning,
      title: 'Snelste service',
      description: 'Binnen 30 minuten ter plaatse in Amsterdam en omgeving. Ook voor spoedopdrachten. Direct contact, geen wachttijden. GPS tracking zodat je precies weet wanneer we er zijn.',
      stats: '< 30 min',
      color: 'from-purple-500 to-purple-600',
      features: ['GPS tracking', 'Live updates', 'Direct hulp']
    },
    {
      icon: CurrencyEur,
      title: 'Scherpe prijzen',
      description: 'Vaste prijzen vanaf €99 voor korte afstanden. Geen verrassingen achteraf. Ook voor custom bikes en zware motoren. Transparant en vooraf duidelijk.',
      stats: 'Vanaf €99',
      color: 'from-green-500 to-green-600',
      features: ['Vaste prijzen', 'Geen verrassingen', 'BTW inbegrepen']
    },
    {
      icon: Shield,
      title: '100% verzekerd',
      description: 'Alle motoren zijn volledig verzekerd tijdens transport. WA en casco tot €2 miljoen. Ook custom bikes, choppers en driewielers zijn gedekt. Geen eigen risico voor jou.',
      stats: '€2M dekking',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Volledig gedekt', 'Ook custom bikes', 'Geen eigen risico']
    }
  ];

  const motorTypes = [
    {
      category: 'Sport',
      examples: ['Ducati', 'Yamaha R1', 'Kawasaki Ninja', 'Honda CBR'],
      icon: '🏍️'
    },
    {
      category: 'Cruiser',
      examples: ['Harley Davidson', 'Indian', 'Yamaha Bolt', 'Honda Shadow'],
      icon: '🏍️'
    },
    {
      category: 'Touring',
      examples: ['BMW GS', 'Honda Goldwing', 'Yamaha Tracer'],
      icon: '🏍️'
    },
    {
      category: 'Scooter',
      examples: ['Vespa', 'Piaggio', 'Honda PCX', 'Yamaha NMAX'],
      icon: '🛵'
    },
    {
      category: 'Custom',
      examples: ['Choppers', 'Bobbers', 'Café Racers', 'Customs'],
      icon: '🔧'
    },
    {
      category: 'Driewieler',
      examples: ['Can-Am Spyder', 'Piaggio Ape', 'Trike', 'MP3'],
      icon: '🛺'
    }
  ];

  const cijfers = [
    { number: '1.000+', label: 'Motoren vervoerd', icon: Motorcycle },
    { number: '< 30 min', label: 'Gemiddelde responstijd', icon: Clock },
    { number: '4.9/5', label: 'Klantbeoordeling', icon: Star },
    { number: '100%', label: 'Krasvrij afgeleverd', icon: Shield }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
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
            <Star weight="fill" className="w-4 h-4" />
            Onze expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Waarom wij{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              motor specialist
            </span>{' '}
            zijn
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van Harley tot Vespa - wij hebben de kennis en apparatuur voor elk type motor.
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
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:border-red-200 transition-all">
                
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
                      <CheckCircle weight="fill" className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motor Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Alle types{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                motoren & scooters
              </span>
            </h3>
            <p className="text-lg text-gray-600">Van sport tot custom - wij vervoeren ze allemaal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motorTypes.map((type, i) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h4 className="text-xl font-black text-gray-900 mb-3">{type.category}</h4>
                <div className="space-y-2">
                  {type.examples.map((example) => (
                    <div key={example} className="flex items-center gap-2">
                      <CheckCircle weight="fill" className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Vertrouwd door motorrijders
              </h3>
              <p className="text-xl text-gray-300">Specialist in motor & scooter transport</p>
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
                    <cijfer.icon weight="duotone" className="w-8 h-8 text-red-400" />
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