import StartAProjectButton from "@/components/common/StartAProjectButton";
import HeroSection from "@/components/services/fractional/HeroSection";
import ImportanceAI from "@/components/services/fractional/ImportanceAI";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ImportanceAI />
      <div className="relative my-10 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{
            backgroundImage:
              "url('https://volvrit.s3.ap-south-1.amazonaws.com/cfo4.png')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col px-4 md:px-6 lg:px-20 pt-10 md::pt-20 pb-10 justify-center items-center">
          <div className="text-center">
            <h4 className="text-4xl md:w-4/5 mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Core Responsibilities of a Fractional CFO
            </h4>
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-20">
              <div className="w-full text-center md:text-left md:w-1/2 p-4 pb-0 md:p-0">
                <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
                  Financial Strategy and Planning
                </h4>
                <p className="text-lg font-extralight">
                  A Fractional CFO helps businesses develop and implement
                  long-term financial plans that align with overall business
                  goals. This involves strategic budgeting, forecasting, and
                  financial resource management to ensure the company&apos;s
                  financial operations support sustainable growth. They will
                  research the key performance metrics and improve cash flow and
                  profitability without any unnecessary cost and risks of loss
                  in finance.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 md:p-0">
                <Image
                  priority
                  unoptimized
                  width={100}
                  height={100}
                  alt="Mobile Banner"
                  src="https://volvrit.s3.ap-south-1.amazonaws.com/Graph.png"
                  className="w-full md:w-4/5 ml-auto h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col my-10 md:flex-row justify-between items-center gap-5 md:gap-10 lg:gap-20">
              <div className="w-full md:w-1/2 order-last md:order-first px-4 md:p-0">
                <Image
                  priority
                  unoptimized
                  width={100}
                  height={100}
                  alt="Mobile Banner"
                  src="https://volvrit.s3.ap-south-1.amazonaws.com/cfo5.png"
                  className="w-full md:w-4/5 mr-auto h-full object-contain"
                />
              </div>
              <div className="w-full md:w-1/2 order-first md:order-last p-4 md:p-0 md:text-left">
                <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
                  How a Fractional CFO Works
                </h4>
                <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl mb-5 font-semibold">
                  Initial Assessment and Consultation
                </p>
                <p className="text-lg font-extralight">
                  The Fractional CFO begins by conducting a thorough assessment
                  of your business&apos;s financial status. This involves the
                  analysis of the current finance handling processes, cash
                  flows, budgets, and how your finances generally fare. In the
                  course of exploring, they will have a dialogue with your
                  leadership to understand your needs, objectives, or the pain
                  you feel.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-10">
              <h4 className="text-4xl md:w-4/5 mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
                Who Can Benefit from a Fractional CFO?
              </h4>
            </div>
            <div className="text-center mt-10">
              <h4 className="text-3xl font-semibold pb-5">
                Startups in Need of Technical Leadership{" "}
              </h4>
              <p className="text-lg font-normal pb-10 md:w-4/5 mx-auto">
                Startups often face unique financial challenges as they try to
                scale while maintaining cash flow and securing funding. A
                Fractional CFO offers a startup the critical financial know-how
                that is necessary for optimized budgets, investor funding, and a
                solid financial foundation. Preparing for funding or at a
                break-neck growth curve, a startup needs strategic oversight and
                cost management that a Fractional CFO can provide-helping
                prevent all sorts of financial mistakes as the company scales.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-semibold pb-5">
                Small to Mid-Sized Businesses Scaling Up{" "}
              </h4>
              <p className="text-lg font-normal pb-10 md:w-4/5 mx-auto">
                As small to mid-sized businesses grow, their financial needs
                become more complex. A Fractional CFO helps these companies
                handle cash flow management, cost control, and strategic
                planning as they scale. They ensure that the business&apos;s
                finances are well-structured to support growth, from managing
                new hires to expanding into new markets. For businesses that
                don&apos;t yet need a full-time CFO, a Fractional CFO offers the
                flexibility to handle growth challenges as they arise.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-semibold pb-5">
                Non-Technical Founders{" "}
              </h4>
              <p className="text-lg font-normal pb-10 md:w-4/5 mx-auto">
                Non-financial founders often find it very challenging to deal
                with financial issues that manifest in their business. A
                Fractional CFO helps to bridge this gap by providing expert
                financial oversight to ensure the organization is financially on
                the right track. His or her responsibility will include
                financial planning, ensuring tax compliance, and risk
                management, freeing the founder&apos;s time to concentrate on growing
                the business. This means all the financial functions are well
                aligned with the real business goals, meaning the Fractional CFO
                can advise the founders effectively on which way to go.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-white max-w-9xl mb-10 mx-4 md:mx-[6vw] rounded-3xl overflow-hidden py-10 px-6 md:p-6 lg:p-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{ backgroundImage: "url('/assets/home/banner.jpg')" }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
              Let&apos;s start growing your business
            </h4>
            <p className="text-sm lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto mb-6">
              Be ready to create a personalized mobile application that could
              take your business to the next level. Do similar businesses
              require boosting their customer engagement efficiency and growth
              with mobile apps? Contact us today about your project to
              let&apos;s get started building the right mobile app for
              furthering your business goals.
            </p>
            <StartAProjectButton />
          </div>
        </div>
      </div>
    </>
  );
}
