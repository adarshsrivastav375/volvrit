const Services = () => {
  const aiServices = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description:
        "The intelligent automation service reduces human intervention and boosts business process efficiency.",
      imageUrl: "path/to/ai-powered-automation.png",
    },
    {
      id: 2,
      title: "Machine Learning Solutions",
      description:
        "Adopt advanced machine learning models for systems that can learn and improve from data. These can enable real-time predictive analytics as well as insights.",
      imageUrl: "path/to/machine-learning-solutions.png",
    },
    {
      id: 3,
      title: "Natural Language Processing (NLP)",
      description:
        "Utilize AI-powered NLP for maximum customer interaction along with automated response to improve communication as well as services.",
      imageUrl: "path/to/nlp.png",
    },
    {
      id: 4,
      title: "AI Consulting",
      description:
        "Consultation from our company to utilize AI along with tailor-made solutions delivery on a need basis for businesses.",
      imageUrl: "path/to/ai-consulting.png",
    },
    {
      id: 5,
      title: "Custom AI Solutions",
      description:
        "You have a dream to build your recommendation engine, chatbot, or advanced analytics platform? We design custom AI for business.",
      imageUrl: "path/to/custom-ai-solutions.png",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              {/* <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover mb-4"
              /> */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
