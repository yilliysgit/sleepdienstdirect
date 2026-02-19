'use client';

import { Question, Plus, CheckCircle, Phone } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function OldtimerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wat maakt oldtimer transport anders dan normaal sleepvervoer?',
      a: 'Oldtimers krijgen extra aandacht en tijd. We gebruiken zachte riemen zonder scherpe randen, beschermingsdoeken voor lak en chroom, speciale laadhulpmiddelen voor lage klassiekers, en nemen 30-45 minuten voor zorgvuldig laden in plaats van de standaard 15 minuten. Ook maken we fotodocumentatie voor en na transport.'
    },
    {
      q: 'Zijn jullie verzekerd voor oldtimers met hoge waarde?',
      a: 'Ja, we hebben een premiumverzekering tot €2 miljoen dekking. Dit geldt voor alle voertuigen tijdens transport. Voor oldtimers met een zeer hoge waarde kunnen we op aanvraag extra dekking regelen.'
    },
    {
      q: 'Kunnen jullie omgaan met bijzondere klassiekers?',
      a: 'Absoluut. Onze chauffeurs hebben kennis van klassieke voertuigen en hun bijzonderheden - of het nu gaat om hydraulische vering (Citroën DS), lage sportwagens (Porsche, Jaguar), of brede Amerikaanse klassiekers. We passen onze aanpak aan per auto.'
    },
    {
      q: 'Hoe lang duurt het transport van mijn oldtimer?',
      a: 'We nemen minimaal 30-45 minuten voor het laden alleen al. De totale duur hangt af van de afstand. Voor Amsterdam → Haarlem (25km) rekenen we ongeveer 1,5 uur totaal inclusief zorgvuldig laden en lossen.'
    },
    {
      q: 'Wat kost oldtimer transport vergeleken met standaard?',
      a: 'Oldtimer transport start vanaf €149 binnen Amsterdam (vs €89 voor standaard). Dit hogere tarief weerspiegelt de extra tijd, beschermingsmaterialen, expertise en premiumverzekering die we bieden. Zie onze tariefpagina voor exacte prijzen op afstand.'
    },
    {
      q: 'Maken jullie foto\'s van mijn auto tijdens transport?',
      a: 'Ja, standaard maken we foto\'s voor het laden en na aflevering. Dit dient als documentatie van de staat van je klassieker. Op aanvraag kunnen we ook tussentijdse updates met foto\'s sturen.'
    },
    {
      q: 'Kan ik meekijken tijdens het laden?',
      a: 'Natuurlijk! We begrijpen dat je oldtimer heel waardevol voor je is. Je bent van harte welkom om het laadproces te volgen en eventuele specifieke instructies te geven.'
    },
    {
      q: 'Vervoeren jullie ook niet-rijdende projectauto\'s?',
      a: 'Ja, we hebben ervaring met projectauto\'s die niet meer rijden. We gebruiken speciale technieken en gereedschap om deze voertuigen veilig te laden, ook als ze niet meer kunnen sturen of remmen.'
    },
    {
      q: 'Hoe ver van tevoren moet ik het transport boeken?',
      a: 'Voor oldtimers adviseren we minimaal 2-3 dagen van tevoren, zodat we voldoende tijd hebben voor voorbereiding en de juiste beschermingsmaterialen kunnen klaarmaken. Voor spoedgevallen bel ons - vaak kunnen we toch iets regelen.'
    },
    {
      q: 'Wat gebeurt er bij slecht weer tijdens transport?',
      a: 'Je oldtimer wordt beschermd tijdens transport. Bij hevige regen of onweer kunnen we in overleg het transport uitstellen naar een beter moment - de veiligheid van jouw klassieker gaat voor.'
    },
    {
      q: 'Vervoeren jullie ook oldtimers naar het buitenland?',
      a: 'Voor transport binnen Nederland zijn wij gespecialiseerd. Voor transport naar België, Duitsland of verder kunnen we je doorverwijzen naar betrouwbare partners die internationale oldtimer transporten doen.'
    },
    {
      q: 'Wat moet ik doen ter voorbereiding op het transport?',
      a: 'Zorg dat de auto toegankelijk is en eventuele losse onderdelen zijn vastgezet. Wij nemen contact op voor specifieke instructies. Bij bijzondere zaken (alarm, bijzondere bediening) vragen we je dit van tevoren door te geven.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
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
              oldtimer transport
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            De meest gestelde vragen over het vervoeren van klassiekers beantwoord.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
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
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Question weight="duotone" className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Staat je vraag er niet bij?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Bel ons gerust voor een persoonlijk adviesgesprek. We beantwoorden al je vragen over oldtimer transport.
              </p>
              <motion.a
                href="tel:0612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Phone weight="fill" className="w-5 h-5" />
                Bel: 06 12 34 56 78
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}