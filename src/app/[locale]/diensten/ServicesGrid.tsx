// src/app/[locale]/diensten/ServicesGrid.tsx
'use client';

import { ArrowRight, CheckCircle, CarProfile, Truck, Sparkle } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import clsx from 'clsx';

type Service = {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;      // optioneel; als je die weglaat wordt het een pure “card”-stijl
  bullets: string[];
  tag?: 'popular' | 'new' | string; // optioneel badge
  icon?: 'car' | 'van';             // optioneel: laat een icoon zien linksboven
};

function Badge({ tag }: { tag?: string }) {
  if (!tag) return null;
  const label =
    tag === 'popular' ? 'Popular' :
    tag === 'new' ? 'New' : tag;

  return (
    <span className="absolute top-4 right-4 z-20 rounded-full bg-orange-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(234,88,12,0.55)]">
      {label}
    </span>
  );
}

function ServiceIcon({ icon }: { icon?: Service['icon'] }) {
  const Icon = icon === 'van' ? Truck : CarProfile;
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/15 ring-1 ring-orange-400/30 text-orange-300">
      <Icon weight="duotone" className="h-5 w-5" />
    </div>
  );
}

export default function ServicesGrid() {
  const t = useTranslations('diensten.services');
  const tCta = useTranslations('cta');
  const services = (t.raw('list') as Service[]) ?? [];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#080B12]">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">{t('heading')}</h2>
          <p className="mt-2 text-slate-300">{t('subheading')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={clsx(
                'group relative overflow-hidden rounded-3xl',
                'border border-white/8 bg-gradient-to-b from-[#0E1422] to-[#0B101B]',
                'shadow-[0_10px_40px_-8px_rgba(0,0,0,0.6)] transition-all duration-300',
                'hover:-translate-y-0.5 hover:shadow-[0_16px_60px_-10px_rgba(234,88,12,0.25)]'
              )}
            >
              <Badge tag={s.tag} />

              {/* Header / hero area */}
              <div className="relative">
                {/* optioneel image */}
                {s.image ? (
                  <>
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {/* dark veil + gradient cut */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent" />
                  </>
                ) : (
                  <div className="aspect-[4/3] w-full bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_60%)]" />
                )}

                {/* top-left icon for life */}
                <div className="absolute left-5 top-5 z-20">
                  <ServiceIcon icon={s.icon} />
                </div>

                {/* title zone overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
                  <div className="p-5">
                    <h3 className="text-xl font-black text-white tracking-tight">{s.title}</h3>
                    {s.subtitle && (
                      <p className="mt-0.5 text-xs text-slate-300/80">{s.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="p-5">
                <ul className="space-y-2 text-sm text-slate-300">
                  {s.bullets.map((b, i) => (
                    <li key={`${s.title}-${i}`} className="flex items-start gap-2">
                      <CheckCircle weight="fill" className="mt-0.5 h-4 w-4 text-orange-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* actions */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {/* Call Now (primary) */}
                  <a
                    href={`tel:${tCta.raw('number') ?? ''}`}
                    className={clsx(
                      'inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white',
                      'bg-[linear-gradient(180deg,#ff7a1a_0%,#ff5a00_100%)]',
                      'shadow-[0_12px_30px_-8px_rgba(255,90,0,0.55)]',
                      'ring-1 ring-orange-500/40 transition-all duration-200',
                      'hover:brightness-105 active:translate-y-px'
                    )}
                  >
                    <Sparkle className="h-4 w-4" />
                    {tCta('callNow')}
                  </a>

                  {/* More info (secondary) */}
                  <Link
                    href={s.href}
                    className={clsx(
                      'inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold',
                      'bg-white/5 text-white ring-1 ring-white/10',
                      'hover:bg-white/7 transition-colors'
                    )}
                  >
                    {t('cta')} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* subtle border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-orange-400/40 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
