"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { trustedClient } from "../home/OurPartners";

export default function TestimonialsBanner() {
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

  // Duplicate clients for infinite scrolling effect
  const scrollingClients = [...trustedClient, ...trustedClient];

  return (
    <div
      className="grid grid-cols-2 gap-4 max-w-7xl m-auto p-10 w-full"
      style={{
        backgroundImage: `url(assets/banners/monile.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6">
        <h2 className="text-3xl mb-4 bg-blue-700 rounded-full tracking-tight text-gray-100 px-2 w-auto">
          Hear From Happy Clients
        </h2>
        <p>
          We always deploy and use the world’s most powerful technology
          platforms and software for developing and launching Android apps.
        </p>
        <Link
          href="tel:+919889988909"
          className="bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center items-center border-2  w-40 text-gray-50 px-1 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
          <IoArrowUpCircleOutline
            className="text-gray-900 rotate-45 text-2xl ml-1"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="relative overflow-hidden py-8 h-80">
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ y: "0%" }}
          animate={{ y: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {scrollingClients.map((client, index) => (
            <div
              key={index}
              className="h-44 rounded-lg flex justify-center items-center bg-white shadow-md"
            >
              <div className="w-4/5 rounded-xl bg-gray-50 border border-gray-200 p-2 flex justify-center items-center">
                <div className="w-96 rounded-xl bg-white">
                  <div className="h-16 w-16 overflow-hidden border overflow-hidden rounded-full">
                    <Image
                      src={client.imageUrl}
                      width={50}
                      height={50}
                      alt={client.title}
                      className="w-full h-full rounded-full object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
