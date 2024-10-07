import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-10 md:pt-20 lg:pt-[25vh]">
        <div className="text-center">
          <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
            Best Website Development <br /> Services Company in India
          </h4>
          <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
            A great, easy-to-use website will make your business in today&apos;s
            digital world.
          </p>
          <Link
            href="/contact-us"
            className="py-3 mx-auto justify-center 2xl:py-4 px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/macscreen.png"
              className="w-fit h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
