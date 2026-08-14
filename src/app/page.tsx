import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ClarityDiscover } from "@/components/sections/ClarityDiscover";
import { FinalConversion } from "@/components/sections/FinalConversion";
import { Hero } from "@/components/sections/Hero";
import { Residences } from "@/components/sections/Residences";
import { Amenities } from "@/components/sections/Amenities";
import { PlanKit } from "@/components/sections/PlanKit";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { WhyVision } from "@/components/sections/WhyVision";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyVision />
        <ClarityDiscover />
        <Residences />
        <Amenities />
        <PlanKit />
        <Location />
        <Faq />
        <FinalConversion />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
