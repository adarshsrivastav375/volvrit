import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto lg:px-20 text-center pb-16">
      <HeadingText
        headingText2="Our Projects"
        colored="text-primary font-bold"
        headingText1="Work Speaks Volumes: Discover"
      />
      <div className="grid grid-cols-2 gap-10 pt-10">
        <div className="flex flex-col gap-10 h-fit">
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
        <div className="flex flex-col gap-10 h-fit">
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