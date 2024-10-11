const WhatWeOffer = () => {
  const data = [
    {
      id: 1,
      title: "Cross-Platform App Development",
      description:
        "We offer cross-platform development solutions, enabling businesses to launch applications that are compatible with both Android and iOS. This allows for reduced development costs and consistent functionality across platforms, ensuring a smooth user experience.",
    },
    {
      id: 2,
      title: "Android App Development",
      description:
        "Our developers have good experience in developing full Android applications that are rich in feature functionality across a wide and varying range of devices and scalable to millions of users across the globe with high-performance software running on several different Android versions.",
    },
    {
      id: 3,
      title: "iOS App Development",
      description:
        "We build highly secured, flexible applications for iPhones and iPads. They can integrate pretty easily with the ecosystem of Apple, assuring compliance to the app store requirements as they assure a premium user experience.",
    },
  ];
  return (
    <div className="relative text-white">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://volvrit.s3.ap-south-1.amazonaws.com/mobileframe2.png')",
        }}
      ></div>
      <div className="relative text-center max-w-9xl mx-auto pt-10 pb-4 md:py-10 px-4 md:px-6 lg:px-20">
        <h4 className="text-3xl w-full mx-auto md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-medium">
          We Offering Custom Mobile
          <br /> App Development Services
        </h4>
        <p className="text-base lg:text-lg font-extralight px-4 md:px-0 md:w-4/5 mx-auto my-8">
          Each business is unique and has its particular requirement. We create
          custom mobile app development for such businesses. We design
          applications specifically for your business to reach your customers.
          Our custom apps are created to help you stand out from your
          competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10 lg:px-10">
          {data?.map((item: any) => {
            return (
              <div key={item?.id} className="text-center md:text-left rounded-xl bg-[#355A81] p-5 md:p-6 lg:p-8">
                <h2 className="text-3xl md:text-2xl font-semibold mb-4">{item?.title}</h2>
                <p className="font-extralight">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
