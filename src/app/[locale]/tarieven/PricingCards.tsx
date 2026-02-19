'use client';

import { CheckCircle } from '@phosphor-icons/react';

type Card = {
  title: string;
  price: string;
  note?: string;
  bullets: string[];
  cta?: { label: string; href: string };
  highlight?: boolean;
};

export default function PricingCards() {
  const cards: Card[] = [
    {
      title: 'Sleepdienst direct (A’dam)',
      price: '€ 80,00 starttarief (dag) • € 130,00 (nacht)',
      note: '+ € 1,00 per km sleepkosten',
      bullets: ['We rijden naar de opgegeven locatie','We slepen het voertuig','Naar jouw gewenste bestemming'],
      cta: { label: 'Direct bestellen', href: 'tel:0612345678' },
      highlight: true,
    },
    {
      title: 'Transporter slepen',
      price: 'Prijs op aanvraag',
      note: '+ € 1,00 per km sleepkosten',
      bullets: ['Ophalen transporter','Verplaatsen naar gewenste locatie','Geschikt voor bedrijfsvoertuigen'],
      cta: { label: 'Offerte aanvragen', href: '/contact' },
    },
    {
      title: 'Schadeauto slepen',
      price: 'Prijs op aanvraag (statio mogelijk)',
      note: '+ € 1,00 per km sleepkosten',
      bullets: ['Ophalen bij locatie','Veilig vervoer naar schadebedrijf','100% verzekerd transport'],
      cta: { label: 'Direct bestellen', href: 'tel:0612345678' },
    },
  ];

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title}
            className={`rounded-2xl border ${c.highlight ? 'border-orange-500' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
            <h3 className="text-xl font-black text-gray-900">{c.title}</h3>
            <div className="mt-2 text-gray-900 font-semibold">{c.price}</div>
            {c.note && <div className="text-sm text-gray-500">{c.note}</div>}

            <ul className="mt-4 space-y-2">
              {c.bullets.map(b => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle weight="fill" className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {c.cta && (
              <a href={c.cta.href}
                 className="mt-5 inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-4 py-3">
                {c.cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
