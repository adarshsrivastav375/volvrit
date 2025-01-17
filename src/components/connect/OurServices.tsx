import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Path to the service icon
}

const services: Service[] = [
  {
    id: 1,
    title: "Mobile App UI/UX Design",
    description:
      "We design highly aesthetic and user-friendly mobile application designs that facilitate user engagement.",
    icon: "/assets/banners/UI.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We create high-performance mobile applications that meet your business objectives from concept to deployment.",
    icon: "/assets/banners/dev.svg",
  },
  {
    id: 3,
    title: "Consultation",
    description:
      "Collaboration among our expert members helps us truly understand your organization's specific need and provide clear insights.",
    icon: "/assets/banners/consultation.svg",
  },
  {
    id: 4,
    title: "Mobile App Maintenance",
    description:
      "We keep your app running smoothly with regular updates and smooth functionality support.",
    icon: "/assets/banners/maintain.svg",
  },
  {
    id: 5,
    title: "Mobile App QA Testing",
    description:
      "With strict testing procedures, our apps deliver smoother user experience to you.",
    icon: "/assets/banners/mobile.svg",
  },
  {
    id: 6,
    title: "More Services Coming Soon",
    description: "Stay tuned for more amazing services tailored to your needs.",
    icon: "/assets/banners/mobile.svg",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white relative group shadow-lg rounded-xl p-6 flex flex-col items-start text-left overflow-hidden"
            >
              <span className="inline-block h-24 w-44 absolute items-center rotate-[-35deg] rounded-full right-[-5%] top-[-15%] group-hover:top-0 group-hover:right-0  group-hover:scale-[4.5] transition-transform ease-in-out bg-[#7187FF] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"></span>
              <span className="inline-block h-24 w-40 absolute items-center rotate-[-35deg] rounded-full right-[-12%] top-[-15%] group-hover:top-[110%] group-hover:right-[-12%]  group-hover:scale-[3] transition-transform ease-in-out bg-[#DDE2FF] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"></span>
              <div className="w-16 h-16 flex items-center z-10 justify-center bg-transparent border group-hover:border-white rounded-full mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-white text-gray-800 mb-2 z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white z-10">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
