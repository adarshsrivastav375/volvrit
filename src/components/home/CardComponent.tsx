import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const cardData = [
  {
    href: "https://www.unificars.com/",
    image: "/assets/home/unificars.png", // Replace with your image path
    title: "UnifiWheels",
    fundingStatus: "SEED FUNDED",
    tags: [
      "UI/UX",
      "SAAS",
      "CRM",
      "INSPECTION APP",
      "USER APP",
      "PERFORMANCE MARKETING",
      "SEO",
    ],
  },
  {
    href: "https://www.unfazed.in/",
    image: "/assets/home/unfazed.png", // Replace with your image path
    title: "Unfazed",
    fundingStatus: "BOOTSTRAP",
    tags: ["UI/UX", "SAAS", "MOBILE APP", "PERFORMANCE MARKETING", "SEO"],
  },
  {
    href: "https://b2b.intensefocus.com/",
    image: "/assets/home/intensefocus.png", // Replace with your image path
    title: "Intense Focus",
    fundingStatus: "SEED FUNDED",
    tags: [
      "UI/UX",
      "SAAS",
      "CRM",
      "INSPECTION APP",
      "USER APP",
      "PERFORMANCE MARKETING",
      "SEO",
    ],
  },
  {
    href: "https://www.bookswagon.com/",
    image: "/assets/home/bookswagon.png", // Replace with your image path
    title: "Bookswagon",
    fundingStatus: "BOOTSTRAP",
    tags: ["UI/UX", "WEB DEVELOPMENT", "SEO"],
  },
  {
    href: "https://www.tourtravelworld.com/",
    image: "/assets/home/tourtravel.png", // Replace with your image path
    title: "TourTravelWorld",
    fundingStatus: "SEED FUNDED",
    tags: ["UI/UX", "WEB PORTAL DEVELOPMENT", "CMS", "INDIAN GOVERNMENT NGO"],
  },
  // {
  //   href: "https://safewayrssi.com/",
  //   image: "/assets/home/safeway.png", // Replace with your image path
  //   title: "Safewayrssi",
  //   fundingStatus: "SEED FUNDED",
  //   tags: ["UI/UX", "WWB DEVELOPMENT", "CMS"],
  // },
  {
    href: "https://keintchifamilysalon.in/",
    image: "/assets/home/keintchi.png", // Replace with your image path
    title: "keintchi",
    fundingStatus: "SEED FUNDED",
    tags: ["UI/UX", "WEB DEVELOPMENT"],
  },
  // {
  //   href: "https://crm.growfortuna.com/",
  //   image: "/assets/home/fortuna.png", // Replace with your image path
  //   title: "Grow Fortuna",
  //   fundingStatus: "SEED FUNDED",
  //   tags: ["UI/UX", "WEB DEVELOPMENT", "CRM"],
  // },
];

const CardComponent: React.FC = () => {
  return (
    <div className="max-w-9xl pt-5 pb-10 px-4 md:px-8 lg:px-24 2xl:px-40 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 3xl:gap-16">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border rounded-2xl 3xl:rounded-3xl shadow-corner flex flex-col overflow-hidden"
        >
          <div
            className={`border-[16px] 3xl:border-[24px] 4xl:border-[32px] ${
              index % 2 === 0 ? "border-blue-500" : "border-blue-300"
            } w-full h-full`}
          >
            <Link href={card?.href} aria-label={card?.title} target="_blank">
              <Image
                width={500}
                height={500}
                src={card.image}
                alt={card.title}
                className="mb-4 w-full h-[250px] 2xl:h-96 3xl:h-[424px] 4xl:h-[512px] object-cover object-top"
              />
            </Link>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-2 mb-4">
              {card.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm border text-nowrap border-gray-300 2xl:text-lg rounded-full font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-4xl 2xl:text-6xl py-2 2xl:py-6 font-bold">
              <Link href={card?.href} aria-label={card?.title} target="_blank">
                {card.title}
              </Link>
            </h2>
            <div className="flex justify-between items-center mr-[10%]">
              <p className="font-light text-xl 2xl:text-4xl">
                {card.fundingStatus}
              </p>
              <Link
                target="_blank"
                href={card?.href}
                aria-label={card?.title}
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
