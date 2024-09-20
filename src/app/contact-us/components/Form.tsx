"use client";

import { countries } from "@/data/countries";
import { Post } from "@/utils/api";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "India",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    } catch (error) {}
    try {
      if (validate()) {
        setLoading(true);
        const res: any = await Post("/api/send-email", formValues);
        if (res.success) {
          handleClose();
          toast.success(res.message);
        }
      }
    } catch (error) {
      console.log("Error: ", error); // to avoid warnings from browsers
    } finally {
      setLoading(false); // to enable loading state
    }
  };

  const handleClose = () => {
    setErrors({});
    setFormValues({
      name: "",
      email: "",
      phone: "",
      message: "",
      country: "India",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white my-10 rounded-2xl shadow-lg space-y-4 w-[95%] md:w-3/4 h-full mx-auto"
    >
      <div className="text-left">
        <label className="block font-semibold text-lg text-primary/90 mb-1">
          Your name*
        </label>
        <input
          type="text"
          name="name"
          required
          value={formValues.name}
          onChange={handleChange}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 border-gray-300 ${
            errors.name ? "border-red-500" : ""
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="text-left">
        <label className="block font-semibold text-lg text-primary/90 mb-1">
          Contact email*
        </label>
        <input
          type="email"
          name="email"
          required
          value={formValues.email}
          onChange={handleChange}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 border-gray-300 ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="text-left">
        <label className="block font-semibold text-lg text-primary/90 mb-1">
          Phone Number*
        </label>
        <input
          type="text"
          name="phone"
          maxLength={20}
          required
          value={formValues.phone}
          onChange={handleChange}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 border-gray-300 ${
            errors.phone ? "border-red-500" : ""
          }`}
          placeholder="+91 838034879"
          inputMode="numeric"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="text-left">
        <label className="block font-semibold text-lg text-primary/90 mb-1">
          Country*
        </label>
        <select
          required
          name="country"
          value={formValues.country}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 border-gray-300"
        >
          {countries.map((country) => {
            return (
              <option key={country.code} value={country.name}>
                (+{country.code}) {country.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="text-left">
        <label className="block font-semibold text-lg text-primary/90 mb-1">
          Your message*
        </label>
        <textarea
          name="message"
          value={formValues.message}
          rows={5}
          required
          onChange={handleChange}
          className={`w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary/50 border-gray-300 ${
            errors.message ? "border-red-500" : ""
          }`}
          placeholder="Type your message..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="text-left">
        <p className="text-sm text-gray-500">
          By submitting this form you agree to our terms and conditions and our
          Privacy Policy which explains how we may collect, use, and disclose
          your personal information including to third parties.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {loading ? "Please wait..." : "Contact Us"}
      </button>
    </form>
  );
};

export default ContactForm;
