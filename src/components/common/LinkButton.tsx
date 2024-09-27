import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const LinkBtn = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      aria-label={text.toLowerCase().split(" ").join("_")}
      className={`bg-gradient-to-r mt-10 from-purple-800 via-purple-400 to-purple-800 2xl:text-2xl 3xl:text-4xl hover:scale-105 hover:shadow-2xl w-fit mx-auto py-3 px-6 3xl:px-10 4xl:px-16 3xl:py-5 4xl:py-8 2xl:rounded-2xl flex justify-center items-center gap-3 transition-all duration-200 ease-in-out rounded-lg text-lg text-white font-semibold ${className}`}
    >
      {text} <FaArrowCircleRight />
    </Link>
  );
};

export default LinkBtn;
