import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface Classes {
  marginBottom?: string; // Add your custom styles here. For example: marginBottom: '1rem' or marginBottom: '2rem' etc.
  text?: string; // Add your custom styles here. For example: text: "Learn More"
  href?: string; // Add your custom styles here. For example: href: "/contact-us"
}

const StartAProjectButton = ({
  marginBottom,
  text = "Start a Project",
  href = "/contact-us",
}: Classes) => {
  return (
    <Link
      href={href}
      aria-label="Contact Us"
      className={`relative inline-flex items-center py-3 2xl:py-4 px-6 overflow-hidden text-lg 2xl:text-xl bg-gradient-to-r from-primary via-violet-500 to-primary 3xl:text-2xl 4xl:text-3xl  font-medium text-white rounded-lg 2xl:rounded-xl hover:text-white group hover:bg-gray-50 ${marginBottom}`}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="relative flex justify-center items-center gap-2">
        {text} <BsArrowRightCircleFill />
      </span>
    </Link>
  );
};

export default StartAProjectButton;
