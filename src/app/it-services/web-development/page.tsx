import { websiteStats } from "@/data/home/primary";
import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Overview from "@/components/services/common/Overview";
import GetStarted from "@/components/services/common/GetStarted";
import WhatWeOffer from "@/components/services/webd/WhatWeOffer";
import WebSolutions from "@/components/services/webd/WebSolutions";
import Testimonials from "@/components/services/webd/Testimonials";
import DevelopmentProcess from "@/components/services/webd/DevelopmentProcess";
import WebDevelopmentBanner from "@/components/services/webd/WebDevelopmentBanner";

export default function Page() {
  return (
    <>
      <div className="pt-8 md:pt-20 lg:pt-24">
        <WebDevelopmentBanner />
      </div>
      <Overview
        headerText={["Crafting Exceptional", "Websites", "That Drive Success"]}
        description="From concept to launch, we bring your digital ideas to life with tailored web solutions that elevate your brand and engage your audience."
      />
      <WhatWeOffer />
      <WebSolutions />
      <DevelopmentProcess />
      <Trusted />
      <div className="hidden container mx-auto lg:px-20 lg:grid grid-cols-2 md:grid-cols-4 text-center pt-12">
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
      <GetStarted />
    </>
  );
}
