import Link from "next/link";
import Logo from "../common/Logo";
import { services } from "@/data/tabs";
import Accordion from "./FooterAccordion";
import SocialMediaLinks from "../common/SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-5 md:pt-10 pb-4 md:pb-7">
      <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-20 2xl:px-40">
        <div className="md:grid md:grid-cols-4 justify-between items-start md:gap-10 lg:gap-20">
          <div className="text-left mb-6 lg:mb-0">
            <Logo size={50} />
            <p className="text-black md:text-[11px] lg:text-sm 2xl:text-xl 4xl:text-2xl my-5">
              Volvrit is a one-stop solution for your IT and Legal needs. We
              specialize in IT and Legal services that deliver effective
              implementation and excellent quality to our clients.
            </p>
            <SocialMediaLinks size={25} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 col-span-3 justify-center lg:justify-between w-full">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full hidden md:block mb-6 lg:mb-0"
              >
                <h3 className="font-bold 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-5">
                  {service.title}
                </h3>
                <ul className="text-black space-y-2">
                  {service.links.map((link) => (
                    <li
                      key={link.href}
                      className="text-xs md:text-[10px] 2xl:text-lg 3xl:text-xl 4xl:text-2xl lg:text-xs"
                    >
                      <Link
                        aria-label={link.label}
                        className="hover:underline"
                        href={link.href}
                        passHref
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Accordion services={services} />
            <div className="w-full mb-6 lg:mb-0">
              <h3 className="font-bold 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-5">
                Contact Address
              </h3>
              <ul className="text-black space-y-2">
                <li className="text-sm leading-4 md:text-[10px] lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                  <span className="font-bold text-base md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-1">
                    India
                  </span>{" "}
                  : Building No.9 Plot No.1 Moti Nagar, DLF Industrial Area, New
                  Delhi, 110015
                </li>
                <li className="text-sm leading-4 md:text-[10px] lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                  <span className="font-bold text-base md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-1">
                    Dubai
                  </span>{" "}
                  : Al Moosa Tower 18th floor Office no #1804, sheikh zayed
                  road, Dubai,U.A.E
                </li>
                <li className="text-sm leading-4 md:text-[10px] lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                  <span className="font-bold text-base md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-1">
                    Australia
                  </span>{" "}
                  : 31 Tweed St, The Ponds. NSW 2769, Sydney
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center mt-2 md:mt-10 text-xs 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-left md:text-center lg:text-left text-black">
          <p>
            Copyright © {new Date().getFullYear()} Volvrit. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row justify-start md:space-x-4">
            <Link
              aria-label="Terms and Conditions"
              className="hover:underline"
              href="/terms-and-conditions"
              passHref
            >
              Terms and Conditions
            </Link>
            <Link
              aria-label="Privacy Policy"
              className="hover:underline mt-3 md:mt-0"
              href="/privacy-policy"
              passHref
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
