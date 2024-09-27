"use client";

import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";

interface ModalProps {
  showLogo?: any;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  children,
  showLogo,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-white backdrop-blur-lg bg-opacity-10"></div>
      <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl overflow-hidden w-fit z-10 relative">
        <div className="bg-white overflow-scroll no-scrollbar max-h-[80vh] md:max-h-[90vh]">
          <div className="flex justify-between items-center p-4">
            {showLogo && (
              <span
                className={`text-xl md:text-base lg:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-6xl 5xl:text-7xluppercase font-semibold`}
              >
                Volvrit
              </span>
            )}
            <p className="w-full flex justify-end">
              <RxCross1
                size={24}
                className="cursor-pointer text-primary"
                onClick={onClose}
              />
            </p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
