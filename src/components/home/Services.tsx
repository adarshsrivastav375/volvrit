import Image from "next/image";

const services = [
  {
    id: 1,
    title: "APP DEVELOPMENT",
    description:
      "We have developed secure and user-friendly applications for both iOS and Android to give you the best experience with numerous business requirements.",
    image: "/assets/home/mobile.png",
    bgClass: "bg-primary text-white",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    description:
      "Our best-in-class dynamic responsive websites focus upon business needs with a promise for maximum performance, user experience, as well as cross-platform compatibility.",
    image: "/assets/home/web.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 3,
    title: "DIGITAL MARKETING",
    description:
      "We target better online presence through particular strategies like SEO, Social Media Marketing, and Content Marketing to drive traffic as well as engagement.",
    image: "/assets/home/digital.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
  {
    id: 4,
    title: "CRM DEVELOPMENT",
    description:
      "Development of customized CRM solutions to set up an efficient customer interaction model, efficient sales processes, and improvement of client relationship management.",
    image: "/assets/home/crm.png",
    bgClass: "bg-white text-black hover:bg-primary hover:text-white",
  },
];

const Services = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 p-4 md:p-6 lg:py-20 lg:px-28 container mx-auto bg-white">
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 container mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${service.bgClass} cursor-pointer pt-4 rounded-xl shadow-md transition-all duration-200 ease-linear`}
          >
            <div className="px-3">
              <Image
                width={40}
                height={40}
                alt={service.title}
                className="object-contain"
                src={service.image}
              />
            </div>
            <h3 className="text-lg font-bold p-4">{service.title}</h3>
            <p className="text-xs px-4 pb-4">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="lg:w-1/2">
        <video
          loop
          muted
          autoPlay
          playsInline
          src={"/assets/video/home/smartphone.mp4"}
          poster={"/assets/video/home/smartphone.mp4#t=0.1"}
          className="w-full h-[50vh] bg-black md:h-full object-cover rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Services;
