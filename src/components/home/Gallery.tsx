"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const gallery = [
  {
    id: 1,
    images: [
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
    ],
  },
  {
    id: 2,
    images: [
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
    ],
  },
  {
    id: 3,
    images: [
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
      "/assets/home/aboutUs.png",
    ],
  },
];

const Gallery = () => {
  return (
    <div className="">
      <div className="bg-white p-5 lg:p-10 lg:pb-8 rounded-xl flex flex-col justify-center items-center gap-5">
        {gallery.map((gal: any, index) => {
          return (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={40}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: (index + 1) * 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="w-full mx-auto rounded-xl h-full"
            >
              {gal.images.map((image: any, index: any) => (
                <SwiperSlide key={index} className="h-full">
                  <div
                    key={index}
                    className="bg-gray-200 rounded-xl w-full h-full aspect-square shadow-corner flex flex-col"
                  >
                    <Image
                      src={image}
                      alt={`image-${index}`}
                      width={100}
                      height={100}
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
