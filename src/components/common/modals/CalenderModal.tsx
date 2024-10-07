import { useEffect } from "react";
import Modal from "../Modal";

const CalenderModal = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: any;
  setIsVisible: any;
}) => {
  const handleclose = () => {
    setIsVisible(false);
  };


  return (
    <Modal isVisible={isVisible} onClose={handleclose} showLogo={true}>
      <div
        style={{ height: "542px", width: "100%;" }}
        className="w-full md:min-w-[524px] lg:min-w-[1024px] xl:min-w-[1096px] 2xl:min-w-[1380px] bg-black"
      >
        <iframe
          src="https://cal.com/volvrit/start-your-project-with-volvrit"
          width="100%"
          height="800"
        ></iframe>
      </div>
    </Modal>
  );
};

export default CalenderModal;
