import StartAProjectButton from "../common/StartAProjectButton";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-tl from-black via-violet-950 to-black text-white py-16 2xl:py-24 3xl:py-32">
      <div className="max-w-9xl mx-auto px-4 md:px-8 lg:px-20 2xl:px-40 text-left">
        <h2 className="text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-4 !leading-snug">
          <strong className="font-bold">
            Your website is your 24/7 sales <br />
            person.{" "}
          </strong>
          <span className="font-extralight">
            Don&apos;t just settle for an ordinary one. <br />
            Go beyond with Volvrit
          </span>
        </h2>
        <StartAProjectButton />
      </div>
    </div>
  );
};

export default CTASection;
