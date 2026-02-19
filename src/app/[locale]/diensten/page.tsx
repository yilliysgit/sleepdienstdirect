// app/diensten/page.tsx
import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import ServicesCarousel from './ServicesCarousel';
import ServicesPartnerBand from './ServicesPartnerBand';
import ServicesFAQ from './ServicesFAQ';
import FinalCta from '../contact/FinalCta';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCarousel />
      <ServicesPartnerBand />
      <ServicesFAQ />
      <FinalCta dark />
    </main>
  );
}
