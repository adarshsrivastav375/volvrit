import React from "react";
import Link from "next/link";
import Logo from "../common/Logo";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Accordion from "./FooterAccordion";

const Footer = () => {
  const services = [
    {
      title: "IT Services",
      links: [
        { href: "/it-services/web-development", label: "Web Development" },
        {
          href: "/it-services/mobile-development",
          label: "Mobile Development",
        },
        { href: "/it-services/crm-development", label: "CRM Development" },
        { href: "/it-services/digital-marketing", label: "Digital Marketing" },
        { href: "/it-services/erp-development", label: "ERP Development" },
        { href: "/it-services/payment-gateway", label: "Payment Gateway" },
      ],
    },
    {
      title: "Tax Services",
      links: [
        { href: "/tax-services/corporate-tax", label: "Corporate Tax" },
        { href: "/tax-services/litigation", label: "Litigation" },
        {
          href: "/tax-services/advisory-internation",
          label: "Advisory internation",
        },
        { href: "/tax-services/tds-and-accounting", label: "TDS & Accounting" },
        { href: "/tax-services/gst", label: "GST" },
        { href: "/tax-services/health-checkup", label: "Health Checkup" },
      ],
    },
    {
      title: "API Services",
      links: [
        { href: "/api-services/api-solutions", label: "API Solutions" },
        { href: "/api-services/api-development", label: "API Development" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: <FaInstagram className="text-black hover:text-primary" />,
      label: "Instagram",
    },
    {
      href: "https://facebook.com",
      icon: <FaFacebook className="text-black hover:text-primary" />,
      label: "Facebook",
    },
    {
      href: "https://twitter.com",
      icon: <FaTwitter className="text-black hover:text-primary" />,
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-white pt-10 pb-7">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        <div className="md:grid md:grid-cols-4 justify-between items-start md:gap-10 lg:gap-20">
          <div className="text-left mb-6 lg:mb-0">
            <Logo />
            <p className="text-black md:text-[11px] lg:text-sm my-5">
              Volvrit is a one-stop solution for your tech and tax needs. We
              specialize in IT and tax services that deliver effective
              implementation and excellent quality to our clients.
            </p>
            <div className="flex justify-start space-x-4 text-xl">
              {socialLinks.map((social) => (
                <Link
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.label}
                  href={social.href}
                  passHref
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 col-span-3 justify-center lg:justify-between w-full">
            {services.map((service) => (
              <div
                key={service.title}
                className="w-full hidden md:block mb-6 lg:mb-0"
              >
                <h3 className="font-bold mb-5">{service.title}</h3>
                <ul className="text-black space-y-2">
                  {service.links.map((link) => (
                    <li
                      key={link.href}
                      className="text-xs md:text-[10px] lg:text-xs"
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
              <h3 className="font-bold mb-5">Contact Address</h3>
              <ul className="text-black space-y-2">
                <li className="text-base leading-4 md:text-[10px]">
                  <span className="font-bold text-lg md:text-xs pb-1">
                    Dubai
                  </span>{" "}
                  : Al Moosa Tower 18th floor Office no #1804, sheikh zayed
                  road, Dubai,U.A.E
                </li>
                <li className="text-base leading-4 md:text-[10px]">
                  <span className="font-bold text-lg md:text-xs pb-1">
                    Australia
                  </span>{" "}
                  : 31 Tweed St, The Ponds. NSW 2769, Sydney
                </li>
                <li className="text-base leading-4 md:text-[10px]">
                  <span className="font-bold text-lg md:text-xs pb-1">
                    India
                  </span>{" "}
                  : Building No.9 Plot No.1 Moti Nagar, DLF Industrial Area, New
                  Delhi, 110015
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center mt-5 md:mt-10 text-xs text-left md:text-center lg:text-left text-black">
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
