"use client";

import Link from "next/link";
import { useState } from "react";
import { services, tabs } from "@/data/tabs";
import { usePathname } from "next/navigation";

const NavbarItems = () => {
  const pathName = usePathname();
  const [show, setShow] = useState(false);
  const [showLink, setLinkShow] = useState("");
  const isActive = (path: string) => pathName === path;

  const handleShowChildren = () => {
    setShow(!show);
    setLinkShow("");
  };
  const handleGroupHover = (path: string) => {
    setLinkShow(path);
  };
  return (
    <nav className="hidden lg:flex place-self-center col-span-3 flex-row justify-center items-center text-lg font-medium gap-10">
      {tabs.map((item) => (
        <div key={item.id} className="relative group">
          <Link
            href={item.path}
            aria-label={item.label}
            onMouseEnter={() => {
              if (item?.label === "Services") handleShowChildren();
            }}
            className="relative inline-block py-1 cursor-pointer hover:text-brightColor"
          >
            {item.label}
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left transition-transform ${
                isActive(item.path) ? "scale-x-100" : "scale-x-0"
              } group-hover:scale-x-100`}
            ></span>
          </Link>

          {item?.label === "Services" && show && (
            <div
              onMouseLeave={handleShowChildren}
              className="absolute left-0 pt-6 pb-4 text-black bg-white shadow-lg rounded-b-xl group-hover:opacity-100 opacity-0 transition-opacity"
            >
              <div className={`flex`}>
                {services.map((service: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`px-8 ${
                        index === 1 && "border-x border-black"
                      }`}
                    >
                      <h2 className="text-xl font-medium text-left text-nowrap">
                        {service?.title}
                      </h2>
                      <ul>
                        {service?.links.map((link: any, index: number) => {
                          return (
                            <li key={index} className="my-3 relative group">
                              <Link
                                onClick={() => setShow(false)}
                                onMouseEnter={() => handleGroupHover(link.href)}
                                className="text-sm relative text-nowrap py-3 rounded-lg transition-all duration-200 ease-linear font-light"
                                href={link?.href}
                                passHref
                              >
                                {link?.label}
                              </Link>
                              <span
                                className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-black/50 transform origin-left transition-transform ${
                                  showLink === link.href &&
                                  "group-hover:scale-x-100"
                                } ${
                                  isActive(link.href)
                                    ? "scale-x-100"
                                    : "scale-x-0"
                                }`}
                              ></span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavbarItems;
