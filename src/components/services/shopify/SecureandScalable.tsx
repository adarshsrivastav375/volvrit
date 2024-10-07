import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

const SecureandScalable = () => {
  const process = [
    {
      id: 1,
      title: "Assessments of Requirements",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/assessment.png",
      description:
        "Our experts assess project requirements, objectives, and expectations to establish a roadmap for ecommerce store development.",
    },
    {
      id: 2,
      title: "Agreement of Service Models",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/notes.png",
      description:
        "We recommend the best suited engagement model as per the project requirements along with the handpicked resources.",
    },
    {
      id: 3,
      title: "Design and Development",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/partnership.png",
      description:
        "We deliver high quality, incremental, and fully functional shopify-powered ecommerce solution that meet clients acceptance criteria and goals.",
    },
    {
      id: 4,
      title: "Support",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/candle.png",
      description:
        "Post deployment, our shopify developers regularly monitor the performance of ecommerce solutions to ensure hassle-free operations.",
    },
  ];
  const process1 = [
    {
      id: 1,
      title: "Custom Storefront Development",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/assessment.png",
      description:
        "From inception to launch, Volvrit Technologies can provide a route to success for your ecommerce business on Shopify.",
    },
    {
      id: 2,
      title: "Shopify App Development",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/notes.png",
      description:
        "Unleash the true potential of your website by customizing its theme to suit the needs of your customers.",
    },
    {
      id: 3,
      title: "Third-Party Integrations",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/partnership.png",
      description:
        "Installing applications can happen with the click of a button, but monitoring compatibility between different apps.",
    },
  ];
  return (
    <div className="bg-black mb-10 text-white">
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20">
        <div className="flex fex-col md:flex-row justify-center pb-16 items-center gap-20 lg:px-20">
          <div className="w-full md:w-1/2">
            <h4 className="flex flex-col gap-2 text-3xl lg:text-4xl font-light">
              <span className="opacity-40">
                Certified Shopify Experts <br />
                End-to-End Solutions
              </span>
              <span className="">Scalable & Secure</span>
            </h4>
            <Link
              href="/contact-us"
              className="py-3 mr-auto my-5 justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            >
              <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
              <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-full bg-[#161C40] aspect-square rounded-full border-2 border-dotted border-slate-50/30">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#161C40] aspect-square rounded-full border-2 border-dotted border-slate-50/30"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#161C40] aspect-square rounded-full border-2 border-dotted border-slate-50/30"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-gradient-to-b from-[#145FB9] z-10 to-[#DDE9F5]  aspect-square rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[12.5%] h-[12.5%] bg-gradient-to-b z-20 from-[#145FB9] to-[#DDE9F5]  aspect-square rounded-full"></div>
              <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/5 rotate-45 bg-[#DDC8B0] z-0 aspect-square rounded-2xl"></div>
              <span className="absolute z-40 top-1/4 -left-10 space-y-2 flex flex-col">
                <span className="relative left-5 self-end">
                  <FaLocationArrow className="text-blue-600" size={25} />
                </span>
                <span className="bg-blue-600 rounded-full w-fit text-[10px] px-8 py-2">
                  Design
                </span>
              </span>
              <span className="absolute z-40 bottom-1/4 -left-10 space-y-2 flex flex-col">
                <span className="relative left-5 self-end">
                  <FaLocationArrow className="text-blue-600" size={25} />
                </span>
                <span className="bg-blue-600 rounded-full w-fit text-[10px] px-8 py-2">
                  Develop
                </span>
              </span>
              <span className="absolute z-40 top-0 right-0 space-y-2 flex flex-col">
                <span className="relative right-5">
                  <FaLocationArrow
                    className="-rotate-90 text-blue-600"
                    size={25}
                  />
                </span>
                <span className="bg-blue-600 rounded-full w-fit text-[10px] px-8 py-2">
                  Integrate
                </span>
              </span>
              <span className="absolute z-40 bottom-1/2 -right-10 space-y-2 flex flex-col">
                <span className="relative right-5">
                  <FaLocationArrow
                    className="-rotate-90 text-orange-500"
                    size={25}
                  />
                </span>
                <span className="bg-orange-500 rounded-full w-fit text-[10px] px-8 py-2">
                  Deploy
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 lg:px-16">
          {process1.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="p-5 rounded-2xl first:bg-[#034EA3] hover:bg-[#034EA3] cursor-pointer transition-all duration-500 ease-in-out"
              >
                <Image
                  width={32}
                  height={32}
                  alt={item.title}
                  src={item.imageUrl}
                  className="w-fit object-contain"
                />
                <h5 className="text-base mt-1 font-light mb-3 text-nowrap">
                  {item.title}
                </h5>
                <p className="text-base font-extralight">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-br p-16 pb-0 m-10 rounded-t-3xl from-[#E5D6F1] via-[#6D58BB] to-[#2B1F8A]">
          <Image
            priority
            unoptimized
            width={1200}
            height={1200}
            alt="Mobile Banner"
            src="https://volvrit.s3.ap-south-1.amazonaws.com/shopifyscreen.png"
            className="w-full relative mx-auto h-full object-contain"
          />
        </div>
        <h4 className="text-center text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-semibold">
          Our Process
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
          {process.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="py-5 first:bg-gradient-to-b first:from-black first:to-[#171637] hover:bg-gradient-to-b hover:from-black hover:to-[#171637] cursor-pointer transition-all duration-500 ease-in-out"
              >
                <Image
                  width={32}
                  height={32}
                  alt={item.title}
                  src={item.imageUrl}
                  className="w-fit px-5 object-contain"
                />
                <h5 className="text-base mt-1 font-light mb-3 text-nowrap border-l border-l-slate-200 pl-5">
                  {item.title}
                </h5>
                <p className="text-sm opacity-70 px-5 font-extralight">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecureandScalable;
