import StartAProjectButton from "@/components/common/StartAProjectButton";

const HeroSection = () => {
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-auto lg:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://volvrit.s3.ap-south-1.amazonaws.com/bannerai.jpg')",
        }}
      ></div>
      <div className="relative z-10 pb-20 lg:pb-0 flex flex-col justify-center items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20 pt-[15vh] md:pt-[12vh] lg:pt-[35vh]">
        <div className="text-center">
          <h4 className="text-4xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
            AI Development Services Company
          </h4>
          <p className="text-sm lg:text-base 2xl:text-lg 2xl:tex-xl 3xl:text-2xl font-extralight px-4 md:px-0 md:w-2/3 mx-auto mb-6">
            Artificial Intelligence is one of the fastest emerging markets that
            has been chosen as the flag bearer for technological innovation in
            the prosperity of any business. Volvrit is an India&apos;s leading
            company which works with highly specialized focus on advanced AI
            Development Services that enables organizations to create
            intelligent performance while maximally utilizing AI capabilities as
            drivers for more excellent decision-making and further growth. Our
            team of professionals will guide you through your AI transformation
            journey whether you are a startup or a well-established business.
          </p>
          <StartAProjectButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
