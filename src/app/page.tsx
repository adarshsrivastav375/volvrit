import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import HeroSection from "@/components/home/Banner";
import OurPartners from "@/components/home/OurPartners";
import Testimonials from "@/components/home/Testimonials";
// import OurPortfolio from "@/components/home/OurPortfolio";
import StatsComponent from "@/components/home/StatsComponent";
// import GetStarted from "@/components/services/common/GetStarted";
import CardComponent from "@/components/home/CardComponent";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTAsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <OurPartners />
      <AboutUs />
      <StatsComponent />
      <CardComponent />
      <ProcessSection />
      {/* <OurPortfolio /> */}
      <Testimonials />
      <CTASection />
      {/* <GetStarted /> */}
    </>
  );
}
