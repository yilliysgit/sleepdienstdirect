'use client';

import { Question, Plus, CheckCircle, Phone, Lightning, Truck, Briefcase } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BedrijfsBusjesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Kunnen jullie echt tot 3 bedrijfsbusjes tegelijk vervoeren?',
      a: 'Ja, dat klopt! We hebben speciale trailers waarmee we tot 3 grote bedrijfsbusjes (Sprinter, Crafter, Master) tegelijk kunnen vervoeren. Dit is ideaal voor logistieke bedrijven, verhuurbedrijven of bouwbedrijven met meerdere voertuigen. Je krijgt automatisch korting: 2e busje -10%, 3e busje -15%. Perfect voor vlootonderhoud of wanneer meerdere busjes naar de garage moeten.'
    },
    {
      q: 'Wat kost bedrijfsbusje transport binnen Amsterdam?',
      a: 'Prijzen starten vanaf €149 voor korte afstanden (0-10 km) binnen Amsterdam. Voor 10-25 km betaal je €179. Bedrijfsbusjes zijn duurder dan personenauto\'s omdat ze groter, zwaarder en hoger zijn - dit vraagt om zwaardere apparatuur en meer laadtijd (25-35 min). Bij meerdere busjes krijg je automatisch volume korting. Alle kosten zijn vooraf duidelijk, inclusief BTW en verzekering.'
    },
    {
      q: 'Kunnen jullie ook geladen bedrijfsbusjes vervoeren?',
      a: 'Ja, we kunnen ook geladen bedrijfsbusjes veilig vervoeren. Denk aan busjes vol met gereedschap, bouwmateriaal of cateringspullen. We zorgen voor extra zekering van de lading (€25 toeslag) en onze chauffeurs helpen graag met het vastzetten. De lading is meeverzekerd tijdens transport tot €2 miljoen. Ideaal voor bouwbedrijven of logistieke bedrijven.'
    },
    {
      q: 'Bieden jullie zakelijke facturen en vaste contracten?',
      a: 'Absoluut! We werken met 500+ zakelijke klanten. Je ontvangt professionele facturen per mail met alle details en BTW specificatie. Ook vaste contracten en maandelijkse afrekening zijn mogelijk voor bedrijven met regelmatig transport. Voor vaste klanten bieden we zakelijke tarieven en priority service. Perfect voor verhuurbedrijven, logistieke bedrijven en bouwbedrijven.'
    },
    {
      q: 'Hoe snel zijn jullie bij een bedrijfsbusje ter plaatse?',
      a: 'Gemiddeld binnen 30 minuten na je telefoontje in Amsterdam en directe omgeving. Voor zakelijke spoedopdrachten kunnen we vaak binnen 15-20 minuten ter plaatse zijn (€75 toeslag). Je ontvangt direct een ETA via SMS en kunt de chauffeur live volgen via GPS tracking. Ook buiten kantooruren (22:00-07:00) zijn we bereikbaar met €50 toeslag.'
    },
    {
      q: 'Welke bedrijfsbusjes kunnen jullie vervoeren?',
      a: 'We vervoeren alle gangbare bedrijfsbusjes: Mercedes Sprinter (alle lengtes), VW Crafter, Renault Master, Ford Transit (L3/L4), Iveco Daily, Fiat Ducato en vergelijkbare modellen tot 3.500 kg. Ook extra lange modellen (L4) en hoge daken (H3) zijn geen probleem. We hebben specialistische apparatuur voor grote bedrijfsbusjes. Ook geladen busjes kunnen we veilig transporteren.'
    },
    {
      q: 'Is er korting bij regelmatig zakelijk transport?',
      a: 'Ja, we bieden verschillende kortingen voor zakelijke klanten: (1) Volume korting bij meerdere busjes tegelijk: 2e busje -10%, 3e busje -15%. (2) Vaste zakelijke tarieven bij regelmatig transport - bel voor een offerte op maat. (3) Priority service voor vaste klanten. Ideaal voor verhuurbedrijven, logistieke bedrijven of bedrijven met een eigen vloot. Al onze zakelijke klanten krijgen zakelijke facturen en kunnen op rekening betalen.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Question weight="fill" className="w-4 h-4" />
            Zakelijke vragen
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Alles over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              bedrijfsbusje transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vragen over Sprinter, Crafter of Master transport? We hebben de antwoorden.
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
                    ? 'border-blue-500 shadow-xl shadow-blue-100'
                    : 'border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      openIndex === i
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                      {openIndex === i ? (
                        <CheckCircle weight="fill" className="w-6 h-6" />
                      ) : (
                        <Question weight="fill" className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-black leading-tight transition-colors ${
                        openIndex === i ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-blue-100 text-blue-600 rotate-45'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
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
          <div className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Truck weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Zakelijke vragen? Bel direct!
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Onze zakelijke specialisten staan voor je klaar. Ook voor vaste contracten en volume kortingen.
              </p>
              <motion.a
                href="tel:0625375323"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 25 375 323
              </motion.a>
              <p className="text-sm text-white/80 mt-4">
                 30 min ter plaatse • Tot 3 busjes tegelijk • Volume korting • Zakelijke facturen
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}