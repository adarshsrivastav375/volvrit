"use client";

import { Post } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

interface FormValues {
  companyName: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}

export default function ConnectBanner() {
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
        companyName:formData.companyName,
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
        alt="Home page Bannr"
        src="/assets/home/banner.jpg"
        className="bg-violet-950 absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-screen z-10 flex items-center justify-center bg-transparent text-white">
        <div className="container mx-auto lg:px-0">
          <div className="flex flex-col md:flex-row items-start justify-between ">
            {/* Left Section */}
            <div className="text-center p-7 md:text-left md:w-3/5">
              <h1 className="text-2xl md:text-4xl font-bold   mb-4">
                Best Mobile App Development Services Company In India
              </h1>
              <p className="lg:text-lg text-gray-300 mb-6">
                We transform your ideas into powerful, user-friendly mobile
                applications. Our expertise is in creating innovative and
                customized apps to meet your specific needs with guaranteed
                smooth performance and an exceptional user experience.
              </p>
              <Link href="tel:+919889988909" className="bg-white  bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center items-center w-44 text-gray-50 px-1 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                 <IoCall className="text-white text-2xl mx-1" width={25} height={25} />Make a call
              </Link>
            </div>

            {/* Right Section */}
            <div className="bg-transparent p-5  text-gray-700 lg:p-0 rounded-lg shadow-lg w-full lg:w-2/5 mt-8 md:mt-0 ">
              <div className="bg-white rounded-xl p-7  mx-auto ">
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
                      className="w-full text-xs  px-4 py-1 border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-700 focus:outline-none "
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
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
                      className="w-full text-xs px-4 py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your company name"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
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
                      className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your mobile number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
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
                      className="w-full px-4 text-xs py-1 rounded-md bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Enter your message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-full font-semibold text-white hover:opacity-90 transition"
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
