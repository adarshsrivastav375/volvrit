import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

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
            Best Mobile App Development <br />
            Services Company In India
          </h4>
          <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
            We provide the complete scale of services relating to the
            development of mobile applications at Volvrit, which covers all
            aspects of a life cycle involving an application. So, it is
            maintained that any developed application is secure, strong,
            engaging, and user-friendly, be it from initial planning and
            designing to serious testing and successful deployment. Our service
            transitions towards Android and iOS.
          </p>
          <StartAProjectButton />
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/mobileBanner.png"
              className="w-2/3 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
