"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface AccordionItemProps {
  title: string;
  content: [];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 border-b border-primary/20"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-lg font-semibold">
            {isOpen ? (
              <RiArrowDropUpLine size={35} />
            ) : (
              <RiArrowDropDownLine size={35} />
            )}
          </p>
        </div>
      </button>
      <div
        className={`duration-200 ease-linear ${
          !isOpen ? "max-h-0 overflow-y-hidden" : "max-h-auto"
        }`}
      >
        <div className="py-2 bg-white">
          {content.map((link: any) => (
            <li key={link.href} className="text-sm pl-2 list-none pb-1">
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
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ services }: { services: any }) => {
  return (
    <div className="w-full max-w-md mx-auto pb-4 md:hidden">
      {services.map((service: any) => (
        <React.Fragment key={service.title}>
          <AccordionItem title={service.title} content={service.links} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
