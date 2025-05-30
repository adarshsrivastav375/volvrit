import Image from "next/image";
import StartAProjectButton from "@/components/common/StartAProjectButton";

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
    <>
      <div className="relative text-white">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-[15vh] md:pt-[15vh] lg:pt-[25vh]">
          <div className="text-center">
            <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Build Your Vision with Custom
              <br /> SaaS Development
            </h4>
            <p className="text-base font-extralight px-4 md:px-0 md:w-1/2 mx-auto mb-6">
              Empower Your Business with Innovative, Cloud-Based Software
              Tailored to Drive Growth and Efficiency in Today&apos;s Digital
              World
            </p>
            <StartAProjectButton marginBottom="mb-10" />
            <div className="w-full flex flex-col items-center justify-center">
              <Image
                priority
                unoptimized
                width={100}
                height={100}
                alt="Mobile Banner"
                src="https://volvrit.s3.ap-south-1.amazonaws.com/saasbanner.png"
                className="w-full lg:w-4/5 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B2D52] text-center rounded-3xl relative bottom-10 z-20 text-white">
        <div className="max-w-9xl mx-auto py-10 px-4 md:px-6 lg:px-20">
          <h4 className="text-3xl font-medium 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl mb-5">
            Modern Technology Stack for Optimal Results
          </h4>
          <p className="text-base 2xl:text-lg 3xl:text-xl md:w-2/3 mx-auto font-light opacity-50">
            We use the latest technologies to ensure your SaaS application is
            secure, scalable, and efficient.
          </p>
          <div className="flex flex-wrap pt-5 justify-center items-center lg:px-20">
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
                      image?.nograyscale ? "" : "opacity-40"
                    } `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
