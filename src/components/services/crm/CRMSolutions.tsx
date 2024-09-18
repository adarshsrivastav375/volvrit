import Image from "next/image";

const CRMSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Date Driven decision making",
      logo: "/assets/services/crm2.png",
    },
    {
      id: 2,
      title: "Informed Decision Making",
      logo: "/assets/services/crm4.png",
    },
    {
      id: 3,
      title: "Smart lead Management",
      logo: "/assets/services/crm3.png",
    },
    {
      id: 4,
      title: "Enhance User Satisfaction",
      logo: "/assets/services/user.png",
    },
    {
      id: 5,
      title: "Advance Predict Capability",
      logo: "/assets/services/crm5.png",
    },
    {
      id: 6,
      title: "Detailed Customer Insight",
      logo: "/assets/services/crm1.png",
    },
  ];
  return (
    <div className="container mx-auto lg:px-20 text-center mb-12 md:mb-16">
      <p className="text-sm font-medium mb-2 mt-10 text-primary">
        ― Custom CRM
      </p>
      <h3 className="text-2xl md:text-4xl inline font-light mb-4 leading-tight">
        Crafting a Solutions with{" "}
        <span className="text-primary font-semibold">Unique Features</span>
      </h3>
      <div className="flex justify-start md:justify-center md:items-center gap-5 lg:gap-10 mt-5 md:mt-14 px-4 md:px-0">
        <div className="w-1/2 lg:w-[30%] flex flex-col gap-5">
          {solutions.slice(0, 3).map((item: any) => {
            return (
              <div key={item?.id} className="p-4 md:p-6 rounded-lg shadow-md">
                <Image
                  width={48}
                  height={48}
                  src={item?.logo}
                  alt={item?.title}
                  className="w-8 h-fit object-contain"
                />
                <p className="text-sm md:text-base lg:w-1/2 font-semibold pt-2 text-left">
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block lg:w-[40%] bg-primary p-5 rounded-3xl">
          <Image
            width={400}
            height={100}
            alt="CRM solutions"
            className="w-full h-full object-contain"
            src={"/assets/services/crmsolutions.png"}
          />
        </div>
        <div className="w-1/2 lg:w-[30%] flex flex-col gap-5">
          {solutions.slice(3, 6).map((item: any) => {
            return (
              <div key={item?.id} className="p-4 md:p-6 rounded-lg shadow-md">
                <Image
                  width={48}
                  height={48}
                  src={item?.logo}
                  alt={item?.title}
                  className="w-8 h-fit object-contain"
                />
                <p className="text-sm md:text-base lg:w-1/2 font-semibold pt-2 text-left">
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CRMSolutions;
