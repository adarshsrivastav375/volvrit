import React from "react";
import Image from "next/image";

const ProductDevelopment: React.FC = () => {
  const steps = [
    {
      title: "Market Research and Analysis",
      description:
        "It is done on what the customer would like and the market trend by checking the approach of competitors to design the product.",
    },
    {
      title: "User-Centered Design",
      description:
        "The designs keep focusing on user experience and interfaces through the solving of real-time problems and hence bring smooth functions.",
    },
    {
      title: "Agile Development Process",
      description:
        "Agile approach that, in the development phase, follows iterative and flexible development, which always ensures delivery with no time.",
    },
    {
      title: "Technology Stack Optimization",
      description:
        "Select the most appropriate and scalable technologies so that your product will be strong, secure, and future-ready.",
    },
    {
      title: "Quality Assurance and Testing",
      description:
        "Testing with enough power to make the product better than what the customer will experience.",
    },
    {
      title: "Support and Evolution",
      description:
        "Continue with regular support, review performance, and change with the shifting needs of the market that will make it current and competitive.",
    },
  ];

  return (
    <div className="container mx-auto p-4 lg:pt-20">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
        Product Development Strategy
      </h1>
      <p className="mb-8 md:mx-8 lg:mx-10 text-center">
        We base our strategy on the latest cutting-edge technology, agile
        methodologies, and user-centric design to bring innovative, scalable,
        and market-ready products for our clients, which surpass the
        expectations of clients.
      </p>
      <div className="relative flex justify-center items-center">
        <Image
          src={"/assets/banners/ZenBook-Duo-14-.svg"}
          width={1000}
          height={500}
          alt="Laptop"
          className="w-full"
        />
        <div className="absolute bg-gray-100 inset-0 grid grid-cols-1 grid-rows-1 gap-4 p-2 items-center rounded-sm mt-2 h-36  lg:mt-10 lg:h-fit mx-auto w-9/12">
          {/* {steps.map((step, index) => (
            <div key={index} className="bg-transparent lg:h-40 py-2">
              <h2 className="text-4xl text-gray-400 font-bold">
                {"0" + "" + index}
              </h2>
              <h2 className="text-norma font-semibold mb-2">{step.title}</h2>
              <p className="text-xs mb-4">{step.description}</p>
            </div>
          ))} */}
          <Image src={"/assets/banners/laptop_banner.png"} width={900} height={750} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopment;
