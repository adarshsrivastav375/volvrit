import ConnectBanner2 from "@/components/connect/ContactBanner2";
import FeatureCards from "@/components/connect/FeatureCards";
import OurServices from "@/components/connect/OurServices";
import OurTechPartners from "@/components/connect/OurTechPartners";
import ProductDevelopment from "@/components/connect/ProductDevelopment";
import TechnologyStacks from "@/components/connect/TechnologyStacks";
import TesomoniallConnect from "@/components/connect/TesomoniallConnect";
import TestomonialsBanner from "@/components/connect/TestomonialsBanner";
import TrustedClients from "@/components/connect/TrustedClients";
import TrustedClients2 from "@/components/connect/TrustedClients2";
import WhatWeOffer from "@/components/connect/WhatWeOffer";
import WhoWeAre from "@/components/connect/WhoWeAre";
import WhyChooseUs from "@/components/connect/WhyChooseUs";
import WhyWeAreBest from "@/components/connect/WhyWeAreBest";
import WorkFlow from "@/components/connect/WorkFlow";
import OurPartners from "@/components/home/OurPartners";
import React from "react";

export default function page() {
  return (
    <div>
      <ConnectBanner2 />
      <TrustedClients2 />
      <WhoWeAre />
      <WhatWeOffer />
      <WhyWeAreBest />
      <FeatureCards />
      <WorkFlow />
      <OurTechPartners />
      <TestomonialsBanner />
    </div>
  );
}
