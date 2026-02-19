'use client';

import { Phone, CheckCircle, ArrowRight, Shield, Star, Lightning, Truck, Wrench, Car, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DienstenSection() {
const t = useTranslations('home.diensten');

const swiperRef = useRef<SwiperType | null>(null);

  const diensten = [
    {
      id: 'autos',
      icon: Car,
      image: '/images/diensten/sleepdienst-autotransport-voertuigentransport-amsterdam.jpg',
      popular: false,
    },
    {
      id: 'busjes',
      icon: Truck,
      image: '/images/diensten/sleepdienst-bedrijfswagen-transport-bestelbus-vervoer.jpg',
      popular: true,
    },
    {
      id: 'mini',
      icon: Truck,
      image: '/images/diensten/sleepdienst-bedrijfsauto-transport-pechhulp.jpg',
      popular: false,
    },
    {
      id: 'dubbel',
      icon: Car,
      image: '/images/diensten/dubbel-autotransport-sleepdienst-bedrijfswagens.jpg',
      popular: false,
    },
    {
      id: 'oldtimer',
      icon: Car,
      image: '/images/diensten/oldtimer-transport-sleepdienst-klassieke-auto-vervoer.jpg',
      popular: false,
    },
    
    {
      id: 'sloop',
      icon: Wrench,
      image: '/images/diensten/schadeauto-inkoop-sloopauto-sleepdienst-amsterdam.jpg',
      popular: false,
      special: true,
    },
  ];

  return (
    <section 
      id="diensten" 
      className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-10 z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-5 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Lightning weight="fill" className="w-4 h-4" />
            {t('badge')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {t('title.line1')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {t('title.line2')}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative mb-16">
          {/* Navigation Buttons - Rechts boven */}
          <div className="flex items-center justify-end gap-3 mb-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900/90 border border-gray-700 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Vorige dienst"
            >
              <CaretLeft weight="bold" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900/90 border border-gray-700 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Volgende dienst"
            >
              <CaretRight weight="bold" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="diensten-swiper !pb-14"
          >
            {diensten.map((dienst) => (
              <SwiperSlide key={dienst.id}>
                <article className="group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {dienst.popular && (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Populair
                      </div>
                    )}
                    {dienst.special && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Wij kopen
                      </div>
                    )}
                  </div>

                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-800">
                    <Image
                      src={dienst.image}
                      alt={t(`services.${dienst.id}.title`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <dienst.icon className="w-5 h-5 text-orange-400" weight="duotone" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                        {t(`services.${dienst.id}.title`)}
                      </h3>
                      <p className="text-xs text-gray-300 font-medium">
                        {t(`services.${dienst.id}.subtitle`)}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <ul className="space-y-2.5 mb-6">
                      {[0, 1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle weight="fill" className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-sm">{t(`services.${dienst.id}.features.${i}`)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-2.5">
                      
                        <a href="tel:0625375323"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
                      >
                        <Phone weight="fill" className="w-4 h-4" />
                        {t('cta.call')}
                      </a>
                      
                      
                        <a href={`#${dienst.id}`}
                        className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-4 py-2.5 rounded-lg text-sm font-semibold border border-white/10 hover:bg-white/10 transition-all"
                      >
                        {t('cta.moreInfo')}
                        <ArrowRight weight="bold" className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative mb-16">
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/30 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                    <Lightning weight="bold" className="w-3.5 h-3.5" />
                    <span>Unieke Service</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                    Tot 3 auto's
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
                      tegelijk vervoeren
                    </span>
                  </h3>

                  <p className="text-base text-gray-300 mb-6">
                    Meerdere voertuigen verplaatsen? Wij hebben gespecialiseerde multi-car trailers.
                    <span className="block mt-1 text-white font-bold">Efficiënt, snel en kostenbesparend.</span>
                  </p>

                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-black text-orange-400">3</div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Auto's</div>
                    </div>
                    <div className="h-10 w-px bg-gray-700" />
                    <div>
                      <div className="text-3xl font-black text-orange-400">1</div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Rit</div>
                    </div>
                    <div className="h-10 w-px bg-gray-700" />
                    <div>
                      <div className="text-3xl font-black text-orange-400">50%</div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Besparing</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    
                      <a href="tel:0625375323"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-xl shadow-orange-500/20 overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                      <Phone weight="fill" className="w-4 h-4" />
                      <span>Bel: 06 25 375 323</span>
                    </a>
                    
                    <button className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-6 py-3 rounded-lg text-sm font-bold border border-white/10 hover:bg-white/10 transition-all">
                      <span>Vraag offerte aan</span>
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Tijdsbesparing", "Kostenefficiënt", "Professioneel", "Verzekerd"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur text-gray-200 px-3 py-3 rounded-lg border border-white/10">
                      <CheckCircle weight="fill" className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-900/30 border border-gray-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t('trust.title')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('trust.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Shield weight="fill" className="w-5 h-5 text-green-400" />
                <span className="text-white text-sm font-semibold">100% Verzekerd</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">4.9 (500+)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .diensten-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }
        
        .diensten-swiper .swiper-pagination-bullet-active {
          background: #F27821;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}