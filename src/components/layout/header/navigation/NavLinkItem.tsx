'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { NavLinkItemProps } from '@/types/header.types';

export default function NavLinkItem({ 
  item, 
  variant = 'desktop', 
  onClick 
}: NavLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  /** 🌈 Accent kleur — makkelijk aan te passen per thema (b.v. pizzeria rood-groen) */
  const accentFrom = 'from-gray-700';   // verander naar 'from-red-600'
  const accentTo   = 'to-gray-900';     // verander naar 'to-green-600'

  /** 💻 Desktop stijl */
  const desktopClasses = clsx(
    'relative px-4 py-3 text-base font-semibold rounded-lg transition-[transform,opacity,background] duration-300',
    'hover:bg-gray-50/80 hover:shadow-sm active:scale-95 active:bg-gray-100/80',
    'focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:ring-offset-2',
    'group overflow-hidden',
    isActive && 'bg-gray-50/60 shadow-sm font-bold text-gray-900',
    !isActive && 'text-gray-700 hover:text-gray-900'
  );

  /** 📱 Mobile stijl */
  const mobileClasses = clsx(
    'block w-full px-4 py-4 text-left text-base font-semibold rounded-xl transition-[transform,background] duration-300',
    'hover:bg-gray-50 hover:pl-6 active:bg-gray-100/80 active:scale-[0.98]',
    'focus:outline-none focus:ring-2 focus:ring-gray-500/30 border-l-4 border-transparent hover:border-gray-800/50',
    isActive && 'bg-gray-50 border-gray-800 font-bold text-gray-900 shadow-sm',
    !isActive && 'text-gray-700 hover:text-gray-900'
  );

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={variant === 'desktop' ? desktopClasses : mobileClasses}
    >
      {variant === 'desktop' ? (
        <>
          <span className="relative z-10">{item.label}</span>

          {/* Animated underline */}
          <div
            className={clsx(
              'absolute bottom-1 left-4 right-4 h-0.5 rounded-full',
              `bg-gradient-to-r ${accentFrom} ${accentTo}`,
              'transform origin-left transition-transform duration-300',
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            )}
          />

          {/* Glow hover effect */}
          <div
            className={clsx(
              'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none',
              'bg-gradient-to-r from-gray-500/5 via-gray-400/10 to-gray-500/5',
              isActive && 'opacity-40'
            )}
          />
        </>
      ) : (
        /* Mobile layout met pijlindicator */
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          {isActive && (
            <svg
              className="w-5 h-5 text-gray-800 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      )}
    </Link>
  );
}
