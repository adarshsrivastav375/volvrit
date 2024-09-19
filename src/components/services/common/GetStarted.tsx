import Link from "next/link";
import BackgroundImage from "@/components/common/BackgroundImage";

const GetStarted = () => {
  return (
    <>
      <BackgroundImage>
        <div className="h-fit py-5 md:py-16 lg:py-0 lg:h-[85vh] text-black flex flex-col justify-center items-center">
          <h4 className="text-xl md:text-5xl mb-3 md:mb-7 font-extralight">
            Go ahead and discuss your <br />
            <strong className="font-semibold">project with us</strong>
          </h4>
          <Link
            href={"tel:+01998989289"}
            className="py-1 md:py-3 px-2 md:px-6 rounded-lg bg-primary hover:bg-primary/80 text-white transition-all text-sm md:text-lg ease-in-out"
            aria-label="Phone number"
          >
            Get Started
          </Link>
        </div>
      </BackgroundImage>
    </>
  );
};

export default GetStarted;
