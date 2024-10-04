"use client";
import { useState } from "react";

function Icon({ id, open, colored }: { id: any; open: any; colored?: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} p-1 ${
        colored ? colored : "text-black"
      }  rounded-full h-6 w-6 duration-[400ms] transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Accordion = ({ faqs, colored }: { faqs: any; colored?: any }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className={`my-5 text-black ${colored && "space-y-2"}`}>
      {faqs.map((faq: any) => {
        return (
          <div key={faq?.id}>
            <div
              className={`flex justify-between p-3 items-center gap-5 cursor-none lg:cursor-pointer ${
                colored ? colored : ""
              } ${open !== faq.id ? "border-b border-slate-50" : ""}`}
              onClick={() => handleOpen(faq?.id)}
            >
              <p className="text-base md:text-lg text-left lg:text-xl font-normal">
                &#x2022; {faq?.question}
              </p>
              <p className="min-w-[28px] xss:min-w-[40px]">
                <Icon id={faq?.id} open={open} colored={colored} />
              </p>
            </div>
            <div
              className={`ease-linear px-3 duration-200 ${
                open === faq?.id
                  ? "max-h-auto py-3 font-normal text-left xss:text-base"
                  : "max-h-0 py-0 overflow-y-hidden"
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
