import Image from "next/image";
import { CRM_FAQs } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";
import { trustedClient } from "@/components/home/OurPartners";
import CRMBenefits from "@/components/services/crm/CRMBenefits";
import HeroSection from "@/components/services/crm/Herosection";
import CRMSolutions from "@/components/services/crm/CRMSolutions";
import ExtraBenefits from "@/components/services/crm/ExtraBenefits";
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
      <div className="relative text-white bg-black">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "url('https://volvrit.s3.ap-south-1.amazonaws.com/crmframe1.png')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 py-10 md:py-20 lg:py-[25vh]">
          <div className="text-center">
            <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl my-8 font-semibold">
              Your Customer Relationship
              <br /> through Digital Transformation
            </h4>
            <p className="text-lg font-extralight px-4 md:px-0 md:w-3/4 mx-auto mb-8">
              Digital transformation redefines customer relationships by
              integrating advanced technologies into everyday interactions. By
              utilizing data analytics, businesses can gain insights into
              customer behavior, enabling personalized experiences and timely
              responses. Automation streamlines processes, ensuring efficient
              communication and enhancing satisfaction. This strategic approach
              fosters trust and loyalty, making customers feel valued in a
              dynamic digital environment
            </p>
            <StartAProjectButton />
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-2">
        <div className="flex animate-marquee justify-start items-center whitespace-nowrap">
          {[...trustedClient, ...trustedClient, ...trustedClient].map(
            (client) => (
              <div key={client.id} className="flex-none px-6">
                <Image
                  src={client.imageUrl}
                  alt={client.title}
                  width={client.width}
                  height={client.height}
                  className="w-fit object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
      <CRMSolutions />
      <CRMBenefits />
      <div className="bg-[#0B2D52] text-center text-white">
        <div className="max-w-9xl mx-auto py-16 px-4 md:px-6 lg:px-20">
          <h4 className="text-2xl md:text-3xl font-medium 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl mb-5">
            Modern Technology Stack for Optimal Results
          </h4>
          <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto font-light opacity-50">
            We use the latest technologies to ensure your SaaS application is
            secure, scalable, and efficient.
          </p>
          <div className="flex flex-wrap pt-5 justify-center items-center lg:px-20">
            {images.map((image, index) => {
              return (
                <div
                  className="md:w-[10%] lg:w-[16%] px-3 lg:px-0 py-3 grayscale"
                  key={index}
                >
                  <Image
                    priority
                    height={100}
                    src={image?.url}
                    width={image?.width}
                    alt={`image-${index}`}
                    className={`h-fit w-12 md:w-20 lg:w-auto 2xl:w-28 3xl:w-36 4xl:w-48 ${
                      image?.nograyscale ? "" : "opacity-40"
                    } `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ExtraBenefits />
      <div className="relative text-white max-w-9xl mx-[6vw] rounded-3xl overflow-hidden p-4 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s start growing your business
            </h4>
            <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
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
      <div className="max-w-9xl mx-auto rounded-3xl overflow-hidden px-4 md:px-6 lg:px-20 pt-20 pb-10">
        <h5 className="text-3xl text-center w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-8 font-semibold">
          Frequently Asked Quesions
        </h5>
        <Accordion
          faqs={CRM_FAQs}
          colored="bg-[#0B2D52] text-white rounded-xl"
        />
      </div>
    </>
  );
}
