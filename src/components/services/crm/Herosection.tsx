import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-[15vh] md:pt-[25vh]">
        <div className="text-center">
          <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
            CRM Software Development <br /> Services Company India
          </h4>
          <p className="text-base font-extralight px-4 md:px-0 md:w-1/2 mx-auto mb-6">
            Empowering Your Business with Scalable and Innovative CRM
            Technologies
          </p>
          <StartAProjectButton marginBottom="mb-10" />
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/crmboard.png"
              className="w-full lg:w-4/5 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
