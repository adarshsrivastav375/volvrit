import Image from "next/image";
import HeroSection from "@/components/about/HeroSection";
import StatsComponent from "@/components/home/StatsComponent";

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="py-5 md:py-10">
        <StatsComponent />
      </div>
      <div className="bg-[#122236] text-white">
        <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20">
          <div className="">
            <h4 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-center mb-6 lg:mb-12 mt-10 lg:mt-0">
              Our Core Values
            </h4>

            <div className="flex flex-col md:flex-row flex-wrap justify-around text-left mb-12">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold">
                  Innovation:
                </h2>
                <p className="mt-4 font-extralight text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                  We are committed to continuous improvement and embracing the
                  latest technologies to provide our clients with a competitive
                  advantage.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold">
                  Client-Centric Focus:
                </h2>
                <p className="mt-4 font-extralight text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                  Our clients are at the heart of everything we do. We
                  prioritize effective communication and collaboration to ensure
                  our services align with their strategic goals.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold">
                  Integrity & Transparency:
                </h2>
                <p className="mt-4 font-extralight text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                  Building trust through ethical practices and clear
                  communication is fundamental to our approach, fostering
                  long-term relationships with our clients.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold p-4">
              Key Highlights
            </h2>
            <div className="flex flex-col md:flex-row justify-between gap-10 px-4 items-center">
              <div className="space-y-6 md:w-3/5">
                <div className="flex items-start space-x-3">
                  <Image
                    width={100}
                    height={100}
                    alt="Home page Bannr"
                    src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutLogo1.png"
                    className="w-fit h-full object-contain pt-1"
                  />
                  <div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-medium">
                      Extensive Industry Experience :
                    </h3>
                    <p className="mt-2 font-extralight opacity-80 text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                      Volvrit has years of experience under the IT sector,
                      offering a variety of services to clients across various
                      industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Image
                    width={100}
                    height={100}
                    alt="Home page Bannr"
                    src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutLogo2.png"
                    className="w-fit h-full object-contain pt-1"
                  />
                  <div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-medium">
                      Proven Track Record:
                    </h3>
                    <p className="mt-2 font-extralight opacity-80 text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                      Volvrit has a proven track record of delivering successful
                      projects, providing reliable IT solutions to a wide range
                      of industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Image
                    width={100}
                    height={100}
                    alt="Home page Bannr"
                    src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutLogo3.png"
                    className="w-fit h-full object-contain pt-1"
                  />
                  <div>
                    <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-medium">
                      Expertise in Advanced Technologies:
                    </h3>
                    <p className="mt-2 font-extralight opacity-80 text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                      Volvrit specializes in cutting-edge technologies, offering
                      innovative solutions to meet the evolving needs of the IT
                      industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/5">
                <Image
                  priority
                  unoptimized
                  width={100}
                  height={100}
                  alt="Home page Bannr"
                  src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutFrame2.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
