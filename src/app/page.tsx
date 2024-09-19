import Link from "next/link";
import AboutUs from "@/components/home/AboutUs";
import Services from "@/components/home/Services";
import { websiteStats } from "@/data/home/primary";
import HeroSection from "@/components/home/Banner";
import OurPartners from "@/components/home/OurPartners";
import Testimonials from "@/components/home/Testimonials";
import BackgroundImage from "@/components/common/BackgroundImage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurPartners />
      <Services />
      <AboutUs />
      <div className="bg-primary py-12">
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
      <Testimonials />
      <BackgroundImage>
        <div className="h-[85vh] text-black flex flex-col justify-center items-center">
          <h4 className="text-5xl mb-7 font-extralight">
            Go ahead and discuss your <br />
            <strong className="font-semibold">project with us</strong>
          </h4>
          <Link
            href={"tel:+917599990331"}
            className="py-3 px-6 rounded-lg bg-primary hover:bg-primary/80 text-white transition-all text-lg ease-in-out"
            aria-label="Phone number"
          >
            Get Started
          </Link>
        </div>
      </BackgroundImage>
    </>
  );
}
