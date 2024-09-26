import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const cardData = [
  {
    image: "/assets/home/unificars.png", // Replace with your image path
    title: "UnifiWheels Pvt ltd",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/unfazed.png", // Replace with your image path
    title: "Unfazed",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/bookswagon.png", // Replace with your image path
    title: "Bookswagon",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/intensefocus.png", // Replace with your image path
    title: "Intense Focus",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/tourtravel.png", // Replace with your image path
    title: "TourTravelWorld",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/safeway.png", // Replace with your image path
    title: "Safewayrssi",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/keintchi.png", // Replace with your image path
    title: "keintchi",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
  {
    image: "/assets/home/fortuna.png", // Replace with your image path
    title: "Grow Fortuna",
    fundingStatus: "Seed funded",
    tags: ["Development", "Design", "SEO"],
  },
];

const CardComponent: React.FC = () => {
  return (
    <div className="max-w-8xl pt-5 pb-10 px-4 md:px-8 lg:px-24 2xl:px-40 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border rounded-2xl shadow-corner flex flex-col overflow-hidden"
        >
          <div
            className={`border-[16px] ${
              index % 2 === 0 ? "border-blue-500" : "border-blue-300"
            } w-full h-full`}
          >
            <Image
              width={500}
              height={500}
              src={card.image}
              alt={card.title}
              className="mb-4 w-full h-[250px] object-cover object-top"
            />
          </div>
          <div className="p-5">
            <div className="flex space-x-2 mb-2">
              {card.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm border border-gray-300 2xl:text-lg rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-4xl 2xl:text-6xl py-2 font-bold">
              {card.title}
            </h2>
            <div className="flex justify-between items-center mr-[10%]">
              <p className="font-light text-xl 2xl:text-3xl">{card.fundingStatus}</p>
              <Link
                href="/"
                className="inline-block hover:scale-110 transition-all duration-200 ease-linear rounded-full border-gray-400 border p-2"
              >
                <span>
                  <LuArrowUpRight className="text-xl 2xl:text-2xl" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
