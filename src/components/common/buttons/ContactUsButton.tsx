"use client";

import { useState } from "react";
import ContactUsModal from "../modals/ContactUsModal";

const ContactUsButton = ({ className: classes }: { className?: string }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const handleModal = () => {
    setVisible(true);
  };
  return (
    <>
      <ContactUsModal isVisible={isVisible} setVisible={setVisible} />
      <div
        onClick={handleModal}
        className={`py-2 px-6 ${
          classes ? classes : "hidden lg:block"
        } cursor-pointer absolute left-1/2 -translate-x-1/2 -bottom-16 rounded-lg bg-white text-primary transition-all text-sn ease-in-out`}
      >
        Contact Us
      </div>
    </>
  );
};

export default ContactUsButton;
