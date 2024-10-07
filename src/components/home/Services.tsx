"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useState } from "react";
import APILogo from "../svgLogo/APILogo";
import CRMLogo from "../svgLogo/CRMLogo";
import WebDLogo from "../svgLogo/WebdLogo";
import SaasLogo from "../svgLogo/SaasLogo";
import MobileLogo from "../svgLogo/MobileLogo";
import PencilLogo from "../svgLogo/PencilLogo";
import MarketingLogo from "../svgLogo/MarketingLogo";
import ArtificialLogo from "../svgLogo/ArtificialLogo";
import BlockchainLogo from "../svgLogo/BlockchainLogo";

const services = [
  {
    id: 1,
    href: "/it-services/web-development",
    title: "WEB DEVELOPMENT",
    description:
      "We have developed secure and user-friendly applications for both iOS and Android to give you the best experience with numerous business requirements.",
    Image: WebDLogo,
  },
  {
    id: 2,
    href: "/it-services/mobile-development",
    title: "APP DEVELOPMENT",
    description:
      "Our best-in-class dynamic responsive websites focus upon business needs with a promise for maximum performance, user experience, as well as cross-platform compatibility.",
    Image: MobileLogo,
  },
  {
    id: 3,
    href: "/it-services/artificial-intelligence-development",
    title: "Artificial Intelligence",
    description:
      "Volvrit designs advanced AI algorithms to help in smarter automation, better data analysis, and improved decision-making in a diverse range of industries.",
    Image: ArtificialLogo,
  },
  {
    id: 4,
    href: "/it-services/saas-development",
    title: "Saas Development",
    description:
      "Volvrit builds scalable SaaS platforms, providing smooth cloud-based solutions to simplify the deployment, management, and collaboration of software services.",
    Image: SaasLogo,
  },
  {
    id: 5,
    href: "/it-services/blockchain-development",
    title: "Blockchain DEVELOPMENT",
    description:
      "Volvrit develops secure blockchain solutions, which tend to ensure secure, transparent, and decentralized transactions across finance, supply chains, and more.",
    Image: BlockchainLogo,
  },
  {
    id: 6,
    href: "/it-services/ui-ux-development",
    title: "UI/UX Designing",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward..",
    Image: PencilLogo,
  },
  {
    id: 7,
    href: "/it-services/digital-development",
    title: "DIGITAL MARKETING",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    Image: MarketingLogo,
  },
  {
    id: 8,
    href: "/it-services/crm-development",
    title: "CRM DEVELOPMENT",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    Image: CRMLogo,
  },
  {
    id: 9,
    href: "/api-services/api-development",
    title: "API DEVELOPMENT",
    description:
      "Development of customized CRM solutions to set up an efficient customer interaction model, efficient sales processes, and improvement.",
    Image: APILogo,
  },
];

const Services = () => {
  // State to track the hovered item
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Handlers for hover effect
  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="w-full px-4 md:px-6 lg:pt-20 lg:px-36 max-w-8xl mx-auto bg-white">
      {/* For desktop and larger screens */}
      <div className="hidden lg:grid grid-cols-3 gap-7 2xl:gap-10 3xl:gap-14">
        {services.map((service) => {
          let Image = service.Image;
          return (
            <div
              key={service.id}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
              className={`bg-white text-black hover:bg-[#00295A] hover:text-white cursor-pointer p-5 3xl:p-10 rounded-xl shadow-lg hover:shadow-none transition-all duration-200 ease-linear`}
            >
              <div className="px-3 w-24 h-24">
                <Image color={hoveredId === service.id ? "white" : "black"} />
              </div>
              <h3 className="text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl py-5 2xl:py-10 3xl:py-14 font-bold uppercase">
                <span>
                  {service.title.split(" ")[0]}
                  <br />
                </span>
                <span>{service.title.split(" ")[1]}</span>
              </h3>
              <p className="text-base lg:text-lg 2xl:text-2xl line-clamp-5 3xl:text-3xl 2xl:font-light">
                {service.description}
              </p>
              <div className="mt-5 mb-2">
                <Link
                  href={service?.href}
                  className="text-xl bg-white text-[#00295A] px-6 py-2 rounded-md border border-[#00295A]"
                >
                  Learn More...
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* For mobile screens */}
      <div className="lg:hidden mt-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full mx-auto rounded-xl h-full"
        >
          {services.map((service, index) => {
            let Image = service.Image;
            return (
              <SwiperSlide key={index}>
                <div
                  key={service.id}
                  onMouseEnter={() => handleMouseEnter(service.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`bg-white text-black hover:bg-[#00295A] hover:text-white cursor-pointer mx-2 md:mx-0 p-5 rounded-xl shadow-lg hover:shadow-none transition-all duration-200 ease-linear`}
                >
                  <div className="px-3">
                    <Image
                      color={hoveredId === service.id ? "white" : "black"}
                    />
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl py-3 md:py-5 font-bold uppercase">
                    <span>
                      {service.title.split(" ")[0]}
                      <br />
                    </span>
                    <span>{service.title.split(" ")[1]}</span>
                  </h3>
                  <p className="text-lg 2xl:text-xl line-clamp-4">
                    {service.description}
                  </p>
                  <div className="mt-5 mb-2">
                    <Link
                      href={service?.href}
                      className="text-xl bg-white text-[#00295A] px-6 py-2 rounded-md border border-[#00295A]"
                    >
                      Learn More...
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
