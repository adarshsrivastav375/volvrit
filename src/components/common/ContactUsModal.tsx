import { useState } from "react";
import Image from "next/image";
import { IoArrowUpCircleOutline, IoCall } from "react-icons/io5";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";
import Link from "next/link";

const ContactUsModal = ({ isOpen, onClose }: any) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors: any = {};
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email is required.";
    }
    // if (formData.services.length === 0) {
    //   newErrors.services = ["Please select at least one service."];
    // }
    if (formData.phone.length < 10) {
      newErrors.phone = ["Must be at least 10 characters."];
    }
    if (formData.message.length < 10) {
      newErrors.message = ["Please describe your message."];
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setErrors({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        services: [],
        message: "",
      });
      const data = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company_name: formData.companyName,
        message: formData.message,
        service: "",
      };
      const response: any = await Post(
        "https://crm.volvrit.com/api/contact-us",
        data
      );
      if (response?.message) toast.success(response?.message);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        services: [],
        message: "",
      });
      setSubmitted(true);
    }
  };

  // Handle thank-you button click: close modal and reset state
  const handleThankYouButton = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Modal container */}
      <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-gray-50 lg:p-0 rounded-2xl shadow-lg w-11/12 m-auto lg:m-0 lg:w-2/5 mt-8 md:mt-0 z-50">
        {/* Close button */}
        <div className="absolute top-2 right-2">
          <button
            onClick={onClose}
            className="text-gray-50 m-2 hover:text-gray-200"
          >
            &#10005;
          </button>
        </div>
        {submitted ? (
          // Thank you message view
          <div className="bg-transparent rounded-xl p-7 mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p className="text-sm font-thin mb-6">
             For instant contact, Please tab on call now button.
            </p>
            <Link href={"tel:"} >
              <button
                onClick={handleThankYouButton}
                className="w-2/5 m-auto flex justify-center items-center py-2 rounded-full font-semibold bg-gray-50 text-gray-800 hover:opacity-90 transition"
              >
                <IoCall width={26} height={26} className="mx-2 text-xl" />
                Call Now
              </button>
            </Link>
          </div>
        ) : (
          // Form view
          <div className="bg-transparent rounded-xl p-7 mx-auto">
            <h2 className="text-2xl font-semibold flex mb-2">
              Hello{" "}
              <Image
                src="/assets/banners/handHii.svg"
                width={20}
                height={20}
                alt="hand"
                className="ml-1"
              />
            </h2>
            <h2 className="text-sm font-thin mb-6">
              Got Questions? Talk to our <br />
              <span className="font-bold">Experts</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 border-b-2 border-gray-300">
                <label className="block text-xs font-medium">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-xs px-4 py-0 border-none bg-transparent text-gray-50 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm font-thin mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="mb-4 border-b-2 border-gray-300">
                <label className="block text-xs font-medium">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-xs px-4 py-0 rounded-md bg-transparent text-gray-50 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-thin mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4 border-b-2 border-gray-300">
                <label className="block text-xs font-medium">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full text-xs px-4 py-0 rounded-md bg-transparent text-gray-50 focus:outline-none"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm font-thin mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div className="mb-4 border-b-2 border-gray-300">
                <label className="block text-xs font-medium">
                  Your Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-50 focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm font-thin mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="mb-4 border-b-2 border-gray-300">
                <label className="block text-xs font-medium">Message</label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-50 focus:outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm font-thin mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 rounded-full font-semibold bg-gray-50 text-gray-800 hover:opacity-90 transition"
              >
                Submit{" "}
                <IoArrowUpCircleOutline
                  className="text-gray-900 rotate-45 text-2xl ml-1"
                  width={25}
                  height={25}
                />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsModal;
