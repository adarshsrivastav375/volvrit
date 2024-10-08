import Image from "next/image";

const Solutions = () => {
  const aiUseCases = [
    {
      id: 1,
      title: "AI for Predictive Diagnostics",
      description:
        "AI for predictive diagnostics, patient data analysis, and personalized treatment recommendations.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI1.png",
    },
    {
      id: 2,
      title: "AI for Fraud Detection",
      description:
        "AI-powered fraud detection, risk management, and algorithmic trading solutions.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI2.png",
    },
    {
      id: 3,
      title: "AI for Marketing and Supply Chain",
      description:
        "AI for personalized marketing, demand forecasting, and supply chain optimization.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI3.png",
    },
    {
      id: 4,
      title: "AI for Automation",
      description:
        "AI-driven automation, quality control, and predictive maintenance.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI4.png",
    },
    {
      id: 5,
      title: "AI for Customer Personalization",
      description:
        "AI for customer personalization, recommendation engines, and customer service automation.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI5.png",
    },
  ];
  return (
    <>
      <div className="text-center relative pt-20">
        <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
          Industries We Target for AI Solutions
        </h4>
        <Image
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/bannerFrame1A2.png"}
          alt={"Frame 1"}
          width={90}
          height={90}
          unoptimized
          priority
          className="w-3/5 object-contain z-0 absolute -bottom-20 -right-20 mb-4 mx-auto"
        />
        <div className="justify-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 gap-10 rounded-xl m-10">
          {aiUseCases.map((service) => (
            <div
              key={service.id}
              className={`bg-transparent text-left bg-[#0A3363] p-4 rounded-xl`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={90}
                height={90}
                unoptimized
                priority
                className="w-full object-contain mb-4"
              />
              <p className="text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-thin">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;
