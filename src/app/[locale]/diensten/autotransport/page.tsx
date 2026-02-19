import React from 'react';
import AutoTransportHero from "./AutoTransportHero";
import AutoTransportHoeWerkt from "./AutoTransportHoeWerkt";
import AutoTransportUSP from "./AutoTransportUSP";
import AutoTransportPricing from "./AutoTransportPricing";
import AutoGalerijSection from './AutoGalerijSection';
import AutoTransportGebieden from "./AutoTransportGebieden";
import AutoTransportTestimonials from "./AutoTransportTestimonials";
import AutoTransportFAQ from './AutoTransportFAQ';

export default function AutoTransportPage() {
  return (
    <>
    <AutoTransportHero />
    <AutoTransportHoeWerkt />
    <AutoTransportUSP />
    <AutoTransportPricing />
    <AutoGalerijSection />  
    <AutoTransportGebieden />
    <AutoTransportTestimonials />
    <AutoTransportFAQ />
    </>
  )
}
