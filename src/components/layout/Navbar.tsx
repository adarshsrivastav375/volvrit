"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavbarItems from "./Items";
import Logo from "../common/Logo";
import { FiPhone } from "react-icons/fi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMailLock } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
import useScrollPosition from "@/hooks/useScrollPosition";

const Navbar = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);
  const isScrolled = useScrollPosition(
    typeof window !== "undefined"
      ? window.innerWidth > 768
        ? window.innerHeight
        : window.innerHeight / 2
      : 720
  );

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/contact-us" ||
      pathname === "/it-services/blockchain-development"
    )
      setDarkMode(true);
    else setDarkMode(false);
  }, [pathname]);

  return (
    <section
      className={`fixed w-full top-0 z-50 ${
        isScrolled ? "text-black" : darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className={`bg-[#003070] ${"text-white"}`}>
        <div className="w-full hidden mx-auto md:px-4 lg:px-20 md:flex gap-10 items-center justify-end text-sm 2xl:text-xl py-2">
          <Link
            href={"mailto:info@volvrit.com"}
            className="flex justify-start items-center gap-3"
            aria-label="EmailId"
          >
            <MdOutlineMailLock size={20} /> hi@volvrit.com
          </Link>
          {/* <Link
            href={"tel:+917599990331"}
            className="flex justify-start items-center gap-3"
            aria-label="Phone number"
          >
            <FiPhone size={16} /> +91 7599990331
          </Link> */}
        </div>
      </div>
      <div
        className={`w-full transition-all ease-linear duration-200 ${
          isScrolled
            ? "bg-white shadow-md"
            : darkMode
            ? "bg-transparent backdrop-blur-md"
            : "bg-white shadow-md"
        }  py-3 md:py-4`}
      >
        <nav className="flex mx-auto justify-between lg:grid lg:grid-cols-5 place-items-center items-center px-2 md:px-4 lg:px-20">
          <Logo
            textColor={isScrolled || !darkMode ? "text-black" : "text-white"}
          />
          <NavbarItems
            isScrolled={isScrolled}
            pathname={pathname}
            darkMode={darkMode}
          />
          <div className="hidden lg:block place-self-end my-auto">
            <Link
              href={"/contact-us"}
              className="py-2 2xl:py-4 px-5 flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-primary via-violet-500 to-primary hover:scale-105 hover:shadow-2xl text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
              aria-label="Contact Us"
            >
              <span>Contact Us</span> <BsArrowRightCircleFill />
            </Link>
          </div>
          <Sidebar />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
