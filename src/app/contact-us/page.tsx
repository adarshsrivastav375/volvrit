// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import Link from "next/link";
// import ContactForm from "./components/Form";

// export default function Page() {
//   return (
//     <>
//       <div className="bg-primary">
//         <div className="container mx-auto px-4 md:px-6 lg:px-20 pt-16 pb-32 text-center md:pt-20 md:pb-40 lg:pt-24 lg:pb-40">
//           <div className="text-white">
//             <h1 className="text-5xl font-semibold py-8">
//               Contact us
//             </h1>
//             <p className="text-white/70 font-light text-xl lg:w-2/3 mx-auto pb-10">
//               If you need our help, have questions about how to use the platform
//               or are experiencing technical difficulties, please do not hesitate
//               to contact us.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 md:px-6 lg:px-20 -mt-40 md:-mt-48">
//         <ContactForm />
//         <div className="grid grid-cols-1 justify-center items-center text-center md:grid-cols-2 gap-10 mt-5 mb-10 lg:my-16 lg:px-20">
//           <div>
//             <Link href={"mailto:noreply.volvrit@gmail.com"}>
//               <span className="bg-gray-100 flex justify-center items-center w-fit mx-auto shadow-lg p-1 rounded-md">
//                 <MdEmail size={40} className="text-blue-600" />
//               </span>
//             </Link>
//             <p className="text-gray-500 text-lg py-4 w-3/4 mx-auto">
//               Email us for general queries, including marketing and partnership
//               opportunities.
//             </p>
//             <Link href={"mailto:noreply.volvrit@gmail.com"}>
//               <span className="text-blue-600 font-bold text-lg hover:underline hover:underline-offset-2">
//                 noreply.volvrit@gmail.com
//               </span>
//             </Link>
//           </div>
//           <div>
//             <Link href={"mailto:noreply.volvrit@gmail.com"}>
//               <span className="bg-gray-100 flex justify-center items-center w-fit mx-auto shadow-lg p-1 rounded-md">
//                 <IoCall size={40} className="text-blue-600" />
//               </span>
//             </Link>
//             <p className="text-gray-500 text-lg py-4 w-3/4 mx-auto">
//               Call us to speak to a member of our team. We are always happy to
//               help.
//             </p>
//             <Link href={"tel:+917599990331"}>
//               <span className="text-blue-600 font-bold text-lg hover:underline hover:underline-offset-2">
//                 +91 7599990331
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Post } from "@/utils/api";
import { toast } from "react-toastify";

const images = [
  { width: 100, url: "/assets/logo/services/nextjs.png" },
  { width: 70, url: "/assets/logo/services/blockchain.png" },
  { width: 70, url: "/assets/logo/services/bubble.png" },
  { width: 80, url: "/assets/logo/services/reactjs.png" },
  { width: 90, url: "/assets/logo/services/ios.png" },
  { width: 100, nograyscale: true, url: "/assets/logo/services/aws.png" },
  { width: 120, url: "/assets/logo/services/nodejs.png" },
  { width: 70, url: "/assets/logo/services/group.png" },
  { width: 50, url: "/assets/logo/services/android.png" },
  { width: 90, nograyscale: true, url: "/assets/logo/services/53.png" },
];

interface FormValues {
  fullName: string;
  email: string;
  services: string[];
  projectDescription: string;
}

const GetStartedForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormValues>({
    fullName: "",
    email: "",
    services: [],
    projectDescription: "",
  });

  const [errors, setErrors] = useState<FormValues>({
    fullName: "",
    email: "",
    services: [],
    projectDescription: "",
  });

  // Services options
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
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email is required.";
    }
    if (formData.services.length === 0) {
      newErrors.services = ["Please select at least one service."];
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setErrors({
        fullName: "",
        email: "",
        services: [],
        projectDescription: "",
      });
      const response: any = await Post("/api/start-project", formData);
      if (response) toast.success("Form saved successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setFormData({
        fullName: "",
        email: "",
        services: [],
        projectDescription: "",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover pt-28 2xl:pt-40 pb-20 bg-center flex items-center justify-center lg:px-20 2xl:px-28 3xl:px-36 4xl:px-56 5xl:px-64"
      style={{ backgroundImage: "url('/assets/home/banner.jpg')" }} // Change to your background image path
    >
      <div className="p-4 md:p-8 w-full">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 2xl:gap-24 3xl:gap-28 4xl:gap-96">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-5xl md:text-7xl 3xl:text-8xl mb-6 font-medium">
              Get Started
            </h1>
            <p className="text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-4 font-extralight">
              Partner with Volvit for your next website project. Simply fill out
              the form and tell us about your vision. We&apos;re here to bring
              your ideas into a stunning digital experience.
            </p>
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-5 py-5 gap-10 justify-center items-center">
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <Image
                      priority
                      height={100}
                      src={image?.url}
                      width={image?.width}
                      alt={`image-${index}`}
                      className={`w-full ${
                        image?.nograyscale ? "" : "brightness-[.5]"
                      } `}
                    />
                  </div>
                );
              })}
            </div>
            <button
              type="submit"
              className="py-3 justify-center 2xl:py-4 px-5 w-full mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-[#4280C4] hover:via-[#81B6EF] hover:to-[#4280C4] text-white border border-white/40 mt-6 text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
            >
              <span className="text-xl 2xl:text-2xl 3xl:text-2xl">
                Book A Call
              </span>{" "}
              <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
            </button>
          </div>

          {/* Right section - Form */}
          <div className="w-full lg:w-1/2 bg-black p-6 md:p-8 2xl:p-12 3xl:p-16 4xl:p-20 border border-b-4 border-white/40 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-lg text-white 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mb-4 font-extralight">
                Complete the form, and a member of our team will reach out to
                you within 24hrs.
              </p>
              <div className="grid grid-cols-1 gap-6 2xl:gap-10 4xl:gap-14 md:grid-cols-2">
                {/* Full name */}
                <div>
                  <label htmlFor="fullName" className="text-white 2xl:text-2xl 3xl:text-3xl">
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 2xl:p-3 3xl:p-4 mt-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-white 2xl:text-2xl 3xl:text-3xl">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 2xl:p-3 3xl:p-4 mt-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <label className="text-white 2xl:text-2xl 3xl:text-3xl">
                  What services are you interested in?*
                </label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {servicesOptions.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServicesChange(service)}
                      className={`px-4 py-2 rounded-lg text-sm md:text-base 2xl:text-xl 3xl:text-2xl text-white ${
                        formData.services.includes(service)
                          ? "bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4]"
                          : "bg-gray-700"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.services.join(", ")}
                  </p>
                )}
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className="text-white 2xl:text-2xl 3xl:text-3xl">
                  Share a brief project description (optional)
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="w-full p-2 2xl:p-3 3xl:p-4 mt-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="py-3 justify-center 2xl:py-4 px-5 w-full mx-auto mb-5 cursor-pointer flex gap-2 items-center rounded-lg 2xl:rounded-xl bg-gradient-to-r from-[#4280C4] via-[#81B6EF] to-[#4280C4] text-white text-base 2xl:text-2xl transition-all duration-200 ease-in-out"
              >
                <span className="text-xl 2xl:text-2xl 3xl:text-2xl">
                  Start a Project
                </span>{" "}
                <BsArrowRightCircleFill className="text-2xl 2xl:text-3xl 3xl:text-4xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
