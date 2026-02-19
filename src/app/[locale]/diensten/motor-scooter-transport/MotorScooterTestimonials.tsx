'use client';

import { Star, Quotes, CheckCircle, Lightning, Clock, Heart, Motorcycle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function MotorScooterTestimonials() {
  
  const testimonials = [
    {
      name: 'Marco de Vries',
      motor: 'Harley Davidson Softail',
      location: 'Amsterdam West',
      rating: 5,
      text: 'Mijn Harley kreeg pech op de A10. Direct gebeld en binnen 25 minuten stond de motortrailer er. Super voorzichtig geladen, geen enkel krasje. Echt professionals die weten hoe ze met een custom bike om moeten gaan!',
      image: 'https://i.pravatar.cc/150?img=12',
      date: 'Oktober 2024',
      highlight: 'Custom bike expert',
      situation: 'Harley Softail, pech A10',
      type: 'cruiser'
    },
    {
      name: 'Lisa Bakker',
      motor: 'Vespa Primavera',
      location: 'Amsterdam Centrum',
      rating: 5,
      text: 'Vespa wilde niet meer starten na het werk. Gebeld, binnen 20 minuten opgehaald. Prijs was precies wat ze zeiden, geen toeslagen. Perfect voor scooter eigenaren!',
      image: 'https://i.pravatar.cc/150?img=5',
      date: 'Oktober 2024',
      highlight: 'Snelle service',
      situation: 'Vespa, start niet',
      type: 'scooter'
    },
    {
      name: 'Ahmed Hassan',
      motor: 'Ducati Panigale V4',
      location: 'Amsterdam Zuid',
      rating: 5,
      text: 'Sportmotor met laag onderstel, was bang voor schade. Maar ze hadden speciale lage rijplaten! Keurig geladen en veilig naar de dealer gebracht. Weten echt wat ze doen met sportmotoren.',
      image: 'https://i.pravatar.cc/150?img=33',
      date: 'September 2024',
      highlight: 'Sportmotor kennis',
      situation: 'Ducati Panigale, laag',
      type: 'sport'
    },
    {
      name: 'Peter Jansen',
      motor: 'BMW R1250 GS',
      location: 'Amstelveen',
      rating: 5,
      text: 'Grote touring motor met veel gewicht en hoge koffers. Geen enkel probleem voor deze jongens. Stevige bevestiging en koffers bleven gewoon zitten. Echt vakmanschap!',
      image: 'https://i.pravatar.cc/150?img=68',
      date: 'September 2024',
      highlight: 'Touring specialist',
      situation: 'BMW GS, groot',
      type: 'touring'
    },
    {
      name: 'Sophie Vermeer',
      motor: 'Custom Chopper',
      location: 'Haarlem',
      rating: 5,
      text: 'Custom chopper met hoge sturen en brede tank. Heel bezorgd over mijn baby, maar ze behandelden hem als een kunstwerk. Extra zachte banden, perfecte zekering. Toppers!',
      image: 'https://i.pravatar.cc/150?img=9',
      date: 'Augustus 2024',
      highlight: 'Custom chopper care',
      situation: 'Custom chopper',
      type: 'custom'
    },
    {
      name: 'Dennis Smit',
      motor: 'Yamaha MT-07',
      location: 'Zaandam',
      rating: 5,
      text: 'Motorpech op weg naar werk. Gebeld om 07:00, binnen 20 minuten geholpen. Geen extra kosten voor ochtendspits. Prijs was eerlijk en service perfect. Aanrader!',
      image: 'https://i.pravatar.cc/150?img=56',
      date: 'Augustus 2024',
      highlight: 'Ook vroeg',
      situation: 'Yamaha MT-07, ochtend',
      type: 'naked'
    },
    {
      name: 'Emma Peters',
      motor: 'Honda PCX',
      location: 'Diemen',
      rating: 5,
      text: 'Scooter kreeg storing, ben niet technisch. Chauffeur was super vriendelijk en legde alles uit. Veilig naar de garage gebracht, zelfs geholpen met afspraak maken. Echt persoonlijke service!',
      image: 'https://i.pravatar.cc/150?img=27',
      date: 'Juli 2024',
      highlight: 'Persoonlijke aanpak',
      situation: 'Honda PCX, storing',
      type: 'scooter'
    },
    {
      name: 'Robert de Jong',
      motor: 'Can-Am Spyder',
      location: 'Amsterdam Noord',
      rating: 5,
      text: 'Driewieler is lastig te vervoeren, maar zij hadden ervaring ermee. Speciale bevestiging voor drie wielen, alles professioneel geregeld. Blij dat ik ze gevonden heb!',
      image: 'https://i.pravatar.cc/150?img=14',
      date: 'Juli 2024',
      highlight: 'Driewieler expert',
      situation: 'Can-Am Spyder',
      type: 'trike'
    },
    {
      name: 'Jan Bakker',
      motor: 'Kawasaki Ninja',
      location: 'Hoofddorp',
      rating: 5,
      text: 'Sportmotor gevallen na gladheid. Motor lag op zijn kant, was in paniek. Ze kwamen snel en haalden hem liggend op met extra zekering. Geen extra schade, perfect!',
      image: 'https://i.pravatar.cc/150?img=51',
      date: 'Juni 2024',
      highlight: 'Ook liggende motoren',
      situation: 'Kawasaki Ninja, gevallen',
      type: 'sport'
    }
  ];

  const stats = [
    { value: '1.000+', label: 'Motoren vervoerd' },
    { value: '4.9/5', label: 'Gemiddelde beoordeling' },
    { value: '< 30 min', label: 'Gemiddelde responstijd' },
    { value: '100%', label: 'Krasvrij afgeleverd' }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
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
            <Heart weight="fill" className="w-4 h-4" />
            Wat motorrijders zeggen
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vertrouwd door{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              1.000+ motorrijders
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Van Harley tot Vespa - echte reviews van motorrijders die we hielpen.
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
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-lg hover:border-red-200 transition-all"
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
              <div className="relative bg-white rounded-3xl border border-gray-200 p-6 md:p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300 h-full flex flex-col">
                
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quotes weight="fill" className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold mb-4 self-start">
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
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-red-100"
                    />
                    <div>
                      <div className="font-black text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-red-600 font-bold">{testimonial.motor}</div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Word onderdeel van 1.000+ tevreden motorrijders
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Van Harley tot Vespa. Snel, betrouwbaar en krasvrij transport.
            </p>

            {/* Trust elements */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Lightning, text: '< 30 minuten ter plaatse' },
                { icon: Motorcycle, text: 'Alle merken & types' },
                { icon: CheckCircle, text: '100% krasvrij' }
              ].map((item, i) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <item.icon weight="fill" className="w-6 h-6 text-red-400 flex-shrink-0" />
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