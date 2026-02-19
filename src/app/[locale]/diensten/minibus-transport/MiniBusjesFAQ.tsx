'use client';

import { Question, Plus, CheckCircle, Phone, Lightning, Truck } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MiniBusjesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kunnen jullie echt tot 3 mini busjes tegelijk vervoeren?',
      a: 'Ja, dat klopt! We hebben speciale trailers waarmee we tot 3 mini busjes (Vito, Transporter, Transit) tegelijk kunnen vervoeren. Dit is ideaal voor verhuurbedrijven of bedrijven met meerdere voertuigen. Je krijgt korting: 2e busje -10%, 3e busje -15%. Bel voor een scherpe offerte.'
    },
    {
      q: 'Wat kost mini busje transport binnen Amsterdam?',
      a: 'Prijzen starten vanaf €119 voor korte afstanden (0-10 km) binnen Amsterdam. Voor 10-25 km betaal je €149. Alle kosten zijn vooraf duidelijk, inclusief BTW en verzekering. Bij meerdere busjes krijg je automatisch korting op de totaalprijs.'
    },
    {
      q: 'Welke mini busjes kunnen jullie vervoeren?',
      a: 'We vervoeren alle gangbare mini busjes: Mercedes Vito, VW Transporter, Ford Transit (Connect), Renault Trafic, Opel Vivaro, Peugeot Expert en vergelijkbare modellen tot 3.500 kg. Ook geladen busjes kunnen we veilig transporteren.'
    },
    {
      q: 'Kunnen jullie ook zakelijke facturen versturen?',
      a: 'Absoluut! We werken met veel bedrijven en verhuurbedrijven. Je ontvangt een professionele factuur per mail met alle details. Ook vaste contracten en maandelijkse afrekening zijn mogelijk voor zakelijke klanten met regelmatig transport.'
    },
    {
      q: 'Hoe snel zijn jullie ter plaatse in Amsterdam?',
      a: 'Gemiddeld binnen 30 minuten na je telefoontje. Voor zakelijke spoedopdrachten kunnen we vaak nog sneller ter plaatse zijn (binnen 15-20 minuten). Je ontvangt direct een ETA via SMS en kunt de chauffeur live volgen via GPS tracking.'
    },
    {
      q: 'Is een mini busje duurder om te vervoeren dan een auto?',
      a: 'Mini busjes zijn iets duurder dan personenauto\'s (vanaf €119 vs €89) omdat ze groter, zwaarder en hoger zijn. Dit vraagt om specialistische apparatuur en meer laadtijd (20-30 min vs 15 min). Maar bij meerdere busjes tegelijk wordt het juist voordeliger door volume korting.'
    },
    {
      q: 'Wat als mijn busje vol zit met spullen of gereedschap?',
      a: 'Geen probleem! We kunnen ook geladen busjes veilig vervoeren. Zorg wel dat losse spullen goed vastzitten. Onze chauffeurs helpen graag met het vastzetten van lading. Waardevolle spullen zijn mee verzekerd tijdens het transport tot €2 miljoen.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Question weight="fill" className="w-4 h-4" />
            Veelgestelde vragen
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Alles over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              mini busje transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vragen over Vito, Transporter of Transit transport? We hebben de antwoorden.
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
                    ? 'border-orange-500 shadow-xl shadow-orange-100'
                    : 'border-gray-200 hover:border-orange-200 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      openIndex === i
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-600'
                    }`}>
                      {openIndex === i ? (
                        <CheckCircle weight="fill" className="w-6 h-6" />
                      ) : (
                        <Question weight="fill" className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-black leading-tight transition-colors ${
                        openIndex === i ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-orange-100 text-orange-600 rotate-45'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-600'
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
          <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Truck weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Nog vragen over mini busje transport?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Bel direct voor advies over jouw situatie. Ook voor meerdere busjes tegelijk!
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <p className="text-sm text-white/80 mt-4">
                 30 min ter plaatse • Tot 3 busjes tegelijk • Volume korting
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}