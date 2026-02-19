'use client';

import { Phone, MapPin, Motorcycle, CheckCircle, ArrowRight, Clock, Lightning, Wrench } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MotorScooterHoeWerkt() {
  
  const stappen = [
    {
      stap: '01',
      icon: Phone,
      title: 'Bel of boek online',
      subtitle: 'Direct contact met specialist',
      description: 'Bel 06 25 375 323 of boek online. Vertel welk merk en type motor/scooter je hebt. Ook custom bikes, choppers en driewielers zijn geen probleem.',
      features: ['Ook custom bikes', 'Liggende motor OK', 'Direct persoonlijk contact'],
      time: '< 2 min',
      color: 'from-red-500 to-orange-600'
    },
    {
      stap: '02',
      icon: MapPin,
      title: 'We komen naar je toe',
      subtitle: 'Binnen 30 minuten ter plaatse',
      description: 'Onze chauffeur komt met speciale motortrailer naar je toe. Ervaring met alle merken: Harley, Ducati, BMW, Vespa, Yamaha en meer.',
      features: ['Speciale motortrailer', 'Live GPS tracking', 'Ervaren chauffeurs'],
      time: '± 30 min',
      color: 'from-orange-500 to-orange-600'
    },
    {
      stap: '03',
      icon: Motorcycle,
      title: 'Veilig laden',
      subtitle: 'Ook zware & custom bikes',
      description: 'We laden je motor/scooter professioneel met zachte banden en stevige bevestiging. Ook zware cruisers, sportmotoren of custom bikes - alles veilig vervoerd.',
      features: ['Zachte bevestiging', 'Krasvrij laden', '100% verzekerd'],
      time: '15-20 min',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
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
            <Lightning weight="fill" className="w-4 h-4" />
            Supersnel proces
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            In 3 stappen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              motor vervoerd
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van telefoontje tot aflevering. Ook custom bikes en driewielers.
          </p>
        </motion.div>

        {/* Timeline with connecting line */}
        <div className="relative">
          
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5">
            <div className="max-w-6xl mx-auto px-4">
              <div className="h-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
            </div>
          </div>

          {/* Steps Grid */}
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
                <div className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-red-200 transition-all">
                  
                  {/* Number badge on top */}
                  <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border-2 border-gray-200 shadow-sm">
                    <span className="text-xs font-black text-gray-900">{stap.stap}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative z-20">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stap.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <stap.icon weight="duotone" className="w-8 h-8" />
                    </div>
                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-3 py-1 rounded-full text-xs font-bold ml-3">
                      <Clock weight="fill" className="w-3 h-3" />
                      {stap.time}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {stap.title}
                  </h3>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-4">
                    {stap.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stap.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {stap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unique Feature - Custom Bikes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-4">
                <Motorcycle weight="fill" className="w-4 h-4" />
                Ook voor bijzondere motoren
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Custom bikes,<br />choppers & trikes
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Harley custom, chopper met hoge sturen, trike of driewieler - wij hebben ervaring met alle soorten motoren. Ook liggende of beschadigde motoren kunnen we veilig vervoeren.
              </p>
              <div className="space-y-3">
                {[
                  'Custom Harleys & choppers',
                  'Driewielers (Trike, Can-Am)',
                  'Ook liggende motoren'
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
                <Wrench weight="duotone" className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-white/90 font-bold text-lg mb-2">Speciale kennis</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Ervaring', value: '15+ jaar' },
                  { label: 'Custom bikes', value: '500+' },
                  { label: 'Schadevrij', value: '100%' }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                    <span className="text-white font-semibold">{stat.label}</span>
                    <span className="text-white font-black">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
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
            { value: '1000+', label: 'Motoren vervoerd' },
            { value: '100%', label: 'Krasvrij afgeleverd' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-red-200 transition-all"
            >
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Custom bike of bijzondere motor?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Bel ons voor advies over jouw specifieke motor. Harley, chopper, trike - wij hebben de ervaring!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-red-500 transition-all"
              >
                Online boeken
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}