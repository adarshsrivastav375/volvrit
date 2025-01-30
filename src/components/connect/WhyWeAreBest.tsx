import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function WhyWeAreBest() {
  return (
    <div className="container max-w-7xl m-auto lg:p-10 flex">
      <div className="w-1/5">
        <h2 className="lg:text-3xl">What We Are Best</h2>
        <p>
          We design and deliver top-tier Android apps using cutting-edge
          technology, ensuring innovative, high-performance solutions that
          outpace competitors and drive exceptional success for our clients
        </p>
      </div>

      <div className="flex justify-end items-center gap-6 max-w-6xl py-4 mx-auto">
        <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:min-h-72 max-h-72 min-w-56 max-w-56 ">
          <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
            <Image
              src={"assets/banners/mobileDev.svg"}
              width={50}
              height={50}
              alt=" "
            />
          </div>
          <h3 className="text-ls py-2 font-bold">Our Services</h3>
          <p className="text-xs leading-4">
            We use advanced technology platforms and software for developing and
            launching high-performance applications for Android devices.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:min-h-72 max-h-72  min-w-56 max-w-56">
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
          <p className="text-xs leading-4">
            Our team of expert developers specializes in designing scalable,
            secure, and performance-driven applications to help businesses
            achieve a competitive advantage.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4  shadow-md lg:min-h-72 max-h-72 min-w-56 max-w-56">
          <div className="flex justify-center items-center p-3 border border-gray-900  rounded-full bg-white w-16 h-16 ">
            <Image
              src={"assets/banners/mobileDev.svg"}
              width={50}
              height={50}
              alt=" "
            />
          </div>
          <h3 className="text-ls py-2 font-bold">Our Services</h3>
          <p className="text-xs leading-4">
            We apply the most modern technology platforms and software to create
            and launch exemplary Android apps.
          </p>
        </div>
      </div>
    </div>
  );
}
