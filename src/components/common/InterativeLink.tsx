import Link from "next/link";
import { PiPhoneCall } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

const InterativeLink = () => {
  const phoneNumber = "917599990331";
  const initialMessage = `Hello! I would like to know more about your services.`;

  const encodedMessage = encodeURIComponent(initialMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 lg:bottom-5 z-40 lg:right-5">
      <Link
        href={"tel:+917599990331"}
        aria-label="Phone Number"
        title="Call us"
        rel="noopener noreferrer"
        className="bg-white shadow-md hover:shadow-corner transition-all duration-300 ease-linear p-1 rounded-md"
      >
        <PiPhoneCall
          color="white"
          className="bg-primary text-3xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl hover:bg-primary/80 transition-all duration-200 ease-linear rounded-full p-1"
        />
      </Link>
      <Link
        href={whatsappUrl}
        title="Whats App"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us"
        passHref
        className="bg-white shadow-md hover:shadow-corner transition-all duration-300 ease-linear p-[2px] rounded-md"
      >
        <IoLogoWhatsapp
          color="#25D366"
          className="hover:text-[#25D366]/80 text-3xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl transition-all duration-200 ease-linear"
        />
      </Link>
    </div>
  );
};

export default InterativeLink;
