import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-20 text-center py-8 md:py-12 lg:py-16">
      <HeadingText
        headingText2="Our Projects"
        colored="text-primary font-bold"
        headingText1="Work Speaks Volumes: Discover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-5 md:pt-10">
        <div className="flex flex-col gap-5 md:gap-10 h-fit">
          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img1.png"}
            className="w-full h-fit object-contain"
          />
          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img5.png"}
            className="w-full h-fit object-contain"
          />
          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img3.png"}
            className="w-full h-fit object-contain"
          />
          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img5.png"}
            className="w-full h-fit object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 h-fit">
          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img2.png"}
            className="w-fulL object-contain"
          />

          <Image
            width={800}
            height={800}
            alt="Web Solution"
            src={"/assets/services/img4.png"}
            className="w-full h-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
