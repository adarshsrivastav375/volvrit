import Image from "next/image";

const Services = () => {
  const aiServices = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description:
        "The intelligent automation service reduces human intervention and boosts business process efficiency.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/aiicon1.png",
    },
    {
      id: 2,
      title: "Machine Learning Solutions",
      description:
        "Adopt advanced machine learning models for systems that can learn and improve from data. These can enable real-time predictive analytics as well as insights.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/aiicon2.png",
    },
    {
      id: 3,
      title: "Natural Language Processing (NLP)",
      description:
        "Utilize AI-powered NLP for maximum customer interaction along with automated response to improve communication as well as services.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/aiicon3.png",
    },
    {
      id: 4,
      title: "AI Consulting",
      description:
        "Consultation from our company to utilize AI along with tailor-made solutions delivery on a need basis for businesses.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/aiicon1.png",
    },
    {
      id: 5,
      title: "Custom AI Solutions",
      description:
        "You have a dream to build your recommendation engine, chatbot, or advanced analytics platform? We design custom AI for business.",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/aiicon2.png",
    },
  ];
  return (
    <>
      <div className="text-center pt-20">
        <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
          AI Development Services <br />
          Offered by Volvrit
        </h4>
        <p className="text-base font-extralight">
          Volvrit offers the entire range of AI Development services:
        </p>
        <div className="flex justify-center my-10 relative z-10 flex-wrap bg-[#0A3363] m-4 rounded-xl md:p-6 lg:p-10">
          {aiServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-transparent w-full md:w-1/2 lg:w-1/3 flex flex-col justify-start items-center p-4 md:p-6 pt-10 text-center ${
                index === 1 && "md:border-x md:border-white/20"
              } ${index === 3 && "md:border-r md:border-white/20"}`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={90}
                height={90}
                className="w-8 md:w-6 object-contain mb-4 mx-auto"
              />
              <h3 className="text-2xl lg:text:2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="md:w-3/4 mx-auto font-extralight opacity-80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
