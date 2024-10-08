import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import HeroSection from "@/components/home/Banner";
import CTASection from "@/components/home/CTAsection";
import OurPartners from "@/components/home/OurPartners";
import Testimonials from "@/components/home/Testimonials";
import CardComponent from "@/components/home/CardComponent";
import StatsComponent from "@/components/home/StatsComponent";
import ProcessSection from "@/components/home/ProcessSection";
import FractionalCFOCto from "@/components/home/FractionalCTOCFO";

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
      <FractionalCFOCto />
      <Testimonials />
      <CTASection />
    </>
  );
}
