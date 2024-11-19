"use client";

import { countries } from "@/data/countries";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { toast } from "react-toastify";
import { initiateRazorpayPayment } from "./Razorpay";

const PayNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    amount: "",
    country: "",
    address: "",
    currency: "",
    paymentFor: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox")
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted)
      return toast.warn("Please accept the terms and conditions to proceed.");

    console.log("Form Data Submitted: ", formData);
    initiateRazorpayPayment(formData);
    // Add your form submission logic here
  };
  return (
    <div className="w-full lg:w-1/2 h-fit bg-black p-6 md:p-8 2xl:p-12 3xl:p-14 text-white 4xl:p-16 border border-b-4 border-white/40 rounded-2xl">
      <Script async src="https://checkout.razorpay.com/v1/checkout.js" />
      <form onSubmit={handleSubmit}>
        <p className="text-xl text-white 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl mb-4 2xl:mb-10 font-extralight">
          Complete Your Payment Safely and Quickly
        </p>
        {/* Payment For */}
        <label className="block">Payment For</label>
        <input
          type="text"
          name="paymentFor"
          value={formData.paymentFor}
          onChange={handleChange}
          placeholder="Enter payment reason"
          className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
          required
        />
        {/* Amount */}
        <div className="flex flex-col md:flex-row gap-5 items-center w-full">
          <div className="w-full md:w-1/2">
            <label className="block text-lg md:text-base">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter payment amount:"
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none md:mb-4"
              required
            />
          </div>
          {/* Name */}
          <div className="w-full md:w-1/2">
            <label className="block text-lg md:text-base">
              Company/Person Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter company / person name"
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              required
            />
          </div>
        </div>
        {/* Address */}
        <label className="block">Complete Address</label>
        <textarea
          name="address"
          rows={1}
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
          required
        ></textarea>
        {/* City */}
        <div className="flex flex-col md:flex-row gap-5 items-center w-full">
          <div className="w-full md:w-1/2">
            <label className="block text-lg md:text-base">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none md:mb-4"
              required
            />
          </div>

          {/* State */}
          <div className="w-full md:w-1/2">
            <label className="block text-lg md:text-base">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center w-full">
          <div className="w-full md:w-1/2">
            {/* Country */}
            <label className="block text-lg md:text-base">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none md:mb-4"
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              {countries.map((country) => {
                return (
                  <option key={country?.id} value={country?.name}>
                    {country?.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Currency Dropdown */}
          <div className="w-full md:w-1/2">
            <label className="block text-lg md:text-base">
              Select Currency
            </label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full p-3 md:p-2 2xl:p-3 3xl:p-4 mt-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
              <option value="DHIRAM">DHIRAM</option>
            </select>
          </div>
        </div>
        {/* Terms and Conditions */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2 w-8 h-8 md:w-5 md:h-5"
          />
          <label className="text-sm">
            I accept the{" "}
            <Link
              href="/terms-and-conditions"
              className="text-blue-600 underline"
            >
              Terms & Conditions
            </Link>{" "}
            ,
            <Link href="/refund-policy" className="text-blue-600 underline">
              {" "}
              Refund Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r text-xl from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white py-3 px-4 rounded-lg transition"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PayNowForm;
