import Image from "next/image";
import LinkBtn from "../common/LinkButton";

const HeroSection = () => {
  return (
    <div className="pt-20 relative bg-violet-950 text-white h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        fill
        priority
        unoptimized
        alt="Background"
        src="/assets/home/herosection_bg.jfif"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-semibold w-3/5 mx-auto mb-5">
          Your Trusted Partner in IT & TAX Services
        </h1>
        <p className="w-2/3 mx-auto font-light text-sm mb-6 opacity-60">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque
        </p>
        <LinkBtn text="Start a Project" href="/project" />
      </div>
    </div>
  );
};

export default HeroSection;
