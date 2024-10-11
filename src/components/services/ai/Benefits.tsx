import Image from "next/image";

const Benefits = () => {
  const aiBenefits = [
    {
      id: 1,
      title: "AI Consulting",
      description:
        "Consultation from our company to utilize AI along with tailor-made solutions delivery on need basis for businesses.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo1.png",
    },
    {
      id: 2,
      title: "Cost Savings",
      description:
        "AI ensures to minimize labor-intensive work for a reduction in the cost of operations and optimum resource utilization.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo2.png",
    },
    {
      id: 3,
      title: "Decision-Making",
      description:
        "A business will get more timely and informed decisions based on insights infused with data derived from AI.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo3.png",
    },
    {
      id: 4,
      title: "Better Customer Experiences",
      description:
        "AI makes interactions more personalized, enhances service delivery, and improves customer satisfaction.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo5.png",
    },
    {
      id: 5,
      title: "Innovation and Growth",
      description:
        "AI has opened new avenues in terms of product innovation, market expansion, and business transformation.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/logo4.png",
    },
  ];
  return (
    <>
      <div className="text-center overflow-hidden pt-20 relative">
        <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
          What&apos;s the Benefits of AI <br /> Development for Businesses?
        </h4>
        <Image
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/bannerFrame1AI.png"}
          alt={"Frame 1"}
          width={90}
          height={90}
          unoptimized
          priority
          className="w-full md:w-1/2 object-contain z-0 absolute -top-20 -left-20 mb-4 mx-auto"
        />
        <Image
          src={"https://volvrit.s3.ap-south-1.amazonaws.com/bannerFrame1A2.png"}
          alt={"Frame 1"}
          width={90}
          height={90}
          unoptimized
          priority
          className="w-full md:w-1/2 object-contain z-0 absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 mb-4 mx-auto"
        />
        <div className="justify-center my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 gap-4 md:gap-6 lg:gap-10 rounded-xl lg:m-10">
          {aiBenefits.map((service, index) => (
            <div
              key={service.id}
              className={`bg-transparent text-left bg-[#0A3363] p-4 md:p-6 lg:p-8 rounded-lg`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={90}
                height={90}
                className="w-12 object-contain mb-4"
              />
              <h3 className="text-2xl lg:text:3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-semibold mb-2">
                {service.title}
              </h3>
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

export default Benefits;
