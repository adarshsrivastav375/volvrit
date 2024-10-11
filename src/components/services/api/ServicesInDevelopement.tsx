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
        "Aadhaar to PAN API",
        "PAN Validation API",
        "Voter ID Verification API",
        "DL Verification API",
        "Passport Verification API",
        "Vehicle RC Verification API",
        "Chassis Number To RC API",
        "RC With Financer Details API",
        "Aadhaar Masking API",
      ],
    },
    {
      id: 2,
      title: "Business & Financial Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "GST OTP Verification API",
        "GST Verification API",
        "GST To Phone Number API",
        "TAN Verification API",
        "Udyog Verification API",
        "Udyam Verification API",
      ],
    },
    {
      id: 3,
      title: "UAE Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Emirates ID Verification API",
        "UAE TRN Verification API",
        "UAE DL Verification API",
      ],
    },
    {
      id: 4,
      title: "Income Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: ["Bank Account Verification API", "EPFO API", "Form 26AS API"],
    },
    {
      id: 5,
      title: "Credit Score Check",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Credit Score Check With OTP API",
        "Experian Credit Score API",
        "Equifax Credit Score Check API",
      ],
    },
    {
      id: 6,
      title: "Company Verification APIs",
      imageUrl: "/assets/api/api_dev_logo1.png",
      points: [
        "Company Suite API",
        "Company Detail BY CIN Number API",
        "Company Director Profile CIN Number API",
        "Company List Search API",
        "DIN API - Director Search BY DIN",
      ],
    },
  ];

  return (
    <div className="bg-[#0B2D52] text-white">
      <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-20 text-center pt-12 md:pt-20 pb-64">
        <p className="text-sm font-medium">― API Integration</p>
        <h3 className="text-2xl md:text-4xl inline font-light mb-4 leading-tight">
          Choose from a list of
          <span className="font-semibold"> Verification APIs</span>
        </h3>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 md:px-6 lg:px-20">
          {services.map((service: any) => {
            return (
              <div
                key={service.id}
                className="shadow-md border-t-2 border-l-2 border-slate-100/50 border-opacity-70 p-5 rounded-2xl bg-gradient-to-b from-[#1E2A3A] via-[#183254] to-[#1E2A3A]"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={service.imageUrl}
                    alt={service?.title}
                    width={90}
                    height={90}
                    className="w-fit object-cover"
                  />
                  <p className="text-left text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                    {service?.title}
                  </p>
                </div>
                <ul className="text-left lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl pt-5 text-sm font-light space-y-2">
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
