// src/app/tarieven/page.tsx
import PricingHero from './PricingHero';
import PricingCards from './PricingCards';
import PricingCalculator from './PricingCalculator';
import FinalCta from '../contact/FinalCta';

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingCards />
      <PricingCalculator />
      <FinalCta dark />
    </main>
  );
}
