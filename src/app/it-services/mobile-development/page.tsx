import Link from "next/link";
import { questions } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";
import { BsArrowRightCircleFill } from "react-icons/bs";
import HeroSection from "@/components/services/mobile/Herosection";
import WhatWeOffer from "@/components/services/mobile/WhatWeOffer";
import IndustryWeTarget from "@/components/services/mobile/IndustryWeTarget";
import WhyChooseVolvrit from "@/components/services/mobile/WhyChooseVolvrit";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseVolvrit />
      <IndustryWeTarget />
      <div className="relative text-white max-w-9xl mx-[6vw] rounded-3xl overflow-hidden p-4 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s Get Started on Your Mobile App Development Services
            </h4>
            <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
              Be ready to create a personalized mobile application that could
              take your business to the next level. Do similar businesses
              require boosting their customer engagement efficiency and growth
              with mobile apps? Contact us today about your project to
              let&apos;s get started building the right mobile app for
              furthering your business goals.
            </p>
            <Link
              href="/it-services/crm-development"
              className="py-3 mx-auto justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            >
              <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
              <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-9xl mx-auto rounded-3xl overflow-hidden px-4 md:px-6 lg:px-20 pt-20 pb-10">
        <h5 className="text-3xl text-center w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-8 font-semibold">
          Frequently Asked Quesions
        </h5>
        <Accordion
          faqs={questions}
          colored="bg-[#0B2D52] text-white rounded-xl"
        />
      </div>
    </>
  );
}
