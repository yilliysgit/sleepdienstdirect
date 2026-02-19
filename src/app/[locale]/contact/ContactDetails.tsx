'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Phone, WhatsappLogo, Envelope, MapPin, Clock,
  InstagramLogo, FacebookLogo, TiktokLogo, Copy, CheckCircle
} from '@phosphor-icons/react';
import { useState } from 'react';

type Social = { label: string; href: string; icon: React.ComponentType<any> };

type ContactDetailsProps = {
  phone?: string;
  phoneHref?: string;
  whatsappHref?: string;
  email?: string;
  addressLines?: string[];
  cityLabel?: string;
  socials?: Social[];
  company?: {
    legalName: string;
    street: string;
    postalCode: string;
    city: string;
    kvk: string;
    btw: string;
  };
};

export default function ContactDetails({
  phone = '06 25 375 323',
  phoneHref = 'tel:0625375323',
  whatsappHref = 'https://wa.me/31625375323',
  email = 'hallo@sleepdienstdirect.nl',
  addressLines = ['Goudenweg 2', '1261 TA Gouda'],
  cityLabel = 'Standplaats: Amsterdam',
  socials = [
    { label: 'Instagram', href: 'https://instagram.com/', icon: InstagramLogo },
    { label: 'Facebook', href: 'https://facebook.com/', icon: FacebookLogo },
    { label: 'TikTok', href: 'https://tiktok.com/', icon: TiktokLogo },
  ],
  company = {
    legalName: 'Sleepdienstdirect',
    street: 'Goudenweg 2',
    postalCode: '1261 TA',
    city: 'Gouda',
    kvk: '52023223',
    btw: 'NL102397035B01',
  },
}: ContactDetailsProps) {
  const t = useTranslations('contact.details');
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    legalName: company.legalName,
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.postalCode,
      addressLocality: company.city,
      addressCountry: 'NL',
    },
    vatID: company.btw,
    taxID: company.kvk,
    sameAs: socials.map(s => s.href),
  };

  return (
    <aside className="space-y-5">
      {/* Direct contact - Donker thema */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl"
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <h3 className="text-lg font-black text-white mb-1">{t('title')}</h3>
          <p className="text-sm text-gray-400">{t('subtitle')}</p>

          <div className="mt-5 flex flex-col gap-3">
            
              <a href={phoneHref}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500">
                  <Phone weight="fill" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">{t('phone.label')}</div>
                  <div className="text-base font-bold text-white">{phone}</div>
                </div>
              </div>
            </a>

            
              <a href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500">
                  <WhatsappLogo weight="fill" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">{t('whatsapp.label')}</div>
                  <div className="text-base font-bold text-white">WhatsApp</div>
                </div>
              </div>
            </a>

            
              <a href={`mailto:${email}`}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500">
                  <Envelope weight="fill" className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 font-medium">{t('email.label')}</div>
                  <div className="text-sm font-bold text-white truncate">{email}</div>
                </div>
              </div>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { key: 'time', value: '±30 min' },
              { key: 'available', value: '24/7' },
              { key: 'insured', value: '100%' },
            ].map(s => (
              <div
                key={s.key}
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"
              >
                <div className="text-base font-black text-white">{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-1">
                  {t(`stats.${s.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Socials - Donker thema */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6"
      >
        <h3 className="text-base font-black text-white mb-1">{t('social.title')}</h3>
        <p className="text-sm text-gray-400 mb-4">{t('social.subtitle')}</p>
        <div className="flex flex-wrap gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            
              <a key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              <Icon className="w-4 h-4" /> {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bedrijfsinformatie - Donker thema */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6"
      >
        <h3 className="text-base font-black text-white mb-3">{t('company.title')}</h3>
        <div className="text-sm text-gray-300 space-y-1">
          <div className="font-bold text-white">{company.legalName}</div>
          <div>{company.street}</div>
          <div>{company.postalCode} {company.city}</div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="w-4 h-4" weight="fill" />
          {cityLabel}
        </div>

        <dl className="mt-5 space-y-3">
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <dt className="text-sm text-gray-400">{t('company.kvk')}</dt>
            <dd className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-white">{company.kvk}</span>
              <button
                type="button"
                onClick={() => copy(company.kvk, 'kvk')}
                className="p-1.5 rounded-lg border border-white/20 hover:bg-white/10 transition-all"
                aria-label="Kopieer KVK"
              >
                {copied === 'kvk' ? (
                  <CheckCircle weight="fill" className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </dd>
          </div>

          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <dt className="text-sm text-gray-400">{t('company.btw')}</dt>
            <dd className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-white">{company.btw}</span>
              <button
                type="button"
                onClick={() => copy(company.btw, 'btw')}
                className="p-1.5 rounded-lg border border-white/20 hover:bg-white/10 transition-all"
                aria-label="Kopieer BTW"
              >
                {copied === 'btw' ? (
                  <CheckCircle weight="fill" className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </dd>
          </div>
        </dl>
      </motion.div>

      {/* Openingstijden - Donker thema */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
        <h3 className="text-base font-black text-white mb-3">{t('hours.title')}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">{t('hours.days')}</span>
          <span className="font-bold text-orange-400">24/7</span>
        </div>
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </aside>
  );
}