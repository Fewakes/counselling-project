import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Specialisations } from "@/components/sections/specialisations";
import { Team } from "@/components/sections/team";
import { Safety } from "@/components/sections/safety";
import { Testimonials } from "@/components/sections/testimonials";
import { ForCounsellorsCta } from "@/components/sections/for-counsellors";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Specialisations />
      <Team />
      <Safety />
      <Testimonials />
      <ForCounsellorsCta />
      <Faq />
      <FinalCta />
    </>
  );
}
