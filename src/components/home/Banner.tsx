"use client";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "legal">("tech");

  return (
    <div className="pt-20 relative bg-black text-white h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        fill
        priority
        unoptimized
        alt="Background"
        src="/assets/home/herosection_bg.jfif"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-lg mb-2">WELCOME TO VOLVRIT</h2>
        <h1 className="text-5xl w-2/3 leading-normal mx-auto font-bold mb-6">
          Your Trusted Partner in Technology & Legal Services
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-10 py-2 rounded-md font-medium transition ${
              activeTab === "tech"
                ? "bg-blue-600 text-white"
                : "bg-transparent text-white border border-white"
            }`}
            onClick={() => setActiveTab("tech")}
          >
            TECH SERVICE
          </button>
          <button
            className={`px-10 py-2 rounded-md font-medium transition ${
              activeTab === "legal"
                ? "bg-blue-600 text-white"
                : "bg-transparent text-white border border-white"
            }`}
            onClick={() => setActiveTab("legal")}
          >
            LEGAL SERVICE
          </button>
        </div>

        <div className="flex justify-center space-x-10">
          <div className="flex items-center space-x-2">
            <span className="text-3xl bg-white w-10 aspect-square rounded-full text-black flex justify-center items-center">
              ✔
            </span>
            <span className="text-sm">CUSTOM SOFTWARE DEVELOPMENT</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-3xl bg-white w-10 aspect-square rounded-full text-black flex justify-center items-center">
              ✔
            </span>
            <span className="text-sm">TAX CONSULTING AND COMPLIANCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
