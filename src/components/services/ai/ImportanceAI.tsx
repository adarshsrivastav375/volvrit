import Image from "next/image";
import Services from "./Services";
import Benefits from "./Benefits";
import Solutions from "./Solutions";
import Development from "./Development";

const ImportanceAI = () => {
  return (
    <div className="bg-[#0B2D52] text-white">
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-20">
        <div className="flex justify-between items-center gap-20">
          <div className="w-1/2">
            <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              What&apos;s the Importance of AI for Business?
            </h4>
            <p className="text-base font-extralight">
              Business automation with AI doesn&apos;t just enshrine it in a
              complex method but has also enabled actionable insight maximizes
              customer interactions. AI inclusion by businesses increases
              efficiency cuts costs and helps them fit for purpose within the
              digital-first world. AI helps a company to make more intelligent
              decisions, produces better forecasts of the markets, and provides
              customized experiences to its customers. Business AI development
              opens up new avenues for innovation while smoothing out operations
              and reducing manual labor.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI10.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-20">
          <div className="w-1/2">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/bannerAI9.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/2 text-right">
            <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              AI Development Services - Volvrit&apos;s Expertise
            </h4>
            <p className="text-base font-extralight">
              We are happy to provide top-class, customized AI Development
              Services for all our clients. Our team of AI experts will
              thoroughly understand how to work with the latest technology and
              develop smart solutions that align with your business goals. We
              work collaboratively with you so that our AI system can be
              smoothly integrated into your operations, which finally helps to
              boost productivity along with smart decision-making based on data.
            </p>
          </div>
        </div>
        <Services />
        <Benefits />
        <Solutions />
        <Development />
      </div>
    </div>
  );
};

export default ImportanceAI;
