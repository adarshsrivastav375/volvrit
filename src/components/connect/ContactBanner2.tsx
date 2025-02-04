"use client";

import { Post } from "@/utils/api";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import ContactUsModal from "../common/ContactUsModal";

interface FormValues {
  companyName: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});
export default function ConnectBanner2({
  setModalOpen,
}: {
  setModalOpen: any;
}) {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    services: [],
    message: "",
  });

  const servicesOptions = [
    "App Development",
    "Web Development",
    "API Development",
    "Digital Marketing",
    "CRM Development",
    "UI/UX Design",
  ];

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServicesChange = (service: string) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: newServices });
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
    }
  };

  return (
    <div className="pt-20 relative max-w-7xl m-auto text-white lg:h-fit md:h-auto lg:min-h-screen lg:pt-36 2xl:pt-56 flex flex-col justify-center items-center px-1 sm:p-20">
      <Image
        priority
        unoptimized
        width={100}
        height={100}
        alt="Home page Banner"
        src="/assets/banners/banner_bg.svg"
        className="bg-gray-50 absolute inset-0 blur-[0.7px] w-full h-full bg-center object-cover"
      />
      <div className="min-h-[90vh] z-10 flex items-center justify-center bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
        <div className="container mx-auto lg:px-0">
          <div className="flex flex-col md:flex-row items-start justify-around">
            {/* Left Section */}
            <div className="text-left sm:pl-10 p-2 md:text-left w-full sm:w-3/5">
              <h1
                className={`text-[28px] md:text-[44px] leading-[2.5rem] lg:leading-[4.5rem]  ${nunito.className} font-extrabold mb-4 lg:text-[48px] 2xl:text-7xl 3xl:text-8cxl`}
              >
                Your One-Stop Solution for Website, Web App, and Mobile App
                Development
              </h1>
              <Link
                href={""}
                onClick={() => {
                  setModalOpen(true);
                }}
                className="bg-white flex justify-center items-center border-2  w-40 mr-auto sm:mr-0 text-gray-700 px-1 py-3  rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Contact Us
                <IoArrowUpCircleOutline
                  className="text-gray-900 rotate-45 text-2xl ml-1"
                  width={25}
                  height={25}
                />
              </Link>
            </div>

            {/* Right Section */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500   text-gray-50 lg:p-0 rounded-2xl shadow-lg w-11/12 m-auto lg:m-0 lg:w-2/5 mt-8 md:mt-0 ">
              <div className="bg-transparent  rounded-xl p-7  mx-auto ">
                <h2 className="text-2xl font-semibold flex mb-2">
                  Hello{" "}
                  <Image
                    src={"assets/banners/handHii.svg"}
                    width={20}
                    height={20}
                    alt="hand"
                    className="ml-1"
                  />
                </h2>
                <h2 className="text-sm font-thin mb-6 ">
                  Got Questions? Talk to our <br />{" "}
                  <span className="font-bold">Experts</span>
                </h2>
                <form className="" onSubmit={handleSubmit}>
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium ">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-xs  px-4 py-0 border-none bg-transparent text-gray-50 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm font-thin mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 border-b-2 border-gray-300">
                    <label className="block text-xs font-medium">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-xs px-4 py-0 rounded-md bg-transparent text-gray-50 focus:outline-none "
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
                    <label className="block text-xs font-medium ">
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
                  <div className="mb-4 border-b-2 border-gray-300 ">
                    <label className="block text-xs font-medium">Message</label>
                    <input
                      id="message"
                      name="message"
                      type="text"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-5 0 focus:outline-none"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
