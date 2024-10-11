import Image from "next/image";

const ImportanceAI = () => {
  return (
    <>
      <div className="max-w-9xl mx-auto p-4 md:p-6 lg:px-20 lg:py-10">
        <div className="flex flex-col mb-10 md:flex-row justify-between items-center gap-5 md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2 order-last md:order-first">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/cfo2.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 order-first md:order-last md:text-left">
            <h4 className="text-3xl mt-5 md:mt-0 md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              Introduction To Fractional CFO Services
            </h4>
            <p className="text-lg font-extralight">
              A Fractional CFO provides great financial management at part-time
              levels. This allows businesses to better their finances but not
              necessarily have a full-time CFO. These people will help with
              financial planning, managing cash flow, and assessing risks
              associated, all of which put your firm on solid financial ground.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5 font-semibold">
              Why Your Business Needs a Fractional CFO
            </h4>
            <p className="text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl mb-5 font-semibold">
              Cost-Effective Financial Leadership
            </p>
            <p className="text-lg font-extralight">
              Hiring a Fractional CFO allows businesses to access senior-level
              financial expertise without the financial burden of a full-time
              hire. The CFO handles budgeting to strategic financial decisions
              to ensure crucial insights without great increases in costs in a
              company.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Mobile Banner"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/cfo3.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportanceAI;
