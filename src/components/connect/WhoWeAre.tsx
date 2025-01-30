import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
  return (
    <div className="container mx-w-7xl m-auto">
      <div className=" relative text-white lg:min-h-full flex flex-col justify-center items-start  max-w-6xl rounded-xl overflow-hidden m-auto opacity-95">
        <Image
          priority
          unoptimized
          width={100}
          height={100}
          alt="Home page Banner"
          src="/assets/banners/whoweare.svg"
          className="bg-gray-50 absolute inset-0 blur-[0.7px] w-full h-full bg-center object-cover"
        />
        <div className="z-20 bg-[#00000078] lg:min-h-72 lg:p-10 w-full">
          <h2 className="text-3xl">Who We Are</h2>
          <p className="px-10 py-3">
            Since we started in the year 2015, we have achieved a good
            foundation of tech know-how and new ideas. We are good at giving
            real-time advance answers that help businesses do well in a rapidly
            changing world. This past year we worked with new companies and big
            global firms that make mobile apps work for all kinds of different
            industries. We always focus on doing great work and making our
            clients happy. This has branded us as the partner you can trust who
            is in a position to change with the needs of your clients and
            emerging tech as they come.
          </p>
        </div>
      </div>
    </div>
  );
}
