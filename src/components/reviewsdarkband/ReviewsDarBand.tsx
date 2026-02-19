'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quotes, ArrowRight, Phone, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useLocale } from 'next-intl';

const stars = (n: number) => (
  <div className="flex items-center gap-1" aria-label={`${n} van 5 sterren`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} weight={i < n ? 'fill' : 'regular'} className={`w-4 h-4 ${i < n ? 'text-yellow-400' : 'text-white/30'}`} />
    ))}
  </div>
);


const GoogleLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);


interface GoogleReview {
  reviewId: string;
  reviewer: {
    profilePhotoUrl: string;
    displayName: string;
  };
  starRating: string;
  comment?: string;
  createTime: string;
}

export default function ReviewsDarkBand() {
  const locale = useLocale(); // 'en' of 'nl'
  const [allReviews, setAllReviews] = useState<GoogleReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [totalReviews, setTotalReviews] = useState(257);
  const [averageRating, setAverageRating] = useState(5.0);
  const [isPaused, setIsPaused] = useState(false);

  const REVIEWS_PER_PAGE = 4;
  const AUTO_PLAY_INTERVAL = 5000;

  // Vertaal review tekst op basis van locale
  const getLocalizedComment = (comment: string | undefined): string => {
    if (!comment) return '';

    // Als Engels, probeer de vertaling te pakken
    if (locale === 'en') {
      const translationMarker = '(Translated by Google)';
      const markerIndex = comment.indexOf(translationMarker);
      
      if (markerIndex !== -1) {
        // Pak alles NA "(Translated by Google)"
        const translated = comment.substring(markerIndex + translationMarker.length).trim();
        return translated || comment.split('\n\n')[0]; // Fallback naar origineel als vertaling leeg is
      }
    }
    
    // Voor Nederlands of als er geen vertaling is: pak het eerste deel (voor de vertaling)
    return comment.split('\n\n(Translated by Google)')[0].trim();
  };

  const [direction, setDirection] = useState<'up' | 'down'>('down');


  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/gbp/reviews?locationId=locations/4929742144346227937&pageSize=100');
        const data = await response.json();
        
        if (data.status === 200 && data.data.reviews) {
          // Filter: alleen 4 en 5 sterren + alleen met tekst
          const filtered = data.data.reviews.filter((r: GoogleReview) => {
            if (r.starRating !== 'FIVE' && r.starRating !== 'FOUR') return false;
            if (!r.comment || r.comment.trim().length === 0) return false;
            
            // Extra check: als Engels, alleen reviews die een vertaling hebben OF origineel Engels zijn
            if (locale === 'en') {
              const hasTranslation = r.comment.includes('(Translated by Google)');
              const seemsEnglish = /^[a-zA-Z\s.,!?'"]+$/.test(r.comment.substring(0, 50));
              return hasTranslation || seemsEnglish;
            }
            
            return true;
          });
          
          // Shuffle en pak 8 reviews
          const shuffled = [...filtered].sort(() => Math.random() - 0.5);
          setAllReviews(shuffled.slice(0, 8));
          setTotalReviews(data.data.totalReviewCount || 257);
          setAverageRating(data.data.averageRating || 5.0);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [locale]); // Herlaad als locale verandert

  // Auto-play timer
  useEffect(() => {
    if (isPaused || allReviews.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, allReviews.length]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (locale === 'en') {
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      return `${Math.floor(diffDays / 365)} years ago`;
    }
    
    if (diffDays < 7) return `${diffDays} dagen geleden`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weken geleden`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} maanden geleden`;
    return `${Math.floor(diffDays / 365)} jaar geleden`;
  };

  const getStarCount = (rating: string) => {
    const map: Record<string, number> = {
      'FIVE': 5, 'FOUR': 4, 'THREE': 3, 'TWO': 2, 'ONE': 1
    };
    return map[rating] || 5;
  };

const handlePrev = () => {
  setIsPaused(true);
  setDirection('up'); // ← NIEUW: naar boven
  setCurrentIndex((prev) => {
    const newIndex = prev - REVIEWS_PER_PAGE;
    return newIndex < 0 ? allReviews.length - REVIEWS_PER_PAGE : newIndex;
  });
  setTimeout(() => setIsPaused(false), 10000);
};

const handleNext = () => {
  setDirection('down'); // ← NIEUW: naar beneden
  setCurrentIndex((prev) => {
    const newIndex = prev + REVIEWS_PER_PAGE;
    return newIndex >= allReviews.length ? 0 : newIndex;
  });
};


  const handleManualNext = () => {
    setIsPaused(true);
    handleNext();
    setTimeout(() => setIsPaused(false), 10000);
  };

  const visibleReviews = allReviews.slice(currentIndex, currentIndex + REVIEWS_PER_PAGE);

  const orgName = 'Sleepdienstdirect';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: orgName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: totalReviews,
    },
  };

  const translations = {
    en: {
      badge: 'Customer Reviews',
      title: 'Why',
      titleHighlight: 'customers recommend us',
      subtitle: 'Real experiences from breakdown assistance in Amsterdam and surroundings. Fast, careful and transparent.',
      reviews: 'reviews',
      cta: 'Satisfied with our service? Leave a review!',
      call: 'Call',
      writeReview: 'Write a review',
      loading: 'Loading reviews...',
    },
    nl: {
      badge: 'Klantbeoordelingen',
      title: 'Waarom',
      titleHighlight: 'klanten ons aanraden',
      subtitle: 'Echte ervaringen van pechhulp in Amsterdam en omgeving. Snel, zorgvuldig en transparant.',
      reviews: 'beoordelingen',
      cta: 'Tevreden over onze service? Laat een review achter!',
      call: 'Bel',
      writeReview: 'Schrijf een review',
      loading: 'Reviews laden...',
    },
  };

  const t = translations[locale as 'en' | 'nl'] || translations.nl;

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">{t.loading}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28 text-white">
      {/* noise + gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(900px_300px_at_110%_10%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[.05]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\n          <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\n            <filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'2\'/></filter>\n            <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'.4\'/></svg>\n")' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border border-white/15">
              {t.badge}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">{t.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-blue-100/90 max-w-2xl">{t.subtitle}</p>
          </div>
          

         {/* rating block */}
<div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4">
  {/* Google logo bovenaan */}
  <div className="flex items-center justify-center gap-2 mb-3">
    <GoogleLogo className="w-6 h-6" />
    <span className="text-sm font-semibold text-white/90">Google Reviews</span>
  </div>
  
  <div className="text-3xl font-black text-center">{averageRating.toFixed(1)}</div>
  <div className="mt-1 flex items-center justify-center gap-2">
    {stars(Math.round(averageRating))}
    <span className="text-sm text-blue-100/80">({totalReviews.toLocaleString()} {t.reviews})</span>
  </div>
</div>
</div>

        {/* carousel controls + grid */}
        <div className="relative">
          {/* Navigation buttons - Desktop only */}
          <div className="hidden lg:flex items-center justify-end gap-3 mb-6">
            <button
              onClick={handlePrev}
              className="group rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-all"
              aria-label="Previous reviews"
            >
              <CaretLeft weight="bold" className="w-6 h-6" />
            </button>
            <button
              onClick={handleManualNext}
              className="group rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-all"
              aria-label="Next reviews"
            >
              <CaretRight weight="bold" className="w-6 h-6" />
            </button>
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              {visibleReviews.map((r, i) => (
                <motion.figure
  key={`${r.reviewId}-${currentIndex}`}
  initial={{ opacity: 0, y: direction === 'down' ? -20 : 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: direction === 'down' ? 20 : -20 }}
  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <figcaption className="font-semibold">{r.reviewer.displayName}</figcaption>
                      <div className="text-xs text-blue-100/80">{formatDate(r.createTime)}</div>
                    </div>
                    <Quotes className="w-6 h-6 text-white/20" />
                  </div>
                  <div className="mt-3">{stars(getStarCount(r.starRating))}</div>
                  <blockquote className="mt-3 text-sm text-blue-100 leading-relaxed line-clamp-4">
                    "{getLocalizedComment(r.comment)}"
                  </blockquote>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile navigation - below grid */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="group rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-all"
              aria-label="Previous reviews"
            >
              <CaretLeft weight="bold" className="w-6 h-6" />
            </button>
            <span className="text-sm text-blue-100/80">
              {Math.floor(currentIndex / REVIEWS_PER_PAGE) + 1} / {Math.ceil(allReviews.length / REVIEWS_PER_PAGE)}
            </span>
            <button
              onClick={handleManualNext}
              className="group rounded-xl border border-white/20 bg-white/5 p-3 text-white hover:bg-white/10 transition-all"
              aria-label="Next reviews"
            >
              <CaretRight weight="bold" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-blue-100/90 text-sm">
            {t.cta}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:0625375323" 
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-[#0a0f1a] bg-white shadow-lg hover:bg-gray-100 transition-colors"
            >
              <Phone weight="fill" className="w-5 h-5" /> {t.call}: 06 25375323
            </a>
            
             <a href="https://www.google.com/search?q=Sleepdienstdirect&ludocid=7901817661433665451#lrd=0x978e8af3641c46b:0x6dd8a0da7d6797ab,3"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
>
  <GoogleLogo className="w-5 h-5" />
  {t.writeReview} <ArrowRight weight="bold" className="w-5 h-5" />
</a>
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}