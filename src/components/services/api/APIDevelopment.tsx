import FullCard from "@/components/common/FullBanner";
import ContactUsButton from "@/components/common/buttons/ContactUsButton";
import Image from "next/image";

const APIDevelopmentBanner = () => {
  const pointsToBeFocusOn = [
    "Court Case Verification API",
    "Face Verification API",
    "Document Verification API",
    "Vehicle Verification API",
  ];
  return (
    <FullCard
      imageAlt="CRM Development"
      imageUrl="/assets/banners/api-development.png"
    >
      <div className="text-white mt-16 md:mt-10 relative">
        <h4 className="text-3xl w-full mx-auto md:text-4xl mb-5 font-extralight">
          Explore
          <strong className="font-medium"> Our APIs</strong>
        </h4>
        <p className="text-sm font-extralight px-4 md:px-0 mx-auto">
          we build software from scratch to transform your operations through
          solutions designed to improve your customer interactions
        </p>
        {/* <Image
          src={"/assets/banners/api_mobile_image.png"}
          alt={"mobile Image"}
          width={100}
          height={100}
          unoptimized
          priority
          className="w-full lg:w-2/5 mx-auto"
        /> */}
        <ContactUsButton />
        {/* <div className="relative"> */}
          {/* {pointsToBeFocusOn.map((point, index) => {
            const isLeft = index < 2;
            const position = isLeft ? "left-0" : "right-0";
            const verticalPosition =
              position === "left-0" && index === 0
                ? "top-32"
                : position === "left-0" && index === 1
                ? "bottom-56"
                : position === "right-0" && index === 2
                ? "top-48"
                : "bottom-40";
            return (
              <span
                className={`bg-white absolute z-40  text-black text-xs font-semibold px-4 py-1 rounded-full ${position} ${verticalPosition} transform -translate-y-1/2`}
                key={index}
              >
                {point}
              </span>
            );
          })} */}
        {/* </div> */}
      </div>
    </FullCard>
  );
};

export default APIDevelopmentBanner;
