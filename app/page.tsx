import { Enquiry } from "@/components/home/enquiry";
import { Faqs } from "@/components/home/faqs";
import { FirstSession } from "@/components/home/first-session";
import { Hero } from "@/components/home/hero";
import { Locations } from "@/components/home/locations";
import { MeetSheetal } from "@/components/home/meet-sheetal";
import { MedicalSupport } from "@/components/home/medical";
import { Pathway } from "@/components/home/pathway";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { MobileCta } from "@/components/site/mobile-cta";
import { SkipLink } from "@/components/site/skip-link";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Pathway />
        <Services />
        <MeetSheetal />
        <MedicalSupport />
        <Testimonials />
        <FirstSession />
        <Locations />
        <Faqs />
        <Enquiry />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
