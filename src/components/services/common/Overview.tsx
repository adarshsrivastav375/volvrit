import BackgroundImage from "@/components/common/BackgroundImage";
import StartAProjectButton from "@/components/common/StartAProjectButton";

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
          <h3 className="inline text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl">
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
          <StartAProjectButton marginBottom="mb-3 md:mb-0" />
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Overview;
