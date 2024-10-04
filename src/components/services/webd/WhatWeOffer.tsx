import { whatWeOffer } from "@/data/services/webd";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-20 mb-5 md:mb-10 text-center pt-14">
      <h4 className="text-3xl w-full mx-auto md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
        Why Choose Volvrit for Website <br /> Development
      </h4>
      <div className="flex flex-col md:flex-row py-10 justify-between items-center gap-5 md:gap-10 lg:gap-12">
        <div className="w-full md:w-2/5 rounded-2xl overflow-hidden">
          <Image
            src={"/assets/services/whatweoffer.png"}
            alt="WHAT WE OFFER"
            width={500}
            height={100}
            className="w-full object-cover md:object-contain"
          />
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {whatWeOffer.map((item: any) => {
            return (
              <div key={item?.id}>
                <Image
                  src={item?.imageUrl}
                  alt={item?.title}
                  width={64}
                  height={64}
                  className="w-12 md:w-8 lg:w-14 h-fit object-contain"
                />
                <h4 className="md:hidden text-lg md:text-xl text-left font-bold leading-6 w-full lg:w-2/3 text-gray-800">
                  {item?.title}
                </h4>
                <h4 className="hidden md:block text-lg md:text-xl text-left font-bold leading-6 my-2 w-full lg:w-2/3 text-gray-800">
                  {item?.title.split(" ")[0]} <br /> {item?.title.split(" ")[1]}
                </h4>
                <p className="text-sm text-left font-light w-full">
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

export default WhatWeOffer;
