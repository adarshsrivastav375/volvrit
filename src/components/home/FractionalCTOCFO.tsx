import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const FractionalCFOCto: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-9xl p-4 md:p-6 lg:px-20 lg:py-10">
      <h4 className="text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold mb-4">
        Hire Fractional Chief Officer
      </h4>
      <p className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-8 text-center w-2/3 mx-auto">
        They are ideal for startups and growing businesses that need expert tech
        direction without the commitment and cost of a full-time executive.
      </p>

      <div className="flex w-full gap-10 space-x-4 lg:px-20">
        <div className="flex-1 p-6 bg-[#0051B3] text-white rounded-lg shadow-lg">
          <h5 className="text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2">
            Fraction CTO
          </h5>
          <ul className="list-disc list-inside mb-4 space-y-2 font-light text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            <li>Target specific tech sectors</li>
            <li>Manage dev teams and tech hiring</li>
            <li>Converts business needs to tech solutions</li>
            <li>Focuses on cost efficiency in tech</li>
            <li>Innovates within existing tech framework</li>
          </ul>
          <Link
            href="/fractional-cto"
            className="py-3 w-full justify-center 2xl:py-4 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-[#3F6DA6] border-2 border-slate-100/30 text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">HIRE CTO</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
        </div>

        {/* Fractional CFO Card */}
        <div className="flex-1 p-6 bg-gray-200 text-black rounded-lg shadow-lg">
          <h5 className="text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2">
            Fraction CFO
          </h5>
          <ul className="list-disc list-inside mb-4 space-y-2 font-light text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            <li>Manages financial strategy and planning</li>
            <li>Offers expertise in financial forecasting</li>
            <li>Cost-effective financial leadership</li>
            <li>Improves financial processes and controls</li>
            <li>Supports fundraising and investor relations</li>
          </ul>
          <Link
            href="/fractional-cfo"
            className="py-3 w-full justify-center 2xl:py-4 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-transparent text-[#0051B3] border-2 border-[#0051B3]/50 text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
          >
            <span className="text-xl 2xl:text-2xl">HIRE CFO</span>{" "}
            <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FractionalCFOCto;
