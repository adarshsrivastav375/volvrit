import ConnectBanner from "@/components/connect/ConnectBanner";
import OurServices from "@/components/connect/OurServices";
import ProductDevelopment from "@/components/connect/ProductDevelopment";
import TechnologyStacks from "@/components/connect/TechnologyStacks";
import TesomoniallConnect from "@/components/connect/TesomoniallConnect";
import TrustedClients from "@/components/connect/TrustedClients";
import WhyChooseUs from "@/components/connect/WhyChooseUs";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Connect:React.FC = () => {
  return (
    <div>
      <ConnectBanner />
      <TrustedClients />
      <OurServices />
      <TechnologyStacks />
      <WhyChooseUs />
      <ProductDevelopment />
      <TesomoniallConnect />
    </div>
  );
}


export default Connect;