import AchievementsSection from "@/components/home/Achievement";
import HeroSection from "@/components/home/Banner";
import CaseStudy from "@/components/home/CaseStudy";
import Faqs from "@/components/home/Faqs";
import OurPartners from "@/components/home/OurPartners";
import PrimaryBenefits from "@/components/home/PrimaryBenefits";
import Testimonials from "@/components/home/Testimonials";
import WhoWeAreSection from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <AchievementsSection />
      <PrimaryBenefits />
      <Testimonials />
      <OurPartners />
      <Faqs />
      <CaseStudy />
    </>
  );
}
