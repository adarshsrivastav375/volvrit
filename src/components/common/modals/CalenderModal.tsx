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
      <div className="w-[90%] lg:min-w-[1024px] 2xl:min-w-[1280px] bg-black">
        <iframe
          src="https://cal.com/volvrit"
          width="100%"
          height="800"
        ></iframe>
      </div>
    </Modal>
  );
};

export default CalenderModal;
