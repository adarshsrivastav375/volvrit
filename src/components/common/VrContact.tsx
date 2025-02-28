"use client";
import { faqs } from "@/data/home/faqs";
import Accordion from "../common/Accordion";
import Image from "next/image";
import { useState } from "react";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const VrContact = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const validationErrors = validate();
    setErrors(validationErrors);
  
    // Stop form submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  
    try {
      const data = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company_name: formData.companyName,
        message: formData.message,
        service: "Ar Vr",
      };
  
      const response: any = await Post(
        "https://crm.volvrit.com/api/contact-us",
        data
      );
  
      if (response?.message) toast.success(response?.message);
      
      // Reset form only after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        subject: "",
        message: "",
      });
  
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  

  return (
    <div id="contact" className="bg-[#121212] max-w-9xl mx-auto pt-8 pb-4 md:pb-8 px-4 md:px-8 lg:px-28 2xl:px-40">
      <div className="text-left mb-8 3xl:my-16 4xl:my-20 text-gray-400">
        <h2 className="text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-gray-50 mb-4 font-semibold">
          What our customers say about us
        </h2>
        <p className="font-light mb-4">
          AR and VR are transforming how we interact with the world. Whether you
          desire to enhance your brand, better engage customers, or unlock
          revolutionary training and learning experiences, AR and VR can unlock
          the doors of the future.{" "}
        </p>
        <p className="font-light">
          Contact us to find out how we can assist you in discovering these
          technologies and transforming your business.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10">
        <Image
          width={400}
          height={400}
          alt="image"
          src={"/assets/arvr/contactUs.png"}
          className="w-full h-[75vh] object-fill rounded-xl"
        />
        <div>
          <p className="text-gray-400 text-sm">
            Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can
            reach us.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 p-4 text-gray-50">
            <div>
              <label className="block">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              )}
            </div>
            <div>
              <label className="block">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <label className="block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-b outline-none p-2 w-full"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            {/* <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button> */}
            <button
              type="submit"
              aria-label="Contact Us"
              className={`relative inline-flex items-center py-3 2xl:py-4 px-3 md:px-6 overflow-hidden text-base md:text-lg 2xl:text-xl bg-gradient-to-r from-primary via-violet-500 to-primary 3xl:text-2xl 4xl:text-3xl  font-medium text-white rounded-lg 2xl:rounded-xl hover:text-white group hover:bg-gray-50 `}
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="relative flex justify-center items-center gap-2">
                Submit <BsArrowRightCircleFill />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VrContact;
