import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
      ></div>
      <div className="relative z-10 grid grid-cols-3 justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-10 md:pt-20 lg:pt-[35vh]">
        <div className="text-left col-span-1">
          <h4 className="text-5xl !leading-tight tracking-tighter w-full mx-auto md:text-7xl uppercase 2xl:text-8xl mb-5 font-semibold">
            UI/UX
            <br />
            designing
          </h4>
          <p className="text-lg font-extralight px-4 md:px-0 mb-8">
            Elevate Your Digital Products with Impressive UI/UX Design by
            Volvrit
          </p>
        </div>
        <div className="w-full col-span-2 space-y-10">
          <div className="flex gap-20 items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/uiuxbanner.png"
              className="w-2/3 h-full object-cover rounded-full"
            />
            <span className="space-y-4 flex flex-col">
              <span className="relative right-10">
                <FaLocationArrow
                  className="-rotate-90 text-blue-500"
                  size={25}
                />
              </span>
              <span className="bg-gray-400 rounded-full rounded-tl-none text-[10px] px-8 py-2">
                Innovation
              </span>
            </span>
          </div>
          <div className="bg-transparent border mx-auto relative -rotate-6 border-blue-500 p-5 text-8xl w-4/5 pb-10 uppercase font-bold">
            <span className="text-blue-500">Design</span>
            <span className="w-6 h-6 rounded-full absolute -top-6 -left-6 rounded-tl-none rotate-180 bg-blue-700"></span>
            <span className="w-6 h-6 rounded-full absolute -top-6 -right-6 rounded-tr-none rotate-180 bg-blue-700"></span>
            <span className="w-6 h-6 rounded-full absolute -bottom-6 -left-6 rounded-bl-none rotate-180 bg-blue-700"></span>
            <span className="w-6 h-6 rounded-full absolute -bottom-6 -right-6 rounded-br-none rotate-180 bg-blue-700"></span>
          </div>
        </div>
        <div className="col-span-3 flex py-10 gap-5 justify-center items-center">
          <div className="h-full w-[44%]">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/uiuxbanner1.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-full">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/uiuxbanner2.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/4 flex flex-col gap-3">
            <span className="rotate-6">
              <span className="text-extralight text-xs text-gray-700">
                Success Project
              </span>
              <span className="text-blue-700 text-3xl font-medium pl-4">
                250+
              </span>
            </span>
            <span className="-rotate-6">
              <span className="text-blue-700 text-3xl font-medium pr-4">
                160+
              </span>
              <span className="text-extralight text-xs text-gray-700">
                Recent Clients
              </span>
            </span>
            <span className="rotate-6">
              <span className="text-extralight text-xs text-gray-700">
                Happy Clients
              </span>
              <span className="text-blue-700 text-3xl font-medium pl-4">
                99%
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
