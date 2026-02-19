'use client';

import { useMemo, useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

export type FaqProps = {
  id?: string;
  variant?: 'light' | 'dark';
  columns?: 1 | 2;
  defaultOpen?: number[];
  namespace?: string; // NEW: allows using different translations
};

export default function FAQSection({
  id = 'faq',
  variant = 'light',
  columns = 2,
  defaultOpen = [],
  namespace = 'home.faq', // Default to home FAQ
}: FaqProps) {
  const t = useTranslations(namespace);
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen));

  const toggle = (idx: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const isDark = variant === 'dark';
  const bg = isDark ? 'bg-[#0a0f1a]' : 'bg-white';
  const fgTitle = isDark ? 'text-white' : 'text-gray-900';
  const fgSub = isDark ? 'text-blue-100/90' : 'text-gray-600';
  const card = isDark
    ? 'border-white/10 bg-white/5'
    : 'border-gray-200 bg-white';
  const iconColor = isDark ? 'text-white' : 'text-gray-900';

  // Get FAQ items from translations
  const items = t.raw('items');

  // JSON-LD for FAQPage (SEO)
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item: any) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }), [items]);

  return (
    <section id={id} className={`relative overflow-hidden ${bg} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className={`inline-flex items-center gap-2 ${isDark ? 'bg-white/10 text-white border-white/15' : 'bg-orange-500/10 text-orange-600 border-orange-500/30'} px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border`}>
            {t('eyebrow')}
          </span>
          <h2 className={`mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] ${fgTitle}`}>
            {t('title')}
          </h2>
          <p className={`mt-3 text-base md:text-lg ${fgSub}`}>
            {t('description')}
          </p>
        </div>

        <div className={`grid gap-4 md:gap-5 ${columns === 2 ? 'lg:grid-cols-2' : ''}`}>
          {items.map((item: any, idx: number) => {
            const openNow = open.has(idx);
            const panelId = `${id}-panel-${idx}`;
            const btnId = `${id}-button-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-2xl border ${card} p-4 sm:p-5 transition-shadow ${
                  openNow ? (isDark ? 'shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : 'shadow-[0_10px_40px_rgba(0,0,0,0.06)]') : ''
                }`}
              >
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={openNow}
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start gap-3"
                >
                  <span
                    className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border ${
                      isDark ? 'border-white/15 bg-white/10' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    {openNow ? (
                      <Minus className={`w-4 h-4 ${iconColor}`} weight="bold" />
                    ) : (
                      <Plus className={`w-4 h-4 ${iconColor}`} weight="bold" />
                    )}
                  </span>
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold ${fgTitle}`}>
                      {item.question}
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        openNow ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className={`prose prose-sm max-w-none ${isDark ? 'prose-invert text-blue-100/90' : 'text-gray-700'}`}>
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}