import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import ContactForm from "./components/Form";

export default function Page() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 pt-16 pb-32 text-center md:pt-20 md:pb-40 lg:pt-24 lg:pb-40">
          <div className="text-white">
            <h1 className="text-5xl font-semibold py-8">
              Contact us
            </h1>
            <p className="text-white/70 font-light text-xl lg:w-2/3 mx-auto pb-10">
              If you need our help, have questions about how to use the platform
              or are experiencing technical difficulties, please do not hesitate
              to contact us.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-20 -mt-40 md:-mt-48">
        <ContactForm />
        <div className="grid grid-cols-1 justify-center items-center text-center md:grid-cols-2 gap-10 mt-5 mb-10 lg:my-16 lg:px-20">
          <div>
            <Link href={"mailto:noreply.volvrit@gmail.com"}>
              <span className="bg-gray-100 flex justify-center items-center w-fit mx-auto shadow-lg p-1 rounded-md">
                <MdEmail size={40} className="text-blue-600" />
              </span>
            </Link>
            <p className="text-gray-500 text-lg py-4 w-3/4 mx-auto">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <Link href={"mailto:noreply.volvrit@gmail.com"}>
              <span className="text-blue-600 font-bold text-lg hover:underline hover:underline-offset-2">
                noreply.volvrit@gmail.com
              </span>
            </Link>
          </div>
          <div>
            <Link href={"mailto:noreply.volvrit@gmail.com"}>
              <span className="bg-gray-100 flex justify-center items-center w-fit mx-auto shadow-lg p-1 rounded-md">
                <IoCall size={40} className="text-blue-600" />
              </span>
            </Link>
            <p className="text-gray-500 text-lg py-4 w-3/4 mx-auto">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <Link href={"tel:+917599990331"}>
              <span className="text-blue-600 font-bold text-lg hover:underline hover:underline-offset-2">
                +91 7599990331
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
