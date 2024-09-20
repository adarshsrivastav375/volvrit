"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const portfolios = [
  { title: "UNIFICARS", imageUrl: "/assets/home/image1.png" },
  { title: "UNFAZED", imageUrl: "/assets/home/image2.png" },
  { title: "BOOK WAGON", imageUrl: "/assets/home/image3.png" },
];

const OurPortfolio = () => {
  return (
    <div className="pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-20">
      <div className="text-center text-primary mb-8">
        <p className="uppercase tracking-wider text-xs pb-4 md:text-sm">
          — Our Portfolio
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Work Speaks Volumes: Discover Our Projects
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full mx-auto rounded-xl"
      >
        {portfolios.map((portfolio, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <Image
                width={500}
                height={500}
                alt={portfolio?.title}
                src={portfolio?.imageUrl}
                className="w-full h-full rounded-2xl"
              />
              <div className="absolute flex flex-col text-center text-white justify-center items-center inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 rounded-2xl transition-all duration-300 ease-linear cursor-pointer">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl ease-linear">
                  {portfolio?.title}
                </span>
                <Link
                  href="/"
                  className="px-6 py-2 text-white mt-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurPortfolio;
