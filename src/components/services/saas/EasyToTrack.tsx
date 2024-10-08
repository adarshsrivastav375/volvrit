import Image from "next/image";

const EasyToTrack = () => {
  const solutions = [
    {
      id: 1,
      description:
        "Derive quick insights with real-time data analytics-empowering faster decisions and anticipating evolving business conditions",
      title: "Real Time Data Analytics",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/time-saas.png",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/easyToTrack.png",
    },
    {
      id: 2,
      description:
        "Maintain the highest levels of safety and security, ensure your data, infrastructure, and business are safeguarded from evolving digital threats",
      title: "Safely Security",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/security-saas.png",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/easyToTrack2.png",
    },
    {
      id: 3,
      description:
        "Smooth extension and running on multiple platforms, flexible and accessible to all users, consistent and performing everywhere.",
      title: "Multiple Platform",
      logo: "https://volvrit.s3.ap-south-1.amazonaws.com/monitor-saas.png",
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/easyToTrack3.png",
    },
  ];

  return (
    <div className="max-w-9xl text-center mx-auto px-4 md:px-6 lg:px-20 pt-10">
      <h4 className="text-4xl md:text-5xl font-semibold 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl">
        We make it easy to track all
        <br /> data analytics
      </h4>
      <div className="flex flex-col justify-between items-center px-4 md:px-6 my-10">
        {solutions.map((sol: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center gap-16"
            >
              <div
                key={sol?.id}
                className={`w-1/2 bg-white text-left text-black p-4 ${
                  index === 1 ? "order-last pr-0" : "order-first pl-0"
                }`}
              >
                <Image
                  width={64}
                  height={64}
                  src={sol?.logo}
                  alt={sol?.title}
                  className="w-10 h-fit object-contain"
                />
                <p className="text-xl md:text-3xl 2xl:text-4xl font-bold py-3">
                  {sol?.title}
                </p>
                <p className="text-base lg:text-lg 2xl:text-xl font-light">
                  {sol?.description}
                </p>
              </div>
              <div
                className={`w-1/2 ${
                  index === 1 ? "order-first" : "order-last"
                }`}
              >
                <Image
                  width={100}
                  height={100}
                  src={sol?.imageUrl}
                  alt={sol?.title}
                  unoptimized
                  priority
                  className="w-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EasyToTrack;
