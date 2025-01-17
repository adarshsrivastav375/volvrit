// import Image from "next/image";
// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { PiStarFill } from "react-icons/pi";
// import Swiper from "swiper";
// import { Autoplay, Pagination } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";

// export default function TesomoniallConnect() {
//   return (
//     // <div className="bg-white py-12">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <h2 className="text-3xl font-extrabold text-gray-900 text-center">
//     //       Testimonials
//     //     </h2>
//     //     <p className="mt-4 text-lg text-gray-500 text-center">
//     //       We always deploy and use the world’s most powerful technology
//     //       platforms and software for developing and launching Android apps. This
//     //       is the reason that our Android app development services are always one
//     //       step ahead of our competitors, ensuring stunning success for our
//     //       clients.
//     //     </p>
//     //     <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//     //       <div className="bg-white shadow-lg rounded-lg p-6">
//     //         <div className="flex justify-center">
//     //           <img
//     //             src="google-logo.png"
//     //             alt="Google Logo"
//     //             className="h-12 w-12"
//     //           />
//     //         </div>
//     //         <div className="mt-4 text-center">
//     //           <h3 className="text-xl font-semibold text-gray-900">
//     //             Ravi Sharma
//     //           </h3>
//     //           <p className="text-gray-500">CEO</p>
//     //           <p className="mt-4 text-gray-600">
//     //             “The technical know-how of the team at Volvrit is nothing short
//     //             of fantastic. They delivered a feature-rich, easy-to-use Android
//     //             application that helped turn the fortunes for our company
//     //             around.”
//     //           </p>
//     //         </div>
//     //       </div>
//     //       <div className="bg-white relative rounded-3xl border border-t-0 border-b-0 border-gray-500  perspective-container p-6 rotate-[-5deg]" style={{perspective: "1000px"}}>
//     //        <span className="bg-gray-50 absolute top-[-1rem] inline-block  h-52 w-52 rotate-12"></span>
//     //         <div className="flex justify-center absolute top-[-2rem] left-[40%] bg-white rounded-full rotate-[5deg]">
//     //           <Image
//     //             src="/assets/banners/google.png"
//     //             width={70}
//     //             height={70}
//     //             alt="Google Logo"
//     //             className=""
//     //           />
//     //         </div>
//     //         <div className="mt-4 text-center">
//     //           <h3 className="text-xl font-semibold text-gray-900">
//     //             Anjali Gupta
//     //           </h3>
//     //           <p className="text-gray-500">Product Manager</p>
//     //           <p className="mt-4 text-gray-600">
//     //             “Volvrit brought our app idea to reality through creativity and
//     //             cutting-edge technology. The team really did outperform our
//     //             expectations with a bug-free, scalable solution delivered right
//     //             on time.”
//     //           </p>
//     //         </div>
//     //         <span className="absolute bottom-0 bg-gray-50 h-10 w-50 block "></span>
//     //       </div>
//     //       <div className="bg-white shadow-lg rounded-lg p-6">
//     //         <div className="flex justify-center">
//     //           <img
//     //             src="google-logo.png"
//     //             alt="Google Logo"
//     //             className="h-12 w-12"
//     //           />
//     //         </div>
//     //         <div className="mt-4 text-center">
//     //           <h3 className="text-xl font-semibold text-gray-900">
//     //             Vikram Patel
//     //           </h3>
//     //           <p className="text-gray-500">Co-founder</p>
//     //           <p className="mt-4 text-gray-600">
//     //             “The team of Volvrit hears its clients and makes solutions
//     //             according to their needs. The people there go out of the way to
//     //             make sure that the final output meets the expectations of the
//     //             client.”
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="">
//       <div className="max-w-9xl mx-auto pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-28 2xl:px-40">
//         <div className="text-center mb-8 3xl:my-16 4xl:my-20">
//           <p className="uppercase tracking-wider text-xs md:text-sm 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
//             — Our Testimonials
//           </p>
//           <h2 className="text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-semibold">
//             What They Say About Us
//           </h2>
//         </div>
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={5}
//           slidesPerView={1}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           className="w-full mx-auto rounded-xl h-full"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index} className="h-full px-2">
//               <div
//                 key={index}
//                 className="bg-white ml-2 md:ml-0 h-full shadow-corner mt-2 p-5 rounded-xl 3xl:rounded-3xl flex flex-col"
//               >
//                 <div className="flex justify-between items-start w-full mb-2">
//                   <div className="flex gap-2 2xl:gap-5 items-center text-left">
//                     <div className="bg-primary text-white rounded-full h-10 w-10 aspect-square 2xl:h-20 2xl:w-20 flex items-center justify-center text-2xl 2xl:text-5xl font-normal">
//                       {testimonial.name.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
//                         {testimonial.name}
//                       </h3>
//                       {/* <p className="text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
//                         {getRandomDate().toLocaleDateString("en-GB")}
//                       </p> */}
//                     </div>
//                   </div>
//                   <FcGoogle className="text-4xl 2xl:text-6xl 4xl:text-7xl" />
//                 </div>
//                 <p className="text-yellow-500 flex gap-1 mb-2 3xl:my-5 4xl:my-7 text-xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
//                   <PiStarFill />
//                   <PiStarFill />
//                   <PiStarFill />
//                   <PiStarFill />
//                   <PiStarFill />
//                 </p>
//                 <p className="text-gray-700 h-40 2xl:min-h-48 3xl:min-h-56 4xl:min-h-72 text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
//                   {testimonial.text}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

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
    name: "Anjali Gupta",
    title: "Product Manager",
    text:
      "“Volvrit brought our app idea to reality through creativity and cutting-edge technology. The team really did outperform our expectations with a bug-free, scalable solution delivered right on time.”",
  },
  {
    name: "Ravi Sharma",
    title: "CEO",
    text: "“The technical know-how of the team at Volvrit is nothing short of fantastic. They delivered a feature-rich, easy-to-use Android application that helped turn the fortunes for our company around.”",
  },
  {
    name: "Vikram Patel",
    title: "Co-founder",
    text: "“The team of Volvrit hears its clients and makes solutions according to their needs. The people there go out of the way to make sure that the final output meets the expectations of the client.”",
  },
];
const TesomoniallConnect = () => {
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

export default TesomoniallConnect;
