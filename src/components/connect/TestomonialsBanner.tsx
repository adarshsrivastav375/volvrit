"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleOutline, IoStar } from "react-icons/io5";
import Image from "next/image";

export default function TestimonialsBanner() {
  const bannerImage = "assets/banners/advance2.png";
  // Duplicate clients for infinite scrolling effect
  const clients = [
    {
      id: 1,
      name: "Soham Kedia",
      image: "/assets/banners/google.png",
      testimonial:
        "Volvorit delivered an exceptional, responsive, and visually stunning website. Their team was professional, communicative, and attentive to our needs. Highly recommend them for reliable, creative,web development services! Hope to work on further projects.",
    },

    {
      id: 2,
      name: "Bhavya Gautam",
      image: "/assets/banners/google.png",
      testimonial:
        "The team at Volvrit demonstrated unparalleled expertise, delivering a robust and user-friendly app that exceeded our expectations.",
    },
  ];
  const scrollingClients = [...clients, ...clients, ...clients];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-8xl m-auto p-4 lg:p-10 w-full"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:p-6">
        <h2 className="text-lg lg:text-xl mb-4 bg-gradient-to-r from-purple-500 to-blue-500 flex rounded-full tracking-tight text-gray-100 p-3 px-5 w-full lg:w-2/4">
          Hear From Happy Clients
        </h2>
        <p className=" px-4 lg:p-1 text-lg mb-8">
          We always deploy and use the world’s most powerful technology
          platforms and software for developing and launching Android apps.
        </p>
        <Link
          href="tel:+919889988909"
          className="flex justify-center items-center border-2 w-11/12   bg-white text-gray-700 px-1 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Us
          <IoArrowUpCircleOutline
            className="text-gray-900 rotate-45 text-2xl ml-1"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="relative overflow-hidden py-8 h-[100vh]">
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
              className="h-fit rounded-2xl flex justify-center items-center bg-[#ffffff30] shadow-md p-4"
            >
              <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 p-2 flex-col justify-center items-center">
                <div className="w-96 rounded-x flex justify-start items-center">
                  <div className="h-14 w-14 overflow-hidden  rounded-full">
                    <Image
                      src={client?.image}
                      width={50}
                      height={50}
                      alt={client.name}
                      className="w-full h-full rounded-full object-contain p-2"
                    />
                  </div>
                  <div className="mx-2">
                    <h2>{client?.name}</h2>
                    <p className="flex items-center justify-start">
                      <span className="flex items-center mx-2">
                        {[1, 2, 3, 4, 5].map((index) => {
                          return <IoStar key={index} width={20} height={20} />;
                        })}
                      </span>
                      <span className="text-gray-600">{"| 6 days ago"}</span>
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p>{client?.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
