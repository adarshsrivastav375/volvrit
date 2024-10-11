"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavbarItems from "./Items";
import Logo from "../common/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { MdOutlineMailLock } from "react-icons/md";
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
      pathname === "/it-services/blockchain-development" ||
      pathname === "/it-services/mobile-development" ||
      pathname === "/it-services/web-development" ||
      pathname === "/it-services/crm-development" ||
      pathname === "/it-services/shopify-development" ||
      pathname === "/it-services/saas-development" ||
      pathname === "/it-services/ui-ux-development" ||
      pathname === "/about" ||
      pathname === "/fractional-cto" ||
      pathname === "/fractional-cfo" ||
      pathname === "/api-services/api-development" ||
      pathname === "/it-services/artificial-intelligence-development"
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
        <div className="w-full hidden mx-auto md:px-4 lg:px-20 md:flex gap-5 items-center justify-end text-sm 2xl:text-xl py-2">
          {/* <Link
            href={"mailto:info@volvrit.com"}
            className="flex justify-start items-center gap-3 pr-3 2xl:pr-4 3xl:pr-5 4xl:pr-10"
            aria-label="EmailId"
          >
            <MdOutlineMailLock size={20} /> hi@volvrit.com
          </Link> */}
          <Link
            passHref
            target="_blank"
            aria-label="Client Login"
            href={"https://crm.volvrit.com/"}
            className="hover:underline hover:underline-offset-2 text-xs transition-all font-semibold duration-500 ease-linear"
          >
            Client Login
          </Link>
          <Link
            passHref
            target="_blank"
            aria-label="Employee Login"
            href={"https://crm.volvrit.com/"}
            className="hover:underline hover:underline-offset-2 text-xs transition-all font-semibold duration-500 ease-linear pr-1 2xl:pr-2 3xl:pr-3 4xl:pr-5"
          >
            Employee Login
          </Link>
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
            <button className="relative py-3 2xl:py-4 px-5 text-white bg-gradient-to-r from-primary via-violet-500 to-primary rounded-lg overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-violet-500 to-primary opacity-50 blur-xl -z-10"></span>
              <span className="relative z-20">
                <Link
                  href={"/contact-us"}
                  aria-label="Contact Us"
                  className="flex gap-2 items-center"
                >
                  <span>Contact Us</span> <BsArrowRightCircleFill />
                </Link>
              </span>
              <span className="absolute inset-0 bg-white animate-gradient-rotate blur-lg z-0"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-primary rounded-lg z-10 m-[1.5px]"></span>
            </button>
          </div>
          <Sidebar />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
