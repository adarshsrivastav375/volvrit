import Image from "next/image";
import React from "react";

export default function ConnectBanner() {
  return (
    <div className="pt-20 relative text-white lg:h-screen md:h-auto lg:min-h-screen lg:pt-28 2xl:pt-56 flex flex-col justify-center items-center">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="Home page Bannr"
        src="/assets/home/banner.jpg"
        className="bg-violet-950 absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-screen z-10 flex items-center justify-center bg-transparent text-white">
        <div className="container mx-auto lg:px-12">
          <div className="flex flex-col md:flex-row items-start justify-between ">
            {/* Left Section */}
            <div className="text-center p-7 md:text-left md:w-3/5">
              <h1 className="text-4xl md:text-4xl font-bold   mb-4">
                Best Mobile App Development Services Company In India
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                We transform your ideas into powerful, user-friendly mobile
                applications. Our expertise is in creating innovative and
                customized apps to meet your specific needs with guaranteed
                smooth performance and an exceptional user experience.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Book a free demo ↗
              </button>
            </div>

            {/* Right Section */}
            <div className="bg-transparent  text-gray-700 p-0 rounded-lg shadow-lg w-full lg:w-2/5 mt-8 md:mt-0 ">
              <div className="bg-white rounded-xl p-7 w-4/5 mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h2>
                <form className="">
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium ">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full text-xs  px-4 py-1 border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-700 focus:outline-none "
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium ">
                      Your Mobile Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="mb-4 border-b-2 border-gray-300 ">
                    <label className="block text-xs font-medium">Message</label>
                    <input
                      type="text"
                      className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-full font-semibold text-white hover:opacity-90 transition"
                  >
                    Submit ↗
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
