'use client';

import { Question, Plus, CheckCircle, Phone, Lightning, Motorcycle } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MotorScooterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Hoe snel zijn jullie ter plaatse bij motorpech?',
      a: 'Gemiddeld binnen 30 minuten na je telefoontje in Amsterdam en omgeving. Voor spoedopdrachten kunnen we vaak binnen 15-20 minuten ter plaatse zijn (€50 toeslag). Je ontvangt direct een ETA via SMS en kunt de chauffeur live volgen via GPS tracking. Ook \'s nachts en in het weekend zijn we bereikbaar.'
    },
    {
      q: 'Wat kost motor transport binnen Amsterdam?',
      a: 'Prijzen starten vanaf €99 voor korte afstanden (0-10 km) binnen Amsterdam. Voor 10-25 km betaal je €129. Grotere motors (800cc+) en custom choppers kunnen iets duurder zijn (vanaf €109-€119). Alle kosten zijn vooraf duidelijk, inclusief BTW en verzekering. Geen verborgen toeslagen.'
    },
    {
      q: 'Kunnen jullie ook custom bikes en choppers vervoeren?',
      a: 'Absoluut! We hebben veel ervaring met custom bikes, choppers en aangepaste motoren. Hoge sturen, brede tanks, custom paint - we behandelen je motor als een kunstwerk. Zachte bevestigingsbanden en extra voorzichtig laden. Ook extreem brede choppers of zware motoren (300kg+) zijn geen probleem. Geen extra kosten voor de extra zorg!'
    },
    {
      q: 'Is mijn motor verzekerd tijdens het transport?',
      a: 'Ja, alle motoren zijn volledig verzekerd tijdens transport met WA en cascoverzekering tot €2 miljoen. Ook custom bikes, choppers en driewielers zijn volledig gedekt. Krasvrij transport gegarandeerd - mocht er toch iets gebeuren, dan is de schade gedekt zonder eigen risico voor jou.'
    },
    {
      q: 'Welke motoren en scooters kunnen jullie vervoeren?',
      a: 'We vervoeren alle types: scooters (50cc-750cc), sportmotoren (Ducati, Yamaha R1), cruisers (Harley Davidson, Indian), touring motoren (BMW GS, Goldwing), custom bikes, choppers, bobbers én driewielers (Can-Am Spyder, Trike, Piaggio Ape). Ook liggende of beschadigde motoren kunnen we veilig vervoeren met speciale zijsteunen.'
    },
    {
      q: 'Kunnen jullie ook liggende of gevallen motoren ophalen?',
      a: 'Ja, we kunnen ook liggende of beschadigde motoren veilig vervoeren. Bij motorpech, ongevallen of als je motor omgevallen is, gebruiken we speciale zijsteunen en extra bevestiging voor stabiel transport. Dit kost een kleine toeslag van €25 voor de extra zorg en tijd. Perfect voor motoren die niet meer op het standaard kunnen staan.'
    },
    {
      q: 'Kunnen jullie driewielers zoals Can-Am Spyder vervoeren?',
      a: 'Ja, we hebben ervaring met driewielers! Can-Am Spyder, Piaggio Ape, trikes en Piaggio MP3 - we hebben speciale bevestigingssystemen voor drie wielen. Dit is maatwerk omdat driewielers anders geladen moeten worden dan normale motoren. Prijs vanaf €129 binnen Amsterdam. Bel voor een exacte offerte voor jouw specifieke driewieler.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Question weight="fill" className="w-4 h-4" />
            Veelgestelde vragen
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Alles over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
              motor transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vragen over Harley, Ducati, Vespa of custom bikes? We hebben de antwoorden.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div
                className={`group bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? 'border-red-500 shadow-xl shadow-red-100'
                    : 'border-gray-200 hover:border-red-200 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      openIndex === i
                        ? 'bg-gradient-to-br from-red-500 to-orange-600 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-600'
                    }`}>
                      {openIndex === i ? (
                        <CheckCircle weight="fill" className="w-6 h-6" />
                      ) : (
                        <Question weight="fill" className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-black leading-tight transition-colors ${
                        openIndex === i ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-red-100 text-red-600 rotate-45'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-600'
                  }`}>
                    <Plus weight="bold" className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
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
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Motorcycle weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Nog vragen over motor transport?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Bel direct voor advies over jouw motor. Ook voor custom bikes, choppers en driewielers!
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <p className="text-sm text-white/80 mt-4">
                 30 min ter plaatse • Alle merken • Krasvrij • Ook custom bikes
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}