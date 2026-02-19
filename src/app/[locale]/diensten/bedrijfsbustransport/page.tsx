import BedrijfsBusjesHero from './BedrijfsBusjesHero';
import BedrijfsBusjesHoeWerkt from './BedrijfsBusjesHoeWerkt';
import BedrijfsBusjesUSP from './BedrijfsBusjesUSP';
import BedrijfsBusjesPricing from './BedrijfsBusjesPricing';
import BedrijfsBusjesGebieden from './BedrijfsBusjesGebieden';
import BedrijfsBusjesGalerij from './BedrijfsBusjesGalerij';
import BedrijfsBusjesTestimonials from './BedrijfsBusjesTestimonials';
import BedrijfsBusjesFAQ from './BedrijfsBusjesFAQ';

export default function BedrijfsbusjesPage() {
  return (
    <>
      <BedrijfsBusjesHero />
      <BedrijfsBusjesHoeWerkt />
      <BedrijfsBusjesUSP />
      <BedrijfsBusjesPricing />
      <BedrijfsBusjesGebieden />
      <BedrijfsBusjesTestimonials />
      <BedrijfsBusjesGalerij />
      <BedrijfsBusjesFAQ />
    </>
  )
}