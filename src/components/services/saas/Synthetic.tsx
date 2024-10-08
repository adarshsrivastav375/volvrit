import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const logos = [
  { src: "", alt: "Logo 1" },
  { src: "", alt: "Logo 2" },
  { src: "", alt: "Logo 3" },
  { src: "", alt: "Logo 4" },
  { src: "", alt: "Logo 5" },
  { src: "", alt: "Logo 6" },
];

const SyntheticSurveillance: React.FC = () => {
  return (
    <div className="relative my-10">
      <div className="max-w-9xl absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-4">
          Create, inspect, and apply <br />
          synthetic surveillance broadly.
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8">
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>
        <Link
          href={"/contact-us"}
          className="py-2 2xl:py-4 px-5 flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 hover:shadow-2xl text-white text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl transition-all duration-200 ease-in-out"
          aria-label="Contact Us"
        >
          <span>Contact Us</span> <BsArrowRightCircleFill />
        </Link>
      </div>
      <div className="relative lg:px-20 w-full flex justify-center items-center">
        <div className="w-1/2">
          <Image
            width={64}
            height={64}
            alt={"Screen"}
            unoptimized
            priority
            src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-Vector.png"
            className="w-full object-cover"
          />
        </div>
        <Image
          width={200}
          height={200}
          alt={"Screen"}
          unoptimized
          priority
          src="https://volvrit.s3.ap-south-1.amazonaws.com/FrameLogos2.png"
          className="object-contain absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4"
        />
        <Image
          width={64}
          height={64}
          alt={"Screen"}
          src="https://volvrit.s3.ap-south-1.amazonaws.com/horizontal.png"
          className="object-contain absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-1/2">
          <Image
            width={200}
            height={200}
            alt={"Screen"}
            src="https://volvrit.s3.ap-south-1.amazonaws.com/saas-Vector2.png"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SyntheticSurveillance;
