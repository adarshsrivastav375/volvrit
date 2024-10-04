import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="relative text-white h-screen md:h-auto lg:h-screen">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="Home page Bannr"
        src="/assets/home/banner.jpg"
        className="w-full h-full object-cover"
      />
      <div className="flex z-10 absolute inset-0 top-[10vh] justify-between items-center gap-20 max-w-9xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold mr-auto mb-5">
            Are you looking for
            <br /> blockchain Experts?
          </h1>
          <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl font-light mb-6 2xl:mb-10 3xl:my-14 4xl:my-20">
            At VOLVRIT we help B2B-B2C & Startup&apos;s to create custom
            development solutions, Crafted by our experienced IT TEAM.
          </p>
          <Link
            href="/it-services/crm-development"
            className="py-3 justify-center 2xl:py-4 px-5 w-fit mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl 3xl:text-2xl">
              Start a Project
            </span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            priority
            unoptimized
            width={100}
            height={100}
            alt="Home page Bannr"
            src="https://volvrit.s3.ap-south-1.amazonaws.com/Union.png"
            className="w-2/3 h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
