"use client";
import React, { useState } from "react";
import { BsDash, BsDashCircle } from "react-icons/bs";
import { IoIosAdd, IoIosAddCircleOutline } from "react-icons/io";

export default function Faq2() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="container mx-auto px-6 lg:p-16 space-y-4 ">
      <div className="flex flex-col items-start justify-center">
        <h1
          className={`text-4xl text-white  font-extrabold  leading-[3.3rem]   `}
        >
          Have Questions?
        </h1>
      </div>
      {[
        {
          question:
            "What particular AR/VR services have you implemented with Volvrit?",
          answer:
            "Our team at Volvrit has successfully implemented various innovative AR/VR services like 3D modelling, virtual tours, training modules, and interactive experiences for clients across various industries. Our engineers have collaborated closely with clients to bring their visions into reality, delivering world-class technology solutions according to their requirements",
        },
        {
          question: "How did Volvrit enhance your AR/VR capabilities?",
          answer:
            " Volvrit has also enhanced your AR/VR solutions by providing creative and scalable solutions. Their capability of developing customized AR experiences and VR simulations helped us simplify our processes and provide immensely interactive content to our clients, enhancing overall user interaction and experience.",
        },
        {
          question:
            "Which industries have our AR/VR solutions with Volvrit impacted?",
          answer:
            "We have offered AR/VR solutions across various sectors such as real estate, healthcare, education, entertainment, and retail. With the assistance of Volvrit, we were able to develop virtual property tours, interactive medical training modules, virtual classrooms, and interactive retailing experiences, to mention a few, with all of them being an unmitigated success",
        },
        {
          question:
            "How does Volvrit's technology enable customization in AR/VR projects?",
          answer:
            "Volvrit technology is highly versatile and supports tailor-made solutions for specific business needs. Through customer feedback and understanding their vision, Volvrit helped us create tailored AR/VR experiences, from bespoke virtual worlds to interactive elements that are precise specifications, to enhance user engagement",
        },
        {
          question:
            "How does Volvrit's technology enable customization in AR/VR projects?",
          answer:
            "AR/VR service integration via Volvrit has seen higher customer engagement, retention rates, and better user experiences. For instance, our virtual showroom has witnessed 30% more engagement of visitors, whereas VR training modules have cut down onboarding by 25%. Such statistics reflect the success of solutions via Volvrit",
        },
      ].map((faq, index) => (
        <div key={index} className="rounded">
          <button
            className={`w-full text-left px-4 p-10 rounded-xl flex justify-between items-center   border-gray-800 border hover:bg-[#1262A1] hover:text-gray-50 ${"bg-[#003070] text-gray-50"}`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <span className="text-xl">
              {openIndex === index ? (
                <BsDashCircle width={16} height={16} />
              ) : (
                <IoIosAddCircleOutline width={16} height={16} />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden text-gray-100 ${
              openIndex === index
                ? "max-h-40 p-4 bg-transparent "
                : "max-h-0 p-0"
            }`}
          >
            {openIndex === index && <p className="text-lg">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
