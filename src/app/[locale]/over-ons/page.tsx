import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutPhotoBand from "./AboutPhotoBand";
import AboutTimeline from "./AboutTimeLine";
import AboutCases from "./AboutCases";
import AboutCompliance from "./AboutCompliance";
import FinalCta from "../contact/FinalCta";
import FAQSection from "@/components/FAQSection/FAQSection";

// import AboutClients from "./AboutClients";
export default function AboutPage() {
  return (
    <main>
      <AboutHero
        phoneDisplay="06 12 34 56 78"
        phoneHref="tel:0612345678"
        whatsappHref="https://wa.me/31612345678"
      />
      <AboutMission />
      <AboutPhotoBand />
      <AboutTimeline />
      <AboutCases />
      <AboutCompliance />
      <FinalCta />
<FAQSection namespace="overons.faq" variant="light" columns={2} />
      <p className="text-sm text-gray-500 max-w-3xl mx-auto text-center">
  Sleepdienst Direct is actief in heel Amsterdam en omgeving: van Centrum tot Noord, Oost, West en Zuid. 
  Wij helpen particulieren, garages, leasemaatschappijen en schadebedrijven met snel en verzekerd autotransport.
</p>
    </main>
  );
}