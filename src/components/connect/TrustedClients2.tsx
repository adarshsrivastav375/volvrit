"use client";

// components/TrustedClientsGridCarousel.tsx
import React, { useState, useEffect } from "react";
import { trustedClient } from "../home/OurPartners";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";

const TrustedClients2: React.FC = () => {
  const clients = [
    { id: 1, name: "Fitness 4 U", logo: "/path/to/logo1.png" },
    { id: 2, name: "WoodHeaven Interiors", logo: "/path/to/logo2.png" },
    { id: 3, name: "Unfazed", logo: "/path/to/logo3.png" },
    { id: 4, name: "Deerghayu", logo: "/path/to/logo4.png" },
    { id: 5, name: "BooksWagon", logo: "/path/to/logo5.png" },
    { id: 6, name: "Unifi Cars", logo: "/path/to/logo6.png" },
    { id: 7, name: "Affinity Salon", logo: "/path/to/logo7.png" },
    { id: 8, name: "Kingsmen Apparels", logo: "/path/to/logo8.png" },
    { id: 9, name: "Keintchi Family Salon", logo: "/path/to/logo9.png" },
    { id: 10, name: "Extra Client 1", logo: "/path/to/logo10.png" },
    { id: 11, name: "Extra Client 2", logo: "/path/to/logo11.png" },
    { id: 12, name: "Extra Client 3", logo: "/path/to/logo12.png" },
  ];

  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const visibleItems = 9; // Show 9 items at a time in a 3x3 grid

  //   // Auto-slide logic
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex(
  //         (prevIndex) => (prevIndex + visibleItems) % trustedClient.length
  //       );
  //     }, 3000); // Slide every 3 seconds
  //     return () => clearInterval(interval);
  //   }, []);

  //   // Calculate the visible logos
  //   const visibleClients = [...trustedClient, ...trustedClient].slice(
  //     currentIndex,
  //     currentIndex + visibleItems
  //   );,

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6; // Number of logos visible per row

  // Duplicate clients to create the infinite scrolling effect
  const visibleClients = [...trustedClient, ...trustedClient];

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
    <section className="py-12 bg-white max-w-7xl m-auto">
      <div className="w-full lg:w-full mt-8 lg:mt-0 lg:pl-12  text-center">
        <h2 className="text-xl sm:text-2xl mb-10 sm:mb-2 relative font-normal tracking-tight text-gray-900">
          <span>
            <Image
              src={"assets/banners/curly-arrow.svg"}
              width={120}
              height={120}
              className=" absolute top-10 sm:left-52"
              alt=""
            />
          </span>
          <span>
            <Image
              src={"assets/banners/curly-arrow-2.svg"}
              width={120}
              height={120}
              className=" absolute top-10 right-0 sm:right-52 "
              alt=""
            />
          </span>
          100% Happy Customers | 10+ Years of experience | 500+ Projects
          Completed
        </h2>
        <h2 className="text-xl sm:text-2xl sm:mb-8 font-normal tracking-tight text-gray-900">
          Join <span className="text-purple-600">500+</span> Happy Customers
          From all over the world
        </h2>
      </div>

      <div className="relative overflow-hidden py-8">
        <div className="relative flex overflow-hidden max-w-screen-xl mx-auto">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...trustedClient, ...trustedClient].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-36 h-20 rounded-lg">
                <Image
                  src={client.imageUrl}
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
      <div className="relative overflow-hidden py-8">
        <div className="relative flex overflow-hidden max-w-screen-lg mx-auto">
          <motion.div
            className="flex space-x-6"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 45,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...trustedClient, ...trustedClient].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-36 h-20 rounded-lg">
                <Image
                  src={client.imageUrl}
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

export default TrustedClients2;
