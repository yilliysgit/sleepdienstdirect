'use client';

import { Phone, WhatsappLogo, Envelope, MapPin, Clock, ShieldCheck, Car } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-900/80 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Car weight="fill" className="w-6 h-6 text-orange-500" />
              <span className="font-black text-xl">SLEEPDIENST DIRECT</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              De #1 sleepdienst in Amsterdam en omgeving. 24/7 bereikbaar, binnen 30 minuten ter plaatse, 
              professioneel en verzekerd transport.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="tel:0625375323"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 hover:bg-orange-500 transition-all px-4 py-2 font-semibold"
              >
                <Phone weight="fill" className="w-4 h-4" /> Bel direct
              </a>
              <a
                href="https://wa.me/31625375323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 hover:border-orange-400 transition-all px-4 py-2"
              >
                <WhatsappLogo className="w-4 h-4 text-green-400" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <span>Goereestraat 12<br />1171 TW Badhoevedorp</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href="tel:0625375323" className="hover:text-orange-400 transition">06 25 375 323</a>
              </li>
              <li className="flex items-center gap-2">
                <Envelope className="w-5 h-5 text-orange-400" />
                <a href="mailto:hallo@sleepdienstdirect.nl" className="hover:text-orange-400 transition">
                  hallo@sleepdienstdirect.nl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>24/7 bereikbaar</span>
              </li>
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-lg font-bold mb-3">Diensten</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/diensten" className="hover:text-orange-400 transition">Auto’s slepen</Link></li>
              <li><Link href="/diensten" className="hover:text-orange-400 transition">Busjes & bedrijfswagens</Link></li>
              <li><Link href="/diensten" className="hover:text-orange-400 transition">Schadetransport</Link></li>
              <li><Link href="/diensten" className="hover:text-orange-400 transition">Pechhulp & berging</Link></li>
            </ul>
          </div>

          {/* Zekerheid */}
          <div>
            <h4 className="text-lg font-bold mb-3">Zekerheid</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" /> <span>100% verzekerd</span>
              </li>
              <li>Gemiddeld binnen <b>30 minuten</b> ter plaatse</li>
              <li>Actief in heel <b>Amsterdam & omgeving</b></li>
              <li>KVK 52023223 • BTW NL102397035B01</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sleepdienst Direct. Alle rechten voorbehouden.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-orange-400 transition">Privacybeleid</Link>
            <Link href="/voorwaarden" className="hover:text-orange-400 transition">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
