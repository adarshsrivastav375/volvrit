"use client";

import Link from "next/link";
import Logo from "../common/Logo";
import Accordion from "./FooterAccordion";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { services, SidebarTabs } from "@/data/tabs";
import SocialMediaLinks from "../common/SocialMediaLinks";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent overflow
    } else document.body.style.overflow = "scroll";
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full bg-white text-primary z-50 transform ${isOpen ? "w-[90%] md:w-3/4" : "w-0"
          } transition-all duration-500 ease-in-out`}
      >
        <div>
          <div className="flex p-3 shadow-md z-50 justify-between items-center">
            <Logo />
            <p className="font-extrabold text-2xl" onClick={toggleSidebar}>
              x
            </p>
          </div>
          <div className="p-4 pb-40 bg-white overflow-auto h-screen">
            <Link
              href={"/"}
              aria-label={"Home"}
              onClick={handleLinkClick}
              className="relative text-lg font-semibold inline-block py-3 border-b w-full border-primary/20 cursor-pointer"
            >
              Home
            </Link>
            <Accordion
              sidebar={true}
              services={services}
              handleLinkClick={handleLinkClick}
            />
            {SidebarTabs.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.path}
                  aria-label={item.label}
                  onClick={handleLinkClick}
                  className="relative text-lg font-semibold inline-block py-3 border-b w-full border-primary/20 cursor-pointer"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="py-4">
              <p className="pb-2">Follow us at:</p>
              <SocialMediaLinks size={25} />
            </div>
          </div>
        </div>
      </div>
      <IoIosMenu size={30} onClick={toggleSidebar} className="lg:hidden" />
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
