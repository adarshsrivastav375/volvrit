import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-4 shadow-[0_4px_6px_rgb(0,0,0,0.1)] z-50">
      <div className="flex justify-between md:grid md:grid-cols-3 lg:flex lg:justify-between items-center px-2 md:px-4 lg:px-24">
        <Link
          href={"/"}
          aria-label="Home"
          className="mx-auto w-fit lg:w-auto lg:mx-0"
        >hey</Link>
        <div className="flex justify-end">
          <Link href="/login" aria-label="login page"></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
