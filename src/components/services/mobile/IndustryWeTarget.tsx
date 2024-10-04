import Image from "next/image";
import { faqs } from "@/data/home/faqs";
import Accordion from "@/components/common/Accordion";

const IndustryWeTarget = () => {
  return (
    <div className="max-w-9xl mx-auto py-16 text-center px-4 md:px-6 lg:px-0">
      <h4 className="text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
        Industry We Target
      </h4>
      <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto font-light">
        We provide mobile app development services for almost any type of
        industry. It does not matter what your business is, we shall develop an
        app suitable to your needs.
      </p>
      <div className="flex justify-between items-center gap-20 px-20 pt-10">
        <div className="w-1/2 text-left">
          <Accordion faqs={faqs} />
        </div>
        <div className="w-1/2">
          <Image
            width={100}
            unoptimized
            priority
            height={100}
            src="https://volvrit.s3.ap-south-1.amazonaws.com/industryWetarget.png"
            alt="Mobile App Development Process"
            className="w-full aspect-ratio object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryWeTarget;
