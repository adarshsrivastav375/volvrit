import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const HeroSection = () => {
  return (
    <div className="relative text-white bg-[#272324] h-screen md:h-[50vh] lg:h-screen">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="Home page Bannr"
        src="https://volvrit.s3.ap-south-1.amazonaws.com/Rectangle.png"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col md:flex-row z-10 absolute inset-0 top-[15vh] md:top-[10vh] justify-center md:justify-between items-center md:gap-10 lg:gap-20 max-w-9xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold mr-auto mb-5">
            Optimize your financial strategy with a fractional CFO
          </h1>
          <p className="text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl font-light mb-6 2xl:mb-10 3xl:my-14 4xl:my-20">
            Expert Financial Guidance to Customized Your Business Needs
          </p>
          <StartAProjectButton text="Hire Us" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            priority
            unoptimized
            width={100}
            height={100}
            alt="Home page Bannr"
            src="https://volvrit.s3.ap-south-1.amazonaws.com/cfo1.png"
            className="w-full lg:w-[90%] md:mb-0 h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
