import Image from "next/image";
import { API_FAQs } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";
import { trustedClient } from "@/components/home/OurPartners";
import HeroSection from "@/components/services/api/HeroSection";
import ServicesInDevelopement from "@/components/services/api/ServicesInDevelopement";
import StartAProjectButton from "@/components/common/StartAProjectButton";

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="overflow-hidden py-2">
        <div className="flex animate-marqueeSm md:animate-marqueejustify-start items-center whitespace-nowrap">
          {[...trustedClient, ...trustedClient].map((client) => (
            <div key={client.id} className="flex-none px-6">
              <Image
                src={client.imageUrl}
                alt={client.title}
                width={client.width}
                height={client.height}
                className="w-fit object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <ServicesInDevelopement />
      <div className="relative text-white max-w-9xl -mt-56 md:-mt-48 mx-4 md:mx-[6vw] rounded-3xl overflow-hidden px-t py-10 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s Build Your Shopify Store
              <br /> Together
            </h4>
            <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
              Whether you&apos;re launching a new store or improving an existing
              one, our Shopify development services are designed to help you
              succeed. Get in touch with us today to discuss your project and
              see how we can unlock the full potential of your online business.
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
          faqs={API_FAQs}
          colored="bg-[#0B2D52] text-white rounded-xl"
        />
      </div>
    </>
  );
}
