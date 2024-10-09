import Image from "next/image";
import StartAProjectButton from "../common/StartAProjectButton";

const images = [
  { width: 100, url: "/assets/logo/services/nextjs.png" },
  { width: 70, url: "/assets/logo/services/blockchain.png" },
  { width: 70, url: "/assets/logo/services/bubble.png" },
  { width: 80, url: "/assets/logo/services/reactjs.png" },
  { width: 90, url: "/assets/logo/services/ios.png" },
  { width: 100, nograyscale: true, url: "/assets/logo/services/aws.png" },
  { width: 120, url: "/assets/logo/services/nodejs.png" },
  { width: 70, url: "/assets/logo/services/group.png" },
  { width: 50, url: "/assets/logo/services/android.png" },
  { width: 90, nograyscale: true, url: "/assets/logo/services/53.png" },
];
const HeroSection = () => {
  return (
    <div className="pt-20 relative text-white h-screen md:h-auto lg:min-h-screen lg:pt-48 2xl:pt-56 flex flex-col justify-center items-center">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="Home page Bannr"
        src="/assets/home/banner.jpg"
        className="bg-violet-950 absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4 md:px-6 lg:px-20 md:py-20 lg:py-0">
        <h1 className="text-4xl lg:text-5xl 2xl:text-7xl 3xl:text-8xl font-semibold mx-auto mb-5">
          Web Designing & Development
          <br /> Digital marketing & Mobile App&apos;s
        </h1>
        <p className="w-4/5 md:w-2/3 text-sm md:text-base lg:text-xl 2xl:text-2xl 3xl:text-3xl mx-auto font-light mb-6 2xl:mb-10 3xl:my-14 4xl:my-20">
          At VOLVRIT we help B2B-B2C & Startup&apos;s to create custom
          development solutions, Crafted by our experienced IT TEAM.
        </p>
        <StartAProjectButton />
        <div className="flex flex-wrap pt-10 lg:pb-20 justify-center items-center">
          {images.map((image, index) => {
            return (
              <div
                className="md:w-[10%] lg:w-[16%] px-3 lg:px-0 py-3 grayscale"
                key={index}
              >
                <Image
                  priority
                  height={100}
                  src={image?.url}
                  width={image?.width}
                  alt={`image-${index}`}
                  className={`h-fit w-12 md:w-20 lg:w-auto 2xl:w-28 3xl:w-36 4xl:w-48 ${
                    image?.nograyscale ? "" : "brightness-[.5]"
                  } `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
