import Image from "next/image";
import HeadingText from "@/components/common/HeadingText";

const benefits = [
  {
    title: "Initiation Phase",
    description:
      "Our experts develop a detailed brief of your requirements and ideas, converting them into technical documents and early prototypes.",
    icon: "/assets/services/initiative.png",
  },
  {
    title: "Development Phase",
    description:
      "We develop your solution with frequent updates and feedback. At volvrit, we utilize the Scrum methodology.",
    icon: "/assets/services/development.png",
  },
  {
    title: "Ongoing Support",
    description:
      "Post-release, we ensure continuous server monitoring, address any bugs, and offer comprehensive customer support.",
    icon: "/assets/services/gear.png",
  },
  {
    title: "Next Phases",
    description:
      "To keep pace with rapidly evolving customer demands, web apps need regular feature updates.",
    icon: "/assets/services/process.png",
  },
];

const DevelopmentProcess = () => {
  return (
    <div className="container mx-auto lg:px-20 py-12 text-center">
      <HeadingText
        headingText2="Process"
        headingText1="Our Web Development"
        colored="font-semibold text-primary"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="relative px-5 md:px-2 lg:px-5">
            <div className="text-center p-6 md:p-2 lg:p-4 flex flex-col items-center z-10 relative">
              <div className="border-2 border-primary/30 relative rounded-xl p-2">
                <Image
                  src={benefit.icon}
                  alt="Icon"
                  width={48}
                  height={48}
                  className="shrink-0"
                />
                <span className="absolute -top-3 -left-3 bg-primary text-white w-6 h-6 flex justify-center items-center rounded-full">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-medium mb-2 mt-4">
                {benefit.title}
              </h3>
              <p className="text-primary text-[13px] font-light">
                {benefit.description}
              </p>
            </div>
            {index < benefits.length - 1 && (
              <div className="hidden absolute border-primary/80 h-px border-t-4 border-dashed lg:block lg:w-[12rem] z-20 top-[3rem] right-0 -mr-[6.7rem]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
