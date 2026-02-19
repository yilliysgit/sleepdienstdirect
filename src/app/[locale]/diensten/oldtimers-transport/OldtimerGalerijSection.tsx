'use client';

import { Star, MapPin, Calendar, ArrowRight, Heart, Camera } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OldtimerGalerijSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: 'Porsche 911 Targa 1973',
      location: 'Amsterdam → Haarlem',
      date: 'September 2024',
      category: 'sports',
      image: '/images/oldtimer-transport.jpg',
      testimonial: {
        name: 'Peter van der Berg',
        rating: 5,
        text: 'Mijn 911 werd behandeld als een museumstuk. Perfecte service, geen krasje. Top!'
      },
      details: {
        distance: '25 km',
        duration: '45 min laden + transport',
        special: 'Extra lage rijhoogte, speciale oprijplaten gebruikt'
      }
    },
    {
      id: 2,
      title: 'Volkswagen Kever 1967',
      location: 'Zaandam → Amsterdam',
      date: 'Augustus 2024',
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=2080',
      testimonial: {
        name: 'Maria Jansen',
        rating: 5,
        text: 'Perfecte communicatie en super zorgvuldig geladen. Aanrader!'
      },
      details: {
        distance: '18 km',
        duration: '30 min laden',
        special: 'Oude lak beschermd met zachte doeken'
      }
    },
    {
      id: 3,
      title: 'Mercedes 280 SL 1969',
      location: 'Amstelveen → Rotterdam',
      date: 'Juli 2024',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070',
      testimonial: {
        name: 'Jan Bakker',
        rating: 5,
        text: 'Lange afstand, maar perfect verlopen. Zelfs foto\'s gemaakt onderweg!'
      },
      details: {
        distance: '75 km',
        duration: '2 uur totaal',
        special: 'Chroom extra beschermd, fotodocumentatie'
      }
    },
    {
      id: 4,
      title: 'Citroën DS 1972',
      location: 'Diemen → Haarlem',
      date: 'Juni 2024',
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070',
      testimonial: {
        name: 'Sophie de Vries',
        rating: 5,
        text: 'Kennis van hydraulische vering was indrukwekkend. Echt specialisten!'
      },
      details: {
        distance: '35 km',
        duration: '1 uur totaal',
        special: 'Rekening gehouden met hydraulische vering'
      }
    },
    {
      id: 5,
      title: 'Jaguar E-Type 1965',
      location: 'Amsterdam → Hoorn',
      date: 'Mei 2024',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064',
      testimonial: {
        name: 'Robert Vermeer',
        rating: 5,
        text: 'Mijn droom auto perfect vervoerd. Kunnen niet beter!'
      },
      details: {
        distance: '45 km',
        duration: '1.5 uur',
        special: 'Zeldzaam model, extra voorzichtig geladen'
      }
    },
    {
      id: 6,
      title: 'Ford Mustang 1968',
      location: 'Hoofddorp → Amsterdam',
      date: 'April 2024',
      category: 'american',
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5f164558f?q=80&w=2070',
      testimonial: {
        name: 'Mike Peters',
        rating: 5,
        text: 'Amerikaanse klassieker veilig aangekomen. Super blij!'
      },
      details: {
        distance: '22 km',
        duration: '50 min',
        special: 'Breed voertuig, aangepaste bevestiging'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Alle', count: cases.length },
    { id: 'sports', label: 'Sportwagens', count: cases.filter(c => c.category === 'sports').length },
    { id: 'classic', label: 'Klassiekers', count: cases.filter(c => c.category === 'classic').length },
    { id: 'luxury', label: 'Luxe', count: cases.filter(c => c.category === 'luxury').length },
    { id: 'american', label: 'Amerikaans', count: cases.filter(c => c.category === 'american').length }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Camera weight="fill" className="w-4 h-4" />
            Onze projecten
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vervoerde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              klassiekers
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van sportief tot klassiek - elke oldtimer krijgt de zorg die het verdient.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { number: '500+', label: 'Oldtimers vervoerd' },
            { number: '4.9/5', label: 'Gemiddelde review' },
            { number: '100%', label: 'Schadevrij afgeleverd' },
            { number: '24/7', label: 'Bereikbaar' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              {filter.label}
              <span className={`ml-2 text-xs ${activeFilter === filter.id ? 'text-white/80' : 'text-gray-500'}`}>
                ({filter.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem, i) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              layout
              className="group"
            >
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-orange-200 transition-all duration-300">
                
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-gray-900 shadow-lg">
                    <Calendar weight="fill" className="w-3 h-3 inline mr-1" />
                    {caseItem.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin weight="fill" className="w-4 h-4 text-orange-500" />
                    {caseItem.location}
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Afstand:</span>
                      <span className="font-bold text-gray-900">{caseItem.details.distance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duur:</span>
                      <span className="font-bold text-gray-900">{caseItem.details.duration}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-700 italic">
                        <Heart weight="fill" className="w-3 h-3 inline text-orange-500 mr-1" />
                        {caseItem.details.special}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(caseItem.testimonial.rating)].map((_, i) => (
                        <Star key={i} weight="fill" className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "{caseItem.testimonial.text}"
                    </p>
                    <p className="text-xs font-bold text-gray-900">
                      - {caseItem.testimonial.name}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Jouw oldtimer hier?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Word onderdeel van onze succesverhalen. Bel ons en ervaar zelf de beste zorg voor jouw klassieker.
              </p>
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                Plan je transport
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}