import CardComponent from "@/components/home/CardComponent";
import Image from "next/image";

const PortfolioOffer = () => {
  const portfolioOffers = [
    {
      id: 1,
      imageUrl:
        "https://volvrit.s3.ap-south-1.amazonaws.com/ecommerce-website.png",
      title: "Ecommerce Web Development Services",
      description:
        "OurOur e-commerce services ensure a convenient and secure manner of online transactions for you as well as your customers.",
    },
    {
      id: 2,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/website-page.png",
      title: "Corporate Web Development",
      description:
        "We're a corporate website development company. We aim to create a website that best depicts your brand and derives the business intent into it, enhancing your corporation&apos;s overall identity and maximizing engagement.",
    },
    {
      id: 3,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobile.png",
      title: "Education Platforms",
      description:
        " Learning management systems for schools, colleges, and universities; providing ease in the delivery of digital education to their audiences and handling academic processes with the least hassle.",
    },
  ];
  return (
    <>
      <div className="max-w-9xl mx-auto py-8 text-center px-4 md:px-6 lg:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
          Portfolio
        </h4>
        <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto font-light">
          We have experience in various projects in the retail healthcare,
          education, and corporate sectors, seen the best of industry types
          through our portfolio of projects. Each project, essentially, speaks
          of our quality and customer satisfaction commitment.
        </p>
      </div>
      <CardComponent />
      <div className="max-w-9xl mx-auto py-8 text-center px-4 md:px-6 lg:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
          The Portfolio Offers:
        </h4>
        <div className="grid grid-cols-3 gap-10 py-10">
          {portfolioOffers.map((item) => {
            return (
              <div
                key={item?.id}
                className="flex bg-[#EAEEF2] flex-col rounded-2xl p-8 justify-start items-center"
              >
                <Image
                  src={item?.imageUrl}
                  alt={item?.title}
                  width={64}
                  height={64}
                  className="w-12 md:w-8 lg:w-14 h-fit object-contain"
                />
                <h4 className="text-lg md:text-xl my-3 font-bold leading-6 w-full lg:w-2/3 text-gray-800">
                  {item?.title}
                </h4>
                <p className="text-base w-full">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PortfolioOffer;
