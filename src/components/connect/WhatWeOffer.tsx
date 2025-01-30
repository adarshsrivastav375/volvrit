import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function WhatWeOffer() {
  return (
    <div className="container max-w-7xl m-auto lg:p-10">
      <h2 className="lg:text-3xl">What We Offer</h2>
      <div>
        <div className="flex justify-start items-center gap-6 max-w-6xl py-4 mx-auto">
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44 min-w-56 ">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">Our Services</h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44  min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">
              Our Services monile androind
            </h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44 min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">Our Services</h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center gap-6 max-w-6xl py-4 mx-auto">
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44 min-w-56 ">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">Our Services</h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44  min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">
              Our Services monile androind
            </h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:max-h-44 min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">Our Services</h3>
            <Link
              href="tel:+919889988909"
              className="bg-white flex justify-center items-center border-2 text-xs  w-28 text-gray-700 px-1 py-2  rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
              <IoArrowUpCircleOutline
                className="text-gray-900 rotate-45 text-sm ml-1"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
