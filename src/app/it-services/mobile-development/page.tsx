import { mobileDFaqs } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";
import HeroSection from "@/components/services/mobile/Herosection";
import WhatWeOffer from "@/components/services/mobile/WhatWeOffer";
import IndustryWeTarget from "@/components/services/mobile/IndustryWeTarget";
import WhyChooseVolvrit from "@/components/services/mobile/WhyChooseVolvrit";
import StartAProjectButton from "@/components/common/StartAProjectButton";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseVolvrit />
      <IndustryWeTarget />
      <div className="relative text-white max-w-9xl mx-4 md:mx-[6vw] rounded-3xl overflow-hidden px-6 py-10 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s Get Started on Your Mobile App Development Services
            </h4>
            <p className="text-sm lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
              Be ready to create a personalized mobile application that could
              take your business to the next level. Do similar businesses
              require boosting their customer engagement efficiency and growth
              with mobile apps? Contact us today about your project to
              let&apos;s get started building the right mobile app for
              furthering your business goals.
            </p>
            <StartAProjectButton />
          </div>
        </div>
      </div>
      <div className="max-w-9xl mx-auto rounded-3xl overflow-hidden px-4 md:px-6 lg:px-20 pt-10 md:pt-20 pb-5 md:pb-10">
        <h5 className="text-4xl text-center w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-8 font-semibold">
          Frequently Asked Quesions
        </h5>
        <Accordion
          faqs={mobileDFaqs}
          colored="bg-[#0B2D52] text-white rounded-xl"
        />
      </div>
    </>
  );
}
