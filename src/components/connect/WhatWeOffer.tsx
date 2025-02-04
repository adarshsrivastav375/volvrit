import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function WhatWeOffer() {
  return (
    <div className="container max-w-7xl m-auto p-4 lg:p-10">
      <h2 className="text-xl font-semibold lg:text-3xl">What We Offer</h2>
      <div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:justify-start lg:items-center gap-6 max-w-6xl py-4 mx-auto">
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0 shadow-md lg:max-h-44 min-w-56 ">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/mobileDev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-semibold">Mobile App Development</h3>
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
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0 shadow-md lg:max-h-44  min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/webdev.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-semibold">
            Web App Development
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
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0  shadow-md lg:max-h-44 min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/ui2.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-bold">Website Design and Development</h3>
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
          <div className="bg-transparent lg:w-52 m-auto lg:m-0  relative lg:pt-20">
            <span className="inline-block w-48 h-40 absolute top-0 right-0 -z-10">
              {" "}
              <Image
                src={"assets/banners/line-arrow.svg"}
                alt=""
                className="absolute top-4 left-[-16rem] rotate-[-45deg] lg:top-10 lg:rotate-0 lg:left-[-25px] z-20"
                width={70}
                height={70}
              />{" "}
            </span>
            <p className="w-8/12 ml-auto text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Let us handle your IT needs and your business growth through our
              excellent services.
            </p>
          </div>
        </div>
        <div className="flex flex-col   lg:flex lg:flex-row lg:justify-end lg:items-center gap-6 max-w-6xl py-4 mx-auto">
          <div className="bg-transparent m-auto lg:m-0 relative left-[-50px] pt-10 pl-5 w-80 ">
         
              {" "}
              <Image
                src={"assets/banners/curly-arrow-2.svg"}
                alt=""
                className="lg:rotate-[-90deg] absolute top-36 left-52 rotate-0 lg:top-0 sm:left-10 lg:left-72 md:top-32  md:left-64 -z-0"
                width={120}
                height={120}
              />{" "}
              <Image
                src={"assets/banners/circle.svg"}
                alt=""
                width={200}
                height={200}
                className="absolute top-6 right-[-60px] -z-10"
              />{" "}
          
            <p className="w-9/12 ml-auto font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Elevate your experience with the finest service, we promise
              unparalleled quality in every detail. Contact us today and
              experience it yourself.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0 shadow-md lg:max-h-44 min-w-56 ">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/digital2.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-semibold">Digital Marketing</h3>
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
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0 min-w shadow-md lg:max-h-44  min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/ux2.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-semibold">
            UI/UX Design and Development
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
          <div className="bg-gray-100 rounded-lg p-4 mb-4 lg:m-0 shadow-md lg:max-h-44 min-w-56">
            <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
              <Image
                src={"assets/banners/api.svg"}
                width={50}
                height={50}
                alt=" "
              />
            </div>
            <h3 className="text-ls py-2 font-semibold">API Development</h3>
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
