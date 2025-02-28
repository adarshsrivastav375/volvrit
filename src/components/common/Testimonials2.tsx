"use client";

import { FcGoogle } from "react-icons/fc";
import { PiStarFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { RiStarHalfSFill, RiStarSFill } from "react-icons/ri";
import { div } from "framer-motion/client";

function getRandomDate() {
  const start = new Date(2024, 0, 1); // Start from Jan 1, 2024
  const end = new Date(2024, 11, 31); // End at Dec 31, 2024
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const testimonials = [
  {
    name: "Ritu Sharma",
    title: "Unifi Cars",
    text: "Volvrit transformed our AR/VR strategy. The VR experiences they designed for our company have transformed customer interaction for us.",
  },
  {
    name: "Rohan Joshi",
    title: "Unfazed",
    text: "We were surprised at how quickly Volvrit grasped what we needed in AR. The virtual onboarding module they developed for our employees streamlined the process immensely",
  },
  {
    name: "Satyam Jha",
    title: "Intense Focus",
    text: "Holistic to Volvrit's AR/VR capabilities, our listings come alive with virtual tours, enabling potential homebuyers to walk through homes virtually in an interactive manner.",
  },
];
const Testimonials2 = () => {
  return (
    <div>
      <div className="max-w-9xl mx-auto pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-16">
        <div className="text-left mb-8 3xl:my-16 4xl:my-20">
          <h2 className="text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-gray-50  font-semibold">
            Ready to Step Into the Future?{" "}
          </h2>
       
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full px-2">
              <div
                key={index}
                className="bg-[#003070] ml-2 md:ml-0 h-full shadow-corner mt-2 p-5 rounded-xl 3xl:rounded-3xl flex flex-col"
              >
                <div className="flex justify-between items-start w-full mb-2">
                  <div className="flex gap-2 2xl:gap-5 items-center text-left">
                    <div className=" text-white rounded-full aspect-square 2xl:h-20 2xl:w-20 flex items-center justify-center text-2xl 2xl:text-5xl font-normal">
                      {/* {testimonial.name.charAt(0).toUpperCase()} */}
                      <FcGoogle className="text-6xl 2xl:text-6xl 4xl:text-7xl" />
                    </div>
                    <div>
                      {/* <p className="text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                        {getRandomDate().toLocaleDateString("en-GB")}
                      </p> */}
                    </div>
                  </div>
                  <p className="text-yellow-500 flex gap-1 mb-2 3xl:my-5 4xl:my-7 text-xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
                    <PiStarFill />
                    <PiStarFill />
                    <PiStarFill />
                    <RiStarHalfSFill />
                    <RiStarHalfSFill />
                  </p>
                </div>
                <h3 className="font-semibold mb-2 text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-gray-50">
                  {testimonial.name}
                </h3>
                <p className="text-gray-100 h-40 2xl:min-h-48 3xl:min-h-56 4xl:min-h-72 text-sm 2xl:text-lg 3xl:text-xl 4xl:text-xl">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials2;
