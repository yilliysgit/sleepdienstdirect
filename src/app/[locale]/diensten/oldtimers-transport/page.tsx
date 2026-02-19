import React from "react";
import OldtimerHeroSection from "./OldtimerHeroSection";
import WaaromOldtimersSpeciaalSection from "./WaaromOldtimersSpeciaalSection";
import OldtimerPricingSection from "./OldtimerPricingSection";
import OldtimerProcesSection from "./OldtimerProcesSection";
import OldtimerGalerijSection from "./OldtimerGalerijSection";
//import ReviewsDarkBand from "@/app/components/reviewsdarkband/ReviewsDarkBand";
import OldtimerTestimonialsSection from "./OldtimerTestimonials";
import OldtimerFAQSection from "./OldtimerFAQSection";
export default function OldTimersPage() {
  return (
    <>
    <OldtimerHeroSection />
    <WaaromOldtimersSpeciaalSection />
    <OldtimerPricingSection />
    <OldtimerProcesSection />
    <OldtimerGalerijSection />
    <OldtimerTestimonialsSection />
    <OldtimerFAQSection />
    </>
  )
}
