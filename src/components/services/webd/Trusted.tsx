import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const Trusted = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-40 pb-10 md:pt-5">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-10">
          <div className="md:w-3/5 px-3 md:px-0 text-left text-lg order-last md:order-1 flex flex-col gap-4">
            <HeadingText
              headingText2="1 Million people"
              headingText1="Volvrit is trusted by over"
              className="!mr-auto text-xs md:text-sm md:w-4/5"
              paragraph="Volvrit is your one stop solution for all your IT and Legal needs. We are experts in IT and legal services to ensure effective implementation and high quality service for our clients. We focus on client success with innovative, precise solutions that build long-term partnerships."
            />
          </div>
          <div className="w-full px-3 md:px-0 md:w-2/5 order-1 md:order-last">
            <Image
              width={400}
              height={100}
              alt="Web Solution"
              src={"/assets/services/metaverse.png"}
              className="w-full h-full object-cover md:object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
