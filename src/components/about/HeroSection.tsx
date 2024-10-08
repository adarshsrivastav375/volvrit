import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="relative text-white h-screen bg-[#151414] md:h-[50vh] lg:h-screen">
        <div className="flex flex-col md:flex-row z-10 absolute inset-0 top-[10vh] justify-center md:justify-between items-center max-w-9xl mx-auto px-4 md:px-6 lg:px-20">
          <div className="lg:w-3/5">
            <h1 className="text-lg lg:text-2xl bg-gradient-to-r from-[#969696] via-[#C3C2C9] to-[#7A7888] bg-clip-text text-transparent 2xl:text-3xl 3xl:text-4xl font-semibold mr-auto mb-5">
              About Us
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-semibold mr-auto mb-5">
              Leading the Way in IT Services
            </p>
          </div>
          <div className="lg:w-2/5 flex relative z-10 justify-center">
            <Image
              priority
              unoptimized
              width={100}
              height={100}
              alt="Home page Bannr"
              src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutFrame.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#151414]">
        <div className="text-white max-w-9xl mx-auto px-4 md:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 lg:gap-20">
            <div className="w-full md:w-1/3 mt-10 md:mt-0">
              <h4 className="text-4xl bg-gradient-to-r from-[#969696] via-[#C3C2C9] to-white bg-clip-text text-transparent md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
                Our Vision
              </h4>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-extralight">
                Our vision is to lead the IT services sector by leveraging
                technology to drive growth and efficiency for clients all around
                the world. Vision Our vision is to become the IT service
                provider company in this world. Innovative solutions and
                delivery combined with excellent customer service make us the
                most reliable name in IT services.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 lg:gap-20 mt-10 pb-10">
            <div className="w-full md:w-1/3">
              <h4 className="text-4xl bg-gradient-to-r from-[#969696] via-[#C3C2C9] to-white bg-clip-text text-transparent md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl mb-5 font-semibold">
                Our Mission
              </h4>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-extralight">
                Our mission is targeted towards empowering organizations through
                supplying bespoke technology solutions to leverage efficiency,
                security, and growth. We commit ourselves to understanding our
                clients unique challenges and, by using our expertise, setting
                up tailored strategies that align with strategic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
