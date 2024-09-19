import Link from "next/link";
import NavbarItems from "./Items";
import Logo from "../common/Logo";
import { FiPhone } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMailLock } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="bg-primary fixed w-full top-0 z-50">
      <div className="container hidden mx-auto lg:px-20 md:flex gap-10 items-center justify-start text-white text-sm py-1">
        <Link
          href={"mailto:volvrit@gmail.com"}
          className="flex justify-start items-center gap-3"
          aria-label="EmailId"
        >
          <MdOutlineMailLock size={20} /> volvrit@gmail.com
        </Link>
        <Link
          href={"tel:+917599990331"}
          className="flex justify-start items-center gap-3"
          aria-label="Phone number"
        >
          <FiPhone size={16} /> +91 7599990331
        </Link>
      </div>
      <div className="w-full bg-white text-primary py-3 md:py-4 shadow-[0_4px_6px_rgb(0,0,0,0.1)]">
        <nav className="flex container mx-auto justify-between lg:grid lg:grid-cols-5 place-items-center items-center px-2 md:px-4 lg:px-20">
          <Logo />
          <NavbarItems />
          <div className="hidden lg:block place-self-end my-auto">
            <Link
              href={"tel:+917599990331"}
              className="py-2 px-4 rounded-lg bg-primary hover:bg-primary/80 text-white text-sm transition-all ease-in-out"
              aria-label="Phone number"
            >
              Book A Call
            </Link>
          </div>
          <IoIosMenu size={30} className="text-primary lg:hidden" />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
