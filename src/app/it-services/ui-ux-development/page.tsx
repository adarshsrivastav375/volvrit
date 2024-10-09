import Image from "next/image";
import { UIUX_FAQs } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";
import CardComponent from "@/components/home/CardComponent";
import { trustedClient } from "@/components/home/OurPartners";
import HeroSection from "@/components/services/uiux/Herosection";
import WhatWeOffer from "@/components/services/uiux/Whatweoffer";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const images = [
  { width: 100, url: "/assets/logo/services/nextjs.png" },
  { width: 70, url: "/assets/logo/services/blockchain.png" },
  { width: 70, url: "/assets/logo/services/bubble.png" },
  { width: 80, url: "/assets/logo/services/reactjs.png" },
  { width: 90, url: "/assets/logo/services/ios.png" },
  { width: 100, nograyscale: true, url: "/assets/logo/services/aws.png" },
  { width: 120, url: "/assets/logo/services/nodejs.png" },
  { width: 70, url: "/assets/logo/services/group.png" },
  { width: 50, url: "/assets/logo/services/android.png" },
  { width: 90, nograyscale: true, url: "/assets/logo/services/53.png" },
];
export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="overflow-hidden py-2">
        <div className="flex animate-marquee justify-start items-center whitespace-nowrap">
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
      <WhatWeOffer />
      <div className="max-w-9xl mx-auto py-8 text-center px-4 md:px-6 lg:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
          Portfolio
        </h4>
        <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto">
          We have experience in various projects in the retail healthcare,
          education, and corporate sectors, seen the best of industry types
          through our portfolio of projects. Each project, essentially, speaks
          of our quality and customer satisfaction commitment.
        </p>
      </div>
      <CardComponent />
      <div className="bg-[#0B2D52] text-white pt-16 2xl:pt-24 3xl:pt-32">
        <div className="max-w-9xl mx-auto flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-20 2xl:px-40">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold 3xl:text-6xl 4xl:text-7xl mb-4 !leading-snug">
            Your website is your 24/7 sales person. Don&apos;t just settle for
            an ordinary one. Go beyond with Volvrit
          </h2>
          <StartAProjectButton marginBottom="mb-10" />
          <div className="w-4/5 mx-auto relative">
            <Image
              width={64}
              height={64}
              alt={"Screen"}
              unoptimized
              priority
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-frame1.png"
              className="w-full object-cover"
            />
            <Image
              width={200}
              height={200}
              alt={"Screen"}
              unoptimized
              priority
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-framep1.png"
              className="object-contain absolute top-0  right-0"
            />
            <Image
              width={200}
              height={200}
              alt={"Screen"}
              src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-frame2.png"
              className="object-contain absolute -top-10"
            />
          </div>
        </div>
      </div>
      <div className="max-w-9xl mx-auto rounded-3xl overflow-hidden px-4 md:px-6 lg:px-20 pt-20 pb-10">
        <h5 className="text-3xl text-center w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-8 font-semibold">
          Frequently Asked Quesions
        </h5>
        <Accordion
          faqs={UIUX_FAQs}
          colored="bg-[#0B2D52] text-white rounded-xl"
        />
      </div>
    </>
  );
}
