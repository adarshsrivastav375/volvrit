import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-tl from-black via-violet-950 to-black text-white py-16">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-20 2xl:px-40 text-left">
        <h2 className="text-3xl mb-4 !leading-snug">
          <strong className="font-bold">
            Your website is your 24/7 sales <br />
            person.{" "}
          </strong>
          <span className="font-extralight">
            Don&apos;t just settle for an ordinary one. <br />
            Go beyond with Volvrit
          </span>
        </h2>
        <Link
          href={"/contact-us"}
          className="py-2 px-5 flex gap-2 w-fit mt-7 items-center rounded-lg bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 hover:shadow-2xl text-white text-base 2xl:text-lg transition-all duration-200 ease-in-out"
          aria-label="Contact Us"
        >
          <span>Start a Project</span> <BsArrowRightCircleFill />
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
