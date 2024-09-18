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
    <div className="bg-primary text-white py-16">
      <div className="container mx-auto lg:px-20 text-center">
        <HeadingText
          headingText2="Web Solution"
          headingText1="Choose Your Ready-to-Use"
          paragraph="At Volvrit, we continuously test, update, and enhance our development processes. Our developers are dedicated to ongoing learning, ensuring that your project leverages the latest innovations and technologies."
        />
        <div className="flex justify-between items-center gap-10 pt-10">
          <div className="w-3/5 text-left text-lg flex flex-col gap-4">
            {pointsToBeSaved.map((point: any, idx: any) => {
              return (
                <li key={idx} className="list-disc font-light">
                  {point}
                </li>
              );
            })}
          </div>
          <div className="w-2/5">
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
