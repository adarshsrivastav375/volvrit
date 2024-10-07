import { websiteStats } from "@/data/home/primary";
import OurPartners from "@/components/home/OurPartners";
import Trusted from "@/components/services/webd/Trusted";
import Overview from "@/components/services/common/Overview";
import GetStarted from "@/components/services/common/GetStarted";
import WhatWeOffer from "@/components/services/webd/WhatWeOffer";
import HeroSection from "@/components/services/webd/Herosection";
import WebSolutions from "@/components/services/webd/WebSolutions";
import Testimonials from "@/components/services/webd/Testimonials";
import DevelopmentProcess from "@/components/services/webd/DevelopmentProcess";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Accordion from "@/components/common/Accordion";
import { questions } from "@/data/home/faqs";
import ServiceDevelopment from "@/components/services/webd/ServiceDevelopment";
import PortfolioOffer from "@/components/services/webd/PortfolioOffer";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Overview
        headerText={["Your Trusted", "Website Development", "Services Company"]}
        description="Volvrit being one of the best website development company in India aims to deliver creative solutions that best fit your ideas of conducting your business. Whether it&apos;s a small just-started business or a long-established one, the website development services from our company will help you build a powerful online presence."
        description2="What makes a great website? It attracts visitors, but a great website converts those visitors into loyal customers. Volvrit mixes creativity, technology, and innovation to build high-performance websites that can drive your business forward, achieve your goals, and remain the best blend of aesthetics and functionality for visitors."
      />
      <div className="relative text-white py-12">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-32">
          <div className="text-left">
            <h4 className="text-3xl w-full mx-auto md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-medium">
              We offer a Wide Variety of Custom Website Development Services.
            </h4>
            <div className="flex justify-between items-center gap-20">
              <p className="w-1/2 text-xl lg:text-2xl 2xl:text-3xl opacity-80">
                We know every organization is different, and that&apos;s the reason
                we offer customized website development as per your
                requirements. You may need an e-commerce website, a corporate
                site, or even a personal blog. Choose our solution package
                because we will provide you with each as per your needs.
              </p>
              <div className="w-1/2 flex flex-col items-center justify-center">
                <Image
                  priority
                  unoptimized
                  width={100}
                  height={100}
                  alt="Mobile Banner"
                  src="https://volvrit.s3.ap-south-1.amazonaws.com/metaverse.png"
                  className="w-3/4 h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <ServiceDevelopment />
      <PortfolioOffer />
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
              href="/contact-us"
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
