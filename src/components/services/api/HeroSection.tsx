import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

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
        <div className="relative z-10 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-10 md:pt-20 lg:pt-[25vh]">
          <div className="w-full text-center flex flex-col items-center justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/apidev1.png"
              className="w-2/3 h-full object-cover"
            />
            <div className="absolute w-full">
              <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
                Explore Our APIs
              </h4>
              <p className="text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-extralight px-4 md:px-0 md:w-1/2 mx-auto mb-6">
                Optimize your applications with secure and scalable API
                solutions that enhance efficiency, ensure smooth connectivity,
                and empower your business to deliver better user experiences
                across platforms and services
              </p>
              <Link
                href="/contact-us"
                className="py-3 mx-auto justify-center 2xl:py-4 px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
              >
                <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
                <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
              </Link>
              <div className="flex w-full mt-[10%] py-3 bg-gradient-to-r from-[#D2511F] via-[#9BAAAC] to-[#194077] justify-center items-center text-4xl font-light gap-10">
                {["Flexible  API", "The Next-Gen  API", "Powerful API"].map(
                  (item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-10"
                      >
                        <span>{item}</span>
                        {(index === 0 || index === 1) && (
                          <Image
                            width={90}
                            height={90}
                            alt="Mobile Banner"
                            src="https://volvrit.s3.ap-south-1.amazonaws.com/apidev3.png"
                            className="w-fit h-full object-cover"
                          />
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[120vh] relative bg-black">
          <div className="bg-white p-10 flex flex-col justify-center items-start gap-5 text-black mx-20 h-[90vh] w-3/5 -mt-20">
            <h4 className="text-3xl w-full mx-auto md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-semibold">
              Your <strong>Customer Relationship</strong> <br /> through Digital
              Transformation
            </h4>
            <p className="text-lg font-light">
              From concept to launch, we bring your digital ideas to life with
              custom web solutions that elevate your brand and engage your
              audience.
            </p>
            <Link
              href="/contact-us"
              className="py-3 justify-center 2xl:py-4 px-5 mb-7 w-fit cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            >
              <span className="text-xl 2xl:text-2xl">Start a Project</span>{" "}
              <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
            </Link>
          </div>
          <Image
            priority
            unoptimized
            width={100}
            height={100}
            alt="Mobile Banner"
            src="https://volvrit.s3.ap-south-1.amazonaws.com/apidev2.png"
            className="w-fit h-[120vh] top-0 absolute right-0 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
