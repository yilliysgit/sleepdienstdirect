'use client';

import { Phone, Clock, CheckCircle, ArrowRight, Shield, Star, MapPin, Lightning } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
const t = useTranslations('home.hero');

  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    { icon: Lightning, text: t('features.fast') },
    { icon: CheckCircle, text: t('features.transparent') },
    { icon: Shield, text: t('features.insured') },
  ];

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const ctx = gsap.context(() => {
      // Background zoom in
      gsap.from('.hero-bg-img', {
        scale: 1.1,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Animated glow orbs
      gsap.to('.glow-orb-1', {
        scale: 1.2,
        opacity: 0.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.glow-orb-2', {
        scale: 1.3,
        opacity: 0.25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });

      // Main timeline
      const tl = gsap.timeline();

      tl.from('.badge', {
        opacity: 0,
        x: -50,
        duration: 0.6
      })
      .from('.main-title', {
        opacity: 0,
        y: 30,
        duration: 0.8
      }, '-=0.4')
      .from('.subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, '-=0.6')
      .from('.feature-item', {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1
      }, '-=0.4')
      .from('.cta-button', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15
      }, '-=0.2')
      .from('.trust-badge', {
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)'
      }, '-=0.3');

      // Continuous animations
      gsap.to('.clock-icon', {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'linear'
      });

      gsap.to('.ping-dot', {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        repeat: -1,
        ease: 'power2.out'
      });

    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-black"
      style={{ height: 'calc(100vh - 80px)' }}
      itemScope 
      itemType="https://schema.org/Service"
      aria-label="Sleepdienst Amsterdam Hero Section"
    >
      {/* Schema.org Structured Data */}
      <meta itemProp="serviceType" content="Sleepdienst en Pechhulp" />
      <meta itemProp="provider" content="Sleepdienst Direct Amsterdam" />
      <meta itemProp="areaServed" content="Amsterdam en omgeving" />
      <meta itemProp="hoursAvailable" content="Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59" />

      {/* Background Image */}
      <div className="hero-bg-img absolute inset-0">
        <img 
          src="/images/sleepdienstdirect.jpg"
          alt="Sleepdienst Direct Amsterdam - 24/7 professionele pechhulp en autotransport"
          title="Betrouwbare sleepdienst Amsterdam | Direct beschikbaar"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient - sterker op mobiel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30 md:from-black/75 md:via-black/50 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:from-black/40 z-10" />
      </div>

      {/* Animated Glow Orbs - Hidden on mobile */}
      <div className="hidden md:block glow-orb-1 absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-15 z-20" aria-hidden="true" />
      <div className="hidden md:block glow-orb-2 absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-10 z-20" aria-hidden="true" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-30">
        <div className="w-full md:w-4/5 lg:w-2/3 xl:w-3/5">
          
          {/* 24/7 Badge */}
          <div className="badge inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold shadow-lg shadow-orange-500/30 mb-4 sm:mb-6 border border-orange-400/50">
            <div className="clock-icon">
              <Clock weight="bold" className="w-3 sm:w-3.5 h-3 sm:h-3.5" aria-hidden="true" />
            </div>
            <span className="relative text-[10px] sm:text-xs font-bold">
              {t('badge')}
              <span className="absolute -right-1.5 sm:-right-2 -top-0.5 flex h-1.5 sm:h-2 w-1.5 sm:w-2" aria-label="Live beschikbaar">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-green-400" aria-hidden="true"></span>
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-green-500"></span>
              </span>
            </span>
          </div>

          {/* H1 - Responsive sizes */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-5 sm:mb-6 md:mb-8">
            <h1 
              className="main-title font-black leading-tight"
              itemProp="name"
            >
              <span className="block text-white drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t('title.line1')}{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
                  {t('title.line2')}
                </span>
              </span>
              <span className="block text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-3 font-bold">
                {t('title.line3')}
              </span>
            </h1>
            
            {/* Value Proposition - Hidden on mobile, shown on tablet+ */}
            <p 
              className="hidden sm:block subtitle text-sm sm:text-base md:text-lg text-white/95 leading-relaxed"
              itemProp="description"
            >
              {t('subtitle')}
            </p>
          </div>

          {/* USP Pills - Only 2 on mobile, all 3 on tablet+ */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6 md:mb-8" role="list" aria-label="Onze voordelen">
            {features.slice(0, isMobile ? 2 : 3).map((item, i) => (
              <div
                key={i}
                role="listitem"
                className="feature-item inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-xl px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-white/20"
              >
                <item.icon weight="bold" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white font-semibold text-[10px] sm:text-xs">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
            <a 
              href="tel:0625375323"
              className="cta-button group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold shadow-2xl shadow-orange-500/40 overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Bel direct naar Sleepdienst Direct"
              itemProp="telephone"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <Phone weight="fill" className="w-3.5 sm:w-4 h-3.5 sm:h-4 relative z-10" aria-hidden="true" />
              <span className="relative z-10">{t('cta.call')}</span>
            </a>
            
            <a 
              href="#tarieven"
              className="cta-button group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl !text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black no-underline"
              aria-label="Bekijk onze transparante tarieven"
            >
              <span className="text-white">{t('cta.prices')}</span>
              <ArrowRight weight="bold" className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform text-white" aria-hidden="true" />
            </a>
          </div>

          {/* Trust Indicators - Simplified on mobile */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-4 text-sm pt-4 sm:pt-6" role="list" aria-label="Vertrouwensindicatoren">
            {/* Location - Always visible */}
            <div className="trust-badge flex items-center gap-1 sm:gap-1.5 text-white/80" role="listitem">
              <MapPin weight="fill" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-orange-400" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs font-semibold text-white">
                <span className="sm:hidden">Amsterdam</span>
                <span className="hidden sm:inline">{t('trust.location')}</span>
              </span>
            </div>
            
            <div className="h-4 sm:h-6 w-px bg-white/20" aria-hidden="true" />
            
            {/* Rating - Always visible */}
            <div className="trust-badge flex items-center gap-1 sm:gap-1.5" role="listitem" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <div className="flex items-center gap-0.5" aria-label="4.9 sterren beoordeling">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-[10px] sm:text-xs font-semibold">
                <span itemProp="ratingValue">4.9</span>
              </span>
            </div>

            {/* Insurance - Hidden on small mobile, visible from sm: */}
            <div className="hidden sm:block h-4 sm:h-6 w-px bg-white/20" aria-hidden="true" />
            
            <div className="hidden sm:flex trust-badge items-center gap-1 sm:gap-1.5" role="listitem">
              <Shield weight="fill" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-400" aria-hidden="true" />
              <span className="text-white text-[10px] sm:text-xs font-semibold">
                {t('trust.insurance')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}