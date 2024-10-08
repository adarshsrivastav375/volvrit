import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import HeroSection from "@/components/home/Banner";
import CTASection from "@/components/home/CTAsection";
import OurPartners, { trustedClient } from "@/components/home/OurPartners";
import Testimonials from "@/components/home/Testimonials";
import CardComponent from "@/components/home/CardComponent";
import StatsComponent from "@/components/home/StatsComponent";
import ProcessSection from "@/components/home/ProcessSection";
import FractionalCFOCto from "@/components/home/FractionalCTOCFO";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      {/* <OurPartners /> */}
      <h5 className="relative text-center py-10 text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl 3xl:text-8xl mb-2 col-span-2 font-semibold z-10 text-black">
        A few companies who trusted <br />
        us with their projects
      </h5>
      <div className="overflow-hidden py-2">
        <div className="flex animate-marquee pb-20 justify-start items-center whitespace-nowrap">
          {[...trustedClient, ...trustedClient, ...trustedClient].map(
            (client) => (
              <div key={client.id} className="flex-none px-6">
                <Image
                  src={client.imageUrl}
                  alt={client.title}
                  width={client.width}
                  height={client.height}
                  className="w-fit object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
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
