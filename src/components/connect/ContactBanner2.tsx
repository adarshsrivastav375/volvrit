"use client";

import { Post } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowUpCircleOutline, IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

interface FormValues {
  companyName: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}

export default function ConnectBanner2() {
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
        companyName: formData.companyName,
        message: formData.message,
        service: "Development",
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
    <div className="pt-20 relative text-white lg:h-fit md:h-auto lg:min-h-screen lg:pt-28 2xl:pt-56 flex flex-col justify-center items-center px-10">
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
            <div className="text-center pl-10 p-2 md:text-left md:w-2/5">
              <h1 className="text-[48px] md:text-[48px] font-bold leading-[3.5rem]      mb-4">
                Your One-Stop Solution for Website, Web App, and Mobile App
                Development
              </h1>

              <Link
                href="tel:+919889988909"
                className="bg-white flex justify-center items-center border-2  w-40 text-gray-700 px-1 py-3  rounded-full font-semibold hover:bg-gray-200 transition"
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
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-5  text-gray-50 lg:p-0 rounded-lg shadow-lg w-full lg:w-2/5 mt-8 md:mt-0 ">
              <div className="bg-transparent  rounded-xl p-7  mx-auto ">
                <h2 className="text-2xl font-semibold mb-6">
                  Let&apos;s Connect
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
                      className="w-full text-xs  px-4 py-1 border-none bg-transparent text-gray-50 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-gray-200 text-sm mt-1">
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
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-50 focus:outline-none "
                    />
                    {errors.email && (
                      <p className="text-gray-200 text-sm mt-1">
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
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-50 focus:outline-none"
                    />
                    {errors.companyName && (
                      <p className="text-gray-200 text-sm mt-1">
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
                      <p className="text-gray-200 text-sm mt-1">
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
                      <p className="text-gray-200 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full  py-2 rounded-full font-semibold bg-gray-50 text-gray-800 hover:opacity-90 transition"
                  >
                    Submit ↗
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
