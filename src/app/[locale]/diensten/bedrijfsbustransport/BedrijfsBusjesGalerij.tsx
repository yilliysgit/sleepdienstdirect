'use client';

import { Star, MapPin, Calendar, ArrowRight, Briefcase, Camera, Truck } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BedrijfsBusjesGalerij() {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: '3x Mercedes Sprinter',
      company: 'Van Rental Amsterdam',
      location: 'Sloterdijk → Zaandam',
      date: 'Oktober 2024',
      category: 'multiple',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074',
      testimonial: {
        name: 'Marco Visser',
        rating: 5,
        text: 'Alle 3 de Sprinters in één keer opgehaald. Enorme tijdsbesparing voor ons verhuurbedrijf!'
      },
      details: {
        distance: '18 km',
        duration: '2.5 uur totaal',
        special: '3 busjes tegelijk, volume korting toegepast',
        busjes: '3x Sprinter L3H2'
      }
    },
    {
      id: 2,
      title: 'VW Crafter geladen',
      company: 'Bouwbedrijf De Jong',
      location: 'Amsterdam Noord → Utrecht',
      date: 'September 2024',
      category: 'construction',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=2069',
      testimonial: {
        name: 'Linda de Jong',
        rating: 5,
        text: 'Vol met gereedschap, netjes geborgd en veilig vervoerd. Topservice!'
      },
      details: {
        distance: '52 km',
        duration: '1.5 uur',
        special: 'Geladen met gereedschap, extra zekering',
        busjes: 'VW Crafter L4H3'
      }
    },
    {
      id: 3,
      title: '2x Ford Transit',
      company: 'Express Logistics',
      location: 'Hoofddorp → Amsterdam',
      date: 'Augustus 2024',
      category: 'multiple',
      image: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2070',
      testimonial: {
        name: 'Peter Jansen',
        rating: 5,
        text: 'Beide Transit busjes tegelijk opgehaald. Korting gekregen, perfect geregeld!'
      },
      details: {
        distance: '22 km',
        duration: '2 uur',
        special: '2 busjes tegelijk, zakelijke factuur',
        busjes: '2x Transit L3H2'
      }
    },
    {
      id: 4,
      title: 'Renault Master',
      company: 'Cateringbedrijf Sophie',
      location: 'Amsterdam Zuid → garage',
      date: 'Juli 2024',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2098',
      testimonial: {
        name: 'Sophie Bakker',
        rating: 5,
        text: 'Spoedopdracht, binnen 20 minuten ter plaatse. Event gered!'
      },
      details: {
        distance: '12 km',
        duration: '45 min',
        special: 'Spoedservice, vol met cateringspullen',
        busjes: 'Renault Master L2H2'
      }
    },
    {
      id: 5,
      title: 'Iveco Daily groot model',
      company: 'Transport Solutions',
      location: 'Amstelveen → Rotterdam',
      date: 'Juni 2024',
      category: 'logistics',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070',
      testimonial: {
        name: 'Robert de Vries',
        rating: 5,
        text: 'Extra groot busje, geen enkel probleem. Professionele aanpak!'
      },
      details: {
        distance: '78 km',
        duration: '2.5 uur',
        special: 'Extra groot model, speciale apparatuur',
        busjes: 'Iveco Daily L4H3'
      }
    },
    {
      id: 6,
      title: '3x VW Transporter',
      company: 'Schoonmaakbedrijf R&Z',
      location: 'Zaandam → Amsterdam',
      date: 'Mei 2024',
      category: 'multiple',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074',
      testimonial: {
        name: 'Jan Vermeer',
        rating: 5,
        text: 'Vloot onderhoud, alle 3 tegelijk naar de garage. Mega handig!'
      },
      details: {
        distance: '16 km',
        duration: '2 uur',
        special: 'Maximum 3 busjes, 15% korting op 3e',
        busjes: '3x Transporter T6'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Alle', count: cases.length },
    { id: 'multiple', label: 'Meerdere tegelijk', count: cases.filter(c => c.category === 'multiple').length },
    { id: 'construction', label: 'Bouw', count: cases.filter(c => c.category === 'construction').length },
    { id: 'logistics', label: 'Logistiek', count: cases.filter(c => c.category === 'logistics').length },
    { id: 'food', label: 'Catering', count: cases.filter(c => c.category === 'food').length }
  ];

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Camera weight="fill" className="w-4 h-4" />
            Zakelijke projecten
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vervoerde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              bedrijfsbusjes
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van logistiek tot bouw - tot 3 bedrijfsbusjes tegelijk vervoerd.
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
            { number: '1000+', label: 'Bedrijfsbusjes vervoerd' },
            { number: '4.9/5', label: 'Zakelijke reviews' },
            { number: '500+', label: 'Zakelijke klanten' },
            { number: 'Tot 3', label: 'Busjes tegelijk' }
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
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600'
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
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
                
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-gray-900 shadow-lg">
                      <Calendar weight="fill" className="w-3 h-3 inline mr-1" />
                      {caseItem.date}
                    </div>
                    {caseItem.category === 'multiple' && (
                      <div className="bg-blue-500 text-white rounded-full px-3 py-1.5 text-xs font-bold shadow-lg">
                        <Truck weight="fill" className="w-3 h-3 inline mr-1" />
                        Meerdere
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase weight="fill" className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-bold text-blue-600">{caseItem.company}</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin weight="fill" className="w-4 h-4 text-blue-500" />
                    {caseItem.location}
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-bold text-gray-900">{caseItem.details.busjes}</span>
                    </div>
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
                        <Briefcase weight="fill" className="w-3 h-3 inline text-blue-500 mr-1" />
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
          <div className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Truck weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ook meerdere busjes nodig?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Word onderdeel van 500+ zakelijke klanten. Bel voor een offerte op maat met volume korting!
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                Zakelijke offerte
                <ArrowRight weight="bold" className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}