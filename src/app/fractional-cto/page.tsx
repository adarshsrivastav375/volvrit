import Image from "next/image";
import HeaderSection from "@/components/services/fractional/HeaderSection";
import ParallaxSection from "@/components/services/fractional/ParallexSection";
import StartAProjectButton from "@/components/common/StartAProjectButton";

const data = [
  {
    id: 1,
    title: "Access to Expertise Without Full-Time Cost",
    description:
      "Hiring a Fractional CTO allows access to top-tier technology leadership without the heavy price tag that a full-time CTO might have attached to it. The only cost paid is the time and expertise needed which is cost-effective for companies of all growth stages.",
  },
  {
    id: 2,
    title: "Flexibility to Meet Changing Needs",
    description:
      "A Fractional CTO offers the ultimate flexibility. One can engage a Fractional CTO for a short-term project, a major product launch, or a specific period of growth and have their engagement adjusted. It's very good for companies that have fluctuating tech demands or are scaling fast.",
  },
  {
    id: 3,
    title: "Faster Product Development",
    description:
      "With a Fractional CTO, businesses benefit from experienced leadership that can smoothen the product development process. Whether launching an MVP or expanding features, the CTO ensures that tech decisions are aligned with business objectives, improving time-to-market and reducing costly delays.",
  },
  {
    id: 4,
    title: "Stronger Security and Risk Management",
    description:
      "A Fractional CTO implements strong security protocols and prepares your business for potential technical risks, such as system downtime or cybersecurity threats. Having a focus on the management of risk, this role positions to help you ensure the safety of your technology infrastructure so that your business can continue uninterrupted.",
  },
];

export default function Page() {
  return (
    <>
      <HeaderSection />
      <div className="flex max-w-9xl mx-auto p-4 md:p-6 lg:py-10 lg:pl-32 lg:pr-0 flex-col md:flex-row justify-center items-center md:gap-20 lg:gap-10">
        <h4 className="w-full text-center md:text-left md:w-1/3 text-4xl mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
          Understanding the Role and Flexibility of a Fractional CTO
        </h4>
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
          <Image
            priority
            unoptimized
            width={100}
            height={100}
            alt="Mobile Banner"
            src="https://volvrit.s3.ap-south-1.amazonaws.com/cto2.png"
            className="w-full lg:w-4/5 h-full object-contain"
          />
        </div>
      </div>
      <ParallaxSection />
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full order-last md:order-1 md:w-1/3">
          <Image
            src="https://volvrit.s3.ap-south-1.amazonaws.com/cto3.png"
            alt="Background Image"
            unoptimized
            priority
            width={100}
            height={100}
            className="z-0 w-full"
          />
        </div>
        <div className="w-full order-1 md:order-last md:w-2/3 text-center p-4 md:p-6 lg:p-10">
          <h2 className="text-3xl md:text-6xl mb-5 font-semibold">
            Why Fractional CTOs Are Essential for Modern Businesses
          </h2>
          <p className="mb-5 text-2xl md:text-4xl font-medium">Cost-Effective Leadership</p>
          <p className="text-xl">
            For a startup or a small business, hiring a full-time CTO will be
            very costly. A Fractional CTO, means you get access to senior-level
            technical expertise without all the overhead of a full-time
            executive-you pay for and invest your own time and expertise rather
            than a permanent position, it gives the flexibility in businesses to
            spend as much as necessary while they realize top tier strategic
            insights whose tech aligns with business goals.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-9xl text-center">
        <h4 className="py-10 md:py-20 font-semibold md:w-4/5 mx-auto text-3xl md:text-5xl">
          How Fractional CTOs Boost Business Growth and Efficiency
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-8 lg:px-20">
          {data.map((item: any) => {
            return (
              <div
                className="bg-[#E6EEF5]/50 cursor-pointer transition-all duration-200 ease-linear hover:bg-[#E6EEF5] text-left rounded-2xl p-6"
                key={item?.id}
              >
                <h4 className="text-3xl mb-5 font-semibold">{item?.title}</h4>
                <p className="text-lg">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative text-white my-10 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top"
          style={{
            backgroundImage:
              "url('https://volvrit.s3.ap-south-1.amazonaws.com/cto4.png')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col px-4 md:px-6 py-10 lg:p-20 justify-center items-center">
          <div className="text-center">
            <div className="flex flex-wrap justify-between items-center md:gap-10">
              <h4 className="text-4xl text-left md:w-3/5 mr-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
                Core Responsibilities of a Fractional CTO
              </h4>
              <StartAProjectButton />
            </div>
            <div className="text-left mt-10">
              <h4 className="text-3xl font-semibold pb-5">
                1. Technology Roadmap and Strategy
              </h4>
              <p className="text-lg font-normal pb-10">
                A Fractional CTO helps you plan for the future by developing a
                comprehensive technology roadmap. This roadmap aligns your tech
                stack and innovations with your overall business goals. They
                identify the current gaps in technology, recommend solutions,
                and create strategies such that the infrastructure stays
                scalable, secure, and efficient. They also include timelines and
                goals to ensure that your business changes in response to
                changing market demands without causing disruption and maximizes
                growth over time.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-3xl font-semibold pb-5">
                2. Product Development & MVP Guidance
              </h4>
              <p className="text-lg font-normal pb-10">
                When launching a product, speed to market is crucial. A
                Fractional CTO is the one who makes this entire process fast by
                advising the development of your MVP. He makes sure that the
                product carries along the core features that are necessary to
                attract users, within comparatively minimal development costs
                and time. They help by monitoring this process and ensuring that
                your product is built for scalability from the get-go, a
                determination that gives license to make changes quickly based
                on user feedback and market shifts.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-3xl font-semibold pb-5">
                3. Team Leadership
              </h4>
              <p className="text-lg font-normal pb-10">
                Technical teams need strong leadership to stay focused on their
                goals and work efficiently. A Fractional CTO leads and mentors
                your development team to ensure that everything they do will be
                focused on achieving your company&apos;s business goals. They can
                also help with recruiting the right talent, setting team
                processes, and improving collaboration between tech and other
                departments. Strong leadership ensures that the team works
                productively for better outcomes.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-3xl font-semibold pb-5">
                4. Risk Management & Cybersecurity
              </h4>
              <p className="text-lg font-normal pb-10">
                In today&apos;s world, businesses face a wide array of technical
                risks, from data breaches to system downtime. An experienced
                Fractional CTO manages these risks proactively by setting up
                strong cybersecurity measures, so your systems will meet the
                standard requirements of the industry and prepares for a
                disaster through a well-planned contingency planning. They
                regularly assess vulnerabilities in your tech infrastructure and
                work to eliminate these risks before they become costly
                problems, protecting your business and its data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-white max-w-9xl mx-4 md:mx-[6vw] rounded-3xl overflow-hidden py-10 px-6 md:p-6 lg:p-16">
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
