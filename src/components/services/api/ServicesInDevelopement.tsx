import Image from "next/image";

const ServicesInDevelopement = () => {
  const services = [
    {
      id: 1,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
      ],
    },
    {
      id: 2,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "PAN Verification API",
      ],
    },
    {
      id: 3,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
      ],
    },
    {
      id: 4,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
      ],
    },
    {
      id: 5,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
      ],
    },
    {
      id: 6,
      title: "Identity Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Aadhaar Verification API",
        "PAN Verification API",
        "Aadhaar Verification API",
        "PAN Verification API",
      ],
    },
  ];
  return (
    <div className="container mx-auto lg:px-20 text-center mb-12 md:mb-16">
      <p className="text-sm font-medium mb-2 mt-10 text-primary">
        ― API Integration
      </p>
      <h3 className="text-2xl md:text-4xl inline font-light mb-4 leading-tight">
        Choose from a list of
        <span className="text-primary font-semibold"> Verification APIs</span>
      </h3>
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 px-4 md:px-6 lg:px-20">
        {services.map((service: any) => {
          return (
            <div key={service.id} className="shadow-md p-5 rounded-2xl">
              <div className="flex gap-5 items-center">
                <Image
                  src={service.imageUrl}
                  alt={service?.title}
                  width={50}
                  height={50}
                  className="w-10 h-auto object-contain"
                />
                <p>{service?.title}</p>
              </div>
              <ul className="text-left pt-2 text-sm font-light space-y-2">
                {service.points.map((point: any, index: number) => {
                  return <li key={index}>{point}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesInDevelopement;
