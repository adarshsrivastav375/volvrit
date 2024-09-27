import { PiStarFill } from "react-icons/pi";

const contentData = [
  {
    rating: "5.0",
    description: "Star Rating",
    source: "Google",
  },
  {
    rating: "4.9",
    description: "Star Rating",
    source: "Clutch",
  },
  {
    rating: "30+",
    description: "Full time, US-based digital Product access",
    source: "",
  },
  {
    rating: "150+",
    description: "Client served by our designers & Developers",
    source: "",
  },
  {
    rating: "30M+",
    description: "Monthly Active Users Across Product",
    source: "",
  },
];

const StatsComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-16 2xl:px-40 2xl:py-20 3xl:py-40">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 w-full">
        {contentData.map((item, index) => (
          <div
            key={index}
            className="text-center border-l border-gray-400 px-5 pb-5 lg:first:border-l-0"
          >
            <h2 className="text-5xl 2xl:text-7xl 3xl:text-8xl pb-2 font-semibold text-nowrap flex justify-center items-center gap-2">
              {item.rating}{" "}
              {item.source && (
                <span>
                  <PiStarFill className="text-4xl 2xl:text-5xl" />
                </span>
              )}
            </h2>
            <p className="font-semibold 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">{item.description}</p>
            {item.source && (
              <p className="text-xl 2xl:text-2xl font-semibold">
                {item.source}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
