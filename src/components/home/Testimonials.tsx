"use client";

import { FcGoogle } from "react-icons/fc";
import { PiStarFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    date: "15/04/2024",
    text: "The IT services provided by Volvnit IT Services have been very impactful in ensuring that my business continues to enjoy efficiency in IT services.",
    name: "Priya Sharma",
    title: "Digital Innovation Agency",
  },
  {
    date: "15/04/2024",
    text: "It can be challenging for a small business owner to navigate legal-associated issues. Their service delivery and high level of accuracy make them the perfect companion in business legal services in Canada.",
    name: "Rajesh Kumar",
    title: "Business Manager",
  },
  {
    date: "15/04/2024",
    text: "For a new business, we require good IT solutions and consulting services. Volvnit IT Services created a wonderful IT solution plan within our budget with an affordable and flexible cost.",
    name: "Anjali Patel",
    title: "Co-Founder Figo",
  },
  {
    date: "15/04/2024",
    text: "The IT services provided by Volvnit IT Services have been very impactful in ensuring that my business continues to enjoy efficiency in IT services.",
    name: "Riya Sharma",
    title: "Digital Innovation Agency",
  },
];

const Testimonials = () => {
  return (
    <div className="">
      <div className="max-w-8xl mx-auto pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-28 2xl:px-40">
        <div className="text-center mb-8">
          <p className="uppercase tracking-wider text-xs md:text-sm 2xl:text-xl">
            — Our Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold">
            What They Say About Us
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1.4}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
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
            <SwiperSlide key={index} className="h-full">
              <div
                key={index}
                className="bg-white h-full shadow-corner mt-2 p-5 rounded-lg flex flex-col"
              >
                <div className="flex justify-between items-start w-full mb-2">
                  <div className="flex gap-2 items-center text-left">
                    <div className="bg-primary text-white rounded-full h-10 w-10 2xl:h-20 2xl:w-20 flex items-center justify-center text-2xl 2xl:text-5xl font-normal">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg 2xl:text-3xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-base 2xl:text-xl">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <FcGoogle className="text-4xl 2xl:text-6xl" />
                </div>
                <p className="text-yellow-500 flex gap-1 mb-2 text-xl 2xl:text-4xl">
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                </p>
                <p className="text-gray-700 min-h-32 2xl:min-h-40 mb-4 text-sm 2xl:text-xl">
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

export default Testimonials;
