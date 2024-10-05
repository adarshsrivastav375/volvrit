import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Expertise = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pb-10 pt-5">
      <div className="flex justify-between items-center gap-20">
        <h4 className="text-4xl md:text-5xl font-semibold 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
          Expertise Across Various Domains
        </h4>
        <p className="text-lg md:text-xl font-medium w-1/2 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
          Our custom SaaS development services cater to a wide range of
          industries, including:
        </p>
      </div>
      <div className="bg-gradient-to-br overflow-hidden flex items-center gap-20 my-10 from-[#B86DF6] via-[#A723EA] to-[#F27D56] rounded-3xl text-left text-white">
        <div className="pl-4 w-3/5 md:pl-6 lg:pl-10">
          <h4 className="text-4xl md:text-5xl font-normal 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5">
            Healthcare:
          </h4>
          <p className="text-xl 2xl:text-2xl 3xl:text-3xl mx-auto font-light">
            Secure data management, patient engagement, and streamlined
            communication for healthcare providers.
          </p>
          <Link
            href="/it-services/crm-development"
            className="py-2 mt-5 justify-center 2xl:py-3 px-3 2xl:px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-full bg-black text-white text-base 2xl:text-xl transition-all duration-200 ease-in-out"
          >
            <span className="text-base 2xl:text-lg">Get Details</span>{" "}
            <BsArrowRightCircleFill className="text-xl 2xl:text-2xl -rotate-45" />
          </Link>
        </div>
        <div className="w-1/2 pt-12">
          <Image
            src={"https://volvrit.s3.ap-south-1.amazonaws.com/overview.png"}
            alt="overview"
            width={200}
            height={200}
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="bg-gradient-to-br flex flex-col justify-between p-6 pb-0 overflow-hidden from-[#B86DF6] via-[#A723EA] to-[#F27D56] rounded-3xl text-white">
          <div className="pt-10">
            <h4 className="text-3xl md:text-4xl font-medium 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
              E-Commerce
            </h4>
            <Link
              href="/it-services/crm-development"
              className="py-2 mt-5 justify-center 2xl:py-3 px-3 2xl:px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-full bg-black text-white transition-all duration-200 ease-in-out"
            >
              <span className="text-base 2xl:text-lg">Get Details</span>{" "}
              <BsArrowRightCircleFill className="text-xl 2xl:text-2xl -rotate-45" />
            </Link>
          </div>
          <div className="">
            <Image
              src={"https://volvrit.s3.ap-south-1.amazonaws.com/homepage.png"}
              alt="overview"
              width={200}
              height={200}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="bg-gradient-to-br p-6 overflow-hidden from-[#F27D56] via-[#A723EA] to-[#B86DF6] rounded-3xl text-white">
          <div className="">
            <Image
              src={"https://volvrit.s3.ap-south-1.amazonaws.com/education.png"}
              alt="overview"
              width={200}
              height={200}
              className="w-full object-cover"
            />
          </div>
          <div className="pt-10">
            <h4 className="text-3xl md:text-4xl font-medium 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
              Education
            </h4>
            <Link
              href="/it-services/crm-development"
              className="py-2 mt-5 justify-center 2xl:py-3 px-3 2xl:px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-full bg-black text-white transition-all duration-200 ease-in-out"
            >
              <span className="text-base 2xl:text-lg">Get Details</span>{" "}
              <BsArrowRightCircleFill className="text-xl 2xl:text-2xl -rotate-45" />
            </Link>
          </div>{" "}
        </div>
        <div className="bg-gradient-to-br flex flex-col justify-between p-6 pb-0 overflow-hidden from-[#B86DF6] via-[#A723EA] to-[#F27D56] rounded-3xl text-white">
          <div className="pt-10">
            <h4 className="text-3xl md:text-4xl font-medium 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
              Finance
            </h4>
            <Link
              href="/it-services/crm-development"
              className="py-2 mt-5 justify-center 2xl:py-3 px-3 2xl:px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-full bg-black text-white transition-all duration-200 ease-in-out"
            >
              <span className="text-base 2xl:text-lg">Get Details</span>{" "}
              <BsArrowRightCircleFill className="text-xl 2xl:text-2xl -rotate-45" />
            </Link>
          </div>
          <div className="">
            <Image
              src={"https://volvrit.s3.ap-south-1.amazonaws.com/finance.png"}
              alt="overview"
              width={200}
              height={200}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
