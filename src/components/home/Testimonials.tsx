"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "The IT services provided by Volvnit IT Services have been very impactful in ensuring that my business continues to enjoy efficiency in IT services.",
    name: "Priya Sharma",
    title: "Digital Innovation Agency",
  },
  {
    text: "It can be challenging for a small business owner to navigate tax-associated issues. Their service delivery and high level of accuracy make them the perfect companion in business tax services in Canada.",
    name: "Rajesh Kumar",
    title: "Business Manager",
  },
  {
    text: "For a new business, we require good IT solutions and consulting services. Volvnit IT Services created a wonderful IT solution plan within our budget with an affordable and flexible cost.",
    name: "Anjali Patel",
    title: "Co-Founder Figo",
  },
  {
    text: "The IT services provided by Volvnit IT Services have been very impactful in ensuring that my business continues to enjoy efficiency in IT services.",
    name: "Riya Sharma",
    title: "Digital Innovation Agency",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto pt-8 md:pt-16 pb-4 md:pb-8 px-4 md:px-8 lg:px-36">
        <div className="text-center text-white mb-8">
          <p className="uppercase tracking-wider text-xs md:text-sm">— Our Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-semibold">What They Say About Us</h2>
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
          className="w-full mx-auto rounded-xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl text-center text-gray-800 shadow-lg">
                <p className="italic mb-6 text-sm min-h-40">
                  "{testimonial.text}"
                </p>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
