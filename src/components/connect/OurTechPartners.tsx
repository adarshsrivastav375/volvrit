"use client";

// components/TrustedClientsGridCarousel.tsx
import React, { useState, useEffect } from "react";
import { trustedClient } from "../home/OurPartners";
import Image from "next/image";
import { motion } from "framer-motion";

const OurTechPartners: React.FC = () => {
  const clients = [
    { id: 1, name: "Android", logo: "/assets/banners/android.svg" },
    { id: 2, name: "Kotlin", logo: "/assets/banners/kotlin.svg" },
    { id: 3, name: "FireStore", logo: "/assets/banners/firebase.svg" },
    { id: 4, name: "Java", logo: "/assets/banners/java.svg" },
    { id: 5, name: "stream", logo: "/assets/banners/stream.svg" },
    { id: 6, name: "Google Fit", logo: "/assets/banners/googlefit.svg" },
    { id: 7, name: "Foot", logo: "/assets/banners/foot.svg" },
    { id: 8, name: "crom", logo: "/assets/banners/crom.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6; // Number of logos visible per row

  // Duplicate clients to create the infinite scrolling effect
  const visibleClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [clients.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  return (
    <section className="py-12 bg-whitem max-w-7xl m-auto p-4 lg:p-0">
      <div className="w-full lg:w-full mt-8 lg:mt-0 lg:pl-12  text-left">
        <h2 className="text-2xl lg:text-3xl mb-4  tracking-tight text-gray-900">
          Our tech partners
        </h2>
        <p className="">
          Advanced technology platforms and software have given our development
          services a quality edge over competition, ensuring that these Android
          apps meet the gold standard of excellence in performance for client
          deliverables.
        </p>
      </div>

      <div className="relative overflow-hidden py-8">
        <div className="relative flex overflow-hidden max-w-screen-xl mx-auto">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-36 h-20 rounded-lg">
                <Image
                  src={client.logo}
                  width={150}
                  height={20}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTechPartners;
