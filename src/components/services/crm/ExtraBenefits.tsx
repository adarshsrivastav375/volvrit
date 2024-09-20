import Image from "next/image";

const ExtraSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Marketing and Sales",
      description:
        "Collect leads from various sources, assign them to team members, and oversee the different stages of lead closure",
    },
    {
      id: 2,
      title: "Lead Capture and Follow-up",
      description:
        "Seamlessly integrate your CRM with every lead generation channel, removing the need for manual lead registration and refining the lead capture process",
    },
    {
      id: 3,
      title: "Customer Service and Call Support",
      description:
        "Enable inbound call routing, schedule outbound calls, and record for analysis and service improvement",
    },
    {
      id: 4,
      title: "Field Sales and Service",
      description:
        "Track team performance, leverage geo-location data, and optimize efficiency with advanced analytics",
    },
    {
      id: 5,
      title: "Customer Self-Service",
      description:
        "Build a customer-centric platform that provides instant solutions to most often asked questions and relieves the burden of your customer service representatives",
    },
    {
      id: 6,
      title: "Order Fulfillment",
      description:
        "Ensure diverse order fulfillment situations that enhance order precision, build accurate statistics, and notify customers of the transition status of their orders",
    },
    {
      id: 7,
      title: "Customer Feedback Management",
      description:
        "The use of customer feedback to innovate products, services, and interactions while showing an interest in achieving satisfaction and loyalty by customers",
    },
    {
      id: 8,
      title: "Reporting",
      description:
        "Use customisable dashboards and analytics to track KPIs, trends, and strategic alignment for continuous business growth",
    },
  ];
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-20 text-center mb-7 lg:mb-16">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-10 mt-14">
        <div className="lg:w-[30%] order-2 lg:order-1 flex flex-col">
          {solutions.slice(0, 4).map((item: any) => {
            return (
              <div key={item?.id} className="pb-3 md:p-2">
                <p className="text-base font-bold pt-2 text-left">
                  {item?.title}
                </p>
                <p className="text-xs font-medium pt-2 text-left">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full pb-8 lg:pb-0 lg:w-[40%] order-1 lg:order-2 rounded-3xl place-self-center">
          <Image
            width={400}
            height={100}
            alt="CRM solutions"
            className="w-full h-full object-contain"
            src={"/assets/services/crmbenefit.png"}
          />
        </div>
        <div className="lg:w-[30%] order-last flex flex-col">
          {solutions.slice(4, 8).map((item: any) => {
            return (
              <div key={item?.id} className="pb-3 md:p-2">
                <p className="text-base font-bold pt-2 text-left">
                  {item?.title}
                </p>
                <p className="text-xs font-medium pt-2 text-left">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExtraSolutions;
