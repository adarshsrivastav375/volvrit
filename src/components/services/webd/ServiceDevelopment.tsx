import Image from "next/image";

const ServiceDevelopment = () => {
  const serviceDevelopment = [
    {
      id: 1,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/developer.png",
      title: "Experienced developers",
      description:
        "Our company chooses the well-experienced developers having many years of experience.",
    },
    {
      id: 2,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/time-cop.png",
      title: "In time delivery",
      description:
        "The projects is completed as scheduled with not a single compromise in the quality.",
    },
    {
      id: 3,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/custom-coding.png",
      title: "Custom Solutions",
      description:
        "We provide custom website development services according to your business needs.",
    },
    {
      id: 4,
      imageUrl:
        "https://volvrit.s3.ap-south-1.amazonaws.com/customer-service.png",
      title: "Customer Support",
      description:
        "We gives continuous support to ensure that your website functions to its optimal capacity.",
    },
  ];
  return (
    <div className="max-w-9xl mx-auto pb-16 text-center px-4 md:px-6 lg:px-20">
      <h4 className="text-3xl md:text-4xl font-semibold 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
        Our Website Development <br />
        Services
      </h4>
      <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto font-light">
        Here are some reasons why we are one of the best website development
        services companies in India:
      </p>
      <div className="grid grid-cols-4 gap-10 pt-10">
        {serviceDevelopment.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex flex-col justify-start items-center"
            >
              <Image
                src={item?.imageUrl}
                alt={item?.title}
                width={64}
                height={64}
                className="w-12 md:w-8 lg:w-14 h-fit object-contain"
              />
              <h4 className="text-lg md:text-lg my-3 font-bold text-nowrap leading-6 w-full lg:w-2/3 text-gray-800">
                {item?.title}
              </h4>
              <p className="text-base w-full">{item?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDevelopment;
