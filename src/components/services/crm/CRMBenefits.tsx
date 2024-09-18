const CRMBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Simplicity",
      description:
        "you might discover the built-in features of CRM platforms to be overwhelming.we propose customizing your CRM’s function and interface to reduce the learning curve for users and enhance the system’s adoption",
    },
    {
      id: 2,
      title: "Cost-efficiency in the long run",
      description:
        "you excel in every aspect of nurturing customer relationships, leading to increased lead conversion rate, quicker customer service issue resolution, and more.",
    },
    {
      id: 3,
      title: "Ownership",
      description:
        "With a fully customised CRM, you can expand your team without worrying about soaring subscription costs.",
    },
    {
      id: 4,
      title: "Scalability",
      description:
        "Access new features as needed, not at the mercy of platform upgrades dictated by vendors",
    },
  ];
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-5 md:py-10 px-4 md:px-8 lg:px-20 text-center text-white">
        <h4 className="md:w-2/3 mx-auto text-2xl md:text-3xl py-5 font-normal">
          Ideating and developing a customised CRM Application with numerous
          benefits!
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 my-5 md:my-10 text-left lg:px-20">
          {benefits.map((benefit: any) => {
            return (
              <div
                key={benefit?.id}
                className="bg-white p-4 md:p-6 rounded-lg text-black"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-3">{benefit?.title}</h3>
                <p className="text-xs md:font-base font-normal leading-4 md:leading-5">{benefit?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CRMBenefits;
