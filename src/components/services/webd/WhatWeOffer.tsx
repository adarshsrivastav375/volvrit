import { whatWeOffer } from "@/data/services/webd";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-20 mb-5 md:mb-10 text-center">
      <p className="text-sm font-medium mb-2 mt-10 text-primary">
        ― About Services
      </p>
      <h3 className="text-3xl md:text-4xl inline font-light mb-4 leading-tight">
        Web Development Services{" "}
        <span className="text-primary font-semibold">We Offer</span>
      </h3>
      <div className="flex flex-col md:flex-row py-10 justify-between items-center gap-5 md:gap-10 lg:gap-20">
        <div className="w-full md:w-2/5">
          <Image
            src={"/assets/services/whatweoffer.png"}
            alt="WHAT WE OFFER"
            width={500}
            height={100}
            className="w-full object-cover md:object-contain"
          />
        </div>
        <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          {whatWeOffer.map((item: any) => {
            return (
              <div key={item?.id}>
                <Image
                  src={item?.imageUrl}
                  alt={item?.title}
                  width={64}
                  height={64}
                  className="w-12 md:w-8 lg:w-12 h-fit object-cover"
                />
                <h4 className="md:hidden text-lg md:text-xl text-left font-bold leading-6 mt-3 mb-1 w-full lg:w-2/3 text-gray-800">
                  {item?.title}
                </h4>
                <h4 className="hidden md:block text-lg md:text-xl text-left font-bold leading-6 my-3 w-full lg:w-2/3 text-gray-800">
                  {item?.title.split(" ")[0]} <br /> {item?.title.split(" ")[1]}
                </h4>
                <p className="text-sm text-left font-light w-full lg:w-4/5 text-gray-700">
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
