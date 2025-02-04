"use client";

import ContactUsModal from "@/components/common/ContactUsModal";
import ConnectBanner2 from "@/components/connect/ContactBanner2";
import FeatureCards from "@/components/connect/FeatureCards";
import OurTechPartners from "@/components/connect/OurTechPartners";
import TestomonialsBanner from "@/components/connect/TestomonialsBanner";
import TrustedClients2 from "@/components/connect/TrustedClients2";
import WhatWeOffer from "@/components/connect/WhatWeOffer";
import WhoWeAre from "@/components/connect/WhoWeAre";
import WhyWeAreBest from "@/components/connect/WhyWeAreBest";
import WorkFlow from "@/components/connect/WorkFlow";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      // If first time, open the modal after 3 seconds
      const timer = setTimeout(() => {
        setModalOpen(true);
        // Set the flag so the modal doesn't auto-open on future visits
        localStorage.setItem("hasVisited", "true");
      }, 3000);

      // Cleanup the timer when component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <ConnectBanner2 setModalOpen={setModalOpen} />
      <TrustedClients2 />
      <WhoWeAre />
      <WhatWeOffer setModalOpen={setModalOpen} />
      <WhyWeAreBest />
      <FeatureCards />
      <WorkFlow />
      <OurTechPartners />
      <TestomonialsBanner setModalOpen={setModalOpen} />
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
