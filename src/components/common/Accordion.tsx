"use client";
import { useState } from "react";

function Icon({ id, open }: { id: any; open: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } p-1 text-white rounded-full h-8 w-8 duration-[400ms] transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Accordion = ({ faqs }: { faqs: any }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="my-5 text-slate-100">
      {faqs.map((faq: any) => {
        return (
          <div key={faq?.id}>
            <div
              className={`flex bg-black justify-between p-3 items-center gap-5 cursor-none lg:cursor-pointer ${
                open !== faq.id ? "border-b border-slate-50" : ""
              }`}
              onClick={() => handleOpen(faq?.id)}
            >
              <p className="xsss:text-base xss:text-lg text-left text-lg font-extralight">
                Q{faq?.id}. {faq?.question}
              </p>
              <p className="min-w-[28px] xss:min-w-[40px]">
                <Icon id={faq?.id} open={open} />
              </p>
            </div>
            <div
              className={`ease-linear bg-black duration-200 ${
                open === faq?.id && "p-3"
              } ${
                open === faq?.id
                  ? "max-h-auto font-extralight text-left xss:text-base"
                  : "max-h-0 overflow-y-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
