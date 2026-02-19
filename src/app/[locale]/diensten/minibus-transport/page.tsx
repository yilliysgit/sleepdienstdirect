import React from 'react';
import MiniBusjesHero from './MiniBusjesHero';
import MiniBusjesHoeWerkt from './MiniBusjesHoeWerkt';
import MiniBusjesUSP from './MiniBusjesUSP';
import MiniBusjesPricing from './MiniBusjePricing';
import MiniBusjesGebieden from './MinibusjesGebieden';
import MiniBusjesTestimonials from './MiniBusjesTestimonials';
import MiniBusjesFAQ from './MiniBusjesFAQ';
export default function MinibusjesPage() {
  return (
    <>
    <MiniBusjesHero />
    <MiniBusjesHoeWerkt />
    <MiniBusjesUSP />
    <MiniBusjesPricing />
    <MiniBusjesGebieden /> 
    <MiniBusjesTestimonials />
    <MiniBusjesFAQ />
    </>
  )
}
