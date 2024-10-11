import Image from "next/image";

const Development = () => {
  const aiDevelopmentProcess = [
    {
      id: 1,
      title: "Consultation and Requirement Gathering",
      description:
        "We start by understanding your business goals and challenges.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo6.png",
    },
    {
      id: 2,
      title: "AI Strategy Development",
      description:
        "We design a custom AI strategy aligned with your objectives.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo6.png",
    },
    {
      id: 3,
      title: "Solution Design and Development",
      description:
        "Our expert developers create scalable AI solutions tailored to your business needs.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo6.png",
    },
    {
      id: 4,
      title: "Integration and Testing",
      description:
        "We integrate AI solutions into your existing systems and rigorously test them for performance and accuracy.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo6.png",
    },
    {
      id: 5,
      title: "Deployment and Support",
      description:
        "Once deployed, we provide continuous support to ensure smooth operation and optimal performance.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo6.png",
    },
  ];
  return (
    <>
      <div className="text-center pt-10 md:pt-20 relative">
        <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
          Our AI Development Process
        </h4>
        <Image
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/bannerFrame1AI.png"}
          alt={"Frame 1"}
          width={90}
          height={90}
          unoptimized
          priority
          className="w-full hidden lg:block md:w-1/3 object-contain z-0 absolute top-0 -left-20 mb-4 mx-auto"
        />
        <Image
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/aiframe.png"}
          alt={"Frame 1"}
          width={90}
          height={90}
          unoptimized
          priority
          className="w-1/2 md:w-[30%] object-contain z-0 absolute bottom-0 right-0 md:-bottom-20 md:right-10 mb-4 mx-auto"
        />
        <div className="justify-center my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 relative z-10 gap-3 md:gap-5 lg:gap-10 rounded-xl lg:m-10">
          {aiDevelopmentProcess.map((service, index) => (
            <div
              key={service.id}
              className={`bg-transparent text-left p-2 md:p-4 rounded-lg`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={90}
                height={90}
                className="w-10 object-contain mb-4"
              />
              <h3 className="text-xl lg:text:2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-normal mb-2">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-slate-200/50 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-thin">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Development;
