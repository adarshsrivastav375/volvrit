import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const WhatWeOffer = () => {
  const whatWeOffer = [
    "User experience",
    "ideas",
    "agency website",
    "mobile",
    "user interface",
    "webframing",
    "prototyping",
    "creativity",
    "web design",
    "visual design",
    " startup",
    "brand design",
    "web app",
  ];
  const services = [
    {
      title: "UX Audit",
      description:
        "As you blaze new trails, we stand firm to obsess over detail and quality. With a quick design audit, identify usability issues and find gaps in your experience to deliver a truly world-class product.",
    },
    {
      title: "User Experience Design",
      description:
        "Great user experiences are vital to building trust and core to our approach in pursuing simplicity. Poor UX can be an expensive mistake and avoiding that is our reason to exist.",
    },
    {
      title: "User Interface Design",
      description:
        "Design is at the heart of all that we do, drawing on our passion for creativity geared toward success. We’re not just designers, we’re creators. We’re technology focused and a creative house.",
    },
    {
      title: "Brand Identity Design",
      description:
        "Where do you stand in the eyes and minds of your user? We translate your brand purpose into user-centric experiences that lets the world see you for what you really mean.",
    },
    {
      title: "Front-end Development",
      description:
        "We believe in giving dev justice to the beautiful designs we create. Our front-end development team works collaboratively to produce exceptional code adapting best practices in web standards.",
    },
    {
      title: "Back-end Development",
      description:
        "And not just front-end, we architect, build, and deliver robust digital products entirely in-house with an agile, iterative method, backed by our reputation for quality, stability, and support.",
    },
  ];

  return (
    <>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 py-20">
        <div className="text-center">
          <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
            What we offer
          </h4>
          <div className="flex flex-wrap lg:px-20">
            {whatWeOffer.map((item: any, index: any) => {
              return (
                <span
                  key={index}
                  className={`${
                    item === "User experience" &&
                    "bg-blue-500 -rotate-12 text-white"
                  } ${
                    item === "creativity" &&
                    "bg-blue-700 rotate-12 py-4 text-white"
                  }  ${
                    item === "visual design" &&
                    "bg-slate-100 rotate-12 py-3 text-gray-400"
                  } w-1/4 py-3 rounded-xl border border-slate-200 flex justify-center items-center font-extralight uppercase`}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <Link
            href={"/contact-us"}
            className="py-2 2xl:py-4 w-fit mx-auto px-5 flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 hover:shadow-2xl text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            aria-label="Contact Us"
          >
            <span>Start a project</span> <BsArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <Image
          priority
          unoptimized
          width={100}
          height={100}
          alt="Mobile Banner"
          src="https://volvrit.s3.ap-south-1.amazonaws.com/uiuxScreen.png"
          className="w-4/5 mx-auto relative z-20 h-full object-cover"
        />
      </div>
      <div className="relative -mt-20 text-white">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-40 pb-20">
          <div className="text-center">
            <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              What we offer
            </h4>
            <p className="text-lg lg:text-xl 2xl:text-2xl font-extralight px-4 md:px-0 md:w-1/2 mx-auto mb-6">
              We exist at the intersection of art and tech, where possibilities
              are endless.
            </p>
            {/* Rotate the service container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {services.map((service, index) => (
                <div key={index} className="text-white p-4 text-left">
                  <h2 className="text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-base 2xl:text-lg 3xl:text-xl font-extralight opacity-90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;