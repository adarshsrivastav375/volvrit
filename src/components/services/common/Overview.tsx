import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import BackgroundImage from "@/components/common/BackgroundImage";

const Overview = ({
  imageUrl,
  headerText,
  description,
  description2,
}: {
  imageUrl?: any;
  headerText: any;
  description: string;
  description2?: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <BackgroundImage
        imageUrl={imageUrl ? imageUrl : "/assets/banners/shape.png"}
      >
        <div className="pt-5 lg:pt-24 flex flex-col justify-center items-center">
          <h3 className="inline text-2xl md:text-4xl md:font-medium 2xl:text-5xl 3xl:text-6xl">
            {headerText[0]}{" "}
            <span className="font-semibold text-primary">{headerText[1]}</span>{" "}
            <br />
            <span>{headerText[2]}</span>
          </h3>
          <p className="lg:w-2/3 mx-auto pt-5 md:text-base leading-6">
            {description}
          </p>
          {description2 && (
            <p className="lg:w-2/3 mx-auto py-5 md:text-base leading-6">
              {description2}
            </p>
          )}
          <Link
            href="/it-services/crm-development"
            className="py-3 mx-auto justify-center 2xl:py-4 px-5 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Overview;
