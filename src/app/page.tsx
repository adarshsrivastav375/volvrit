import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import { websiteStats } from "@/data/home/primary";
import HeroSection from "@/components/home/Banner";
import OurPartners from "@/components/home/OurPartners";
import Testimonials from "@/components/home/Testimonials";
import OurPortfolio from "@/components/home/OurPortfolio";
import GetStarted from "@/components/services/common/GetStarted";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <OurPartners />
      <AboutUs />
      <div className="bg-primary hidden lg:block py-12">
        <div className="container mx-auto lg:px-20 grid grid-cols-2 md:grid-cols-4 text-center text-white">
          {websiteStats.map((stats: any) => {
            return (
              <div key={stats?.id}>
                <h3 className="text-5xl font-semibold">{stats?.count}</h3>
                <p className="font-light">{stats?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <OurPortfolio />
      <Testimonials />
      <GetStarted />
    </>
  );
}
