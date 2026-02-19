'use client';

const FAQ = [
  { q: 'Hoe snel zijn jullie ter plaatse?', a: 'In Amsterdam mikken we op ongeveer 30 minuten, afhankelijk van verkeer en locatie.' },
  { q: 'Welke voertuigen vervoeren jullie?', a: "Personenauto’s, bestelwagens en mini busjes (L1) tot 3.500 kg." },
  { q: 'Is elk transport verzekerd?', a: 'Ja, 100% verzekerd gedurende de hele rit.' },
  { q: 'Kan ik vooraf een prijs krijgen?', a: 'Zeker, via onze calculator of telefonisch ontvang je direct een indicatie.' },
];

export default function ServicesFAQ() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Veelgestelde vragen</h3>
        <div className="mt-6 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="rounded-2xl border border-gray-200 bg-white p-4 group">
              <summary className="list-none cursor-pointer text-sm font-bold text-gray-900">
                {f.q}
              </summary>
              <p className="mt-2 pl-0 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
