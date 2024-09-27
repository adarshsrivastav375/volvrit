"use client";

import { useState } from "react";
import InlineWidget from "@calcom/embed-react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle calendar visibility
  const handleCalendarOpen = () => {
    setIsOpen(true);
  };

  // Close calendar after scheduling or some event
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        // onClick={handleCalendarOpen}
        className="py-3 justify-center 2xl:py-4 px-5 w-full mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#4280C4] hover:via-[#81B6EF] hover:to-[#4280C4] text-white border border-white/40 mt-6 text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
      >
        <span className="text-xl 2xl:text-2xl 3xl:text-2xl">Book A Call</span>{" "}
        <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
      </button>
      {isOpen && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <InlineWidget calLink="https://cal.com/volvrit/30min?month=2024-12" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
