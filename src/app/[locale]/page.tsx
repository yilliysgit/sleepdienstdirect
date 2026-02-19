// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import HomeHero from '@/components/hero/HomeHero';
import DienstenSection from '@/components/home/DienstenSection';
import HoeHetWerktSection from '@/components/hoehetwerktsection/HoeHetWerktSection';
import ParallaxUSPSection from '@/components/ParallaxUSPSection/ParallaxUSPSection';
import VoorWieRijdenSection from '@/components/voorwierijdensection/VoorWieRijdenSection';
import ReviewsDarkBand from '@/components/reviewsdarkband/ReviewsDarBand';
import FAQSection from '@/components/FAQSection/FAQSection';

export default async function Home() {
  
  return (
    <>
      <HomeHero />
      <DienstenSection />
      <HoeHetWerktSection />
      <ParallaxUSPSection />
      <VoorWieRijdenSection />
      <ReviewsDarkBand />
      <FAQSection />
    </>
  );
}