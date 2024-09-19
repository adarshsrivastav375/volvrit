import Image from "next/image";
import HeadingText from "@/components/common/HeadingText";

const WebSolutions = () => {
  const pointsToBeSaved = [
    "Custom iOS and Android apps development",
    "Native and cross-platform solutions",
    "Second platform app development",
    "UI/UX design",
    "Consulting and prototyping",
    "Automated QA and testing",
    "Power management, notification and geofencing",
    "Embedded Android & AOSP customizations",
    "Maintenance and post-warranty support",
  ];
  return (
    <div className="bg-primary text-white mt-5 md:mt-0 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 text-center">
        <HeadingText
          headingText2="Services"
          headingText1="Our Mobile App Development"
          paragraph="We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing on going support."
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10">
          <div className="w-full md:w-1/2 order-last md:order-1 text-left text-base lg:text-lg flex flex-col gap-2 lg:gap-3">
            {pointsToBeSaved.map((point: any, idx: any) => {
              return (
                <li key={idx} className="list-disc font-light">
                  {point}
                </li>
              );
            })}
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-last">
            <Image
              width={400}
              height={100}
              alt="Web Solution"
              src={"/assets/services/technology-android.png"}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSolutions;
