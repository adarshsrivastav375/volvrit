import Link from "next/link";
import { websiteStats } from "@/data/home/primary";
import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import WhatWeOffer from "@/components/services/webd/WhatWeOffer";
import BackgroundImage from "@/components/common/BackgroundImage";
import WebSolutions from "@/components/services/webd/WebSolutions";
import Testimonials from "@/components/services/webd/Testimonials";
import WebDevelopmentBanner from "@/components/services/webd/WebDevelopmentBanner";
import DevelopmentProcess from "@/components/services/webd/DevelopmentProcess";

export default function Page() {
  return (
    <>
      <div className="lg:pt-24">
        <WebDevelopmentBanner />
      </div>
      <div className="container mx-auto lg:px-20 py-10 flex flex-col justify-center items-center text-center">
        <h3 className="inline text-4xl font-light">
          Crafting Exceptional{" "}
          <span className="font-semibold text-primary">Websites</span> <br />
          <span>That Drive Success</span>
        </h3>
        <p className="w-1/2 mx-auto py-5 text-lg font-light leading-6">
          From concept to launch, we bring your digital ideas to life with
          tailored web solutions that elevate your brand and engage your
          audience.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <Link
            href={"tel:+01998989289"}
            className="py-2 px-4 rounded-lg bg-primary hover:bg-primary/80 text-white text-sm transition-all ease-in-out"
            aria-label="Phone number"
          >
            Get Started
          </Link>
          <Link
            href={"tel:+01998989289"}
            className="py-[6px] px-4 rounded-lg bg-white text-primary border border-primary text-sm transition-all ease-in-out"
            aria-label="Phone number"
          >
            View Portfolio
          </Link>
        </div>
      </div>
      <WhatWeOffer />
      <WebSolutions />
      <DevelopmentProcess />
      <Trusted />
      <div className="container mx-auto lg:px-20 grid grid-cols-2 md:grid-cols-4 text-center pt-12">
        {websiteStats.map((stats: any) => {
          return (
            <div key={stats?.id}>
              <h3 className="text-5xl font-semibold">{stats?.count}</h3>
              <p className="font-light">{stats?.description}</p>
            </div>
          );
        })}
      </div>
      <OurPartners />
      <Testimonials />
      <BackgroundImage>
        <div className="h-[85vh] text-black flex flex-col justify-center items-center">
          <h4 className="text-5xl mb-7 font-extralight">
            Go ahead and discuss your <br />
            <strong className="font-semibold">project with us</strong>
          </h4>
          <Link
            href={"tel:+01998989289"}
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