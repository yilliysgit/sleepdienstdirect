'use client';

import { Star, Quotes, CheckCircle, Lightning, Clock, Heart, Briefcase } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MiniBusjesTestimonials() {
  
  const testimonials = [
    {
      name: 'Marco Visser',
      company: 'Van Rental Amsterdam',
      location: 'Amsterdam Sloterdijk',
      rating: 5,
      text: 'Als verhuurbedrijf hebben we regelmatig busjes die terug moeten. Deze sleepdienst kan tot 3 Transporters tegelijk ophalen - enorm efficiënt! Vaste prijzen, altijd op tijd, top service. Aanrader voor elk verhuurbedrijf.',
      image: 'https://i.pravatar.cc/150?img=12',
      date: 'Oktober 2024',
      highlight: '3 busjes tegelijk',
      situation: 'Verhuurbedrijf, 3x Transporter',
      type: 'zakelijk'
    },
    {
      name: 'Linda de Jong',
      company: 'Bouwbedrijf De Jong',
      location: 'Amsterdam Noord',
      rating: 5,
      text: 'Onze Mercedes Vito bleef staan op de bouwplaats. Direct gebeld, binnen 25 minuten stond de sleepwagen er al. Zakelijke factuur zonder gedoe. Voor bedrijven echt de beste keuze in Amsterdam.',
      image: 'https://i.pravatar.cc/150?img=5',
      date: 'Oktober 2024',
      highlight: 'Zakelijke service',
      situation: 'Mercedes Vito, bouwplaats',
      type: 'zakelijk'
    },
    {
      name: 'Ahmed Hassan',
      company: 'Particulier',
      location: 'Amsterdam Oost',
      rating: 5,
      text: 'Had een Transit Connect gehuurd voor verhuizing, maar kreeg motorpech. Super snel geholpen, binnen 20 minuten ter plaatse. Prijs was precies zoals beloofd. Ook voor particulieren zeer aan te raden!',
      image: 'https://i.pravatar.cc/150?img=33',
      date: 'September 2024',
      highlight: 'Snel & betrouwbaar',
      situation: 'Transit Connect, verhuizing',
      type: 'particulier'
    },
    {
      name: 'Peter Jansen',
      company: 'Transport Solutions BV',
      location: 'Amstelveen',
      rating: 5,
      text: 'Wij hebben een vloot van 12 busjes. Deze dienst heeft ons al meerdere keren gered met hun "3 tegelijk" optie. Korting bij volume, professioneel en altijd bereikbaar. Vaste partner voor ons bedrijf.',
      image: 'https://i.pravatar.cc/150?img=68',
      date: 'September 2024',
      highlight: 'Volume korting',
      situation: 'Bedrijfsvloot, meerdere busjes',
      type: 'zakelijk'
    },
    {
      name: 'Sophie Bakker',
      company: 'Cateringbedrijf Sophie',
      location: 'Amsterdam Zuid',
      rating: 5,
      text: 'Onze Vito met alle cateringspullen kreeg pech voor een groot event. Paniekmodus! Maar binnen 30 minuten was alles geregeld. Zakelijk account aangemaakt, factuur per mail. Echt top!',
      image: 'https://i.pravatar.cc/150?img=9',
      date: 'Augustus 2024',
      highlight: 'Spoedservice',
      situation: 'Mercedes Vito, catering',
      type: 'zakelijk'
    },
    {
      name: 'Dennis Smit',
      company: 'Particulier',
      location: 'Zaandam',
      rating: 5,
      text: 'Zelf een Transporter gekocht, kreeg na 2 weken al pech. Dacht dat het duur zou zijn voor zo\'n groot busje, maar viel mee! €149 van Zaandam naar Amsterdam garage. Netjes geladen, goed verzekerd.',
      image: 'https://i.pravatar.cc/150?img=56',
      date: 'Augustus 2024',
      highlight: 'Eerlijke prijs',
      situation: 'VW Transporter, particulier',
      type: 'particulier'
    },
    {
      name: 'Robert de Vries',
      company: 'Schoonmaakbedrijf R&Z',
      location: 'Hoofddorp',
      rating: 5,
      text: '2 Vito\'s tegelijk moesten naar de garage voor onderhoud. Normaal zou je 2x moeten bellen, maar deze dienst pakte ze allebei in één keer! Korting op de 2e busje ook nog. Slim geregeld.',
      image: 'https://i.pravatar.cc/150?img=14',
      date: 'Juli 2024',
      highlight: '2 busjes tegelijk',
      situation: '2x Mercedes Vito',
      type: 'zakelijk'
    },
    {
      name: 'Emma Peters',
      company: 'Particulier',
      location: 'Haarlem',
      rating: 5,
      text: 'Transit Connect van vrienden geleend, kreeg storing. Was bang dat ze boos zouden zijn maar de sleepservice was zo snel en professioneel. Auto netjes afgeleverd bij garage, foto\'s gemaakt. Perfect!',
      image: 'https://i.pravatar.cc/150?img=27',
      date: 'Juli 2024',
      highlight: 'Professioneel',
      situation: 'Transit Connect, storing',
      type: 'particulier'
    },
    {
      name: 'Jan Bakker',
      company: 'Tuinbedrijf Bakker',
      location: 'Amsterdam West',
      rating: 5,
      text: 'Transporter vol met gereedschap bleef staan. Binnen 20 minuten stond de sleepwagen er. Chauffeur hielp zelfs met het vastzetten van het gereedschap. Zakelijke aanpak, maar persoonlijke service. Top!',
      image: 'https://i.pravatar.cc/150?img=51',
      date: 'Juni 2024',
      highlight: 'Persoonlijke service',
      situation: 'VW Transporter, gereedschap',
      type: 'zakelijk'
    }
  ];

  const stats = [
    { value: '1.000+', label: 'Mini busjes vervoerd' },
    { value: '4.9/5', label: 'Gemiddelde beoordeling' },
    { value: '< 30 min', label: 'Gemiddelde responstijd' },
    { value: '300+', label: 'Zakelijke klanten' }
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
              bedrijven & particulieren
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van verhuurbedrijven tot particulieren - echte verhalen van mini busje transport.
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

                {/* Type badge */}
                <div className="absolute -top-4 -right-4">
                  {testimonial.type === 'zakelijk' ? (
                    <div className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
                      <Briefcase weight="fill" className="w-3 h-3 inline mr-1" />
                      ZAKELIJK
                    </div>
                  ) : (
                    <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
                      PARTICULIER
                    </div>
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 mt-2">
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
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
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
              Word onderdeel van 300+ zakelijke klanten
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Van verhuurbedrijven tot bouwbedrijven. Vaste partner voor mini busjes transport.
            </p>

            {/* Trust elements */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Lightning, text: '< 30 minuten ter plaatse' },
                { icon: Briefcase, text: 'Ook zakelijke facturen' },
                { icon: CheckCircle, text: 'Tot 3 busjes tegelijk' }
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