import Link from "next/link";
import NavbarItems from "./Items";
import Logo from "../common/Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white text-black py-4 shadow-[0_4px_6px_rgb(0,0,0,0.1)] z-50">
      <div className="flex justify-between md:grid md:grid-cols-3 items-center px-2 md:px-4 lg:px-24">
        <Logo />
        <NavbarItems />
      </div>
    </div>
  );
};

export default Navbar;
