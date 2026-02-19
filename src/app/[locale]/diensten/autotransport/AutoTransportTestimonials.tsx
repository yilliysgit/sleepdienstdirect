'use client';

import { Star, Quotes, CheckCircle, Lightning, Clock, Heart } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function AutoTransportTestimonials() {
  
  const testimonials = [
    {
      name: 'Linda van Dijk',
      location: 'Amsterdam Centrum',
      rating: 5,
      text: 'Autopech midden in de stad, wat een stress! Belde deze sleepdienst en binnen 20 minuten stond er een vriendelijke chauffeur. Super snel geholpen, vaste prijs zoals beloofd. Aanrader!',
      image: 'https://i.pravatar.cc/150?img=1',
      date: 'Oktober 2024',
      highlight: 'Binnen 20 minuten',
      situation: 'Autopech centrum'
    },
    {
      name: 'Ahmed Hassan',
      location: 'Amsterdam Noord',
      rating: 5,
      text: 'Lekke band op de A10, gevaarlijke situatie. Direct gebeld en ze waren er binnen 25 minuten. Professioneel geladen en veilig naar de garage gebracht. Top service!',
      image: 'https://i.pravatar.cc/150?img=13',
      date: 'Oktober 2024',
      highlight: 'Snelle hulp A10',
      situation: 'Lekke band snelweg'
    },
    {
      name: 'Karin Bakker',
      location: 'Amstelveen',
      rating: 5,
      text: 'Auto wilde niet meer starten na het winkelen. Belde om 18:00, binnen half uur stond de sleepwagen er al. Geen gedoe, geen verrassingen in de prijs. Perfect!',
      image: 'https://i.pravatar.cc/150?img=5',
      date: 'September 2024',
      highlight: 'Ook na kantooruren',
      situation: 'Auto start niet'
    },
    {
      name: 'Marco de Vries',
      location: 'Amsterdam Oost',
      rating: 5,
      text: 'Motorpech tijdens de spits, paniekerig gebeld. Rustige chauffeur, duidelijke communicatie en razendsnel ter plaatse. Prijs was precies wat ze aan de telefoon zeiden. Top!',
      image: 'https://i.pravatar.cc/150?img=12',
      date: 'September 2024',
      highlight: 'Tijdens de spits',
      situation: 'Motorpech'
    },
    {
      name: 'Sarah Jansen',
      location: 'Amsterdam Zuid',
      rating: 5,
      text: 'Accu leeg midden in de nacht (03:00). Dacht dat ik tot de ochtend moest wachten maar ze kwamen gewoon! Binnen 30 minuten geholpen. Echt 24/7 bereikbaar dus.',
      image: 'https://i.pravatar.cc/150?img=9',
      date: 'September 2024',
      highlight: 'Ook \'s nachts (03:00)',
      situation: 'Accu leeg, nacht'
    },
    {
      name: 'Tom Visser',
      location: 'Diemen',
      rating: 5,
      text: 'Koppeling kapot, auto bleef staan. Direct contact, vriendelijke service en binnen 20 minuten opgehaald. Netjes naar de garage gebracht. Kan niet beter!',
      image: 'https://i.pravatar.cc/150?img=33',
      date: 'Augustus 2024',
      highlight: 'Vriendelijke service',
      situation: 'Koppeling defect'
    },
    {
      name: 'Emma Peters',
      location: 'Amsterdam West',
      rating: 5,
      text: 'Botsinkje gehad, auto niet meer te rijden. Stond in shock maar de chauffeur was super kalm en behulpzaam. Alles geregeld met verzekering. Echte professionals.',
      image: 'https://i.pravatar.cc/150?img=20',
      date: 'Augustus 2024',
      highlight: 'Hulp bij ongeval',
      situation: 'Botsing'
    },
    {
      name: 'Dennis Smit',
      location: 'Zaandam',
      rating: 5,
      text: 'Remmen maakten vreemd geluid, durfde niet verder te rijden. Gebeld, 15 minuten later stond de sleepwagen er. GPS tracking werkte perfect, zag hem aankomen. Top!',
      image: 'https://i.pravatar.cc/150?img=68',
      date: 'Juli 2024',
      highlight: 'GPS tracking',
      situation: 'Remprobleem'
    },
    {
      name: 'Lisa Koopman',
      location: 'Haarlem',
      rating: 5,
      text: 'Versnellingsbak deed het niet meer. Vanuit Haarlem naar Amsterdam garage gebracht. Prijs was iets hoger door de afstand maar nog steeds eerlijk. Goede service.',
      image: 'https://i.pravatar.cc/150?img=27',
      date: 'Juli 2024',
      highlight: 'Ook buiten Amsterdam',
      situation: 'Versnellingsbak'
    }
  ];

  const stats = [
    { value: '10.000+', label: 'Tevreden klanten' },
    { value: '4.9/5', label: 'Gemiddelde beoordeling' },
    { value: '< 30 min', label: 'Gemiddelde responstijd' },
    { value: '98%', label: 'Zou ons aanbevelen' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
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
            Wat klanten zeggen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vertrouwd door{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              10.000+ Amsterdammers
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Echte reviews van mensen die we hielpen in hun moeilijkste moment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg hover:border-orange-200 transition-all"
            >
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl border border-gray-200 p-6 md:p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 h-full flex flex-col">
                
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quotes weight="fill" className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold mb-4 self-start">
                  <Lightning weight="fill" className="w-3 h-3" />
                  {testimonial.highlight}
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Bottom section */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100"
                    />
                    <div>
                      <div className="font-black text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>

                  {/* Situation info */}
                  <div className="bg-gradient-to-r from-gray-50 to-transparent rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Situatie</div>
                        <div className="font-bold text-gray-900 text-sm">{testimonial.situation}</div>
                      </div>
                      <div className="text-xs text-gray-600">{testimonial.date}</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Word onderdeel van 10.000+ tevreden klanten
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Autopech? Wij zijn er binnen 30 minuten. Snel, betrouwbaar en altijd transparant.
            </p>

            {/* Trust elements */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Lightning, text: '< 30 minuten ter plaatse' },
                { icon: Clock, text: '24/7 direct bereikbaar' },
                { icon: CheckCircle, text: '100% verzekerd transport' }
              ].map((item, i) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <item.icon weight="fill" className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <span className="text-sm font-bold text-white text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}