import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://volvrit.s3.ap-south-1.amazonaws.com/bannerai.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-10 md:pt-20 lg:pt-[35vh]">
        <div className="text-center">
          <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
            AI Development Services Company
          </h4>
          <p className="text-sm font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
            Artificial Intelligence is one of the fastest emerging markets that
            has been chosen as the flag bearer for technological innovation in
            the prosperity of any business. Volvrit is an India&apos;s leading
            company which works with highly specialized focus on advanced AI
            Development Services that enables organizations to create
            intelligent performance while maximally utilizing AI capabilities as
            drivers for more excellent decision-making and further growth. Our
            team of professionals will guide you through your AI transformation
            journey whether you are a startup or a well-established business.
          </p>
          <Link
            href="/it-services/crm-development"
            className="py-3 mx-auto justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
