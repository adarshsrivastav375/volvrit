import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

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
      id: 1,
      title: "UI Design Service",
      description:
        "We create appealing interfaces that are easy to navigate and enjoyable to use.",
    },
    {
      id: 2,
      title: "UX Development Service",
      description:
        "Our UX development focuses on providing users with smooth and intuitive experiences, ensuring they return to your product.",
    },
    {
      id: 3,
      title: "Wireframing & Prototyping",
      description:
        "Design is at the heart of all that we do, drawing on our passion for creativity geared toward success. We’re not just designers, we’re creators. We’re technology-focused and a creative house.",
    },
    {
      id: 4,
      title: "Responsive Design",
      description:
        "We ensure your website or app works perfectly on all devices, whether it's a smartphone, tablet, or desktop.",
    },
    {
      id: 5,
      title: "Front-end Development",
      description:
        "Our front-end development team works collaboratively to produce exceptional code adapting best practices in web standards.",
    },
    {
      id: 6,
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
          <StartAProjectButton />
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
