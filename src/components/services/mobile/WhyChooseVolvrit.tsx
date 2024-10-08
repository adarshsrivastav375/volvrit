import Image from "next/image";

const WhyChooseVolvrit = () => {
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
  const data = [
    {
      id: 1,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobilelogo3.png",
      title: "Experienced Developers",
      description:
        "The developer&apos;s team has years of experience building apps, they spent years doing the same thing.",
    },
    {
      id: 2,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobilelogo2.png",
      title: "Complete Solutions",
      description:
        "From the idea to launching an app, we will be taking care of everything. We also provide support after the project to make sure that your app runs smoothly.",
    },
    {
      id: 3,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobilelogo1.png",
      title: "Custom Solutions",
      description:
        "We are here for the development of custom mobile applications for the specific apps .",
    },
    {
      id: 4,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobilelogo3.png",
      title: "On Time Delivery",
      description:
        "We ensure that we get the job done right so that your app gets delivered exactly on time without compromising the quality of it.",
    },
    {
      id: 5,
      imageUrl: "https://volvrit.s3.ap-south-1.amazonaws.com/mobilelogo2.png",
      title: "Affordable Rates",
      description:
        "We work for high-end services that match up well within your budge.",
    },
  ];
  return (
    <>
      <div className="relative text-center max-w-9xl mx-auto py-10 px-4 md:px-6 lg:px-20">
        <h4 className="text-3xl w-full mx-auto md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-medium">
          Why Choose Volvrit for Your <br /> Mobile App Development?
        </h4>
        <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-3/4 mx-auto my-8">
          There are hundreds and thousands of mobile app development companies
          in India, but there is a reason why Volvrit is good at everything.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {data?.map((item: any) => {
            return (
              <div
                key={item?.id}
                className="text-left rounded-xl bg-white border border-slate-200 shadow-corner p-6"
              >
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={item?.imageUrl}
                    alt={item?.title}
                    className="w-16 aspect-square object-contain"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-xl font-semibold">{item?.title}</h2>
                </div>
                <p className="font-normal mt-5">{item?.description}</p>
              </div>
            );
          })}
        </div>
        <div className="pt-16">
          <h4 className="text-3xl w-full mx-auto md:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-medium">
            Our Process of App Development
          </h4>
          <p className="text-base lg:text-lg font-light px-4 md:px-0 md:w-3/4 mx-auto my-8">
            We follow a clear process from conceptualization to deployment,
            which guarantees that your app is developed on schedule and without
            any issue. We begin with an understanding of your business,
            understanding your target audience, and what you want your
            application to achieve.
          </p>
          <div className="flex justify-between items-center gap-20 px-20">
            <div className="w-1/2 text-left">
              <h4 className="text-3xl md:text-4xl font-medium 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl mb-5">
                Designing
              </h4>
              <p className="text-lg 2xl:text-xl 3xl:text-2xl w-3/4">
                We have an experienced “ Ui/Ux” team that experts in crafting
                intuitive and attractive design that your customers.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                width={100}
                unoptimized
                priority
                height={100}
                src="https://volvrit.s3.ap-south-1.amazonaws.com/mobiledevelopment_lifecycle.png"
                alt="Mobile App Development Process"
                className="w-full aspect-ratio object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B2D52] text-center text-white">
        <div className="max-w-9xl mx-auto py-16 px-4 md:px-6 lg:px-20">
          <h4 className="text-2xl md:text-3xl font-medium 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl mb-5">
            Modern Technology Stack for Optimal Results
          </h4>
          <p className="text-base 2xl:text-lg 3xl:text-xl w-2/3 mx-auto font-light opacity-80">
            We use the latest technologies to ensure your SaaS application is
            secure, scalable, and efficient.
          </p>
          <div className="flex flex-wrap pt-5 justify-center items-center lg:px-20">
            {images.map((image, index) => {
              return (
                <div
                  className="md:w-[10%] lg:w-[16%] px-3 lg:px-0 py-3 grayscale"
                  key={index}
                >
                  <Image
                    priority
                    height={100}
                    src={image?.url}
                    width={image?.width}
                    alt={`image-${index}`}
                    className={`h-fit w-12 md:w-20 lg:w-auto 2xl:w-28 3xl:w-36 4xl:w-48 ${
                      image?.nograyscale ? "" : "opacity-40"
                    } `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseVolvrit;
