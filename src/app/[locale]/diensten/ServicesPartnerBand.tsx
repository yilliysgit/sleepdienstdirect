// src/app/[locale]/diensten/ServicesPartnerBand.tsx
'use client';

import { SealCheck, ArrowRight, PhoneCall } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type Logo = { src: string; alt: string };
type CTA = {
  partner: string;
  pricing: string;
  contactHref: string;  // bv "/contact"
  pricingHref: string;  // bv "/tarieven"
  phoneLabel?: string;  // bv "Bel direct"
  phoneNumber?: string; // bv "06 25 375 323"
};

export default function ServicesPartnerBand() {
  const t = useTranslations('diensten.partnerBand');

  const highlights = (t.raw('highlights') as string[]) ?? [];
  const logos = (t.raw('logos') as Logo[]) ?? [];
  const cta = (t.raw('cta') as CTA) ?? {
    partner: 'Word partner',
    pricing: 'Bekijk tarieven',
    contactHref: '/contact',
    pricingHref: '/tarieven'
  };

  const tel = (cta.phoneNumber ?? '').replace(/\s+/g, '');

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#0A0F1A] text-white">
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">{t('title')}</h3>
            <p className="mt-3 text-slate-300 max-w-2xl">{t('subtitle')}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 max-w-xl">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-orange-400/15 ring-1 ring-orange-400/30 text-orange-300">
                    <SealCheck weight="fill" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href={cta.contactHref}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white
                           bg-[linear-gradient(180deg,#ff7a1a_0%,#ff5a00_100%)]
                           shadow-[0_14px_34px_-10px_rgba(255,90,0,0.55)]
                           ring-1 ring-orange-500/40 transition-all duration-200 hover:brightness-105 active:translate-y-px"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                {cta.partner}
              </Link>

              <Link
                href={cta.pricingHref}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                           bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors"
              >
                {cta.pricing} <ArrowRight className="h-4 w-4 ml-2" />
              </Link>

              {tel && (
                <a
                  href={`tel:${tel}`}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                             bg-white/0 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  {cta.phoneLabel ?? 'Bel direct'}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.6)]">
              <div className="text-sm font-semibold text-slate-300 mb-3">{t('trusted')}</div>
              <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
                <style>{`.logos::-webkit-scrollbar{display:none}`}</style>
                {logos.map((l) => (
                  <div key={l.src} className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    <img src={l.src} alt={l.alt} className="h-8 w-auto opacity-90" loading="lazy" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">{t('footnote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
