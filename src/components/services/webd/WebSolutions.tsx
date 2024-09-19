import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const WebSolutions = () => {
  const pointsToBeSaved = [
    "Custom features tailored to your specific needs",
    "Built-in scalability and top-notch security from day one",
    "High-quality, engaging visuals to captivate users",
    "User-friendly, visually appealing UI/UX design",
    "Responsive design for all device sizes",
    "Continuous maintenance and reliable support",
  ];
  return (
    <div className="bg-primary text-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-20 text-center">
        <HeadingText
          headingText2="Web Solution"
          headingText1="Choose Your Ready-to-Use"
          paragraph="At Volvrit, we continuously test, update, and enhance our development processes. Our developers are dedicated to ongoing learning, ensuring that your project leverages the latest innovations and technologies."
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 pt-10">
          <div className="w-full md:w-1/2 lg:w-3/5 text-left order-last md:order-1 text-base lg:text-lg flex flex-col gap-2 lg:gap-4">
            {pointsToBeSaved.map((point: any, idx: any) => {
              return (
                <li key={idx} className="list-disc font-light">
                  {point}
                </li>
              );
            })}
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-last">
            <Image
              width={400}
              height={100}
              alt="Web Solution"
              src={"/assets/services/websolution.png"}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSolutions;
