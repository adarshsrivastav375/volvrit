import Link from "next/link";
import BackgroundImage from "@/components/common/BackgroundImage";

const Overview = ({
  headerText,
  description,
}: {
  headerText: any;
  description: string;
}) => {
  return (
    <div className="container mx-auto lg:px-20 flex flex-col justify-center items-center text-center">
      <BackgroundImage imageUrl="/assets/banners/shape.png">
        <div className="lg:h-[60vh] pt-5 lg:py-0 flex flex-col justify-center items-center">
          <h3 className="inline text-2xl md:text-4xl md:font-light">
            {headerText[0]}{" "}
            <span className="font-semibold text-primary">{headerText[1]}</span>{" "}
            <br />
            <span>{headerText[2]}</span>
          </h3>
          <p className="lg:w-1/2 mx-auto py-5 md:text-lg font-light leading-6">
            {description}
          </p>
          <div className="flex gap-5 justify-center items-center">
            <Link
              href={"tel:+01998989289"}
              className="py-2 px-4 rounded-lg bg-primary hover:bg-primary/80 text-white text-sm transition-all ease-in-out"
              aria-label="Phone number"
            >
              Get Started
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Overview;
