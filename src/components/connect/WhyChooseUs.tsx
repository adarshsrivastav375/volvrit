import React from "react";
import AnimationBackground from "./AnimationBackground";
import Image from "next/image";

export default function WhyChooseUs() {
  const steps = [
    {
      iconSrc: "/assets/banners/advance.svg",
      title: "Advance Technology Integration",
      description:
        "We always deploy and use the world’s most powerful technology platforms and software for developing and launching Android apps.",
    },
    {
      iconSrc: "/assets/banners/expert.svg",
      title: "Expert Development Team",
      description:
        "Our professional developers are capable of developing scalable, secure, and high-performance applications for the most competitive industries.",
    },
    {
      iconSrc: "/assets/banners/client.svg",
      title: "Client-Centric Solutions",
      description:
        "We always deploy and use the world’s most powerful technology platforms and software for developing and launching Android apps.",
    },
  ];
  return (
    <div className="bg-gray-100 h-auto pb-10 relative">
      <AnimationBackground />
      <div className="absolute top-0 z-10 mb-10 text-gray-800 p-6">
        {" "}
        {/* Your content here */}
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Why Choose Us</h1>
        <p className="mb-8 mx-10 text-center">
          We develop and launch excellent Android apps with the world&apos;s leading
          technology platforms and software. Our commitment to innovation
          ensures that our Android app development services always surpass
          competitors and deliver unparalleled success for our clients.
        </p>
        <div className="mt-6 ;g:flex justify-center items-center gap-4 ">
          {steps &&
            steps?.map((step,index) => (
              <div className="bg-transparent p-6  "key={index}>
                {" "}
                <div className="flex justify-center items-center mx-auto w-44 h-44 rounded-full p-6 border border-gray-800 mb-4">
                  {" "}
                  <Image
                  width={100}
                  height={100}
                    src={step.iconSrc}
                    alt={step.title}
                    className=""
                  />{" "}
                </div>{" "}
                <div className="text-center">
                  {" "}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>{" "}
                  <p className="mt-2 text-gray-600">{step.description}</p>{" "}
                </div>{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
