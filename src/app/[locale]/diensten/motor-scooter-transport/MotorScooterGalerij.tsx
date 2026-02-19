'use client';

import { Star, MapPin, Calendar, ArrowRight, Heart, Camera, Motorcycle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MotorScooterGalerij() {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: 'Harley Davidson Fat Boy',
      location: 'Amsterdam → Zaandam',
      date: 'Oktober 2024',
      category: 'cruiser',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070',
      testimonial: {
        name: 'Marco Visser',
        rating: 5,
        text: 'Mijn Fat Boy behandeld als een kunstwerk. Zachte banden, perfecte bevestiging. Top!'
      },
      details: {
        distance: '18 km',
        duration: '40 min laden + transport',
        special: 'Custom chrome, extra voorzichtig geladen'
      }
    },
    {
      id: 2,
      title: 'Ducati Panigale V4',
      location: 'Amsterdam Zuid → Dealer',
      date: 'Oktober 2024',
      category: 'sport',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070',
      testimonial: {
        name: 'Ahmed Hassan',
        rating: 5,
        text: 'Laag onderstel, geen probleem! Lage rijplaten gebruikt. Professioneel!'
      },
      details: {
        distance: '12 km',
        duration: '35 min',
        special: 'Sportmotor, laag onderstel, speciale rijplaten'
      }
    },
    {
      id: 3,
      title: 'Vespa GTS 300',
      location: 'Amsterdam Centrum → Garage',
      date: 'September 2024',
      category: 'scooter',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069',
      testimonial: {
        name: 'Lisa Bakker',
        rating: 5,
        text: 'Snelle service voor mijn Vespa. Binnen 20 minuten opgehaald en veilig naar garage!'
      },
      details: {
        distance: '8 km',
        duration: '25 min',
        special: 'Klassieke Vespa, mint conditie behouden'
      }
    },
    {
      id: 4,
      title: 'BMW R1250 GS Adventure',
      location: 'Amstelveen → Utrecht',
      date: 'September 2024',
      category: 'touring',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070',
      testimonial: {
        name: 'Peter Jansen',
        rating: 5,
        text: 'Grote touring motor met koffers, alles bleef zitten. Echt vakwerk!'
      },
      details: {
        distance: '52 km',
        duration: '1.5 uur',
        special: 'Met volgeladen koffers, zware motor (250kg+)'
      }
    },
    {
      id: 5,
      title: 'Custom Chopper',
      location: 'Haarlem → Custom Garage',
      date: 'Augustus 2024',
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070',
      testimonial: {
        name: 'Sophie de Vries',
        rating: 5,
        text: 'Custom chopper met hoge sturen perfect vervoerd. Echte specialisten!'
      },
      details: {
        distance: '28 km',
        duration: '50 min',
        special: 'Hoge sturen, brede tank, custom paint'
      }
    },
    {
      id: 6,
      title: 'Can-Am Spyder RT',
      location: 'Amsterdam Noord → Dealer',
      date: 'Augustus 2024',
      category: 'trike',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069',
      testimonial: {
        name: 'Robert de Jong',
        rating: 5,
        text: 'Driewieler is lastig, maar zij hadden ervaring! Speciale bevestiging, perfect!'
      },
      details: {
        distance: '15 km',
        duration: '45 min',
        special: 'Driewieler, speciale bevestiging voor 3 wielen'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Alle', count: cases.length },
    { id: 'cruiser', label: 'Cruiser', count: cases.filter(c => c.category === 'cruiser').length },
    { id: 'sport', label: 'Sport', count: cases.filter(c => c.category === 'sport').length },
    { id: 'scooter', label: 'Scooter', count: cases.filter(c => c.category === 'scooter').length },
    { id: 'touring', label: 'Touring', count: cases.filter(c => c.category === 'touring').length },
    { id: 'custom', label: 'Custom', count: cases.filter(c => c.category === 'custom').length },
    { id: 'trike', label: 'Driewieler', count: cases.filter(c => c.category === 'trike').length }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Camera weight="fill" className="w-4 h-4" />
            Onze projecten
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vervoerde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              motoren & scooters
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van Harley tot Vespa - elke motor krijgt de zorg die het verdient.
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
            { number: '1.000+', label: 'Motoren vervoerd' },
            { number: '4.9/5', label: 'Gemiddelde review' },
            { number: '100%', label: 'Krasvrij afgeleverd' },
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
                  ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-red-500 hover:text-red-600'
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
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-red-200 transition-all duration-300">
                
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
                  
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin weight="fill" className="w-4 h-4 text-red-500" />
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
                        <Heart weight="fill" className="w-3 h-3 inline text-red-500 mr-1" />
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
          <div className="inline-block bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Motorcycle weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Jouw motor hier?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Word onderdeel van onze succesverhalen. Van Harley tot Vespa - krasvrij transport gegarandeerd!
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
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