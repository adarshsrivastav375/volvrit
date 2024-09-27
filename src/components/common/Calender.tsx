"use client";

import { useState } from "react";
import CalenderModal from "./modals/CalenderModal";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCalendarOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={handleCalendarOpen}
        className="py-3 justify-center 2xl:py-4 px-5 w-full mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white border border-white/40 mt-6 text-base md:text-3xl transition-all duration-200 ease-in-out"
      >
        <span className="text-2xl 3xl:text-2xl">Book A Call</span>{" "}
        <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
      </button>
      <CalenderModal isVisible={isOpen} setIsVisible={setIsOpen} />
    </div>
  );
};

export default Calendar;
