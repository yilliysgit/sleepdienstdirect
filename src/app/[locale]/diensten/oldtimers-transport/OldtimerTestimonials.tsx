'use client';

import { Star, Quotes, Heart, CheckCircle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function OldtimerTestimonials() {
  
  const testimonials = [
    {
      name: 'Peter van der Berg',
      car: 'Porsche 911 Targa 1973',
      rating: 5,
      text: 'Mijn 911 werd behandeld als een museumstuk. De chauffeur had duidelijk kennis van klassieke Porsches en nam alle tijd voor het laden. Geen enkel krasje, perfect vervoerd van Amsterdam naar Haarlem. Dit is hoe je met oldtimers om moet gaan!',
      image: 'https://i.pravatar.cc/150?img=12',
      location: 'Amsterdam',
      date: 'September 2024',
      highlight: 'Kennis van klassiekers'
    },
    {
      name: 'Sophie de Vries',
      car: 'Citroën DS 1972',
      rating: 5,
      text: 'Wat een service! Ze wisten precies hoe ze met de hydraulische vering moesten omgaan. Fotodocumentatie voor en na transport, zachte riemen, beschermingsdoeken - alles tot in de puntjes geregeld. Mijn DS is mijn trots en zij hebben dat perfect begrepen.',
      image: 'https://i.pravatar.cc/150?img=5',
      location: 'Diemen',
      date: 'Juni 2024',
      highlight: 'Technische expertise'
    },
    {
      name: 'Jan Bakker',
      car: 'Mercedes 280 SL 1969',
      rating: 5,
      text: 'Lange afstand van Amstelveen naar Rotterdam, maar ik had totaal geen zorgen. Live updates onderweg, zelfs foto\'s gestuurd bij de tussenstop. Bij aflevering alles gecontroleerd en netjes overgedragen. Aanrader voor elke oldtimer eigenaar!',
      image: 'https://i.pravatar.cc/150?img=33',
      location: 'Amstelveen',
      date: 'Juli 2024',
      highlight: 'Communicatie & zorg'
    },
    {
      name: 'Maria Jansen',
      car: 'Volkswagen Kever 1967',
      rating: 5,
      text: 'Mijn Kever is 57 jaar oud en heeft originele lak. Ik was best nerveus, maar al die zorgen waren onnodig. Extra beschermingsdoeken gebruikt, heel voorzichtig geladen en perfect afgeleverd. Je merkt dat dit echte liefhebbers zijn.',
      image: 'https://i.pravatar.cc/150?img=9',
      location: 'Zaandam',
      date: 'Augustus 2024',
      highlight: 'Respect voor originele staat'
    },
    {
      name: 'Robert Vermeer',
      car: 'Jaguar E-Type 1965',
      rating: 5,
      text: 'Een E-Type is niet zomaar een auto, het is een kunstwerk. De chauffeur begreep dat volledig. Speciale oprijplaten gebruikt vanwege de lage neus, alles beschermd, zelfs het chroom kreeg extra aandacht. Dit is premium service zoals het hoort!',
      image: 'https://i.pravatar.cc/150?img=56',
      location: 'Amsterdam',
      date: 'Mei 2024',
      highlight: 'Premium behandeling'
    },
    {
      name: 'Mike Peters',
      car: 'Ford Mustang 1968',
      rating: 5,
      text: 'Amerikaanse klassieker, breed voertuig, maar geen enkel probleem. Ze hadden aangepaste bevestigingsmaterialen en wisten precies hoe het moest. Duidelijke prijsafspraak vooraf, geen verrassingen achteraf. Professioneel van A tot Z.',
      image: 'https://i.pravatar.cc/150?img=68',
      location: 'Hoofddorp',
      date: 'April 2024',
      highlight: 'Professionele aanpak'
    }
  ];

  const stats = [
    { value: '500+', label: 'Vervoerde oldtimers' },
    { value: '4.9/5', label: 'Gemiddelde beoordeling' },
    { value: '100%', label: 'Schadevrij transport' },
    { value: '98%', label: 'Zou ons aanbevelen' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
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
              oldtimer liefhebbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Echte verhalen van klanten die hun klassieker aan ons toevertrouwden.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CheckCircle weight="fill" className="w-3 h-3" />
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

                  {/* Car info */}
                  <div className="bg-gradient-to-r from-gray-50 to-transparent rounded-xl p-3">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Vervoerd</div>
                    <div className="font-bold text-gray-900">{testimonial.car}</div>
                    <div className="text-xs text-gray-600 mt-1">{testimonial.date}</div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Sluit je aan bij 500+ tevreden eigenaren
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Word onderdeel van onze community van oldtimer liefhebbers die ons vertrouwen voor hun klassieker.
            </p>

            {/* Trust elements */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle, text: '100% verzekerd transport' },
                { icon: Heart, text: 'Behandeld als eigen auto' },
                { icon: Star, text: '4.9/5 sterren gemiddeld' }
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