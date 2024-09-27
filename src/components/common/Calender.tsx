"use client";

import { useState } from "react";
import InlineWidget from "@calcom/embed-react";

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
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleCalendarOpen}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Schedule a Call
      </button>
      {isOpen && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <InlineWidget calLink="https://cal.com/volvrit/30min" />

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
