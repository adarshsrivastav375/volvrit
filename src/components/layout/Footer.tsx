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
            <p className="text-black md:text-base lg:text-base 2xl:text-xl 4xl:text-2xl my-5">
              Our vision is to lead the IT services sector by leveraging
              technology to drive growth and efficiency for clients all around
              the world.
            </p>
            <p className="mb-1">info@volvrit.com </p>
            
            <SocialMediaLinks size={25} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 col-span-3 justify-center lg:justify-between w-full">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full hidden md:block mb-6 lg:mb-0"
              >
                <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-5">
                  {service.title}
                </h3>
                <ul className="text-black space-y-2">
                  {service.links.map((link) => (
                    <li
                      key={link.href}
                      className="text-xs md:text-lg 2xl:text-lg 3xl:text-xl 4xl:text-2xl lg:text-base"
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
              <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-5">
                Contact Address
              </h3>
              <ul className="text-black space-y-2">
                <li className="text-sm leading-4 md:text-[10px] lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">
                  <span className="font-bold text-base md:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pb-1">
                    India
                  </span>{" "}
                  : PLOT NO. A-1 , 2 ND AND 3RD FLOOR,DLF IND. AREA,NAJAFGARH
                  ROAD,MOTI NAGAR ,NEAR FUN CINEMA ,NEW DELHI,L. M. Nagar Indl.
                  Area, New Delhi, West Delhi-110015,Delhi
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center mt-2 md:mt-10 text-xs 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-left md:text-center lg:text-left text-black">
          <p>
            © {new Date().getFullYear()} - All Rights Reserved.
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
            <Link
              aria-label="Refund Policy"
              className="hover:underline mt-3 md:mt-0"
              href="/refund-policy"
              passHref
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
