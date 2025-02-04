import Image from "next/image";
import React from "react";

export default function WorkFlow() {
  return (
    <div className="container max-w-7xl m-auto p-4 lg:p-0 lg:px-16">
      <div>
        <h2 className="text-2xl lg:text-3xl mb-4 tracking-tight text-gray-900">Product Development Strategy</h2>
        <p>
           We develop innovative, scalable, and market-ready solutions using
          innovative technologies in tandem with agile methods and user-focused
          design to delight our customers.
        </p>
      </div>
      <div className="w-full h-fit">
        <Image
          priority
          unoptimized
          width={100}
          height={100}
          alt="Home page Banner"
          src="/assets/banners/flowBanner.svg"
          className="bg-gray-50   w-full h-full bg-center object-cover"
        />
      </div>
    </div>
  );
}
