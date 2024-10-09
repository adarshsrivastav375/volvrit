"use client";

import { FcGoogle } from "react-icons/fc";
import { PiStarFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function getRandomDate() {
  const start = new Date(2024, 0, 1); // Start from Jan 1, 2024
  const end = new Date(2024, 11, 31); // End at Dec 31, 2024
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const testimonials = [
  {
    name: "Amit Taneja",
    title: "Unifi Cars",
    text: "Working with Volvrit was a turning point for us! Their UI/UX design significantly improved the user-friendliness of our app, increasing engagement. Highly recommend their services!",
  },
  {
    name: "AMan",
    title: "Unfazed",
    text: "Volvrit transformed our online therapy platform! The mobile app they developed has an intuitive interface that our clients like. Their professionalism and support went very smoothly. Thank you, Volvrit!",
  },
  {
    name: "Manish Ashokbhai Chauhan",
    title: "Intense Focus",
    text: "Thanks to Volvrit, our CRM system is now efficient and user-friendly! Their customized solutions along with the focus on UI/UX really enhanced our workflow. We are excited to continue our partnership!",
  },
  {
    name: "Shubham Jain",
    title: "Books Wagon",
    text: "Volvrit revamped our website beautifully! Their UI/UX design is easy to navigate, and the SEO strategies they implemented are already boosting our traffic. Highly recommend them for web development!",
  },
  {
    name: "Palak Gupta",
    title: "Tour Travel World",
    text: "Partner with Volvrit: this is a really great idea! A fantastic web portal with an excellent UI/UX. Our clients are just thrilled with the new design. I am highly satisfied with their work!",
  },
  {
    name: "Shashikant S. Bhoyar",
    title: "Safe Way RSSI",
    text: "Volvrit has been amazing for our NGO! Their web development and CMS solutions have really improved our online presence. Professional and dedicated, we're very happy with the results!",
  },
  {
    name: "Sakshi Chandra",
    title: "Keintchi",
    text: "It's been fantastic working with Volvrit for our web development needs. Their creativity in UI/UX design brought a lot of improvement to our platform. We like the results, and we are waiting for the next tasks!",
  },
  {
    name: "Dhruvin Bhanushali",
    title: "Grow Fortuna",
    text: "They changed our CRM system! Volvrit's priority on UI/UX and web development allowed us to function more efficiently. The support for the entire process has been outstanding. Highly recommend!",
  },
];
const Testimonials = () => {
  return (
    <div className="">
      <div className="max-w-9xl mx-auto pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-28 2xl:px-40">
        <div className="text-center mb-8 3xl:my-16 4xl:my-20">
          <p className="uppercase tracking-wider text-xs md:text-sm 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            — Our Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-semibold">
            What They Say About Us
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
                className="bg-white ml-2 md:ml-0 h-full shadow-corner mt-2 p-5 rounded-xl 3xl:rounded-3xl flex flex-col"
              >
                <div className="flex justify-between items-start w-full mb-2">
                  <div className="flex gap-2 2xl:gap-5 items-center text-left">
                    <div className="bg-primary text-white rounded-full h-10 w-10 aspect-square 2xl:h-20 2xl:w-20 flex items-center justify-center text-2xl 2xl:text-5xl font-normal">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                        {testimonial.name}
                      </h3>
                      {/* <p className="text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                        {getRandomDate().toLocaleDateString("en-GB")}
                      </p> */}
                    </div>
                  </div>
                  <FcGoogle className="text-4xl 2xl:text-6xl 4xl:text-7xl" />
                </div>
                <p className="text-yellow-500 flex gap-1 mb-2 3xl:my-5 4xl:my-7 text-xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                  <PiStarFill />
                </p>
                <p className="text-gray-700 h-40 2xl:min-h-48 3xl:min-h-56 4xl:min-h-72 text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
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
