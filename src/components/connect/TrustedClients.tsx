"use client";

// components/TrustedClientsGridCarousel.tsx
import React, { useState, useEffect } from "react";
import { trustedClient } from "../home/OurPartners";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";

const TrustedClientsGridCarousel: React.FC = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 9; // Show 9 items at a time in a 3x3 grid

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + visibleItems) % trustedClient.length
      );
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate the visible logos
  const visibleClients = [...trustedClient, ...trustedClient].slice(
    currentIndex,
    currentIndex + visibleItems
  );

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left: Carousel Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 overflow-hidden">
            {visibleClients.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4 border-none"
              >
                <Image
                  width={100}
                  height={12}
                  src={client.imageUrl}
                  alt={client.title}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between relative mt-4 top-[-9.7rem]">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === 0
                    ? clients.length - visibleItems
                    : prevIndex - visibleItems
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/6 hover:bg-gray-100 p-2 rounded-full  focus:outline-none z-10"
              aria-label="Previous"
            >
              <IoArrowBack width={15} height={20} />
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex + visibleItems) % clients.length
                )
              }
              className="absolute lg:left-[35rem] top-1/2 transform -translate-y-1/6  hover:bg-gray-100 p-2 rounded-full  focus:outline-none z-10"
              aria-label="Next"
            >
              <IoArrowForward width={15} height={20} />
            </button>
          </div>
        </div>

        {/* Right: Text Description Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Trusted Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600 lg:pr-16">
            We always deploy and use the world’s most powerful technology
            platforms and software for developing and launching Android apps.
            This is the reason that our Android app development services are
            always one step ahead of our competitors, ensuring stunning success
            for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsGridCarousel;
