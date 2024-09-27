"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description:
      "We have developed secure and user-friendly applications for both iOS and Android to give you the best experience with numerous business requirements.",
    image: "/assets/logo/svg/webdevelopment.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 2,
    title: "APP DEVELOPMENT",
    description:
      "Our best-in-class dynamic responsive websites focus upon business needs with a promise for maximum performance, user experience, as well as cross-platform compatibility.",
    image: "/assets/logo/svg/mobile.svg",
    bgClass: "bg-primary text-white",
  },
  {
    id: 3,
    title: "Artifical Intelligence",
    description:
      "Volvrit designs advanced AI algorithms to help in smarter automation, better data analysis, and improved decision-making in a diverse range of industries.",
    image: "/assets/logo/svg/artificial.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 4,
    title: "Saas Development",
    description:
      "Volvrit builds scalable SaaS platforms, providing smooth cloud-based solutions to simplify the deployment, management, and collaboration of software services.",
    image: "/assets/logo/svg/saas.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 5,
    title: "Blockchain DEVELOPMENT",
    description:
      "Volvrit develops secure blockchain solutions, which tend to ensure secure, transparent, and decentralized transactions across finance, supply chains, and more.",
    image: "/assets/logo/svg/blockchain.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 6,
    title: "UI/UX Desiging",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward..",
    image: "/assets/logo/svg/pencil.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 7,
    title: "DIGITAL MARKETING",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    image: "/assets/logo/svg/marketing.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 8,
    title: "CRM DEVELOPMENT",
    description:
      "We create high-performance mobile and web apps, delivering seamless user experiences to drive your business forward.",
    image: "/assets/logo/svg/crm.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 9,
    title: "API DEVELOPMENT",
    description:
      "Development of customized CRM solutions to set up an efficient customer interaction model, efficient sales processes, and improvement.",
    image: "/assets/logo/svg/api.svg",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
];

const Services = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:pt-20 lg:px-36 max-w-9xl mx-auto bg-white">
      <div className="hidden lg:grid grid-cols-3 gap-7">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${service.bgClass} cursor-pointer p-5 rounded-xl shadow-corner hover:shadow-none transition-all duration-200 ease-linear`}
          >
            <div className="px-3">
              <Image
                width={40}
                height={40}
                alt={service.title}
                className="w-14 3xl:w-20 4xl:w-28 object-contain"
                src={service.image}
              />
            </div>
            <h3 className="text-2xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl py-5 font-bold uppercase">
              <span>
                {service.title.split(" ")[0]}
                <br />
              </span>
              <span>{service.title.split(" ")[1]}</span>
            </h3>
            <p className="text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
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
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                key={service.id}
                className={`${service.bgClass} cursor-pointer h-72 md:h-96 p-5 rounded-xl shadow-corner hover:shadow-none transition-all duration-200 ease-linear`}
              >
                <div className="px-3">
                  <Image
                    width={40}
                    height={40}
                    alt={service.title}
                    className="object-contain"
                    src={service.image}
                  />
                </div>
                <h3 className="text-xl md:text-2xl 2xl:text-4xl py-3 md:py-5 font-bold uppercase">
                  <span>
                    {service.title.split(" ")[0]}
                    <br />
                  </span>
                  <span>{service.title.split(" ")[1]}</span>
                </h3>
                <p className="text-sm 2xl:text-xl">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
