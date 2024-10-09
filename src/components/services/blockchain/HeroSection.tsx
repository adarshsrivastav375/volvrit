import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

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
            Partner with our blockchain experts to develop secure, scalable, and
            innovative solutions that drive your business growth and ensure
            success.
          </p>
          <StartAProjectButton />
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
