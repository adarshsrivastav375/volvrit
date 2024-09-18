import { whatWeOffer } from "@/data/services/webd";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <div className="container mx-auto lg:px-20 mb-10 text-center">
      <p className="text-sm font-medium mb-2 mt-10 text-primary">
        ― About Services
      </p>
      <h3 className="text-3xl md:text-4xl inline font-light mb-4 leading-tight">
        Web Development Services{" "}
        <span className="text-primary font-semibold">We Offer</span>
      </h3>
      <div className="flex py-10 justify-between items-center gap-20">
        <div className="w-2/5">
          <Image
            src={"/assets/services/whatweoffer.png"}
            alt="WHAT WE OFFER"
            width={400}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-3/5 grid grid-cols-2 gap-7">
          {whatWeOffer.map((item: any) => {
            return (
              <div key={item?.id}>
                <Image
                  src={item?.imageUrl}
                  alt={item?.title}
                  width={64}
                  height={64}
                  className="w-fit h-fit object-cover"
                />
                <h4 className="text-xl text-left font-bold leading-6 my-3 w-2/3 text-gray-800">
                  {item?.title.split(" ")[0]} <br /> {item?.title.split(" ")[1]}
                </h4>
                <p className="text-sm  text-left font-light w-4/5 text-gray-700">
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
