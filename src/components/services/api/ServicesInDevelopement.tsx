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
    <div className="bg-[#0B2D52] text-white">
      <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-20 text-center pt-20 pb-64">
        <p className="text-sm font-medium">― API Integration</p>
        <h3 className="text-2xl md:text-4xl inline font-light mb-4 leading-tight">
          Choose from a list of
          <span className="font-semibold"> Verification APIs</span>
        </h3>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 px-4 md:px-6 lg:px-20">
          {services.map((service: any) => {
            return (
              <div
                key={service.id}
                className="shadow-md border-t-2 border-l-2 border-r-[0.5px] border-b-[0.5px] border-slate-200 border-opacity-70 p-5 pb-20 rounded-2xl bg-gradient-to-b from-[#1E2A3A] via-[#183254] to-[#1E2A3A]"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={service.imageUrl}
                    alt={service?.title}
                    width={72}
                    height={72}
                    className="h-auto object-cover"
                  />
                  <p className="text-left text-lg">{service?.title}</p>
                </div>
                <ul className="text-left pt-5 text-sm font-light space-y-2">
                  {service.points.map((point: any, index: number) => {
                    return <li key={index}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesInDevelopement;
