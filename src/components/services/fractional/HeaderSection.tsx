import StartAProjectButton from "@/components/common/StartAProjectButton";

const HeeaderSection = () => {
  return (
    <div className="relative h-auto lg:h-screen bg-black overflow-hidden">
      <div
        className="absolute inset-0 w-full mt-20 h-auto lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://volvrit.s3.ap-south-1.amazonaws.com/ctobanner.png')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center ml-5 md:ml-20 items-start max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-[15vh] md:pt-[10vh] lg:pt-[35vh]">
        <div className="text-left">
          <h4 className="text-xl w-full mx-auto md:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-2 md:mb-5 font-semibold">
            Volvrit- Your <br /> Fractional CTO
          </h4>
          <p className="text-sm md:text-lg md:w-3/4 mr-auto mb-3 md:mb-6">
            The Tech Leadership You Need, Without the Full-Time Commitment
          </p>
          <StartAProjectButton marginBottom="mb-10" text="Hire Us" />
        </div>
      </div>
    </div>
  );
};

export default HeeaderSection;
