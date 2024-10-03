import Image from "next/image";
import Gallery from "./Gallery";

const AboutUs = () => {
  return (
    <div className="max-w-9xl mx-auto pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-20 2xl:px-40">
      <div className="bg-primary rounded-2xl lg:rounded-3xl p-5 md:p-7 lg:p-14 text-white relative flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
        <div className="w-full text-center lg:text-left lg:w-[65%]">
          <p className="text-base 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-light mb-2">
            — About Us
          </p>
          <h2 className="text-2xl md:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-medium mb-4 leading-tight">
            Leading the Way in IT Services
          </h2>
          <p className="opacity-80 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-light mb-6">
            Welcome to our website where innovation has been pioneered in the IT
            services world. Founded in [2023], we have since built a strong
            foundation on technology and excellence grounds, consistently
            innovating through real-time solutions that would empower businesses
            in the complex digital landscape. Our success stories span over 1
            year in which we completed for multinational corporations and even
            startups. Our commitment to quality and customer satisfaction has
            made us one of the most trusted partners, recognized for our ability
            to adapt and meet the ever-changing needs of clients.
          </p>
          <button className="bg-white text-primary 2xl:text-2xl hover:bg-primary hover:text-white border transition-all duration-200 ease-in-out border-primary hover:border-white font-semibold px-10 py-2 rounded-full">
            Know More
          </button>
        </div>
        <div className="w-full lg:w-[35%] mt-2 lg:ml-8 relative">
          <Gallery />
          {/* <Image
            src="/assets/home/aboutUs.png"
            alt="About Us Image"
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full rounded-xl object-contain"
          /> */}
          {/* Arrow Decorations */}
          {/* <div className="absolute top-12 left-0 w-20 h-12 bg-primary rounded-r-full z-10"></div>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 -right-10 w-20 h-12 bg-primary rounded-l-full z-10"></div>
          <div className="absolute bottom-12 left-0 w-20 h-12 bg-primary rounded-r-full z-10"></div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
