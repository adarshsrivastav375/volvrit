import LinkBtn from "../common/LinkButton";

const HeroSection = () => {
  return (
    <div className="pt-20 relative bg-[#1E1C0B] text-white h-screen md:h-auto lg:h-screen flex flex-col justify-center items-center">
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/video/home/herosection.mp4"
        poster="/assets/video/home/herosection.mp4#t=0.1"
      />
      {/* MOBILE VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/assets/video/home/mobile_herosection.mp4"
        poster="/assets/video/home/mobile_herosection.mp4#t=0.1"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center px-4 md:px-6 lg:px-20 md:py-20 lg:py-0">
        <h1 className="text-4xl font-semibold md:w-3/5 mx-auto mb-5">
          Your Trusted Partner in IT & TAX Services
        </h1>
        <p className="w-4/5 md:w-2/3 mx-auto font-light mb-6">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque
        </p>
        <LinkBtn text="Start a Project" href="/it-services/crm-development" />
      </div>
    </div>
  );
};

export default HeroSection;
