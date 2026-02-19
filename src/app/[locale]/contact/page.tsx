import ContactHero from '@/components/hero/ContactHero';
import ContactForm from '@/components/contactform/ContactForm';
import ContactDetails from './ContactDetails';
import ServiceArea from './ServiceArea';
import ReviewsDarkBand from '@/components/reviewsdarkband/ReviewsDarBand';
import FAQSection from '@/components/FAQSection/FAQSection';
import PaymentAndInvoiceInfo from './PaymentAndInvoiceInfo';
import FinalCta from './FinalCta';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 order-1 lg:order-2">
            <ContactDetails />
          </aside>
        </div>
        <ReviewsDarkBand /> 
<ServiceArea variant="light" />       
        <FAQSection variant="light" />
        <PaymentAndInvoiceInfo />
        <FinalCta />
      </section>
    </main>
  );
}