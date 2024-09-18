import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto lg:px-20 text-center py-16">
      <HeadingText
        headingText2="Our Projects"
        colored="text-primary font-bold"
        headingText1="Work Speaks Volumes: Discover"
      />
      <div className="grid grid-cols-2 gap-10 pt-10">
        <Image
          width={800}
          height={800}
          alt="Web Solution"
          src={"/assets/services/image1.png"}
          className="w-full h-full rounded-xl object-cover"
        />
        <Image
          width={800}
          height={800}
          alt="Web Solution"
          src={"/assets/services/image2.png"}
          className="w-full h-full rounded-xl object-cover"
        />
        <Image
          width={800}
          height={800}
          alt="Web Solution"
          src={"/assets/services/image4.png"}
          className="w-full h-full rounded-xl object-cover"
        />
        <Image
          width={800}
          height={800}
          alt="Web Solution"
          src={"/assets/services/image3.png"}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonials;
