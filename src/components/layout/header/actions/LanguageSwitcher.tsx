'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { Globe } from '@phosphor-icons/react';

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className = '' }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow"
        aria-label="Change language"
      >
        <Globe size={18} weight="regular" className="text-gray-600" />
        <span className="text-sm font-semibold text-gray-700">
          {locale.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors duration-150 ${
                locale === loc
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 font-medium'
              }`}
            >
              <span className="text-sm">
                {loc.toUpperCase()}
              </span>
              {locale === loc && (
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}