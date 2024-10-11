import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const Optimize = () => {
  const solutions = [
    {
      id: 1,
      description:
        "Leverage data science to uncover insights and make informed decisions",
      title: "Accurate Data Science",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/acuratelogo.png",
    },
    {
      id: 2,
      description:
        "Automate reporting processes, saving time and ensuring real-time accuracy",
      title: "Report Automation",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/reportlogo.png",
    },
    {
      id: 3,
      description:
        "Smoothly integrate systems for streamlined workflows and enhanced operational efficiency",
      title: "Fully Integrations",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/integrationlogo.png",
    },
    {
      id: 4,
      description:
        "Utilize advanced analytics to predict trends and optimize business strategies",
      title: "Advanced Analytics",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/analyticslogo.png",
    },
  ];
  return (
    <div className="max-w-9xl text-center mx-auto px-4 md:px-6 lg:px-20 pt-10">
      <h4 className="text-3xl mb-5 md:mb-0 md:text-5xl font-semibold 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
        We optimize marketing for <br /> business continuity
      </h4>
      <div className="flex justify-start md:justify-center md:items-center gap-5 md:px-6">
        <div className="w-1/2 lg:w-1/4 flex flex-col gap-5">
          {solutions.slice(0, 2).map((item: any) => {
            return (
              <div key={item?.id} className="p-4 md:p-5 bg-white text-black">
                <Image
                  width={48}
                  height={48}
                  src={item?.logo}
                  alt={item?.title}
                  className="w-10 h-fit object-contain"
                />
                <p className="text-lg text-[#0E4DA6] 2xl:text-xl font-bold pt-2 text-left">
                  {item?.title}
                </p>
                <p className="text-sm 2xl:text-lg font-light pt-2 text-left">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block lg:w-1/2 rounded-3xl">
          <Image
            width={400}
            height={100}
            unoptimized
            priority
            alt="CRM solutions"
            className="w-full h-full object-contain"
            src={"https://volvrit.s3.ap-south-1.amazonaws.com/Illustration.png"}
          />
        </div>
        <div className="w-1/2 lg:w-1/4 flex flex-col gap-5">
          {solutions.slice(2, 4).map((item: any) => {
            return (
              <div key={item?.id} className="p-4 md:p-5 bg-white text-black">
                <Image
                  width={48}
                  height={48}
                  src={item?.logo}
                  alt={item?.title}
                  className="w-10 h-fit object-contain"
                />
                <p className="text-lg text-[#0E4DA6] 2xl:text-xl font-bold pt-2 text-left">
                  {item?.title}
                </p>
                <p className="text-sm 2xl:text-lg font-light pt-2 text-left">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden">
        <Image
          width={400}
          height={100}
          unoptimized
          priority
          alt="CRM solutions"
          className="w-full h-full object-contain"
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/Illustration.png"}
        />
      </div>
      <StartAProjectButton text="Contact Us" />
    </div>
  );
};

export default Optimize;
