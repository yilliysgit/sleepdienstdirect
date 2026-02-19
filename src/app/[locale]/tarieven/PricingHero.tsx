'use client';

export default function PricingHero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Een auto of ander voertuig laten slepen?
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Transparante tarieven zonder verrassingen. Binnen Amsterdam werken we met een starttarief
          en daarbuiten berekenen we <span className="font-medium">€1,00 per km sleepkosten</span>.
          ’s Nachts geldt een hoger starttarief.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {['±30 min ter plaatse','100% verzekerd','Auto’s • Busjes L1'].map(b => (
            <span key={b} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
