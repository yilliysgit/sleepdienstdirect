// src/app/[locale]/components/ServicesCarousel.tsx
'use client';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type Slide = {
  title: string;
  img: string;
  caption: string;
};

export default function ServicesCarousel() {
  const t = useTranslations('diensten.carousel');
  const slides = (t.raw('slides') as Slide[]) ?? [];

  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollBy = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const step = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const handler = () => {
      const cards = Array.from(el.querySelectorAll('[data-slide="1"]')) as HTMLElement[];
      const centers = cards.map((c) =>
        Math.abs(c.offsetLeft + c.offsetWidth / 2 - (el.scrollLeft + el.clientWidth / 2))
      );
      const nearest = centers.indexOf(Math.min(...centers));
      if (nearest !== -1) setIndex(nearest);
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">{t('heading')}</h2>
            <p className="text-gray-600">{t('subheading')}</p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label={t('prev')}
              className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              <CaretLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label={t('next')}
              className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              <CaretRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* scroller */}
        <div
          ref={scroller}
          className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-pb-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* hide scrollbar (webkit) */}
          <style>{`.snap-x::-webkit-scrollbar{display:none}`}</style>

          {slides.map((s) => (
            <figure
              key={s.title}
              data-slide="1"
              className="snap-start shrink-0 w-[85%] sm:w-[55%] lg:w-[36%]
                         overflow-hidden rounded-2xl border border-gray-200 bg-white
                         shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative">
                <img src={s.img} alt={s.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <figcaption className="p-5">
                <div className="text-lg font-extrabold text-gray-900">{s.title}</div>
                <div className="text-sm text-gray-600">{s.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* dots */}
        <div className="mt-4 flex items-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                index === i ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
